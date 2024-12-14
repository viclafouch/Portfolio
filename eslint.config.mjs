import baseConfig from '@viclafouch/eslint-config-viclafouch/index.mjs'
import nextConfig from '@viclafouch/eslint-config-viclafouch/next.mjs'
import prettierConfig from '@viclafouch/eslint-config-viclafouch/prettier.mjs'

/**
 * @type {import("eslint").Linter.Config}
 */
export default [
  ...baseConfig,
  ...nextConfig,
  ...prettierConfig,
  {
    ignores: ['**/node_modules/**', '**/.next/**', '**/.vercel/**']
  }
]
