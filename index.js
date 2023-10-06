/**
 * Class for handling text transformations like camelCase, snake_case, etc.
 */
class TextFormatter {
  /**
   * @param {string[]} tokens - Array of words for transformation.
   * @param {string} [prefix] - Optional prefix mainly for Hungarian Notation.
   */
  constructor(tokens, prefix = '') {
    this.tokens = tokens;
    this.prefix = prefix;
  }

  /**
   * Convert camelCase text to tokens.
   * @param {string} str - The input string.
   * @returns {TextFormatter} - New TextFormatter instance.
   */
  static fromCamelCase(str) {
    return new TextFormatter(str.split(/(?=[A-Z])/).map(w => w.toLowerCase()));
  }

  /**
   * Convert snake_case text to tokens.
   * @param {string} str - The input string.
   * @returns {TextFormatter} - New TextFormatter instance.
   */
  static fromSnakeCase(str) {
    return new TextFormatter(str.split('_').map(w => w.toLowerCase()));
  }

  /**
   * Convert SCREAMING_SNAKE_CASE text to tokens.
   * @param {string} str - The input string.
   * @returns {TextFormatter} - New TextFormatter instance.
   */
  static fromScreamingSnakeCase(str) {
    return new TextFormatter(str.split('_').map(w => w.toLowerCase()));
  }

  /**
   * Convert kebab-case text to tokens.
   * @param {string} str - The input string.
   * @returns {TextFormatter} - New TextFormatter instance.
   */
  static fromKebabCase(str) {
    return new TextFormatter(str.split('-').map(w => w.toLowerCase()));
  }

  /**
   * Convert PascalCase text to tokens.
   * @param {string} str - The input string.
   * @returns {TextFormatter} - New TextFormatter instance.
   */
  static fromPascalCase(str) {
    return new TextFormatter(str.split(/(?=[A-Z])/).map(w => w.toLowerCase()));
  }

  /**
   * Convert space separated text to tokens.
   * @param {string} str - The input string.
   * @returns {TextFormatter} - New TextFormatter instance.
   */
  static fromSpaceSeparated(str) {
    return new TextFormatter(str.split(' ').map(w => w.toLowerCase()));
  }

  /**
   * Convert Hungarian notation text to tokens.
   * @param {string} str - The input string.
   * @returns {TextFormatter} - New TextFormatter instance.
   */
  static fromHungarianNotation(str) {
    const [prefix, ...tokens] = str.split('_');
    return new TextFormatter(tokens.map(w => w.toLowerCase()), prefix);
  }

  // Additional static methods for Train Case, Dot Notation, etc. go here...
// ... Previous code ...

/**
 * Convert Train-Case text to tokens.
 * @param {string} str - The input string.
 * @returns {TextFormatter} - New TextFormatter instance.
 */
static fromTrainCase(str) {
  return new TextFormatter(str.split('-').map(w => w.toLowerCase()));
}

/**
 * Convert dot.case text to tokens.
 * @param {string} str - The input string.
 * @returns {TextFormatter} - New TextFormatter instance.
 */
static fromDotCase(str) {
  return new TextFormatter(str.split('.').map(w => w.toLowerCase()));
}

/**
 * Convert slash/case text to tokens.
 * @param {string} str - The input string.
 * @returns {TextFormatter} - New TextFormatter instance.
 */
static fromSlashCase(str) {
  return new TextFormatter(str.split('/').map(w => w.toLowerCase()));
}

/**
 * Convert backslash\case text to tokens.
 * @param {string} str - The input string.
 * @returns {TextFormatter} - New TextFormatter instance.
 */
static fromBackslashCase(str) {
  return new TextFormatter(str.split('\\').map(w => w.toLowerCase()));
}

// ... Conversion methods ...

// ... Remaining code ...
  /**
   * Convert tokens to camelCase.
   * @returns {string} - The transformed string.
   */
  toCamelCase() {
    return this.tokens.map((w, i) => i === 0 ? w : w.charAt(0).toUpperCase() + w.slice(1)).join('');
  }

  /**
   * Convert tokens to snake_case.
   * @returns {string} - The transformed string.
   */
  toSnakeCase() {
    return this.tokens.join('_');
  }

  /**
   * Convert tokens to SCREAMING_SNAKE_CASE.
   * @returns {string} - The transformed string.
   */
  toScreamingSnakeCase() {
    return this.tokens.join('_').toUpperCase();
  }

  /**
   * Convert tokens to kebab-case.
   * @returns {string} - The transformed string.
   */
  toKebabCase() {
    return this.tokens.join('-');
  }

  /**
   * Convert tokens to PascalCase.
   * @returns {string} - The transformed string.
   */
  toPascalCase() {
    return this.tokens.map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('');
  }

  /**
   * Convert tokens to space separated text.
   * @returns {string} - The transformed string.
   */
  toSpaceSeparated() {
    return this.tokens.join(' ');
  }

  /**
   * Convert tokens to Hungarian notation.
   * @returns {string} - The transformed string.
   */
  toHungarianNotation() {
    return this.prefix ? `${this.prefix}_${this.tokens.join('_')}` : this.tokens.join('_');
  }

  // Additional conversion methods for Train Case, Dot Notation, etc. go here...
  
/**
 * Convert tokens to Train-Case.
 * @returns {string} - The transformed string.
 */
toTrainCase() {
  return this.tokens.map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('-');
}

/**
 * Convert tokens to dot.case.
 * @returns {string} - The transformed string.
 */
toDotCase() {
  return this.tokens.join('.');
}

/**
 * Convert tokens to slash/case.
 * @returns {string} - The transformed string.
 */
toSlashCase() {
  return this.tokens.join('/');
}

/**
 * Convert tokens to backslash\case.
 * @returns {string} - The transformed string.
 */
toBackslashCase() {
  return this.tokens.join('\\');
}
}
