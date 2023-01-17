import React from "react";
import DepartmentsList from "../../Generic/DepartmentsList";

const data1 = [
  { id: 1, title: "Velotrenajyorlar (8)" },
  { id: 2, title: "Yugurish uchun yo‘lkalar (25)" },
  { id: 3, title: "Kompleks trenajyorlar (14)" },
  { id: 4, title: "Elliptik trenajyorlar (6)" },
  { id: 5, title: "Fitness aksessuarlar (124)" },
  { id: 6, title: "Jang san'ati (7)" },
  { id: 7, title: "Турники (5)" },
  { id: 8, title: "Сетки спортивные (4)" },
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