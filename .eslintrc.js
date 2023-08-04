const {
  sortImports
  // eslint-disable-next-line @typescript-eslint/no-var-requires
} = require('@viclafouch/eslint-config-viclafouch/rules/sort-imports')

/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  extends: [
    "@viclafouch/eslint-config-viclafouch",
    "@viclafouch/eslint-config-viclafouch/next",
    "@viclafouch/eslint-config-viclafouch/prettier",
  ],
  overrides: [sortImports(__dirname)]
}