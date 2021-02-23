const numberOne = Math.round(Math.random() * 5);
const numberTwo = Math.round(Math.random() * 5);
const numberThree = Math.round(Math.random() * 5);
const numberFour = Math.round(Math.random() * 5);
const numberFive = Math.round(Math.random() * 5);
const numberSix = Math.round(Math.random() * 5);
const numberSeven = Math.round(Math.random() * 5);
const numberEight = Math.round(Math.random() * 5);
const numberNine = Math.round(Math.random() * 5);
const numberTen = Math.round(Math.random() * 5);
const numberEleven = Math.round(Math.random() * 5);
const numberTwelve = Math.round(Math.random() * 5);
const numberThirteen = Math.round(Math.random() * 5);
const numberFourteen = Math.round(Math.random() * 5);
const numberFifteen = Math.round(Math.random() * 5);
const numberSixteen = Math.round(Math.random() * 5);
const numberSeventeen = Math.round(Math.random() * 5);
const numberEighteen = Math.round(Math.random() * 5);
const numberNineteen = Math.round(Math.random() * 5);
const numberTwenty = Math.round(Math.random() * 5);

export const questions = [
    {
        id: 1,
        questionText: `What is ${numberOne} + ${numberTwo}?`,
        answerOptions: [
            { answerText: `${numberOne + numberTwo}`, isCorrect: true},
            { answerText: `${numberOne + numberTwo - 1}`, isCorrect: false},
            { answerText: `${numberOne + numberTwo + 1}`, isCorrect: false},
            { answerText: `${numberOne + numberTwo + 3}`, isCorrect: false},
        ],
    },
    {
        id: 2,
        questionText: `What is ${numberThree} + ${numberFour}?`,
        answerOptions: [
            { answerText: `${numberThree + numberFour + 1}`, isCorrect: false},
            { answerText: `${numberThree + numberFour - 1}`, isCorrect: false},
            { answerText: `${numberThree + numberFour}`, isCorrect: true},
            { answerText: `${numberThree + numberFour + 2}`, isCorrect: false},
        ],
        correctAnswer: `Correct answer for question 1 is: ${numberOne + numberTwo}`
    },
    {
        id: 3,
        questionText: `What is ${numberFive} + ${numberSix}?`,
        answerOptions: [
            { answerText: `${numberFive + numberSix}`, isCorrect: true},
            { answerText: `${numberFive + numberSix + 4}`, isCorrect: false},
            { answerText: `${numberFive + numberSix + 1}`, isCorrect: false},
            { answerText: `${numberFive + numberSix + 2}`, isCorrect: false},
        ],
        correctAnswer: `Correct answer for question 2 is: ${numberThree + numberFour}`
    },
    {
        id: 4,
        questionText: `What is ${numberSeven} + ${numberEight}?`,
        answerOptions: [
            { answerText: `${numberSeven + numberEight + 1}`, isCorrect: false},
            { answerText: `${numberSeven + numberEight + 2}`, isCorrect: false},
            { answerText: `${numberSeven + numberEight + 3}`, isCorrect: false},
            { answerText: `${numberSeven + numberEight}`, isCorrect: true},
        ],
        correctAnswer: `Correct answer for question 3 is: ${numberFive + numberSix}`
    },
    {
        id: 5,
        questionText: `What is ${numberNine} + ${numberTen}?`,
        answerOptions: [
            { answerText: `${numberNine + numberTen + 2}`, isCorrect: false},
            { answerText: `${numberNine + numberTen + 1}`, isCorrect: false},
            { answerText: `${numberNine + numberTen}`, isCorrect: true},
            { answerText: `${numberNine + numberTen + 5}`, isCorrect: false},
        ],
        correctAnswer: `Correct answer for question 4 is: ${numberSeven + numberEight}`
    },
    {
        id: 6,
        questionText: `What is ${numberEleven} + ${numberTwelve}?`,
        answerOptions: [
            { answerText: `${numberEleven + numberTwelve + 1}`, isCorrect: false},
            { answerText: `${numberEleven + numberTwelve + 2}`, isCorrect: false},
            { answerText: `${numberEleven + numberTwelve}`, isCorrect: true},
            { answerText: `${numberEleven + numberTwelve + 3}`, isCorrect: false},
        ],
        correctAnswer: `Correct answer for question 5 is: ${numberNine + numberTen}`
    },
    {
        id: 7,
        questionText: `What is ${numberThirteen} + ${numberFourteen}?`,
        answerOptions: [
            { answerText: `${numberThirteen + numberFourteen + 1}`, isCorrect: false},
            { answerText: `${numberThirteen + numberFourteen}`, isCorrect: true},
            { answerText: `${numberThirteen + numberFourteen + 3}`, isCorrect: false},
            { answerText: `${numberThirteen + numberFourteen + 7}`, isCorrect: false},
        ],
        correctAnswer: `Correct answer for question 6 is: ${numberEleven + numberTwelve}`
    },
    {
        id: 8,
        questionText: `What is ${numberFifteen} + ${numberSixteen}?`,
        answerOptions: [
            { answerText: `${numberFifteen + numberSixteen}`, isCorrect: true},
            { answerText: `${numberFifteen + numberSixteen + 1}`, isCorrect: false},
            { answerText: `${numberFifteen + numberSixteen + 3}`, isCorrect: false},
            { answerText: `${numberFifteen + numberSixteen + 4}`, isCorrect: false},
        ],
        correctAnswer: `Correct answer for question 7 is: ${numberThirteen + numberFourteen}`
    },
    {
        id: 9,
        questionText: `What is ${numberSeventeen} + ${numberEighteen}?`,
        answerOptions: [
            { answerText: `${numberSeventeen + numberEighteen}`, isCorrect: true},
            { answerText: `${numberSeventeen + numberEighteen + 2}`, isCorrect: false},
            { answerText: `${numberSeventeen + numberEighteen + 1}`, isCorrect: false},
            { answerText: `${numberSeventeen + numberEighteen + 3}`, isCorrect: false},
        ],
        correctAnswer: `Correct answer for question 8 is: ${numberFifteen + numberSixteen}`
    },
    {
        id: 10,
        questionText: `What is ${numberNineteen} + ${numberTwenty}?`,
        answerOptions: [
            { answerText: `${numberNineteen + numberTwenty + 1}`, isCorrect: false },
            { answerText: `${numberNineteen + numberTwenty}`, isCorrect: true },
            { answerText: `${numberNineteen + numberTwenty + 3}`, isCorrect: false },
            { answerText: `${numberNineteen + numberTwenty + 2}`, isCorrect: false },
        ],
        correctAnswer: `Correct answer for question 9 is: ${numberSeventeen + numberEighteen}`,
        correctAnswerTen: `Correct answer for question 10 is: ${numberNineteen + numberTwenty}`
    }
];