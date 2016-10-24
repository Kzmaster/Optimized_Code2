//For readability and clarity it is good practice to declare variables at the beginning of the JS document if possible
var churchillSpeech = {
      'author': 'Churchill',
      'year': 1940,
      'yearIsBCE': false,
      'authorAge': '66'
    },
    ghandiSpeech = {
      'author': 'Ghandi',
      'year': 1942,
      'yearIsBCE': false,
      'authorAge': '73'
    },
    demosthenesSpeech = {
      'author': 'Demosthenes',
      'year': 342,
      'yearIsBCE': true,
      'authorAge': '42'
    },
    speechesArray = [churchillSpeech, ghandiSpeech, demosthenesSpeech],
    donatePrompt;
    
/* This is the REUSABLE function to get the author's name and the year of the speech. */
function getAuthorAndYearString(authorName, speechYear) {
	document.getElementById('ConsoleDisplay').innerHTML = 'This speech was written by ' + (authorName) + ' in ' + (speechYear) + '<br>';
};

/* This is the REUSABLE function to determine whether the speech is BCE or not. */

function displayBCEString(IsBCE) {
	if ([IsBCE] === true) {
		document.getElementById('ConsoleDisplay').innerHTML += 'This speech took place before the common era.' + '<br>';
	} else {
		document.getElementById('ConsoleDisplay').innerHTML += 'This speech took place during the common era.' + '<br>';
	}
};

/* This is the REUSABLE function to determine whether the speech is the youngest or oldest on the page. */
function getOldestOrYoungestString(stringYear){
  var oldest = speechesArray[0].year,
      newest = speechesArray[0].year;

  for(var i = 0; i < speechesArray.length; i++){
    if(speechesArray[i].year < oldest){
      oldest = speechesArray[i].year;
    }
    if(speechesArray[i].year > newest){
      newest = speechesArray[i].year;
    }
    }
    if(stringYear === oldest){
    document.getElementById("ConsoleDisplay").innerHTML += 'This is the oldest speech on the page.' + '<br>' ;
    }
    if(stringYear === newest){
    document.getElementById("ConsoleDisplay").innerHTML += 'This is the most recent speech on the page.' + '<br>';
    }
};

document.getElementById('BtnDonate').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Donate" button.
  var donationDisplay = document.createElement('h3'),
      donationText,
      articleElements;

  donatePrompt = window.prompt('How much would you like to donate?');

  if(donatePrompt >= 100){
    donationText = document.createTextNode('Thank you for your very generous donation!');
    donationDisplay.setAttribute('style', 'color: #DB152C;');

    articleElements = document.getElementsByTagName('article');
    for(var i = 0; i < articleElements.length; i++){
      articleElements[i].className = 'generous-donation';
    }
  }else{
    donationText = document.createTextNode('Thank you for your donation of $' + donatePrompt);
  }

  donationDisplay.appendChild(donationText);
  document.getElementById('SideNav').appendChild(donationDisplay);
});

/*Down here are the nav buttons on the page */ 
document.getElementById('BtnChurchill').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Churchill" button.
  getAuthorAndYearString(speechesArray[0].author, speechesArray[0].year);
  
  displayBCEString(speechesArray[0].yearIsBCE);
  
  getOldestOrYoungestString(speechesArray[0].year);
});

document.getElementById('BtnGhandi').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Ghandi" button.
 getAuthorAndYearString(speechesArray[1].author, speechesArray[1].year);
  
  displayBCEString(speechesArray[1].yearIsBCE);

   getOldestOrYoungestString(speechesArray[1].year);
});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Demosthenes" button.
 getAuthorAndYearString(speechesArray[2].author, speechesArray[2].year);
  
  displayBCEString(speechesArray[2].yearIsBCE);

   getOldestOrYoungestString(speechesArray[2].year);
});