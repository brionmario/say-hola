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

import LibraryUsage from '@/components/LibraryUsage';
import Hero from '@/components/Hero';
import {FC, PropsWithChildren, ReactElement} from 'react';

export type PageProps = PropsWithChildren<{}>;

const Page: FC<PageProps> = (): ReactElement => (
  <div className="relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 flex min-h-screen flex-col items-center justify-between">
      <div className="w-full flex flex-col min-h-screen pt-20 md:pt-40 relative overflow-hidden">
        <Hero />
        <LibraryUsage supportedTechnologies={['javascript', 'react', 'angular', 'vue']} />
      </div>
    </div>
  </div>
);

export default Page;
