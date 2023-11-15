import Education from "./Education";
import Experience from "./Experience";
import GeneralInfo from "./GeneralInfo";
import Example from "./Example";

export default function CvForm({ generalInfo, educationInfo, experienceInfo }) {
  return (
    <section className="cv-form">
      <Example />
      <GeneralInfo generalInfo={generalInfo} />
      <Education educationInfo={educationInfo} />
      <Experience experienceInfo={experienceInfo} />
    </section>
  );
}
