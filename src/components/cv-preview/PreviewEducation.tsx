import { useState } from "react";

export default function PreviewEducation({ educationInfo }) {
  const [text, setText] = useState("");
  return (
    <div className="preview-education">
      <h2>Education</h2>
      <div className="single-education">
        <div className="education-start-date">
          08/2021 - <span className="education-end-date">present</span>
        </div>
        <div className="education-school">University for the Real World</div>
        <div className="education-location">New York City, US</div>
        <div className="education-degree">Bachelor of Commerce</div>
      </div>
    </div>
  );
}
