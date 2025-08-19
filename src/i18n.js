import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(Backend)  // Load translations from external files
  .use(LanguageDetector) // Detect user language automatically
  .use(initReactI18next)  // Integrate with React
  .init({
    fallbackLng: "en",  // Default language if no language is detected
    debug: true, // Logs debug messages in the console
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

// Notes:
// i18next: Main i18n library.
// initReactI18next: Enables React components to use translations.
// Backend: Loads translations from external JSON files.
// LanguageDetector: Detects the user's language automatically.