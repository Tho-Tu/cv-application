export default function PreviewEducation({ educationInfo }) {
  return (
    <>
      <div className="preview-education">
        <h2>Education</h2>
        {educationInfo.map((education) => {
          return (
            <>
              <div className="single-education">
                <div className="education-date">
                  <span className="education-start-date">
                    {education.startDate}
                  </span>{" "}
                  -{" "}
                  <span className="education-end-date">
                    {education.endDate}
                  </span>
                </div>
                <div className="education-school">{education.school}</div>
                <div className="education-location">{education.location}</div>
                <div className="education-degree">{education.degree} </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
