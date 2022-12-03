let title = document.querySelector(".title");
let sqour2 = document.querySelector(".sqour");
let resetButton = document.querySelector('.btn2')
let turn = "x";

let sqour = [];

function end(num1,num2,num3) {

    title.innerHTML = `${sqour[num1]} winner`;

    document.getElementById("item"+num1).style.background = '#c';
    document.getElementById("item"+num2).style.background = '#fbc531';
    document.getElementById("item"+num3).style.background = '#fbc531';
    
    document.getElementById("item"+num1).style.color = '#1B1464';
    document.getElementById("item"+num2).style.color = '#1B1464';
    document.getElementById("item"+num3).style.color = '#1B1464';

    title.style.color='#fbc531';
    setInterval(function(){title.innerHTML+= '.'},1000);
    setTimeout(function(){location.reload()},1000)
}


resetButton.addEventListener('click', (eo) =>{

    if (eo.target === resetButton ) {
        setTimeout(function(){location.reload()},100)
    }
})

function winner() {
    for (let i = 1; i<10; i++){
        
        sqour[i]= document.getElementById('item'+i).innerHTML;
    }

            if (sqour[1] == sqour[2] && sqour[2] == sqour[3] && sqour[2] !== '') {
                end(1, 2, 3);
            }
            else if (sqour[4] == sqour[5] && sqour[5] == sqour[6] && sqour[5] !== '') {
                end(4, 5, 6);
            }
            else if (sqour[7] == sqour[8] && sqour[8] == sqour[9] && sqour[7] !== '') {
                end(7, 8, 9);
            }
            else if (sqour[1] == sqour[4] && sqour[4] == sqour[7] && sqour[7] !== '') {
                end(1, 4, 7);
            }
            else if (sqour[2] == sqour[5] && sqour[5] == sqour[8] && sqour[5] !== '') {
                end(2, 5, 8);
            }
            else if (sqour[3] == sqour[6] && sqour[6] == sqour[9] && sqour[9] !== '') {
                end(3, 6, 9);
            }
            else if (sqour[1] == sqour[5] && sqour[5] == sqour[9] && sqour[5] !== '') {
                end(1, 5, 9);
            }
            else if (sqour[3] == sqour[5] && sqour[5] == sqour[7] && sqour[3] !== '') {
                end(3, 5, 7);
            }
}


function game1(id) {
    let ele = document.getElementById(id);

    if (turn === "x" && ele.innerHTML=="") 
    {
        ele.innerHTML = "X";
        title.innerHTML = "O  دور ";
        turn = "o";
    }
    else if (turn === "o" && ele.innerHTML== '') {
        ele.innerHTML = "O";
        turn = "x";
        title.innerHTML = "X  دور ";
    }
    winner()
}