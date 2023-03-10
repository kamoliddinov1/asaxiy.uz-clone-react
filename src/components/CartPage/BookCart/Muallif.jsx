import React from "react";
import { Box } from "@mui/material";
import MyCheckBoxList from "../../Generic/CheckBoxList";

const data1 = [
  { id: 1, title: "Abbos Said" },
  { id: 2, title: "Abdel Sellu" },
  { id: 3, title: "Abdug`affor Mutalibov" },
  { id: 4, title: "Abdujabbor Obidov" },
  { id: 5, title: "Abdukarim Mirzayev" },
  { id: 6, title: "Abdulhamid Cho`lpon" },
  { id: 7, title: "Abdulla Oripov" },
  { id: 8, title: "Abdulla Qahhor" },
  { id: 9, title: "Abduqahhor Ismoilov" },
  { id: 10, title: "Abduqayum Yo'ldoshev" },
  { id: 11, title: "Abduqayum Yo`ldoshev" },
  { id: 12, title: "Abdurahmon Ibrohim" },
  { id: 13, title: "Abdurahmon Raf'at Posho" },
  { id: 14, title: "Abdurashid Nurmurodov" },
  { id: 15, title: "Abdusaid Ko‘chimov" },
  { id: 16, title: "Abror Akbarov" },
  { id: 17, title: "Abror Pir Muhammad" },
  { id: 18, title: "DeAbror Zohidov" },
  { id: 19, title: "Abu Ali Ibn Sino" },
  { id: 20, title: "Abu Ali Ibn Sino" },
  { id: 21, title: "Abu Homid G'azzoliy" },
  { id: 22, title: "Abu Iyso Muhammad at-Termiziy" },
  { id: 23, title: "Adem Gunesh" },
  { id: 24, title: "Agata Kristi" },
  { id: 25, title: "Ahmad Gunbay Yildiz" },
  { id: 26, title: "Ahmad Hodiy Maqsudiy" },
  { id: 27, title: "Ahmad ibn Ibrohim Sa'labiy" },
  { id: 28, title: "Ahmadjon Meliboyev" },
  { id: 29, title: "Ahmad Lutfiy Qozonchi" },
  { id: 30, title: "Akmal Najmiddinov" },
  { id: 31, title: "Akrom Malik" },
  { id: 32, title: "Alber Kamyu" },
  { id: 33, title: "Albert Olmsted" },
  { id: 34, title: "Aleksandr Dyuma" },
  { id: 35, title: "Aleksandr Fild" },
  { id: 36, title: "Aleksandr Kuprin" },
  { id: 37, title: "Alisher Absalomov" },
  { id: 38, title: "Alisher Navoiy" },
  { id: 39, title: "Amina Shenliko'g'li" },
  { id: 40, title: "Andrey Platonov" },
  { id: 41, title: "Anil Chandra" },
  { id: 42, title: "Anna Aleksandrovna Bikova" },
  { id: 43, title: "Anorqul Rustamov" },
  { id: 44, title: "Anthony Horowitz" },
  { id: 45, title: "Antoine de Saint Exupery" },
  { id: 46, title: "Anvar Obidjon" },
  { id: 47, title: "Asqad Muxtor" },
  { id: 48, title: "Axtam Ro'zimuratov" },
  { id: 49, title: "Azamat Qorjovov" },
  { id: 50, title: "Azamat Qorjovov" },
  { id: 51, title: "Azizaxon Tashxodjayeva" },
  { id: 52, title: "Aziz Nesin" },
  { id: 53, title: "Bahodir Yangishaharliko‘g‘li" },
  { id: 54, title: "Baxtiyor Abdug`afur" },
  { id: 55, title: "Baxtiyor Sheraliyev" },
  { id: 56, title: "Bekzod Yo'ldoshev" },
  { id: 57, title: "Benjamin Franklin" },
  { id: 58, title: "Berkutay Soysal" },
  { id: 59, title: "Bilol Kemikli" },
  { id: 60, title: "Bobur Bobomurod" },
  { id: 61, title: "Bodo Shefer" },
  { id: 62, title: "Bogomil Raynov" },
  { id: 63, title: "Boqiy Mirzo" },
  { id: 64, title: "Brayan Treysi" },
  { id: 65, title: "Charlz Dikkens" },
  { id: 66, title: "Chingiz Aytmatov" },
  { id: 67, title: "Chingiz Aytmatov, Muxtor Shoxonov" },
  { id: 68, title: "Chris Ryan" },
  { id: 69, title: "Dafna dyu Morye" },
  { id: 70, title: "Daniel Ergin" },
  { id: 71, title: "Danielle Steel" },
  { id: 72, title: "Daron Acemoglu, James A. Robinson" },
  { id: 73, title: "Daron Ajemo'g'li, Jeyms Robinson" },
  { id: 74, title: "Daron Аjemoʼgʼli, Jeyms А. Robinson" },
  { id: 75, title: "David Baldacci" },
  { id: 76, title: "Davron Nurmuhammad" },
  { id: 77, title: "Davron Sultonov" },
  { id: 78, title: "Davron Sultonov" },
  { id: 79, title: "Deyl Karnegi" },
  { id: 80, title: "Dilorom Karimova" },
  { id: 81, title: "Dilro'z" },
  { id: 82, title: "Dino Butssati" },
  { id: 83, title: "Doktor Hasson Shamsiy" },
  { id: 84, title: "Doktor Oiz Qarniy" },
  { id: 85, title: "Dundar Alp" },
  { id: 86, title: "Edgar Allan Po" },
  { id: 87, title: "Efraim Sevela" },
  { id: 88, title: "Elchin Safarli" },
];

const Muallif = () => {
  return (
    <Box sx={{mt:3}}>
      <MyCheckBoxList mydata={data1} nomi="Muallif" />
    </Box>
  );
};
export default Muallif;
