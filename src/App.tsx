import { useState } from "react";
import "./styles/App.css";
import CvForm from "./components/cv-form/CvForm";
import CvPreview from "./components/cv-preview/CvPreview";
import Header from "./components/Header";

function App() {
  const [generalInfo, setGeneralInfo] = useState({});
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);

  const handleGeneralInfo = (e) => {
    setGeneralInfo(e.target.value);
  };

  return (
    <>
      <Header />
      <main>
        <CvForm
          generalInfo={generalInfo}
          education={education}
          experience={experience}
        />
        <CvPreview />
      </main>
    </>
  );
}

export default App;
