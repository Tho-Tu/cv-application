import { useState } from "react";
import "./styles/App.css";
import CvForm from "./components/cv-form/CvForm";
import CvPreview from "./components/cv-preview/CvPreview";
import Header from "./components/Header";
import {
  educationFormFactory,
  experienceFormFactory,
} from "./components/cv-form/formFactoryFunction";
import {
  EducationForm,
  EducationListComponent,
  EducationNotVisible,
} from "./components/cv-form/EducationComponents";

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    fullName: "Taylor Swift",
    email: "taylorswift@email.com",
    phoneNumber: 123456789,
    address: "132, My Street, Kingston, New York 12401",
  });
  const [educationInfo, setEducation] = useState([]);
  const [experienceInfo, setExperience] = useState([]);

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

  const handleEducationInfo = () => {};
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
          educationInfo={educationInfo}
          experienceInfo={experienceInfo}
        />
        <CvPreview
          generalInfo={generalInfo}
          educationInfo={educationInfo}
          experienceInfo={experienceInfo}
        />
      </main>
    </>
  );
}

export default App;
