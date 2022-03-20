function flavour() {
    var pizzaFlavour = document.getElementById("flavour").value;
    return parseInt(pizzaFlavour);
}
function crust() {
    var pizzaCrust = document.getElementById("crust").value;
    return parseInt(pizzaCrust);
}
function topping() {
    var pizzaTopping = document.getElementById("top").value;
    return parseInt(pizzaFlavour);
}
function size() {
    var pizzaSize = document.getElementById("form").value;
    return parseInt(pizzaSize);
}
function number() {
    var pizzaNumber = document.getElementById("quant").value;
    return parseInt(pizzaNumber);
}
function Order(flavour, crust, topping, size, quant){
    this.newCrust = crust;
    this.newTopping = topping;
    this.newQuant = quant;
    this.newFlavour = flavour;
}