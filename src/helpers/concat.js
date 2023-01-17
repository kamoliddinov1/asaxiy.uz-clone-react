import {useState, useEffect} from 'react';
import servicesPhone from '../services/telefonlar';
import servicesTelevison from '../services/televizor';
import servicesBook from '../services/kitob';
import servicesSports from '../services/sportbuyum';

export  const Concat = () => {
    const [dataPhone, serDataPhone] = useState([]);
    const [dataTelevison, serDataTelevison] = useState([]);
    const [dataBook, serDataBook] = useState([]);
    const [dataSports, serDataSports] = useState([]);

    useEffect(() => {
        servicesPhone.getAll().then((res) => serDataPhone(res));
        servicesTelevison.getAll().then((res) => serDataTelevison(res));
        servicesBook.getAll().then((res) => serDataBook(res));
        servicesSports.getAll().then((res) => serDataSports(res));
    }, [])

    let data = dataPhone.concat(dataTelevison, dataBook, dataSports)

    return data;
};
