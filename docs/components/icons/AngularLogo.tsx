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

const AngularLogo = ({height = 48, width = 48, className, ...rest}: SVGProps<SVGSVGElement>): ReactElement => {
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
        d="M10 35 7 12l17-7 17 7-3 23-14 8-14-8Z"
        fill="currentColor"
        fillOpacity="0"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M20 25h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32.617 31 24 13.764 15.381 31h2.236l6.382-12.764L30.381 31h2.236Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default AngularLogo;
