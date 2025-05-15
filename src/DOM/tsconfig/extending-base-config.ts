/**
 * We create a base config to inherit from like (tsconfig.base.json) of cos typescript won't look at this file
 * To check config from the base-json and extend it in our tsconfig.json
 * We can then use the extend.
 * Extend will only copy anything inside the compile option anything outside like exclude, include won't be added.
 *
 * "extends": "../../tsconfig.base.json"
 */

// Package.json File

/**
 * "scripts": {
 * "dev:client": "tsc --project ./src/client/tsconfig.json --watch"
 *
 * }
 *
 *
 * also a package npm run all -- allow run rhing in sequence or paragraph. run-p dev:*
 */

/**
 * Reference to say which path to run.
 * "references": [
 * {
 * "path:" "./src/client/tsconfig.json"
 * },
 * {
 * ...
 * }
 *
 * ]
 * Then in each config we can put tsc -b --watch
 *
 *
 * Also, composite: true in tsconfig
 *
 * We can use the include key word also
 *
 *
 */
