import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import nextEslint from 'eslint-config-next';
import eslintJS from '@eslint/js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  { ignores: [
    '**/node_modules/**', 
    '**/.next/**', 
    '**/out/**',
    '**/src/generated/**',
    '**/prisma/**'
  ]},
  eslintJS.configs.recommended,
  ...nextEslint,
  {
    rules: {
      // Downgrade errors to warnings
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-unused-expressions': 'warn',
      '@typescript-eslint/no-this-alias': 'warn',
      '@typescript-eslint/no-require-imports': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-empty-object-type': 'warn',
      '@typescript-eslint/no-wrapper-object-types': 'warn',
      '@typescript-eslint/no-unsafe-function-type': 'warn',
      '@typescript-eslint/no-unnecessary-type-constraint': 'warn'
    }
  }
];

export default eslintConfig;
