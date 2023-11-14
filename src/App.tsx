import { useState } from "react";
import "./styles/App.css";
import CvForm from "./components/cv-form/CvForm";
import CvPreview from "./components/cv-preview/CvPreview";
import Header from "./components/Header";

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    fullName: "Taylor Swift",
    email: "taylorswift@email.com",
    phoneNumber: "123 456 789",
    address: "132, My Street, Kingston, New York 12401",
  });
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);

  // General Info Handlers
  const handleFullName = (e: { target: { value: SetStateAction<string> } }) => {
    setGeneralInfo({ ...generalInfo, fullName: e.target.value });
  };

  const handleEmail = (e: { target: { value: SetStateAction<string> } }) => {
    setGeneralInfo({ ...generalInfo, email: e.target.value });
  };

  const handlePhoneNumber = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setGeneralInfo({ ...generalInfo, phoneNumber: e.target.value });
  };

  const handleAddress = (e: { target: { value: SetStateAction<string> } }) => {
    setGeneralInfo({ ...generalInfo, address: e.target.value });
  };

  return (
    <>
      <Header />
      <main>
        <CvForm
          generalInfo={{
            generalInfo,
            handleFullName,
            handleEmail,
            handlePhoneNumber,
            handleAddress,
          }}
          education={education}
          experience={experience}
        />
        <CvPreview
          generalInfo={generalInfo}
          education={education}
          experience={experience}
        />
      </main>
    </>
  );
}

export default App;
