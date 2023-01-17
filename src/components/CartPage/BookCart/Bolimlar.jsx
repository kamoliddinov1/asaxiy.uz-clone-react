import React from "react";
import DepartmentsList from "../../Generic/DepartmentsList";

const data1 = [
  { id: 1, title: "Asaxiy Books kitoblari (38)" },
  { id: 2, title: "Badiiy adabiyotlar (2085)" },
  { id: 3, title: "Psixologiya va shaxsiy rivojlanish (491)" },
  { id: 4, title: "Biznes kitoblar (524)" },
  { id: 5, title: "Bolalar adabiyoti (496)" },
  { id: 6, title: "Diniy adabiyotlar (285)" },
  { id: 7, title: "Rus tilidagi kitoblar (879)" },
  { id: 8, title: "Ilm-fan va darsliklar (474)" },
  { id: 9, title: "Abituriyentlar uchun adabiyotlar (188)" },
  { id: 10, title: "TOP-100 bestseller (163)" },
  { id: 11, title: "Bestseller to‘plamlar (9)" },
  { id: 12, title: "Siyosat (6)" },
  { id: 13, title: "Detektiv va fantastika (49)" },
  { id: 14, title: "Biografiya (68)" },
  { id: 15, title: "O‘quv qurollari (3)" },
  { id: 16, title: "Turk adabiyoti (30)" },
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
