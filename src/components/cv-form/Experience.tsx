import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Experience({ experience }) {
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
        <label>
          Company Name
          <input
            type="text"
            placeholder="Company Name"
            value={companyName}
            onChange={handleCompanyName}
          ></input>
        </label>
        <label>
          Position Title
          <input
            type="text"
            placeholder="Position Title"
            value={positionTitle}
            onChange={handlePositionTitle}
          ></input>
        </label>
        <label>
          Start Date
          <input
            type="text"
            placeholder="Start Date"
            value={startDate}
            onChange={handleStartDate}
          ></input>
        </label>
        <label>
          End Date
          <input
            type="text"
            placeholder="End Date"
            value={endDate}
            onChange={handleEndDate}
          ></input>
        </label>
        <label>
          Location
          <input
            type="text"
            placeholder="End Date"
            value={location}
            onChange={handleLocation}
          ></input>
        </label>
        <label>
          Description
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={handleDescription}
          ></input>
        </label>
      </form>
    </>
  );
}
