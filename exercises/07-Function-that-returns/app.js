var dollarToEuro = function(dollarValue){
	return dollarValue * 0.89;
}
var euroToYen = function(euroValue){
	return euroValue * 124.15;
}
//***** YOUR CODE BELOW ↓ ******///
let valorInicial = 137;
let euros = dollarToEuro(valorInicial);
let yenes = euroToYen(euros);

console.log(yenes)