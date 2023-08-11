import decentraland from 'shared/assets/images/decentraland.svg';
import sandbox from 'shared/assets/images/sandbox.svg';
import roblox from 'shared/assets/images/roblox.svg';

interface ITag {
  key: string;
  image: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const tags: ITag[] = [
  {
    key: 'decentraland',
    image: decentraland,
  },
  {
    key: 'sandbox',
    image: sandbox,
  },
  {
    key: 'roblox',
    image: roblox,
  },
];
