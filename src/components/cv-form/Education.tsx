import LabelComponent from "./LabelComponent.tsx";

interface EducationProps {
  educationInfo: {
    educationList: EducationData[];
    activeEducationIndex: number;
    handleEducationList: (
      activeEducationIndex: number,
      property: keyof EducationData,
      eventValue: string
    ) => void;
    handleSaveButton: (
      school: string | undefined,
      degree: string | undefined,
      startDate: string | undefined,
      endDate: string | undefined,
      location: string | undefined,
      activeEducationIndex: number
    ) => void;
    handleDeleteButton: (activeEducationIndex: number) => void;
    handleActiveEducationIndex: (index: number) => void;
    handleNewButton: () => void;
  };
}

export interface EducationData {
  school: string;
  degree: string;
  startDate: string;
  endDate: string;
  location: string;
  id: string;
}

export default function Education({ educationInfo }: EducationProps) {
  return (
    <div className="education">
      <h2>Education</h2>
      <EducationListComponent
        educationList={educationInfo.educationList}
        activeEducationIndex={educationInfo.activeEducationIndex}
        handleEducationList={educationInfo.handleEducationList}
        handleSaveButton={educationInfo.handleSaveButton}
        handleDeleteButton={educationInfo.handleDeleteButton}
        handleActiveEducationIndex={educationInfo.handleActiveEducationIndex}
      />
      <button type="button" onClick={educationInfo.handleNewButton}>
        + Education
      </button>
    </div>
  );
}

interface EducationListComponentProps {
  educationList: EducationData[];
  activeEducationIndex: number;
  handleEducationList: (
    activeEducationIndex: number,
    property: keyof EducationData,
    eventValue: string
  ) => void;
  handleSaveButton: (
    school: string | undefined,
    degree: string | undefined,
    startDate: string | undefined,
    endDate: string | undefined,
    location: string | undefined,
    activeEducationIndex: number
  ) => void;
  handleDeleteButton: (activeEducationIndex: number) => void;
  handleActiveEducationIndex: (index: number) => void;
}

function EducationListComponent({
  educationList,
  activeEducationIndex,
  handleEducationList,
  handleSaveButton,
  handleDeleteButton,
  handleActiveEducationIndex,
}: EducationListComponentProps) {
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

interface EducationFormProps {
  educationList: EducationData[];
  activeEducationIndex: number;
  handleEducationList: (
    activeEducationIndex: number,
    property: keyof EducationData,
    eventValue: string
  ) => void;
  handleSaveButton: (
    school: string | undefined,
    degree: string | undefined,
    startDate: string | undefined,
    endDate: string | undefined,
    location: string | undefined,
    activeEducationIndex: number
  ) => void;
  handleDeleteButton: (activeEducationIndex: number) => void;
  handleActiveEducationIndex: (index: number) => void;
}

function EducationForm({
  educationList,
  activeEducationIndex,
  handleEducationList,
  handleSaveButton,
  handleDeleteButton,
  handleActiveEducationIndex,
}: EducationFormProps) {
  return (
    <>
      <form className="forms">
        <LabelComponent
          name="School"
          value={educationList[activeEducationIndex].school}
          handlerFunction={(e: { target: { value: string } }) =>
            handleEducationList(activeEducationIndex, "school", e.target.value)
          }
        />
        <LabelComponent
          name="Degree"
          value={educationList[activeEducationIndex].degree}
          handlerFunction={(e: { target: { value: string } }) =>
            handleEducationList(activeEducationIndex, "degree", e.target.value)
          }
        />
        <LabelComponent
          name="Start Date"
          value={educationList[activeEducationIndex].startDate}
          handlerFunction={(e: { target: { value: string } }) =>
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
          handlerFunction={(e: { target: { value: string } }) =>
            handleEducationList(activeEducationIndex, "endDate", e.target.value)
          }
        />
        <LabelComponent
          name="Location"
          value={educationList[activeEducationIndex].location}
          handlerFunction={(e: { target: { value: string } }) =>
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

interface EducationNotVisibleProps {
  education: EducationData;
  index: number;
  handleActiveEducationIndex: (index: number) => void;
}

function EducationNotVisible({
  education,
  index,
  handleActiveEducationIndex,
}: EducationNotVisibleProps) {
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
