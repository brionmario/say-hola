# say-hola

## 0.1.1

### Patch Changes

- [#1](https://github.com/brionmario/say-hola/pull/1)
  [`aa279ddb84b03e52dc794852d920fccc08942323`](https://github.com/brionmario/say-hola/commit/aa279ddb84b03e52dc794852d920fccc08942323)
  Thanks [@brionmario](https://github.com/brionmario)! - Adds the following set of core features:

  - **SayHola Class**: Introduced a new `SayHola` class which can be instantiated.
  - **Greet Method**: Added a `greet` method that supports multiple ways to get a greeting:
    - Without parameters: Returns a default greeting.
    - With a language code: Returns a greeting in the specified language (e.g., `'si'` for Sinhala).
    - With a language name: Returns a greeting in the specified language by name (e.g., `'Sinhala'`).
    - With unknown parameters: Returns a random greeting if an unrecognized language code or name is provided.
    - With null or undefined parameters: Safely handles these cases and returns a string greeting.
  - **Translations**: The `greet` method returns an object containing a `greeting`, `code`, and `language` to support
    localization.

  Tests have been added to ensure the correct functionality of the `greet` method:

  - Creation of a `SayHola` instance.
  - Various uses of the `greet` method to return strings.
  - Handling of specific and incorrect language codes and names.
