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
  const [experienceList, setExperienceList] = useState([
    {
      companyName: "The Cool Company",
      positionTitle: "Software Engineer, Intern",
      startDate: "08/2018",
      endDate: "02/2019",
      location: "New York City, US",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere placeat nulla ea possimus at sapiente magni voluptatem enim cupiditate fugiat, aspernatur quam distinctio blanditiis vero obcaecati perspiciatis animi consectetur quos!",
      id: uuidv4(),
    },
    {
      companyName: "The Rocket Company",
      positionTitle: "Software Engineer",
      startDate: "08/2022",
      endDate: "present",
      location: "Area 52, US",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere placeat nulla ea possimus at sapiente magni voluptatem enim cupiditate fugiat, aspernatur quam distinctio blanditiis vero obcaecati perspiciatis animi consectetur quos!",
      id: uuidv4(),
    },
  ]);
  const [activeExperienceIndex, setActiveExperienceIndex] = useState(-1);

  // Load example / clear CV Handlers
  const handleLoadExample = () => {
    setGeneralInfo({
      fullName: "Taylor Swift",
      email: "taylorswift@email.com",
      phoneNumber: 123456789,
      address: "132, My Street, Kingston, New York 12401",
    });
    setEducationList([
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
    setExperienceList([
      {
        companyName: "The Cool Company",
        positionTitle: "Software Engineer, Intern",
        startDate: "08/2018",
        endDate: "02/2019",
        location: "New York City, US",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere placeat nulla ea possimus at sapiente magni voluptatem enim cupiditate fugiat, aspernatur quam distinctio blanditiis vero obcaecati perspiciatis animi consectetur quos!",
        id: uuidv4(),
      },
      {
        companyName: "The Rocket Company",
        positionTitle: "Software Engineer",
        startDate: "08/2022",
        endDate: "present",
        location: "Area 52, US",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere placeat nulla ea possimus at sapiente magni voluptatem enim cupiditate fugiat, aspernatur quam distinctio blanditiis vero obcaecati perspiciatis animi consectetur quos!",
        id: uuidv4(),
      },
    ]);
  };

  const handleClearCv = () => {
    setGeneralInfo({
      fullName: "",
      email: "",
      phoneNumber: "",
      address: "",
    });
    setEducationList([]);
    setExperienceList([]);
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

  // Experience Info Handlers
  const handleExperienceList = (
    activeExperienceIndex,
    property,
    eventValue
  ) => {
    const newExperienceList = [...experienceList];
    newExperienceList[activeExperienceIndex][property] = eventValue;
    setExperienceList(newExperienceList);
  };
  const handleExpSaveButton = (
    companyName,
    positionTitle,
    startDate,
    endDate,
    location,
    description
  ) => {
    const newExperience = experienceFormFactory(
      companyName,
      positionTitle,
      startDate,
      endDate,
      location,
      description
    );
    setExperienceList((prevExperienceList) => {
      prevExperienceList[activeExperienceIndex] = newExperience;
      return prevExperienceList;
    });
  };

  const handleExpDeleteButton = (activeExperienceIndex) => {
    const newExperienceList = experienceList;
    newExperienceList.splice(activeExperienceIndex, 1);
    setExperienceList(newExperienceList);
  };
  const handleExpNewButton = () => {
    setExperienceList((prevEducationList) => [
      ...prevEducationList,
      experienceFormFactory(),
    ]);
  };
  const handleActiveExperienceIndex = (index) => {
    setActiveExperienceIndex(index);
  };
  return (
    <>
      <Header />
      <main>
        <CvForm
          exampleInfo={{ handleClearCv, handleLoadExample }}
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
          experienceInfo={{
            experienceList,
            activeExperienceIndex,
            handleExperienceList,
            handleExpSaveButton,
            handleExpDeleteButton,
            handleExpNewButton,
            handleActiveExperienceIndex,
          }}
        />
        <CvPreview
          generalInfo={generalInfo}
          educationInfo={educationList}
          experienceInfo={experienceList}
        />
      </main>
    </>
  );
}

export default App;
