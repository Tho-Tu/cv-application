import { useState } from "react";
import "./styles/App.css";
import CvForm from "./components/cv-form/CvForm";
import CvPreview from "./components/cv-preview/CvPreview";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <main>
        <CvForm />
        <CvPreview />
      </main>
    </>
  );
}

export default App;
