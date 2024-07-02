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

// eslint-disable-next-line import/no-mutable-exports
let nextConfig = {
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  // TODO: Added to bypass `Error: @next/font/google failed to run or is incorrectly configured.`
  // Possible fix https://larsmagnus.co/blog/how-to-optimize-custom-fonts-with-next-font.
  optimizeFonts: false,
};

/**
 * If the build mode is static, we need to set the output to export and disable image optimization.
 * @see {@link https://nextjs.org/docs/advanced-features/static-html-export}
 */
if (process.env.BUILD_MODE === 'static') {
  nextConfig = {
    ...nextConfig,
    images: {
      ...nextConfig.images,
      unoptimized: true,
    },
    output: 'export',
  };
}

export default nextConfig;
