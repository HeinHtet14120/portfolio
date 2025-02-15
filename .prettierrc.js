module.exports = {
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  trailingComma: 'es5',
  bracketSpacing: true,
  jsxBracketSameLine: false,
  arrowParens: 'avoid',
  proseWrap: 'always',
  htmlWhitespaceSensitivity: 'css',
  endOfLine: 'lf',
  // Font-specific formatting
  cssDeclarationSorterOrder: 'smacss', // Sort CSS properties in SMACSS order
  overrides: [
    {
      files: '*.css',
      options: {
        // Sort @font-face declarations
        cssDeclarationSorterKeepOverrides: true,
        cssDeclarationSorter: {
          order: [
            'font-family',
            'src',
            'font-weight',
            'font-style',
            'font-display',
            'unicode-range',
          ],
        },
      },
    },
  ],
};
