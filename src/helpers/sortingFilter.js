export const filterCard = (shopData, sorting, sum) => {
  let shopData2 = shopData.filter((val, index) => {
    // eslint-disable-next-line default-case
    switch (sorting) {
      case "Yangi kelganlar":
        return val.category2 == "yangi";
        break;
      case "Avval arzonlari":
        return val.narxi < sum;
        break;
      case "Avval qimmatlari":
        return val.narxi > sum;
        break;
      case "Reyting (quisidan boshlab)":
        return index;
        break;
      default:
        return val;
    }
  });
  return shopData2;
};
