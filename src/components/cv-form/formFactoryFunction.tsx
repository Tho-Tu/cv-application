import { v4 as uuid4 } from "uuid";

function educationFormFactory(
  school = "",
  degree = "",
  startDate = "",
  endDate = "",
  location = "",
  id = uuid4()
) {
  return { school, degree, startDate, endDate, location, id };
}

function experienceFormFactory(
  companyName = "",
  positionTitle = "",
  startDate = "",
  endDate = "",
  location = "",
  description = "",
  id = uuid4()
) {
  return {
    companyName,
    positionTitle,
    startDate,
    endDate,
    location,
    description,
    id,
  };
}

export { educationFormFactory, experienceFormFactory };
