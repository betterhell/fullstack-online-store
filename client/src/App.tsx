import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";

import React from "react";
import MainPage from "./Pages/Main/MainPage";
import Footer from "./components/Footer/Footer";
import Actions from "./Pages/Actions/Actions";
import NotFound from "./Pages/NotFound/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="mainPage-content">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/actions" element={<Actions />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
