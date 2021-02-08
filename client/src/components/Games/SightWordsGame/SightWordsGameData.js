let spaceOne = [
    "Be",
    "Do",
    "Go"
];
let spaceOneItem = spaceOne[Math.floor(Math.random()*spaceOne.length)];

let spaceTwo = [
    "Hi",
    "He",
    "Me"
];
let spaceTwoItem = spaceTwo[Math.floor(Math.random()*spaceTwo.length)];

let spaceThree = [
    "No",
    "So",
    "To"
];
let spaceThreeItem = spaceThree[Math.floor(Math.random()*spaceThree.length)];

let spaceFour = [
    "We",
    "At",
    "Am"
];
let spaceFourItem = spaceFour[Math.floor(Math.random()*spaceFour.length)];

let spaceFive = [
    "An",
    "As",
    "Bad"
];
let spaceFiveItem = spaceFive[Math.floor(Math.random()*spaceFive.length)];

let spaceSix = [
    "Bag",
    "Bat",
    "Cab"
];
let spaceSixItem = spaceSix[Math.floor(Math.random()*spaceSix.length)];

let spaceSeven = [
    "Can",
    "Cap",
    "Car"
];
let spaceSevenItem = spaceSeven[Math.floor(Math.random()*spaceSeven.length)];

let spaceEight = [
    "Cat",
    "Dad",
    "Dam"
];
let spaceEightItem = spaceEight[Math.floor(Math.random()*spaceEight.length)];

let spaceNine = [
    "Fan",
    "Far",
    "Fat"
];
let spaceNineItem = spaceNine[Math.floor(Math.random()*spaceNine.length)];

let spaceTen = [
    "Gas",
    "Had",
    "Has"
];
let spaceTenItem = spaceTen[Math.floor(Math.random()*spaceTen.length)];

export const questions = [
    {
        id: 1,
        questionText: `${spaceOneItem}`,
        answerOptions: [
            { answerText: 'Done', isCorrect: true }
        ],
    },
    {
        id: 2,
        questionText: `${spaceTwoItem}`,
        answerOptions: [
            { answerText: 'Done', isCorrect: true }
        ],
    },
    {
        id: 3,
        questionText: `${spaceThreeItem}`,
        answerOptions: [
            { answerText: 'Done', isCorrect: true }
        ],
    },
    {
        id: 4,
        questionText: `${spaceFourItem}`,
        answerOptions: [
            { answerText: 'Done', isCorrect: true }
        ],
    },
    {
        id: 5,
        questionText: `${spaceFiveItem}`,
        answerOptions: [
            { answerText: 'Done', isCorrect: true }
        ],
    },
    {
        id: 6,
        questionText: `${spaceSixItem}`,
        answerOptions: [
            { answerText: 'Done', isCorrect: true }
        ],
    },
    {
        id: 7,
        questionText: `${spaceSevenItem}`,
        answerOptions: [
            { answerText: 'Done', isCorrect: true }
        ],
    },
    {
        id: 8,
        questionText: `${spaceEightItem}`,
        answerOptions: [
            { answerText: 'Done', isCorrect: true }
        ],
    },
    {
        id: 9,
        questionText: `${spaceNineItem}`,
        answerOptions: [
            { answerText: 'Done', isCorrect: true }
        ],
    },
    {
        id: 10,
        questionText: `${spaceTenItem}`,
        answerOptions: [
            { answerText: 'Done', isCorrect: true }
        ],
    }
];