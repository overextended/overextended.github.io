import { useState, useEffect } from 'react'
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
  thelindat: `thelindat`,
  LukeWasTakenn: `lukewastaken`,
  DokaDoka: `dokadoka`,
  jag3dagster: `jag3dagster`,
}

async function FetchMembers() {
  const raw = localStorage.getItem(cacheKey);
  const members: MemberData = raw ? JSON.parse(raw) : {};
  const isCacheExpired = members.timestamp ? new Date().getTime() - members.timestamp > cacheExpiry : true;

  if (!isCacheExpired) return members;

  const headers = {}

  if (members.etag) headers['If-None-Match'] = members.etag;

  const response = await fetch(`https://api.github.com/orgs/overextended/members`, {
      headers: headers
  })

  if (response.status === 304) return members;

  members.data = await response.json();
  members.etag = response.headers.get('ETag');
  members.timestamp = new Date().getTime();

  localStorage.setItem(cacheKey, JSON.stringify(members));
  console.log(`fetched data and set cache (etag ${members.etag})`, members.timestamp)
  
  return members;
}

const DisplayMembers = () => {
  const [members, setMembers] = useState(null);

  useEffect(() => {
    (async() => setMembers(await FetchMembers()))()
  }, [])

  return (
    <>
      {members?.data && (
        <div className='grid md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 grid-cols-1 mt-4 gap-16 place-items-center'>
          {members.data.map((member) => MemberLink({ image: member.avatar_url, name: member.name ?? member.login, sponsor: sponsor[member.login] }))}
        </div>
      )}
    </>
  )
};

export default DisplayMembers;
