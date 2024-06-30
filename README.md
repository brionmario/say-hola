# Say Hola

This monorepo contains two packages: `say-hola` and `say-hola-react`. These packages provide flexible and lightweight libraries for displaying greetings in different languages.

## Packages

- **say-hola**: Core library for generating greetings.
- **say-hola-react**: React components and hooks based on `say-hola`.

## Installation

To install the dependencies for all packages, run:

```sh
pnpm install
```

### Using `say-hola`

`say-hola` is a lightweight library for generating greetings in different languages. 

#### Example

```javascript
const SayHola = require('say-hola');

const sayHola = new SayHola();
const greeting = sayHola.greet();
console.log(greeting);
```

### Using `say-hola-react`

`say-hola-react` is a flexible React component and hook library based on `say-hola`.

#### Example

```jsx
import React from 'react';
import SayHola from 'say-hola-react';

const App = () => {
  return (
    <div>
      <SayHola as="h1" className="greeting-heading" />
      <SayHola as="div" className="greeting-container" />
    </div>
  );
};

export default App;
```

## Contributing

Please see our [CONTRIBUTING.md](CONTRIBUTING.md) file for detailed instructions on how to contribute to this project.

## 👨‍💻 Contributors

<a href="https://github.com/brionmario/say-hola/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=brionmario/say-hola" />
</a>

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
