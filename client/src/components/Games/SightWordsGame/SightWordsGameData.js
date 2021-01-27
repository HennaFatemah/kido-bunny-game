const numberOne = Math.abs(Math.round(Math.random() * 5));
const numberTwo = Math.abs(numberOne);
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
        questionText: `What is ${numberOne + 3} + ${numberTwo + 1}?`,
        answerOptions: [
            { answerText: `${numberOne + numberTwo + 4}`, isCorrect: true },
            { answerText: `${numberOne + numberTwo + 3}`, isCorrect: false },
            { answerText: `${numberOne + numberTwo + 1}`, isCorrect: false },
            { answerText: `${numberOne + numberTwo + 2}`, isCorrect: false },
        ],
    },
    {
        id: 4,
        questionText: `What is ${Math.abs(numberOne - 1)} + ${numberTwo + 3}?`,
        answerOptions: [
            { answerText: `${Math.abs(numberOne - 1) + numberTwo + 4}`, isCorrect: false },
            { answerText: `${Math.abs(numberOne - 1) + numberTwo + 2}`, isCorrect: false },
            { answerText: `${Math.abs(numberOne - 1) + numberTwo + 1}`, isCorrect: false },
            { answerText: `${Math.abs(numberOne - 1) + numberTwo + 3}`, isCorrect: true },
        ],
    },
    {
        id: 5,
        questionText: `What is ${Math.abs(numberOne - 2)} + ${numberTwo + 3}?`,
        answerOptions: [
            { answerText: `${Math.abs(numberOne - 1) + numberTwo + 3}`, isCorrect: false },
            { answerText: `${Math.abs(numberOne - 3) + numberTwo + 3}`, isCorrect: false },
            { answerText: `${Math.abs(numberOne - 2) + numberTwo + 3}`, isCorrect: true },
            { answerText: `${Math.abs(numberOne - 4) + numberTwo + 3}`, isCorrect: false },
        ],
    },
    {
        id: 6,
        questionText: `What is ${Math.abs(numberOne - 3)} + ${numberTwo}?`,
        answerOptions: [
            { answerText: `${Math.abs(numberOne - 2) + numberTwo}`, isCorrect: false },
            { answerText: `${Math.abs(numberOne - 4) + numberTwo}`, isCorrect: false },
            { answerText: `${Math.abs(numberOne - 3) + numberTwo}`, isCorrect: true },
            { answerText: `${Math.abs(numberOne - 1) + numberTwo}`, isCorrect: false },
        ],
    },
    {
        id: 7,
        questionText: `What is ${Math.abs(numberOne - 1)} + ${Math.abs(numberTwo - 2)}?`,
        answerOptions: [
            { answerText: `${Math.abs(numberOne - 1) + Math.abs(numberTwo - 2) + 1}`, isCorrect: false },
            { answerText: `${Math.abs(numberOne - 1) + Math.abs(numberTwo - 2)}`, isCorrect: true },
            { answerText: `${Math.abs(numberOne - 1) + Math.abs(numberTwo - 2) + 3}`, isCorrect: false },
            { answerText: `${Math.abs(numberOne - 1) + Math.abs(numberTwo - 2) + 5}`, isCorrect: false },
        ],
    },
    {
        id: 8,
        questionText: `What is ${Math.abs(numberOne - 1)} + ${Math.abs(numberOne - 1)}?`,
        answerOptions: [
            { answerText: `${Math.abs(numberOne - 1) + Math.abs(numberOne - 1)}`, isCorrect: true },
            { answerText: `${Math.abs(numberOne - 2) + Math.abs(numberOne - 1)}`, isCorrect: false },
            { answerText: `${Math.abs(numberOne - 1) + Math.abs(numberOne - 3)}`, isCorrect: false },
            { answerText: `${Math.abs(numberOne) + Math.abs(numberOne - 1)}`, isCorrect: false },
        ],
    },
    {
        id: 9,
        questionText: `What is ${Math.abs(numberOne)} + ${Math.abs(numberOne - 3)}?`,
        answerOptions: [
            { answerText: `${Math.abs(numberOne - 3) + numberOne}`, isCorrect: true },
            { answerText: `${Math.abs(numberOne - 2) + numberOne}`, isCorrect: false },
            { answerText: `${Math.abs(numberOne - 1) + numberOne}`, isCorrect: false },
            { answerText: `${Math.abs(numberOne - 5) + numberOne}`, isCorrect: false },
        ],
    },
    {
        id: 10,
        questionText: `What is ${Math.abs(numberOne - 3)} + ${Math.abs(numberOne + 3)}?`,
        answerOptions: [
            { answerText: `${Math.abs(numberOne - 3) + Math.abs(numberOne + 1)}`, isCorrect: false },
            { answerText: `${Math.abs(numberOne - 3) + Math.abs(numberOne + 3)}`, isCorrect: true },
            { answerText: `${Math.abs(numberOne - 2) + Math.abs(numberOne + 1)}`, isCorrect: false },
            { answerText: `${Math.abs(numberOne - 3) + Math.abs(numberOne + 2)}`, isCorrect: false },
        ],
    }
];