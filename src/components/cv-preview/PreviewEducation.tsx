import { useState } from "react";

export default function PreviewEducation() {
  const [text, setText] = useState("");
  return (
    <div className="preview-education">
      <h2>Education</h2>
      <div className="education-school">University for the Real World</div>
      <div className="education-degree">Bachelor of Commerce</div>
      <div className="education-start-date">08/2021 -</div>
      <div className="education-end-date">present</div>
      <div className="education-location">New York City, US</div>
    </div>
  );
}
