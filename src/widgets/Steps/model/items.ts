import Wallet from 'shared/assets/images/wallet.png';
import Facebook from 'shared/assets/images/facebook.png';
import Twitter from 'shared/assets/images/twitter.png';

export interface IStepCard {
  image?: string;
  title?: string;
  description?: string;
  link?: string;
  btnLabel?: string;
  number?: number;
}

export const steps: IStepCard[] = [
  {
    image: Wallet,
    title: 'steps.wallet',
    description: 'steps.subtitle',
    link: '#',
    btnLabel: 'connect',
  },
  {
    image: Facebook,
    title: 'steps.facebook',
    description: 'steps.subtitle',
    link: '#',
    btnLabel: 'subscribe',
  },
  {
    image: Twitter,
    title: 'steps.twitter',
    description: 'steps.subtitle',
    link: '#',
    btnLabel: 'subscribe',
  },
];
