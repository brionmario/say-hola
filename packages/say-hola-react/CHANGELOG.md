# say-hola-react

## 0.1.0

### Minor Changes

- [#7](https://github.com/brionmario/say-hola/pull/7)
  [`5b1c407a371dfad0e8669cc52e8d228675462ce1`](https://github.com/brionmario/say-hola/commit/5b1c407a371dfad0e8669cc52e8d228675462ce1)
  Thanks [@brionmario](https://github.com/brionmario)! - Introduces the `SayHola` React component and the `useSayHola`
  hook, providing a flexible and reusable way to display and update greetings in React applications.

  ### Features Added:

  - **`SayHola` Component**: A polymorphic React component that can be rendered with different container elements. The
    component displays a greeting fetched using the `useSayHola` hook.

    - Supports the `as` prop to change the container element type.
    - Accepts standard HTML element props and forwards refs.
    - Adds a default className for styling.

  - **`useSayHola` Hook**: A custom hook to manage the greeting state.
    - Automatically fetches a new greeting at a specified interval (default 1000ms).
    - Supports `staticMode` to fetch a single greeting without interval updates.
    - Returns the current greeting as a string.

### Patch Changes

- Updated dependencies
  [[`6bc3e12da9f22e9583c817cca480cbc2565005b2`](https://github.com/brionmario/say-hola/commit/6bc3e12da9f22e9583c817cca480cbc2565005b2)]:
  - say-hola@0.1.0

## 0.2.1

### Patch Changes

- [#1](https://github.com/brionmario/say-hola/pull/1)
  [`15204c1401a234e545ae51b5fdcbc850ca18a9c0`](https://github.com/brionmario/say-hola/commit/15204c1401a234e545ae51b5fdcbc850ca18a9c0)
  Thanks [@brionmario](https://github.com/brionmario)! - Introduces the `SayHola` React component and the `useSayHola`
  hook, providing a flexible and reusable way to display and update greetings in React applications.

  ### Features Added:

  - **`SayHola` Component**: A polymorphic React component that can be rendered with different container elements. The
    component displays a greeting fetched using the `useSayHola` hook.

    - Supports the `as` prop to change the container element type.
    - Accepts standard HTML element props and forwards refs.
    - Adds a default className for styling.

  - **`useSayHola` Hook**: A custom hook to manage the greeting state.
    - Automatically fetches a new greeting at a specified interval (default 1000ms).
    - Supports `staticMode` to fetch a single greeting without interval updates.
    - Returns the current greeting as a string.

- Updated dependencies
  [[`aa279ddb84b03e52dc794852d920fccc08942323`](https://github.com/brionmario/say-hola/commit/aa279ddb84b03e52dc794852d920fccc08942323)]:
  - say-hola@0.1.1
