//Quick Renaming
// Right click on the id and select Rename Symbol or use "F2" and change to desired name and it changes all related occurence

const users = [
  {
    id: "1",
    name: "Robins",
  },
  {
    id: "2",
    name: "Dennis",
  },
  {
    id: "3",
    name: "Sara",
  },
];

const filterUserById = (userId: string) => {
  return users.filter((users) => users.id === userId);
};
