import React from 'react';
import type { SVGProps } from 'react';

export function  MenuIcon({size, props}: {
    size?: number;
    props?: SVGProps<SVGSVGElement>;
}) {
	return (<svg xmlns="http://www.w3.org/2000/svg" width={size || "1em" } height={size || "1em" }  viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M3 18v-2h18v2zm0-5v-2h18v2zm0-5V6h18v2z"></path></svg>);
}