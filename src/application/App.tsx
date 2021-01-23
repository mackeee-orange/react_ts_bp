import React, { FC } from "react";
import ExceptionHandler from "./helpers/ExceptionHandler";
import IndexRouter from "application/IndexRouter";
import GlobalContextProvider from "data/utilities/GlobalContextProvider";
import { BrowserRouter } from "react-router-dom";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import jaJson from "./configs/locales/ja.json";
import enJson from "./configs/locales/en.json";

// initializes
i18n.use(initReactI18next).init({
  debug: false,
  resources: {
    en: { translation: enJson },
    ja: { translation: jaJson }
  },
  lng: "ja",
  fallbackLng: false,
  returnEmptyString: false
});

const App: FC = () => {
  console.log("hoge");
  return (
    <BrowserRouter>
      <ExceptionHandler>
        <GlobalContextProvider>
          <IndexRouter />
        </GlobalContextProvider>
      </ExceptionHandler>
    </BrowserRouter>
  );
};

export default App;
