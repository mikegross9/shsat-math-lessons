window.LESSON = {
 "videos": {
  "S1Title": "video/S1Title.mp4",
  "S2Parts": "video/S2Parts.mp4",
  "S3Proportion": "video/S3Proportion.mp4",
  "S4Rates": "video/S4Rates.mp4",
  "S5Convert": "video/S5Convert.mp4",
  "S6Question": "video/S6Question.mp4",
  "S7Solve": "video/S7Solve.mp4",
  "S8Check": "video/S8Check.mp4",
  "S9Recap": "video/S9Recap.mp4"
 },
 "unit": {
  "num": 4,
  "title": "Ratios, Rates & Unit Conversions",
  "minutes": 16,
  "next": "unit5"
 },
 "titles": {
  "S1Title": "Welcome",
  "S2Parts": "A ratio is a recipe",
  "S3Proportion": "Proportions",
  "S4Rates": "Rates: per means divide",
  "S5Convert": "Units that cancel",
  "S6Question": "Your real question",
  "S7Solve": "Solving it",
  "S8Check": "Check your answer",
  "S9Recap": "Your toolkit"
 },
 "timing": {
  "S1Title": {
   "cues": [
    0.3,
    6.14,
    11.82
   ],
   "dur": 19.86
  },
  "S2Parts": {
   "cues": [
    0.3,
    2.62,
    9.42,
    12.38,
    18.7,
    25.34
   ],
   "dur": 34.26
  },
  "S3Proportion": {
   "cues": [
    0.3,
    3.9,
    10.7,
    17.34,
    25.34,
    29.58
   ],
   "dur": 38.82
  },
  "S4Rates": {
   "cues": [
    0.3,
    7.02,
    11.5,
    22.14,
    27.82,
    36.38
   ],
   "dur": 42.58
  },
  "S5Convert": {
   "cues": [
    0.3,
    4.62,
    12.3,
    15.98,
    21.42,
    25.74,
    34.86
   ],
   "dur": 40.66
  },
  "S6Question": {
   "cues": [
    0.3,
    20.54,
    25.02
   ],
   "dur": 28.34
  },
  "S7Solve": {
   "cues": [
    0.3,
    6.22,
    15.98,
    20.86,
    29.74,
    32.86
   ],
   "dur": 40.1
  },
  "S8Check": {
   "cues": [
    0.3,
    2.46,
    12.86,
    21.82
   ],
   "dur": 30.1
  },
  "S9Recap": {
   "cues": [
    0.3,
    2.22,
    8.06,
    12.86,
    19.86,
    23.42
   ],
   "dur": 29.3
  }
 },
 "flow": [
  [
   "scene",
   "S1Title"
  ],
  [
   "scene",
   "S2Parts"
  ],
  [
   "quiz",
   {
    "id": "parts",
    "title": "Your turn: parts and wholes",
    "qs": [
     "a1",
     "a2"
    ],
    "say": "Your turn! Add the parts, find one share, then multiply."
   }
  ],
  [
   "scene",
   "S3Proportion"
  ],
  [
   "quiz",
   {
    "id": "prop",
    "title": "Your turn: proportions",
    "qs": [
     "b1",
     "b2"
    ],
    "say": "Your turn. Line up the units, then cross-multiply."
   }
  ],
  [
   "scene",
   "S4Rates"
  ],
  [
   "quiz",
   {
    "id": "rates",
    "title": "Your turn: rates",
    "qs": [
     "c1",
     "c2"
    ],
    "say": "Two rate problems. Watch the minutes."
   }
  ],
  [
   "scene",
   "S5Convert"
  ],
  [
   "quiz",
   {
    "id": "convert",
    "title": "Your turn: convert",
    "qs": [
     "d1",
     "d2"
    ],
    "say": "Now convert. Let the units cancel."
   }
  ],
  [
   "scene",
   "S6Question"
  ],
  [
   "scene",
   "S7Solve"
  ],
  [
   "scene",
   "S8Check"
  ],
  [
   "quiz",
   {
    "id": "practice",
    "title": "SHSAT practice set",
    "qs": [
     "t1",
     "t2",
     "t3",
     "t4",
     "t5",
     "t6",
     "t7"
    ],
    "say": "Now let's practice like it's the real test. All seven of these are questions you missed on your practice tests. Take your time, and check each answer before you move on."
   }
  ],
  [
   "scene",
   "S9Recap"
  ],
  [
   "summary",
   {
    "say": "Great job finishing Unit 4! Here's how you did."
   }
  ]
 ],
 "questions": {
  "a1": {
   "kind": "multi",
   "q": "A club has boys and girls in a 4 : 7 ratio.\nThere are 44 members. How many are girls?",
   "template": "[] girls",
   "answers": [
    28
   ],
   "say": "A club has boys and girls in a four to seven ratio. There are forty-four members. How many are girls?",
   "hint": "Add the parts first: 4 + 7 = 11 shares. What is one share worth?",
   "hint_say": "Not quite. Add the parts first. Four plus seven is eleven shares. How much is one share?",
   "steps": [
    [
     "4 + 7 = 11 shares",
     "add the parts"
    ],
    [
     "44 ÷ 11 = 4",
     "one share"
    ],
    [
     "girls = 7 × 4 = 28",
     ""
    ]
   ],
   "solve_say": "Four plus seven is eleven shares. Forty-four divided by eleven is four, so one share is four people. Girls are seven shares, and seven times four is twenty-eight."
  },
  "a2": {
   "kind": "mc",
   "q": "Red and blue marbles are in a 3 : 5 ratio. There are 12 more blue marbles than red. How many marbles are there in all?",
   "choices": [
    "20",
    "30",
    "48",
    "96"
   ],
   "answer": "C",
   "say": "Red and blue marbles are in a three to five ratio. There are twelve more blue marbles than red. How many marbles are there in all?",
   "hint": "Blue has 2 more shares than red, and those 2 shares are the 12 extra marbles.",
   "hint_say": "Not quite. Blue has two more shares than red. Those two shares are the twelve extra marbles. So what is one share?",
   "steps": [
    [
     "5 − 3 = 2 shares = 12",
     "the difference"
    ],
    [
     "1 share = 6",
     ""
    ],
    [
     "total = 8 × 6 = 48",
     "3 + 5 = 8 shares"
    ]
   ],
   "solve_say": "Blue has two more shares than red, and that difference is twelve marbles. So one share is six. There are eight shares in all, and eight times six is forty-eight. The answer is C."
  },
  "b1": {
   "kind": "multi",
   "q": "On a map, 4 cm represents 30 km.\nHow many km does 10 cm represent?",
   "template": "[] km",
   "answers": [
    75
   ],
   "say": "On a map, four centimeters represents thirty kilometers. How many kilometers does ten centimeters represent?",
   "hint": "Same units in the same places: 4/30 = 10/x. Then cross-multiply.",
   "hint_say": "Not yet. Put centimeters on top and kilometers on the bottom on both sides: four over thirty equals ten over x. Then cross-multiply.",
   "steps": [
    [
     "4/30 = 10/x",
     "cm on top, km on the bottom"
    ],
    [
     "4x = 300",
     "cross-multiply: 10 × 30"
    ],
    [
     "x = 75",
     "divide by 4"
    ]
   ],
   "solve_say": "Set up four over thirty equals ten over x. Cross-multiply: four x equals three hundred. Divide by four, and x equals seventy-five kilometers."
  },
  "b2": {
   "kind": "multi",
   "q": "A car uses 3 gallons of gas to go 84 miles.\nHow many gallons does it need to go 140 miles?",
   "template": "[] gallons",
   "answers": [
    5
   ],
   "say": "A car uses three gallons of gas to go eighty-four miles. How many gallons does it need to go one hundred forty miles?",
   "hint": "Gallons over miles on both sides: 3/84 = x/140. Cross-multiply, then divide.",
   "hint_say": "Close. Put gallons over miles on both sides: three over eighty-four equals x over one hundred forty. Cross-multiply, then divide.",
   "steps": [
    [
     "3/84 = x/140",
     "gallons over miles"
    ],
    [
     "84x = 420",
     "cross-multiply: 3 × 140"
    ],
    [
     "x = 5",
     "divide by 84"
    ]
   ],
   "solve_say": "Gallons over miles on both sides: three over eighty-four equals x over one hundred forty. Cross-multiply: eighty-four x equals four hundred twenty. Divide by eighty-four, and x equals five gallons."
  },
  "c1": {
   "kind": "multi",
   "q": "A train travels 150 miles in 2 hours 30 minutes.\nWhat is its speed in miles per hour?",
   "template": "[] miles per hour",
   "answers": [
    60
   ],
   "say": "A train travels one hundred fifty miles in two hours and thirty minutes. What is its speed in miles per hour?",
   "hint": "30 minutes is half an hour, so the time is 2.5 hours, not 2.3. Then divide.",
   "hint_say": "Not quite. Thirty minutes is half an hour, so the time is two point five hours, not two point three. Then divide miles by hours.",
   "steps": [
    [
     "2 h 30 min = 2.5 h",
     "30 ÷ 60 = 0.5"
    ],
    [
     "150 ÷ 2.5 = 60",
     "per means divide"
    ],
    [
     "60 miles per hour",
     ""
    ]
   ],
   "solve_say": "Thirty minutes is half an hour, so the time is two point five hours. Per means divide: one hundred fifty divided by two point five is sixty miles per hour."
  },
  "c2": {
   "kind": "multi",
   "q": "A printer prints 45 pages in 3 minutes. At that rate,\nhow many minutes will it take to print 300 pages?",
   "template": "[] minutes",
   "answers": [
    20
   ],
   "say": "A printer prints forty-five pages in three minutes. At that rate, how many minutes will it take to print three hundred pages?",
   "hint": "Find the unit rate first: pages per minute. Then minutes = pages ÷ rate.",
   "hint_say": "Not yet. Find the unit rate first, in pages per minute. Then divide the pages by the rate.",
   "steps": [
    [
     "45 ÷ 3 = 15 pages per minute",
     "the unit rate"
    ],
    [
     "300 ÷ 15 = 20 minutes",
     "time = pages ÷ rate"
    ]
   ],
   "solve_say": "First the unit rate: forty-five pages in three minutes is fifteen pages per minute. Three hundred pages divided by fifteen pages per minute is twenty minutes."
  },
  "d1": {
   "kind": "multi",
   "q": "How many inches are in 2.5 yards?\n(1 yard = 3 feet, 1 foot = 12 inches)",
   "template": "[] inches",
   "answers": [
    90
   ],
   "say": "How many inches are in two and a half yards? One yard is three feet, and one foot is twelve inches.",
   "hint": "Chain it: yards → feet → inches. Multiply by 3, then by 12.",
   "hint_say": "Not quite. Chain it. Yards to feet, then feet to inches. Multiply by three, then by twelve.",
   "steps": [
    [
     "2.5 yd × 3 ft/yd = 7.5 ft",
     "yards cancel"
    ],
    [
     "7.5 ft × 12 in/ft = 90 in",
     "feet cancel"
    ]
   ],
   "solve_say": "Chain it. Two and a half yards times three feet per yard is seven and a half feet. Seven and a half feet times twelve inches per foot is ninety inches."
  },
  "d2": {
   "kind": "multi",
   "q": "A cyclist rides 18 kilometers per hour.\nHow many meters per minute is that?",
   "template": "[] meters per minute",
   "answers": [
    300
   ],
   "say": "A cyclist rides eighteen kilometers per hour. How many meters per minute is that?",
   "hint": "km → m: multiply by 1,000. Per hour → per minute: divide by 60.",
   "hint_say": "Not quite. To go from kilometers to meters, multiply by one thousand. To go from per hour to per minute, divide by sixty.",
   "steps": [
    [
     "18 × 1,000 = 18,000 m per hour",
     "1 km = 1,000 m"
    ],
    [
     "18,000 ÷ 60 = 300 m per minute",
     "1 hour = 60 minutes"
    ]
   ],
   "solve_say": "Kilometers to meters: eighteen times one thousand is eighteen thousand meters per hour. An hour is sixty minutes, so divide by sixty. That's three hundred meters per minute."
  },
  "t1": {
   "kind": "mc",
   "tag": "From your Practice Test 2",
   "q": "John runs 10 kilometers in 1 hour and 20 minutes. At that rate, how many meters does he run per minute?",
   "choices": [
    "1.25",
    "12.5",
    "125",
    "1,250"
   ],
   "answer": "C",
   "say": "This one is from your second practice test, where you answered in six seconds. John runs ten kilometers in one hour and twenty minutes. At that rate, how many meters does he run per minute?",
   "hint": "Change the time to minutes and the distance to meters first. Then divide.",
   "hint_say": "Not quite. Change the time to minutes and the distance to meters first. Then divide meters by minutes.",
   "steps": [
    [
     "1 h 20 min = 80 min",
     ""
    ],
    [
     "10 km = 10,000 m",
     "1 km = 1,000 m"
    ],
    [
     "10,000 ÷ 80 = 125",
     "meters per minute"
    ]
   ],
   "solve_say": "One hour twenty minutes is eighty minutes. Ten kilometers is ten thousand meters. Ten thousand divided by eighty is one hundred twenty-five meters per minute. The answer is C."
  },
  "t2": {
   "kind": "mc",
   "tag": "From your Practice Test 1",
   "q": "Marquis plans to jog 40 kilometers on a treadmill. It took him 1 hour and 15 minutes to jog the first 10 kilometers. If he maintains a constant rate, how much additional time will it take him to achieve his goal?",
   "choices": [
    "3¾ hours",
    "4¼ hours",
    "4¾ hours",
    "5¼ hours"
   ],
   "answer": "A",
   "say": "From your first practice test. Marquis plans to jog forty kilometers on a treadmill. It took him one hour and fifteen minutes to jog the first ten kilometers. At a constant rate, how much additional time will it take him to reach his goal?",
   "hint": "He has 30 km left: 3 times the first 10 km. And 1 hour 15 minutes is 1¼ hours.",
   "hint_say": "Not quite. He has thirty kilometers left, which is three times the first ten. And one hour fifteen minutes is one and a quarter hours.",
   "steps": [
    [
     "40 − 10 = 30 km left",
     "it asks for additional time"
    ],
    [
     "30 km = 3 × 10 km",
     ""
    ],
    [
     "3 × 1¼ h = 3¾ h",
     "15 min = ¼ hour"
    ]
   ],
   "solve_say": "The question asks for the additional time. He has thirty kilometers left, three times the ten he already ran. Three times one and a quarter hours is three and three quarter hours. The answer is A."
  },
  "t3": {
   "kind": "mc",
   "tag": "From your Practice Test 2",
   "q": "Jackie swam ¾ as many laps as Sam. Jackie swam 2½ laps.\nHow many laps did Sam swim?",
   "choices": [
    "1¾",
    "1⅞",
    "3¼",
    "3⅓"
   ],
   "answer": "D",
   "say": "From your second practice test. Jackie swam three fourths as many laps as Sam. Jackie swam two and a half laps. How many laps did Sam swim?",
   "hint": "Jackie = ¾ × Sam, so Sam = 2½ ÷ ¾. Sam swam more than Jackie.",
   "hint_say": "Not quite. Jackie's laps are three fourths of Sam's, so Sam's laps are two and a half divided by three fourths. Sam swam more than Jackie.",
   "steps": [
    [
     "¾ × S = 2½",
     "Jackie is ¾ of Sam"
    ],
    [
     "S = 5/2 × 4/3",
     "÷ ¾ means × 4/3"
    ],
    [
     "S = 10/3 = 3⅓",
     ""
    ]
   ],
   "solve_say": "Three fourths of Sam's laps is two and a half. Divide by three fourths: five halves times four thirds is ten thirds, which is three and one third. Sense check: Sam swam more than Jackie. The answer is D."
  },
  "t4": {
   "kind": "mc",
   "tag": "From your Practice Test 1",
   "q": "1 harp = 12 plunks   1 harp = 0.2 sinds\nEthan has 180 plunks and 24 sinds. If he exchanges the plunks and sinds for harps according to the rates above, how many harps will he receive?",
   "choices": [
    "27",
    "63",
    "135",
    "180"
   ],
   "answer": "C",
   "say": "From your first practice test. One harp equals twelve plunks, and one harp equals two tenths of a sind. Ethan has one hundred eighty plunks and twenty-four sinds. If he exchanges them all for harps, how many harps will he receive?",
   "hint": "Convert each kind separately. 0.2 sinds buys 1 harp, so 1 sind buys 5 harps.",
   "hint_say": "Not quite. Convert each kind separately. Two tenths of a sind buys one harp, so one whole sind buys five harps.",
   "steps": [
    [
     "180 ÷ 12 = 15 harps",
     "from plunks"
    ],
    [
     "24 ÷ 0.2 = 120 harps",
     "1 sind = 5 harps"
    ],
    [
     "15 + 120 = 135 harps",
     ""
    ]
   ],
   "solve_say": "Convert each kind separately. One hundred eighty plunks divided by twelve is fifteen harps. Each sind buys five harps, so twenty-four sinds buy one hundred twenty harps. Fifteen plus one hundred twenty is one hundred thirty-five. The answer is C."
  },
  "t5": {
   "kind": "multi",
   "tag": "From your Practice Test 1",
   "q": "On the blueprint of a house, 0.375 inches represents 37.5 feet.\nHow many inches on the blueprint represent 1 foot? 1 yard?",
   "template": "1 foot: [] in. 1 yard: [] in.",
   "answers": [
    0.01,
    0.03
   ],
   "say": "From your first practice test. On the blueprint of a house, zero point three seven five inches represents thirty-seven point five feet. How many inches on the blueprint represent one foot, and how many represent one yard?",
   "hint": "Divide: 0.375 ÷ 37.5. Watch the decimal point! Then 1 yard = 3 feet.",
   "hint_say": "Not quite. Divide zero point three seven five by thirty-seven point five, and watch the decimal point. Then remember a yard is three feet.",
   "steps": [
    [
     "0.375 ÷ 37.5 = 0.01",
     "inches for 1 foot"
    ],
    [
     "3 × 0.01 = 0.03",
     "1 yard = 3 feet"
    ]
   ],
   "solve_say": "Divide: zero point three seven five divided by thirty-seven point five is one hundredth. Check it: one hundredth times thirty-seven point five is zero point three seven five. A yard is three feet, so it's three hundredths of an inch."
  },
  "t6": {
   "kind": "mc",
   "tag": "From your Practice Test 1",
   "q": "An airplane is traveling 450 miles per hour, and 1 mile = 5,280 feet. Which of the following calculations would give the airplane's speed in inches per second?",
   "choices": [
    "450 × 5,280 × 60 ÷ 12",
    "450 × 5,280 × 12 ÷ 3,600",
    "450 × 3,600 ÷ 5,280 ÷ 12",
    "450 × 3,600 × 12 ÷ 5,280"
   ],
   "answer": "B",
   "say": "From your first practice test. An airplane is traveling four hundred fifty miles per hour, and one mile is five thousand two hundred eighty feet. Which calculation gives the airplane's speed in inches per second?",
   "hint": "Chain fractions so units cancel: miles → feet → inches, and 1 hour = 3,600 seconds.",
   "hint_say": "Not quite. Chain fractions so the units cancel. Miles to feet, feet to inches, and one hour is three thousand six hundred seconds.",
   "steps": [
    [
     "450 mi/hr × 5,280 ft/mi × 12 in/ft",
     "miles and feet cancel"
    ],
    [
     "× 1 hr / 3,600 s",
     "hours cancel, per second"
    ]
   ],
   "solve_say": "Multiply by five thousand two hundred eighty feet per mile, so miles cancel. Multiply by twelve inches per foot, so feet cancel. An hour is three thousand six hundred seconds, so divide by three thousand six hundred. That's choice B."
  },
  "t7": {
   "kind": "mc",
   "tag": "From your Practice Test 1",
   "q": "On a number line (not shown), point D is at −20, point G is at 16, and points E and F lie between D and G, in that order. If DE : EF : FG = 4 : 3 : 5, what is the location of point F?",
   "choices": [
    "−14",
    "−5",
    "1",
    "11"
   ],
   "answer": "C",
   "say": "Last one, from your first practice test. On a number line, point D is at negative twenty and point G is at sixteen. Points E and F lie between them, in that order. If D E to E F to F G is four to three to five, where is point F?",
   "hint": "Total distance = 16 − (−20) = 36. Add the parts to find one share.",
   "hint_say": "Not quite. The total distance is sixteen minus negative twenty, which is thirty-six. Add the parts to find one share.",
   "steps": [
    [
     "16 − (−20) = 36",
     "total distance"
    ],
    [
     "36 ÷ (4 + 3 + 5) = 3",
     "one share"
    ],
    [
     "F = −20 + 7 × 3 = 1",
     "D to F is 4 + 3 = 7 shares"
    ]
   ],
   "solve_say": "The total distance is sixteen minus negative twenty, which is thirty-six. There are twelve parts, so one share is three. F is seven shares to the right of D. Seven times three is twenty-one, and negative twenty plus twenty-one is one. The answer is C."
  }
 },
 "nCorrect": 4,
 "sounds": {
  "S1Title": "audio/S1Title.mp3",
  "S2Parts": "audio/S2Parts.mp3",
  "S3Proportion": "audio/S3Proportion.mp3",
  "S4Rates": "audio/S4Rates.mp3",
  "S5Convert": "audio/S5Convert.mp3",
  "S6Question": "audio/S6Question.mp3",
  "S7Solve": "audio/S7Solve.mp3",
  "S8Check": "audio/S8Check.mp3",
  "S9Recap": "audio/S9Recap.mp3",
  "correct0": "audio/correct0.mp3",
  "correct1": "audio/correct1.mp3",
  "correct2": "audio/correct2.mp3",
  "correct3": "audio/correct3.mp3",
  "a1-say": "audio/a1-say.mp3",
  "a1-hint_say": "audio/a1-hint_say.mp3",
  "a1-solve_say": "audio/a1-solve_say.mp3",
  "a2-say": "audio/a2-say.mp3",
  "a2-hint_say": "audio/a2-hint_say.mp3",
  "a2-solve_say": "audio/a2-solve_say.mp3",
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
  "d1-say": "audio/d1-say.mp3",
  "d1-hint_say": "audio/d1-hint_say.mp3",
  "d1-solve_say": "audio/d1-solve_say.mp3",
  "d2-say": "audio/d2-say.mp3",
  "d2-hint_say": "audio/d2-hint_say.mp3",
  "d2-solve_say": "audio/d2-solve_say.mp3",
  "t1-say": "audio/t1-say.mp3",
  "t1-hint_say": "audio/t1-hint_say.mp3",
  "t1-solve_say": "audio/t1-solve_say.mp3",
  "t2-say": "audio/t2-say.mp3",
  "t2-hint_say": "audio/t2-hint_say.mp3",
  "t2-solve_say": "audio/t2-solve_say.mp3",
  "t3-say": "audio/t3-say.mp3",
  "t3-hint_say": "audio/t3-hint_say.mp3",
  "t3-solve_say": "audio/t3-solve_say.mp3",
  "t4-say": "audio/t4-say.mp3",
  "t4-hint_say": "audio/t4-hint_say.mp3",
  "t4-solve_say": "audio/t4-solve_say.mp3",
  "t5-say": "audio/t5-say.mp3",
  "t5-hint_say": "audio/t5-hint_say.mp3",
  "t5-solve_say": "audio/t5-solve_say.mp3",
  "t6-say": "audio/t6-say.mp3",
  "t6-hint_say": "audio/t6-hint_say.mp3",
  "t6-solve_say": "audio/t6-solve_say.mp3",
  "t7-say": "audio/t7-say.mp3",
  "t7-hint_say": "audio/t7-hint_say.mp3",
  "t7-solve_say": "audio/t7-solve_say.mp3",
  "parts-intro": "audio/parts-intro.mp3",
  "prop-intro": "audio/prop-intro.mp3",
  "rates-intro": "audio/rates-intro.mp3",
  "convert-intro": "audio/convert-intro.mp3",
  "practice-intro": "audio/practice-intro.mp3",
  "summary-intro": "audio/summary-intro.mp3"
 },
 "lead": 0.4,
 "solveCues": {
  "a1": [
   0.0,
   2.56,
   8.96
  ],
  "a2": [
   0.0,
   5.4,
   7.76,
   12.16
  ],
  "b1": [
   0.0,
   4.32,
   5.8,
   8.04
  ],
  "b2": [
   0.0,
   2.96,
   7.2,
   8.48,
   11.4
  ],
  "c1": [
   0.0,
   5.28,
   7.44
  ],
  "c2": [
   0.0,
   1.92,
   6.84
  ],
  "d1": [
   0.0,
   1.12,
   6.52
  ],
  "d2": [
   0.0,
   2.0,
   6.56,
   10.48
  ],
  "t1": [
   0.0,
   3.08,
   6.8,
   12.0
  ],
  "t2": [
   0.0,
   2.96,
   8.12,
   12.72
  ],
  "t3": [
   0.0,
   3.44,
   5.68,
   11.2,
   12.48,
   14.68
  ],
  "t4": [
   0.0,
   2.48,
   7.12,
   13.6,
   17.76
  ],
  "t5": [
   0.0,
   1.12,
   7.08,
   8.0,
   13.32
  ],
  "t6": [
   0.0,
   6.0,
   10.16,
   16.48
  ],
  "t7": [
   0.0,
   5.44,
   9.04,
   12.08,
   17.6
  ]
 }
};
window.TIMING = window.LESSON.timing;
