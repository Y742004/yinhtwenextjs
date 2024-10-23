import React from 'react';
import type { SVGProps } from 'react';

export function LikeIcon({size, props}: {
    size?: number;
    props?: SVGProps<SVGSVGElement>;
}) {
	return (<svg xmlns="http://www.w3.org/2000/svg" width={size|| "1em"} height={size|| "1em"} viewBox="0 0 14 14" {...props}><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M1.046 5.814h2.351v6.26h-2.35a.496.496 0 0 1-.497-.496V6.31a.496.496 0 0 1 .496-.496"></path><path d="m3.397 5.814l2.52-4.028a1.08 1.08 0 0 1 .933-.516a1.1 1.1 0 0 1 1.14 1.09v2.887h4.356a1.14 1.14 0 0 1 1.091 1.31l-.793 5.119a1.13 1.13 0 0 1-1.121.992H5.014c-.31.001-.615-.07-.892-.208l-.715-.357m-.01-6.289v6.26"></path></g></svg>);
}