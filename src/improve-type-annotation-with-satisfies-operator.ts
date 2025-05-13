// Define a union type `Color` which can either be a string
// or an object with numeric r, g, b (RGB) values
type Color =
  | string
  | {
      r: number;
      g: number;
      b: number;
    };

// Create a config object with string keys and values of type `Color`.
// Using `Record<string, Color>` means ANY string key is technically allowed,
// but we’re only defining three known keys here.
const config: Record<string, Color> = {
  foreground: { r: 255, g: 255, b: 255 }, // RGB object
  background: { r: 0, g: 0, b: 0 }, // RGB object
  border: "transparent", // string value
};

// This will throw a TypeScript error because `config.border` could be
// either a string OR an RGB object (Color union type).
// TypeScript won't allow calling string methods on a union without narrowing.
// To fix: use typeof check
// @ts-expect-error
config.border.toUpperCase(); // unsafe unless type-checked

// Accessing the `.r` property of `foreground`, which is an RGB object,
// works at runtime — but TypeScript still sees this as a union.
// Ideally you'd also check if it's actually an object.
console.log(config.foreground.r);

// The following two lines use `@ts-expect-error` intentionally
// to assert that TypeScript should throw errors for these.
// These properties (`primary` and `secondary`) are not defined,
// but due to `Record<string, Color>`, they *could* exist,
// so this is being used to test type enforcement.

// @ts-expect-error
config.primary;

// @ts-expect-error
config.secondary;

// Define a Theme type which can be a string or an RGB object
type ThemeColor =
  | string
  | {
      r: number;
      g: number;
      b: number;
    };

// Use the `satisfies` keyword to assert that the object values conform to ThemeColor,
// while keeping the exact key types instead of widening them to `string`
const themeConfig = {
  primary: { r: 34, g: 139, b: 34 },
  secondary: { r: 70, g: 130, b: 180 },
  highlight: "gold",
} satisfies Record<string, ThemeColor>;

// Works fine: string method on known string value
themeConfig.highlight.toUpperCase(); // OK

// Works fine: accessing `.r` on known RGB object
console.log(themeConfig.primary.r); // 34

// TypeScript error as 'background' is not a key in `themeConfig`
// Even though Record<string, ThemeColor> allows any string key,
// `satisfies` preserves the exact keys used (primary, secondary, highlight)

// @ts-expect-error
themeConfig.background;

// @ts-expect-error
themeConfig.accent;
