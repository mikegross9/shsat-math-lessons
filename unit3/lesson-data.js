window.LESSON = {
 "videos": {
  "S1Title": "video/S1Title.mp4",
  "S2Meaning": "video/S2Meaning.mp4",
  "S3Of": "video/S3Of.mp4",
  "S4Multiplier": "video/S4Multiplier.mp4",
  "S5Successive": "video/S5Successive.mp4",
  "S6Backward": "video/S6Backward.mp4",
  "S7Charts": "video/S7Charts.mp4",
  "S8Question": "video/S8Question.mp4",
  "S9Solve": "video/S9Solve.mp4",
  "S10Check": "video/S10Check.mp4",
  "S11Recap": "video/S11Recap.mp4"
 },
 "unit": {
  "num": 3,
  "title": "Percents",
  "minutes": 17,
  "next": "unit4"
 },
 "titles": {
  "S1Title": "Welcome",
  "S2Meaning": "Percent means per hundred",
  "S3Of": "“Of” means multiply",
  "S4Multiplier": "Changes are multipliers",
  "S5Successive": "Up 20%, then down 20%",
  "S6Backward": "Working backward",
  "S7Charts": "Tables and circle graphs",
  "S8Question": "Your real question",
  "S9Solve": "Solving it",
  "S10Check": "Answer the question asked",
  "S11Recap": "The recipe"
 },
 "timing": {
  "S1Title": {
   "cues": [
    0.3,
    4.22,
    9.18
   ],
   "dur": 19.78
  },
  "S2Meaning": {
   "cues": [
    0.3,
    2.94,
    9.5,
    12.98,
    16.54,
    23.66,
    30.86
   ],
   "dur": 35.78
  },
  "S3Of": {
   "cues": [
    0.3,
    2.78,
    6.86,
    14.38,
    16.38,
    23.34,
    26.3,
    30.38
   ],
   "dur": 42.42
  },
  "S4Multiplier": {
   "cues": [
    0.3,
    5.5,
    8.94,
    13.7,
    17.66,
    27.26,
    32.38
   ],
   "dur": 41.22
  },
  "S5Successive": {
   "cues": [
    0.3,
    9.5,
    11.66,
    17.34,
    24.3,
    27.98,
    33.58
   ],
   "dur": 42.42
  },
  "S6Backward": {
   "cues": [
    0.3,
    4.86,
    9.58,
    14.3,
    22.62,
    30.02,
    36.66
   ],
   "dur": 46.18
  },
  "S7Charts": {
   "cues": [
    0.3,
    5.74,
    10.54,
    17.98,
    24.62,
    33.26,
    39.82
   ],
   "dur": 48.02
  },
  "S8Question": {
   "cues": [
    0.3,
    19.58,
    23.74
   ],
   "dur": 26.5
  },
  "S9Solve": {
   "cues": [
    0.3,
    5.1,
    12.58,
    18.06,
    26.14,
    29.74
   ],
   "dur": 33.3
  },
  "S10Check": {
   "cues": [
    0.3,
    2.98,
    9.1,
    12.78,
    19.1,
    24.22
   ],
   "dur": 34.5
  },
  "S11Recap": {
   "cues": [
    0.3,
    2.38,
    5.58,
    9.74,
    18.06,
    22.14,
    26.7
   ],
   "dur": 32.74
  }
 },
 "flow": [
  [
   "scene",
   "S1Title"
  ],
  [
   "scene",
   "S2Meaning"
  ],
  [
   "quiz",
   {
    "id": "meaning",
    "title": "Your turn: percent to decimal",
    "qs": [
     "m1",
     "m2"
    ],
    "say": "Your turn! Two quick ones on changing percents to decimals."
   }
  ],
  [
   "scene",
   "S3Of"
  ],
  [
   "quiz",
   {
    "id": "of",
    "title": "Your turn: of means times",
    "qs": [
     "o1",
     "o2"
    ],
    "say": "Your turn. Remember, of means multiply, and watch for questions about the rest."
   }
  ],
  [
   "scene",
   "S4Multiplier"
  ],
  [
   "scene",
   "S5Successive"
  ],
  [
   "quiz",
   {
    "id": "change",
    "title": "Your turn: multipliers",
    "qs": [
     "c1",
     "c2"
    ],
    "say": "Your turn. Turn each change into a multiplier."
   }
  ],
  [
   "scene",
   "S6Backward"
  ],
  [
   "quiz",
   {
    "id": "back",
    "title": "Your turn: work backward",
    "qs": [
     "b1",
     "b2"
    ],
    "say": "Your turn. When you know the after, divide to find the before."
   }
  ],
  [
   "scene",
   "S7Charts"
  ],
  [
   "quiz",
   {
    "id": "charts",
    "title": "Your turn: circle graph",
    "qs": [
     "g1"
    ],
    "say": "Now try one with a circle graph."
   }
  ],
  [
   "scene",
   "S8Question"
  ],
  [
   "scene",
   "S9Solve"
  ],
  [
   "scene",
   "S10Check"
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
     "p5",
     "p6"
    ],
    "say": "Now let's practice like it's the real test. Six SHSAT style questions, and four are ones you missed on your practice tests. Reread the last sentence before you answer."
   }
  ],
  [
   "scene",
   "S11Recap"
  ],
  [
   "summary",
   {
    "say": "Great job finishing Unit 3! Here's how you did."
   }
  ]
 ],
 "questions": {
  "m1": {
   "kind": "num",
   "q": "Write 7% as a decimal.",
   "prefix": "7% = ",
   "answer": 0.07,
   "say": "Write seven percent as a decimal. Type your answer, then press Check.",
   "hint": "Divide by 100: move the decimal point 2 places left. 7 is 7.0",
   "hint_say": "Not quite. Move the decimal point two places to the left. Seven is the same as seven point zero.",
   "steps": [
    [
     "7% = 7 ÷ 100",
     "percent means per hundred"
    ],
    [
     "7% = 0.07",
     "move the point 2 places left"
    ]
   ],
   "solve_say": "Divide by one hundred: move the decimal point two places left, and fill the gap with a zero. Seven percent is zero point zero seven."
  },
  "m2": {
   "kind": "mc",
   "q": "Which decimal is equal to 0.5%?",
   "choices": [
    "0.005",
    "0.05",
    "0.5",
    "5"
   ],
   "answer": "A",
   "say": "Which decimal is equal to zero point five percent? Pick an answer, then press Check.",
   "hint": "0.5% is half of 1%, and 1% = 0.01.",
   "hint_say": "Careful. Zero point five percent is half of one percent, and one percent is zero point zero one.",
   "steps": [
    [
     "0.5% = 0.5 ÷ 100",
     "divide by 100"
    ],
    [
     "0.5% = 0.005",
     "move the point 2 places left"
    ]
   ],
   "solve_say": "Move the decimal point two places left. Zero point five becomes zero point zero zero five. That's half of one percent, which makes sense. The answer is A."
  },
  "o1": {
   "kind": "num",
   "q": "What is 15% of 80?",
   "prefix": "15% of 80 = ",
   "answer": 12,
   "say": "What is fifteen percent of eighty?",
   "hint": "“Of” means multiply: 0.15 × 80. Or: 10% is 8, and 5% is half of that.",
   "hint_say": "Not quite. Of means multiply, so do zero point one five times eighty. Or find ten percent first, then add half of it.",
   "steps": [
    [
     "0.15 × 80 = 12",
     "of means multiply"
    ],
    [
     "10% = 8,  5% = 4,  8 + 4 = 12",
     "mental math check"
    ]
   ],
   "solve_say": "Of means multiply. Zero point one five times eighty is twelve. Check: ten percent is eight, five percent is four, and eight plus four is twelve."
  },
  "o2": {
   "kind": "num",
   "q": "A class has 30 students, and 40% of them walk to school. How many students do not walk to school?",
   "prefix": "not walking: ",
   "answer": 18,
   "say": "A class has thirty students, and forty percent of them walk to school. How many students do not walk to school?",
   "hint": "Reread the question. If 40% walk, what percent don't?",
   "hint_say": "Read the question again. It asks about the students who do not walk. If forty percent walk, what percent don't?",
   "steps": [
    [
     "100% − 40% = 60%",
     "the rest don't walk"
    ],
    [
     "0.6 × 30 = 18",
     ""
    ]
   ],
   "solve_say": "If forty percent walk, the rest, sixty percent, don't. Zero point six times thirty is eighteen students."
  },
  "c1": {
   "kind": "num",
   "q": "A $40 sweater is 30% off. Sale price?",
   "prefix": "$",
   "answer": 28,
   "say": "A forty dollar sweater is on sale for thirty percent off. What is the sale price?",
   "hint": "30% off means you still pay 70%. Multiply 40 by 0.7.",
   "hint_say": "Not quite. Thirty percent off means you still pay seventy percent. Multiply forty by zero point seven.",
   "steps": [
    [
     "100% − 30% = 70%",
     "what you still pay"
    ],
    [
     "40 × 0.7 = 28",
     "sale price: $28"
    ]
   ],
   "solve_say": "Thirty percent off means you pay seventy percent. Forty times zero point seven is twenty-eight dollars."
  },
  "c2": {
   "kind": "mc",
   "q": "A price rises 50%, and then the new price falls 50%. How did the price change overall?",
   "choices": [
    "no change",
    "25% lower",
    "25% higher",
    "50% lower"
   ],
   "answer": "B",
   "say": "A price goes up fifty percent. Then the new price goes down fifty percent. Overall, how did the price change?",
   "hint": "Try a price of $100. Up 50% is $150. What is 50% off $150?",
   "hint_say": "Try a real number. Start at one hundred dollars. Up fifty percent is one fifty. Now what is fifty percent off one fifty?",
   "steps": [
    [
     "100 × 1.5 = 150",
     "up 50%"
    ],
    [
     "150 × 0.5 = 75",
     "down 50% of the new price"
    ],
    [
     "75 is 25% less than 100",
     "or 1.5 × 0.5 = 0.75"
    ]
   ],
   "solve_say": "Start with one hundred. Up fifty percent is one fifty. Half of one fifty is seventy-five, which is twenty-five percent less than one hundred. The answer is B."
  },
  "b1": {
   "kind": "num",
   "q": "Sam paid $54 for a video game, including 8% sales tax. What was the price before tax?",
   "prefix": "$",
   "answer": 50,
   "say": "Sam paid fifty-four dollars for a video game, including eight percent sales tax. What was the price before tax?",
   "hint": "$54 is 108% of the price. Divide by 1.08. Don't subtract 8% of 54.",
   "hint_say": "Not quite. Fifty-four dollars is one hundred eight percent of the price before tax. So divide by one point zero eight.",
   "steps": [
    [
     "1.08x = 54",
     "price + 8% tax = 108% of the price"
    ],
    [
     "x = 54 ÷ 1.08 = 50",
     "divide by the multiplier"
    ],
    [
     "50 × 1.08 = 54 ✓",
     "check"
    ]
   ],
   "solve_say": "Fifty-four dollars is one hundred eight percent of the price, so divide by one point zero eight. That's fifty dollars. Check: fifty times one point zero eight is fifty-four."
  },
  "b2": {
   "kind": "mc",
   "q": "A town's population grew from 2,500 people to 3,000 people. What was the percent increase?",
   "choices": [
    "16.7%",
    "20%",
    "50%",
    "120%"
   ],
   "answer": "B",
   "say": "A town's population grew from two thousand five hundred people to three thousand people. What was the percent increase?",
   "hint": "Percent change = change ÷ original. The original is 2,500.",
   "hint_say": "Check what you divided by. Percent change is the change divided by the original, two thousand five hundred.",
   "steps": [
    [
     "3,000 − 2,500 = 500",
     "the change"
    ],
    [
     "500 ÷ 2,500 = 0.2 = 20%",
     "divide by the original"
    ]
   ],
   "solve_say": "The change is five hundred. Divide by the original, two thousand five hundred, not three thousand. That's zero point two, or twenty percent. The answer is B."
  },
  "g1": {
   "kind": "mc",
   "figure": "<svg width=\"650\" height=\"370\" viewBox=\"0 0 650 370\" font-family=\"Avenir Next, Avenir, sans-serif\"><text x=\"325.0\" y=\"32\" font-size=\"30\" fill=\"#9aa5b8\" text-anchor=\"middle\">Dana's monthly spending</text><path d=\"M162.0 211.0 L162.0 61.0 A150 150 0 0 1 250.2 332.4 Z\" fill=\"#ffd166\" stroke=\"#0f1b2d\" stroke-width=\"3\"/><path d=\"M162.0 211.0 L250.2 332.4 A150 150 0 0 1 40.6 299.2 Z\" fill=\"#8ecae6\" stroke=\"#0f1b2d\" stroke-width=\"3\"/><path d=\"M162.0 211.0 L40.6 299.2 A150 150 0 0 1 19.3 164.6 Z\" fill=\"#06d6a0\" stroke=\"#0f1b2d\" stroke-width=\"3\"/><path d=\"M162.0 211.0 L19.3 164.6 A150 150 0 0 1 89.7 79.6 Z\" fill=\"#c3a6ff\" stroke=\"#0f1b2d\" stroke-width=\"3\"/><path d=\"M162.0 211.0 L89.7 79.6 A150 150 0 0 1 162.0 61.0 Z\" fill=\"#f4a261\" stroke=\"#0f1b2d\" stroke-width=\"3\"/><rect x=\"350\" y=\"100.0\" width=\"30\" height=\"30\" rx=\"6\" fill=\"#ffd166\"/><text x=\"396\" y=\"125.0\" font-size=\"30\" fill=\"#fff\">Rent</text><text x=\"640\" y=\"125.0\" font-size=\"30\" font-weight=\"700\" fill=\"#fff\" text-anchor=\"end\">40%</text><rect x=\"350\" y=\"148.0\" width=\"30\" height=\"30\" rx=\"6\" fill=\"#8ecae6\"/><text x=\"396\" y=\"173.0\" font-size=\"30\" fill=\"#fff\">Food</text><text x=\"640\" y=\"173.0\" font-size=\"30\" font-weight=\"700\" fill=\"#fff\" text-anchor=\"end\">25%</text><rect x=\"350\" y=\"196.0\" width=\"30\" height=\"30\" rx=\"6\" fill=\"#06d6a0\"/><text x=\"396\" y=\"221.0\" font-size=\"30\" fill=\"#fff\">Savings</text><text x=\"640\" y=\"221.0\" font-size=\"30\" font-weight=\"700\" fill=\"#fff\" text-anchor=\"end\">15%</text><rect x=\"350\" y=\"244.0\" width=\"30\" height=\"30\" rx=\"6\" fill=\"#c3a6ff\"/><text x=\"396\" y=\"269.0\" font-size=\"30\" fill=\"#fff\">Fun</text><text x=\"640\" y=\"269.0\" font-size=\"30\" font-weight=\"700\" fill=\"#fff\" text-anchor=\"end\">12%</text><rect x=\"350\" y=\"292.0\" width=\"30\" height=\"30\" rx=\"6\" fill=\"#f4a261\"/><text x=\"396\" y=\"317.0\" font-size=\"30\" fill=\"#fff\">Other</text><text x=\"640\" y=\"317.0\" font-size=\"30\" font-weight=\"700\" fill=\"#fff\" text-anchor=\"end\">8%</text></svg>",
   "q": "Dana cuts her rent spending by 10% and puts the money she saves into savings. What percent of her spending is savings now?",
   "choices": [
    "4%",
    "19%",
    "25%",
    "36%"
   ],
   "answer": "B",
   "say": "The circle graph shows Dana's monthly spending. She cuts her rent spending by ten percent and puts the money she saves into savings. What percent is savings now?",
   "hint": "Rent is 40%. A 10% cut removes 10% of 40, not 10 points.",
   "hint_say": "Careful. Rent is forty percent. Cutting it by ten percent removes ten percent of forty, not ten whole points.",
   "steps": [
    [
     "10% of 40 = 4",
     "rent drops 4 points, to 36%"
    ],
    [
     "15% + 4% = 19%",
     "savings gets those 4 points"
    ]
   ],
   "solve_say": "Ten percent of forty is four, so rent drops four points, to thirty-six percent. Those four points go to savings: fifteen plus four is nineteen percent. The answer is B."
  },
  "p1": {
   "kind": "mc",
   "tag": "From your Practice Test 1",
   "figure": "<div class=\"u3table \" style=\"font-size:28px;color:#fff;line-height:1.15;white-space:nowrap\"><div style=\"text-align:center;color:#9aa5b8;font-size:28px;margin-bottom:12px\">People in each party (350 parties)</div><table style=\"border-collapse:collapse;margin:0 auto\"><tr><td style=\"border:2px solid #9aa5b8;padding:8px 14px;text-align:center;color:#9aa5b8;font-weight:600\">People</td><td style=\"border:2px solid #9aa5b8;padding:8px 14px;text-align:center;color:#9aa5b8;font-weight:600\">1</td><td style=\"border:2px solid #9aa5b8;padding:8px 14px;text-align:center;color:#9aa5b8;font-weight:600\">2</td><td style=\"border:2px solid #9aa5b8;padding:8px 14px;text-align:center;color:#9aa5b8;font-weight:600\">3</td><td style=\"border:2px solid #9aa5b8;padding:8px 14px;text-align:center;color:#9aa5b8;font-weight:600\">4</td><td style=\"border:2px solid #9aa5b8;padding:8px 14px;text-align:center;color:#9aa5b8;font-weight:600\">5</td><td style=\"border:2px solid #9aa5b8;padding:8px 14px;text-align:center;color:#9aa5b8;font-weight:600\">6 or<br>more</td></tr><tr><td style=\"border:2px solid #9aa5b8;padding:8px 14px;text-align:center;text-align:center\">Percent</td><td style=\"border:2px solid #9aa5b8;padding:8px 14px;text-align:center;text-align:center\">6%</td><td style=\"border:2px solid #9aa5b8;padding:8px 14px;text-align:center;text-align:center\">30%</td><td style=\"border:2px solid #9aa5b8;padding:8px 14px;text-align:center;text-align:center\">20%</td><td style=\"border:2px solid #9aa5b8;padding:8px 14px;text-align:center;text-align:center\">18%</td><td style=\"border:2px solid #9aa5b8;padding:8px 14px;text-align:center;text-align:center\">10%</td><td style=\"border:2px solid #9aa5b8;padding:8px 14px;text-align:center;text-align:center\">16%</td></tr></table></div>",
   "q": "A restaurant manager recorded the number of people in each party that dined at the restaurant. The table shows the percent distribution for the 350 parties that dined at the restaurant one evening. How many of the 350 parties contained at least 4 people?",
   "choices": [
    "56",
    "63",
    "154",
    "175"
   ],
   "answer": "C",
   "say": "From your first practice test. The table shows the percent distribution for the three hundred fifty parties that dined at a restaurant one evening. How many parties contained at least four people?",
   "hint": "“At least 4” means 4, 5, and 6 or more. Add those first.",
   "hint_say": "Not quite. At least four means four, five, and six or more people. Add those three percents first, then take that percent of three fifty.",
   "steps": [
    [
     "18% + 10% + 16% = 44%",
     "4, 5, and 6 or more"
    ],
    [
     "0.44 × 350 = 154",
     ""
    ]
   ],
   "solve_say": "At least four means four, five, and six or more: eighteen plus ten plus sixteen is forty-four percent. Forty-four percent of three fifty is one fifty-four, so the answer is C. On the test you picked sixty-three, which counts only parties of exactly four."
  },
  "p2": {
   "kind": "mc",
   "tag": "From your Practice Test 1",
   "q": "A chemist was supposed to put 6 grams of cobalt onto a petri dish and was allowed 1% error. What was the maximum amount of cobalt that was allowed on the petri dish?",
   "choices": [
    "0.06 g",
    "6.01 g",
    "6.06 g",
    "6.6 g"
   ],
   "answer": "C",
   "say": "Another one from your first practice test. A chemist was supposed to put six grams of cobalt onto a petri dish, and was allowed one percent error. What was the maximum amount of cobalt allowed?",
   "hint": "1% error means 1% of 6 grams. Find it, then add it to 6.",
   "hint_say": "Close. One percent error means one percent of six grams, not one hundredth of a gram. Find one percent of six, then add it to six.",
   "steps": [
    [
     "1% of 6 = 0.01 × 6 = 0.06",
     "the allowed error"
    ],
    [
     "6 + 0.06 = 6.06 g",
     "maximum = target + error"
    ]
   ],
   "solve_say": "One percent of six grams is zero point zero six grams. The most allowed is six plus zero point zero six, or six point zero six grams. The answer is C."
  },
  "p3": {
   "kind": "num",
   "q": "Leo paid $19.44 for 3 pounds of cheese, including 8% tax. What was the price per pound before tax?",
   "prefix": "$",
   "answer": 6,
   "say": "Leo paid nineteen dollars and forty-four cents for three pounds of cheese, including eight percent tax. What was the price per pound before tax?",
   "hint": "$19.44 is 108% of the price. Divide by 1.08, then by 3.",
   "hint_say": "Not yet. Nineteen forty-four is one hundred eight percent of the price before tax. Divide by one point zero eight first, then divide by the three pounds.",
   "steps": [
    [
     "19.44 ÷ 1.08 = 18",
     "price before tax"
    ],
    [
     "18 ÷ 3 = 6",
     "per pound: $6"
    ]
   ],
   "solve_say": "Divide nineteen forty-four by one point zero eight to undo the tax. That's eighteen dollars for three pounds, so six dollars per pound."
  },
  "p4": {
   "kind": "mc",
   "tag": "From your Practice Test 1",
   "figure": "<svg width=\"650\" height=\"370\" viewBox=\"0 0 650 370\" font-family=\"Avenir Next, Avenir, sans-serif\"><text x=\"325.0\" y=\"32\" font-size=\"30\" fill=\"#9aa5b8\" text-anchor=\"middle\">Tom's monthly expenses</text><path d=\"M162.0 211.0 L162.0 61.0 A150 150 0 0 1 283.4 299.2 Z\" fill=\"#ffd166\" stroke=\"#0f1b2d\" stroke-width=\"3\"/><path d=\"M162.0 211.0 L283.4 299.2 A150 150 0 0 1 115.6 353.7 Z\" fill=\"#8ecae6\" stroke=\"#0f1b2d\" stroke-width=\"3\"/><path d=\"M162.0 211.0 L115.6 353.7 A150 150 0 0 1 19.3 257.4 Z\" fill=\"#06d6a0\" stroke=\"#0f1b2d\" stroke-width=\"3\"/><path d=\"M162.0 211.0 L19.3 257.4 A150 150 0 0 1 26.3 147.1 Z\" fill=\"#c3a6ff\" stroke=\"#0f1b2d\" stroke-width=\"3\"/><path d=\"M162.0 211.0 L26.3 147.1 A150 150 0 0 1 89.7 79.6 Z\" fill=\"#f4a261\" stroke=\"#0f1b2d\" stroke-width=\"3\"/><path d=\"M162.0 211.0 L89.7 79.6 A150 150 0 0 1 162.0 61.0 Z\" fill=\"#9aa5b8\" stroke=\"#0f1b2d\" stroke-width=\"3\"/><rect x=\"350\" y=\"76.0\" width=\"30\" height=\"30\" rx=\"6\" fill=\"#ffd166\"/><text x=\"396\" y=\"101.0\" font-size=\"30\" fill=\"#fff\">Rent</text><text x=\"640\" y=\"101.0\" font-size=\"30\" font-weight=\"700\" fill=\"#fff\" text-anchor=\"end\">35%</text><rect x=\"350\" y=\"124.0\" width=\"30\" height=\"30\" rx=\"6\" fill=\"#8ecae6\"/><text x=\"396\" y=\"149.0\" font-size=\"30\" fill=\"#fff\">Insurance</text><text x=\"640\" y=\"149.0\" font-size=\"30\" font-weight=\"700\" fill=\"#fff\" text-anchor=\"end\">20%</text><rect x=\"350\" y=\"172.0\" width=\"30\" height=\"30\" rx=\"6\" fill=\"#06d6a0\"/><text x=\"396\" y=\"197.0\" font-size=\"30\" fill=\"#fff\">Car</text><text x=\"640\" y=\"197.0\" font-size=\"30\" font-weight=\"700\" fill=\"#fff\" text-anchor=\"end\">15%</text><rect x=\"350\" y=\"220.0\" width=\"30\" height=\"30\" rx=\"6\" fill=\"#c3a6ff\"/><text x=\"396\" y=\"245.0\" font-size=\"30\" fill=\"#fff\">Food</text><text x=\"640\" y=\"245.0\" font-size=\"30\" font-weight=\"700\" fill=\"#fff\" text-anchor=\"end\">12%</text><rect x=\"350\" y=\"268.0\" width=\"30\" height=\"30\" rx=\"6\" fill=\"#f4a261\"/><text x=\"396\" y=\"293.0\" font-size=\"30\" fill=\"#fff\">Utilities</text><text x=\"640\" y=\"293.0\" font-size=\"30\" font-weight=\"700\" fill=\"#fff\" text-anchor=\"end\">10%</text><rect x=\"350\" y=\"316.0\" width=\"30\" height=\"30\" rx=\"6\" fill=\"#9aa5b8\"/><text x=\"396\" y=\"341.0\" font-size=\"30\" fill=\"#fff\">Other</text><text x=\"640\" y=\"341.0\" font-size=\"30\" font-weight=\"700\" fill=\"#fff\" text-anchor=\"end\">8%</text></svg>",
   "q": "For May, Tom finds cheaper insurance, reducing the amount he spends on insurance by 25%. If he puts all the money he saves on insurance towards food, what percent of his monthly expenses will be food?",
   "choices": [
    "14%",
    "17%",
    "32%",
    "37%"
   ],
   "answer": "B",
   "say": "From your first practice test. The circle graph shows Tom's monthly expenses. In May, he cuts what he spends on insurance by twenty-five percent, and puts the savings toward food. What percent of his expenses will be food?",
   "hint": "Insurance is 20%. He saves 25% of that 20%, not all of it.",
   "hint_say": "Not quite. Insurance is twenty percent. He doesn't save all of it. He saves twenty-five percent of that twenty percent.",
   "steps": [
    [
     "25% of 20 = 0.25 × 20 = 5",
     "he saves 5 points"
    ],
    [
     "12% + 5% = 17%",
     "food gets those 5 points"
    ]
   ],
   "solve_say": "Twenty-five percent of twenty is five, so Tom saves five percent of his expenses. Food goes from twelve percent to seventeen percent. The answer is B."
  },
  "p5": {
   "kind": "mc",
   "tag": "From your Practice Test 2",
   "figure": "<div class=\"u3table u3long\" style=\"font-size:28px;color:#fff;line-height:1.15;white-space:nowrap\"><div style=\"text-align:center;color:#9aa5b8;font-size:28px;margin-bottom:12px\">Video game sales</div><table style=\"border-collapse:collapse;margin:0 auto\"><tr><td style=\"border:2px solid #9aa5b8;padding:8px 14px;text-align:center;color:#9aa5b8;font-weight:600\">Game</td><td style=\"border:2px solid #9aa5b8;padding:8px 14px;text-align:center;color:#9aa5b8;font-weight:600\">Copies sold</td><td style=\"border:2px solid #9aa5b8;padding:8px 14px;text-align:center;color:#9aa5b8;font-weight:600\">Percent</td></tr><tr><td style=\"border:2px solid #9aa5b8;padding:8px 14px;text-align:center;text-align:left\">Star Fire</td><td style=\"border:2px solid #9aa5b8;padding:8px 14px;text-align:center;text-align:right\">64</td><td style=\"border:2px solid #9aa5b8;padding:8px 14px;text-align:center;text-align:right\">29.5%</td></tr><tr><td style=\"border:2px solid #9aa5b8;padding:8px 14px;text-align:center;text-align:left\">Candy Crash</td><td style=\"border:2px solid #9aa5b8;padding:8px 14px;text-align:center;text-align:right\">32</td><td style=\"border:2px solid #9aa5b8;padding:8px 14px;text-align:center;text-align:right\">13.8%</td></tr><tr><td style=\"border:2px solid #9aa5b8;padding:8px 14px;text-align:center;text-align:left\">Fishing Along</td><td style=\"border:2px solid #9aa5b8;padding:8px 14px;text-align:center;text-align:right\">20</td><td style=\"border:2px solid #9aa5b8;padding:8px 14px;text-align:center;text-align:right\">8.6%</td></tr><tr><td style=\"border:2px solid #9aa5b8;padding:8px 14px;text-align:center;text-align:left\">Build-A-Robot</td><td style=\"border:2px solid #9aa5b8;padding:8px 14px;text-align:center;text-align:right\">60</td><td style=\"border:2px solid #9aa5b8;padding:8px 14px;text-align:center;text-align:right\">25.9%</td></tr><tr><td style=\"border:2px solid #9aa5b8;padding:8px 14px;text-align:center;text-align:left\">Puzzle Quest</td><td style=\"border:2px solid #9aa5b8;padding:8px 14px;text-align:center;text-align:right\">56</td><td style=\"border:2px solid #9aa5b8;padding:8px 14px;text-align:center;text-align:right\">24.1%</td></tr><tr><td style=\"border:2px solid #9aa5b8;padding:8px 14px;text-align:center;text-align:left\">Total</td><td style=\"border:2px solid #9aa5b8;padding:8px 14px;text-align:center;text-align:right\">232</td><td style=\"border:2px solid #9aa5b8;padding:8px 14px;text-align:center;text-align:right\"></td></tr></table></div>",
   "q": "The table shows a store's video game sales. One number in the percentage column is incorrect. Which change needs to be made?",
   "choices": [
    "Change “Star Fire” to 27.6%",
    "Change “Candy Crash” to 15.2%",
    "Change “Fishing Along” to 7.9%",
    "Change “Build-A-Robot” to 26.9%"
   ],
   "answer": "A",
   "say": "From your second practice test, where it took you over three minutes. One number in the percentage column is incorrect. Which change needs to be made?",
   "hint": "Find two games with an easy comparison of copies sold. Do their percents compare the same way?",
   "hint_say": "Not quite. Look for two games with an easy comparison, like one selling twice as many as the other. Their percents should compare the same way.",
   "steps": [
    [
     "64 ÷ 32 = 2",
     "Star Fire sold twice as many as Candy Crash"
    ],
    [
     "2 × 13.8% = 27.6%",
     "so Star Fire should be 27.6%, not 29.5%"
    ]
   ],
   "solve_say": "Star Fire sold sixty-four copies, exactly twice Candy Crash's thirty-two. So its percent must be twice thirteen point eight, which is twenty-seven point six, not twenty-nine point five. The answer is A."
  },
  "p6": {
   "kind": "mc",
   "q": "A store raised the price of a bike by 10%. Later, it lowered the new price by 10%. The final price was $198. What was the original price?",
   "choices": [
    "$196.02",
    "$198",
    "$200",
    "$217.80"
   ],
   "answer": "C",
   "say": "Last one. A store raised the price of a bike by ten percent. Later, it lowered the new price by ten percent. The final price was one hundred ninety-eight dollars. What was the original price?",
   "hint": "The two changes don't cancel. Combine them into one multiplier, then divide.",
   "hint_say": "Not quite. The two changes don't cancel out. Combine them into one multiplier, then work backward by dividing.",
   "steps": [
    [
     "1.1 × 0.9 = 0.99",
     "combine the multipliers"
    ],
    [
     "x = 198 ÷ 0.99 = 200",
     "work backward: divide"
    ]
   ],
   "solve_say": "Up ten percent, then down ten percent, is times one point one times zero point nine, which is times zero point nine nine. One ninety-eight divided by zero point nine nine is two hundred. The answer is C."
  }
 },
 "nCorrect": 4,
 "sounds": {
  "S1Title": "audio/S1Title.mp3",
  "S2Meaning": "audio/S2Meaning.mp3",
  "S3Of": "audio/S3Of.mp3",
  "S4Multiplier": "audio/S4Multiplier.mp3",
  "S5Successive": "audio/S5Successive.mp3",
  "S6Backward": "audio/S6Backward.mp3",
  "S7Charts": "audio/S7Charts.mp3",
  "S8Question": "audio/S8Question.mp3",
  "S9Solve": "audio/S9Solve.mp3",
  "S10Check": "audio/S10Check.mp3",
  "S11Recap": "audio/S11Recap.mp3",
  "correct0": "audio/correct0.mp3",
  "correct1": "audio/correct1.mp3",
  "correct2": "audio/correct2.mp3",
  "correct3": "audio/correct3.mp3",
  "m1-say": "audio/m1-say.mp3",
  "m1-hint_say": "audio/m1-hint_say.mp3",
  "m1-solve_say": "audio/m1-solve_say.mp3",
  "m2-say": "audio/m2-say.mp3",
  "m2-hint_say": "audio/m2-hint_say.mp3",
  "m2-solve_say": "audio/m2-solve_say.mp3",
  "o1-say": "audio/o1-say.mp3",
  "o1-hint_say": "audio/o1-hint_say.mp3",
  "o1-solve_say": "audio/o1-solve_say.mp3",
  "o2-say": "audio/o2-say.mp3",
  "o2-hint_say": "audio/o2-hint_say.mp3",
  "o2-solve_say": "audio/o2-solve_say.mp3",
  "c1-say": "audio/c1-say.mp3",
  "c1-hint_say": "audio/c1-hint_say.mp3",
  "c1-solve_say": "audio/c1-solve_say.mp3",
  "c2-say": "audio/c2-say.mp3",
  "c2-hint_say": "audio/c2-hint_say.mp3",
  "c2-solve_say": "audio/c2-solve_say.mp3",
  "b1-say": "audio/b1-say.mp3",
  "b1-hint_say": "audio/b1-hint_say.mp3",
  "b1-solve_say": "audio/b1-solve_say.mp3",
  "b2-say": "audio/b2-say.mp3",
  "b2-hint_say": "audio/b2-hint_say.mp3",
  "b2-solve_say": "audio/b2-solve_say.mp3",
  "g1-say": "audio/g1-say.mp3",
  "g1-hint_say": "audio/g1-hint_say.mp3",
  "g1-solve_say": "audio/g1-solve_say.mp3",
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
  "p6-say": "audio/p6-say.mp3",
  "p6-hint_say": "audio/p6-hint_say.mp3",
  "p6-solve_say": "audio/p6-solve_say.mp3",
  "meaning-intro": "audio/meaning-intro.mp3",
  "of-intro": "audio/of-intro.mp3",
  "change-intro": "audio/change-intro.mp3",
  "back-intro": "audio/back-intro.mp3",
  "charts-intro": "audio/charts-intro.mp3",
  "practice-intro": "audio/practice-intro.mp3",
  "summary-intro": "audio/summary-intro.mp3"
 },
 "lead": 0.4,
 "solveCues": {
  "m1": [
   0.0,
   2.0,
   6.72
  ],
  "m2": [
   0.0,
   2.96,
   7.68,
   10.88
  ],
  "o1": [
   0.0,
   2.4,
   6.0,
   6.88
  ],
  "o2": [
   0.0,
   4.88
  ],
  "c1": [
   0.0,
   3.76
  ],
  "c2": [
   0.0,
   1.96,
   4.72,
   10.56
  ],
  "b1": [
   0.0,
   6.88,
   8.64,
   9.52
  ],
  "b2": [
   0.0,
   2.28,
   7.12,
   10.48
  ],
  "g1": [
   0.0,
   6.56,
   8.88,
   12.04
  ],
  "p1": [
   0.0,
   4.64,
   8.96,
   14.4
  ],
  "p2": [
   0.0,
   4.88,
   11.6
  ],
  "p3": [
   0.0,
   5.28
  ],
  "p4": [
   0.0,
   6.72,
   10.32
  ],
  "p5": [
   0.0,
   6.16,
   14.16
  ],
  "p6": [
   0.0,
   9.76,
   14.24
  ]
 }
};
window.TIMING = window.LESSON.timing;
