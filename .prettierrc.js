module.exports = {
  singleQuote: true,
  trailingComma: 'all',
  endOfLine: 'lf',
  overrides: [
    {
      files: '*.html',
      options: {
        parser: 'html',
      },
    },
  ],
};
