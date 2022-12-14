import * as React from 'react';

export const Path18 = () => {
    return (
        <svg
            width='231px'
            height='108px'
            viewBox='0 0 231 108'
            version='1.1'
            xmlns='http://www.w3.org/2000/svg'
        >
            <defs>
                <linearGradient
                    x1='50%'
                    y1='0%'
                    x2='50%'
                    y2='100%'
                    id='linearGradient-1'
                >
                    <stop stopColor='#223' offset='0%'></stop>
                    <stop stopColor='#334' offset='100%'></stop>
                </linearGradient>
                <path
                    d='M1,28.6123309 C12.1940104,21.5926446 29.4049479,15.0002183 52.6328125,8.83505199 C75.8606771,2.6698857 96.8164063,-0.268705745 115.5,0.0192776666 C134.772135,0.484983839 158.25,4.27773263 185.933594,11.397524 C213.617188,18.5173154 228.639323,24.2555844 231,28.6123309 L231,108 L0,108'
                    id='path-2'
                    stroke='#556'
                    strokeWidth='1'
                ></path>
                <filter
                    x='-0.9%'
                    y='-1.9%'
                    width='101.7%'
                    height='103.7%'
                    filterUnits='objectBoundingBox'
                    id='filter-3'
                >
                    <feGaussianBlur
                        stdDeviation='1.5'
                        in='SourceAlpha'
                        result='shadowBlurInner1'
                    ></feGaussianBlur>
                    <feOffset
                        dx='0'
                        dy='1'
                        in='shadowBlurInner1'
                        result='shadowOffsetInner1'
                    ></feOffset>
                    <feComposite
                        in='shadowOffsetInner1'
                        in2='SourceAlpha'
                        operator='arithmetic'
                        k2='-1'
                        k3='1'
                        result='shadowInnerInner1'
                    ></feComposite>
                    <feColorMatrix
                        values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0'
                        type='matrix'
                        in='shadowInnerInner1'
                    ></feColorMatrix>
                </filter>
            </defs>
            <g
                id='Archive'
                stroke='none'
                strokeWidth='1'
                fill='none'
                fillRule='evenodd'
            >
                <g id='Group-19'>
                    <g id='Path-18'>
                        <use
                            fill='url(#linearGradient-1)'
                            fillRule='evenodd'
                            xlinkHref='#path-2'
                        ></use>
                        <use
                            fill='black'
                            fillOpacity='1'
                            filter='url(#filter-3)'
                            xlinkHref='#path-2'
                        ></use>
                    </g>
                    <line
                        x1='8.5'
                        y1='29.5'
                        x2='223.5'
                        y2='29.5'
                        id='Line-4'
                        stroke='#334'
                        strokeLinecap='square'
                    ></line>
                    <line
                        x1='8.5'
                        y1='33.5'
                        x2='223.5'
                        y2='33.5'
                        id='Line-4'
                        stroke='#334'
                        strokeWidth='2'
                        strokeLinecap='square'
                    ></line>
                    <line
                        x1='8.5'
                        y1='26.5'
                        x2='223.5'
                        y2='26.5'
                        id='Line-4'
                        stroke='#334'
                        strokeWidth='0.5'
                        strokeLinecap='square'
                    ></line>
                </g>
            </g>
        </svg>
    );
};
