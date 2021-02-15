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
            { answerText: `${numberOne + numberTwo}`, isCorrect: true, isChecked: `Correct` },
            { answerText: `${numberOne + numberTwo - 1}`, isCorrect: false, isChecked: `Incorrect` },
            { answerText: `${numberOne + numberTwo + 1}`, isCorrect: false, isChecked: `Incorrect` },
            { answerText: `${numberOne + numberTwo + 3}`, isCorrect: false, isChecked: `Incorrect` },
        ],
    },
    {
        id: 2,
        questionText: `What is ${numberThree} + ${numberFour}?`,
        answerOptions: [
            { answerText: `${numberThree + numberFour + 1}`, isCorrect: false, isChecked: `Incorrect` },
            { answerText: `${numberThree + numberFour - 1}`, isCorrect: false, isChecked: `Incorrect` },
            { answerText: `${numberThree + numberFour}`, isCorrect: true, isChecked: `Correct` },
            { answerText: `${numberThree + numberFour + 2}`, isCorrect: false, isChecked: `Incorrect` },
        ],
    },
    {
        id: 3,
        questionText: `What is ${numberFive} + ${numberSix}?`,
        answerOptions: [
            { answerText: `${numberFive + numberSix}`, isCorrect: true, isChecked: `Correct` },
            { answerText: `${numberFive + numberSix + 4}`, isCorrect: false, isChecked: `Incorrect` },
            { answerText: `${numberFive + numberSix + 1}`, isCorrect: false, isChecked: `Incorrect` },
            { answerText: `${numberFive + numberSix + 2}`, isCorrect: false, isChecked: `Incorrect` },
        ],
    },
    {
        id: 4,
        questionText: `What is ${numberSeven} + ${numberEight}?`,
        answerOptions: [
            { answerText: `${numberSeven + numberEight + 1}`, isCorrect: false, isChecked: `Incorrect` },
            { answerText: `${numberSeven + numberEight + 2}`, isCorrect: false, isChecked: `Incorrect` },
            { answerText: `${numberSeven + numberEight + 3}`, isCorrect: false, isChecked: `Incorrect` },
            { answerText: `${numberSeven + numberEight}`, isCorrect: true, isChecked: `Correct` },
        ],
    },
    {
        id: 5,
        questionText: `What is ${numberNine} + ${numberTen}?`,
        answerOptions: [
            { answerText: `${numberNine + numberTen + 2}`, isCorrect: false, isChecked: `Incorrect` },
            { answerText: `${numberNine + numberTen + 1}`, isCorrect: false, isChecked: `Incorrect` },
            { answerText: `${numberNine + numberTen}`, isCorrect: true, isChecked: `Correct` },
            { answerText: `${numberNine + numberTen + 5}`, isCorrect: false, isChecked: `Incorrect` },
        ],
    },
    {
        id: 6,
        questionText: `What is ${numberEleven} + ${numberTwelve}?`,
        answerOptions: [
            { answerText: `${numberEleven + numberTwelve + 1}`, isCorrect: false, isChecked: `Incorrect` },
            { answerText: `${numberEleven + numberTwelve + 2}`, isCorrect: false, isChecked: `Incorrect` },
            { answerText: `${numberEleven + numberTwelve}`, isCorrect: true, isChecked: `Correct` },
            { answerText: `${numberEleven + numberTwelve + 3}`, isCorrect: false, isChecked: `Incorrect` },
        ],
    },
    {
        id: 7,
        questionText: `What is ${numberThirteen} + ${numberFourteen}?`,
        answerOptions: [
            { answerText: `${numberThirteen + numberFourteen + 1}`, isCorrect: false, isChecked: `Incorrect` },
            { answerText: `${numberThirteen + numberFourteen}`, isCorrect: true, isChecked: `Correct` },
            { answerText: `${numberThirteen + numberFourteen + 3}`, isCorrect: false, isChecked: `Incorrect` },
            { answerText: `${numberThirteen + numberFourteen + 7}`, isCorrect: false, isChecked: `Incorrect` },
        ],
    },
    {
        id: 8,
        questionText: `What is ${numberFifteen} + ${numberSixteen}?`,
        answerOptions: [
            { answerText: `${numberFifteen + numberSixteen}`, isCorrect: true, isChecked: `Correct` },
            { answerText: `${numberFifteen + numberSixteen + 1}`, isCorrect: false, isChecked: `Incorrect` },
            { answerText: `${numberFifteen + numberSixteen + 3}`, isCorrect: false, isChecked: `Incorrect` },
            { answerText: `${numberFifteen + numberSixteen + 4}`, isCorrect: false, isChecked: `Incorrect` },
        ],
    },
    {
        id: 9,
        questionText: `What is ${numberSeventeen} + ${numberEighteen}?`,
        answerOptions: [
            { answerText: `${numberSeventeen + numberEighteen}`, isCorrect: true, isChecked: `Correct` },
            { answerText: `${numberSeventeen + numberEighteen + 2}`, isCorrect: false, isChecked: `Incorrect` },
            { answerText: `${numberSeventeen + numberEighteen + 1}`, isCorrect: false, isChecked: `Incorrect` },
            { answerText: `${numberSeventeen + numberEighteen + 3}`, isCorrect: false, isChecked: `Incorrect` },
        ],
    },
    {
        id: 10,
        questionText: `What is ${numberNineteen} + ${numberTwenty}?`,
        answerOptions: [
            { answerText: `${numberNineteen + numberTwenty + 1}`, isCorrect: false, isChecked: `Incorrect` },
            { answerText: `${numberNineteen + numberTwenty}`, isCorrect: true, isChecked: `Correct` },
            { answerText: `${numberNineteen + numberTwenty + 3}`, isCorrect: false, isChecked: `Incorrect` },
            { answerText: `${numberNineteen + numberTwenty + 2}`, isCorrect: false, isChecked: `Incorrect` },
        ],
    }
];