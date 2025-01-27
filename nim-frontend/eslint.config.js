import js from 'eslint-config-eslint';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { config as tseslintConfig } from '@typescript-eslint/eslint-plugin'; // Fix import for TypeScript ESLint plugin

export default tseslintConfig(
  { ignores: ['dist'] },
  {
    extends: [
      'eslint:recommended', // Correct config for JS
      'plugin:@typescript-eslint/recommended', // Correct config for TypeScript
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'semi': ['error', 'never'],
      '@typescript-eslint/semi': ['error', 'never'],
      'indent': [
        'error',
        2, // Enforcing 2-space indentation
        {
          SwitchCase: 1,
        },
      ],
    },
  },
);
