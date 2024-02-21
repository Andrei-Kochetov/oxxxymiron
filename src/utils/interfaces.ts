import { ReactNode } from 'react';

export interface IMenuItem {
  name: string;
  link: string;
}

export interface ISocialItem {
  icon: string;
  link: string;
}

export interface ITourItem {
  date: string;
  clubName: string;
  location: string;
  sys: {
    id: string;
  };
}

export interface ITrackItem {
  releaseDate: string;
  trackName: string;
  description: string;
  image: {
    url: string;
  };
  track: {
    url: string;
  };
  sys: {
    id: string;
  };
}

export interface ITrackProps {
  image: {
    url: string;
  };
  track: {
    url: string;
  };
  releaseDate: string;
  trackName: string;
  isPlaying: boolean;
  currentTrack: string | null;
  onClick: (track: string) => void;
}

export interface INewsItem {
  title: string;
  image: {
    url: string;
  };
}

export interface IIcon {
  name: string;
  className?: string;
  size?: number;
}

export interface ISection {
  children: ReactNode;
  className?: string;
}

export interface ISectionTitle {
  children: string;
}

export interface ISlider {
  slides: INewsItem[];
}
