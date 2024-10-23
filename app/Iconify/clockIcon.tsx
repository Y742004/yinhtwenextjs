import React from 'react';
import type { SVGProps } from 'react';

export function ClockIcon({size, props}: {
    size?: number;
    props?: SVGProps<SVGSVGElement>;
}) {
	return (<svg xmlns="http://www.w3.org/2000/svg" width={size || "1em"} height={size || "1em"} viewBox="0 0 1024 1024" {...props}><path fill="currentColor" d="M512 896a384 384 0 1 0 0-768a384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896a448 448 0 0 1 0 896"></path><path fill="currentColor" d="M480 256a32 32 0 0 1 32 32v256a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32"></path><path fill="currentColor" d="M480 512h256q32 0 32 32t-32 32H480q-32 0-32-32t32-32"></path></svg>);
}