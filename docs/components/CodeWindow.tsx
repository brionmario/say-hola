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

import {HTMLAttributes, PropsWithChildren, ReactElement, FC} from 'react';
import {cn} from '@/lib/utils';

export type CodeWindowProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>;
export type ToolBarProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>;

const ToolBar: FC<ToolBarProps> = ({children, className, ...rest}: ToolBarProps): ReactElement => (
  <div
    className={cn(
      'flex items-center text-gray-400 bg-black rounded-sm rounded-b-none text-xs px-5 border-b border-gray-800 h-10',
      className,
    )}
    {...rest}
  >
    {children}
  </div>
);

const CodeWindow: FC<CodeWindowProps> = ({children, className, ...rest}: CodeWindowProps): ReactElement => (
  <div
    className={cn(
      'relative z-10 -ml-10 col-span-3 bg-[#0d1117] rounded-sm shadow-lg xl:ml-0 dark:shadow-none border border-gray-800',
      className,
    )}
    {...rest}
  >
    <ToolBar>Terminal</ToolBar>
    {children}
  </div>
);

export default CodeWindow;
