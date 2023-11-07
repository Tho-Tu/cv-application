import { useState } from "react";
import PreviewEducation from "./PreviewEducation";
import PreviewExperience from "./PreviewExperience";
import PreviewGeneralInfo from "./PreviewGeneralInfo";

export default function CvForm() {
  const [text, setText] = useState("");
  return (
    <section className="cv-preview">
      <PreviewGeneralInfo />
      <PreviewEducation />
      <PreviewExperience />
    </section>
  );
}
