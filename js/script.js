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
  // Added new script tag in index.html
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
   * from 1 through the maxinum number of objects in 
   * the quotes array. e.g.: 50
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

  let randQuote = quotes[randNumber(quotes)];
  
    // Testing for correct property and values in randQuote variable
    // for ( let quoteProp in randQuote ) {
    //   console.log(`${quoteProp}: ${randQuote[quoteProp]}`);
    // }

  // 3. Return the variable storing the random quote object
  return randQuote;
}

// Testing within the getRandomQuote function
// let randomQuote = getRandomQuote();
// console.log(randomQuote.quote);

/***
 * `printQuote` function
***/

function printQuote() {
  // 1. Create a variable that calls the getRandomQuote() 
  // function
  let randomQuote = getRandomQuote();
  // Testing for correct property and values in randomQuote variable
  // for ( let quoteProp in randomQuote ) {
  //   console.log(`${quoteProp}: ${randomQuote[quoteProp]}`);
  // }

  // 2. Create a variable that initiates your HTML string with 
  // the first two <p></p> elements, their classNames, 
  // and the quote and source properties, but leave off 
  // the second closing `</p>` tag for now
  let html = `
    <p class="quote">${randomQuote.quote}</p>
    <p class="source">${randomQuote.source}
  `;

  // 3. Use an if statement to check if the citation property 
  // exists, and if it does, concatenate a <span></span> 
  // element, appropriate className, and citation property 
  // to the HTML string

  if ( randomQuote.citation ) {
    html += `<span class="citation">${randomQuote.citation}</span>`;
  }

  // 4. Use an if statement to check of the year property exists, 
  // and if it does, concatenate a <span></span> element, 
  // appropriate className, and year property to the HTML 
  //string
  
  if ( randomQuote.year ) {
    html += `<span class="year">${randomQuote.year}</span>`;
  }

  // 5. After the two if statements, concatenate the closing </p> 
  // tag to the HTML string

  html += `</p>`;

  // 6. set the innerHTML of the quote-box div to equal the 
  // complete HTML string

  document.getElementById('quote-box').innerHTML = html;

}

; 
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);