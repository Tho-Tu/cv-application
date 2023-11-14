import { useState } from "react";
import PreviewEducation from "./PreviewEducation";
import PreviewExperience from "./PreviewExperience";
import PreviewGeneralInfo from "./PreviewGeneralInfo";

export default function CvForm({ generalInfo, education, experience }) {
  const [text, setText] = useState("");
  return (
    <section className="cv-preview">
      <PreviewGeneralInfo generalInfo={generalInfo} />
      <PreviewEducation education={education} />
      <PreviewExperience experience={experience} />
    </section>
  );
}
