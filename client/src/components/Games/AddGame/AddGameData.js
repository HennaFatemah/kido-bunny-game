import {Logic} from './AddGameLogic';

export const questions = [
    {
        id: 1,
        questionText: `What is ${Logic.numberOne} + ${Logic.numberTwo}?`,
        answerOptions: [
            { answerText: `${Logic.numberOne + Logic.numberTwo}`, isCorrect: true},
            { answerText: `${Logic.numberOne + Logic.numberTwo - 1}`, isCorrect: false},
            { answerText: `${Logic.numberOne + Logic.numberTwo + 1}`, isCorrect: false},
            { answerText: `${Logic.numberOne + Logic.numberTwo + 3}`, isCorrect: false},
        ],
    },
    {
        id: 2,
        questionText: `What is ${Logic.numberThree} + ${Logic.numberFour}?`,
        answerOptions: [
            { answerText: `${Logic.numberThree + Logic.numberFour + 1}`, isCorrect: false},
            { answerText: `${Logic.numberThree + Logic.numberFour - 1}`, isCorrect: false},
            { answerText: `${Logic.numberThree + Logic.numberFour}`, isCorrect: true},
            { answerText: `${Logic.numberThree + Logic.numberFour + 2}`, isCorrect: false},
        ],
        correctStatement: `Correct answer for question 1`,
        correctAnswer: `${Logic.numberOne + Logic.numberTwo}`,
    },
    {
        id: 3,
        questionText: `What is ${Logic.numberFive} + ${Logic.numberSix}?`,
        answerOptions: [
            { answerText: `${Logic.numberFive + Logic.numberSix}`, isCorrect: true},
            { answerText: `${Logic.numberFive + Logic.numberSix + 4}`, isCorrect: false},
            { answerText: `${Logic.numberFive + Logic.numberSix + 1}`, isCorrect: false},
            { answerText: `${Logic.numberFive + Logic.numberSix + 2}`, isCorrect: false},
        ],
        correctStatement: `Correct answer for question 2`,
        correctAnswer: `${Logic.numberThree + Logic.numberFour}`,
    },
    {
        id: 4,
        questionText: `What is ${Logic.numberSeven} + ${Logic.numberEight}?`,
        answerOptions: [
            { answerText: `${Logic.numberSeven + Logic.numberEight + 1}`, isCorrect: false},
            { answerText: `${Logic.numberSeven + Logic.numberEight + 2}`, isCorrect: false},
            { answerText: `${Logic.numberSeven + Logic.numberEight + 3}`, isCorrect: false},
            { answerText: `${Logic.numberSeven + Logic.numberEight}`, isCorrect: true},
        ],
        correctStatement: `Correct answer for question 3`,
        correctAnswer: `${Logic.numberFive + Logic.numberSix}`,
    },
    {
        id: 5,
        questionText: `What is ${Logic.numberNine} + ${Logic.numberTen}?`,
        answerOptions: [
            { answerText: `${Logic.numberNine + Logic.numberTen + 2}`, isCorrect: false},
            { answerText: `${Logic.numberNine + Logic.numberTen + 1}`, isCorrect: false},
            { answerText: `${Logic.numberNine + Logic.numberTen}`, isCorrect: true},
            { answerText: `${Logic.numberNine + Logic.numberTen + 5}`, isCorrect: false},
        ],
        correctStatement: `Correct answer for question 4`,
        correctAnswer: `${Logic.numberSeven + Logic.numberEight}`,
    },
    {
        id: 6,
        questionText: `What is ${Logic.numberEleven} + ${Logic.numberTwelve}?`,
        answerOptions: [
            { answerText: `${Logic.numberEleven + Logic.numberTwelve + 1}`, isCorrect: false},
            { answerText: `${Logic.numberEleven + Logic.numberTwelve + 2}`, isCorrect: false},
            { answerText: `${Logic.numberEleven + Logic.numberTwelve}`, isCorrect: true},
            { answerText: `${Logic.numberEleven + Logic.numberTwelve + 3}`, isCorrect: false},
        ],
        correctStatement: `Correct answer for question 5`,
        correctAnswer: `${Logic.numberNine + Logic.numberTen}`,
    },
    {
        id: 7,
        questionText: `What is ${Logic.numberThirteen} + ${Logic.numberFourteen}?`,
        answerOptions: [
            { answerText: `${Logic.numberThirteen + Logic.numberFourteen + 1}`, isCorrect: false},
            { answerText: `${Logic.numberThirteen + Logic.numberFourteen}`, isCorrect: true},
            { answerText: `${Logic.numberThirteen + Logic.numberFourteen + 3}`, isCorrect: false},
            { answerText: `${Logic.numberThirteen + Logic.numberFourteen + 7}`, isCorrect: false},
        ],
        correctStatement: `Correct answer for question 6`,
        correctAnswer: `${Logic.numberEleven + Logic.numberTwelve}`,
    },
    {
        id: 8,
        questionText: `What is ${Logic.numberFifteen} + ${Logic.numberSixteen}?`,
        answerOptions: [
            { answerText: `${Logic.numberFifteen + Logic.numberSixteen}`, isCorrect: true},
            { answerText: `${Logic.numberFifteen + Logic.numberSixteen + 1}`, isCorrect: false},
            { answerText: `${Logic.numberFifteen + Logic.numberSixteen + 3}`, isCorrect: false},
            { answerText: `${Logic.numberFifteen + Logic.numberSixteen + 4}`, isCorrect: false},
        ],
        correctStatement: `Correct answer for question 7`,
        correctAnswer: `${Logic.numberThirteen + Logic.numberFourteen}`,
    },
    {
        id: 9,
        questionText: `What is ${Logic.numberSeventeen} + ${Logic.numberEighteen}?`,
        answerOptions: [
            { answerText: `${Logic.numberSeventeen + Logic.numberEighteen}`, isCorrect: true},
            { answerText: `${Logic.numberSeventeen + Logic.numberEighteen + 2}`, isCorrect: false},
            { answerText: `${Logic.numberSeventeen + Logic.numberEighteen + 1}`, isCorrect: false},
            { answerText: `${Logic.numberSeventeen + Logic.numberEighteen + 3}`, isCorrect: false},
        ],
        correctStatement: `Correct answer for question 8`,
        correctAnswer: `${Logic.numberFifteen + Logic.numberSixteen}`,
    },
    {
        id: 10,
        questionText: `What is ${Logic.numberNineteen} + ${Logic.numberTwenty}?`,
        answerOptions: [
            { answerText: `${Logic.numberNineteen + Logic.numberTwenty + 1}`, isCorrect: false },
            { answerText: `${Logic.numberNineteen + Logic.numberTwenty}`, isCorrect: true },
            { answerText: `${Logic.numberNineteen + Logic.numberTwenty + 3}`, isCorrect: false },
            { answerText: `${Logic.numberNineteen + Logic.numberTwenty + 2}`, isCorrect: false },
        ],
        correctStatement: `Correct answer for question 9`,
        correctAnswer: `${Logic.numberSeventeen + Logic.numberEighteen}`,
        correctStatementTen: `Correct answer for question 10`,
        correctAnswerTen: `${Logic.numberNineteen + Logic.numberTwenty}`,
    }
];