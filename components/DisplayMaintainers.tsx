import MemberLink from './MemberLink';

interface Maintainer {
  login: string;
  avatar_url: string;
  sponsor?: string;
}

const maintainers: Maintainer[] = [
  {
    login: 'Linden',
    avatar_url: 'https://avatars.githubusercontent.com/u/65407488?v=4',
    sponsor: 'thelindat',
  },
];

const DisplayMaintainers = () => (
  <div className="mt-4 grid grid-cols-2 place-items-center gap-y-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
    {maintainers.map(maintainer => (
      <MemberLink
        key={maintainer.login}
        image={maintainer.avatar_url}
        name={maintainer.login}
        sponsor={maintainer.sponsor}
      />
    ))}
  </div>
);

export default DisplayMaintainers;