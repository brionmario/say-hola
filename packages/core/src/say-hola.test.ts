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

import SayHola from './say-hola';

describe('SayHola', () => {
  let sayHola: SayHola;

  beforeEach(() => {
    sayHola = new SayHola();
  });

  it('should create an instance', () => {
    expect(sayHola).toBeInstanceOf(SayHola);
  });

  it('should return a string when sayHello is called without parameters', () => {
    const greeting: string = sayHola.sayHello();
    expect(typeof greeting).toBe('string');
  });

  it('should return a greeting in a specific language when sayHello is called with a language code', () => {
    const greeting: string = sayHola.sayHello('es');
    expect(greeting).toContain('[es]');
  });

  it('should return a greeting in a specific language when sayHello is called with a language name', () => {
    const greeting: string = sayHola.sayHello(undefined, 'Spanish');
    expect(greeting).toContain('[es]');
  });

  it('should return a random greeting when sayHello is called with an unknown language code or name', () => {
    const greeting: string = sayHola.sayHello('xx', 'Unknown');
    expect(typeof greeting).toBe('string');
  });

  it('should return a string when sayHello is called with null parameters', () => {
    const greeting: string = sayHola.sayHello(undefined, undefined);
    expect(typeof greeting).toBe('string');
  });

  it('should return a string when sayHello is called with undefined parameters', () => {
    const greeting: string = sayHola.sayHello(undefined, undefined);
    expect(typeof greeting).toBe('string');
  });

  it('should not return a greeting in a specific language when sayHello is called with an incorrect language code', () => {
    const greeting: string = sayHola.sayHello('xx');
    expect(greeting).not.toContain('[xx]');
  });

  it('should not return a greeting in a specific language when sayHello is called with an incorrect language name', () => {
    const greeting: string = sayHola.sayHello(undefined, 'Unknown');
    expect(greeting).not.toContain('Unknown');
  });
});
