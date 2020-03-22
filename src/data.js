export const columns = [
 {
  name: "firstName",
  label: "First Name",
  options: {
   filter: false,
   sort: true,
  }
 },
 {
  name: "lastName",
  label: "Last Name",
  options: {
   filter: false,
   sort: true,
  }
 },
 {
  name: "role",
  label: "Role",
  options: {
   filter: true,
   sort: true,
  }
 },
 {
  name: "department",
  label: "Department",
  options: {
   filter: true,
   sort: true,
  }
 },
];

export const data = [
  { firstName: "John",   lastName: "Doe",      role: "CEO",                   department: "Management" }, 
  { firstName: "Joe",    lastName: "Rop",      role: "Product Manager",       department: "Management" }, 
  { firstName: "Blarf",  lastName: "Ranlp",    role: "Senior Engineer",       department: "Engineering" }, 
  { firstName: "Jort",   lastName: "Plawn",    role: "Junior Engineer",       department: "Engineering" }, 
  { firstName: "Wort",   lastName: "Plorry",   role: "Sales Lead",            department: "Sales" }, 
  { firstName: "Wrop",   lastName: "Furtin",   role: "Creative Director",     department: "Marketing" },
  { firstName: "Tril",   lastName: "Yurktun",  role: "Social Media Manager",  department: "Marketing" },
  { firstName: "Mike",   lastName: "Flanders",   role: "Sales Member",     department: "Sales" },
  { firstName: "Lebron",   lastName: "James",   role: "Celebrity Endorsement",     department: "Marketing" },
  { firstName: "Jordan",   lastName: "Jones",   role: "Team Member",     department: "Marketing" },
  { firstName: "Steve",   lastName: "Jobs",   role: "Chief Technology Officer",     department: "Engineering" },
  { firstName: "Tom",   lastName: "Brady",   role: "Celebrity Endorsement",     department: "Marketing" },
];

export const options = {
  filterType: 'checkbox',
  print: false,
  download: false
};

