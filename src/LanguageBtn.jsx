import React from "react";
import { useTranslation } from "react-i18next";
import i18n from "./i18n";

function LanguageBtn() {
  const { t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex flex-col h-screen justify-center items-center gap-10">
      <div>
        <h1>{t("welcome")}</h1>
        <h2>{t("cart")}</h2>
      </div>
      <div className="flex gap-5">
        <button
          onClick={() => changeLanguage("en")}
          className="cursor-pointer border rounded bg-gray-500 text-white px-4 py-3"
        >
          English
        </button>
        <button
          onClick={() => changeLanguage("tm")}
          className="cursor-pointer border rounded bg-gray-500 text-white px-4 py-3"
        >
          தமிழ்
        </button>
        <button
          onClick={() => changeLanguage("ar")}
          className="cursor-pointer border rounded bg-gray-500 text-white px-4 py-3"
        >
          العربية
        </button>
      </div>
    </div>
  );
}

export default LanguageBtn;
