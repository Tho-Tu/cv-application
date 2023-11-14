import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import LabelComponent from "./LabelComponent.tsx";

export default function Education({ education }) {
  const [educationList, setEducationList] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSaveButton = (educationObject) => {
    const newEducation = { ...educationObject };
    setEducationList((prevEducationList) => [
      ...prevEducationList,
      newEducation,
    ]);

    console.log(educationList);
  };

  const handleDeleteButton = () => {
    const newEducationList = educationList.splice(activeIndex, 1);
    setEducationList(newEducationList);

    console.log(educationList);
  };

  const handleNewButton = () => {
    setEducationList((prevEducationList) => [
      ...prevEducationList,
      educationFormFactory(),
    ]);

    console.log(educationList);
  };

  return (
    <div className="education">
      <h2>Education</h2>
      <EducationListComponent
        educationList={educationList}
        saveButton={() => handleSaveButton(educationFormFactory())}
        deleteButton={handleDeleteButton}
      />
      <button type="button" onClick={handleNewButton}>
        + Education
      </button>
    </div>
  );
}

function EducationListComponent({ educationList, saveButton, deleteButton }) {
  if (educationList.length === 0) {
    return <></>;
  }

  return educationList.map((education) => {
    if (education.visible === true) {
      return (
        <EducationForm
          key={education.id}
          saveButton={saveButton}
          deleteButton={deleteButton}
        />
      );
    }
  });
}

function educationFormFactory() {
  const school = "";
  const degree = "";
  const startDate = "";
  const endDate = "";
  const location = "";
  const visible = true;
  const id = uuidv4();

  return { school, degree, startDate, endDate, location, visible, id };
}

// function LabelComponent({ name, value, handlerFunction }) {
//   return (
//     <>
//       <label>
//         {name}
//         <input
//           type="text"
//           placeholder={name}
//           value={value}
//           onChange={handlerFunction}
//         ></input>
//       </label>
//     </>
//   );
// }

function EducationForm({ saveButton, deleteButton }) {
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
      <form className="forms">
        <LabelComponent
          name="School"
          value={school}
          handlerFunction={handleSchool}
        />
        <LabelComponent
          name="Degree"
          value={degree}
          handlerFunction={handleDegree}
        />
        <LabelComponent
          name="Start Date"
          value={startDate}
          handlerFunction={handleStartDate}
        />
        <LabelComponent
          name="End Date"
          value={endDate}
          handlerFunction={handleEndDate}
        />
        <LabelComponent
          name="Location"
          value={location}
          handlerFunction={handleLocation}
        />
        <span>
          <button type="button" onClick={saveButton}>
            Save
          </button>{" "}
          <button type="button" onClick={deleteButton}>
            Delete
          </button>{" "}
        </span>
      </form>
    </>
  );
}
