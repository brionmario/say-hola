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

import {FC, PropsWithChildren} from 'react';
import siteConfig from '@/config/site';
import BrionSignature from './BrionSignature';

export type FooterProps = PropsWithChildren<{}>;

const Footer: FC<FooterProps> = ({children}: FooterProps) => (
  <footer className="py-6 md:px-8 md:py-0">
    <div className="container flex flex-col items-center justify-center gap-4 md:h-24 md:flex-row">
      <p className="flex text-balance text-center text-sm leading-loose text-muted-foreground">
        <div className="flex">
          <span>Built by</span>{' '}
          <span className="brion-signature">
            <BrionSignature height={25} alt="Brion's Signature" />
          </span>
        </div>
        . The source code is available on{' '}
        <a
          href={siteConfig.links.github}
          target="_blank"
          rel="noreferrer"
          className="font-medium underline underline-offset-4"
        >
          GitHub
        </a>
        .
      </p>
    </div>
    {children}
  </footer>
);

export default Footer;
