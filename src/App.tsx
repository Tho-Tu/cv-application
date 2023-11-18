import { useState } from "react";
import "./styles/App.css";
import CvForm from "./components/cv-form/CvForm";
import CvPreview from "./components/cv-preview/CvPreview";
import Header from "./components/Header";
import {
  educationFormFactory,
  experienceFormFactory,
} from "./components/cv-form/formFactoryFunction";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    fullName: "Taylor Swift",
    email: "taylorswift@email.com",
    phoneNumber: 123456789,
    address: "132, My Street, Kingston, New York 12401",
  });
  const [educationList, setEducationList] = useState([
    {
      school: "University for the Real World",
      degree: "Bachelor of Science (Physics)",
      startDate: "08/2017",
      endDate: "08/2021",
      location: "New York City, US",
      id: uuidv4(),
    },
    {
      school: "Mars Graduate University",
      degree: "PhD in Rocket Science",
      startDate: "08/2021",
      endDate: "Present",
      location: "Mars City, MA",
      id: uuidv4(),
    },
  ]);
  const [activeEducationIndex, setActiveEducationIndex] = useState(-1);

  const [experienceInfo, setExperience] = useState([]);

  // Education Info Handlers
  const handleEducationList = (activeEducationIndex, property, eventValue) => {
    const newEducationList = [...educationList];
    newEducationList[activeEducationIndex][property] = eventValue;
    setEducationList(newEducationList);
  };
  const handleSaveButton = (
    school,
    degree,
    startDate,
    endDate,
    location,
    activeEducationIndex
  ) => {
    const newEducation = educationFormFactory(
      school,
      degree,
      startDate,
      endDate,
      location
    );
    setEducationList((prevEducationList) => {
      prevEducationList[activeEducationIndex] = newEducation;
      return prevEducationList;
    });
  };
  const handleDeleteButton = (activeEducationIndex) => {
    const newEducationList = educationList;
    newEducationList.splice(activeEducationIndex, 1);
    setEducationList(newEducationList);
  };
  const handleNewButton = () => {
    setEducationList((prevEducationList) => [
      ...prevEducationList,
      educationFormFactory(),
    ]);
  };
  const handleActiveEducationIndex = (index) => {
    setActiveEducationIndex(index);
  };

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
          educationInfo={{
            educationList,
            activeEducationIndex,
            handleEducationList,
            handleSaveButton,
            handleDeleteButton,
            handleNewButton,
            handleActiveEducationIndex,
          }}
          experienceInfo={experienceInfo}
        />
        <CvPreview
          generalInfo={generalInfo}
          educationInfo={educationList}
          experienceInfo={experienceInfo}
        />
      </main>
    </>
  );
}

export default App;
