/**
 * MIT License
 *
 * Copyright (c) 2024, Brion Mario
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

'use client';

import {FC, PropsWithChildren, ReactElement} from 'react';
import {SayHola} from 'say-hola-react';
import siteConfig from '@/config/site';

export type HeroProps = PropsWithChildren<{}>;

const Hero: FC<HeroProps> = (): ReactElement => (
  <div className="w-full">
    <div className="flex justify-center">
      <button
        type="button"
        className="group relative mx-auto inline-block w-fit cursor-pointer rounded-full bg-neutral-50 p-px text-[10px] font-semibold leading-6 text-neutral-700 no-underline shadow-zinc-900 hover:shadow-2xl hover:shadow-red-500/50 sm:text-xs md:shadow-2xl dark:bg-neutral-700 dark:text-neutral-300"
        onClick={() => window.open(siteConfig.links.npm, '_blank', 'noopener,noreferrer')}
      >
        <span className="absolute inset-0 overflow-hidden rounded-full">
          <span className="absolute inset-0 rounded-full  opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </span>
        <div className="relative z-10 flex items-center space-x-2 rounded-full bg-neutral-100 px-4 ring-1 ring-red-600 dark:bg-neutral-800 ">
          <span className="flex items-center justify-center gap-1">
            Check out on{' '}
            <svg width="35" height="35" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <title>file_type_npm</title>
              <path
                d="M2,10.555H30v9.335H16v1.556H9.778V19.889H2Zm1.556,7.779H6.667V13.666H8.222v4.667H9.778V12.111H3.556Zm7.778-6.223v7.779h3.111V18.334h3.111V12.111Zm3.111,1.556H16v3.112H14.444Zm4.667-1.556v6.223h3.111V13.666h1.556v4.667h1.556V13.666h1.556v4.667h1.556V12.111Z"
                style={{fill: '#cb3837'}}
              />
            </svg>
          </span>
          <svg fill="none" height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.75 8.75L14.25 12L10.75 15.25"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
          </svg>
        </div>
        <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-neutral-400/0 via-neutral-400/90 to-neutral-400/0 transition-opacity duration-500 group-hover:opacity-40" />
      </button>
    </div>
    <div className="text-center">
      <h2 className="relative z-10 mx-auto mt-6 max-w-6xl text-center text-xl font-semibold md:text-3xl lg:text-6xl">
        <span
          data-br=":r1fg:"
          data-brr="1"
          style={{display: 'inline-block', verticalAlign: 'top', textDecoration: 'inherit', textWrap: 'balance'}}
        >
          Say
        </span>
      </h2>
      <SayHola as="h1" className="mt-5 text-9xl font-extrabold leading-tight tracking-tighter md:text-9xl" />
      <p className="md:text-md text-muted-foreground relative z-10 mx-auto mt-6 max-w-6xl text-center text-sm lg:text-xl">
        Simple library to say hello in different languages
      </p>
    </div>
  </div>
);

export default Hero;
