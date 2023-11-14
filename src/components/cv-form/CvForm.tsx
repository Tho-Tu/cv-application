import Education from "./Education";
import Experience from "./Experience";
import GeneralInfo from "./GeneralInfo";
import Example from "./Example";

export default function CvForm({ generalInfo, education, experience }) {
  return (
    <section className="cv-form">
      <Example />
      <GeneralInfo generalInfo={generalInfo} />
      <Education education={education} />
      <Experience experience={experience} />
    </section>
  );
}
