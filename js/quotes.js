/*** 
 * `quotes` array 
***/
const quotes = [
    { 
      quote: `May the Force be with you.`,
      source: `Ben 'Obi-Wan' Kenobi (Alec Guinness)`,
      citation: `Star Wars`,
      year: 1977,
      tag: `Action, Adventure, Fantasy`
    },
    { 
      quote: `There's no place like home.`,
      source: `Dorothy (Judy Garland)`,
      citation: `The Wizard of Oz`,
      year: 1939,
      tag: `Adventure, Family, Fantasy`
    },
    { 
      quote: `I'm the king of the world!`,
      source: `Jack Dawson (Leonardo DiCaprio)`,
      citation: `Titanic`,
      year: 1997,
      tag: `Drama, Romance`
    },
    { 
      quote: `Carpe diem. Seize the day, boys. Make your lives extraordinary.`,
      source: `John Keating (Robin Williams)`,
      citation: `Dead Poets Society`,
      year: 1989,
      tag: `Comedy, Drama`
    },
    { 
      quote: `Elementary, my dear Watson.`,
      source: `Sherlock Holmes (Basil Rathbone)`,
      citation: `The Adventures of Sherlock Holmes`,
      year: 1939,
      tag: `Crime, Mystery, Thriller`
    },
    { 
      quote: `It's alive! It's alive!`,
      source: `Henry Frankenstein (Colin Clive)`,
      citation: `Frankenstein`,
      year: 1931,
      tag: `Drama, Horror, Sci-Fi`
    },
    { 
      quote: `My mama always said life was like a box of chocolates. You never know what you're gonna get.`,
      source: `Forrest Gump (Tom Hanks)`,
      citation: `Forrest Gump`,
      year: 1994,
      tag: `Drama, Romance`
    },
    { 
      quote: `I'll be back.`,
      source: `Terminator/T-800 (Arnold Schwarzenegger)`,
      citation: `The Terminator`,
      year: 1984,
      tag: `Action, Sci-Fi`
    },
    { 
      quote: `You're gonna need a bigger boat.`,
      source: `Brody (Roy Scheider)`,
      citation: `Jaws`,
      year: 1975,
      tag: `Adventure, Thriller`
    },
    { 
      quote: `Here's looking at you, kid.`,
      source: `Rick Blaine (Humphrey Bogart)`,
      citation: `Casablanca`,
      year: 1942,
      tag: `Drama, Romance, War`
    },
    { 
      quote: `My precious.`,
      source: `Gollum (Andy Serkis)`,
      citation: `The Lord of the Rings: Two Towers`,
      year: 2002,
      tag: `Action, Adventure, Drama`
    },
    { 
      quote: `Houston, we have a problem.`,
      source: `Jim Lovell (Tom Hanks)`,
      citation: `Apollo 13`,
      year: 1995,
      tag: `Adventure, Drama, History`
    },
    { 
      quote: `There's no crying in baseball!`,
      source: `Jimmy Dugan (Tom Hanks)`,
      citation: `A League of Their Own`,
      year: 1992,
      tag: `Comedy, Drama, Sport`
    },
    { 
      quote: `E.T. phone home.`,
      source: `E.T. (Pat Welsh)`,
      citation: `E.T. the Extra-Terrestrial`,
      year: 1982,
      tag: `Family, Sci-Fi`
    },
    { 
      quote: `You can't handle the truth!`,
      source: `Col. Nathan R. Jessep (Jack Nicholson)`,
      citation: `A Few Good Men`,
      year: 1992,
      tag: `Drama, Thriller`
    },
    { 
      quote: `A martini. Shaken, not stirred.`,
      source: `James Bond (Sean Connery)`,
      citation: `Goldfinger`,
      year: 1964,
      tag: `Action, Adventure, Thriller`
    },
    { 
      quote: `Life is a banquet, and most poor suckers are starving to death!`,
      source: `Mame Dennis (Rosalind Russell)`,
      citation: `Auntie Mame`,
      year: 1958,
      tag: `Comedy, Drama, Romance`
    },
    { 
      quote: `If you build it, he will come.`,
      source: `The Voice (Ed Harris - unconfirmed)`,
      citation: `Field of Dreams`,
      year: 1989,
      tag: `Drama, Family, Fantasy`
    },
    { 
      quote: `The stuff that dreams are made of.`,
      source: `Samuel Spade (Humphrey Bogart)`,
      citation: `The Maltese Falcon`,
      year: 1941,
      tag: `Film-Noir, Mystery`
    },
    { 
      quote: `Magic Mirror on the wall, who is the fairest one of all?`,
      source: `Queen / Witch (Lucille La Verne)`,
      citation: `Snow White and the Seven Dwarfs`,
      year: 1937,
      tag: `Animation, Family, Fantasy`
    },
    { 
      quote: `Keep your friends close, but your enemies closer.`,
      source: `Michael (Al Pacino)`,
      citation: `The Godfather Part II`,
      year: 1974,
      tag: `Crime, Drama`
    },
    { 
      quote: `I am your father.`,
      source: `Darth Vader (David Prowse; Voice: James Earl Jones)`,
      citation: `Star Wars Episode V: The Empire Strikes Back`,
      year: 1980,
      tag: `Action, Adventure, Fantasy`
    },
    { 
      quote: `Just keep swimming.`,
      source: `Dory (Ellen DeGeneres)`,
      citation: `Finding Nemo`,
      year: 2003,
      tag: `Animation, Adventure, Comedy`
    },
    { 
      quote: `Today, I consider myself the luckiest man on the face of the earth.`,
      source: `Lou Gehrig (Gary Cooper)`,
      citation: `The Pride of the Yankees`,
      year: 1942,
      tag: `Biography, Drama, Romance`
    },
    { 
      quote: `You is kind. You is smart. You is important.`,
      source: `Aibileen Clark (Viola Davis)`,
      citation: `The Help`,
      year: 2011,
      tag: `Drama`
    },
    { 
      quote: `What we've got here is failure to communicate.`,
      source: `Captain (Strother Martin)`,
      citation: `Cool Hand Luke`,
      year: 1967,
      tag: `Crime, Drama`
    },
    { 
      quote: `Hasta la vista, baby.`,
      source: `Terminator/T-800 (Arnold Schwarzenegger)`,
      citation: `Terminator 2: Judgment Day`,
      year: 1991,
      tag: `Action, Sci-Fi`
    },
    { 
      quote: `You don't understand! I coulda had class. I coulda been a contender. I could've been somebody, instead of a bum, which is what I am.`,
      source: `Terry Malloy (Marlon Brando)`,
      citation: `On the Waterfront`,
      year: 1954,
      tag: `Crime, Drama, Thriller`
    },
    { 
      quote: `Bond. James Bond.`,
      source: `James Bond (Sean Connery)`,
      citation: `Dr. No`,
      year: 1962,
      tag: `Action, Adventure, Thriller`
    },
    { 
      quote: `You talking to me?`,
      source: `Travis Bickle (Robert De Niro)`,
      citation: `Taxi Driver`,
      year: 1976,
      tag: `Crime, Drama`
    },
    { 
      quote: `Roads? Where we're going we don't need roads.`,
      source: `Dr. Emmett Brown (Christopher Lloyd)`,
      citation: `Back to the Future`,
      year: 1985,
      tag: `Adventure, Comedy, Sci-Fi`
    },
    { 
      quote: `That'll do, pig. That'll do.`,
      source: `Farmer Hoggett (James Cromwell)`,
      citation: `Babe`,
      year: 1995,
      tag: `Comedy, Drama, Family`
    },
    { 
      quote: `I'm walking here! I'm walking here!`,
      source: `Ratso (Dustin Hoffman)`,
      citation: `Midnight Cowboy`,
      year: 1969,
      tag: `Drama`
    },
    { 
      quote: `It was beauty killed the beast.`,
      source: `Carl Denham (Robert Armstrong)`,
      citation: `King Kong`,
      year: 1933,
      tag: `Adventure, Horror, Sci-Fi`
    },
    { 
      quote: `Stella! Hey, Stella!`,
      source: `Stanley Kowalski (Marlon Brando)`,
      citation: `A Streetcar Named Desire`,
      year: 1951,
      tag: `Drama`
    },
    { 
      quote: `As if!`,
      source: `Cher (Alicia Silverstone)`,
      citation: `Clueless`,
      year: 1995,
      tag: `Comedy, Romance`
    },
    { 
      quote: `Here's Johnny!`,
      source: `Jack Torrance (Jack Nicholson)`,
      citation: `The Shining`,
      year: 1980,
      tag: `Drama, Horror`
    },
    { 
      quote: `Rosebud.`,
      source: `Kane (Orson Welles)`,
      citation: `Citizen Kane`,
      year: 1941,
      tag: `Drama, Mystery`
    },
    { 
      quote: `I'll have what she's having.`,
      source: `Older Woman Customer (Estelle Reiner)`,
      citation: `When Harry Met Sally`,
      year: 1989,
      tag: `Comedy, Drama, Romance`
    },
    { 
      quote: `Inconceivable!`,
      source: `Vizzini (Wallace Shawn)`,
      citation: `The Princess Bride`,
      year: 1987,
      tag: `Adventure, Family, Fantasy`
    },
    { 
      quote: `All right, Mr. DeMille, I'm ready for my close-up.`,
      source: `Norma Desmond (Gloria Swanson)`,
      citation: `Sunset Boulevard`,
      year: 1950,
      tag: `Drama, Film-Noir`
    },
    { 
      quote: `Fasten your seatbelts. It's going to be a bumpy night.`,
      source: `Margo (Bette Davis)`,
      citation: `All About Eve`,
      year: 1950,
      tag: `Drama`
    },
    { 
      quote: `Nobody puts Baby in a corner.`,
      source: `Johnny Castle (Patrick Swayze)`,
      citation: `Dirty Dancing`,
      year: 1987,
      tag: `Drama, Music, Romance`
    },
    { 
      quote: `Well, nobody's perfect.`,
      source: `Osgood Fielding III (Joe E. Brown)`,
      citation: `Some Like it Hot`,
      year: 1959,
      tag: `Comedy, Music, Romance`
    },
    { 
      quote: `Snap out of it!`,
      source: `Loretta Castorini (Cherilyn Sarkisian aka Cher)`,
      citation: `Moonstruck`,
      year: 1987,
      tag: `Comedy, Drama, Romance`
    },
    { 
      quote: `You had me at ‘hello.’`,
      source: `Dorothy Boyd (Renée Zellweger)`,
      citation: `Jerry Maguire`,
      year: 1996,
      tag: `Comedy, Drama, Romance`
    },
    { 
      quote: `They may take our lives, but they'll never take our freedom!`,
      source: `William Wallace (Mel Gibson)`,
      citation: `Braveheart`,
      year: 1995,
      tag: `Biography, Drama, History`
    },
    { 
      quote: `To infinity and beyond!`,
      source: `Buzz Lightyear (Tim Allen)`,
      citation: `Toy Story`,
      year: 1995,
      tag: `Animation, Adventure, Comedy`
    },
    { 
      quote: `You’re killin’ me, Smalls.`,
      source: `Hamilton 'Ham' Porter (Patrick Renna)`,
      citation: `The Sandlot`,
      year: 1993,
      tag: `Comedy, Drama, Family`
    },
    { 
      quote: `Toto, I've a feeling we're not in Kansas anymore.`,
      source: `Dorothy (Judy Garland)`,
      citation: `The Wizard of Oz`,
      year: 1939,
      tag: `Adventure, Family, Fantasy`
    }
  ];