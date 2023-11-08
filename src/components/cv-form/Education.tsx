import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Education() {
  const [educationList, setEducationList] = useState([]);

  const handleButton = () => {
    setEducationList((prevEducationList) => [
      ...prevEducationList,
      emptyFormFactory(),
    ]);
    console.log(educationList);
  };
  return (
    <div className="education">
      <h2>Education</h2>

      <SingleEducation />

      <button type="button" onClick={handleButton}>
        + Education
      </button>
    </div>
  );
}

function emptyFormFactory() {
  const school = "";
  const degree = "";
  const startDate = "";
  const endDate = "";
  const location = "";
  const visible = false;
  const id = uuidv4();

  return { school, degree, startDate, endDate, location, visible, id };
}

function SingleEducation() {
  const [school, setSchool] = useState("");
  const [degree, setDegree] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [location, setLocation] = useState("");

  const handleSchool = (e: { target: { value: SetStateAction<string> } }) => {
    setSchool(e.target.value);
  };

  const handleDegree = (e: { target: { value: SetStateAction<string> } }) => {
    setDegree(e.target.value);
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

  return (
    <>
      <form>
        <label>
          School
          <input
            type="text"
            placeholder="School"
            value={school}
            onChange={handleSchool}
          ></input>
        </label>
        <label>
          Degree
          <input
            type="text"
            placeholder="Degree"
            value={degree}
            onChange={handleDegree}
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
      </form>
    </>
  );
}
