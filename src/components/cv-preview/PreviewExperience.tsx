import { useState } from "react";

export default function PreviewExperience({ experienceInfo }) {
  const [text, setText] = useState("");
  return (
    <div className="preview-experience">
      <h2>Experience</h2>
      <div className="single-experience">
        <div className="experience-start-date">
          08/2022 - <span className="experience-end-date">present</span>
        </div>
        <div className="experience-company-name">Google</div>
        <div className="experience-location">New York City, US</div>

        <div className="experience-position-title">
          Software Engineer, Intern
        </div>
        <div className="experience-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
          placeat nulla ea possimus at sapiente magni voluptatem enim cupiditate
          fugiat, aspernatur quam distinctio blanditiis vero obcaecati
          perspiciatis animi consectetur quos!
        </div>
      </div>
    </div>
  );
}
