import React from "react";
import { Box, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";

const Asaxiy = () => {
  return (
    <Box sx={{ backgroundColor: "white", m: "35px 0px", borderRadius: "15px",  boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px" }}>
      <Box sx={{ p: "30px 25px" }}>
        <Typography variant="h4" fontWeight={550}>
          Asaxiy kompaniyasi haqida
        </Typography>
        <Typography mt={1} variant="subtitle2">
          Butun O‘zbekiston bo‘ylab maishiy texnika va elektronika tovarlarini
          yetkazib beruvchi kompaniyamizning asosiy afzalligi – ko‘p yillik ish
          tajribasi va yaxshi nom qozonib ulgurganidir. Asos solinganidan buyon
          Asaxiy internet-do‘koni va uning jamoasi iste’mol bozorining talablari
          tendensiyalarini tinimsiz kuzatib kelmoqda; bu esa bizga eng so‘nggi
          texnologiyalar va innovatsion yechimlardan hamisha boxabar bo‘lib
          turish imkonini beradi.
        </Typography>
        <Typography mt={2} variant="subtitle2">
          Kompaniiya mutaxassislari mijozlarimizning istaklarini diqqat bilan
          o‘rganishadi, shu bois resurs doimiy tarzda hamyonbop narxlardagi
          sifatli yangi mahsulotlar bilan boyitilib kelmoqda.
        </Typography>
        <div style={{ marginTop: "20px" }}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Kompaniyaning ish tamoyili</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="subtitle2">
                Har bir xaridor <Link>telefonlar va boshqa gadjetlar</Link>ni
                qulay shart-sharoitlarda, maksimal darajada tez tanlay olishi
                kerak; shuning uchun biz intuitiv tushunarli menyu yaratganmiz,
                internetning yangi foydalanuvchilari ham uni o‘zlashtirib
                olishlari oson. Juda qulay bo‘lishini ko‘zlab biz menyu qismini
                tegishli bo‘limlarga ajratganmiz, ularda siz 15 ming xildan
                ortiq orgtexnika va unga yondosh tovarlarni topishingiz mumkin.
                Ular quyidagicha ko‘rinish olgan:
              </Typography>
              <Typography mt={2}>
                • <Link>idish-tovoqlar</Link> – bu yerda siz kundalik
                turmushimizda ishlatiladigan turli-tuman uy-ro‘zg‘or
                buyumlarining eng keraklilarini topasiz. Do‘konimiz saytida
                taqdim etilgan tovarlar yuqori sifatga va mustahkamlikka ega;
              </Typography>
              <Typography mt={1}>
                • <Link>konditsionerlar</Link> va uy iqlimi texnikasi – bu
                bo‘lim o‘z ehtiyojlaringizga mos tarzda foydali xaridlar
                qilishingizda ko‘maklashadi. Har bir tovarning tavsifi berilgan,
                bu esa to‘g‘ri tanlash imkonini beradi;
              </Typography>
              <Typography mt={1}>
                • <Link>televizorlar, video va audio</Link> tovarlari navbatdagi
                bo‘limda joylashgan, bu bo‘lim maishiy texnika mahsulotlari
                nomiga munosib. Bu yerda zamon bilan hamqadam tarzdagi
                funksiyalarning to‘laqonli ro‘yxatiga ega bo‘lgan eng so‘nggi
                yangi mahsulotlar va ishlanmalar o‘rin olgan;
              </Typography>
              <Typography mt={1}>
                • <Link>go‘zallik va salomatlik uchun texnika</Link> – doimiy
                xaridorlarimiz bo‘lmish ayol-qizlarga eng sevimli bo‘limlardan
                biri. Zero, ular salomatlikning qadriga yetishadi va to‘g‘ri
                ovqatlanish yo‘li bilan tabiiy go‘zallikka intilishadi;
              </Typography>
              <Typography mt={1}>
                • <Link>Kompyuterlar va orgtexnika</Link> – eng katta bo‘lim,
                chunki u kompyuterlashtirish jarayonini osonlashtirishga va ish
                vaqti sarfini kamaytirishga mo‘ljallangan barcha turdagi
                aksessuarlar hamda yordamchi butlovchi qismlarni ham o‘z ichiga
                olgan.
              </Typography>
              <Typography mt={2}>
                Shuningdek, Asaxiy.uz kompaniyamiz o‘yin servislari ishqibozlari
                haqida ham qayg‘uradi, <Link>geymerlar uchun</Link> bo‘limi
                buning yaqqol dalilidir. Bu yerda qudratli kompyuter ta’minoti
                mahsulotlari, o‘yinbop sichqoncha va klaviaturalar taqdim
                etilgan; ular o‘yin jarayonini maksimal darajada aniq va bexato
                amalga oshirishga imkon beradi.
              </Typography>
              <Typography mt={2}>
                Mutolaa ixlosmandlari uchun esa biz audio <Link>kitoblar</Link>{" "}
                ko‘rinishida takomillashtirilgan adabiyot namunalarini taqdim
                etmoqdamiz; ularning janr va mavzulari yetarlicha keng ko‘lamli.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Bizning afzalliklarimiz</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Asaxiy.uz kompaniyasi o‘zining barcha imkoniyatlarini shiddat
                bilan kengaytirmoqda, bugun biz o‘z mijozlarimizga ancha-muncha
                <Link> chegirmalar</Link>ni va bir qator shaharlarga tezkor
                yetkazib berishni taklif etmoqdamiz. Bizning xizmat ko‘rsatish
                hududimizga Andijon, Buxoro, Farg‘ona, Jizzax, Xorazm, Namangan,
                Navoiy, Qashqadaryo, Samarqand, Sirdaryo, Surxondaryo va butun
                Toshkent viloyatidagi, shuningdek, Qoraqalpog‘iston
                Respublikasidagi shaharlar kiradi. Bu hali biz tovar yetkazib
                berayotgan hududlarning to‘liq xaritasi emas. Bizning yetkazib
                berish hududlarimiz bilan batafsil tanishish uchun
                internet-do‘konimiz mutaxassisiga qo‘ng‘iroq qilishingiz mumkin,
                u sizni qiziqtiruvchi barcha ma’lumotlarni taqdim etadi.
              </Typography>
              <Typography mt={2}>
                Do‘konimizning har bir xaridori – hurmatli mehmonimizdir, unga
                biz yoqimli chegirmalar va bonus dasturlarini taklif etamiz. Biz
                mijoz talablariga mos tovarlarni tanlash jarayonida unga to‘liq
                hamrohlik qilamiz va istalgan qulay usul bilan yetkazib berishni
                amalga oshiramiz.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        <Box mt={3}>
          <Typography variant="subtitle2">"Asaxiy Books" MCHJ</Typography>
          <Typography variant="subtitle2">
            Ro'yxatdan o'tish raqami: 646439
          </Typography>
          <Typography variant="subtitle2">INN: 305829008</Typography>
          <Typography variant="subtitle2">
            MCHJ rahbari: Allayev Firuz Abdunasimovich
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Asaxiy;