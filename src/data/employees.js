import { faker } from "@faker-js/faker";

const generateMockEmployee = () => {
  const startDate = faker.date
    .between({
      from: "2010-01-01",
      to: "2023-08-26",
    })
    .toISOString()
    .split("T")[0];

  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    dateOfBirth: formatDate(faker.date.birthdate()),
    startDate,
    department: faker.helpers.arrayElement([
      "IT",
      "HR",
      "Finance",
      "Marketing",
      "Sales",
    ]),
    address: {
      street: faker.location.streetAddress(),
      city: faker.location.city(),
      state: faker.location.state({ abbreviated: true }),
      zipCode: faker.location.zipCode().slice(0, 5),
    },
  };
};

export default function () {
  const mockData = Array.from({ length: 30 }, generateMockEmployee);
  console.log([...mockData]);
  localStorage.setItem("employees", JSON.stringify([...mockData]));
  window.location.reload();
}

const formatDate = (date) => {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // +1 because months are 0-indexed in JS
  const year = date.getFullYear();

  return `${year}-${month}-${day}`;
};
