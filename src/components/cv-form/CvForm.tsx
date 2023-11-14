import { useState } from "react";
import Education from "./Education";
import Experience from "./Experience";
import GeneralInfo from "./GeneralInfo";
import Example from "./Example";

export default function CvForm({ generalInfo, education, experience }) {
  const [text, setText] = useState("");
  return (
    <section className="cv-form">
      <Example />
      <GeneralInfo generalInfo={generalInfo} />
      <Education education={education} />
      <Experience experience={experience} />
    </section>
  );
}
