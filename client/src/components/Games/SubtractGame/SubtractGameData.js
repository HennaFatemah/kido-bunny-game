const numberOne = Math.round(Math.random() * 5) + 6;
const numberTwo = Math.round(Math.random() * 5);
const correctAnswerOne = numberOne - numberTwo;
const optionOne = correctAnswerOne + 2;
const optionTwo = correctAnswerOne + 1;
const optionThree = correctAnswerOne + 3;
const numberThree = Math.round(Math.random() * 5) + 5;
const numberFour = Math.round(Math.random() * 5);
const numberFive = Math.round(Math.random() * 5) + 5;
const numberSix = Math.round(Math.random() * 5);
const numberSeven = Math.round(Math.random() * 5) + 5;
const numberEight = Math.round(Math.random() * 5);
const numberNine = Math.round(Math.random() * 5) + 5;
const numberTen = Math.round(Math.random() * 5);
const numberEleven = Math.round(Math.random() * 5) + 5;
const numberTwelve = Math.round(Math.random() * 5);
const numberThirteen = Math.round(Math.random() * 5) + 5;
const numberFourteen = Math.round(Math.random() * 5);
const numberFifteen = Math.round(Math.random() * 5) + 5;
const numberSixteen = Math.round(Math.random() * 5);
const numberSeventeen = Math.round(Math.random() * 5) + 5;
const numberEighteen = Math.round(Math.random() * 5);
export const questions = [
    {
        id: 1,
        questionText: `What is ${numberOne} - ${numberTwo}?`,
        answerOptions: [
            { answerText: `${correctAnswerOne}`, isCorrect: true },
            { answerText: `${optionOne}`, isCorrect: false },
            { answerText: `${optionTwo}`, isCorrect: false },
            { answerText: `${optionThree}`, isCorrect: false },
        ],
    },
    {
        id: 2,
        questionText: `What is ${numberOne} - ${numberTwo + 1}?`,
        answerOptions: [
            { answerText: `${numberOne - numberTwo}`, isCorrect: false },
            { answerText: `${numberOne - numberTwo + 6}`, isCorrect: false },
            { answerText: `${numberOne - (numberTwo + 1)}`, isCorrect: true },
            { answerText: `${numberOne - numberTwo + 2}`, isCorrect: false },
        ],
    },
    {
        id: 3,
        questionText: `What is ${numberThree} - ${numberFour}?`,
        answerOptions: [
            { answerText: `${numberThree - numberFour}`, isCorrect: true },
            { answerText: `${numberThree - numberFour + 3}`, isCorrect: false },
            { answerText: `${numberThree - numberFour + 1}`, isCorrect: false },
            { answerText: `${numberThree + numberFour}`, isCorrect: false },
        ],
    },
    {
        id: 4,
        questionText: `What is ${numberFive} - ${numberSix}?`,
        answerOptions: [
            { answerText: `${numberFive - numberSix + 4}`, isCorrect: false },
            { answerText: `${numberFive - numberSix + 2}`, isCorrect: false },
            { answerText: `${numberFive - numberSix + 1}`, isCorrect: false },
            { answerText: `${numberFive - numberSix}`, isCorrect: true },
        ],
    },
    {
        id: 5,
        questionText: `What is ${numberSeven} - ${numberEight}?`,
        answerOptions: [
            { answerText: `${numberSeven - numberEight + 4}`, isCorrect: false },
            { answerText: `${numberSeven - numberEight + 2}`, isCorrect: false },
            { answerText: `${numberSeven - numberEight}`, isCorrect: true },
            { answerText: `${numberSeven - numberEight + 1}`, isCorrect: false },
        ],
    },
    {
        id: 6,
        questionText: `What is ${numberNine} - ${numberTen}?`,
        answerOptions: [
            { answerText: `${numberNine - numberTen + 4}`, isCorrect: false },
            { answerText: `${numberNine - numberTen + 2}`, isCorrect: false },
            { answerText: `${numberNine - numberTen}`, isCorrect: true },
            { answerText: `${numberNine - numberTen + 1}`, isCorrect: false },
        ],
    },
    {
        id: 7,
        questionText: `What is ${numberEleven} - ${numberTwelve}?`,
        answerOptions: [
            { answerText: `${numberEleven - numberTwelve + 1}`, isCorrect: false },
            { answerText: `${numberEleven - numberTwelve}`, isCorrect: true },
            { answerText: `${numberEleven - numberTwelve + 3}`, isCorrect: false },
            { answerText: `${numberEleven - numberTwelve + 5}`, isCorrect: false },
        ],
    },
    {
        id: 8,
        questionText: `What is ${numberThirteen} - ${numberFourteen}?`,
        answerOptions: [
            { answerText: `${numberThirteen - numberFourteen}`, isCorrect: true },
            { answerText: `${numberThirteen - numberFourteen + 2}`, isCorrect: false },
            { answerText: `${numberThirteen - numberFourteen + 4}`, isCorrect: false },
            { answerText: `${numberThirteen - numberFourteen + 6}`, isCorrect: false },
        ],
    },
    {
        id: 9,
        questionText: `What is ${numberFifteen} - ${numberSixteen}?`,
        answerOptions: [
            { answerText: `${numberFifteen - numberSixteen}`, isCorrect: true },
            { answerText: `${numberFifteen - numberSixteen + 3}`, isCorrect: false },
            { answerText: `${numberFifteen - numberSixteen + 6}`, isCorrect: false },
            { answerText: `${numberFifteen - numberSixteen + 4}`, isCorrect: false },
        ],
    },
    {
        id: 10,
        questionText: `What is ${numberSeventeen} - ${numberEighteen}?`,
        answerOptions: [
            { answerText: `${numberSeventeen - numberEighteen + 4}`, isCorrect: false },
            { answerText: `${numberSeventeen - numberEighteen}`, isCorrect: true },
            { answerText: `${numberSeventeen - numberEighteen + 2}`, isCorrect: false },
            { answerText: `${numberSeventeen - numberEighteen + 6}`, isCorrect: false },
        ],
    }
];