/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

  // Quote to test script connection, just for fun... and it's Admiral Ackbar!!!
  console.log(`"It's a trap!" - Admiral Ackbar (Erik Bauersfeld), Star Wars: Return of the Jedi, 1983 `);

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

  // Placed quotes array into it's own file. js/quotes.js 
  // and added new script tag in index.html
  // This action was in regards to "Build an Object Challenge"
  // Place quotes.js above script.js for loading order
  // For loop to test connection to quotes.js ::SUCCESS::
  //   for ( let i = 0; i < quotes.length; i++) {    
  //     console.log(`#${i + 1}: ${quotes[i].source}`);
  //   }
  // - Allan C.

/***
 * `getRandomQuote` function
***/

function getRandomQuote() {
  // 1. Create a variable that generates a random number
  // between zero and the last index in the `quotes` array

  /**
   * An arrow expression to randomly generate a number
   * from 0 through the maxinum number of objects in 
   * the quotes array.
   * 
   * @param {number} quotes - Used to set upper limit of number generator
   * @returns {number} A random number
   * @author Allan Cheow
   */

  const randNumber = () => Math.floor( Math.random() * quotes.length );
    // Testing my random number generator
    //console.log(`My random number: ${randNumber()}`);

  // 2. Use the random number variable and bracket notation 
  // to grab a random object from the `quotes` array, and 
  // store it in a variable

  // Stored quote Object in variable randQuote
  // - Allan C.
  let randQuote = quotes[randNumber()];
    // Testing for correct property and values in randQuote variable
    // for ( let quoteProp in randQuote ) {
    //   console.log(`${quoteProp}: ${randQuote[quoteProp]}`);
    // }
    // - Allan C.

  // 3. Return the variable storing the random quote object
  return randQuote;

  // Steps 2 and 3 can be combined as the return statement
  // and not use the variable.
  // return quotes[randNumber(quotes)];
}

// Testing within the getRandomQuote function
// - Allan C.
// let randomQuote = getRandomQuote();
// console.log(randomQuote.quote);

/***
 * `printQuote` function
***/

function printQuote() {
  // 1. Create a variable that calls the getRandomQuote() 
  // function

  // Calling getRandomQuote() and storing the return
  // object into randomQuote variable
  // - Allan C.
  let randomQuote = getRandomQuote();
    // Testing for correct property and values in randomQuote variable
    // for ( let quoteProp in randomQuote ) {
    //   console.log(`${quoteProp}: ${randomQuote[quoteProp]}`);
    // }
    // - Allan C.

  // 2. Create a variable that initiates your HTML string with 
  // the first two <p></p> elements, their classNames, 
  // and the quote and source properties, but leave off 
  // the second closing `</p>` tag for now

  // Confirming values in Object properties
  // - Allan C.
  console.log(`Quote: ${randomQuote.quote}`);
  console.log(`Source: ${randomQuote.source}`);
  let html = `<p class="quote">${randomQuote.quote}</p><p class="source">${randomQuote.source}`;

  // 3. Use an if statement to check if the citation property 
  // exists, and if it does, concatenate a <span></span> 
  // element, appropriate className, and citation property 
  // to the HTML string

  if ( randomQuote.citation ) {
    // Confirming values in Object properties
    // - Allan C.
    console.log(`Citation: ${randomQuote.citation}`);
    html += `<span class="citation">${randomQuote.citation}</span>`;
  }

  // 4. Use an if statement to check of the year property exists, 
  // and if it does, concatenate a <span></span> element, 
  // appropriate className, and year property to the HTML 
  //string
  
  if ( randomQuote.year ) {
    // Confirming values in Object properties
    // - Allan C.
    console.log(`Year: ${randomQuote.year}`);
    html += `<span class="year">${randomQuote.year}</span>`;
  }

  // 5. After the two if statements, concatenate the closing </p> 
  // tag to the HTML string

  
  // Closing the <p> tag initilized on line 98
  // - Allan C.
  html += `</p>`;

  // 6. set the innerHTML of the quote-box div to equal the 
  // complete HTML string

  // Given code by Treehouse to replace content in the
  // "quote-box" div with content in html variable
  // - Allan C.
  document.getElementById('quote-box').innerHTML = html;
  
  /*** Exceeds Expectations conditions - 
   * Background color changes to a random color each time the quote refreshes.
  ***/
  /**
   * An arrow expression to randomly generate a number
   * from 0 through 256 everytime it's called. 
   * No @params used in the function.
   * 
   * @returns {number} A random number
   * @author Allan Cheow
   */
  const randomNumGen = () => Math.floor(Math.random() * 256) + 1;
  /**
   * Used code from "The Refactor Challenge" and updated
   * to an arrow expression to randomly generate the RGB
   * color.
   * 
   * @param {number} value - Random number from randomNumGen()
   * @returns {string} A random RGB color value
   * @author Allan Cheow
   */
  const randomRGB = value => `rgb( ${value()}, ${value()}, ${value()} )`;
  // Selects the <body> tag and replaces the styling of background-color
  // Used W3School for reference: https://www.w3schools.com/jsref/dom_obj_body.asp
  // - Allan C.
  document.querySelector('body').style.backgroundColor = randomRGB(randomNumGen);

};

// Initializing counter for number of times button is pressed
let counter = 1;
// Initilizing variable to be used in both scope of if statement
let autoQuoter;

/**
   * Created a function which uses the number of times a button is pressed
   * to turn on and off the auto quote generator. This was completed with 
   * my limited knowledge and I'm sure there are easier ways to 
   * accomplish this task.  ::SUCCESS for me::
   * 
   * @author Allan Cheow
   */
function autoPrintQuote() {
  if ( counter % 2 !== 0 ) {
    counter++;
    // Based on Treehouse FSJS Project Study Guide
    // reference: https://www.w3schools.com/jsref/met_win_setinterval.asp
    autoQuoter = setInterval(printQuote, 5000);
    // Needed to find a way to replace the button text and found resource below
    // Used W3School reference: https://www.w3schools.com/jsref/jsref_replace.asp
    let autoButtonText = document.getElementById(`auto-quote`).innerHTML;
    let replacementText = autoButtonText.replace(`Auto Generate`,`End Auto Generate`);
    document.getElementById(`auto-quote`).innerHTML = replacementText;
    console.log(`Auto counter: ${counter}`);
  } else {
    counter++;
    // Needed to find a way to replace the button text and found resource below
    // Used W3School reference: https://www.w3schools.com/jsref/jsref_replace.asp
    let autoButtonText = document.getElementById(`auto-quote`).innerHTML;
    let replacementText = autoButtonText.replace(`End Auto Generate`,`Auto Generate`);
    document.getElementById(`auto-quote`).innerHTML = replacementText;
    // Based on Treehouse FSJS Project Study Guide
    // reference: https://www.w3schools.com/jsref/met_win_clearinterval.asp
    clearInterval(autoQuoter);
    console.log(`End Auto Counter: ${counter}`);
  }
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
// New auto quote button listener
// - Allan C.
document.getElementById('auto-quote').addEventListener("click", autoPrintQuote, false);