/**
 * MIT License
 *
 * Copyright (c) 2023, Brion Mario
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

import translations from './hola.json';

/**
 * Interface representing a single translation.
 */
export interface Translation {
  /**
   * ISO 639-1 language code.
   */
  code: string;
  /**
   * Greeting in the language.
   */
  greeting: string;
  /**
   * Language name.
   */
  language: string;
}

/**
 * The `SayHola` class is a utility for generating greetings in various languages.
 * It maintains a collection of translations and provides methods to retrieve a greeting
 * either randomly or for a specific language. This class is useful in applications where
 * multilingual support is required or where random language greetings can enhance user experience.
 *
 * @example
 * ```typescript
 * const greeter = new SayHola();
 * console.log(greeter.sayHello()); // Outputs a random greeting
 * console.log(greeter.sayHello('es')); // Outputs a greeting in Spanish
 * ```
 */
class SayHola {
  /**
   * An array of translations.
   * @private
   */
  private translations: Translation[];

  /**
   * Initializes a new instance of the `SayHola` class.
   */
  constructor() {
    this.translations = translations;
  }

  /**
   * Returns a random translation from the array.
   * @private
   * @returns A random translation.
   */
  private getRandomTranslation(): Translation {
    const randomIndex: number = Math.floor(Math.random() * this.translations.length);
    return this.translations[randomIndex] as Translation;
  }

  /**
   * Returns a greeting in a specific language if provided, otherwise returns a random greeting.
   * @param code - The code of the language.
   * @param language - The name of the language.
   * @returns A greeting in the specified or random language.
   */
  greet(code?: string, language?: string): string {
    if (code || language) {
      const translation: Translation = this.translations.find(
        (t: Translation) => t.code === code || t.language.toLowerCase() === language?.toLowerCase(),
      ) as Translation;

      if (translation) {
        return `[${translation.code}] ${translation.greeting}, ${translation.language}!`;
      }
    }

    const {code: randomCode, greeting, language: randomLanguage} = this.getRandomTranslation();
    return `[${randomCode}] ${greeting}, ${randomLanguage}!`;
  }
}

export default SayHola;
