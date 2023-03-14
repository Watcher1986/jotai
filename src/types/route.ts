export interface IRoute {
  path: string;
  key: string;
  component: React.FC;
  name: string;
  type: string;
}
