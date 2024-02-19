import {
  IMenuItem,
  INewItem,
  ISocialItem,
  ITourItem,
  ITrackItem,
} from './interfaces';

export const MENU: IMenuItem[] = [
  {
    name: 'ГЛАВНАЯ',
    link: '',
  },
  {
    name: 'КОНЦЕРТЫ',
    link: 'tour',
  },
  {
    name: 'ТВОРЧЕСТВО',
    link: 'atracks',
  },
  {
    name: 'НОВОСТИ',
    link: 'news',
  },
];

export const SOCIALS: ISocialItem[] = [
  {
    icon: 'youtube',
    link: 'https://www.youtube.com/channel/UCCzp3DWpSc0s5wXYDghjM9A',
  },
  {
    icon: 'twitter',
    link: 'https://twitter.com/norimyxxxo',
  },
  {
    icon: 'applemusic',
    link: 'https://music.apple.com/pl/artist/oxxxymiron/301601116',
  },
  {
    icon: 'tiktok',
    link: 'https://www.tiktok.com/@oxxxymiron',
  },
  {
    icon: 'instagram',
    link: 'https://www.instagram.com/norimyxxxo',
  },
  {
    icon: 'spotify',
    link: 'https://open.spotify.com/artist/1gCOYbJNUa1LBVO5rlx0jB',
  },
];

export const tourItems: ITourItem[] = [
  {
    date: '12/10/2024',
    clubName: 'ONYX',
    location: 'Saratov, Russia',
  },
  {
    date: '12/10/2024',
    clubName: 'ONYX',
    location: 'Saratov, Russia',
  },
  {
    date: '12/10/2024',
    clubName: 'ONYX',
    location: 'Saratov, Russia',
  },
  {
    date: '12/10/2024',
    clubName: 'ONYX',
    location: 'Saratov, Russia',
  },
  {
    date: '12/10/2024',
    clubName: 'ONYX',
    location: 'Saratov, Russia',
  },
];

export const trackItems: ITrackItem[] = [
  {
    image: `${process.env.PUBLIC_URL}/images/track1.png`,
    track: '',
    releaseDate: '2023.04.15',
    trackName: 'лига опасного интернета',
  },
  {
    image: `${process.env.PUBLIC_URL}/images/track2.png`,
    track: '',
    releaseDate: '2020.08.24',
    trackName: '1$ klass',
  },
  {
    image: `${process.env.PUBLIC_URL}/images/track3.png`,
    track: '',
    releaseDate: '2022.02.12',
    trackName: 'В долгий путь',
  },
];

export const newItems: INewItem[] = [
  {
    image: `${process.env.PUBLIC_URL}/images/track1.png`,
    title: 'title',
  },
  {
    image: `${process.env.PUBLIC_URL}/images/track2.png`,
    title: 'titile',
  },
  {
    image: `${process.env.PUBLIC_URL}/images/track3.png`,
    title: 'titile',
  },
  {
    image: `${process.env.PUBLIC_URL}/images/track1.png`,
    title: 'title',
  },
  {
    image: `${process.env.PUBLIC_URL}/images/track2.png`,
    title: 'titile',
  },
  {
    image: `${process.env.PUBLIC_URL}/images/track3.png`,
    title: 'titile',
  },
];
