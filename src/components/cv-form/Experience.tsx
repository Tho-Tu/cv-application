import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import LabelComponent from "./LabelComponent";
import { act } from "react-dom/test-utils";

export default function Experience({ experienceInfo }) {
  const [experienceList, setExperienceList] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleExperienceList = (activeIndex, property, eventValue) => {
    const newExperienceList = [...experienceList];
    newExperienceList[activeIndex][property] = eventValue;
    setExperienceList(newExperienceList);
  };

  // SAVE BUTTON
  const handleSaveButton = (
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
      prevExperienceList[activeIndex] = newExperience;
      return prevExperienceList;
    });
  };

  // DELETE BUTTON
  const handleDeleteButton = (activeIndex) => {
    const newExperienceList = experienceList;
    newExperienceList.splice(activeIndex, 1);
    setExperienceList(newExperienceList);
  };

  // ADD NEW EDUCATION BUTTON
  const handleNewButton = () => {
    setExperienceList((prevEducationList) => [
      ...prevEducationList,
      experienceFormFactory(),
    ]);
  };

  // SET ACTIVE INDEX
  const handleActiveIndex = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="experience">
      <h2>Experience</h2>
      <ExperienceListComponent
        experienceList={experienceList}
        activeIndex={activeIndex}
        handleExperienceList={handleExperienceList}
        handleSaveButton={handleSaveButton}
        handleDeleteButton={handleDeleteButton}
        handleActiveIndex={handleActiveIndex}
      />
      <button type="button" onClick={handleNewButton}>
        + Experience
      </button>
    </div>
  );
}

function experienceFormFactory(
  companyName = "",
  positionTitle = "",
  startDate = "",
  endDate = "",
  location = "",
  description = "",
  id = uuidv4()
) {
  return {
    companyName,
    positionTitle,
    startDate,
    endDate,
    location,
    description,
    id,
  };
}

function ExperienceListComponent({
  experienceList,
  activeIndex,
  handleExperienceList,
  handleSaveButton,
  handleDeleteButton,
  handleActiveIndex,
}) {
  if (experienceList.length <= 0) {
    return <></>;
  }

  return experienceList.map((experience, index) => {
    if (index === activeIndex) {
      return (
        <ExperienceForm
          key={experience.id}
          experienceList={experienceList}
          activeIndex={activeIndex}
          handleExperienceList={handleExperienceList}
          handleSaveButton={handleSaveButton}
          handleDeleteButton={() => handleDeleteButton(index)}
          handleActiveIndex={handleActiveIndex}
        />
      );
    }

    return (
      <ExperienceNotVisible
        key={experience.id}
        experience={experience}
        index={index}
        handleActiveIndex={handleActiveIndex}
      />
    );
  });
}

function ExperienceForm({
  experienceList,
  activeIndex,
  handleExperienceList,
  handleSaveButton,
  handleDeleteButton,
  handleActiveIndex,
}) {
  return (
    <>
      <form className="forms">
        <LabelComponent
          name={"Company Name"}
          value={experienceList[activeIndex].companyName}
          handlerFunction={(e) => {
            handleExperienceList(activeIndex, "companyName", e.target.value);
          }}
        />
        <LabelComponent
          name={"Position Title"}
          value={experienceList[activeIndex].positionTitle}
          handlerFunction={(e) =>
            handleExperienceList(activeIndex, "positionTitle", e.target.value)
          }
        />
        <LabelComponent
          name={"Start Date"}
          value={experienceList[activeIndex].startDate}
          handlerFunction={(e) =>
            handleExperienceList(activeIndex, "startDate", e.target.value)
          }
        />
        <LabelComponent
          name={"End Date"}
          value={experienceList[activeIndex].endDate}
          handlerFunction={(e) =>
            handleExperienceList(activeIndex, "endDate", e.target.value)
          }
        />
        <LabelComponent
          name={"Location"}
          value={experienceList[activeIndex].location}
          handlerFunction={(e) =>
            handleExperienceList(activeIndex, "location", e.target.value)
          }
        />
        <LabelComponent
          name={"Description"}
          value={experienceList[activeIndex].description}
          handlerFunction={(e) =>
            handleExperienceList(activeIndex, "description", e.target.value)
          }
        />
        <span>
          <button
            type="button"
            onClick={() => {
              handleSaveButton(
                experienceList[activeIndex].companyName,
                experienceList[activeIndex].positionTitle,
                experienceList[activeIndex].startDate,
                experienceList[activeIndex].endDate,
                experienceList[activeIndex].location,
                experienceList[activeIndex].description,
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
          </button>
        </span>
      </form>
    </>
  );
}

function ExperienceNotVisible({ experience, index, handleActiveIndex }) {
  return (
    <>
      <div className="experience-not-visible">
        {experience.companyName === "" ? "No name" : experience.companyName}
        <button type="button" onClick={() => handleActiveIndex(index)}>
          Show
        </button>
      </div>
    </>
  );
}
