import React from "react";
import { Typography, Box } from "@mui/material";
import passport from "../../../assets/passport.png";

const Credit = () => {
  return (
    <Box
      sx={{
        borderRadius: "15px",
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
        backgroundColor: "white",
        mt: 4,
      }}
    >
      <Box sx={{ p: "1% 4%" }}>
        <Typography variant="h6" sx={{ textAlign: "center" }}>
          Muddatli toʻlov shartlari
        </Typography>
        <Typography sx={{ fontWeight: "550" }}>
          Asaxiy.uz saytida muddatli toʻlov xizmati qanday ishlaydi?
        </Typography>
        <Typography sx={{ fontWeight: "550", fontSize: "13px", mt: 2 }}>
          Asaxiy.uz saytida muddatli toʻlov xizmati qadriyatlarga mos tarzda va
          hech qanday bank aralashuvisiz ishlaydi. Saytimizdagi barcha 15 000
          dan ortiq mahsulotlarni siz 3, 6, 9 yoki 12 oy davomida boshlangʻich
          toʻlovsiz boʻlib toʻlab borishingiz mumkin. Muddatli toʻlovga olish
          uchun xaridning minimal summasi 200 000 soʻm boʻlishi kerak.
        </Typography>
        <Typography sx={{ fontWeight: "550", mt: 3 }}>
          Muddatli toʻlovga xarid qilish uchun kerak boʻladigan hujjatlar.
        </Typography>
        <Typography sx={{ fontWeight: "550", fontSize: "13px", mt: 2 }}>
          Saytimizdan boʻlib toʻlash xizmati toʻliq onlayn tarzda ishlaydi,
          yaʼni ortiqcha ovoragarchiliklarsiz amalga oshiriladi. Muddatli
          toʻlovga ariza topshirish uchun pasport/ID karta hamda 3 oydan ortiq
          pul aylanmasiga ega (SMS-xabarnoma xizmati yoqilgan UzCard yoki HUMO)
          shaxsiy karta kerak boʻladi.
        </Typography>
        <Typography sx={{ fontWeight: "550", mt: 3 }}>
          Mahsulotni muddatli toʻlovga xarid qilish uchun nima qilish kerak?
        </Typography>
        <Typography sx={{ fontWeight: "550", fontSize: "14px", mt: 2 }}>
          Biz har bir mijozimizning vaqtini qadrlaymiz va barcha jarayonlarni
          maksimal osonlashtirib boramiz. Muddatli toʻlovga xarid qilish uchun
          bor-yoʻgʻi uch bosqichdan oʻtishingiz kifoya:
        </Typography>
        <Typography sx={{ fontWeight: "550", fontSize: "13px", mt: 2 }}>
          1 Saytimizdan kerakli mahsulotni tanlab, muddatli toʻlov tugmasini
          bosing.
        </Typography>
        <Typography sx={{ fontWeight: "550", fontSize: "13px" }}>
          2 Oʻzingiz uchun qulay va optimal boʻlgan muddatni belgilang.
        </Typography>
        <Typography sx={{ fontWeight: "550", fontSize: "13px" }}>
          3 Yangi oynada soʻralgan barcha maʼlumotlarni:
        </Typography>
        <Box sx={{ pl: "2%" }}>
          <Typography sx={{ fontFamily: "monospace" }}>
            I. Pasport/ID karta rasmlari;
          </Typography>
          <Typography sx={{ fontFamily: "monospace" }}>
            II. Doimiy ish joyi/Oʻquv oliygohi maʼlumotlari;
          </Typography>
          <Typography sx={{ fontFamily: "monospace" }}>
            III. Karta maʼlumotlarini kiriting.
          </Typography>
        </Box>
        <Typography sx={{ fontWeight: "550", mt: 2 }}>
          Jarayon tez va oson oʻtishi uchun quyidagilar muhim hisoblanadi:
        </Typography>
        <Typography sx={{ fontWeight: "550", fontSize: "13px", mt: 2 }}>
          Maʼlumotlaringizni tekshirish va ularni tahlil qilish uchun
          hujjatlaringizning fotosurati bemalol oʻqish mumkin boʻlgan darajada
          sifatli boʻlishi darkor.
        </Typography>
        <Box sx={{ width: "100%", mt: 2 }}>
          <Typography sx={{ fontWeight: "550", mt: 2 }}>Misol: </Typography>
          <img width="100%" src={passport} alt="img" />
        </Box>
        <Typography sx={{ m: "2% 0px", fontWeight: "550" }}>
          Qo‘shimcha savollar uchun +998 71 200 01 05 raqamiga yoki @asaxiybot
          telegram botiga murojaat qiling.
        </Typography>
      </Box>
    </Box>
  );
};

export default Credit;
