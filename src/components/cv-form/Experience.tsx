import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import LabelComponent from "./LabelComponent";

export default function Experience({ experienceInfo }) {
  const [experienceList, setExperienceList] = useState([]);

  const handleButton = () => {
    setExperienceList((prevEducationList) => [
      ...prevEducationList,
      emptyExperienceFormFactory(),
    ]);
    console.log(experienceList);
  };

  return (
    <div className="experience">
      <h2>Experience</h2>
      <SingleExperienceComponent />
      <button type="button" onClick={handleButton}>
        + Experience
      </button>
    </div>
  );
}

function emptyExperienceFormFactory() {
  const companyName = "";
  const positionTitle = "";
  const startDate = "";
  const endDate = "";
  const location = "";
  const description = "";
  const visible = false;
  const id = uuidv4();

  return {
    companyName,
    positionTitle,
    startDate,
    endDate,
    location,
    description,
    visible,
    id,
  };
}

function SingleExperienceComponent() {
  const [companyName, setCompanyName] = useState("");
  const [positionTitle, setPositionTitle] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  const handleCompanyName = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setCompanyName(e.target.value);
  };

  const handlePositionTitle = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setPositionTitle(e.target.value);
  };

  const handleStartDate = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setStartDate(e.target.value);
  };

  const handleEndDate = (e: { target: { value: SetStateAction<string> } }) => {
    setEndDate(e.target.value);
  };

  const handleLocation = (e: { target: { value: SetStateAction<string> } }) => {
    setLocation(e.target.value);
  };

  const handleDescription = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setDescription(e.target.value);
  };

  return (
    <>
      <form>
        <LabelComponent
          name={"Company Name"}
          value={companyName}
          handlerFunction={handleCompanyName}
        />
        <LabelComponent
          name={"Position Title"}
          value={positionTitle}
          handlerFunction={handlePositionTitle}
        />
        <LabelComponent
          name={"Start Date"}
          value={startDate}
          handlerFunction={handleStartDate}
        />
        <LabelComponent
          name={"End Date"}
          value={endDate}
          handlerFunction={handleEndDate}
        />
        <LabelComponent
          name={"Location"}
          value={location}
          handlerFunction={handleLocation}
        />
        <LabelComponent
          name={"Description"}
          value={description}
          handlerFunction={handleDescription}
        />
      </form>
    </>
  );
}
