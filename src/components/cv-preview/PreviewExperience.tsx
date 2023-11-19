export default function PreviewExperience({ experienceInfo }) {
  return (
    <>
      <div className="preview-experience">
        <h2>Experience</h2>
        {experienceInfo.map((experience) => {
          return (
            <>
              <div className="single-experience">
                <div className="experience-date">
                  <span className="experience-start-date">
                    {experience.startDate}
                  </span>{" "}
                  -{" "}
                  <span className="experience-end-date">
                    {experience.endDate}
                  </span>
                </div>
                <div className="experience-company-name">
                  {experience.companyName}
                </div>
                <div className="experience-location">{experience.location}</div>
                <div className="experience-position-title">
                  {experience.positionTitle}{" "}
                </div>
                <div className="experience-description">
                  {experience.description}
                </div>
              </div>
              <br></br>
            </>
          );
        })}
      </div>
    </>
  );
}
