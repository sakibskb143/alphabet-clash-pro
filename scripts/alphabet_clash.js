// function play(){

//     const homeScreenSection = document.getElementById('home-screen');
//     // console.log(homeScreenSection.innerHTML);
//     homeScreenSection.classList.add('hidden');

//     // show play ground
//     const playgroundSection = document.getElementById('playground');
//     playgroundSection.classList.remove('hidden');
// }
function handleKeyboardKeyUpEvent(event) {
    const playerPress = event.key;

    // get expected key 
    const currentAlphabets = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabets.innerText;
    const expectedPress = currentAlphabet.toLowerCase();

    //    console.log("player Press" , playerPress ,"expected press", expectedPress);

    if (playerPress === expectedPress) {

        const score = getTextElementValuebyId('current-score');
        const newscore = score + 1;
        updatedTextElemntValuebyId('current-score', newscore);

        // update score :
        // 1. get the current score
        //  const currentScore =document.getElementById('current-score');
        //  const currentdata = currentScore.innerText;
        //  const score = parseInt(currentdata);

        // 2.increse the score by 1  
        // console.log(score);
        // const newscore = score + 1 ;
        // 3.show the update score

        // document.getElementById('current-score').innerText = newscore ;
        // updatedTextElemntValuebyId('current-score',newscore);

        removeBackgroundColorbyId(playerPress);
        continueGame();
    }
    else {

        const lifelineScore = getTextElementValuebyId('lifeline-score');
        const lifeline = lifelineScore - 1;
        updatedTextElemntValuebyId('lifeline-score', lifeline);

        if (lifeline === 0) {
            gameOver();

        }


        //    step-1: get the current life number
        // const lifelineScore = document.getElementById('lifeline-score');
        // const lifelines = lifelineScore.innerText ;
        // const lifeline = parseInt(lifelines);

        //  step-2 : reduce the life count
        // const newlifeline = lifeline - 1 ;


        // step-3: display the updated life count
        // lifelineScore.innerText = newlifeline ;

    }



}
document.addEventListener('keyup', handleKeyboardKeyUpEvent);

function continueGame() {
    const alphabet = getArandomAlphabet();
    // console.log("You random alphabet:" , alphabet);

    //  set alphabet 
    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerHTML = alphabet;
    //  call setbackground fuction by id
    setbackgroundColorbyId(alphabet);


}

function play() {
    hideElementbyId('home-screen');
    hideElementbyId('show-score');
    showElementbyId('playground');
 

    // restore lifeline and score
    // updatedTextElemntValuebyId('lifeline',5);
    // updatedTextElemntValuebyId('current-score',0);

    continueGame();

}

function gameOver() {
    hideElementbyId('playground');
    showElementbyId('score');
    const finalScore = getTextElementValuebyId('current-score');
    // document.getElementById('show-score').innerText = finalScore ;
    updatedTextElemntValuebyId('show-score',finalScore);


}