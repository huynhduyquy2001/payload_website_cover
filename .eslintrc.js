module.exports = {
  root: true,
  extends: ['plugin:@next/next/recommended', '@payloadcms'],
  ignorePatterns: ['**/payload-types.ts'],
  plugins: ['prettier'],
  rules: {
    'simple-import-sort/imports': 'off', // Tắt quy tắc sắp xếp import
    // ... các quy tắc khác
  },
}
