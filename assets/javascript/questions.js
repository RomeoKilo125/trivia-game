let pool = [
q1 = {
  question: "Some camels have one hump, some camels have two humps, but all camels have how many toes?",
  answer1: "1",
  answer2: "2",
  answer3: "3",
  answer4: "4",
  correctAnswer: function() {
    return this.answer2
  },
  value: null
},
q2 = {
  question: "Orange Sauce is traditionally eaten with which meat?",
  answer1: "Tongue",
  answer2: "Duck",
  answer3: "Veal",
  answer4: "Pork",
  correctAnswer: function() {
    return this.answer2
  },
  value: null
},
q3 = {
  question: "Which singer had a 1998 UK hit with 'Ray Of Light'?",
  answer1: "Madonna",
  answer2: "Cher",
  answer3: "Billie Piper",
  answer4: "Dido",
  correctAnswer: function() {
    return this.answer1
  },
  value: null
},
q4 = {
  question: "The final episode of which TV Show was entitled 'Goodbye, Farewell and Amen'?",
  answer1: "Happy Days",
  answer2: "Get Some In",
  answer3: "M*A*S*H",
  answer4: "Dad's Army",
  correctAnswer: function() {
    return this.answer3
  },
  value: null
},
q5 = {
  question: "Which is the longest river in the UK?",
  answer1: "Severn",
  answer2: "Thames",
  answer3: "Trent",
  answer4: "Tyne",
  correctAnswer: function() {
    return this.answer1
  },
  value: null
},
q6 = {
  question: "Which cartoon series features Peter Perfect and Penelope Pitstop?",
  answer1: "Scooby Doo",
  answer2: "The Jetsons",
  answer3: "Dangermouse",
  answer4: "Wacky Races",
  correctAnswer: function() {
    return this.answer4
  },
  value: null
},
q7 = {
  question: "Who composed the Opera ‘Rigoletto’?",
  answer1: "Bizet",
  answer2: "Puccini",
  answer3: "Verdi",
  answer4: "Rossini",
  correctAnswer: function() {
    return this.answer3
  },
  value: null
},
q8 = {
  question: "In Greek Mythology, who killed the many-headed Hydra?",
  answer1: "Heracles",
  answer2: "Achilles",
  answer3: "Odysseus",
  answer4: "Theseus",
  correctAnswer: function() {
    return this.answer1
  },
  value: null
},
q9 = {
  question: "Which nut is obtained from the tree Prunus Amygdalus?",
  answer1: "Pistachio",
  answer2: "Almond",
  answer3: "Walnut",
  answer4: "Chestnut",
  correctAnswer: function() {
    return this.answer2
  },
  value: null
},
q10 = {
  question: "Which of these words means a jumble or hodgepodge of things?",
  answer1: "Maxibustion",
  answer2: "Rigadoon",
  answer3: "Oxymoron",
  answer4: "Gallimaufry",
  correctAnswer: function() {
    return this.answer4
  },
  value: null
},
q11 = {
  question: "What unit of speed is equal to 1 nautical mile per hour?",
  answer1: "Reef",
  answer2: "Clove",
  answer3: "Hitch",
  answer4: "Knot",
  correctAnswer: function() {
    return this.answer4
  },
  value: null
},
q12 = {
  question: "Which saint shares his name with a breed of dog?",
  answer1: "St Francis",
  answer2: "St Bernard",
  answer3: "St Gregory",
  answer4: "St Alban",
  correctAnswer: function() {
    return this.answer2
  },
  value: null
},
q13 = {
  question: "A drone is the male of which type of creature?",
  answer1: "Camel",
  answer2: "Bee",
  answer3: "Chicken",
  answer4: "Dog",
  correctAnswer: function() {
    return this.answer2
  },
  value: null
},
q14 = {
  question: "In the children's book series, where is Paddington Bear originally from?",
  answer1: "India",
  answer2: "Peru",
  answer3: "Canada",
  answer4: "Iceland",
  correctAnswer: function() {
    return this.answer2
  },
  value: null
},
q15 = {
  question: "In true American style, he house where Thomas Jefferson wrote the Declaration of Independence became what?",
  answer1: "Hamburger Stand",
  answer2: "Car Wash",
  answer3: "Starbucks",
  answer4: "Hot Dog Cart",
  correctAnswer: function() {
    return this.answer1
  },
  value: null
},
q16 = {
  question: "What letter must appear at the beginning of the registration number of all non-military aircraft in the U.S.?",
  answer1: "N",
  answer2: "A",
  answer3: "U",
  answer4: "L",
  correctAnswer: function() {
    return this.answer1
  },
  value: null
},
q17 = {
  question: "Who delivered the less famous two-hour speech that preceded Abrahamn Lincoln's two-minute Gettysburg Address?",
  answer1: "Wendell Phillips",
  answer2: "Daniel Webster",
  answer3: "Robert G. Ingersoll",
  answer4: "Edward Everett",
  correctAnswer: function() {
    return this.answer4
  },
  value: null
},
q18 = {
  question: '"Nephelococcygia" is the practice of doing what?',
  answer1: "Finding shapes in clouds",
  answer2: "Sleeping with your eyes open",
  answer3: "Breaking glass with your voice",
  answer4: "Swimming in freezing water",
  correctAnswer: function() {
    return this.answer1
  },
  value: null
},
q19 = {
  question: 'Which insect shorted out an early supercomputer and inspired the term "computer bug"?',
  answer1: "Moth",
  answer2: "Roach",
  answer3: "Fly",
  answer4: "Japanese beetle",
  correctAnswer: function() {
    return this.answer1
  },
  value: null
},
q20 = {
  question: 'Which of the following men does not have a chemical element named for him?',
  answer1: "Albert Einstein",
  answer2: "Niels Bohr",
  answer3: "Isaac Newton",
  answer4: "Enrico Fermi",
  correctAnswer: function() {
    return this.answer3
  },
  value: null
},
q21 = {
  question: 'Which of these ships was not one of the three taken over by colonists during the Boston Tea Party?',
  answer1: "Eleanor",
  answer2: "Dartmouth",
  answer3: "Beaver",
  answer4: "William",
  correctAnswer: function() {
    return this.answer4
  },
  value: null
},
q22 = {
  question: 'Now used to refer to a cat, the word "tabby" is derived from the name of a district of what world capital?',
  answer1: "Baghdad",
  answer2: "New Delhi",
  answer3: "Cairo",
  answer4: "Moscow",
  correctAnswer: function() {
    return this.answer1
  },
  value: null
},
q23 = {
  question: 'Which First Lady was a ninth-generation descendant of Pocahontas?',
  answer1: "Helen Taft",
  answer2: "Edith Wilson",
  answer3: "Bess Truman",
  answer4: "Mamie Eisenhower",
  correctAnswer: function() {
    return this.answer2
  },
  value: null
}
];
