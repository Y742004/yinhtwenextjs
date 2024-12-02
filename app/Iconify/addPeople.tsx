import React from 'react';
import type { SVGProps } from 'react';

export function AddPeopleIcon({size, props}: {
    size?: number;
    props?: SVGProps<SVGSVGElement>;
}) {
	return (<svg xmlns="http://www.w3.org/2000/svg" width={size||"1em"} height={size||"1em"} viewBox="0 0 28 28" {...props}><path fill="currentColor" d="M9.5 4a4.5 4.5 0 1 0 0 9a4.5 4.5 0 0 0 0-9m-3 4.5a3 3 0 1 1 6 0a3 3 0 0 1-6 0M20 6a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7m-2 3.5a2 2 0 1 1 4 0a2 2 0 0 1-4 0M4.25 15A2.25 2.25 0 0 0 2 17.25v.531a2 2 0 0 0 .017.242c.017.153.049.363.11.612a5.1 5.1 0 0 0 .867 1.815C4.008 21.803 5.942 23 9.5 23c1.531 0 2.762-.222 3.747-.582a7.5 7.5 0 0 1-.236-1.518c-.836.355-1.97.6-3.511.6c-3.192 0-4.633-1.053-5.306-1.95a3.6 3.6 0 0 1-.61-1.279a3 3 0 0 1-.083-.508l-.001-.018v-.495a.75.75 0 0 1 .75-.75h9.905a7.5 7.5 0 0 1 1.168-1.426A2.3 2.3 0 0 0 14.75 15zM27 20.5a6.5 6.5 0 1 1-13 0a6.5 6.5 0 0 1 13 0m-6-4a.5.5 0 0 0-1 0V20h-3.5a.5.5 0 0 0 0 1H20v3.5a.5.5 0 0 0 1 0V21h3.5a.5.5 0 0 0 0-1H21z"></path></svg>);
}