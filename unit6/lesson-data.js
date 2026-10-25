window.LESSON = {
 "videos": {
  "S1Title": "video/S1Title.mp4",
  "S2Names": "video/S2Names.mp4",
  "S3Cross": "video/S3Cross.mp4",
  "S4Triangle": "video/S4Triangle.mp4",
  "S5Exterior": "video/S5Exterior.mp4",
  "S6Parallel": "video/S6Parallel.mp4",
  "S7Polygon": "video/S7Polygon.mp4",
  "S8Question": "video/S8Question.mp4",
  "S9Solve": "video/S9Solve.mp4",
  "S10Check": "video/S10Check.mp4",
  "S11Recap": "video/S11Recap.mp4"
 },
 "unit": {
  "num": 6,
  "title": "Angles",
  "minutes": 16,
  "next": "unit7"
 },
 "titles": {
  "S1Title": "Welcome",
  "S2Names": "Naming angles",
  "S3Cross": "When lines cross",
  "S4Triangle": "Triangles add to 180°",
  "S5Exterior": "The exterior angle",
  "S6Parallel": "Parallel lines",
  "S7Polygon": "Polygons and similar triangles",
  "S8Question": "Your real question",
  "S9Solve": "Solving it",
  "S10Check": "Check it, and the trap",
  "S11Recap": "Your angle facts"
 },
 "timing": {
  "S1Title": {
   "cues": [
    0.3,
    4.14,
    8.9
   ],
   "dur": 20.1
  },
  "S2Names": {
   "cues": [
    0.3,
    5.5,
    15.34,
    21.18,
    25.42
   ],
   "dur": 30.34
  },
  "S3Cross": {
   "cues": [
    0.3,
    3.9,
    10.46,
    16.54,
    23.14,
    26.86
   ],
   "dur": 35.94
  },
  "S4Triangle": {
   "cues": [
    0.3,
    4.62,
    7.42,
    12.58,
    20.18
   ],
   "dur": 26.34
  },
  "S5Exterior": {
   "cues": [
    0.3,
    3.9,
    7.58,
    10.3,
    21.1
   ],
   "dur": 27.38
  },
  "S6Parallel": {
   "cues": [
    0.3,
    4.82,
    11.9,
    17.26,
    22.46
   ],
   "dur": 29.94
  },
  "S7Polygon": {
   "cues": [
    0.3,
    6.3,
    9.34,
    14.38,
    19.98
   ],
   "dur": 28.26
  },
  "S8Question": {
   "cues": [
    0.3,
    9.5,
    11.74
   ],
   "dur": 18.26
  },
  "S9Solve": {
   "cues": [
    0.3,
    6.62,
    12.54,
    20.78,
    25.26,
    30.7
   ],
   "dur": 36.82
  },
  "S10Check": {
   "cues": [
    0.3,
    2.94,
    9.22,
    19.9
   ],
   "dur": 26.9
  },
  "S11Recap": {
   "cues": [
    0.3,
    2.22,
    8.38,
    11.54,
    18.7,
    28.14,
    32.86
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
   "S2Names"
  ],
  [
   "scene",
   "S3Cross"
  ],
  [
   "quiz",
   {
    "id": "lines",
    "title": "Your turn: lines and points",
    "qs": [
     "a1",
     "a2"
    ],
    "say": "Your turn! Two questions about straight lines and crossing lines."
   }
  ],
  [
   "scene",
   "S4Triangle"
  ],
  [
   "scene",
   "S5Exterior"
  ],
  [
   "quiz",
   {
    "id": "tri",
    "title": "Your turn: triangles",
    "qs": [
     "t1",
     "t2"
    ],
    "say": "Your turn again. Use the triangle facts you just saw."
   }
  ],
  [
   "scene",
   "S6Parallel"
  ],
  [
   "scene",
   "S7Polygon"
  ],
  [
   "quiz",
   {
    "id": "par",
    "title": "Your turn: parallel lines and polygons",
    "qs": [
     "q1",
     "q2"
    ],
    "say": "Two more. Small angle, big angle, and n minus two triangles."
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
     "r1",
     "r2",
     "r3",
     "r4",
     "r5",
     "r6"
    ],
    "say": "Now let's practice like it's the real test. Six SHSAT style questions, and three of them are questions you missed on your second practice test. Write every angle you find on the figure, and check before you move on."
   }
  ],
  [
   "scene",
   "S11Recap"
  ],
  [
   "summary",
   {
    "say": "Great job finishing Unit 6! Here's how you did."
   }
  ]
 ],
 "questions": {
  "a1": {
   "kind": "num",
   "q": "Three lines meet at one point.\nWhat is the value of x?",
   "answer": 65,
   "figure": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"600\" height=\"430\" viewBox=\"0 0 600 430\"><path d=\"M15.0 215.0 L585.0 215.0\" stroke=\"#ffffff\" stroke-width=\"4\" stroke-linecap=\"round\" fill=\"none\"/><path d=\"M108.5 375.7 L491.5 54.3\" stroke=\"#ffffff\" stroke-width=\"4\" stroke-linecap=\"round\" fill=\"none\"/><path d=\"M351.8 408.2 L248.2 21.8\" stroke=\"#ffffff\" stroke-width=\"4\" stroke-linecap=\"round\" fill=\"none\"/><path d=\"M300.0 215.0 L345.0 215.0 A45 45 0 0 0 334.5 186.1 Z\" fill=\"#8ecae6\" fill-opacity=\"0.28\" stroke=\"none\"/><path d=\"M345.0 215.0 A45 45 0 0 0 334.5 186.1\" stroke=\"#8ecae6\" stroke-width=\"4\" fill=\"none\"/><path d=\"M300.0 215.0 L288.4 171.5 A45 45 0 0 0 255.0 215.0 Z\" fill=\"#06d6a0\" fill-opacity=\"0.28\" stroke=\"none\"/><path d=\"M288.4 171.5 A45 45 0 0 0 255.0 215.0\" stroke=\"#06d6a0\" stroke-width=\"4\" fill=\"none\"/><path d=\"M300.0 215.0 L260.2 248.4 A52 52 0 0 0 313.5 265.2 Z\" fill=\"#ffd166\" fill-opacity=\"0.28\" stroke=\"none\"/><path d=\"M260.2 248.4 A52 52 0 0 0 313.5 265.2\" stroke=\"#ffd166\" stroke-width=\"4\" fill=\"none\"/><circle cx=\"300.0\" cy=\"215.0\" r=\"6\" fill=\"#ffffff\"/><text x=\"414.6\" y=\"173.3\" font-size=\"34\" fill=\"#8ecae6\" font-weight=\"600\" text-anchor=\"middle\" dominant-baseline=\"central\">40°</text><text x=\"206.4\" y=\"143.2\" font-size=\"34\" fill=\"#06d6a0\" font-weight=\"600\" text-anchor=\"middle\" dominant-baseline=\"central\">75°</text><text x=\"267.5\" y=\"318.0\" font-size=\"40\" fill=\"#ffffff\" font-weight=\"600\" text-anchor=\"middle\" dominant-baseline=\"central\"><tspan font-style=\"italic\" fill=\"#ffd166\">x</tspan>°</text></svg>",
   "say": "Three lines meet at one point. Two of the angles are forty degrees and seventy-five degrees. What is the value of x?",
   "hint": "The three angles on top of the flat line make a straight angle. Then find x's vertical partner.",
   "hint_say": "Not quite. The three angles on top of the flat line make a straight angle, one eighty. Find the missing one, then look for x's vertical partner.",
   "steps": [
    [
     "40 + ? + 75 = 180",
     "the top of a straight line"
    ],
    [
     "? = 65",
     "180 − 115"
    ],
    [
     "x = 65",
     "x is vertical to it, so it's equal"
    ]
   ],
   "solve_say": "The three angles on top of the line add to one eighty. Forty plus seventy-five is one fifteen, so the missing top angle is sixty-five. X sits right across from it, so they're vertical angles. X equals sixty-five."
  },
  "a2": {
   "kind": "mc",
   "q": "Angle A measures 28°. What is the supplement\nof the complement of angle A?",
   "choices": [
    "62°",
    "118°",
    "152°",
    "90°"
   ],
   "answer": "B",
   "say": "Angle A measures twenty-eight degrees. What is the supplement of the complement of angle A? Work from the inside out.",
   "hint": "Complement first: it adds to 90°. Then find the supplement of that: it adds to 180°.",
   "hint_say": "Close. Find the complement first, which adds to ninety. Then find the supplement of that answer, which adds to one eighty.",
   "steps": [
    [
     "complement:  90 − 28 = 62",
     "adds to 90°"
    ],
    [
     "supplement:  180 − 62 = 118",
     "adds to 180°"
    ]
   ],
   "solve_say": "Start inside. The complement of twenty-eight is ninety minus twenty-eight, sixty-two. Then the supplement of sixty-two is one eighty minus sixty-two, one hundred eighteen. The answer is B."
  },
  "t1": {
   "kind": "num",
   "q": "In triangle ABC, AB = AC and angle A = 36°.\nWhat is the measure of angle B?",
   "answer": 72,
   "prefix": "∠B = ",
   "figure": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"520\" height=\"460\" viewBox=\"0 0 520 460\"><path d=\"M260.0 45.7 L140.0 415.0\" stroke=\"#ffffff\" stroke-width=\"4\" stroke-linecap=\"round\" fill=\"none\"/><path d=\"M140.0 415.0 L380.0 415.0\" stroke=\"#ffffff\" stroke-width=\"4\" stroke-linecap=\"round\" fill=\"none\"/><path d=\"M380.0 415.0 L260.0 45.7\" stroke=\"#ffffff\" stroke-width=\"4\" stroke-linecap=\"round\" fill=\"none\"/><path d=\"M212.4 234.4 L187.6 226.3\" stroke=\"#ffffff\" stroke-width=\"4\" stroke-linecap=\"round\" fill=\"none\"/><path d=\"M332.4 226.3 L307.6 234.4\" stroke=\"#ffffff\" stroke-width=\"4\" stroke-linecap=\"round\" fill=\"none\"/><path d=\"M260.0 45.7 L241.5 102.7 A60 60 0 0 0 278.5 102.7 Z\" fill=\"#06d6a0\" fill-opacity=\"0.28\" stroke=\"none\"/><path d=\"M241.5 102.7 A60 60 0 0 0 278.5 102.7\" stroke=\"#06d6a0\" stroke-width=\"4\" fill=\"none\"/><text x=\"260.0\" y=\"167.7\" font-size=\"34\" fill=\"#06d6a0\" font-weight=\"600\" text-anchor=\"middle\" dominant-baseline=\"central\">36°</text><text x=\"260.0\" y=\"19.7\" font-size=\"34\" fill=\"#ffffff\" font-weight=\"600\" text-anchor=\"middle\" dominant-baseline=\"central\">A</text><text x=\"118.0\" y=\"437.0\" font-size=\"34\" fill=\"#ffffff\" font-weight=\"600\" text-anchor=\"middle\" dominant-baseline=\"central\">B</text><text x=\"402.0\" y=\"437.0\" font-size=\"34\" fill=\"#ffffff\" font-weight=\"600\" text-anchor=\"middle\" dominant-baseline=\"central\">C</text></svg>",
   "say": "In triangle A B C, A B equals A C, and angle A is thirty-six degrees. What is the measure of angle B?",
   "hint": "AB = AC, so it's isosceles: angles B and C are equal. They share what's left of 180°.",
   "hint_say": "Not yet. A B equals A C, so the triangle is isosceles, and angles B and C are equal. They share whatever is left of one eighty.",
   "steps": [
    [
     "180 − 36 = 144",
     "left for angles B and C"
    ],
    [
     "144 ÷ 2 = 72",
     "B and C are equal"
    ],
    [
     "∠B = 72°",
     ""
    ]
   ],
   "solve_say": "The triangle is isosceles, so the base angles B and C are equal. One eighty minus thirty-six leaves one forty-four for the two of them. Split it in half: angle B is seventy-two degrees."
  },
  "t2": {
   "kind": "num",
   "q": "One side of the triangle is extended.\nWhat is the value of x?",
   "answer": 67,
   "figure": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"600\" height=\"380\" viewBox=\"0 0 600 380\"><path d=\"M60.0 330.0 L284.0 81.2\" stroke=\"#ffffff\" stroke-width=\"4\" stroke-linecap=\"round\" fill=\"none\"/><path d=\"M284.0 81.2 L400.0 330.0\" stroke=\"#ffffff\" stroke-width=\"4\" stroke-linecap=\"round\" fill=\"none\"/><path d=\"M60.0 330.0 L570.0 330.0\" stroke=\"#ffffff\" stroke-width=\"4\" stroke-linecap=\"round\" fill=\"none\"/><path d=\"M60.0 330.0 L110.0 330.0 A50 50 0 0 0 93.5 292.8 Z\" fill=\"#8ecae6\" fill-opacity=\"0.28\" stroke=\"none\"/><path d=\"M110.0 330.0 A50 50 0 0 0 93.5 292.8\" stroke=\"#8ecae6\" stroke-width=\"4\" fill=\"none\"/><path d=\"M284.0 81.2 L253.9 114.7 A45 45 0 0 0 303.0 122.0 Z\" fill=\"#ffd166\" fill-opacity=\"0.28\" stroke=\"none\"/><path d=\"M253.9 114.7 A45 45 0 0 0 303.0 122.0\" stroke=\"#ffd166\" stroke-width=\"4\" fill=\"none\"/><path d=\"M400.0 330.0 L450.0 330.0 A50 50 0 0 0 378.9 284.7 Z\" fill=\"#ef476f\" fill-opacity=\"0.28\" stroke=\"none\"/><path d=\"M450.0 330.0 A50 50 0 0 0 378.9 284.7\" stroke=\"#ef476f\" stroke-width=\"4\" fill=\"none\"/><text x=\"149.5\" y=\"290.1\" font-size=\"34\" fill=\"#8ecae6\" font-weight=\"600\" text-anchor=\"middle\" dominant-baseline=\"central\">48°</text><text x=\"270.4\" y=\"172.2\" font-size=\"40\" fill=\"#ffffff\" font-weight=\"600\" text-anchor=\"middle\" dominant-baseline=\"central\"><tspan font-style=\"italic\" fill=\"#ffd166\">x</tspan>°</text><text x=\"447.3\" y=\"255.8\" font-size=\"34\" fill=\"#ef476f\" font-weight=\"600\" text-anchor=\"middle\" dominant-baseline=\"central\">115°</text></svg>",
   "say": "One side of this triangle is extended. The exterior angle is one hundred fifteen degrees, and one far inside angle is forty-eight. What is the value of x?",
   "hint": "The 115° exterior angle equals the sum of the two far inside angles: 48 and x.",
   "hint_say": "Close. Use the exterior angle shortcut. One fifteen equals the sum of the two far inside angles, forty-eight and x.",
   "steps": [
    [
     "x + 48 = 115",
     "exterior angle = the two far inside angles"
    ],
    [
     "x = 67",
     "115 − 48"
    ]
   ],
   "solve_say": "The exterior angle equals the two far inside angles added together. So x plus forty-eight equals one fifteen. Subtract forty-eight, and x equals sixty-seven."
  },
  "q1": {
   "kind": "num",
   "q": "Lines j and k are parallel.\nWhat is the value of x?",
   "answer": 115,
   "figure": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"600\" height=\"420\" viewBox=\"0 0 600 420\"><path d=\"M30.0 130.0 L570.0 130.0\" stroke=\"#ffffff\" stroke-width=\"4\" stroke-linecap=\"round\" fill=\"none\"/><path d=\"M30.0 300.0 L570.0 300.0\" stroke=\"#ffffff\" stroke-width=\"4\" stroke-linecap=\"round\" fill=\"none\"/><path d=\"M204.2 399.7 L376.5 30.3\" stroke=\"#ffffff\" stroke-width=\"4\" stroke-linecap=\"round\" fill=\"none\"/><path d=\"M488 119 L504 130 L488 141\" stroke=\"#ffffff\" stroke-width=\"4\" fill=\"none\"/><path d=\"M488 289 L504 300 L488 311\" stroke=\"#ffffff\" stroke-width=\"4\" fill=\"none\"/><path d=\"M330.0 130.0 L372.0 130.0 A42 42 0 0 0 347.7 91.9 Z\" fill=\"#8ecae6\" fill-opacity=\"0.28\" stroke=\"none\"/><path d=\"M372.0 130.0 A42 42 0 0 0 347.7 91.9\" stroke=\"#8ecae6\" stroke-width=\"4\" fill=\"none\"/><path d=\"M250.7 300.0 L268.5 261.9 A42 42 0 0 0 208.7 300.0 Z\" fill=\"#ffd166\" fill-opacity=\"0.28\" stroke=\"none\"/><path d=\"M268.5 261.9 A42 42 0 0 0 208.7 300.0\" stroke=\"#ffd166\" stroke-width=\"4\" fill=\"none\"/><text x=\"400.8\" y=\"84.9\" font-size=\"34\" fill=\"#8ecae6\" font-weight=\"600\" text-anchor=\"middle\" dominant-baseline=\"central\">65°</text><text x=\"206.7\" y=\"230.8\" font-size=\"40\" fill=\"#ffffff\" font-weight=\"600\" text-anchor=\"middle\" dominant-baseline=\"central\"><tspan font-style=\"italic\" fill=\"#ffd166\">x</tspan>°</text><text x=\"552.0\" y=\"104.0\" font-size=\"32\" fill=\"#9aa5b8\" font-weight=\"600\" font-style=\"italic\" text-anchor=\"middle\" dominant-baseline=\"central\">j</text><text x=\"552.0\" y=\"274.0\" font-size=\"32\" fill=\"#9aa5b8\" font-weight=\"600\" font-style=\"italic\" text-anchor=\"middle\" dominant-baseline=\"central\">k</text></svg>",
   "say": "Lines j and k are parallel. One angle is sixty-five degrees. What is the value of x?",
   "hint": "Only two sizes here: small and big. Is x the small one or the big one? Small + big = 180.",
   "hint_say": "Not quite. Parallel lines make only two sizes of angles. Is x the small one or the big one? Small plus big is one eighty.",
   "steps": [
    [
     "small angle = 65",
     "the same at both crossings"
    ],
    [
     "x is the big angle",
     "it looks obtuse"
    ],
    [
     "x = 180 − 65 = 115",
     "small + big = 180"
    ]
   ],
   "solve_say": "Every angle here is either the small one, sixty-five, or the big one. X is clearly the big one, and small plus big is one eighty. So x equals one eighty minus sixty-five, which is one hundred fifteen."
  },
  "q2": {
   "kind": "num",
   "q": "A pentagon has five angles: 100°, 125°, 95°, 110°, and x°. What is the value of x?",
   "answer": 110,
   "say": "A pentagon has angles of one hundred, one twenty-five, ninety-five, one ten, and x degrees. What is the value of x?",
   "hint": "A pentagon has 5 sides, so its angles add to (5 − 2) × 180°.",
   "hint_say": "Not yet. A pentagon has five sides, so its angles add to five minus two, times one eighty. Find that total first.",
   "steps": [
    [
     "(5 − 2) × 180 = 540",
     "total for a pentagon"
    ],
    [
     "100 + 125 + 95 + 110 = 430",
     ""
    ],
    [
     "x = 540 − 430 = 110",
     ""
    ]
   ],
   "solve_say": "A pentagon splits into three triangles, so its angles add to five forty. The four angles you know add to four thirty. Five forty minus four thirty is one ten, so x equals one hundred ten."
  },
  "r1": {
   "kind": "mc",
   "tag": "From your Practice Test 2",
   "figure": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"660\" height=\"420\" viewBox=\"0 0 660 420\"><path d=\"M30.0 300.0 L640.0 300.0\" stroke=\"#ffffff\" stroke-width=\"4\" stroke-linecap=\"round\" fill=\"none\"/><path d=\"M60.0 369.3 L240.6 56.5\" stroke=\"#ffffff\" stroke-width=\"4\" stroke-linecap=\"round\" fill=\"none\"/><path d=\"M634.1 371.8 L62.8 105.4\" stroke=\"#ffffff\" stroke-width=\"4\" stroke-linecap=\"round\" fill=\"none\"/><path d=\"M100.0 300.0 L120.0 265.4 A40 40 0 0 0 60.0 300.0 Z\" fill=\"#8ecae6\" fill-opacity=\"0.28\" stroke=\"none\"/><path d=\"M120.0 265.4 A40 40 0 0 0 60.0 300.0\" stroke=\"#8ecae6\" stroke-width=\"4\" fill=\"none\"/><path d=\"M180.6 160.4 L197.6 130.9 A34 34 0 0 0 149.8 146.0 Z\" fill=\"#06d6a0\" fill-opacity=\"0.28\" stroke=\"none\"/><path d=\"M197.6 130.9 A34 34 0 0 0 149.8 146.0\" stroke=\"#06d6a0\" stroke-width=\"4\" fill=\"none\"/><path d=\"M480.0 300.0 L545.3 330.4 A72 72 0 0 0 552.0 300.0 Z\" fill=\"#ffd166\" fill-opacity=\"0.28\" stroke=\"none\"/><path d=\"M545.3 330.4 A72 72 0 0 0 552.0 300.0\" stroke=\"#ffd166\" stroke-width=\"4\" fill=\"none\"/><text x=\"61.0\" y=\"232.5\" font-size=\"34\" fill=\"#8ecae6\" font-weight=\"600\" text-anchor=\"middle\" dominant-baseline=\"central\">120°</text><text x=\"159.0\" y=\"91.7\" font-size=\"34\" fill=\"#06d6a0\" font-weight=\"600\" text-anchor=\"middle\" dominant-baseline=\"central\">95°</text><text x=\"605.0\" y=\"327.7\" font-size=\"40\" fill=\"#ffffff\" font-weight=\"600\" text-anchor=\"middle\" dominant-baseline=\"central\"><tspan font-style=\"italic\" fill=\"#ffd166\">x</tspan>°</text><circle cx=\"180.6\" cy=\"160.4\" r=\"6\" fill=\"#ffffff\"/><text x=\"216.3\" y=\"155.4\" font-size=\"32\" fill=\"#ffffff\" font-weight=\"600\" text-anchor=\"middle\" dominant-baseline=\"central\">P</text><text x=\"251.6\" y=\"37.4\" font-size=\"32\" fill=\"#9aa5b8\" font-weight=\"600\" font-style=\"italic\" text-anchor=\"middle\" dominant-baseline=\"central\">m</text><text x=\"42.8\" y=\"96.2\" font-size=\"32\" fill=\"#9aa5b8\" font-weight=\"600\" font-style=\"italic\" text-anchor=\"middle\" dominant-baseline=\"central\">n</text><text x=\"628.0\" y=\"274.0\" font-size=\"32\" fill=\"#9aa5b8\" font-weight=\"600\" font-style=\"italic\" text-anchor=\"middle\" dominant-baseline=\"central\">ℓ</text></svg>",
   "q": "Lines m and n intersect at point P, and ℓ is a straight line. What is the value of x?",
   "choices": [
    "65°",
    "45°",
    "35°",
    "25°"
   ],
   "answer": "D",
   "say": "This one is from your second practice test. Lines m and n intersect at point P, and l is a straight line. What is the value of x?",
   "hint": "Look for the hidden triangle. Find its three inside angles: a straight line next to 120°, a vertical angle at P.",
   "hint_say": "Not quite. Look for the hidden triangle formed by the three lines. The inside angle next to one twenty makes a straight line with it, and the inside angle at P is vertical to ninety-five.",
   "steps": [
    [
     "180 − 120 = 60",
     "straight line"
    ],
    [
     "95",
     "vertical angles at P"
    ],
    [
     "180 − 60 − 95 = 25",
     "triangle"
    ],
    [
     "x = 25",
     "vertical to the 25°"
    ]
   ],
   "solve_say": "Find the triangle's three inside angles. Next to one twenty is sixty, because they make a straight line. At P, the inside angle is vertical to ninety-five, so it's ninety-five. The third angle is one eighty minus sixty minus ninety-five, which is twenty-five. X is vertical to that angle, so x is twenty-five. The answer is D."
  },
  "r2": {
   "kind": "mc",
   "tag": "From your Practice Test 2",
   "figure": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"560\" height=\"405\" viewBox=\"0 0 560 405\"><rect x=\"150\" y=\"105\" width=\"290\" height=\"290\" stroke=\"#ffffff\" stroke-width=\"4\" fill=\"none\"/><path d=\"M150.0 125.0 L170.0 125.0 L170.0 105.0\" stroke=\"#9aa5b8\" stroke-width=\"3\" fill=\"none\"/><path d=\"M115.0 338.8 L285.0 44.4\" stroke=\"#ffffff\" stroke-width=\"4\" stroke-linecap=\"round\" fill=\"none\"/><path d=\"M250.0 105.0 L230.0 139.6 A40 40 0 0 0 290.0 105.0 Z\" fill=\"#8ecae6\" fill-opacity=\"0.28\" stroke=\"none\"/><path d=\"M230.0 139.6 A40 40 0 0 0 290.0 105.0\" stroke=\"#8ecae6\" stroke-width=\"4\" fill=\"none\"/><path d=\"M150.0 278.2 L150.0 318.2 A40 40 0 0 0 170.0 243.6 Z\" fill=\"#ffd166\" fill-opacity=\"0.28\" stroke=\"none\"/><path d=\"M150.0 318.2 A40 40 0 0 0 170.0 243.6\" stroke=\"#ffd166\" stroke-width=\"4\" fill=\"none\"/><text x=\"289.0\" y=\"172.5\" font-size=\"34\" fill=\"#8ecae6\" font-weight=\"600\" text-anchor=\"middle\" dominant-baseline=\"central\">120°</text><text x=\"231.1\" y=\"299.9\" font-size=\"40\" fill=\"#ffffff\" font-weight=\"600\" text-anchor=\"middle\" dominant-baseline=\"central\"><tspan font-style=\"italic\" fill=\"#ffd166\">x</tspan>°</text><circle cx=\"285.0\" cy=\"44.4\" r=\"6\" fill=\"#ffffff\"/><circle cx=\"115.0\" cy=\"338.8\" r=\"6\" fill=\"#ffffff\"/><text x=\"298.0\" y=\"21.9\" font-size=\"34\" fill=\"#ffffff\" font-weight=\"600\" text-anchor=\"middle\" dominant-baseline=\"central\">A</text><text x=\"102.0\" y=\"361.3\" font-size=\"34\" fill=\"#ffffff\" font-weight=\"600\" text-anchor=\"middle\" dominant-baseline=\"central\">B</text></svg>",
   "q": "The diagram shows line segment AB intersecting a square. What is the measure of angle x?",
   "choices": [
    "150°",
    "140°",
    "60°",
    "30°"
   ],
   "answer": "A",
   "say": "Here's another one from your second practice test. The diagram shows line segment A B intersecting a square. What is the measure of angle x?",
   "hint": "AB cuts off a small right triangle in the corner. Find its three angles, then use a straight line to reach x.",
   "hint_say": "Not yet. Segment A B cuts off a small right triangle in the corner of the square. Write its three angles on the figure, then use a straight line to get to x.",
   "steps": [
    [
     "180 − 120 = 60",
     "straight line along the top side"
    ],
    [
     "180 − 90 − 60 = 30",
     "the corner triangle"
    ],
    [
     "x = 180 − 30 = 150",
     "straight line along the left side"
    ]
   ],
   "solve_say": "The segment cuts off a right triangle in the corner. Along the top side, the triangle's angle and one twenty make a straight line, so that angle is sixty. The corner is ninety, so the last angle is one eighty minus ninety minus sixty, thirty. X makes a straight line with that thirty, so x is one fifty. The answer is A."
  },
  "r3": {
   "kind": "num",
   "q": "Two lines intersect. What is the value of x?",
   "answer": 15,
   "figure": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"600\" height=\"400\" viewBox=\"0 0 600 400\"><path d=\"M20.0 200.0 L580.0 200.0\" stroke=\"#ffffff\" stroke-width=\"4\" stroke-linecap=\"round\" fill=\"none\"/><path d=\"M228.8 376.2 L371.2 23.8\" stroke=\"#ffffff\" stroke-width=\"4\" stroke-linecap=\"round\" fill=\"none\"/><path d=\"M300.0 200.0 L346.0 200.0 A46 46 0 0 0 317.2 157.3 Z\" fill=\"#ffd166\" fill-opacity=\"0.28\" stroke=\"none\"/><path d=\"M346.0 200.0 A46 46 0 0 0 317.2 157.3\" stroke=\"#ffd166\" stroke-width=\"4\" fill=\"none\"/><path d=\"M300.0 200.0 L254.0 200.0 A46 46 0 0 0 282.8 242.7 Z\" fill=\"#ffd166\" fill-opacity=\"0.28\" stroke=\"none\"/><path d=\"M254.0 200.0 A46 46 0 0 0 282.8 242.7\" stroke=\"#ffd166\" stroke-width=\"4\" fill=\"none\"/><text x=\"424.4\" y=\"116.1\" font-size=\"32\" fill=\"#ffffff\" font-weight=\"600\" text-anchor=\"middle\" dominant-baseline=\"central\">(4<tspan font-style=\"italic\" fill=\"#ffd166\">x</tspan> + 8)°</text><text x=\"174.0\" y=\"285.0\" font-size=\"32\" fill=\"#ffffff\" font-weight=\"600\" text-anchor=\"middle\" dominant-baseline=\"central\">(6<tspan font-style=\"italic\" fill=\"#ffd166\">x</tspan> − 22)°</text></svg>",
   "say": "Two lines intersect. One angle is four x plus eight degrees, and the angle across from it is six x minus twenty-two degrees. What is the value of x?",
   "hint": "The two angles are vertical angles, so they're equal. Set 4x + 8 equal to 6x − 22.",
   "hint_say": "Close. These two angles are across from each other, so they're vertical angles, and they're equal. Set four x plus eight equal to six x minus twenty-two.",
   "steps": [
    [
     "4x + 8 = 6x − 22",
     "vertical angles are equal"
    ],
    [
     "30 = 2x",
     "subtract 4x, add 22"
    ],
    [
     "x = 15",
     "check: 4(15) + 8 = 68 = 6(15) − 22"
    ]
   ],
   "solve_say": "Vertical angles are equal, so four x plus eight equals six x minus twenty-two. Subtract four x and add twenty-two to both sides: thirty equals two x. So x equals fifteen. Check it: both angles come out to sixty-eight degrees."
  },
  "r4": {
   "kind": "mc",
   "tag": "Practice Test 2 · you got this one right!",
   "figure": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"620\" height=\"400\" viewBox=\"0 0 620 400\"><path d=\"M50.0 340.0 L355.1 83.9\" stroke=\"#ffffff\" stroke-width=\"4\" stroke-linecap=\"round\" fill=\"none\"/><path d=\"M355.1 83.9 L570.0 340.0\" stroke=\"#ffffff\" stroke-width=\"4\" stroke-linecap=\"round\" fill=\"none\"/><path d=\"M50.0 340.0 L570.0 340.0\" stroke=\"#ffffff\" stroke-width=\"4\" stroke-linecap=\"round\" fill=\"none\"/><path d=\"M355.1 83.9 L355.1 340.0\" stroke=\"#ffffff\" stroke-width=\"4\" stroke-linecap=\"round\" fill=\"none\"/><path d=\"M377.1 340.0 L377.1 318.0 L355.1 318.0\" stroke=\"#ffffff\" stroke-width=\"3\" fill=\"none\"/><path d=\"M338.3 98.1 L352.4 114.9 L369.3 100.8\" stroke=\"#ffffff\" stroke-width=\"3\" fill=\"none\"/><path d=\"M50.0 340.0 L105.0 340.0 A55 55 0 0 0 92.1 304.6 Z\" fill=\"#8ecae6\" fill-opacity=\"0.28\" stroke=\"none\"/><path d=\"M105.0 340.0 A55 55 0 0 0 92.1 304.6\" stroke=\"#8ecae6\" stroke-width=\"4\" fill=\"none\"/><text x=\"144.0\" y=\"305.8\" font-size=\"34\" fill=\"#8ecae6\" font-weight=\"600\" text-anchor=\"middle\" dominant-baseline=\"central\">40°</text><text x=\"28.0\" y=\"358.0\" font-size=\"34\" fill=\"#ffffff\" font-weight=\"600\" text-anchor=\"middle\" dominant-baseline=\"central\">M</text><text x=\"594.0\" y=\"358.0\" font-size=\"34\" fill=\"#ffffff\" font-weight=\"600\" text-anchor=\"middle\" dominant-baseline=\"central\">P</text><text x=\"355.1\" y=\"55.9\" font-size=\"34\" fill=\"#ffffff\" font-weight=\"600\" text-anchor=\"middle\" dominant-baseline=\"central\">N</text><text x=\"355.1\" y=\"370.0\" font-size=\"34\" fill=\"#ffffff\" font-weight=\"600\" text-anchor=\"middle\" dominant-baseline=\"central\">Q</text></svg>",
   "q": "Q is a point on side MP of triangle MNP. Triangles MNQ and NPQ are similar. What is the measure of angle QPN?",
   "choices": [
    "40°",
    "50°",
    "90°",
    "100°"
   ],
   "answer": "B",
   "say": "You got this one right on your second practice test, so let's make sure you still can. Q is a point on side M P of triangle M N P. Triangles M N Q and N P Q are similar. What is the measure of angle Q P N?",
   "hint": "Angle QPN has its vertex at P, the middle letter. Use triangle NQP: it has a 90° angle at Q.",
   "hint_say": "Not quite. In angle Q P N, the middle letter is P, so the angle sits at P. Find angle M N Q first, then angle Q N P, then use the triangle at P.",
   "steps": [
    [
     "∠MNQ = 180 − 90 − 40 = 50",
     "triangle MNQ"
    ],
    [
     "∠QNP = 90 − 50 = 40",
     "angle MNP is 90°"
    ],
    [
     "∠QPN = 180 − 90 − 40 = 50",
     "triangle NQP"
    ]
   ],
   "solve_say": "Angle Q P N sits at P. In triangle M N Q, angle M N Q is one eighty minus ninety minus forty, which is fifty. Angle M N P is a right angle, so angle Q N P is ninety minus fifty, forty. Then in triangle N Q P, angle P is one eighty minus ninety minus forty, fifty. The answer is B."
  },
  "r5": {
   "kind": "mc",
   "q": "What is the measure of each interior angle of a regular hexagon?",
   "choices": [
    "60°",
    "120°",
    "108°",
    "720°"
   ],
   "answer": "B",
   "say": "What is the measure of each interior angle of a regular hexagon?",
   "hint": "A hexagon has 6 sides: find the total with (n − 2) × 180°, then share it equally among 6 angles.",
   "hint_say": "Not yet. A hexagon has six sides. Find the total with n minus two, times one eighty, then share it equally among the six angles.",
   "steps": [
    [
     "(6 − 2) × 180 = 720",
     "total for a hexagon"
    ],
    [
     "720 ÷ 6 = 120",
     "regular: all 6 angles are equal"
    ]
   ],
   "solve_say": "A hexagon splits into four triangles, so its angles add to four times one eighty, seven twenty. Regular means all six angles are equal, so each one is seven twenty divided by six, one hundred twenty. The answer is B."
  },
  "r6": {
   "kind": "mc",
   "tag": "From your Practice Test 2",
   "q": "B is a point that is not on line a. How many lines can be drawn through B that are perpendicular to line a?",
   "choices": [
    "1",
    "2",
    "3",
    "It varies"
   ],
   "answer": "A",
   "say": "Last one, also from your second practice test. B is a point that is not on line a. How many lines can be drawn through B that are perpendicular to line a?",
   "hint": "Sketch it: draw line a and a point B above it. Perpendicular means it meets line a at exactly 90°.",
   "hint_say": "Not quite. Sketch it. Draw line a, and a point B above it. Perpendicular means the new line hits line a at exactly ninety degrees. How many ways can you do that through B?",
   "steps": [
    [
     "draw line a, then point B",
     "sketch it"
    ],
    [
     "only one line through B meets a at 90°",
     "tilt it and the angle isn't 90°"
    ],
    [
     "answer: 1",
     ""
    ]
   ],
   "solve_say": "Sketch it. From point B, there's exactly one way to drop a line straight down to line a at ninety degrees. Tilt that line even a little, and the angle is no longer ninety. So exactly one line works. The answer is A."
  }
 },
 "nCorrect": 4,
 "sounds": {
  "S1Title": "audio/S1Title.mp3",
  "S2Names": "audio/S2Names.mp3",
  "S3Cross": "audio/S3Cross.mp3",
  "S4Triangle": "audio/S4Triangle.mp3",
  "S5Exterior": "audio/S5Exterior.mp3",
  "S6Parallel": "audio/S6Parallel.mp3",
  "S7Polygon": "audio/S7Polygon.mp3",
  "S8Question": "audio/S8Question.mp3",
  "S9Solve": "audio/S9Solve.mp3",
  "S10Check": "audio/S10Check.mp3",
  "S11Recap": "audio/S11Recap.mp3",
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
  "t1-say": "audio/t1-say.mp3",
  "t1-hint_say": "audio/t1-hint_say.mp3",
  "t1-solve_say": "audio/t1-solve_say.mp3",
  "t2-say": "audio/t2-say.mp3",
  "t2-hint_say": "audio/t2-hint_say.mp3",
  "t2-solve_say": "audio/t2-solve_say.mp3",
  "q1-say": "audio/q1-say.mp3",
  "q1-hint_say": "audio/q1-hint_say.mp3",
  "q1-solve_say": "audio/q1-solve_say.mp3",
  "q2-say": "audio/q2-say.mp3",
  "q2-hint_say": "audio/q2-hint_say.mp3",
  "q2-solve_say": "audio/q2-solve_say.mp3",
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
  "r5-say": "audio/r5-say.mp3",
  "r5-hint_say": "audio/r5-hint_say.mp3",
  "r5-solve_say": "audio/r5-solve_say.mp3",
  "r6-say": "audio/r6-say.mp3",
  "r6-hint_say": "audio/r6-hint_say.mp3",
  "r6-solve_say": "audio/r6-solve_say.mp3",
  "lines-intro": "audio/lines-intro.mp3",
  "tri-intro": "audio/tri-intro.mp3",
  "par-intro": "audio/par-intro.mp3",
  "practice-intro": "audio/practice-intro.mp3",
  "summary-intro": "audio/summary-intro.mp3"
 },
 "lead": 0.4,
 "solveCues": {
  "a1": [
   0.0,
   4.08,
   10.4,
   14.32
  ],
  "a2": [
   0.0,
   1.76,
   7.12,
   13.84
  ],
  "t1": [
   0.0,
   5.76,
   10.56,
   11.92
  ],
  "t2": [
   0.0,
   5.44,
   9.2
  ],
  "q1": [
   0.0,
   5.36,
   10.08
  ],
  "q2": [
   0.0,
   5.84,
   9.12
  ],
  "r1": [
   0.0,
   2.8,
   7.04,
   12.64,
   18.56,
   22.64
  ],
  "r2": [
   0.0,
   3.36,
   10.36,
   17.6,
   22.08
  ],
  "r3": [
   0.0,
   6.84,
   10.6,
   12.72,
   15.08,
   15.92
  ],
  "r4": [
   0.0,
   3.04,
   11.2,
   19.12,
   26.8
  ],
  "r5": [
   0.0,
   7.36,
   15.12
  ],
  "r6": [
   0.0,
   1.12,
   8.32,
   12.72,
   15.28
  ]
 }
};
window.TIMING = window.LESSON.timing;
