const { defineConfig } = require('@lobehub/i18n-cli');

const outputLocales = [
  'cs-CZ',
  'de-DE',
  'en-US',
  'es-ES',
  'es-MX',
  'fa-IR',
  'fi-FI',
  'fr-FR',
  'hi-IN',
  'hu-HU',
  'ja-JP',
  'ko-KR',
  'no-NO',
  'pl-PL',
  'pt-BR',
  'ro-RO',
  'ru-RU',
  'th-TH',
  'tr-TR',
  'uk-UA',
  'vi-VN',
  'zh-CN',
  'zh-HK',
];

module.exports = defineConfig({
  modelName: 'gpt-4o-mini',
  outputLocales: outputLocales,
  markdown: {
    // entry: ['./pages/zh-CN/**/*.mdx', './pages/zh-CN/**/*.ts'],
    entry: ['./pages/zh-CN/swagger/*.ts', './pages/zh-CN/swagger/*.mdx'],
    exclude: [
      './pages/zh-CN/swagger/common.mdx',
      './pages/zh-CN/swagger/ppanel.mdx',
      './pages/zh-CN/swagger/user.mdx',
      './pages/zh-CN/swagger/admin.mdx',
      // './pages/zh-CN/_meta.ts',
      // './pages/zh-CN/changelog',
    ],
    entryLocale: 'zh-CN',
    outputExtensions: (locale, config) => {
      if (locale === 'zh-CN') {
        return config.filePath.endsWith('.ts') ? '.ts' : '.mdx';
      }
      return config.filePath.endsWith('.ts') ? `.${locale}.ts` : `.${locale}.mdx`;
    },
    translateCode: true,
    includeMatter: true,
  },
});
