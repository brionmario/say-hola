# Say Hola

SayHola is a utility for generating greetings in various languages. It maintains a collection of translations and provides methods to retrieve a greeting either randomly or for a specific language. This class is useful in applications where multilingual support is required or where random language greetings can enhance user experience.

## Installation

To install this package, run the following command:

```bash
npm install say-hola
```
## Usage

Here's a basic usage example:

```js
import SayHola from 'say-hola';

const greeter = new SayHola();
console.log(greeter.sayHello()); // Outputs a random greeting
console.log(greeter.sayHello('es')); // Outputs a greeting in Spanish
```

## API

`sayHello(code?: string, language?: string): string`

Returns a greeting in a specific language if provided, otherwise returns a random greeting.

- `code` - The ISO 639-1 language code.
- `language` - The name of the language.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
