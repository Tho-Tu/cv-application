import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import LabelComponent from "./LabelComponent";

export default function Experience({ experienceInfo }) {
  const [experienceList, setExperienceList] = useState([]);
  const [activeExperienceIndex, setActiveExperienceIndex] = useState(0);

  const handleExperienceList = (
    activeExperienceIndex,
    property,
    eventValue
  ) => {
    const newExperienceList = [...experienceList];
    newExperienceList[activeExperienceIndex][property] = eventValue;
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
      prevExperienceList[activeExperienceIndex] = newExperience;
      return prevExperienceList;
    });
  };

  // DELETE BUTTON
  const handleDeleteButton = (activeExperienceIndex) => {
    const newExperienceList = experienceList;
    newExperienceList.splice(activeExperienceIndex, 1);
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
  const handleActiveExperienceIndex = (index) => {
    setActiveExperienceIndex(index);
  };

  return (
    <div className="experience">
      <h2>Experience</h2>
      <ExperienceListComponent
        experienceList={experienceList}
        activeExperienceIndex={activeExperienceIndex}
        handleExperienceList={handleExperienceList}
        handleSaveButton={handleSaveButton}
        handleDeleteButton={handleDeleteButton}
        handleActiveExperienceIndex={handleActiveExperienceIndex}
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
  activeExperienceIndex,
  handleExperienceList,
  handleSaveButton,
  handleDeleteButton,
  handleActiveExperienceIndex,
}) {
  if (experienceList.length <= 0) {
    return <></>;
  }

  return experienceList.map((experience, index) => {
    if (index === activeExperienceIndex) {
      return (
        <ExperienceForm
          key={experience.id}
          experienceList={experienceList}
          activeExperienceIndex={activeExperienceIndex}
          handleExperienceList={handleExperienceList}
          handleSaveButton={handleSaveButton}
          handleDeleteButton={() => handleDeleteButton(index)}
          handleActiveExperienceIndex={handleActiveExperienceIndex}
        />
      );
    }

    return (
      <ExperienceNotVisible
        key={experience.id}
        experience={experience}
        index={index}
        handleActiveExperienceIndex={handleActiveExperienceIndex}
      />
    );
  });
}

function ExperienceForm({
  experienceList,
  activeExperienceIndex,
  handleExperienceList,
  handleSaveButton,
  handleDeleteButton,
  handleActiveExperienceIndex,
}) {
  return (
    <>
      <form className="forms">
        <LabelComponent
          name={"Company Name"}
          value={experienceList[activeExperienceIndex].companyName}
          handlerFunction={(e) => {
            handleExperienceList(
              activeExperienceIndex,
              "companyName",
              e.target.value
            );
          }}
        />
        <LabelComponent
          name={"Position Title"}
          value={experienceList[activeExperienceIndex].positionTitle}
          handlerFunction={(e) =>
            handleExperienceList(
              activeExperienceIndex,
              "positionTitle",
              e.target.value
            )
          }
        />
        <LabelComponent
          name={"Start Date"}
          value={experienceList[activeExperienceIndex].startDate}
          handlerFunction={(e) =>
            handleExperienceList(
              activeExperienceIndex,
              "startDate",
              e.target.value
            )
          }
        />
        <LabelComponent
          name={"End Date"}
          value={experienceList[activeExperienceIndex].endDate}
          handlerFunction={(e) =>
            handleExperienceList(
              activeExperienceIndex,
              "endDate",
              e.target.value
            )
          }
        />
        <LabelComponent
          name={"Location"}
          value={experienceList[activeExperienceIndex].location}
          handlerFunction={(e) =>
            handleExperienceList(
              activeExperienceIndex,
              "location",
              e.target.value
            )
          }
        />
        <LabelComponent
          name={"Description"}
          value={experienceList[activeExperienceIndex].description}
          handlerFunction={(e) =>
            handleExperienceList(
              activeExperienceIndex,
              "description",
              e.target.value
            )
          }
        />
        <span>
          <button
            type="button"
            onClick={() => {
              handleSaveButton(
                experienceList[activeExperienceIndex].companyName,
                experienceList[activeExperienceIndex].positionTitle,
                experienceList[activeExperienceIndex].startDate,
                experienceList[activeExperienceIndex].endDate,
                experienceList[activeExperienceIndex].location,
                experienceList[activeExperienceIndex].description,
                activeExperienceIndex
              );
              handleActiveExperienceIndex(-1);
            }}
          >
            Save
          </button>{" "}
          <button
            type="button"
            onClick={() => {
              handleDeleteButton(activeExperienceIndex);
              handleActiveExperienceIndex(-1);
            }}
          >
            Delete
          </button>
        </span>
      </form>
    </>
  );
}

function ExperienceNotVisible({
  experience,
  index,
  handleActiveExperienceIndex,
}) {
  return (
    <>
      <div className="experience-not-visible">
        {experience.companyName === "" ? "No name" : experience.companyName}
        <button
          type="button"
          onClick={() => handleActiveExperienceIndex(index)}
        >
          Show
        </button>
      </div>
    </>
  );
}
