// translationRunner.js
const manageTranslations = require('react-intl-translations-manager').default;
 
// es2015 import
// import manageTranslations from 'react-intl-createTranslations-manager';
 
manageTranslations({
  messagesDirectory: 'createTranslations/build',
  translationsDirectory: 'createTranslations/locales/',
  languages: ['en'] // any language you need
});