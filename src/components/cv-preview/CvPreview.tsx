import PreviewEducation from "./PreviewEducation";
import PreviewExperience from "./PreviewExperience";
import PreviewGeneralInfo from "./PreviewGeneralInfo";

export default function CvForm({ generalInfo, educationInfo, experienceInfo }) {
  return (
    <section className="cv-preview">
      <PreviewGeneralInfo generalInfo={generalInfo} />
      <PreviewEducation educationInfo={educationInfo} />
      <PreviewExperience experienceInfo={experienceInfo} />
    </section>
  );
}
