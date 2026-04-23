import { useEffect, useState } from 'react';
import MemberLink from './MemberLink';

interface GithubMember {
  login: string;
  avatar_url: string;
}

interface MemberData {
  data: GithubMember[];
  etag: string | null;
  timestamp: number;
}

const cacheKey = 'overextendedMembers';
const cacheExpiry = 24 * 60 * 60 * 1000;

const sponsor = {
  thelindat: 'thelindat',
  LukeWasTakenn: 'lukewastaken',
  DokaDoka: 'dokadoka',
  juddisjudd: 'ohitsjudd',
  jag3dagster: `jag3dagster`,
  'tom-osborne': `stanocs5`,
  Skryptific: 'lukeeuro',
};

const priorityOrder = ['thelindat', 'LukeWasTakenn'];

async function FetchMembers() {
  const raw = localStorage.getItem(cacheKey);
  const members: MemberData = raw ? JSON.parse(raw) : {};
  const isCacheExpired = members.timestamp ? new Date().getTime() - members.timestamp > cacheExpiry : true;

  if (!isCacheExpired) {
    console.log('Using cached members data:', members.data);
    return members;
  }

  const headers: Record<string, string> = {};
  if (members.etag) headers['If-None-Match'] = members.etag;

  const response = await fetch(`https://api.github.com/orgs/overextended/members`, { headers });

  if (response.status === 304) return members;

  members.data = await response.json();
  members.etag = response.headers.get('ETag');
  members.timestamp = new Date().getTime();

  members.data = [
    ...priorityOrder
      .map((login) => {
        const foundMember = members.data.find((member) => member.login === login);
        if (!foundMember) {
          console.warn(`Member ${login} not found in API response`);
        }
        return foundMember;
      })
      .filter((member): member is GithubMember => !!member),
    ...members.data.filter((member) => !priorityOrder.includes(member.login)),
  ];

  console.log('Sorted members data:', members.data);

  localStorage.setItem(cacheKey, JSON.stringify(members));
  console.log(`Fetched, sorted, and cached data (etag ${members.etag})`, members.timestamp);

  return members;
}

const DisplayMembers = () => {
  const [members, setMembers] = useState<MemberData | null>(null);

  useEffect(() => {
    (async () => setMembers(await FetchMembers()))();
  }, []);

  return (
    <>
      {members?.data && (
        <div className="mt-4 grid grid-cols-2 place-items-center gap-y-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {members.data.map((member) =>
            MemberLink({
              image: member.avatar_url,
              name: member.login,
              sponsor: sponsor[member.login],
            })
          )}
        </div>
      )}
    </>
  );
};

export default DisplayMembers;
