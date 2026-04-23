import MemberLink from './MemberLink';

interface Maintainer {
  login: string;
  avatar_url: string;
  sponsor?: string;
}

const maintainers: Maintainer[] = [
  {
    login: 'FjamZoo',
    avatar_url: 'https://avatars.githubusercontent.com/u/34508112?v=4',
    sponsor: 'fjamzoo',
  },
  {
    login: 'antond15',
    avatar_url: 'https://avatars.githubusercontent.com/u/71350868?v=4',
    sponsor: 'antond',
  },
  {
    login: 'ESK0',
    avatar_url: 'https://avatars.githubusercontent.com/u/8851795?v=4',
  },
];

const priorityOrder = ['FjamZoo', 'antond15', 'ESK0'];

const sortedMaintainers = [
  ...priorityOrder
    .map((login) => maintainers.find((m) => m.login === login))
    .filter((m): m is Maintainer => !!m),
  ...maintainers.filter((m) => !priorityOrder.includes(m.login)),
];

const DisplayMaintainers = () => (
  <div className="mt-4 grid grid-cols-2 place-items-center gap-y-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
    {sortedMaintainers.map(maintainer => (
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