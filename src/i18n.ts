import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          project: "What kind of application are you building?",
          tech: "Add the tools you will use in your project",
          searchPlaceholder: "Search...",
          searchButton: "Search",
        },
      },
      tr: {
        translation: {
          project: "Ne tür bir uygulama yapacaksınız?",
          tech: "Add the Tools You Will Use",
          searchPlaceholder: "Ara...",
          searchButton: "Ara",
        },
      },
    },
    lng: "en", // Başlangıç dili
    fallbackLng: "en", // Dil bulunamazsa fallback dil
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
