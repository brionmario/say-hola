---
'say-hola-react': patch
---
Introduces the `SayHola` React component and the `useSayHola` hook, providing a flexible and reusable way to display and update greetings in React applications.

### Features Added:

- **`SayHola` Component**: A polymorphic React component that can be rendered with different container elements. The component displays a greeting fetched using the `useSayHola` hook.
  - Supports the `as` prop to change the container element type.
  - Accepts standard HTML element props and forwards refs.
  - Adds a default className for styling.

- **`useSayHola` Hook**: A custom hook to manage the greeting state.
  - Automatically fetches a new greeting at a specified interval (default 1000ms).
  - Supports `staticMode` to fetch a single greeting without interval updates.
  - Returns the current greeting as a string.
