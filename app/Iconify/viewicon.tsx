import React from 'react';
import type { SVGProps } from 'react';

export function ViewIcon({size, props}: {
    size?: number;
    props?: SVGProps<SVGSVGElement>}) {
	return (<svg xmlns="http://www.w3.org/2000/svg" width={size||"1em"}  height={size||"1em"} viewBox="0 0 24 24" {...props}><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}><path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0-4 0"></path><path d="M21 12q-3.6 6-9 6t-9-6q3.6-6 9-6t9 6"></path></g></svg>);
}