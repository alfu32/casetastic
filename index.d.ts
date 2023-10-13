export declare class Casetastic {
  constructor(tokens: string[], prefix?: string);

  static fromCamelCase(str: string): TextFormatter;
  static fromSnakeCase(str: string): TextFormatter;
  static fromScreamingSnakeCase(str: string): TextFormatter;
  static fromKebabCase(str: string): TextFormatter;
  static fromPascalCase(str: string): TextFormatter;
  static fromSpaceSeparated(str: string): TextFormatter;
  static fromHungarianNotation(str: string): TextFormatter;
  static fromTrainCase(str: string): TextFormatter;
  static fromDotCase(str: string): TextFormatter;
  static fromSlashCase(str: string): TextFormatter;
  static fromBackslashCase(str: string): TextFormatter;

  toCamelCase(): string;
  toSnakeCase(): string;
  toScreamingSnakeCase(): string;
  toKebabCase(): string;
  toPascalCase(): string;
  toSpaceSeparated(): string;
  toHungarianNotation(): string;
  toTrainCase(): string;
  toDotCase(): string;
  toSlashCase(): string;
  toBackslashCase(): string;
}

export type TextFormatter = Casetastic;
