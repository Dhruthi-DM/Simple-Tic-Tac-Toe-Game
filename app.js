let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO= true; //playerX, playerO

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
};


// event listeners//
boxes.forEach(box =>{
    box.addEventListener("click",() => {
        if(turnO) { //playerO
        box.innerText = "O";
        turnO = false;
        } else { //PlayerX
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const disableBoxes = () => {
    for(let box of boxes)
        box.disabled = true;
};

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};
const showWinner = (winner) => {
    msg.innerText = `CONGRATULATIONS! WINNER IS ${winner}`;//use backticks `` not ''//
    msgContainer.classList.remove("hide");
    disableBoxes();

};
// using winpatterns run loop ,meaning for all the winpatterns there we extracted a pattern//
//as soon as a box is clicked the call will go to checkWinner will the check through all possible win pattern then print it for every button clicked//
const checkWinner = () => {
    for(let pattern of winPatterns) 
        // console.log(pattern[0], pattern[1], pattern[2]);//we are extracting individual indices //
        // console.log(boxes[pattern[0]].innerText,//inside the box array (by using 'boxes') go to the mentioned indices, we are doing this to extract the value of the boxes and by using the .innertext we are extracting the innertext of the particualr indices or positions//
        //             boxes[pattern[1]].innerText, 
        //             boxes[pattern[2]].innerText
    
       {
        let pos1Val = boxes[pattern[0]].innerText;//storing them inside individual variables//
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val!= "" && pos3Val!= "")//checking if all 3 positions are not equal to 0//
        {
            if(pos1Val === pos2Val && pos2Val === pos3Val)//all values are equal to each other since we need winner to have all 3 values to be same //
            {
                console.log("WINNER IS",pos1Val);
                showWinner(pos1Val);
            }
        }
    }

};


newGameBtn.addEventListener("click", resetGame);// as soon as new game button is clicked resetGame function is triggered//
resetBtn.addEventListener("click",resetGame);// as reset button clicked the resetgame function is triggered//


