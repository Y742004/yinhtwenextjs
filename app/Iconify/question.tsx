import React from 'react';
import type { SVGProps } from 'react';

export function QuestionIcon({size, props}: {
    size?: number;
    props?: SVGProps<SVGSVGElement>;
}) {
	return (<svg xmlns="http://www.w3.org/2000/svg" width={size||"1em"} height={size||"1em"} viewBox="0 0 24 24" {...props}><g fill="none" stroke="currentColor" strokeWidth={2}><circle cx={12} cy={12} r={10}></circle><path strokeLinecap="round" d="M10 8.484C10.5 7.494 11 7 12 7c1.246 0 2 .989 2 1.978s-.5 1.483-2 2.473V13m0 3.5v.5"></path></g></svg>);
}