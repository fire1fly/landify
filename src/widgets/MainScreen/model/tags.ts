import decentraland from 'shared/assets/images/decentraland.png';
import sandbox from 'shared/assets/images/sandbox.png';
import roblox from 'shared/assets/images/roblox.png';

interface ITag {
  key: string;
  image: string;
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
