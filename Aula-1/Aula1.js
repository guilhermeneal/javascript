function CalculateGrade(p1,p2,f){
    return (p1 * 0.3) + (p2 * 0.3) + (f * 0.4);
}
var finalGrade = CalculateGrade(12, 15, 13);
if (finalGrade >= 10):
    console.log("Aprovado");else:
    console.log("Reprovado");

function numeroMes(mes){
    if (mes == 1){
        return "Janeiro";
    }    else if (mes == 2){
        return "Fevereiro";
    }    else if (mes == 3){
        return "Março";
    }    else if (mes == 4){
        return "Abril";
    }    else if (mes == 5){
        return "Maio";
    }    else if (mes == 6){
        return "Junho";
    }    else if (mes == 7){
        return "Julho";
    }   else if (mes == 8){
        return "Agosto";
    }   else if (mes == 9){
        return "Setembro";
    }    else if (mes == 10){
        return "Outubro";
    }    else if (mes == 11){
        return "Novembro";
    }    else if (mes == 12){
        return "Dezembro";
}
console.log(numeroMes(5));

function calculadora(operacao, num1, num2){
    if (operacao == "soma"){
        return num1 + num2;
    }    else if (operacao == "subtracao"){
        return num1 - num2;
    }    else if (operacao == "multiplicacao"){
        return num1 * num2;
    }    else if (operacao == "divisao"){
        return num1 / num2;
    }
}