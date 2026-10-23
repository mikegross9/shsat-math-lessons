window.LESSON = {
 "videos": {
  "S1Title": "video/S1Title.mp4",
  "S2Signs": "video/S2Signs.mp4",
  "S3Order": "video/S3Order.mp4",
  "S4Exponents": "video/S4Exponents.mp4",
  "S5Compare": "video/S5Compare.mp4",
  "S6SciForm": "video/S6SciForm.mp4",
  "S7SciOps": "video/S7SciOps.mp4",
  "S8Question": "video/S8Question.mp4",
  "S9Solve": "video/S9Solve.mp4",
  "S10Fix": "video/S10Fix.mp4",
  "S11Recap": "video/S11Recap.mp4"
 },
 "unit": {
  "num": 8,
  "title": "Negatives, Exponents & Scientific Notation",
  "minutes": 20,
  "next": null
 },
 "titles": {
  "S1Title": "Welcome",
  "S2Signs": "Negatives on a number line",
  "S3Order": "Order of operations",
  "S4Exponents": "Exponent rules",
  "S5Compare": "Comparing numbers",
  "S6SciForm": "Scientific notation",
  "S7SciOps": "Multiply, divide, add",
  "S8Question": "Your real question",
  "S9Solve": "Solving it",
  "S10Fix": "Fix it and check",
  "S11Recap": "Your checklist"
 },
 "timing": {
  "S1Title": {
   "cues": [
    0.3,
    7.98,
    15.98
   ],
   "dur": 21.3
  },
  "S2Signs": {
   "cues": [
    0.3,
    5.26,
    12.78,
    21.42,
    28.7
   ],
   "dur": 37.46
  },
  "S3Order": {
   "cues": [
    0.3,
    8.7,
    18.22,
    27.18,
    32.38
   ],
   "dur": 39.38
  },
  "S4Exponents": {
   "cues": [
    0.3,
    7.98,
    16.94,
    28.54,
    35.58
   ],
   "dur": 41.54
  },
  "S5Compare": {
   "cues": [
    0.3,
    3.9,
    11.58,
    22.54,
    31.14
   ],
   "dur": 38.98
  },
  "S6SciForm": {
   "cues": [
    0.3,
    7.66,
    15.34,
    20.78,
    30.38
   ],
   "dur": 39.14
  },
  "S7SciOps": {
   "cues": [
    0.3,
    12.38,
    22.86,
    27.5
   ],
   "dur": 35.46
  },
  "S8Question": {
   "cues": [
    0.3,
    16.3,
    23.34
   ],
   "dur": 27.22
  },
  "S9Solve": {
   "cues": [
    0.3,
    6.38,
    12.7,
    18.54
   ],
   "dur": 29.62
  },
  "S10Fix": {
   "cues": [
    0.3,
    6.06,
    14.14,
    19.42,
    26.14
   ],
   "dur": 34.66
  },
  "S11Recap": {
   "cues": [
    0.3,
    2.94,
    8.7,
    18.86,
    24.78,
    31.9
   ],
   "dur": 37.3
  }
 },
 "flow": [
  [
   "scene",
   "S1Title"
  ],
  [
   "scene",
   "S2Signs"
  ],
  [
   "quiz",
   {
    "id": "signs",
    "title": "Your turn: negatives",
    "qs": [
     "s1",
     "s2"
    ],
    "say": "Your turn! Two quick ones on negatives. Picture the number line."
   }
  ],
  [
   "scene",
   "S3Order"
  ],
  [
   "quiz",
   {
    "id": "order",
    "title": "Your turn: order of operations",
    "qs": [
     "o1",
     "o2"
    ],
    "say": "Your turn. Follow the order, and watch for the trap."
   }
  ],
  [
   "scene",
   "S4Exponents"
  ],
  [
   "quiz",
   {
    "id": "exp",
    "title": "Your turn: exponents",
    "qs": [
     "e1",
     "e2"
    ],
    "say": "Your turn. Two exponent questions."
   }
  ],
  [
   "quiz",
   {
    "id": "set1",
    "title": "SHSAT practice set 1",
    "qs": [
     "p1",
     "p2",
     "p3",
     "p4",
     "p5"
    ],
    "say": "SHSAT practice set one. All five are real questions you missed on your practice tests. Go slowly, write every step, and check before you move on."
   }
  ],
  [
   "scene",
   "S5Compare"
  ],
  [
   "quiz",
   {
    "id": "compare",
    "title": "Your turn: compare",
    "qs": [
     "k1"
    ],
    "say": "Your turn. Picture the number line."
   }
  ],
  [
   "scene",
   "S6SciForm"
  ],
  [
   "scene",
   "S7SciOps"
  ],
  [
   "quiz",
   {
    "id": "sci",
    "title": "Your turn: scientific notation",
    "qs": [
     "c1",
     "c2"
    ],
    "say": "Your turn. Two scientific notation questions."
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
   "S10Fix"
  ],
  [
   "quiz",
   {
    "id": "set2",
    "title": "SHSAT practice set 2",
    "qs": [
     "q1",
     "q2",
     "q3",
     "q4",
     "q5"
    ],
    "say": "SHSAT practice set two. Five more real questions you missed. Take your time, and check each one."
   }
  ],
  [
   "scene",
   "S11Recap"
  ],
  [
   "summary",
   {
    "say": "Great job finishing Unit 8, the last unit! Here's how you did."
   }
  ]
 ],
 "questions": {
  "s1": {
   "kind": "num",
   "q": "Evaluate:   −7 − (−12)",
   "prefix": "= ",
   "answer": 5,
   "say": "Evaluate negative seven minus negative twelve.",
   "hint": "Subtracting a negative is the same as adding. Start at −7 and move right.",
   "hint_say": "Not quite. Subtracting a negative is the same as adding. Start at negative seven and move to the right.",
   "steps": [
    [
     "−7 − (−12)",
     ""
    ],
    [
     "= −7 + 12",
     "minus a negative = plus"
    ],
    [
     "= 5",
     ""
    ]
   ],
   "solve_say": "Minus negative twelve is the same as plus twelve. Negative seven plus twelve is five."
  },
  "s2": {
   "kind": "num",
   "q": "Evaluate:   −3 × |−6 + 2|",
   "prefix": "= ",
   "answer": -12,
   "say": "Evaluate negative three times the absolute value of negative six plus two.",
   "hint": "Work inside the bars first. Absolute value is a distance, so it's never negative.",
   "hint_say": "Check your signs. Work inside the bars first. Absolute value is never negative.",
   "steps": [
    [
     "|−6 + 2| = |−4| = 4",
     "inside the bars first"
    ],
    [
     "−3 × 4 = −12",
     "different signs → negative"
    ]
   ],
   "solve_say": "Inside the bars, negative six plus two is negative four, and its absolute value is four. Then negative three times four is negative twelve."
  },
  "o1": {
   "kind": "num",
   "q": "Evaluate:   18 ÷ 3 × 2 − 4²",
   "prefix": "= ",
   "answer": -4,
   "say": "Evaluate eighteen divided by three, times two, minus four squared.",
   "hint": "Exponent first. Then ÷ and × from left to right: 18 ÷ 3 comes first.",
   "hint_say": "Not quite. Do the exponent first. Then divide and multiply from left to right, so eighteen divided by three comes first.",
   "steps": [
    [
     "18 ÷ 3 × 2 − 16",
     "exponent: 4² = 16"
    ],
    [
     "= 6 × 2 − 16",
     "left to right"
    ],
    [
     "= 12 − 16 = −4",
     ""
    ]
   ],
   "solve_say": "Four squared is sixteen. Then go left to right: eighteen divided by three is six, times two is twelve. Twelve minus sixteen is negative four."
  },
  "o2": {
   "kind": "mc",
   "q": "What is the value of   −3² + (−3)²  ?",
   "choices": [
    "−18",
    "0",
    "18",
    "−9"
   ],
   "answer": "B",
   "say": "What is the value of negative three squared, plus the quantity negative three, squared?",
   "hint": "Without parentheses, only the 3 is squared. With parentheses, the whole −3 is squared.",
   "hint_say": "Watch the trap. Without parentheses, only the three is squared. With parentheses, the whole negative three is squared.",
   "steps": [
    [
     "−3² = −(3 × 3) = −9",
     "only the 3 is squared"
    ],
    [
     "(−3)² = (−3)(−3) = 9",
     "the whole −3 is squared"
    ],
    [
     "−9 + 9 = 0",
     ""
    ]
   ],
   "solve_say": "Negative three squared is the negative of nine, so negative nine. Negative three in parentheses, squared, is positive nine. Negative nine plus nine is zero. The answer is B."
  },
  "e1": {
   "kind": "num",
   "q": "Evaluate:   5⁰ + 2⁻²",
   "prefix": "= ",
   "answer": 1.25,
   "say": "Evaluate five to the zero power, plus two to the negative two.",
   "hint": "Anything to the zero power is 1. A negative exponent means 1 over that power.",
   "hint_say": "Not quite. Anything to the zero power is one. And a negative exponent means one over that power.",
   "steps": [
    [
     "5⁰ = 1",
     "zero power = 1"
    ],
    [
     "2⁻² = 1/2² = 1/4",
     "negative exponent = 1 over"
    ],
    [
     "1 + 1/4 = 1.25",
     ""
    ]
   ],
   "solve_say": "Five to the zero is one. Two to the negative two is one over four, which is point two five. One plus point two five is one point two five."
  },
  "e2": {
   "kind": "mc",
   "q": "Which is equal to   (x³)² · x⁴  ?",
   "choices": [
    "x⁹",
    "x¹⁰",
    "x²⁴",
    "x¹³"
   ],
   "answer": "B",
   "say": "Which is equal to x cubed, all squared, times x to the fourth?",
   "hint": "Power of a power: multiply the exponents. Then multiplying: add them.",
   "hint_say": "Close. For a power of a power, multiply the exponents. Then, to multiply powers, add the exponents.",
   "steps": [
    [
     "(x³)² = x⁶",
     "power of a power: 3 × 2"
    ],
    [
     "x⁶ · x⁴ = x¹⁰",
     "multiply: 6 + 4"
    ]
   ],
   "solve_say": "X cubed, squared, is x to the sixth, because three times two is six. Then x to the sixth times x to the fourth is x to the tenth. The answer is B."
  },
  "p1": {
   "kind": "num",
   "tag": "From your Practice Test 1",
   "q": "Evaluate:   −7(12 − 10.5)² + 26 ÷ 2",
   "prefix": "= ",
   "answer": -2.75,
   "say": "From your first practice test. Evaluate negative seven times the quantity twelve minus ten point five, squared, plus twenty-six divided by two. Last time you answered eight point five.",
   "hint": "Parentheses, then the exponent (square only the 1.5), then × and ÷, then add.",
   "hint_say": "Not quite. Parentheses first, then square only the result, then multiply and divide, and add last.",
   "steps": [
    [
     "−7(1.5)² + 26 ÷ 2",
     "parentheses: 12 − 10.5"
    ],
    [
     "= −7(2.25) + 13",
     "exponent, and 26 ÷ 2"
    ],
    [
     "= −15.75 + 13",
     "multiply"
    ],
    [
     "= −2.75",
     "add"
    ]
   ],
   "solve_say": "Twelve minus ten point five is one point five, and squared, that's two point two five. Times negative seven is negative fifteen point seven five. Twenty-six divided by two is thirteen. Add them, and you get negative two point seven five."
  },
  "p2": {
   "kind": "mc",
   "tag": "From your Practice Test 2",
   "q": "(0.08 − 0.12) ÷ (−0.4 − 1.6)\nIf the parentheses are removed in the expression above, how will the value of the expression change?",
   "choices": [
    "No change",
    "Decrease of 1.24",
    "Decrease of 1.22",
    "Decrease of 1.2"
   ],
   "answer": "B",
   "say": "From your second practice test. Look at the expression. If the parentheses are removed, how will its value change? Last time you chose C.",
   "hint": "Find both values. Without parentheses, 0.12 ÷ (−0.4) happens first. Then find the change.",
   "hint_say": "Not quite. Find both values. Without parentheses, the division happens first. Then subtract to find the change.",
   "steps": [
    [
     "With: −0.04 ÷ (−2) = 0.02",
     ""
    ],
    [
     "Without: 0.08 − 0.12 ÷ (−0.4) − 1.6",
     "divide first"
    ],
    [
     "= 0.08 + 0.3 − 1.6 = −1.22",
     ""
    ],
    [
     "−1.22 − 0.02 = −1.24",
     "a decrease of 1.24"
    ]
   ],
   "solve_say": "With parentheses, negative point zero four divided by negative two is point zero two. Without them, divide first, and the value becomes negative one point two two. That's only the new value. It went down from point zero two, so the decrease is one point two four. The answer is B."
  },
  "p3": {
   "kind": "mc",
   "tag": "From your Practice Test 2",
   "q": "2x³ + 7x² + 5x + 2x⁰ + 6x⁻²\nWhat is the value of the expression above when x = 10?",
   "choices": [
    "2,750.06",
    "2,750.6",
    "2,752.06",
    "2,752.6"
   ],
   "answer": "C",
   "say": "From your second practice test, where this took almost eight minutes. Find the value when x equals ten.",
   "hint": "Careful with the last two terms. What is 10⁰? What is 10⁻²?",
   "hint_say": "Check the last two terms. What is ten to the zero power, and what is ten to the negative two?",
   "steps": [
    [
     "2(1000) + 7(100) + 5(10) + 2(1) + 6(0.01)",
     "10⁰ = 1,  10⁻² = 0.01"
    ],
    [
     "= 2000 + 700 + 50 + 2 + 0.06",
     ""
    ],
    [
     "= 2,752.06",
     ""
    ]
   ],
   "solve_say": "Ten to the zero is one, not zero, and ten to the negative two is one hundredth. So the sum is two thousand, plus seven hundred, plus fifty, plus two, plus six hundredths. The answer is C."
  },
  "p4": {
   "kind": "num",
   "tag": "From your Practice Test 1",
   "q": "What is the mean of the four largest prime integers in the set of integers from 30 to 50 (inclusive)?",
   "prefix": "Mean = ",
   "answer": 42,
   "say": "From your first practice test. What is the mean of the four largest prime numbers from thirty to fifty? Last time you answered forty-six.",
   "hint": "A prime has only two factors. Is 49 prime? Is 45? Check each odd number from 49 down.",
   "hint_say": "Not quite. A prime has only two factors, one and itself. Check each odd number from forty-nine down. Is forty-nine prime?",
   "steps": [
    [
     "Primes: 47, 43, 41, 37",
     "49 = 7 × 7,  45 = 5 × 9,  39 = 3 × 13"
    ],
    [
     "47 + 43 + 41 + 37 = 168",
     ""
    ],
    [
     "168 ÷ 4 = 42",
     ""
    ]
   ],
   "solve_say": "Forty-nine is seven times seven, so it's not prime, and neither is forty-five. The four largest primes are forty-seven, forty-three, forty-one, and thirty-seven. Their sum is one hundred sixty-eight, so the mean is forty-two."
  },
  "p5": {
   "kind": "mc",
   "tag": "From your Practice Test 2",
   "q": "If a < 0 and b < 0, which expression must be positive?",
   "choices": [
    "a⁵ − b⁵",
    "b⁷ − a³",
    "a³/b⁶ + b",
    "b/a³ − b⁵"
   ],
   "answer": "D",
   "say": "From your second practice test. If a and b are both negative, which expression must be positive?",
   "hint": "Odd powers stay negative; even powers are positive. Find the sign of each piece. Subtracting a negative adds.",
   "hint_say": "Not quite. Odd powers stay negative, and even powers are positive. Find the sign of each piece.",
   "steps": [
    [
     "b/a³:  (−) ÷ (−) = +",
     "odd power stays negative"
    ],
    [
     "− b⁵:  − (−) = +",
     "minus a negative adds"
    ],
    [
     "+ and + → always positive: D",
     "A and B depend on sizes"
    ]
   ],
   "solve_say": "In choice D, a cubed is negative, so b over a cubed is a negative divided by a negative: positive. B to the fifth is negative, and subtracting a negative adds. Positive plus positive is always positive. The answer is D."
  },
  "k1": {
   "kind": "mc",
   "q": "Which number is the greatest?",
   "choices": [
    "−1/3",
    "−0.3",
    "−2/5",
    "−0.35"
   ],
   "answer": "B",
   "say": "Which number is the greatest?",
   "hint": "Change the fractions to decimals. With negatives, the one closest to zero is greatest.",
   "hint_say": "Not quite. Change each fraction to a decimal. With negatives, the number closest to zero is the greatest.",
   "steps": [
    [
     "−1/3 ≈ −0.333,   −2/5 = −0.4",
     "fractions to decimals"
    ],
    [
     "−0.4 < −0.35 < −0.333 < −0.3",
     "left to right"
    ],
    [
     "−0.3 is closest to 0 → B",
     ""
    ]
   ],
   "solve_say": "Negative one third is about negative point three three three, and negative two fifths is negative point four. On the number line, negative point three is farthest right, closest to zero. The answer is B."
  },
  "c1": {
   "kind": "mc",
   "q": "Which number is the greatest?",
   "choices": [
    "9.9 × 10⁴",
    "1.01 × 10⁵",
    "9.9 × 10⁻⁵",
    "5.5 × 10⁴"
   ],
   "answer": "B",
   "say": "Which number is the greatest?",
   "hint": "Compare the exponents first. A bigger power of 10 wins.",
   "hint_say": "Not quite. Compare the exponents first. The bigger power of ten wins, even if its front number is small.",
   "steps": [
    [
     "1.01 × 10⁵ = 101,000",
     "biggest exponent"
    ],
    [
     "9.9 × 10⁴ = 99,000",
     ""
    ],
    [
     "10⁻⁵ is tiny → B",
     ""
    ]
   ],
   "solve_say": "Ten to the fifth is the biggest power, so one point oh one times ten to the fifth wins. That's one hundred one thousand, more than ninety-nine thousand. The answer is B."
  },
  "c2": {
   "kind": "mc",
   "q": "(5 × 10⁴)(6 × 10³) = ?\nWrite the answer in scientific notation.",
   "choices": [
    "3 × 10⁷",
    "3 × 10⁸",
    "3 × 10¹²",
    "1.1 × 10⁸"
   ],
   "answer": "B",
   "say": "Multiply five times ten to the fourth, by six times ten cubed. Which is the answer in scientific notation?",
   "hint": "Multiply the front numbers, add the exponents. Then fix it so the front is from 1 up to 10.",
   "hint_say": "Close. Multiply the front numbers and add the exponents. Then fix the front number.",
   "steps": [
    [
     "5 × 6 = 30,   10⁴ × 10³ = 10⁷",
     "add exponents"
    ],
    [
     "30 × 10⁷ = 3 × 10⁸",
     "front down, exponent up"
    ]
   ],
   "solve_say": "Five times six is thirty, and ten to the fourth times ten cubed is ten to the seventh. Thirty is too big, so write it as three times ten. That makes three times ten to the eighth. The answer is B."
  },
  "q1": {
   "kind": "mc",
   "tag": "From your Practice Test 2",
   "q": "Express   2.5 × 10³ + 2.1 × 10²   in scientific notation.",
   "choices": [
    "4.6 × 10⁵",
    "4.6 × 10²",
    "2.71 × 10³",
    "27.1 × 10²"
   ],
   "answer": "C",
   "say": "From your second practice test. Express two point five times ten cubed, plus two point one times ten squared, in scientific notation. Last time you chose four point six times ten squared.",
   "hint": "You can't add 2.5 and 2.1: the powers of 10 are different. Write both in regular form first.",
   "hint_say": "Not quite. The powers of ten are different, so you can't just add the front numbers. Write both in regular form first.",
   "steps": [
    [
     "2.5 × 10³ = 2,500",
     ""
    ],
    [
     "2.1 × 10² = 210",
     ""
    ],
    [
     "2,500 + 210 = 2,710",
     ""
    ],
    [
     "= 2.71 × 10³",
     "point moves 3 places"
    ]
   ],
   "solve_say": "Two point five times ten cubed is two thousand five hundred. Two point one times ten squared is two hundred ten. Together they make two thousand seven hundred ten, which is two point seven one times ten cubed. The answer is C."
  },
  "q2": {
   "kind": "mc",
   "tag": "From your Practice Test 1",
   "q": "What is the value of   2.3̅ − 4.7̅  ?",
   "choices": [
    "−22/9",
    "−8/3",
    "−4/9",
    "−1/3"
   ],
   "answer": "A",
   "say": "From your first practice test. What is the value of two point three repeating, minus four point seven repeating? Last time you chose C.",
   "hint": "One repeating digit d is d/9. Write each as a mixed number, and keep the whole numbers.",
   "hint_say": "Not quite. One repeating digit is that digit over nine. Write each one as a mixed number, and don't drop the whole numbers.",
   "steps": [
    [
     "2.3̅ = 2 3/9 = 21/9",
     "repeating digit d = d/9"
    ],
    [
     "4.7̅ = 4 7/9 = 43/9",
     ""
    ],
    [
     "21/9 − 43/9 = −22/9",
     ""
    ]
   ],
   "solve_say": "Two point three repeating is twenty-one ninths. Four point seven repeating is forty-three ninths. Twenty-one ninths minus forty-three ninths is negative twenty-two ninths. The answer is A."
  },
  "q3": {
   "kind": "mc",
   "tag": "From your Practice Test 2",
   "q": "Which statement must be true if x is a whole number greater than or equal to 1?",
   "choices": [
    "1/(x+2) < 1/(x+3)",
    "1/(x+2) > 1/(x+3)",
    "1/(x+2) − 1/(x+3) > 1",
    "1/(x+2) − 1/(x+3) > 1/x"
   ],
   "answer": "B",
   "say": "From your second practice test. If x is a whole number, one or more, which statement must be true?",
   "hint": "Same top, bigger bottom → smaller fraction. Try x = 1 in each choice.",
   "hint_say": "Not quite. With the same top, a bigger bottom makes a smaller fraction. Try x equals one in each choice.",
   "steps": [
    [
     "x + 3 > x + 2",
     "bigger bottom"
    ],
    [
     "so 1/(x+3) < 1/(x+2)",
     "smaller fraction"
    ],
    [
     "x = 1:  1/3 > 1/4 ✓ → B",
     ""
    ]
   ],
   "solve_say": "X plus three is bigger than x plus two, so one over x plus three is the smaller fraction. That means one over x plus two is greater. Try x equals one: one third is greater than one fourth. The answer is B."
  },
  "q4": {
   "kind": "mc",
   "tag": "From your Practice Test 1",
   "figure": "<svg width=\"680\" height=\"230\" viewBox=\"0 0 680 230\"><line x1=\"40\" y1=\"110\" x2=\"640\" y2=\"110\" stroke=\"#fff\" stroke-width=\"4\"/><path d=\"M24 110 l18 -11 v22 z M656 110 l-18 -11 v22 z\" fill=\"#fff\"/><line x1=\"60\" y1=\"98\" x2=\"60\" y2=\"122\" stroke=\"#fff\" stroke-width=\"3\"/><line x1=\"172\" y1=\"98\" x2=\"172\" y2=\"122\" stroke=\"#fff\" stroke-width=\"3\"/><line x1=\"284\" y1=\"98\" x2=\"284\" y2=\"122\" stroke=\"#fff\" stroke-width=\"3\"/><line x1=\"396\" y1=\"98\" x2=\"396\" y2=\"122\" stroke=\"#fff\" stroke-width=\"3\"/><line x1=\"508\" y1=\"98\" x2=\"508\" y2=\"122\" stroke=\"#fff\" stroke-width=\"3\"/><line x1=\"620\" y1=\"98\" x2=\"620\" y2=\"122\" stroke=\"#fff\" stroke-width=\"3\"/><text x=\"284\" y=\"172\" font-size=\"34\" text-anchor=\"middle\" fill=\"#fff\" font-family=\"Avenir Next, Avenir, sans-serif\" font-weight=\"600\">0</text><circle cx=\"134.7\" cy=\"110\" r=\"11\" fill=\"#ffd166\"/><text x=\"134.7\" y=\"76\" font-size=\"36\" text-anchor=\"middle\" fill=\"#ffd166\" font-family=\"Avenir Next, Avenir, sans-serif\" font-weight=\"700\" font-style=\"italic\">P</text><circle cx=\"526.7\" cy=\"110\" r=\"11\" fill=\"#ffd166\"/><text x=\"526.7\" y=\"76\" font-size=\"36\" text-anchor=\"middle\" fill=\"#ffd166\" font-family=\"Avenir Next, Avenir, sans-serif\" font-weight=\"700\" font-style=\"italic\">R</text><text x=\"515.3\" y=\"178.2\" font-size=\"34\" text-anchor=\"middle\" fill=\"#fff\" font-family=\"Avenir Next, Avenir, sans-serif\" font-weight=\"600\">2</text><text x=\"539.9\" y=\"161.0\" font-size=\"27\" text-anchor=\"middle\" fill=\"#fff\" font-family=\"Avenir Next, Avenir, sans-serif\" font-weight=\"600\">1</text><line x1=\"530.5\" y1=\"166\" x2=\"549.2\" y2=\"166\" stroke=\"#fff\" stroke-width=\"2.5\"/><text x=\"539.9\" y=\"191.7\" font-size=\"27\" text-anchor=\"middle\" fill=\"#fff\" font-family=\"Avenir Next, Avenir, sans-serif\" font-weight=\"600\">6</text></svg>",
   "q": "On the number line, PR = 3½. Point Q (not shown) is located between point P and point R. Which value below is a possible value for Q?",
   "choices": [
    "−1.45",
    "−1.4",
    "−1.35",
    "−1.3"
   ],
   "answer": "D",
   "say": "From your first practice test. On the number line, P R equals three and a half. Point Q is between P and R. Which value could be Q? Last time you chose A.",
   "hint": "R is at 2 1/6. Find P = 2 1/6 − 3½, turn it into a decimal, then compare.",
   "hint_say": "Not quite. Find P first: two and one sixth, minus three and a half. Turn it into a decimal, then compare.",
   "steps": [
    [
     "P = 2 1/6 − 3 1/2 = −1 1/3",
     "R minus the distance"
    ],
    [
     "−1 1/3 = −1.333…",
     "so Q > −1.333…"
    ],
    [
     "−1.35 is left of P → only −1.3 fits",
     ""
    ]
   ],
   "solve_say": "P is three and a half to the left of R. Two and one sixth minus three and a half is negative one and one third, about negative one point three three three. Negative one point three five is farther left than P, so it's outside. Only negative one point three is between P and R. The answer is D."
  },
  "q5": {
   "kind": "mc",
   "tag": "From your Practice Test 2",
   "figure": "<svg width=\"620\" height=\"200\" viewBox=\"0 0 680 220\"><line x1=\"50\" y1=\"100\" x2=\"630\" y2=\"100\" stroke=\"#fff\" stroke-width=\"4\"/><path d=\"M34 100 l18 -11 v22 z M646 100 l-18 -11 v22 z\" fill=\"#fff\"/><line x1=\"290.0\" y1=\"100\" x2=\"500.0\" y2=\"100\" stroke=\"#06d6a0\" stroke-width=\"14\" stroke-linecap=\"round\"/><line x1=\"80.0\" y1=\"86\" x2=\"80.0\" y2=\"114\" stroke=\"#fff\" stroke-width=\"3\"/><line x1=\"185.0\" y1=\"86\" x2=\"185.0\" y2=\"114\" stroke=\"#fff\" stroke-width=\"3\"/><line x1=\"290.0\" y1=\"86\" x2=\"290.0\" y2=\"114\" stroke=\"#fff\" stroke-width=\"3\"/><line x1=\"395.0\" y1=\"86\" x2=\"395.0\" y2=\"114\" stroke=\"#fff\" stroke-width=\"3\"/><line x1=\"500.0\" y1=\"86\" x2=\"500.0\" y2=\"114\" stroke=\"#fff\" stroke-width=\"3\"/><line x1=\"605.0\" y1=\"86\" x2=\"605.0\" y2=\"114\" stroke=\"#fff\" stroke-width=\"3\"/><line x1=\"710.0\" y1=\"86\" x2=\"710.0\" y2=\"114\" stroke=\"#fff\" stroke-width=\"3\"/><circle cx=\"290.0\" cy=\"100\" r=\"13\" fill=\"#06d6a0\" stroke=\"#fff\" stroke-width=\"3\"/><circle cx=\"500.0\" cy=\"100\" r=\"13\" fill=\"#06d6a0\" stroke=\"#fff\" stroke-width=\"3\"/><text x=\"68.6\" y=\"172.2\" font-size=\"34\" text-anchor=\"middle\" fill=\"#fff\" font-family=\"Avenir Next, Avenir, sans-serif\" font-weight=\"600\">−</text><text x=\"93.2\" y=\"155.0\" font-size=\"27\" text-anchor=\"middle\" fill=\"#fff\" font-family=\"Avenir Next, Avenir, sans-serif\" font-weight=\"600\">1</text><line x1=\"83.8\" y1=\"160\" x2=\"102.6\" y2=\"160\" stroke=\"#fff\" stroke-width=\"2.5\"/><text x=\"93.2\" y=\"185.7\" font-size=\"27\" text-anchor=\"middle\" fill=\"#fff\" font-family=\"Avenir Next, Avenir, sans-serif\" font-weight=\"600\">2</text><text x=\"185.0\" y=\"172\" font-size=\"34\" text-anchor=\"middle\" fill=\"#fff\" font-family=\"Avenir Next, Avenir, sans-serif\" font-weight=\"600\">0</text><text x=\"290.0\" y=\"155.0\" font-size=\"27\" text-anchor=\"middle\" fill=\"#fff\" font-family=\"Avenir Next, Avenir, sans-serif\" font-weight=\"600\">1</text><line x1=\"280.6\" y1=\"160\" x2=\"299.4\" y2=\"160\" stroke=\"#fff\" stroke-width=\"2.5\"/><text x=\"290.0\" y=\"185.7\" font-size=\"27\" text-anchor=\"middle\" fill=\"#fff\" font-family=\"Avenir Next, Avenir, sans-serif\" font-weight=\"600\">2</text><text x=\"395.0\" y=\"172\" font-size=\"34\" text-anchor=\"middle\" fill=\"#fff\" font-family=\"Avenir Next, Avenir, sans-serif\" font-weight=\"600\">1</text><text x=\"488.6\" y=\"172.2\" font-size=\"34\" text-anchor=\"middle\" fill=\"#fff\" font-family=\"Avenir Next, Avenir, sans-serif\" font-weight=\"600\">1</text><text x=\"513.2\" y=\"155.0\" font-size=\"27\" text-anchor=\"middle\" fill=\"#fff\" font-family=\"Avenir Next, Avenir, sans-serif\" font-weight=\"600\">1</text><line x1=\"503.8\" y1=\"160\" x2=\"522.6\" y2=\"160\" stroke=\"#fff\" stroke-width=\"2.5\"/><text x=\"513.2\" y=\"185.7\" font-size=\"27\" text-anchor=\"middle\" fill=\"#fff\" font-family=\"Avenir Next, Avenir, sans-serif\" font-weight=\"600\">2</text><text x=\"605.0\" y=\"172\" font-size=\"34\" text-anchor=\"middle\" fill=\"#fff\" font-family=\"Avenir Next, Avenir, sans-serif\" font-weight=\"600\">2</text><text x=\"698.6\" y=\"172.2\" font-size=\"34\" text-anchor=\"middle\" fill=\"#fff\" font-family=\"Avenir Next, Avenir, sans-serif\" font-weight=\"600\">2</text><text x=\"723.2\" y=\"155.0\" font-size=\"27\" text-anchor=\"middle\" fill=\"#fff\" font-family=\"Avenir Next, Avenir, sans-serif\" font-weight=\"600\">1</text><line x1=\"713.8\" y1=\"160\" x2=\"732.6\" y2=\"160\" stroke=\"#fff\" stroke-width=\"2.5\"/><text x=\"723.2\" y=\"185.7\" font-size=\"27\" text-anchor=\"middle\" fill=\"#fff\" font-family=\"Avenir Next, Avenir, sans-serif\" font-weight=\"600\">2</text><text x=\"340\" y=\"40\" font-size=\"30\" text-anchor=\"middle\" fill=\"#9aa5b8\" font-family=\"Avenir Next, Avenir, sans-serif\">values of x</text></svg>",
   "q": "All possible values of x are shaded on the number line. Which TWO values could NOT be a possible value of x − 5?",
   "choices": [
    "−4 5/8,  −3 5/12",
    "−4 5/8,  −4 1/2",
    "−4 1/4,  −3 1/2",
    "−4 1/2,  −3 5/12"
   ],
   "answer": "A",
   "say": "From your second practice test. The shaded part shows every possible value of x. Which two values could not be a value of x minus five?",
   "hint": "Subtract 5 from both ends of the shaded part. The answers are outside that range.",
   "hint_say": "Not quite. Subtract five from both ends of the shaded part. Then find the two values outside that range.",
   "steps": [
    [
     "x − 5 runs from −4 1/2 to −3 1/2",
     "5 less at each end"
    ],
    [
     "−4 5/8 and −3 5/12 are outside",
     "the ends are included"
    ]
   ],
   "solve_say": "The shading runs from one half to one and a half. Subtract five from each end, and x minus five runs from negative four and a half to negative three and a half. Negative four and five eighths is past the left end, and negative three and five twelfths is past the right end. The answer is A."
  }
 },
 "nCorrect": 4,
 "sounds": {
  "S1Title": "audio/S1Title.mp3",
  "S2Signs": "audio/S2Signs.mp3",
  "S3Order": "audio/S3Order.mp3",
  "S4Exponents": "audio/S4Exponents.mp3",
  "S5Compare": "audio/S5Compare.mp3",
  "S6SciForm": "audio/S6SciForm.mp3",
  "S7SciOps": "audio/S7SciOps.mp3",
  "S8Question": "audio/S8Question.mp3",
  "S9Solve": "audio/S9Solve.mp3",
  "S10Fix": "audio/S10Fix.mp3",
  "S11Recap": "audio/S11Recap.mp3",
  "correct0": "audio/correct0.mp3",
  "correct1": "audio/correct1.mp3",
  "correct2": "audio/correct2.mp3",
  "correct3": "audio/correct3.mp3",
  "s1-say": "audio/s1-say.mp3",
  "s1-hint_say": "audio/s1-hint_say.mp3",
  "s1-solve_say": "audio/s1-solve_say.mp3",
  "s2-say": "audio/s2-say.mp3",
  "s2-hint_say": "audio/s2-hint_say.mp3",
  "s2-solve_say": "audio/s2-solve_say.mp3",
  "o1-say": "audio/o1-say.mp3",
  "o1-hint_say": "audio/o1-hint_say.mp3",
  "o1-solve_say": "audio/o1-solve_say.mp3",
  "o2-say": "audio/o2-say.mp3",
  "o2-hint_say": "audio/o2-hint_say.mp3",
  "o2-solve_say": "audio/o2-solve_say.mp3",
  "e1-say": "audio/e1-say.mp3",
  "e1-hint_say": "audio/e1-hint_say.mp3",
  "e1-solve_say": "audio/e1-solve_say.mp3",
  "e2-say": "audio/e2-say.mp3",
  "e2-hint_say": "audio/e2-hint_say.mp3",
  "e2-solve_say": "audio/e2-solve_say.mp3",
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
  "k1-say": "audio/k1-say.mp3",
  "k1-hint_say": "audio/k1-hint_say.mp3",
  "k1-solve_say": "audio/k1-solve_say.mp3",
  "c1-say": "audio/c1-say.mp3",
  "c1-hint_say": "audio/c1-hint_say.mp3",
  "c1-solve_say": "audio/c1-solve_say.mp3",
  "c2-say": "audio/c2-say.mp3",
  "c2-hint_say": "audio/c2-hint_say.mp3",
  "c2-solve_say": "audio/c2-solve_say.mp3",
  "q1-say": "audio/q1-say.mp3",
  "q1-hint_say": "audio/q1-hint_say.mp3",
  "q1-solve_say": "audio/q1-solve_say.mp3",
  "q2-say": "audio/q2-say.mp3",
  "q2-hint_say": "audio/q2-hint_say.mp3",
  "q2-solve_say": "audio/q2-solve_say.mp3",
  "q3-say": "audio/q3-say.mp3",
  "q3-hint_say": "audio/q3-hint_say.mp3",
  "q3-solve_say": "audio/q3-solve_say.mp3",
  "q4-say": "audio/q4-say.mp3",
  "q4-hint_say": "audio/q4-hint_say.mp3",
  "q4-solve_say": "audio/q4-solve_say.mp3",
  "q5-say": "audio/q5-say.mp3",
  "q5-hint_say": "audio/q5-hint_say.mp3",
  "q5-solve_say": "audio/q5-solve_say.mp3",
  "signs-intro": "audio/signs-intro.mp3",
  "order-intro": "audio/order-intro.mp3",
  "exp-intro": "audio/exp-intro.mp3",
  "set1-intro": "audio/set1-intro.mp3",
  "compare-intro": "audio/compare-intro.mp3",
  "sci-intro": "audio/sci-intro.mp3",
  "set2-intro": "audio/set2-intro.mp3",
  "summary-intro": "audio/summary-intro.mp3"
 },
 "lead": 0.4
};
window.TIMING = window.LESSON.timing;
