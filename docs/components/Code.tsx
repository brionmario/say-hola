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

import {HTMLAttributes, ReactElement, useEffect, useState} from 'react';
import {codeToHtml} from 'shiki';
import {cn} from '@/lib/utils';

export type CodeProps = HTMLAttributes<HTMLDivElement> & {
  code: string;
  lang: string;
  theme?: string;
};

const Code = ({code: _code, lang, theme, className}: CodeProps): ReactElement => {
  const [code, setCode] = useState<string>('');

  useEffect(() => {
    (async (): Promise<void> => {
      const parsedCode: string = await codeToHtml(_code, {
        lang,
        theme: theme ?? 'github-dark-default',
      });

      setCode(parsedCode);
    })();
  }, [_code]);

  return <div className={cn('p-5', className)} dangerouslySetInnerHTML={{__html: code}} />;
};

export default Code;
