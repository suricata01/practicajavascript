
function CalcularPrecioConDescuento(precio,descuento){
    const PorcertajePrecioDescuento = 100 - descuento;
    const PrecioconDescuento = (precio * PorcertajePrecioDescuento) / 100;
    
    return PrecioconDescuento; 
}