import React from "react";
import Header from "./components/Header";
import CampsitesList from "./features/campsites/CampesitesList";
import { CAMPSITES } from "./app/shared/CAMPSITES";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <CampsitesList campsite={CAMPSITES[0]} />
      <Footer />
    </div>
  );
}

export default App;
