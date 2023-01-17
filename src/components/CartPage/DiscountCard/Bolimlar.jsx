import React from "react";
import DepartmentsList from "../../Generic/DepartmentsList";

const data1 = [
  { id: 1, title: "Kitoblar (49)" },
  { id: 2, title: "Telefonlar va gadjetlar (444)" },
  { id: 3, title: "Konditsionerlar (73)" },
  { id: 4, title: "Kompyuterlar va orgtexnika (346)" },
  { id: 5, title: "Geymerlar uchun (84)" },
  { id: 6, title: "Maishiy texnika (906)" },
  { id: 7, title: "Televizorlar, video va audio (56)" },
  { id: 8, title: "Idish-tovoqlar (186)" },
  { id: 9, title: "Mebel (14)" },
  { id: 10, title: "Sport va dam olish (21)" },
  { id: 11, title: "Uy va ofis uchun texnika va jihozlar (154)" },
  { id: 12, title: "Avto (68)" },
  { id: 13, title: "O‘yinchoqlar, sovg‘alar va aksessuarlar (17)" },
  { id: 14, title: "Kiyim, poyabzal va aksessuarlar (43)" },
  { id: 15, title: "Bolalar uchun tovarlar (1)" },
  { id: 16, title: "Goʻzallik va salomatlik (4)" },
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
