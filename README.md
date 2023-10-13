# casetastic
## Short description
The `Casetastic` class is a comprehensive utility designed to handle various text transformations, such as converting text between camelCase, snake_case, PascalCase, and more.

## Functional specifications

### Casetastic Class
- The class is designed to take in tokens (words) and convert them between different cases/formats.
- Contains static methods to create a new instance of the class based on various text formats:
  - `fromCamelCase`
  - `fromSnakeCase`
  - `fromScreamingSnakeCase`
  - `fromKebabCase`
  - `fromPascalCase`
  - `fromSpaceSeparated`
  - `fromHungarianNotation`
  - `fromTrainCase`
  - `fromDotCase`
  - `fromSlashCase`
  - `fromBackslashCase`
- Contains instance methods to convert existing tokens to these formats, like `toCamelCase`, `toSnakeCase`, etc.

## Installation from npm
To install the package once it's published to npm:
```bash
npm install casetastic
```

## Usage examples

```javascript
const Casetastic = require('casetastic');

// Convert from camelCase
let formatter = Casetastic.fromCamelCase("someCamelCaseText");
console.log(formatter.toSnakeCase());  // Outputs: some_camel_case_text

// Convert to PascalCase
formatter = new Casetastic(["some", "text"]);
console.log(formatter.toPascalCase());  // Outputs: SomeText
```

## Typescript Usage

### TypeScript Usage Example

```typescript
import TextFormatter from 'casetastic';

// Convert from camelCase
const formatter = TextFormatter.fromCamelCase("someCamelCaseText");
console.log(formatter.toSnakeCase());  // Outputs: some_camel_case_text

// Convert to PascalCase
const formatter2 = new TextFormatter(["some", "text"]);
console.log(formatter2.toPascalCase());  // Outputs: SomeText
```

