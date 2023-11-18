import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import LabelComponent from "./LabelComponent.tsx";
import PreviewEducation from "../cv-preview/PreviewEducation.tsx";

export default function Education({ educationInfo }) {
  const [educationList, setEducationList] = useState([]);
  const [activeEducationIndex, setActiveEducationIndex] = useState(0);

  const handleEducationList = (activeEducationIndex, property, eventValue) => {
    const newEducationList = [...educationList];
    newEducationList[activeEducationIndex][property] = eventValue;
    setEducationList(newEducationList);
  };
  // SAVE BUTTON
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

  // DELETE BUTTON
  const handleDeleteButton = (activeEducationIndex) => {
    const newEducationList = educationList;
    newEducationList.splice(activeEducationIndex, 1);
    setEducationList(newEducationList);
  };

  // ADD NEW EDUCATION BUTTON
  const handleNewButton = () => {
    setEducationList((prevEducationList) => [
      ...prevEducationList,
      educationFormFactory(),
    ]);
  };

  // SET ACTIVE INDEX
  const handleActiveEducationIndex = (index) => {
    setActiveEducationIndex(index);
  };

  return (
    <div className="education">
      <h2>Education</h2>
      <EducationListComponent
        educationList={educationList}
        activeEducationIndex={activeEducationIndex}
        handleEducationList={handleEducationList}
        handleSaveButton={handleSaveButton}
        handleDeleteButton={handleDeleteButton}
        handleActiveEducationIndex={handleActiveEducationIndex}
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
  activeEducationIndex,
  handleEducationList,
  handleSaveButton,
  handleDeleteButton,
  handleActiveEducationIndex,
}) {
  if (educationList.length <= 0) {
    return <></>;
  }

  return educationList.map((education, index) => {
    if (index === activeEducationIndex) {
      return (
        <EducationForm
          key={education.id}
          educationList={educationList}
          activeEducationIndex={activeEducationIndex}
          handleEducationList={handleEducationList}
          handleSaveButton={handleSaveButton}
          handleDeleteButton={() => handleDeleteButton(index)}
          handleActiveEducationIndex={handleActiveEducationIndex}
        />
      );
    }

    return (
      <EducationNotVisible
        key={education.id}
        education={education}
        index={index}
        handleActiveEducationIndex={handleActiveEducationIndex}
      />
    );
  });
}

function EducationForm({
  educationList,
  activeEducationIndex,
  handleEducationList,
  handleSaveButton,
  handleDeleteButton,
  handleActiveEducationIndex,
}) {
  return (
    <>
      <form className="forms">
        <LabelComponent
          name="School"
          value={educationList[activeEducationIndex].school}
          handlerFunction={(e) =>
            handleEducationList(activeEducationIndex, "school", e.target.value)
          }
        />
        <LabelComponent
          name="Degree"
          value={educationList[activeEducationIndex].degree}
          handlerFunction={(e) =>
            handleEducationList(activeEducationIndex, "degree", e.target.value)
          }
        />
        <LabelComponent
          name="Start Date"
          value={educationList[activeEducationIndex].startDate}
          handlerFunction={(e) =>
            handleEducationList(
              activeEducationIndex,
              "startDate",
              e.target.value
            )
          }
        />
        <LabelComponent
          name="End Date"
          value={educationList[activeEducationIndex].endDate}
          handlerFunction={(e) =>
            handleEducationList(activeEducationIndex, "endDate", e.target.value)
          }
        />
        <LabelComponent
          name="Location"
          value={educationList[activeEducationIndex].location}
          handlerFunction={(e) =>
            handleEducationList(
              activeEducationIndex,
              "location",
              e.target.value
            )
          }
        />
        <span>
          <button
            type="button"
            onClick={() => {
              handleSaveButton(
                educationList[activeEducationIndex].school,
                educationList[activeEducationIndex].degree,
                educationList[activeEducationIndex].startDate,
                educationList[activeEducationIndex].endDate,
                educationList[activeEducationIndex].location,
                activeEducationIndex
              );
              handleActiveEducationIndex(-1);
            }}
          >
            Save
          </button>{" "}
          <button
            type="button"
            onClick={() => {
              handleDeleteButton(activeEducationIndex);
              handleActiveEducationIndex(-1);
            }}
          >
            Delete
          </button>{" "}
        </span>
      </form>
    </>
  );
}

function EducationNotVisible({ education, index, handleActiveEducationIndex }) {
  return (
    <>
      <div className="education-not-visible">
        {education.school === "" ? "No name" : education.school}
        <button type="button" onClick={() => handleActiveEducationIndex(index)}>
          Show
        </button>
      </div>
    </>
  );
}
