import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import LabelComponent from "./LabelComponent";

export default function Experience({ experienceInfo }) {
  return (
    <div className="experience">
      <h2>Experience</h2>
      <ExperienceListComponent
        experienceList={experienceInfo.experienceList}
        activeExperienceIndex={experienceInfo.activeExperienceIndex}
        handleExperienceList={experienceInfo.handleExperienceList}
        handleSaveButton={experienceInfo.handleExpSaveButton}
        handleDeleteButton={experienceInfo.handleExpDeleteButton}
        handleActiveExperienceIndex={experienceInfo.handleActiveExperienceIndex}
      />
      <button type="button" onClick={experienceInfo.handleExpNewButton}>
        + Experience
      </button>
    </div>
  );
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
