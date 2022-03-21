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
class Order {
    constructor(flavour, crust, topping, size, quant) {
        this.newCrust = crust;
        this.newTopping = topping;
        this.newQuant = quant;
        this.newFlavour = flavour;
        this.newSize = size;
    }
}
var userInput = new Order(flavour(), topping(), size(), crust(), number());
var totalCost = (userInput.newSize + userInput.newTopping + userInput.newFlavour + userInput.newCrust)* userInput.newQuant;
alert("Your charges for pizza" + totalCost);
prompt("Enter your email");
prompt("Enter your phone number");
prompt("Enter your location");
alert("Your pizza will be delivered");
// e.preventDefault();