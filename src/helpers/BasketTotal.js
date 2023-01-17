
 export const getTotalPrice = (basketData) => {
    let totalQuantity = 0
    let totalPrice = 0
    basketData?.forEach(item => {
      totalQuantity += item.quantity
      totalPrice += item.narxi * item.quantity
    })
    return {totalPrice, totalQuantity}
  }

  export const getTotalKredit = (basketData) => {
    let totalQuantity = 0
    let totalPrice = 0
    basketData?.forEach(item => {
      totalQuantity += item.quantity
      totalPrice += item.kreditNarxi * item.quantity
    })
    return {totalPrice, totalQuantity}
  }