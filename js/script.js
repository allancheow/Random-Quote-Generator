/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

const autoButtonText = document.querySelector('#auto-quote');

/***
 * `getRandomQuote` function
***/

const getRandomQuote = () => {
  /**
   * An arrow expression to randomly generate a number
   * from 0 through the maximum number of objects in 
   * the quotes array.
   * 
   * @param {number} quotes - Used to set upper limit of number generator
   * @returns {number} A random number
   */

  const randNumber = () => Math.floor( Math.random() * quotes.length );

  return quotes[randNumber(quotes)];
}

/***
 * `printQuote` function
***/
const  printQuote = () => {
  let randomQuote = getRandomQuote();
  let html = `<p class="quote">${randomQuote.quote}</p><p class="source">${randomQuote.source}`;

  randomQuote.citation ? html += `<span class="citation">${randomQuote.citation}</span>` : null;  
  randomQuote.year ? html += `<span class="year">${randomQuote.year}</span>` : null;
  randomQuote.tag ? html += `<span class="year"><br>${randomQuote.tag}</span>` : null;

  html += `</p>`;

  document.getElementById('quote-box').innerHTML = html;
  
  /*** Exceeds Expectations conditions - 
   * Background color changes to a random color each time the quote refreshes.
  ***/
  /**
   * Randomly generate a number from 0 through 225
   * 
   * @returns {number} A random number
   */
  const randomNumGen = () => Math.floor(Math.random() * 225);
  /**
   * Used code from "The Refactor Challenge" and updated
   * to an arrow expression to randomly generate the RGB
   * color.
   * 
   * @param {number} value - Random number from randomNumGen()
   * @returns {string} A random RGB color value
   */
  const randomRGB = value => `rgb( ${value()}, ${value()}, ${value()} )`;
  document.querySelector('body').style.backgroundColor = randomRGB(randomNumGen);
};

/**
 * Turns on and off the auto quote generator on button activation. 
 */
const autoPrintQuote = () => {
  autoButtonText.textContent === 'Auto Generate' ? (autoQuoter = setInterval(printQuote, 5000), autoButtonText.textContent = `End Auto Generate`) : (autoButtonText.textContent = `Auto Generate`, clearInterval(autoQuoter));
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
// New auto quote button listener
document.getElementById('auto-quote').addEventListener("click", autoPrintQuote, false);