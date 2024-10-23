import React from 'react';
import type { SVGProps } from 'react';

export function ShareIcon({size, props}: {
    size?: number;
    props?: SVGProps<SVGSVGElement>;}) {
	return (<svg xmlns="http://www.w3.org/2000/svg" width={size||"1em"} height={size||"1em"} viewBox="0 0 16 16" {...props}><path fill="currentColor" d="M9.78 2.05a.5.5 0 0 1 .527.055l4.5 3.5a.5.5 0 0 1 .025.769l-4.5 4A.5.5 0 0 1 9.5 10V8.056c-.236.04-.544.11-.904.23c-.873.292-2.054.879-3.242 2.068a.5.5 0 0 1-.852-.4c.143-1.571.601-2.717 1.224-3.543a4.7 4.7 0 0 1 2.095-1.574A5.4 5.4 0 0 1 9.5 4.493V2.5a.5.5 0 0 1 .28-.45M2 5.5A2.5 2.5 0 0 1 4.5 3h2a.5.5 0 0 1 0 1h-2A1.5 1.5 0 0 0 3 5.5v6A1.5 1.5 0 0 0 4.5 13h6a1.5 1.5 0 0 0 1.5-1.5v-1a.5.5 0 0 1 1 0v1a2.5 2.5 0 0 1-2.5 2.5h-6A2.5 2.5 0 0 1 2 11.5z"></path></svg>);
}

