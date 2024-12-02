import React from 'react';
import type { SVGProps } from 'react';

export function TaskBarIcon({size, props}: {
    size?: number;
    props?: SVGProps<SVGSVGElement>;
}) {
	return (<svg xmlns="http://www.w3.org/2000/svg" width={size||"1em"} height={size||"1em"} viewBox="0 0 48 48" {...props}><rect width={22.05} height={32.42} x={12.98} y={7.79} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" rx={2}></rect><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M35 38.18h5.95a2.6 2.6 0 0 0 2.59-2.59V12.41a2.6 2.6 0 0 0-2.59-2.59H35"></path><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M35.02 34.8h5.32V15.93h-5.32M13 38.18H7.09a2.6 2.6 0 0 1-2.59-2.59V12.41a2.6 2.6 0 0 1 2.59-2.59H13"></path><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12.98 34.8H7.66V15.93h5.32m2.65-3.39h16.75v24.21H15.63z"></path></svg>);
}