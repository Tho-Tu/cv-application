import { ExperienceData } from "../cv-form/Experience";

interface PreviewExperienceProps {
  experienceInfo: ExperienceData[];
}

const PreviewExperience: React.FC<PreviewExperienceProps> = ({
  experienceInfo,
}) => {
  return (
    <div className="preview-experience">
      <h2>Experience</h2>
      {experienceInfo.map((experience) => (
        <div key={experience.id} className="single-experience">
          <div className="experience-date">
            <span className="experience-start-date">
              {experience.startDate}
            </span>{" "}
            - <span className="experience-end-date">{experience.endDate}</span>
          </div>
          <div className="experience-company-name">
            {experience.companyName}
          </div>
          <div className="experience-location">{experience.location}</div>
          <div className="experience-position-title">
            {experience.positionTitle}
          </div>
          <div className="experience-description">{experience.description}</div>
          <br />
        </div>
      ))}
    </div>
  );
};

export default PreviewExperience;
