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

import SayHola, {Translation} from './say-hola';

describe('SayHola', () => {
  let sayHola: SayHola;

  beforeEach(() => {
    sayHola = new SayHola();
  });

  it('should create an instance', () => {
    expect(sayHola).toBeInstanceOf(SayHola);
  });

  it('should return a string when greet is called without parameters', () => {
    const {greeting}: Translation = sayHola.greet();
    expect(typeof greeting).toBe('string');
  });

  it('should return a greeting in a specific language when greet is called with a language code', () => {
    const {greeting}: Translation = sayHola.greet('si');
    expect(greeting).toContain('ආයුබෝවන්');
  });

  it('should return a greeting in a specific language when greet is called with a language name', () => {
    const {greeting}: Translation = sayHola.greet(undefined, 'Sinhala');
    expect(greeting).toContain('ආයුබෝවන්');
  });

  it('should return a random greeting when greet is called with an unknown language code or name', () => {
    const {greeting}: Translation = sayHola.greet('xx', 'Unknown');
    expect(typeof greeting).toBe('string');
  });

  it('should return a string when greet is called with null parameters', () => {
    const {greeting}: Translation = sayHola.greet(undefined, undefined);
    expect(typeof greeting).toBe('string');
  });

  it('should return a string when greet is called with undefined parameters', () => {
    const {greeting}: Translation = sayHola.greet(undefined, undefined);
    expect(typeof greeting).toBe('string');
  });

  it('should not return a greeting in a specific language when greet is called with an incorrect language code', () => {
    const {code}: Translation = sayHola.greet('xx');
    expect(code).not.toContain('xx');
  });

  it('should not return a greeting in a specific language when greet is called with an incorrect language name', () => {
    const {language}: Translation = sayHola.greet(undefined, 'Unknown');
    expect(language).not.toContain('Unknown');
  });
});
