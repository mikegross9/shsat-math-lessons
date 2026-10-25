window.LESSON = {
 "videos": {
  "S1Title": "video/S1Title.mp4",
  "S2Translate": "video/S2Translate.mp4",
  "S3Total": "video/S3Total.mp4",
  "S4Consecutive": "video/S4Consecutive.mp4",
  "S5Rate": "video/S5Rate.mp4",
  "S6Question": "video/S6Question.mp4",
  "S7Setup": "video/S7Setup.mp4",
  "S8Solve": "video/S8Solve.mp4",
  "S9Check": "video/S9Check.mp4",
  "S10Plug": "video/S10Plug.mp4",
  "S11Recap": "video/S11Recap.mp4"
 },
 "unit": {
  "num": 2,
  "title": "Turning Words into Equations",
  "minutes": 18,
  "next": "unit3"
 },
 "titles": {
  "S1Title": "Welcome",
  "S2Translate": "The math dictionary",
  "S3Total": "Everyone in terms of x",
  "S4Consecutive": "Consecutive integers",
  "S5Rate": "Per, each, and steady rates",
  "S6Question": "Your real question",
  "S7Setup": "Translate it",
  "S8Solve": "Solve it",
  "S9Check": "Check against the story",
  "S10Plug": "Plug in the choices",
  "S11Recap": "The recipe"
 },
 "timing": {
  "S1Title": {
   "cues": [
    0.3,
    5.66,
    10.74
   ],
   "dur": 19.38
  },
  "S2Translate": {
   "cues": [
    0.3,
    2.14,
    5.98,
    9.18,
    15.34,
    18.7,
    23.06,
    26.38,
    30.18
   ],
   "dur": 35.7
  },
  "S3Total": {
   "cues": [
    0.3,
    5.98,
    13.9,
    17.9,
    20.78,
    24.7,
    31.42,
    34.5,
    38.1,
    40.46,
    43.34
   ],
   "dur": 45.78
  },
  "S4Consecutive": {
   "cues": [
    0.3,
    6.78,
    11.62,
    13.66,
    15.98,
    22.9,
    25.26,
    28.06,
    30.22
   ],
   "dur": 34.9
  },
  "S5Rate": {
   "cues": [
    0.3,
    3.26,
    9.1,
    13.18,
    18.22,
    22.78,
    28.14,
    29.46,
    32.94
   ],
   "dur": 37.22
  },
  "S6Question": {
   "cues": [
    0.3,
    4.06,
    6.94,
    10.22,
    13.58,
    15.74,
    17.58,
    19.34,
    23.26,
    28.22
   ],
   "dur": 33.3
  },
  "S7Setup": {
   "cues": [
    0.3,
    5.82,
    13.5,
    16.54,
    21.58,
    25.34,
    29.58,
    34.46
   ],
   "dur": 37.06
  },
  "S8Solve": {
   "cues": [
    0.3,
    4.54,
    7.82,
    13.9,
    17.74,
    21.1,
    23.66,
    25.34
   ],
   "dur": 28.9
  },
  "S9Check": {
   "cues": [
    0.3,
    3.58,
    11.42,
    18.58,
    21.34,
    22.86,
    29.62,
    31.1
   ],
   "dur": 37.22
  },
  "S10Plug": {
   "cues": [
    0.3,
    5.02,
    13.58,
    14.7,
    16.82,
    20.14,
    21.82,
    25.22,
    26.42,
    28.26,
    29.54,
    31.46,
    34.94,
    38.26
   ],
   "dur": 41.78
  },
  "S11Recap": {
   "cues": [
    0.3,
    3.1,
    8.3,
    11.74,
    19.02,
    24.5,
    28.94,
    33.06
   ],
   "dur": 38.34
  }
 },
 "flow": [
  [
   "scene",
   "S1Title"
  ],
  [
   "scene",
   "S2Translate"
  ],
  [
   "quiz",
   {
    "id": "translate",
    "title": "Your turn: translate it",
    "qs": [
     "t1",
     "t2"
    ],
    "say": "Your turn! Translate these into math."
   }
  ],
  [
   "scene",
   "S3Total"
  ],
  [
   "quiz",
   {
    "id": "total",
    "title": "Your turn: add up to the total",
    "qs": [
     "b1",
     "b2"
    ],
    "say": "Your turn. Name the unknown, write everyone in terms of it, and add up to the total."
   }
  ],
  [
   "scene",
   "S4Consecutive"
  ],
  [
   "quiz",
   {
    "id": "consec",
    "title": "Your turn: consecutive integers",
    "qs": [
     "c1",
     "c2"
    ],
    "say": "Two consecutive number problems. Reread the question before you answer."
   }
  ],
  [
   "scene",
   "S5Rate"
  ],
  [
   "scene",
   "S6Question"
  ],
  [
   "scene",
   "S7Setup"
  ],
  [
   "scene",
   "S8Solve"
  ],
  [
   "scene",
   "S9Check"
  ],
  [
   "scene",
   "S10Plug"
  ],
  [
   "quiz",
   {
    "id": "plug",
    "title": "Your turn: plug in the choices",
    "qs": [
     "a1",
     "a2"
    ],
    "say": "Your turn to plug in the answer choices."
   }
  ],
  [
   "quiz",
   {
    "id": "practice",
    "title": "SHSAT practice set",
    "qs": [
     "p1",
     "p2",
     "p3",
     "p4",
     "p5"
    ],
    "say": "Now let's practice like it's the real test. All five are questions you missed on your practice tests. Translate, solve, and check against the story before you move on."
   }
  ],
  [
   "scene",
   "S11Recap"
  ],
  [
   "summary",
   {
    "say": "Great job finishing Unit 2! Here's how you did."
   }
  ]
 ],
 "questions": {
  "t1": {
   "kind": "mc",
   "q": "Which expression means\n“7 less than 3 times a number x”?",
   "choices": [
    "7 − 3x",
    "3x − 7",
    "3(x − 7)",
    "3x + 7"
   ],
   "answer": "B",
   "say": "Which expression means seven less than three times a number x? Pick an answer, then press Check.",
   "hint": "“Less than” flips the order: 7 less than something means that something, minus 7.",
   "hint_say": "Careful with less than. Seven less than something means you start with that something, and then subtract seven.",
   "steps": [
    [
     "3 times x  →  3x",
     ""
    ],
    [
     "7 less than 3x  →  3x − 7",
     "start with 3x, then take away 7"
    ]
   ],
   "solve_say": "Three times a number is three x. Seven less than that means take seven away from three x, so it's three x minus seven. The answer is B. Seven minus three x is backwards."
  },
  "t2": {
   "kind": "expr",
   "tag": "From your Practice Test 2",
   "q": "Jackson is now x years old, and Billy Bob is 5 years older than Jackson.\nIn terms of x, how old was Billy Bob 8 years ago?",
   "prefix": "age = ",
   "var": "x",
   "coef": 1,
   "k": -3,
   "show": "x − 3",
   "say": "This one is from your second practice test. Jackson is x years old, and Billy Bob is five years older. In terms of x, how old was Billy Bob eight years ago? Use the x key.",
   "hint": "“5 years older” means + 5, not × 5. Write Billy Bob's age now first, then go back 8 years.",
   "hint_say": "Not quite. Five years older means add five, not multiply. Write Billy Bob's age now, then subtract eight.",
   "steps": [
    [
     "Billy Bob now:  x + 5",
     "5 years older → add 5"
    ],
    [
     "8 years ago:  x + 5 − 8",
     "ago → subtract"
    ],
    [
     "= x − 3",
     ""
    ]
   ],
   "solve_say": "Billy Bob is five years older, so right now he's x plus five. Eight years ago, subtract eight. X plus five minus eight is x minus three. On the test you wrote five x minus eight, but older means add."
  },
  "b1": {
   "kind": "num",
   "q": "Ella has 3 more marbles than twice the number Finn has.\nTogether they have 39 marbles. How many marbles does Ella have?",
   "prefix": "Ella = ",
   "answer": 27,
   "say": "Ella has three more marbles than twice the number Finn has. Together they have thirty-nine. How many marbles does Ella have?",
   "hint": "Ella is compared to Finn, so let Finn = x. Write Ella in terms of x, then add both to make 39.",
   "hint_say": "Not quite. Ella is compared to Finn, so let Finn be x. Write Ella in terms of x, then add them up to make thirty-nine.",
   "steps": [
    [
     "Finn = x,   Ella = 2x + 3",
     "name the unknown"
    ],
    [
     "x + 2x + 3 = 39",
     "together → add"
    ],
    [
     "3x = 36,   x = 12",
     "that's Finn"
    ],
    [
     "Ella = 2(12) + 3 = 27",
     "answer for Ella"
    ]
   ],
   "solve_say": "Let Finn be x. Ella has twice that plus three: two x plus three. Together, three x plus three equals thirty-nine, so three x is thirty-six, and x is twelve. But twelve is Finn. Ella has two times twelve plus three, which is twenty-seven."
  },
  "b2": {
   "kind": "mc",
   "tag": "From your Practice Test 2",
   "q": "Marissa, Rudy, and Tanya ran a lawnmowing business together. Marissa received twice as much of the profit as Tanya received, and Rudy earned 50% more than Marissa received. If the total profit was $2,520, how much did Rudy earn?",
   "choices": [
    "$420",
    "$840",
    "$1,260",
    "$1,680"
   ],
   "answer": "C",
   "say": "From your second practice test. Marissa got twice as much profit as Tanya, and Rudy got fifty percent more than Marissa. The total was twenty-five hundred twenty dollars. How much did Rudy earn?",
   "hint": "Marissa is compared to Tanya, so Tanya = x and Marissa = 2x. 50% more than 2x is 2x plus half of 2x.",
   "hint_say": "Not quite. Let Tanya be x, so Marissa is two x. Fifty percent more than two x is two x, plus half of two x.",
   "steps": [
    [
     "Tanya = x,   Marissa = 2x,   Rudy = 2x + x = 3x",
     "50% more than 2x"
    ],
    [
     "x + 2x + 3x = 2,520",
     "total → add"
    ],
    [
     "6x = 2,520,   x = 420",
     "that's Tanya"
    ],
    [
     "Rudy = 3(420) = $1,260",
     "answer for Rudy"
    ]
   ],
   "solve_say": "Let Tanya be x. Marissa is two x. Half of two x is x, so Rudy is three x. Together, six x equals twenty-five twenty, so x is four hundred twenty. Rudy is three times that: twelve hundred sixty dollars, choice C. Eight forty was Marissa's share."
  },
  "c1": {
   "kind": "mc",
   "tag": "From your Practice Test 1",
   "q": "The sum of 3 consecutive integers is 48.\nWhat is the largest integer?",
   "choices": [
    "15",
    "16",
    "17",
    "18"
   ],
   "answer": "C",
   "say": "From your first practice test. The sum of three consecutive integers is forty-eight. What is the largest integer?",
   "hint": "Call them x, x + 1, x + 2. Solve for x, then reread: which one did they ask for?",
   "hint_say": "Close. Call them x, x plus one, and x plus two. Solve for x, then reread the question. Which one does it ask for?",
   "steps": [
    [
     "x + (x + 1) + (x + 2) = 48",
     ""
    ],
    [
     "3x + 3 = 48",
     "combine like terms"
    ],
    [
     "3x = 45,   x = 15",
     "x is the smallest"
    ],
    [
     "15, 16, 17  →  largest is 17",
     "answer the question asked"
    ]
   ],
   "solve_say": "Add x, x plus one, and x plus two to get three x plus three equals forty-eight. So three x is forty-five, and x is fifteen. The numbers are fifteen, sixteen, and seventeen, so the largest is seventeen, choice C. Sixteen is the middle one."
  },
  "c2": {
   "kind": "num",
   "q": "The sum of 3 consecutive odd integers is 51.\nWhat is the smallest of the three?",
   "prefix": "smallest = ",
   "answer": 15,
   "say": "The sum of three consecutive odd integers is fifty-one. What is the smallest one?",
   "hint": "Odd numbers jump by 2: call them x, x + 2, x + 4.",
   "hint_say": "Not quite. Consecutive odd numbers jump by two. Call them x, x plus two, and x plus four.",
   "steps": [
    [
     "x + (x + 2) + (x + 4) = 51",
     "odd numbers jump by 2"
    ],
    [
     "3x + 6 = 51",
     ""
    ],
    [
     "3x = 45,   x = 15",
     ""
    ],
    [
     "15 + 17 + 19 = 51 ✓",
     "check"
    ]
   ],
   "solve_say": "Call them x, x plus two, and x plus four. That adds up to three x plus six equals fifty-one. So three x is forty-five, and x is fifteen. Check: fifteen plus seventeen plus nineteen is fifty-one."
  },
  "a1": {
   "kind": "mc",
   "q": "Pia has 4 times as many stamps as Raj. If Pia gives Raj 15 stamps, they will have the same number. How many stamps does Pia have now?",
   "choices": [
    "10",
    "30",
    "40",
    "60"
   ],
   "answer": "C",
   "say": "Try plugging in. Pia has four times as many stamps as Raj. If Pia gives Raj fifteen stamps, they'll have the same number. How many stamps does Pia have now?",
   "hint": "Plug in a choice for Pia. Raj has ¼ of that. Move 15 stamps from Pia to Raj. Are they equal?",
   "hint_say": "Plug in a choice. If Pia has that many, Raj has one fourth as many. Move fifteen stamps from Pia to Raj. Are they equal now?",
   "steps": [
    [
     "Try 60:  Raj has 15  →  45 and 30 ✗",
     "not equal"
    ],
    [
     "Try 40:  Raj has 10  →  25 and 25 ✓",
     "Pia − 15, Raj + 15"
    ],
    [
     "Pia has 40",
     "10 is Raj, not Pia"
    ]
   ],
   "solve_say": "Try forty. Then Raj has ten. Pia gives fifteen away, so she has twenty-five, and Raj gets fifteen, so he has twenty-five. Equal! The answer is C. Ten is Raj's number, not Pia's."
  },
  "a2": {
   "kind": "mc",
   "tag": "From your Practice Test 1",
   "q": "Today, George's age is 1/5 of Hector's age. In 4 years, George's age will be 1/4 of Hector's age. How old is George today?",
   "choices": [
    "5",
    "6",
    "12",
    "16"
   ],
   "answer": "C",
   "say": "From your first practice test. Today, George's age is one fifth of Hector's age. In four years, George's age will be one fourth of Hector's age. How old is George today?",
   "hint": "Plug in a choice for George. Hector is 5 times that. Add 4 to BOTH ages. Is George ¼ of Hector?",
   "hint_say": "Try plugging in. If George is a choice, Hector is five times that. Add four years to both of them, then check if George is one fourth of Hector.",
   "steps": [
    [
     "Try 6:  Hector 30  →  10 and 34 ✗",
     "10 is not ¼ of 34"
    ],
    [
     "Try 12:  Hector 60  →  16 and 64 ✓",
     "16 is ¼ of 64"
    ],
    [
     "George is 12",
     ""
    ]
   ],
   "solve_say": "Try twelve. Hector is five times that, sixty. In four years, they're sixteen and sixty-four. Sixteen is one fourth of sixty-four, so George is twelve, choice C."
  },
  "p1": {
   "kind": "mc",
   "tag": "From your Practice Test 2",
   "q": "The height of the Times Square New Year's Eve ball starting 1 minute before midnight follows the equation h = 90 − 1.2t, where h is the height of the ball in feet and t is the time in seconds starting at 11:59 p.m. How much higher is the ball 40 seconds before midnight than 15 seconds before midnight?",
   "choices": [
    "15 feet",
    "30 feet",
    "45 feet",
    "60 feet"
   ],
   "answer": "B",
   "say": "From your second practice test. The ball's height is h equals ninety minus one point two t, with t in seconds after eleven fifty-nine. How much higher is the ball forty seconds before midnight than fifteen seconds before midnight?",
   "hint": "The ball drops 1.2 feet per second. How many seconds pass between those two moments?",
   "hint_say": "Not quite. The ball drops one point two feet every second. How many seconds pass between those two moments?",
   "steps": [
    [
     "t = 20:   h = 90 − 1.2(20) = 66",
     "40 s before midnight"
    ],
    [
     "t = 45:   h = 90 − 1.2(45) = 36",
     "15 s before midnight"
    ],
    [
     "66 − 36 = 30 feet",
     "shortcut: 25 s × 1.2 ft per s"
    ]
   ],
   "solve_say": "Forty seconds before midnight, twenty seconds have passed, so the height is ninety minus twenty-four, which is sixty-six. Fifteen seconds before, forty-five seconds have passed: ninety minus fifty-four is thirty-six. That's thirty feet higher. Faster: twenty-five seconds times one point two is thirty."
  },
  "p2": {
   "kind": "mc",
   "tag": "From your Practice Test 1",
   "q": "Each month, Nishitha sells her crafts at an art fair. She pays $175 to rent a table and sells canvas bags for $22 each that cost her $7 a piece to make. What is the minimum number of bags she needs to sell to make a profit?",
   "choices": [
    "9",
    "10",
    "11",
    "12"
   ],
   "answer": "D",
   "say": "This one took you six minutes. Nishitha pays one hundred seventy-five dollars for a table. She sells bags for twenty-two dollars each, and each one costs her seven dollars to make. What is the fewest bags she must sell to make a profit?",
   "hint": "Each bag earns her 22 − 7 = $15. How many bags does it take to get past $175?",
   "hint_say": "Each bag earns her twenty-two minus seven, which is fifteen dollars. How many bags does it take to get past one hundred seventy-five?",
   "steps": [
    [
     "per bag:  22 − 7 = $15",
     "per → multiply by the number of bags"
    ],
    [
     "15n > 175,   n > 11.67",
     "profit: more than the $175"
    ],
    [
     "11 bags: $165 ✗   ·   12 bags: $180 ✓",
     "check against the story"
    ]
   ],
   "solve_say": "Each bag earns twenty-two minus seven, fifteen dollars. She needs fifteen times n to be more than one hundred seventy-five. Eleven bags earns only one sixty-five. Twelve bags earns one eighty, so the answer is twelve, choice D."
  },
  "p3": {
   "kind": "mc",
   "tag": "From your Practice Test 1",
   "q": "Keshaun can mow 2 lawns in 30 minutes, working at a constant rate. Landry can mow 3 lawns in 20 minutes, working at his own constant rate. What is the total number of lawns the two of them can mow in a single 8-hour day of work?",
   "choices": [
    "40",
    "48",
    "96",
    "104"
   ],
   "answer": "D",
   "say": "From your first practice test. Keshaun mows two lawns in thirty minutes. Landry mows three lawns in twenty minutes. How many lawns can the two of them mow in one eight hour day?",
   "hint": "Change each rate to lawns per hour first. An hour has two 30-minute blocks and three 20-minute blocks.",
   "hint_say": "Not quite. Change each rate to lawns per hour first. An hour has two thirty minute blocks, and three twenty minute blocks.",
   "steps": [
    [
     "Keshaun:  2 × 2 = 4 lawns per hour",
     ""
    ],
    [
     "Landry:  3 × 3 = 9 lawns per hour",
     ""
    ],
    [
     "(4 + 9) × 8 = 104 lawns",
     "per hour × hours"
    ]
   ],
   "solve_say": "Keshaun mows two lawns every half hour, so four per hour. Landry mows three every twenty minutes, so nine per hour. Together that's thirteen lawns per hour, times eight hours: one hundred four. The answer is D."
  },
  "p4": {
   "kind": "num",
   "tag": "From your Practice Test 1",
   "figure": "<svg width=\"600\" height=\"340\" viewBox=\"0 0 600 340\" font-family=\"Avenir Next, sans-serif\"><line x1=\"92\" y1=\"251.0\" x2=\"590\" y2=\"251.0\" stroke=\"#24385c\" stroke-width=\"1.5\"/><line x1=\"92\" y1=\"220.0\" x2=\"590\" y2=\"220.0\" stroke=\"#3a5079\" stroke-width=\"2\"/><line x1=\"92\" y1=\"189.0\" x2=\"590\" y2=\"189.0\" stroke=\"#24385c\" stroke-width=\"1.5\"/><line x1=\"92\" y1=\"158.0\" x2=\"590\" y2=\"158.0\" stroke=\"#3a5079\" stroke-width=\"2\"/><line x1=\"92\" y1=\"127.0\" x2=\"590\" y2=\"127.0\" stroke=\"#24385c\" stroke-width=\"1.5\"/><line x1=\"92\" y1=\"96.0\" x2=\"590\" y2=\"96.0\" stroke=\"#3a5079\" stroke-width=\"2\"/><line x1=\"92\" y1=\"65.0\" x2=\"590\" y2=\"65.0\" stroke=\"#24385c\" stroke-width=\"1.5\"/><line x1=\"92\" y1=\"34.0\" x2=\"590\" y2=\"34.0\" stroke=\"#3a5079\" stroke-width=\"2\"/><line x1=\"92\" y1=\"18\" x2=\"92\" y2=\"282\" stroke=\"#9aa5b8\" stroke-width=\"3\"/><line x1=\"92\" y1=\"282\" x2=\"590\" y2=\"282\" stroke=\"#9aa5b8\" stroke-width=\"3\"/><text x=\"80\" y=\"292.0\" text-anchor=\"end\" font-size=\"28\" fill=\"#9aa5b8\">0</text><text x=\"80\" y=\"230.0\" text-anchor=\"end\" font-size=\"28\" fill=\"#9aa5b8\">10</text><text x=\"80\" y=\"168.0\" text-anchor=\"end\" font-size=\"28\" fill=\"#9aa5b8\">20</text><text x=\"80\" y=\"106.0\" text-anchor=\"end\" font-size=\"28\" fill=\"#9aa5b8\">30</text><text x=\"80\" y=\"44.0\" text-anchor=\"end\" font-size=\"28\" fill=\"#9aa5b8\">40</text><rect x=\"118\" y=\"96.0\" width=\"60\" height=\"186.0\" rx=\"4\" fill=\"#8ecae6\"/><text x=\"148\" y=\"322\" text-anchor=\"middle\" font-size=\"32\" font-weight=\"600\" fill=\"#fff\">A</text><rect x=\"215\" y=\"127.0\" width=\"60\" height=\"155.0\" rx=\"4\" fill=\"#8ecae6\"/><text x=\"245\" y=\"322\" text-anchor=\"middle\" font-size=\"32\" font-weight=\"600\" fill=\"#fff\">B</text><rect x=\"312\" y=\"34.0\" width=\"60\" height=\"248.0\" rx=\"4\" fill=\"#8ecae6\"/><text x=\"342\" y=\"322\" text-anchor=\"middle\" font-size=\"32\" font-weight=\"600\" fill=\"#fff\">C</text><rect x=\"409\" y=\"96.0\" width=\"60\" height=\"186.0\" rx=\"4\" fill=\"#8ecae6\"/><text x=\"439\" y=\"322\" text-anchor=\"middle\" font-size=\"32\" font-weight=\"600\" fill=\"#fff\">D</text><rect x=\"506\" y=\"158.0\" width=\"60\" height=\"124.0\" rx=\"4\" fill=\"#8ecae6\"/><text x=\"536\" y=\"322\" text-anchor=\"middle\" font-size=\"32\" font-weight=\"600\" fill=\"#fff\">E</text><text x=\"24\" y=\"150.0\" transform=\"rotate(-90 24 150.0)\" text-anchor=\"middle\" font-size=\"28\" fill=\"#9aa5b8\">Students</text></svg>",
   "q": "The graph shows the number of students in each of five classes. The students in classes A and B each read 50 books last year. The students in class C each read 40 books. The students in classes D and E each read 70 books. What is the greatest total number of books read by all the students in one class?",
   "prefix": "books = ",
   "answer": 2100,
   "say": "From your first practice test. The graph shows how many students are in each class. Students in classes A and B each read fifty books, class C each read forty, and classes D and E each read seventy. What is the greatest total number of books read by one class?",
   "hint": "“Each” means multiply: students × books per student. Do it for every class, then compare.",
   "hint_say": "Each means multiply. For every class, multiply the number of students by the books each one read, then compare.",
   "steps": [
    [
     "A: 30 × 50 = 1,500   ·   B: 25 × 50 = 1,250",
     ""
    ],
    [
     "C: 40 × 40 = 1,600   ·   E: 20 × 70 = 1,400",
     ""
    ],
    [
     "D: 30 × 70 = 2,100",
     "the greatest"
    ]
   ],
   "solve_say": "Multiply students by books. A is fifteen hundred, B is twelve fifty, C is sixteen hundred, E is fourteen hundred, and D is thirty times seventy, twenty-one hundred. So the answer is twenty-one hundred. The biggest class isn't always the biggest total."
  },
  "p5": {
   "kind": "num",
   "tag": "From your Practice Test 1",
   "q": "Among a total of 108 eighth graders, 66 have an older sibling, 23 have both an older and a younger sibling, and 23 have no siblings. How many students have a younger sibling?",
   "prefix": "students = ",
   "answer": 42,
   "say": "From your first practice test. Among one hundred eight eighth graders, sixty-six have an older sibling, twenty-three have both an older and a younger sibling, and twenty-three have no siblings. How many have a younger sibling?",
   "hint": "Draw a Venn diagram. The 23 with both are already inside the 66. All the parts add up to 108.",
   "hint_say": "Draw a Venn diagram. The twenty-three with both are already counted in the sixty-six. All the parts together add up to one hundred eight.",
   "steps": [
    [
     "older only:  66 − 23 = 43",
     ""
    ],
    [
     "younger only:  108 − 43 − 23 − 23 = 19",
     "all the parts add to 108"
    ],
    [
     "younger sibling:  19 + 23 = 42",
     "include the 23 with both"
    ]
   ],
   "solve_say": "Older only is sixty-six minus twenty-three, which is forty-three. The four parts add to one hundred eight, so younger only is one hundred eight minus forty-three, minus twenty-three, minus twenty-three: nineteen. Add the twenty-three with both: forty-two."
  }
 },
 "nCorrect": 4,
 "sounds": {
  "S1Title": "audio/S1Title.mp3",
  "S2Translate": "audio/S2Translate.mp3",
  "S3Total": "audio/S3Total.mp3",
  "S4Consecutive": "audio/S4Consecutive.mp3",
  "S5Rate": "audio/S5Rate.mp3",
  "S6Question": "audio/S6Question.mp3",
  "S7Setup": "audio/S7Setup.mp3",
  "S8Solve": "audio/S8Solve.mp3",
  "S9Check": "audio/S9Check.mp3",
  "S10Plug": "audio/S10Plug.mp3",
  "S11Recap": "audio/S11Recap.mp3",
  "correct0": "audio/correct0.mp3",
  "correct1": "audio/correct1.mp3",
  "correct2": "audio/correct2.mp3",
  "correct3": "audio/correct3.mp3",
  "t1-say": "audio/t1-say.mp3",
  "t1-hint_say": "audio/t1-hint_say.mp3",
  "t1-solve_say": "audio/t1-solve_say.mp3",
  "t2-say": "audio/t2-say.mp3",
  "t2-hint_say": "audio/t2-hint_say.mp3",
  "t2-solve_say": "audio/t2-solve_say.mp3",
  "b1-say": "audio/b1-say.mp3",
  "b1-hint_say": "audio/b1-hint_say.mp3",
  "b1-solve_say": "audio/b1-solve_say.mp3",
  "b2-say": "audio/b2-say.mp3",
  "b2-hint_say": "audio/b2-hint_say.mp3",
  "b2-solve_say": "audio/b2-solve_say.mp3",
  "c1-say": "audio/c1-say.mp3",
  "c1-hint_say": "audio/c1-hint_say.mp3",
  "c1-solve_say": "audio/c1-solve_say.mp3",
  "c2-say": "audio/c2-say.mp3",
  "c2-hint_say": "audio/c2-hint_say.mp3",
  "c2-solve_say": "audio/c2-solve_say.mp3",
  "a1-say": "audio/a1-say.mp3",
  "a1-hint_say": "audio/a1-hint_say.mp3",
  "a1-solve_say": "audio/a1-solve_say.mp3",
  "a2-say": "audio/a2-say.mp3",
  "a2-hint_say": "audio/a2-hint_say.mp3",
  "a2-solve_say": "audio/a2-solve_say.mp3",
  "p1-say": "audio/p1-say.mp3",
  "p1-hint_say": "audio/p1-hint_say.mp3",
  "p1-solve_say": "audio/p1-solve_say.mp3",
  "p2-say": "audio/p2-say.mp3",
  "p2-hint_say": "audio/p2-hint_say.mp3",
  "p2-solve_say": "audio/p2-solve_say.mp3",
  "p3-say": "audio/p3-say.mp3",
  "p3-hint_say": "audio/p3-hint_say.mp3",
  "p3-solve_say": "audio/p3-solve_say.mp3",
  "p4-say": "audio/p4-say.mp3",
  "p4-hint_say": "audio/p4-hint_say.mp3",
  "p4-solve_say": "audio/p4-solve_say.mp3",
  "p5-say": "audio/p5-say.mp3",
  "p5-hint_say": "audio/p5-hint_say.mp3",
  "p5-solve_say": "audio/p5-solve_say.mp3",
  "translate-intro": "audio/translate-intro.mp3",
  "total-intro": "audio/total-intro.mp3",
  "consec-intro": "audio/consec-intro.mp3",
  "plug-intro": "audio/plug-intro.mp3",
  "practice-intro": "audio/practice-intro.mp3",
  "summary-intro": "audio/summary-intro.mp3"
 },
 "lead": 0.4,
 "solveCues": {
  "t1": [
   0.0,
   2.96,
   10.08,
   11.84
  ],
  "t2": [
   0.0,
   5.08,
   7.6,
   11.36
  ],
  "b1": [
   0.0,
   1.92,
   4.64,
   6.32,
   14.24,
   16.08
  ],
  "b2": [
   0.0,
   1.92,
   4.0,
   8.4,
   14.32,
   16.32,
   19.52
  ],
  "c1": [
   0.0,
   7.32,
   11.64,
   18.56
  ],
  "c2": [
   0.0,
   4.48,
   8.64,
   13.04,
   13.92
  ],
  "a1": [
   0.0,
   1.52,
   3.48,
   10.48,
   11.12,
   12.8
  ],
  "a2": [
   0.0,
   0.96,
   4.52,
   8.16
  ],
  "p1": [
   0.0,
   8.44,
   12.32,
   15.44,
   17.36,
   18.32
  ],
  "p2": [
   0.0,
   4.4,
   9.28,
   12.64
  ],
  "p3": [
   0.0,
   4.96,
   9.8,
   13.76,
   15.08
  ],
  "p4": [
   0.0,
   2.56,
   14.92,
   17.44
  ],
  "p5": [
   0.0,
   5.04,
   14.48,
   15.68,
   17.76
  ]
 }
};
window.TIMING = window.LESSON.timing;
