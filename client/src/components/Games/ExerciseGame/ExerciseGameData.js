const numberOne = Math.abs(Math.round(Math.random() * 5));
const numberTwo = Math.abs(numberOne);
const correctAnswerOne = numberOne + numberTwo;
const optionOne = correctAnswerOne + 2;
const optionTwo = correctAnswerOne + 1;
const optionThree = correctAnswerOne + 3;
export const questions = [
    {
        id: 1,
        questionText: 'March 10 steps',
        answerOptions: [
            { answerText: 'Done', isCorrect: true }
        ],
    },
    {
        id: 2,
        questionText: 'Jump 8 times',
        answerOptions: [
            { answerText: 'Done', isCorrect: true }
        ],
    },
    {
        id: 3,
        questionText: 'Wiggle for 10 seconds',
        answerOptions: [
            { answerText: 'Done', isCorrect: true }
        ],
    },
    {
        id: 4,
        questionText: 'Hop 9 times',
        answerOptions: [
            { answerText: 'Done', isCorrect: true }
        ],
    },
    {
        id: 5,
        questionText: '3 Squats',
        answerOptions: [
            { answerText: 'Done', isCorrect: true }
        ],
    }
];