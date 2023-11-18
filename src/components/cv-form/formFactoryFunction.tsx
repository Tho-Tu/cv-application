import { v4 as uuidv4 } from "uuid";

function educationFormFactory(
  school = "",
  degree = "",
  startDate = "",
  endDate = "",
  location = "",
  id = uuidv4()
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
  id = uuidv4()
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
