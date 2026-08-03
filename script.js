const text = [
    "Software Engineering Student",
    "Web Developer",
    "UI/UX Enthusiast"
];


let index = 0;
let charIndex = 0;


function typing(){

    if(charIndex < text[index].length){

        document.getElementById("typing").innerHTML += text[index].charAt(charIndex);

        charIndex++;

        setTimeout(typing,100);

    }

    else{

        setTimeout(erase,1500);

    }

}



function erase(){

    if(charIndex > 0){

        document.getElementById("typing").innerHTML =
        text[index].substring(0,charIndex-1);

        charIndex--;

        setTimeout(erase,50);

    }

    else{

        index++;

        if(index >= text.length){

            index = 0;

        }

        setTimeout(typing,500);

    }

}


typing();