import { Key } from "react";
import LabelComponent from "./LabelComponent";

interface ExperienceProps {
  experienceInfo: {
    experienceList: ExperienceData[];
    activeExperienceIndex: number;
    handleExperienceList: (
      activeExperienceIndex: number,
      property: keyof ExperienceData,
      eventValue: string
    ) => void;
    handleExpSaveButton: (
      companyName: string | undefined,
      positionTitle: string | undefined,
      startDate: string | undefined,
      endDate: string | undefined,
      location: string | undefined,
      description: string | undefined,
      activeExperienceIndex: string | number
    ) => void;
    handleExpDeleteButton: (activeExperienceIndex: number) => void;
    handleActiveExperienceIndex: (index: number) => void;
    handleExpNewButton: () => void;
  };
}

export interface ExperienceData {
  companyName: string;
  positionTitle: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string;
  id: string;
}

export default function Experience({ experienceInfo }: ExperienceProps) {
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

interface ExperienceListComponentProps {
  experienceList: {
    companyName: string;
    positionTitle: string;
    startDate: string;
    endDate: string;
    location: string;
    description: string;
    id: string;
  }[];
  activeExperienceIndex: number;
  handleExperienceList: (
    activeExperienceIndex: number,
    property: keyof ExperienceData,
    eventValue: string
  ) => void;
  handleSaveButton: (
    companyName: string | undefined,
    positionTitle: string | undefined,
    startDate: string | undefined,
    endDate: string | undefined,
    location: string | undefined,
    description: string | undefined,
    activeExperienceIndex: string | number
  ) => void;
  handleDeleteButton: (activeExperienceIndex: number) => void;
  handleActiveExperienceIndex: (index: number) => void;
}

function ExperienceListComponent({
  experienceList,
  activeExperienceIndex,
  handleExperienceList,
  handleSaveButton,
  handleDeleteButton,
  handleActiveExperienceIndex,
}: ExperienceListComponentProps) {
  if (experienceList.length <= 0) {
    return <></>;
  }

  return experienceList.map(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (experience: { id: Key | null | undefined }, index: any) => {
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
    }
  );
}

interface ExperienceFormProps {
  experienceList: ExperienceData[];
  activeExperienceIndex: number;
  handleExperienceList: (
    activeExperienceIndex: number,
    property: keyof ExperienceData,
    eventValue: string
  ) => void;
  handleSaveButton: (
    companyName: string | undefined,
    positionTitle: string | undefined,
    startDate: string | undefined,
    endDate: string | undefined,
    location: string | undefined,
    description: string | undefined,
    activeExperienceIndex: number
  ) => void;
  handleDeleteButton: (activeExperienceIndex: number) => void;
  handleActiveExperienceIndex: (index: number) => void;
}

function ExperienceForm({
  experienceList,
  activeExperienceIndex,
  handleExperienceList,
  handleSaveButton,
  handleDeleteButton,
  handleActiveExperienceIndex,
}: ExperienceFormProps) {
  return (
    <>
      <form className="forms">
        <LabelComponent
          name={"Company Name"}
          value={experienceList[activeExperienceIndex].companyName}
          handlerFunction={(e: { target: { value: string } }) => {
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
          handlerFunction={(e: { target: { value: string } }) =>
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
          handlerFunction={(e: { target: { value: string } }) =>
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
          handlerFunction={(e: { target: { value: string } }) =>
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
          handlerFunction={(e: { target: { value: string } }) =>
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
          handlerFunction={(e: { target: { value: string } }) =>
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

interface CompanyExperience {
  companyName: string;
  positionTitle: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string;
  id: string;
}

interface ExperienceNotVisibleProps {
  experience: CompanyExperience | { id: Key | null | undefined };
  index: number;
  handleActiveExperienceIndex: (index: number) => void;
}

function isCompanyExperience(
  experience: CompanyExperience | { id: Key | null | undefined }
): experience is CompanyExperience {
  return "companyName" in experience;
}

function ExperienceNotVisible({
  experience,
  index,
  handleActiveExperienceIndex,
}: ExperienceNotVisibleProps) {
  if (!isCompanyExperience(experience)) {
    return <div className="experience-not-visible">No name</div>;
  }

  return (
    <div className="experience-not-visible">
      {experience?.companyName === "" ? "No name" : experience?.companyName}
      <button type="button" onClick={() => handleActiveExperienceIndex(index)}>
        Show
      </button>
    </div>
  );
}
