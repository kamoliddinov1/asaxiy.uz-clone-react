import React from "react";
import DepartmentsList from "../../Generic/DepartmentsList";

const data1 = [
  { id: 1, title: "Telefonlar (503)" },
  { id: 2, title: "Planshetlar (145)" },
  { id: 3, title: "Smart-soatlar va brasletlar (247)" },
  { id: 4, title: "Radiostansiyalar (12)" },
  { id: 5, title: "Fakslar (3)" },
  { id: 6, title: "Smartfonlar va planshetlar uchun aksessuarlar (835)" },
  { id: 7, title: "Audiotexnika va quloqchinlar (547)" },
  { id: 8, title: "Elektron kitoblar (11)" },
  { id: 9, title: "Virtual reallik ko‘zoynaklari (5)" },
];
const Bolimlar = () => {
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <div>
      <DepartmentsList dataDepartment={data1} />
    </div>
  );
};
export default Bolimlar;