/*
Comprueba si la letra que indica el usuario se encuentra en alguna de las siguientes palabras:

"sandia", "platano", "melon"

La aplicación no debe distinguir entre mayúsculas y minúsculas para encontrar la letra.
*/

let Frutas = ["sandia", "platano", "melon"];
console.log(Frutas);

function guessIsInSentence(_char, _frase)
{
    let fraseEntera = _frase.join("");

    console.log(`Vamos a buscar el caracter \"${_char}\" en la frase \"${fraseEntera}\"`);

    for(let i = 0; i < fraseEntera.length - 1; i++)
    {
        if(_char === fraseEntera[i])
        {
            return true;
        }
    }

    return false;

}
console.log(getSentence(Frutas));

let userChar = prompt("Introduce un cáracter: ")

console.log(guessIsInSentence(userChar, Frutas));