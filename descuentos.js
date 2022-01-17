
const coupons = [
    "JuanDC_es_Batman",
    "pero_no_le_digas_a_nadie",
    "es_un_secreto",
];


const calculcarPrecioConDescuento = (precio, descuento) =>{
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento
}

const PriceDiscount = () =>{
    const price = document.getElementById("InputPrice").value;

    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;

    let descuento;

  switch(couponValue) {
    case coupons[0]: // "JuanDC_es_Batman"
      descuento = 15;
    break;
    case coupons[1]: // "pero_no_le_digas_a_nadie"
      descuento = 30;
    break;
    case coupons[2]: // "es_un_secreto"
      descuento = 25;
    break;
  }


  const precioConDescuento = calculcarPrecioConDescuento(price, descuento);

  const resultP = document.getElementById("resultPrice");
  resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
}



