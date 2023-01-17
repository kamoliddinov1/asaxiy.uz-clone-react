// import UserIcon from 'https://asaxiy.uz/custom-assets/images/icons/header/avatar.svg';
// import FavoritesIcon from "https://asaxiy.uz/custom-assets/images/icons/header/heart.svg";
// import SaveIcon from "https://asaxiy.uz/custom-assets/images/icons/header/cart.svg";
// import GlobalIcon from "https://asaxiy.uz/custom-assets/images/icons/header/language.svg";
// import TruckIcon from "https://asaxiy.uz/custom-assets/images/icons/header/tracker.svg";
// import PaymentIcon from "https://asaxiy.uz/custom-assets/images/icons/header/payment.svg";
// import { ReactComponent as yangikelganicon} from 'https://asaxiy.uz/custom-assets/images/icons/header/icons8-new-product.svg';

import BarchaBolimlar from "../AllParts";
import { IoInformationCircleSharp } from "react-icons/io5";
import { RiNewspaperLine } from "react-icons/ri";

export const navData = [
    {
      id: 1,
      title: "Tolov",
      icon: "https://asaxiy.uz/custom-assets/images/icons/header/payment.svg",
      link: "/payment",
    },
    {
      id: 2,
      title: "Trek",
      icon: "https://asaxiy.uz/custom-assets/images/icons/header/tracker.svg",
      link: "/trek",
    },
    {
      id: 3,
      title: "Sevimlilar",
      icon: "https://asaxiy.uz/custom-assets/images/icons/header/heart.svg",
      link: "/favourites",
    },
    {
      id: 4,
      title: "Yangi maxsulotlar",
      icon: "https://asaxiy.uz/custom-assets/images/icons/header/icons8-new-product.svg",
      link: "/yangiMaxsulotlar",
    },
    {
      id: 5,
      title: "Yangiliklar",
      icon: <RiNewspaperLine />,
      svg: true,
      link: "/news",
    },
    {
      id: 6,
      title: "Biz haqimizda",
      icon: <IoInformationCircleSharp />,
      svg: true,
      link: "/bizHaqimizda",
    },
  ];

  export const adminNavData = [
    {id:1, name:'Bosh sahifa', link:'/hometable'},
    {id:2, name:'Kitoblar', link:'/booktable'},
    {id:3, name:'Telefon va Gadjetlar', link:'/phonegadjet'},
    {id:4, name:'Televizorlar', link:'/table/televison'},
    {id:5, name:'Sport Buyumlari', link:'/sportstable'},
  ]

 export const pagedata = [
    { title: <BarchaBolimlar /> },
    { title: "Yangiliklar", link: "/news" },
    { title: "Yangi kelganlar", link: "/product/news" },
    { title: "Chegirmalar", link: "/product/discount" },
    { title: "Kitoblar", link: "/product/books" },
    { title: "Telefonlar va gadjetlar", link: "/product/phone",},
    { title: "Telivizorlar", link: "/product/televison" },
    { title: "Sport buyumlari", link: "/product/sports" },
  ];