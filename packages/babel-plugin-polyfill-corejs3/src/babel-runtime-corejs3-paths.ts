// This file contains the list of paths supported by @babel/runtime-corejs3.
// It must _not_ be edited, as all new features should go through direct
// injection of core-js-pure imports.

export const stable = new Set([
  "array",
  "array/from",
  "array/is-array",
  "array/of",
  "clear-immediate",
  "code-point-at",
  "date/now",
  "instance/bind",
  "instance/concat",
  "instance/copy-within",
  "instance/ends-with",
  "instance/entries",
  "instance/every",
  "instance/fill",
  "instance/filter",
  "instance/find",
  "instance/find-index",
  "instance/flags",
  "instance/flat",
  "instance/flat-map",
  "instance/for-each",
  "instance/includes",
  "instance/index-of",
  "instance/keys",
  "instance/map",
  "instance/pad-end",
  "instance/pad-start",
  "instance/reduce",
  "instance/reduce-right",
  "instance/repeat",
  "instance/reverse",
  "instance/slice",
  "instance/some",
  "instance/sort",
  "instance/splice",
  "instance/starts-with",
  "instance/trim",
  "instance/trim-end",
  "instance/trim-left",
  "instance/trim-right",
  "instance/trim-start",
  "instance/values",
  "json/stringify",
  "last-index-of",
  "map",
  "math/acosh",
  "math/asinh",
  "math/atanh",
  "math/cbrt",
  "math/clz32",
  "math/cosh",
  "math/expm1",
  "math/fround",
  "math/hypot",
  "math/imul",
  "math/log10",
  "math/log1p",
  "math/log2",
  "math/sign",
  "math/sinh",
  "math/tanh",
  "math/trunc",
  "number/epsilon",
  "number/is-finite",
  "number/is-integer",
  "number/is-nan",
  "number/is-safe-integer",
  "number/max-safe-integer",
  "number/min-safe-integer",
  "number/parse-float",
  "number/parse-int",
  "object/assign",
  "object/create",
  "object/define-properties",
  "object/define-property",
  "object/entries",
  "object/freeze",
  "object/from-entries",
  "object/get-own-property-descriptor",
  "object/get-own-property-descriptors",
  "object/get-own-property-names",
  "object/get-own-property-symbols",
  "object/get-prototype-of",
  "object/is",
  "object/is-extensible",
  "object/is-frozen",
  "object/is-sealed",
  "object/keys",
  "object/prevent-extensions",
  "object/seal",
  "object/set-prototype-of",
  "object/values",
  "parse-float",
  "parse-int",
  "promise",
  "queue-microtask",
  "reflect/apply",
  "reflect/construct",
  "reflect/define-property",
  "reflect/delete-property",
  "reflect/get",
  "reflect/get-own-property-descriptor",
  "reflect/get-prototype-of",
  "reflect/has",
  "reflect/is-extensible",
  "reflect/own-keys",
  "reflect/prevent-extensions",
  "reflect/set",
  "reflect/set-prototype-of",
  "set",
  "set-immediate",
  "set-interval",
  "set-timeout",
  "string/from-code-point",
  "string/raw",
  "symbol",
  "symbol/async-iterator",
  "symbol/for",
  "symbol/has-instance",
  "symbol/is-concat-spreadable",
  "symbol/iterator",
  "symbol/key-for",
  "symbol/match",
  "symbol/replace",
  "symbol/search",
  "symbol/species",
  "symbol/split",
  "symbol/to-primitive",
  "symbol/to-string-tag",
  "symbol/unscopables",
  "url",
  "url-search-params",
  "weak-map",
  "weak-set",
]);

export const proposals = new Set([
  ...stable,
  "aggregate-error",
  "composite-key",
  "composite-symbol",
  "global-this",
  "instance/at",
  "instance/code-points",
  "instance/match-all",
  "instance/replace-all",
  "math/clamp",
  "math/degrees",
  "math/deg-per-rad",
  "math/fscale",
  "math/iaddh",
  "math/imulh",
  "math/isubh",
  "math/rad-per-deg",
  "math/radians",
  "math/scale",
  "math/seeded-prng",
  "math/signbit",
  "math/umulh",
  "number/from-string",
  "observable",
  "reflect/define-metadata",
  "reflect/delete-metadata",
  "reflect/get-metadata",
  "reflect/get-metadata-keys",
  "reflect/get-own-metadata",
  "reflect/get-own-metadata-keys",
  "reflect/has-metadata",
  "reflect/has-own-metadata",
  "reflect/metadata",
  "symbol/dispose",
  "symbol/observable",
  "symbol/pattern-match",
]);