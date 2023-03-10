import React from "react";
import { Box } from "@mui/material";
import MyCheckBoxList from "../../Generic/CheckBoxList";

const data1 = [
  { id: 1, title: "Candy" },
  { id: 2, title: "2E Gaming" },
  { id: 3, title: "A4Tech" },
  { id: 4, title: "AOC" },
  { id: 5, title: "ASRock" },
  { id: 6, title: "ASUS" },
  { id: 7, title: "AUX" },
  { id: 8, title: "AWEI" },
  { id: 9, title: "Acer" },
  { id: 10, title: "Al-Harameen" },
  { id: 11, title: "Apacer" },
  { id: 12, title: "Apple" },
  { id: 13, title: "Arshia" },
  { id: 14, title: "Artel" },
  { id: 15, title: "Audio-Technica" },
  { id: 16, title: "Auldey Infinity Nado" },
  { id: 17, title: "BECKER" },
  { id: 18, title: "BQ-Mobile" },
  { id: 19, title: "BaByliss" },
  { id: 20, title: "Ballu" },
  { id: 21, title: "Belkin" },
  { id: 22, title: "BenQ" },
  { id: 23, title: "Beston" },
  { id: 24, title: "Borofone" },
  { id: 25, title: "Bosch" },
  { id: 26, title: "Braun" },
  { id: 27, title: "Canon" },
  { id: 28, title: "Chayka" },
  { id: 29, title: "Chieftec" },
  { id: 30, title: "Cooler Master" },
  { id: 31, title: "Corona" },
  { id: 32, title: "Corsair" },
  { id: 33, title: "DAFNA" },
  { id: 34, title: "DELL" },
  { id: 35, title: "DELUSSO" },
  { id: 36, title: "DT NO.1" },
  { id: 37, title: "De'Longhi" },
  { id: 38, title: "DeepCool" },
  { id: 39, title: "Defender" },
  { id: 40, title: "Diva La Opala" },
  { id: 41, title: "Ducky" },
  { id: 42, title: "EPSON" },
  { id: 43, title: "Edifier" },
  { id: 44, title: "Electrolux" },
  { id: 45, title: "Emerald" },
  { id: 46, title: "Enotmebel" },
  { id: 47, title: "Eurolux" },
  { id: 48, title: "FISKARS" },
  { id: 49, title: "FISSMAN" },
  { id: 50, title: "Fujifilm" },
  { id: 51, title: "Garmin" },
  { id: 52, title: "Geepas" },
  { id: 53, title: "Gefest" },
  { id: 54, title: "Goldstar" },
  { id: 55, title: "Goodwell" },
  { id: 56, title: "Google" },
  { id: 57, title: "Gorenje" },
  { id: 58, title: "Gree" },
  { id: 59, title: "HUION" },
  { id: 60, title: "Harbinger" },
  { id: 61, title: "Harman/Kardon" },
  { id: 62, title: "Haus Roland" },
  { id: 63, title: "Haylou" },
  { id: 64, title: "Hewlett-Packard" },
  { id: 65, title: "Hikvision" },
  { id: 66, title: "Hisense" },
  { id: 67, title: "Hitachi" },
  { id: 68, title: "Hoco" },
  { id: 69, title: "Hofmann" },
  { id: 70, title: "Hotpoint-Ariston" },
  { id: 71, title: "Huawei" },
  { id: 72, title: "Husqvarna" },
  { id: 73, title: "HyperX" },
  { id: 74, title: "Immer" },
  { id: 75, title: "Infinix" },
  { id: 76, title: "Inno3d" },
  { id: 77, title: "Inspector" },
  { id: 78, title: "Intex" },
  { id: 79, title: "JBL" },
  { id: 80, title: "Janome" },
  { id: 81, title: "Joseph-Joseph" },
  { id: 82, title: "Kenwood" },
  { id: 83, title: "Kioxia" },
  { id: 84, title: "Korkmaz" },
  { id: 85, title: "Kukmara" },
  { id: 86, title: "LG Electronics" },
  { id: 87, title: "Lenovo" },
  { id: 88, title: "Lexar" },
];

const IshlabChiquvchi = () => {
  return (
    <Box>
      <MyCheckBoxList mydata={data1} nomi="Ishlab Chiqaruvchi" />
    </Box>
  );
};
export default IshlabChiquvchi;
