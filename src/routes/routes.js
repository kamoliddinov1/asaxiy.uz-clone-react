import React from 'react';
import { Navigate } from 'react-router-dom';
import Users from '../views/Users/List';
import Auth from '../containers/Auth';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound'
import Home from '../containers/Home';
import BoshSahifa from '../pages/Home'
import Trek from '../components/SalePages/Trek';
import Tolov from '../components/SalePages/Tolov';
import Sevimlilar from '../components/SalePages/Favorites';
import Savatcha from '../components/SalePages/Basket';
import BolibTolash from '../components/AsaxiyHaqida/BolibTolash';
import Maxsulot from '../components/SalePages/Product';
import Televizor from '../pages/Televizorlar';
import TelefonGatjet from '../pages/Telefonlar';
import SportBuyumlari from '../pages/SportBuyumlari';
import Kitoblar from '../pages/Kitoblar';
import Chegirmalar from '../pages/Chegirmalar';
import YangiKelganlar from '../pages/YangiKelganlar';
import Yangiliklar from '../pages/Yangiliklar';
import SearchCard from  '../pages/Search';

import TelevisonTable from '../components/AdminPage/TelevisonTable';
import TelevisonForm from '../components/AdminPage/TelevisonTable/TelevisonForm';
import PhoneForm from '../components/AdminPage/PhoneGadjetTable/PhoneForm';
import PhoneGadjetTable from '../components/AdminPage/PhoneGadjetTable';
import BookTable from '../components/AdminPage/BookTable';
import BookForm from '../components/AdminPage/BookTable/BookForm';
import SportsGoodsTable from '../components/AdminPage/SportsGoodsTable';
import SportsGoodsForm from '../components/AdminPage/SportsGoodsTable/SportsForm';
import Admin from '../containers/Admin,';
import CaruselBannerTable from '../components/AdminPage/Banner/CaruselBanner';
import CaruselBannerTableForm from '../components/AdminPage/Banner/CaruselBannerForm';
import ProductsSold from '../components/AdminPage/ProductsSold';
import OrderProduct from '../components/SalePages/PurchasePage/Order';
import HomeTable from '../components/AdminPage/HomeTable';


export const adminRoutes = [
  {
    element: <Admin />,
    children: [
      { path: '/', element: <Navigate to='/productssold' /> },
      { path: '/productssold', element: <ProductsSold /> },

      { path: '/table/televison', element: <TelevisonTable /> },
      { path: '/televison/input', element: <TelevisonForm /> },

      { path: '/phonegadjet', element: <PhoneGadjetTable /> },
      { path: '/phonegadjet/input', element: <PhoneForm /> },

      { path: '/sportstable', element: <SportsGoodsTable /> },
      { path: '/sportstable/input', element: <SportsGoodsForm /> },

      { path: '/booktable', element: <BookTable /> },
      { path: '/booktable/input', element: <BookForm /> },

      { path: '/glavnibanner', element: <CaruselBannerTable /> },
      { path: '/glavnibanner/input', element: <CaruselBannerTableForm /> },

      { path: '/hometable', element: <HomeTable /> },

      { path: "404", element: <NotFound /> },
      { path: "*", element: <Navigate to="/productssold" /> },
    ],
  },
];


export const routes = [
  {
    element: <Home />,
    children: [
      { path: '/', element: <Navigate to='/home' /> },
      { path: '/home', element: <BoshSahifa /> },
      { path: '/trek', element: <Trek /> },
      { path: '/payment', element: <Tolov /> },
      { path: '/favourites', element: <Sevimlilar /> },
      { path: '/basket', element: <Savatcha /> },
      { path: '/order', element: <OrderProduct /> },
      { path: '/credit', element: <BolibTolash /> },
      { path: '/product', element: <Maxsulot /> },
      { path: '*', element: <Navigate to='/' /> },

      { path: '/product/televison', element: <Televizor /> },
      { path: '/product/phone', element: <TelefonGatjet /> },
      { path: '/product/sports', element: <SportBuyumlari/> },
      { path: '/product/books', element: <Kitoblar/> },
      { path: '/product/discount', element: <Chegirmalar/> },
      { path: '/product/news', element: <YangiKelganlar/> },
      { path: '/news', element: <Yangiliklar/> },
      { path: '/searchcart', element: <SearchCard/> },
      { path: "404", element: <NotFound /> },
      { path: "*", element: <Navigate to="/home" /> },
    ],
  },
];



export const publicRoutes = [
  {
    element: <Auth />,
    children: [
      { path: "/", element: <Login /> },
      { path: "/login", element: <Login /> },
      { path: "404", element: <NotFound /> },
      { path: "*", element: <Navigate to="/login" /> },
    ],
  },
];