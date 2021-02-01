let huntOne = [
    "Something yellow",
    "Something furry",
    "Something with stripes"
];
let huntOneItem = huntOne[Math.floor(Math.random()*huntOne.length)];

let huntTwo = [
    "Something with wheels",
    "Something with ears",
    "Something black"
];
let huntTwoItem = huntTwo[Math.floor(Math.random()*huntTwo.length)];

let huntThree = [
    "Something round",
    "Something red",
    "Something with words"
];
let huntThreeItem = huntThree[Math.floor(Math.random()*huntThree.length)];

let huntFour = [
    "Something that is shorter than you",
    "Something that is the same size as your feet",
    "Something that goes on your head"
];
let huntFourItem = huntFour[Math.floor(Math.random()*huntFour.length)];

let huntFive = [
    "Something that is taller than you",
    "Something that fits your hand",
    "Something soft"
];
let huntFiveItem = huntFive[Math.floor(Math.random()*huntFive.length)];

let huntSix = [
    "Something round",
    "Your favorite toy",
    "Something with a heart"
];
let huntSixItem = huntSix[Math.floor(Math.random()*huntSix.length)];

let huntSeven = [
    "Book with the first letter of your name",
    "Something that makes noise",
    "Two things that are blue"
];
let huntSevenItem = huntSeven[Math.floor(Math.random()*huntSeven.length)];

let huntEight = [
    "Something with a flower on it",
    "Three stuffed animals",
    "Something plastic"
];
let huntEightItem = huntEight[Math.floor(Math.random()*huntEight.length)];

let huntNine = [
    "Book with numbers",
    "Something that beeps",
    "Something that floats"
];
let huntNineItem = huntNine[Math.floor(Math.random()*huntNine.length)];

let huntTen = [
    "Something that can bend without breaking",
    "Something that has buttons",
    "Something to throw away"
];
let huntTenItem = huntTen[Math.floor(Math.random()*huntTen.length)];

export const questions = [
    {
        id: 1,
        questionText: `${huntOneItem}`,
        answerOptions: [
            { answerText: 'Done', isCorrect: true }
        ],
    },
    {
        id: 2,
        questionText: `${huntTwoItem}`,
        answerOptions: [
            { answerText: 'Done', isCorrect: true }
        ],
    },
    {
        id: 3,
        questionText: `${huntThreeItem}`,
        answerOptions: [
            { answerText: 'Done', isCorrect: true }
        ],
    },
    {
        id: 4,
        questionText: `${huntFourItem}`,
        answerOptions: [
            { answerText: 'Done', isCorrect: true }
        ],
    },
    {
        id: 5,
        questionText: `${huntFiveItem}`,
        answerOptions: [
            { answerText: 'Done', isCorrect: true }
        ],
    },
    {
        id: 6,
        questionText: `${huntSixItem}`,
        answerOptions: [
            { answerText: 'Done', isCorrect: true }
        ],
    },
    {
        id: 7,
        questionText: `${huntSevenItem}`,
        answerOptions: [
            { answerText: 'Done', isCorrect: true }
        ],
    },
    {
        id: 8,
        questionText: `${huntEightItem}`,
        answerOptions: [
            { answerText: 'Done', isCorrect: true }
        ],
    },
    {
        id: 9,
        questionText: `${huntNineItem}`,
        answerOptions: [
            { answerText: 'Done', isCorrect: true }
        ],
    },
    {
        id: 10,
        questionText: `${huntTenItem}`,
        answerOptions: [
            { answerText: 'Done', isCorrect: true }
        ],
    }
];