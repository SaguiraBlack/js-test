'use-strict'

const pi = Math.PI;
/** Initializating variables **/
/* Circle */
let circleArea = 0;
let circlePerimeter = 0;
/* Square */
let squareArea = 0;
let squarePerimeter = 0;
/* Triangle */
let triangleArea = 0;
let trianglePerimeter = 0;

/* ARROW FUNCTIONS */
/* Calculating areas and perimeters */
let calculateCircleArea = (cicrcleRadius) => circleArea = pi * (cicrcleRadius ** 2);
let calculateCirclePerimeter = (cicrcleRadius) => circlePerimeter = 2 * pi * cicrcleRadius;
let calculateSquareArea = (squareSide) => squareArea = squareSide ** 2;
let calculateSquarePerimeter = (squareSide) => squarePerimeter = 4 * squareSide;
let calculateTriangleArea = (triangleBase) => triangleArea = (Math.sqrt(3) * (triangleBase ** 2) / 4);
let calculateTrianglePerimeter = (triangleBase) => trianglePerimeter = 3 * triangleBase;

/* FUNCTIONS */
/* Calculating and showing the area and perimeter of a circle */
function getCircleResults(){
    let cicrcleRadius = document.getElementById("circulo").value;
    if(validateValue(cicrcleRadius)){
        calculateCircleArea(cicrcleRadius);
        calculateCirclePerimeter(cicrcleRadius);
        circleArea = circleArea.toFixed(5);    
        circlePerimeter = circlePerimeter.toFixed(5);
        alert(`El área del círculo es ${circleArea}\nEl perímetro del círculo es ${circlePerimeter}`);
    }
}

/* Calculating and showing the area and perimeter of a square */
function getSquareResults(){
    let squareSide = document.getElementById("cuadrado").value;
    if(validateValue(squareSide)){
        calculateSquareArea(squareSide);
        calculateSquarePerimeter(squareSide);
        alert(`El área del cuadrado es ${squareArea}\nEl perímetro del square es ${squarePerimeter}`);
    } 
}

/* Calculating and showing the area and perimeter of a triangle */
function getTriangleResults(){
    let triangleBase = document.getElementById("trianguloBase").value;
    if(validateValue(triangleBase)){
        calculateTriangleArea(triangleBase, triangleHeight);
        calculateTrianglePerimeter(triangleBase);
        alert(`El área del triángulo es ${triangleArea}\nEl perímetro del triángulo es ${trianglePerimeter}`);
    }
}

/* A function to clean the inputs */
function cleanFields(){
    document.getElementById("circulo").value = "";
    document.getElementById("cuadrado").value = "";
    document.getElementById("trianguloBase").value = "";
    document.getElementById("trianguloAltura").value = "";
}

/* A function to validate the value. Can't use negative numbers or an empty field */
function validateValue(figureValue){
    if(figureValue == 0){
        alert(`El campo está vacío o ingresaste un 0`);
        return false;
    }
    else if(figureValue < 0){
        alert(`No se puede usar números negativos`);
        return false;
    }
    else{
        return true;
    }
}

/* encontrar coincidencias de una letra en una frase */

/* encontrar las vocales de una frase */

/* crud */