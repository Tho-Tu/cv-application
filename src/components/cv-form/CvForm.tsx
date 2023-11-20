import GeneralInfo, { GeneralData } from "./GeneralInfo";
import Education, { EducationData } from "./Education";
import Experience, { ExperienceData } from "./Experience";
import { ChangeEvent } from "react";
import Example from "./Example";

interface CvFormProps {
  exampleInfo: {
    handleClearCv: () => void;
    handleLoadExample: () => void;
  };
  generalInfo: {
    generalInfo: GeneralData;
    handleFullName: (e: ChangeEvent<HTMLInputElement>) => void;
    handleEmail: (e: ChangeEvent<HTMLInputElement>) => void;
    handlePhoneNumber: (e: ChangeEvent<HTMLInputElement>) => void;
    handleAddress: (e: ChangeEvent<HTMLInputElement>) => void;
  };
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
      activeExperienceIndex: number | string
    ) => void;
    handleExpDeleteButton: (activeExperienceIndex: number) => void;
    handleActiveExperienceIndex: (index: number) => void;
    handleExpNewButton: () => void;
  };
}

export default function CvForm({
  exampleInfo,
  generalInfo,
  educationInfo,
  experienceInfo,
}: CvFormProps) {
  return (
    <section className="cv-form">
      <Example exampleInfo={exampleInfo} />
      <GeneralInfo generalInfo={generalInfo} />
      <Education educationInfo={educationInfo} />
      <Experience experienceInfo={experienceInfo} />
    </section>
  );
}

export type { GeneralData } from "./GeneralInfo";
export type { EducationData } from "./Education";
export type { ExperienceData } from "./Experience";
