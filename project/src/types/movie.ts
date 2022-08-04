export type Rating = {
  score: number;
  level: string;
  count: number;
}

export type Description = {
  text: string[];
  director: string;
  starring: string[];
}

export type Video = {
  src: string;
  poster: string;
}

export type imgSrc = {
  card: string;
  bg: string;
  poster: string;
}

export type Movie = {
  id: string,
  title: string;
  genre: string,
  year: number;
  video: Video;
  imgSrc: imgSrc;
  rating: Rating;
  description: Description;
}

export type Movies = Movie[];
