import { SVGProps } from 'react';

export interface NavigationLink {
  name: string;
  href: string;
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  current: boolean;
}
