import recommended from '@beyonk/eslint-config/recommended'
import node from '@beyonk/eslint-config/node'
import mocha from '@beyonk/eslint-config/mocha'

export default [
  ...recommended,
  ...node,
  ...mocha,
  {
    files: [ '**/*.mjs' ],
    languageOptions: {
      sourceType: 'module'
    }
  }
]
