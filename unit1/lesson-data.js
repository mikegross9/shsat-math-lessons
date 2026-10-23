window.LESSON = {
 "videos": {
  "S1Title": "video/S1Title.mp4",
  "S2Balance": "video/S2Balance.mp4",
  "S3Unwrap": "video/S3Unwrap.mp4",
  "S4Negatives": "video/S4Negatives.mp4",
  "S5Question": "video/S5Question.mp4",
  "S6Solve": "video/S6Solve.mp4",
  "S7Check": "video/S7Check.mp4",
  "S8Recap": "video/S8Recap.mp4"
 },
 "unit": {
  "num": 1,
  "title": "Solving Equations",
  "minutes": 15,
  "next": "unit2"
 },
 "titles": {
  "S1Title": "Welcome",
  "S2Balance": "An equation is a balance",
  "S3Unwrap": "Unwrap in reverse",
  "S4Negatives": "Watch the negatives",
  "S5Question": "Your real question",
  "S6Solve": "Solving it",
  "S7Check": "Check your answer",
  "S8Recap": "The recipe"
 },
 "timing": {
  "S1Title": {
   "cues": [
    0.3,
    6.46,
    13.02
   ],
   "dur": 19.38
  },
  "S2Balance": {
   "cues": [
    0.3,
    7.5,
    13.42,
    18.1,
    24.62,
    27.78
   ],
   "dur": 31.46
  },
  "S3Unwrap": {
   "cues": [
    0.3,
    5.34,
    11.26,
    18.86,
    20.7,
    23.18,
    24.7,
    25.74
   ],
   "dur": 28.18
  },
  "S4Negatives": {
   "cues": [
    0.3,
    6.94,
    10.86,
    13.02,
    15.66,
    18.46,
    19.58,
    21.02,
    23.26,
    24.54,
    27.34,
    31.02,
    32.38,
    34.54
   ],
   "dur": 36.42
  },
  "S5Question": {
   "cues": [
    0.3,
    11.18,
    15.82
   ],
   "dur": 18.66
  },
  "S6Solve": {
   "cues": [
    0.3,
    5.7,
    13.1,
    18.94,
    26.62,
    30.54
   ],
   "dur": 40.42
  },
  "S7Check": {
   "cues": [
    0.3,
    4.46,
    7.9,
    10.38,
    11.58,
    13.18,
    15.9
   ],
   "dur": 23.86
  },
  "S8Recap": {
   "cues": [
    0.3,
    2.14,
    5.34,
    13.3,
    15.98,
    19.38
   ],
   "dur": 25.22
  }
 },
 "flow": [
  [
   "scene",
   "S1Title"
  ],
  [
   "scene",
   "S2Balance"
  ],
  [
   "quiz",
   {
    "id": "warmup",
    "title": "Your turn: warm-up",
    "qs": [
     "w1",
     "w2"
    ],
    "say": "Your turn! Let's try the balance idea on two warm-ups."
   }
  ],
  [
   "scene",
   "S3Unwrap"
  ],
  [
   "quiz",
   {
    "id": "unwrap",
    "title": "Your turn: unwrap it",
    "qs": [
     "u1",
     "u2"
    ],
    "say": "Your turn again. Remember: undo plus and minus first, then times and divide."
   }
  ],
  [
   "scene",
   "S4Negatives"
  ],
  [
   "quiz",
   {
    "id": "neg",
    "title": "Your turn: watch the negatives",
    "qs": [
     "n1",
     "n2"
    ],
    "say": "Two more. Keep those negative signs glued on."
   }
  ],
  [
   "scene",
   "S5Question"
  ],
  [
   "scene",
   "S6Solve"
  ],
  [
   "scene",
   "S7Check"
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
    "say": "Now let's practice like it's the real test. Five SHSAT style questions, and one of them is a question you missed on your first practice test. Take your time, and check each answer before you move on."
   }
  ],
  [
   "quiz",
   {
    "id": "real",
    "title": "More of your real test questions",
    "qs": [
     "r1",
     "r2",
     "r3",
     "r4"
    ],
    "say": "Here are four more questions you missed on your practice tests. Each one uses the same balance moves, with a twist. Take your time."
   }
  ],
  [
   "scene",
   "S8Recap"
  ],
  [
   "summary",
   {
    "say": "Great job finishing Unit 1! Here's how you did."
   }
  ]
 ],
 "questions": {
  "w1": {
   "kind": "num",
   "q": "Solve:   x + 8 = 15",
   "answer": 7,
   "say": "Solve x plus eight equals fifteen. Type your answer, then press Check.",
   "hint": "Undo the + 8. Subtract 8 from both sides.",
   "hint_say": "Not quite. To undo plus eight, subtract eight from both sides.",
   "steps": [
    [
     "x + 8 = 15",
     ""
    ],
    [
     "x = 15 − 8",
     "subtract 8 from both sides"
    ],
    [
     "x = 7",
     ""
    ]
   ],
   "solve_say": "Let's do it together. Subtract eight from both sides. Fifteen minus eight is seven, so x equals seven."
  },
  "w2": {
   "kind": "num",
   "q": "Solve:   x − 4 = −9",
   "answer": -5,
   "say": "Solve x minus four equals negative nine.",
   "hint": "Undo the − 4 by adding 4 to both sides. Careful: −9 + 4 is still negative.",
   "hint_say": "Close. Undo minus four by adding four to both sides. Careful, negative nine plus four is still negative.",
   "steps": [
    [
     "x − 4 = −9",
     ""
    ],
    [
     "x = −9 + 4",
     "add 4 to both sides"
    ],
    [
     "x = −5",
     ""
    ]
   ],
   "solve_say": "Here's how. Add four to both sides. Negative nine plus four is negative five, so x equals negative five."
  },
  "u1": {
   "kind": "num",
   "q": "Solve:   4x − 7 = 21",
   "answer": 7,
   "say": "Your turn to unwrap. Solve four x minus seven equals twenty-one.",
   "hint": "Undo the − 7 first (add 7), then divide by 4.",
   "hint_say": "Not yet. Undo the minus seven first by adding seven. Then divide by four.",
   "steps": [
    [
     "4x − 7 = 21",
     ""
    ],
    [
     "4x = 28",
     "add 7 to both sides"
    ],
    [
     "x = 7",
     "divide both sides by 4"
    ]
   ],
   "solve_say": "Watch the order. Add seven to both sides to get four x equals twenty-eight. Then divide by four. X equals seven."
  },
  "u2": {
   "kind": "num",
   "q": "Solve:   2x + 9 = 1",
   "answer": -4,
   "say": "Solve two x plus nine equals one.",
   "hint": "Subtract 9 from both sides first. What is 1 − 9?",
   "hint_say": "Almost. Subtract nine from both sides first. What is one minus nine?",
   "steps": [
    [
     "2x + 9 = 1",
     ""
    ],
    [
     "2x = −8",
     "subtract 9 from both sides"
    ],
    [
     "x = −4",
     "divide both sides by 2"
    ]
   ],
   "solve_say": "Subtract nine from both sides. One minus nine is negative eight, so two x equals negative eight. Divide by two, and x equals negative four."
  },
  "n1": {
   "kind": "num",
   "q": "Solve:   −3x + 5 = 20",
   "answer": -5,
   "say": "Now watch the negatives. Solve negative three x plus five equals twenty.",
   "hint": "Subtract 5 first. Then divide by −3, not 3.",
   "hint_say": "Check your sign. Subtract five first, then divide by negative three, not three.",
   "steps": [
    [
     "−3x + 5 = 20",
     ""
    ],
    [
     "−3x = 15",
     "subtract 5 from both sides"
    ],
    [
     "x = −5",
     "divide both sides by −3"
    ]
   ],
   "solve_say": "Subtract five to get negative three x equals fifteen. Now divide by negative three. Fifteen divided by negative three is negative five."
  },
  "n2": {
   "kind": "mc",
   "q": "If  −6x = −18,  what is x?",
   "choices": [
    "−3",
    "3",
    "−12",
    "12"
   ],
   "answer": "B",
   "say": "If negative six x equals negative eighteen, what is x? Pick an answer, then press Check.",
   "hint": "Divide both sides by −6. A negative divided by a negative is positive.",
   "hint_say": "Not quite. Divide both sides by negative six. Remember, a negative divided by a negative is positive.",
   "steps": [
    [
     "−6x = −18",
     ""
    ],
    [
     "x = −18 ÷ (−6)",
     "divide both sides by −6"
    ],
    [
     "x = 3",
     "negative ÷ negative = positive"
    ]
   ],
   "solve_say": "Divide both sides by negative six. Negative eighteen divided by negative six is positive three. The answer is B."
  },
  "p1": {
   "kind": "num",
   "q": "Solve for x if  y = 4.5  and  y = −3x + 12.",
   "answer": 2.5,
   "say": "SHSAT style. Solve for x if y equals four point five, and y equals negative three x plus twelve.",
   "hint": "Substitute 4.5 for y first. Then subtract 12, then divide by −3.",
   "hint_say": "Not quite. Substitute four point five for y first. Then subtract twelve, and divide by negative three.",
   "steps": [
    [
     "4.5 = −3x + 12",
     "substitute y = 4.5"
    ],
    [
     "−7.5 = −3x",
     "subtract 12 from both sides"
    ],
    [
     "x = 2.5",
     "divide both sides by −3"
    ]
   ],
   "solve_say": "Put four point five where y is. Subtract twelve from both sides: four point five minus twelve is negative seven point five. Then divide by negative three. A negative divided by a negative is positive, so x equals two point five."
  },
  "p2": {
   "kind": "num",
   "q": "Solve:   5 − 2x = 17",
   "answer": -6,
   "say": "Solve five minus two x equals seventeen.",
   "hint": "The 5 is in front, but it's still added. Subtract 5 from both sides: −2x = 12.",
   "hint_say": "Close. The five comes first, but you still undo it first. Subtract five from both sides, so negative two x equals twelve.",
   "steps": [
    [
     "5 − 2x = 17",
     ""
    ],
    [
     "−2x = 12",
     "subtract 5 from both sides"
    ],
    [
     "x = −6",
     "divide both sides by −2"
    ]
   ],
   "solve_say": "Subtract five from both sides: negative two x equals twelve. Divide by negative two, and x equals negative six. Notice the minus sign stayed glued to the two x."
  },
  "p3": {
   "kind": "expr",
   "tag": "From your Practice Test 1",
   "q": "8x + 6y = 4.   What is x in terms of y?",
   "prefix": "x = ",
   "var": "y",
   "coef": -0.75,
   "k": 0.5,
   "show": "x = −0.75y + 0.5",
   "say": "This one is from your first practice test, where you spent almost five minutes on it. Eight x plus six y equals four. What is x in terms of y? Use the y key to type your answer. Decimals or fractions both work.",
   "hint": "Treat y like a number. Subtract 6y from both sides, then divide every term by 8.",
   "hint_say": "Not quite. Treat y just like a number. Subtract six y from both sides, then divide every term by eight.",
   "steps": [
    [
     "8x + 6y = 4",
     ""
    ],
    [
     "8x = −6y + 4",
     "subtract 6y from both sides"
    ],
    [
     "x = −6y/8 + 4/8",
     "divide every term by 8"
    ],
    [
     "x = −0.75y + 0.5",
     "simplify  (or −3/4 y + 1/2)"
    ]
   ],
   "solve_say": "Same moves as always. Subtract six y from both sides: eight x equals negative six y plus four. Divide every term by eight. Negative six eighths is negative three fourths, and four eighths is one half. So x equals negative three fourths y, plus one half."
  },
  "p4": {
   "kind": "num",
   "q": "Solve:   x ÷ 4 + 3 = −2",
   "answer": -20,
   "say": "Solve x divided by four, plus three, equals negative two.",
   "hint": "Subtract 3 first to get x ÷ 4 = −5. Then multiply both sides by 4.",
   "hint_say": "Not yet. Subtract three first, so x divided by four equals negative five. Then undo the dividing by multiplying both sides by four.",
   "steps": [
    [
     "x ÷ 4 + 3 = −2",
     ""
    ],
    [
     "x ÷ 4 = −5",
     "subtract 3 from both sides"
    ],
    [
     "x = −20",
     "multiply both sides by 4"
    ]
   ],
   "solve_say": "Subtract three from both sides: x divided by four equals negative five. The opposite of dividing is multiplying, so multiply both sides by four. X equals negative twenty."
  },
  "p5": {
   "kind": "mc",
   "q": "If  −2x − 7 = 8,  what is the value of x?",
   "choices": [
    "−7.5",
    "7.5",
    "−0.5",
    "0.5"
   ],
   "answer": "A",
   "say": "Last one. If negative two x minus seven equals eight, what is the value of x?",
   "hint": "Add 7 to both sides first. Then divide by −2.",
   "hint_say": "Check the order. Add seven to both sides first, then divide by negative two.",
   "steps": [
    [
     "−2x − 7 = 8",
     ""
    ],
    [
     "−2x = 15",
     "add 7 to both sides"
    ],
    [
     "x = −7.5",
     "divide both sides by −2"
    ]
   ],
   "solve_say": "Add seven to both sides: negative two x equals fifteen. Divide by negative two: fifteen divided by negative two is negative seven point five. The answer is A."
  },
  "r1": {
   "kind": "multi",
   "tag": "From your Practice Test 1",
   "q": "The possible values of a are 2, 6, 10 and 14.\nIf 4b = a − 2, what are all the possible values of b?",
   "template": "b = [] ,  [] ,  [] ,  []",
   "answers": [
    0,
    1,
    2,
    3
   ],
   "say": "This one is from your first practice test. The possible values of a are two, six, ten, and fourteen. If four b equals a minus two, what are all the possible values of b? Put them in order from smallest to largest.",
   "hint": "Plug in each value of a, one at a time. For a = 2: 4b = 2 − 2 = 0, so b = 0.",
   "hint_say": "Not quite. Plug in each value of a, one at a time. For a equals two, four b equals zero, so b is zero. Now do six, ten, and fourteen.",
   "steps": [
    [
     "a = 2:   4b = 0,   b = 0",
     ""
    ],
    [
     "a = 6:   4b = 4,   b = 1",
     ""
    ],
    [
     "a = 10:  4b = 8,   b = 2",
     ""
    ],
    [
     "a = 14:  4b = 12,  b = 3",
     ""
    ]
   ],
   "solve_say": "Solve it four times, once for each value of a. Two minus two is zero, so b is zero. Six minus two is four, so b is one. Ten minus two is eight, so b is two. Fourteen minus two is twelve, so b is three. The possible values are zero, one, two, and three."
  },
  "r2": {
   "kind": "mc",
   "tag": "From your Practice Test 1",
   "q": "p = qr / s,  where p, q, r and s are positive.  Which is equal to s?",
   "choices": [
    "p / qr",
    "qr / p",
    "pr / q",
    "pq / r"
   ],
   "answer": "B",
   "say": "From your first practice test, where you answered in twenty-two seconds. P equals q r over s. Which of these is equal to s?",
   "hint": "s is stuck in the denominator. Multiply both sides by s first, then divide by p.",
   "hint_say": "Slow down on this one. S is stuck on the bottom. Multiply both sides by s first to get it out, then divide both sides by p.",
   "steps": [
    [
     "p = qr / s",
     ""
    ],
    [
     "ps = qr",
     "multiply both sides by s"
    ],
    [
     "s = qr / p",
     "divide both sides by p"
    ]
   ],
   "solve_say": "Same balance moves, just with letters. Multiply both sides by s: p s equals q r. Then divide both sides by p: s equals q r over p. The answer is B."
  },
  "r3": {
   "kind": "mc",
   "tag": "From your Practice Test 2",
   "q": "⟨x⟩ = x² + 6x + 9.   What is the value of ⟨−3⟩?",
   "choices": [
    "−18",
    "0",
    "18",
    "36"
   ],
   "answer": "B",
   "say": "From your second practice test. The bracket symbol is just a rule: bracket x equals x squared plus six x plus nine. What is bracket negative three?",
   "hint": "Put −3 in place of every x. Remember (−3)² = +9.",
   "hint_say": "Close. Put negative three in place of every x. And remember, negative three squared is positive nine.",
   "steps": [
    [
     "⟨−3⟩ = (−3)² + 6(−3) + 9",
     "substitute x = −3"
    ],
    [
     "= 9 − 18 + 9",
     "(−3)² = +9"
    ],
    [
     "= 0",
     ""
    ]
   ],
   "solve_say": "The weird symbol is just a rule, like a function. Replace every x with negative three. Negative three squared is positive nine. Six times negative three is negative eighteen. Nine minus eighteen plus nine is zero. The answer is B."
  },
  "r4": {
   "kind": "mc",
   "tag": "From your Practice Test 2",
   "q": "If x = 2/3 and −5x(¼y − 8x) = 17, what is the value of y?",
   "choices": [
    "−14/15",
    "−35/54",
    "35/54",
    "14/15"
   ],
   "answer": "D",
   "say": "Last one, from your second practice test, where you spent only twenty-four seconds. If x equals two thirds, and negative five x times the quantity one fourth y minus eight x equals seventeen, what is y?",
   "hint": "Substitute x = 2/3 everywhere first. −5 · 2/3 = −10/3 and 8 · 2/3 = 16/3. Then distribute.",
   "hint_say": "Take it one step at a time. Substitute two thirds for x everywhere first. Negative five times two thirds is negative ten thirds, and eight times two thirds is sixteen thirds. Then distribute.",
   "steps": [
    [
     "−10/3 (¼y − 16/3) = 17",
     "substitute x = 2/3"
    ],
    [
     "−5/6 y + 160/9 = 17",
     "distribute"
    ],
    [
     "−5/6 y = −7/9",
     "subtract 160/9   (17 = 153/9)"
    ],
    [
     "y = 14/15",
     "multiply both sides by −6/5"
    ]
   ],
   "solve_say": "Substitute two thirds for x. That gives negative ten thirds times the quantity one fourth y minus sixteen thirds, equals seventeen. Distribute: negative five sixths y plus one hundred sixty ninths equals seventeen. Seventeen is one hundred fifty-three ninths, so subtracting gives negative five sixths y equals negative seven ninths. Multiply both sides by negative six fifths, and y equals fourteen fifteenths. The answer is D."
  }
 },
 "nCorrect": 4,
 "sounds": {
  "S1Title": "audio/S1Title.mp3",
  "S2Balance": "audio/S2Balance.mp3",
  "S3Unwrap": "audio/S3Unwrap.mp3",
  "S4Negatives": "audio/S4Negatives.mp3",
  "S5Question": "audio/S5Question.mp3",
  "S6Solve": "audio/S6Solve.mp3",
  "S7Check": "audio/S7Check.mp3",
  "S8Recap": "audio/S8Recap.mp3",
  "correct0": "audio/correct0.mp3",
  "correct1": "audio/correct1.mp3",
  "correct2": "audio/correct2.mp3",
  "correct3": "audio/correct3.mp3",
  "w1-say": "audio/w1-say.mp3",
  "w1-hint_say": "audio/w1-hint_say.mp3",
  "w1-solve_say": "audio/w1-solve_say.mp3",
  "w2-say": "audio/w2-say.mp3",
  "w2-hint_say": "audio/w2-hint_say.mp3",
  "w2-solve_say": "audio/w2-solve_say.mp3",
  "u1-say": "audio/u1-say.mp3",
  "u1-hint_say": "audio/u1-hint_say.mp3",
  "u1-solve_say": "audio/u1-solve_say.mp3",
  "u2-say": "audio/u2-say.mp3",
  "u2-hint_say": "audio/u2-hint_say.mp3",
  "u2-solve_say": "audio/u2-solve_say.mp3",
  "n1-say": "audio/n1-say.mp3",
  "n1-hint_say": "audio/n1-hint_say.mp3",
  "n1-solve_say": "audio/n1-solve_say.mp3",
  "n2-say": "audio/n2-say.mp3",
  "n2-hint_say": "audio/n2-hint_say.mp3",
  "n2-solve_say": "audio/n2-solve_say.mp3",
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
  "r1-say": "audio/r1-say.mp3",
  "r1-hint_say": "audio/r1-hint_say.mp3",
  "r1-solve_say": "audio/r1-solve_say.mp3",
  "r2-say": "audio/r2-say.mp3",
  "r2-hint_say": "audio/r2-hint_say.mp3",
  "r2-solve_say": "audio/r2-solve_say.mp3",
  "r3-say": "audio/r3-say.mp3",
  "r3-hint_say": "audio/r3-hint_say.mp3",
  "r3-solve_say": "audio/r3-solve_say.mp3",
  "r4-say": "audio/r4-say.mp3",
  "r4-hint_say": "audio/r4-hint_say.mp3",
  "r4-solve_say": "audio/r4-solve_say.mp3",
  "warmup-intro": "audio/warmup-intro.mp3",
  "unwrap-intro": "audio/unwrap-intro.mp3",
  "neg-intro": "audio/neg-intro.mp3",
  "practice-intro": "audio/practice-intro.mp3",
  "real-intro": "audio/real-intro.mp3",
  "summary-intro": "audio/summary-intro.mp3"
 },
 "lead": 0.4
};
window.TIMING = window.LESSON.timing;
