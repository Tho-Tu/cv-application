import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import LabelComponent from "./LabelComponent.tsx";
import PreviewEducation from "../cv-preview/PreviewEducation.tsx";

export default function Education({ educationInfo }) {
  const [educationList, setEducationList] = useState([]);
  const [educationObject, setEducationObject] = useState({
    school: "",
    degree: "",
    startDate: "",
    endDate: "",
    location: "",
    id: uuidv4(),
  });
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSchool = (e: { target: { value: SetStateAction<string> } }) => {
    setEducationObject({ ...educationObject, school: e.target.value });
  };

  const handleDegree = (e: { target: { value: SetStateAction<string> } }) => {
    setEducationObject({ ...educationObject, degree: e.target.value });
  };

  const handleStartDate = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setEducationObject({ ...educationObject, startDate: e.target.value });
  };

  const handleEndDate = (e: { target: { value: SetStateAction<string> } }) => {
    setEducationObject({ ...educationObject, endDate: e.target.value });
  };

  const handleLocation = (e: { target: { value: SetStateAction<string> } }) => {
    setEducationObject({ ...educationObject, location: e.target.value });
  };

  // SAVE BUTTON
  const handleSaveButton = (school, degree, startDate, endDate, location) => {
    const newEducation = educationFormFactory(
      school,
      degree,
      startDate,
      endDate,
      location
    );
    let previousEducationList = educationList;

    prevEducationList[activeIndex] = newEducation;
    setEducationList(previousEducationList);

    console.log(educationList);
  };

  // DELETE BUTTON
  const handleDeleteButton = (activeIndex) => {
    const newEducationList = educationList;
    newEducationList.splice(activeIndex, 1);
    setEducationList(newEducationList);
  };

  // ADD NEW EDUCATION BUTTON
  const handleNewButton = () => {
    setEducationList((prevEducationList) => [
      ...prevEducationList,
      educationFormFactory(),
    ]);
  };

  const handleActiveIndex = (index) => {
    setActiveIndex(index);
    console.log(index);
  };

  console.log(educationList);

  return (
    <div className="education">
      <h2>Education</h2>
      <EducationListComponent
        educationList={educationList}
        educationObject={educationObject}
        activeIndex={activeIndex}
        handleSchool={handleSchool}
        handleDegree={handleDegree}
        handleStartDate={handleStartDate}
        handleEndDate={handleEndDate}
        handleLocation={handleLocation}
        handleSaveButton={handleSaveButton}
        handleDeleteButton={handleDeleteButton}
        handleActiveIndex={handleActiveIndex}
      />
      <button type="button" onClick={handleNewButton}>
        + Education
      </button>
    </div>
  );
}

function educationFormFactory(
  school = "",
  degree = "",
  startDate = "",
  endDate = "",
  location = "",
  id = uuidv4()
) {
  return { school, degree, startDate, endDate, location, id };
}

function EducationListComponent({
  educationList,
  educationObject,
  activeIndex,
  handleSchool,
  handleDegree,
  handleStartDate,
  handleEndDate,
  handleLocation,
  handleSaveButton,
  handleDeleteButton,
  handleActiveIndex,
}) {
  if (educationList.length <= 0) {
    return <></>;
  }

  return educationList.map((education, index) => {
    if (index === activeIndex) {
      return (
        <EducationForm
          key={education.id}
          educationObject={educationObject}
          activeIndex={activeIndex}
          handleSchool={handleSchool}
          handleDegree={handleDegree}
          handleStartDate={handleStartDate}
          handleEndDate={handleEndDate}
          handleLocation={handleLocation}
          handleSaveButton={handleSaveButton}
          handleDeleteButton={() => handleDeleteButton(index)}
          handleActiveIndex={handleActiveIndex}
        />
      );
    }

    return (
      <EducationNotVisible
        key={education.id}
        education={education}
        index={index}
        handleActiveIndex={handleActiveIndex}
      />
    );
  });
}

function EducationForm({
  educationObject,
  activeIndex,
  handleSchool,
  handleDegree,
  handleStartDate,
  handleEndDate,
  handleLocation,
  handleSaveButton,
  handleDeleteButton,
  handleActiveIndex,
}) {
  return (
    <>
      <form className="forms">
        <LabelComponent
          name="School"
          value={educationObject.school}
          handlerFunction={handleSchool}
        />
        <LabelComponent
          name="Degree"
          value={educationObject.degree}
          handlerFunction={handleDegree}
        />
        <LabelComponent
          name="Start Date"
          value={educationObject.startDate}
          handlerFunction={handleStartDate}
        />
        <LabelComponent
          name="End Date"
          value={educationObject.endDate}
          handlerFunction={handleEndDate}
        />
        <LabelComponent
          name="Location"
          value={educationObject.location}
          handlerFunction={handleLocation}
        />
        <span>
          <button
            type="button"
            onClick={() => {
              handleSaveButton(
                educationObject.school,
                educationObject.degree,
                educationObject.startDate,
                educationObject.endDate,
                educationObject.location
              );
              handleActiveIndex(-1);
            }}
          >
            Save
          </button>{" "}
          <button
            type="button"
            onClick={() => {
              handleDeleteButton(activeIndex);
              handleActiveIndex(-1);
            }}
          >
            Delete
          </button>{" "}
        </span>
      </form>
    </>
  );
}

function EducationNotVisible({ education, index, handleActiveIndex }) {
  return (
    <>
      <div className="education-not-visible">
        {education.school === "" ? "No name" : education.school}
        <button type="button" onClick={() => handleActiveIndex(index)}>
          Show
        </button>
      </div>
    </>
  );
}
