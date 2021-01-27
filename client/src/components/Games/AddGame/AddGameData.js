const numberOne = Math.round(Math.random() * 5);
const numberTwo = numberOne;
const correctAnswerOne = numberOne + numberTwo;
const optionOne = correctAnswerOne + 2;
const optionTwo = correctAnswerOne + 1;
const optionThree = correctAnswerOne + 3;
export const questions = [
    {
        id: 1,
        questionText: `What is ${numberOne} + ${numberTwo}?`,
        answerOptions: [
            { answerText: `${correctAnswerOne}`, isCorrect: true },
            { answerText: `${optionOne}`, isCorrect: false },
            { answerText: `${optionTwo}`, isCorrect: false },
            { answerText: `${optionThree}`, isCorrect: false },
        ],
    },
    {
        id: 2,
        questionText: `What is ${numberOne + 1} + ${numberTwo + 2}?`,
        answerOptions: [
            { answerText: `${numberOne + numberTwo + 1}`, isCorrect: false },
            { answerText: `${numberOne + numberTwo + 6}`, isCorrect: false },
            { answerText: `${numberOne + numberTwo + 3}`, isCorrect: true },
            { answerText: `${numberOne + numberTwo + 2}`, isCorrect: false },
        ],
    },
    {
        id: 3,
        questionText: `What is ${numberOne + 2} + ${numberTwo + 1}?`,
        answerOptions: [
            { answerText: `${numberOne + numberTwo + 3}`, isCorrect: true },
            { answerText: `${numberOne + numberTwo + 4}`, isCorrect: false },
            { answerText: `${numberOne + numberTwo + 1}`, isCorrect: false },
            { answerText: `${numberOne + numberTwo + 2}`, isCorrect: false },
        ],
    },
    {
        id: 4,
        questionText: `What is ${numberOne + 3} + ${numberTwo + 4}?`,
        answerOptions: [
            { answerText: `${numberOne + numberTwo + 4}`, isCorrect: false },
            { answerText: `${numberOne + numberTwo + 2}`, isCorrect: false },
            { answerText: `${numberOne + numberTwo + 6}`, isCorrect: false },
            { answerText: `${numberOne + numberTwo + 7}`, isCorrect: true },
        ],
    },
    {
        id: 5,
        questionText: `What is ${numberOne} + ${numberTwo + 3}?`,
        answerOptions: [
            { answerText: `${numberOne + numberTwo + 2}`, isCorrect: false },
            { answerText: `${numberOne + numberTwo + 1}`, isCorrect: false },
            { answerText: `${numberOne + numberTwo + 3}`, isCorrect: true },
            { answerText: `${numberOne + numberTwo + 5}`, isCorrect: false },
        ],
    },
    {
        id: 6,
        questionText: `What is ${numberOne + 5} + ${numberTwo}?`,
        answerOptions: [
            { answerText: `${numberOne + numberTwo}`, isCorrect: false },
            { answerText: `${numberOne + numberTwo + 2}`, isCorrect: false },
            { answerText: `${numberOne + numberTwo + 5}`, isCorrect: true },
            { answerText: `${numberOne + numberTwo + 3}`, isCorrect: false },
        ],
    },
    {
        id: 7,
        questionText: `What is ${numberOne + 3} + ${numberTwo + 2}?`,
        answerOptions: [
            { answerText: `${numberOne + numberTwo + 1}`, isCorrect: false },
            { answerText: `${numberOne + numberTwo + 5}`, isCorrect: true },
            { answerText: `${numberOne + numberTwo + 3}`, isCorrect: false },
            { answerText: `${numberOne + numberTwo + 7}`, isCorrect: false },
        ],
    },
    {
        id: 8,
        questionText: `What is ${numberOne + 4} + ${numberOne + 1}?`,
        answerOptions: [
            { answerText: `${numberOne + numberOne + 5}`, isCorrect: true },
            { answerText: `${numberOne + numberOne + 1}`, isCorrect: false },
            { answerText: `${numberOne + numberOne + 3}`, isCorrect: false },
            { answerText: `${numberOne + numberOne + 4}`, isCorrect: false },
        ],
    },
    {
        id: 9,
        questionText: `What is ${numberOne + 2} + ${numberOne + 4}?`,
        answerOptions: [
            { answerText: `${numberOne + numberOne + 6}`, isCorrect: true },
            { answerText: `${numberOne + numberOne}`, isCorrect: false },
            { answerText: `${numberOne + numberOne + 1}`, isCorrect: false },
            { answerText: `${numberOne + numberOne + 3}`, isCorrect: false },
        ],
    },
    {
        id: 10,
        questionText: `What is ${numberOne + 1} + ${numberOne + 3}?`,
        answerOptions: [
            { answerText: `${numberOne + numberOne + 1}`, isCorrect: false },
            { answerText: `${numberOne + numberOne + 4}`, isCorrect: true },
            { answerText: `${numberOne + numberOne + 3}`, isCorrect: false },
            { answerText: `${numberOne + numberOne + 2}`, isCorrect: false },
        ],
    }
];