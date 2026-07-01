import React from "react";
import "./App.css";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
