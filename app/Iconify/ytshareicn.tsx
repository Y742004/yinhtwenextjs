import React from 'react';
import type { SVGProps } from 'react';

export function YTshareIcon({size, props}: {
    size?: number;
    props?: SVGProps<SVGSVGElement>;
}) {
	return (<svg xmlns="http://www.w3.org/2000/svg" width={size||"1em"} height={size||"1em"} viewBox="0 0 256 256" {...props}><path fill="currentColor" d="m236.24 107.76l-80-80A6 6 0 0 0 146 32v42.2c-54.48 3.59-120.39 55-127.93 120.66a10 10 0 0 0 17.23 8C46.56 190.85 87 152.6 146 150.13V192a6 6 0 0 0 10.24 4.24l80-80a6 6 0 0 0 0-8.48M158 177.52V144a6 6 0 0 0-6-6c-27.73 0-54.76 7.25-80.32 21.55a193.4 193.4 0 0 0-40.81 30.65c4.7-26.56 20.16-52 44-72.27C98.47 97.94 127.29 86 152 86a6 6 0 0 0 6-6V46.49L223.51 112Z"></path></svg>);
}