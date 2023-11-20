import PreviewEducation from "./PreviewEducation";
import PreviewExperience from "./PreviewExperience";
import PreviewGeneralInfo from "./PreviewGeneralInfo";
import { GeneralData } from "../cv-form/GeneralInfo";
import { EducationData } from "../cv-form/Education";
import { ExperienceData } from "../cv-form/Experience";

export default function CvForm({
  generalInfo,
  educationInfo,
  experienceInfo,
}: CvFormProps) {
  return (
    <section className="cv-preview">
      <PreviewGeneralInfo generalInfo={generalInfo} />
      <PreviewEducation educationInfo={educationInfo} />
      <PreviewExperience experienceInfo={experienceInfo} />
    </section>
  );
}

interface CvFormProps {
  generalInfo: GeneralData;
  educationInfo: EducationData[];
  experienceInfo: ExperienceData[];
}
