import { useState } from "react";

export default function PreviewExperience() {
  const [text, setText] = useState("");
  return (
    <div className="preview-experience">
      <h2>Experience</h2>
      <div className="experience-company-name">Google</div>
      <div className="experience-position-title">Software Engineer, Intern</div>
      <div className="experience-start-date">08/2022 -</div>
      <div className="experience-end-date">present</div>
      <div className="experience-location">New York City, US</div>
      <div className="experience-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere placeat
        nulla ea possimus at sapiente magni voluptatem enim cupiditate fugiat,
        aspernatur quam distinctio blanditiis vero obcaecati perspiciatis animi
        consectetur quos!
      </div>
    </div>
  );
}
