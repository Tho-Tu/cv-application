import { useState } from "react";
import Education from "./Education";
import Experience from "./Experience";
import GeneralInfo from "./GeneralInfo";
import Example from "./Example";

export default function CvForm() {
  const [text, setText] = useState("");
  return (
    <section className="cv-form">
      <Example />
      <GeneralInfo />
      <Education />
      <Experience />
    </section>
  );
}
