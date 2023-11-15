import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import LabelComponent from "./LabelComponent.tsx";
import PreviewEducation from "../cv-preview/PreviewEducation.tsx";

export default function Education({ educationInfo }) {
  const [educationList, setEducationList] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleEducationList = (activeIndex, property, eventValue) => {
    const newEducationList = [...educationList];
    newEducationList[activeIndex][property] = eventValue;
    setEducationList(newEducationList);
  };
  // SAVE BUTTON
  const handleSaveButton = (
    school,
    degree,
    startDate,
    endDate,
    location,
    activeIndex
  ) => {
    const newEducation = educationFormFactory(
      school,
      degree,
      startDate,
      endDate,
      location
    );
    setEducationList((prevEducationList) => {
      prevEducationList[activeIndex] = newEducation;
      return prevEducationList;
    });
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

  // SET ACTIVE INDEX
  const handleActiveIndex = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="education">
      <h2>Education</h2>
      <EducationListComponent
        educationList={educationList}
        activeIndex={activeIndex}
        handleEducationList={handleEducationList}
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
  activeIndex,
  handleEducationList,
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
          educationList={educationList}
          activeIndex={activeIndex}
          handleEducationList={handleEducationList}
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
  educationList,
  activeIndex,
  handleEducationList,
  handleSaveButton,
  handleDeleteButton,
  handleActiveIndex,
}) {
  return (
    <>
      <form className="forms">
        <LabelComponent
          name="School"
          value={educationList[activeIndex].school}
          handlerFunction={(e) =>
            handleEducationList(activeIndex, "school", e.target.value)
          }
        />
        <LabelComponent
          name="Degree"
          value={educationList[activeIndex].degree}
          handlerFunction={(e) =>
            handleEducationList(activeIndex, "degree", e.target.value)
          }
        />
        <LabelComponent
          name="Start Date"
          value={educationList[activeIndex].startDate}
          handlerFunction={(e) =>
            handleEducationList(activeIndex, "startDate", e.target.value)
          }
        />
        <LabelComponent
          name="End Date"
          value={educationList[activeIndex].endDate}
          handlerFunction={(e) =>
            handleEducationList(activeIndex, "endDate", e.target.value)
          }
        />
        <LabelComponent
          name="Location"
          value={educationList[activeIndex].location}
          handlerFunction={(e) =>
            handleEducationList(activeIndex, "location", e.target.value)
          }
        />
        <span>
          <button
            type="button"
            onClick={() => {
              handleSaveButton(
                educationList[activeIndex].school,
                educationList[activeIndex].degree,
                educationList[activeIndex].startDate,
                educationList[activeIndex].endDate,
                educationList[activeIndex].location,
                activeIndex
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
