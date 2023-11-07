import { useState } from "react";
import Education from "./Education";
import Experience from "./Experience";
import GeneralInfo from "./GeneralInfo";

export default function CvForm() {
  const [text, setText] = useState("");
  return (
    <section className="cv-form">
      <GeneralInfo />
      <Education />
      <Experience />
    </section>
  );
}
