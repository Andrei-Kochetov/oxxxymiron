import {
  IMenuItem,
  ISocialItem,
} from './interfaces';

export const MAIN_URL: string =
  'https://graphql.contentful.com/content/v1/spaces/n393yj92g8uk/environments/master';

export const ACCESS_TOKEN = '_CFuRtqauZEkPGfQuANL892H8lMdAWV4o5NHVkcj1mQ';

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

