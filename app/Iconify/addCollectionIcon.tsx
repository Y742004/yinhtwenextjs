import React from 'react';
import type { SVGProps } from 'react';

export function AddIcon({size, props}: {
    size?: number;
    props?: SVGProps<SVGSVGElement>;
}) {
	return (<svg xmlns="http://www.w3.org/2000/svg" width={size || "1em" } height={size || "1em" } viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M18 20v-3h-3v-2h3v-3h2v3h3v2h-3v3zM3 21q-.825 0-1.412-.587T1 19V5q0-.825.588-1.412T3 3h14q.825 0 1.413.588T19 5v5h-2V8H3v11h13v2z"></path></svg>);
}