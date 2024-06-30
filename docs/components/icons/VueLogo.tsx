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

import {ReactElement, SVGProps} from 'react';
import {cn} from '@/lib/utils';

const VueLogo = ({height = 48, width = 48, className, ...rest}: SVGProps<SVGSVGElement>): ReactElement => {
  const active: boolean | undefined = className?.includes('active');

  return (
    <svg
      width={width}
      height={height}
      fill="none"
      aria-hidden="true"
      className={cn(
        'mb-6',
        {
          'text-slate-300 group-hover:text-slate-400 dark:text-slate-600 dark:group-hover:text-slate-500': !active,
        },
        className,
      )}
      {...rest}
    >
      <path
        d="M24 12.814 20.474 7H15l9 15 9-15h-5.476l-3.525 5.814Z"
        fill="currentColor"
        fillOpacity="0"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M37.408 7 24 28.982 10.592 7H3l21 34L45 7h-7.592Z"
        fill="currentColor"
        fillOpacity="0"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default VueLogo;
