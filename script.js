//user click on which mode that mode will be saved on your local storage
function saveMood(mood) {
    //get the user current date
    const today = new Date().toISOString().split('T')[0];
    //adding local storage for get the data
    let moods = JSON.parse(localStorage.getItem('moods')) || {};
    moods[today] = mood; 
    localStorage.setItem('moods', JSON.stringify(moods));
    displayMoods(); //calling this function
}


//this function will help us to display the data on the web page
function displayMoods() {
    //get the id from the html that we are given
    const timeline = document.getElementById('timeline');
    timeline.innerHTML = ''; //we are adding some html using js
    let moods = JSON.parse(localStorage.getItem('moods')) || {};
    
    // we append the mode in the #timeline  
    for (let date in moods) {
        const div = document.createElement('div');
        div.className = 'mood-entry';
        div.innerText = `${date}: ${moods[date]}`;
        timeline.appendChild(div);
    }
}

//this function call will help you to render your past mode when you open your webpage.
displayMoods();