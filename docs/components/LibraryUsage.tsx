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

import {PropsWithChildren, ReactElement, useState} from 'react';
import TechIconButton from './TechIconButton';
import ReactLogo from './icons/ReactLogo';
import VueLogo from './icons/VueLogo';
import AngularLogo from './icons/AngularLogo';
import JavaScriptLogo from './icons/JavaScriptLogo';
import {cn} from '@/lib/utils';
import CodeWindow from '@/components/CodeWindow';
import Code from '@/components/Code';

export type SupportedTechnologies = 'javascript' | 'react' | 'vue' | 'angular';

export type LibraryUsageProps = PropsWithChildren<{
  supportedTechnologies: SupportedTechnologies[];
}>;

type FrameworkGuide = {
  framework: string;
  installation: {
    npm: string;
    pnpm: string;
    yarn: string;
  };
};

const frameworkGuides: FrameworkGuide[] = [
  {
    framework: 'JavaScript',
    installation: {
      npm: 'npm install say-hola',
      yarn: 'yarn add say-hola',
      pnpm: 'pnpm add say-hola',
    },
  },
  {
    framework: 'React',
    installation: {
      npm: 'npm install say-hola-react',
      yarn: 'yarn add say-hola-react',
      pnpm: 'pnpm add say-hola-react',
    },
  },
  {
    framework: 'Angular',
    installation: {
      npm: 'npm install say-hola-angular',
      yarn: 'yarn add say-hola-angular',
      pnpm: 'pnpm add say-hola-angular',
    },
  },
  {
    framework: 'Vue',
    installation: {
      npm: 'npm install say-hola-vue',
      yarn: 'yarn add say-hola-vue',
      pnpm: 'pnpm add say-hola-vue',
    },
  },
];

const LibraryUsage = ({supportedTechnologies}: LibraryUsageProps): ReactElement => {
  const [activeTab, setActiveTab] = useState<SupportedTechnologies>('javascript');
  const [activeGuide, setActiveGuide] = useState<FrameworkGuide | undefined>(frameworkGuides[0]);

  const handleFrameworkChange = (framework: SupportedTechnologies): void => {
    setActiveTab(framework);
    setActiveGuide(frameworkGuides.find((guide: FrameworkGuide) => guide.framework.toLowerCase() === framework));
  };

  return (
    <div className="mt-20">
      <div className="flex w-auto flex-col items-center">
        <div className="-mx-4 flex overflow-auto sm:mx-0">
          <ul
            className="inline-grid flex-none gap-x-2 px-4 sm:px-0 xl:gap-x-6"
            style={{gridTemplateColumns: 'repeat(4, minmax(6rem, 1fr))'}}
          >
            {supportedTechnologies.includes('javascript') && (
              <li role="button" onClick={() => handleFrameworkChange('javascript')}>
                <TechIconButton
                  className={cn({active: activeTab === 'javascript', 'text-yellow-300': activeTab === 'javascript'})}
                  icon={JavaScriptLogo}
                  text="JavaScript"
                />
              </li>
            )}
            {supportedTechnologies.includes('react') && (
              <li role="button" onClick={() => handleFrameworkChange('react')}>
                <TechIconButton
                  className={cn({active: activeTab === 'react', 'text-sky-500': activeTab === 'react'})}
                  icon={ReactLogo}
                  text="React"
                />
              </li>
            )}
            {supportedTechnologies.includes('angular') && (
              <li role="button" onClick={() => handleFrameworkChange('angular')}>
                <TechIconButton
                  className={cn({active: activeTab === 'angular', 'text-red-600': activeTab === 'angular'})}
                  icon={AngularLogo}
                  text="Vue"
                />
              </li>
            )}
            {supportedTechnologies.includes('vue') && (
              <li role="button" onClick={() => handleFrameworkChange('vue')}>
                <TechIconButton
                  className={cn({active: activeTab === 'vue', 'text-green-400': activeTab === 'vue'})}
                  icon={VueLogo}
                  text="Vue"
                />
              </li>
            )}
          </ul>
        </div>
        <div className="mt-10 w-1/2">
          <CodeWindow>
            <Code
              code={
                `# If you are using npm
${activeGuide?.installation?.npm}

# If you are using yarn
${activeGuide?.installation?.yarn}

# If you are using pnpm
${activeGuide?.installation?.pnpm}
` || ''
              }
              lang="shell"
            />
          </CodeWindow>
        </div>
      </div>
    </div>
  );
};

export default LibraryUsage;
