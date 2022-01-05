
function CalcularPrecioConDescuento(precio,descuento){
    const PorcertajePrecioDescuento = 100 - descuento;
    const PrecioconDescuento = (precio * PorcertajePrecioDescuento) / 100;
    
    return PrecioconDescuento; 
}
function Calcular_Precio_Descuento(){
    const inputPrice = document.getElementById("InputPrice");
    const PriceValue = inputPrice.value;

    const InputDiscount= document.getElementById("InputDiscount");
    const DiscountValue = InputDiscount.value;

    const PrecioconDescuento = CalcularPrecioConDescuento(PriceValue,DiscountValue);
    const resultPrice = document.getElementById("ResultPrice");

    resultPrice.innerText = "El precio con descuento es: " + PrecioconDescuento;
    
}