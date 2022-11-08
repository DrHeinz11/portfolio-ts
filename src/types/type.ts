export type DataNavigation = Array<{
  navText: string;
  navRoute: string;
  id: number;
}>;

export type ReleaseCardData = {
  title: string
  paragraph: string
  route: string
  links: { deploy: string ,repository: string }
  imgUrl: string
  imgAlt: string
  id: number
};

export type HandleScrollTop = () => void

export interface WithKeyProps {
  key: React.Key;
}