import React from "react";
import Routes from "./router/Routes";
import ScrollToTopButton from "./components/ScrollToTopButton";

const App = () => {
  return (
    <div className="portfolio_all_wrap">
      <ScrollToTopButton />
      <Routes />
    </div>
  );
};

export default App;
