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

const ReactLogo = ({height = 48, width = 48, className, ...rest}: SVGProps<SVGSVGElement>): ReactElement => {
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
        d="M30.685 27.536c-5.353 9.182-12.462 15.042-15.878 13.089-3.416-1.953-1.846-10.98 3.508-20.161 5.353-9.182 12.462-15.042 15.878-13.089 3.416 1.953 1.846 10.98-3.508 20.161Z"
        fill="currentColor"
        fillOpacity={active ? '.1' : '0'}
        stroke="currentColor"
        strokeWidth="2"
      />
      <ellipse
        cx="24"
        cy="24"
        rx="7"
        ry="19"
        transform="rotate(90 24 24)"
        fill="currentColor"
        fillOpacity={active ? '.1' : '0'}
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M17.315 27.536c5.353 9.182 12.462 15.042 15.878 13.089 3.416-1.953 1.846-10.98-3.508-20.161-5.353-9.182-12.462-15.042-15.878-13.089-3.416 1.953-1.846 10.98 3.508 20.161Z"
        fill="currentColor"
        fillOpacity={active ? '.1' : '0'}
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M24 27a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
        fill={active ? 'none' : 'currentColor'}
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
};

export default ReactLogo;
