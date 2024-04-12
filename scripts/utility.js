function hideElementbyId(elementId){
    const hideElement = document.getElementById(elementId);
    hideElement.classList.add('hidden');
}

function showElementbyId(elementId){
    const showElement = document.getElementById(elementId);
    showElement.classList.remove('hidden');
}

function setbackgroundColorbyId(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}

function removeBackgroundColorbyId(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}

function getTextElementValuebyId(elementId){
    const element = document.getElementById(elementId);
    const elements =  element.innerText ;
    const new_value = parseInt(elements) ;
    return new_value ;
}

function updatedTextElemntValuebyId(elementId,value){
    const element = document.getElementById(elementId);
    element.innerText= value ;
    
}

function getElementTextById (elementId){
    const element = document.getElementById(elementId);
    const text = element.innerText ;
    return text;
}




function getArandomAlphabet(){
    // get or create an alphabet array
    const alphabets = 'abcdefghijklmnopqrstuvwxyz';
   const arr = alphabets.split('');
   
   // get a random index 
   const randomNumber = Math.random()*25 ;
   const index = Math.round(randomNumber);
   const alphabet = alphabets[index];
   return alphabet
  
   
}