const Questions = [
    {
        'que': 'HTML stands for',
        'a': 'HighText Machine Language',
        'b': 'HyperText and links Markup Language',
        'c': 'HyperText Markup Language',
        'd': 'None of these',
        'correct': 'c'
    },
    {
        'que': 'The correct sequence of HTML tags for starting a webpage is ',
        'a': 'Head, Title, HTML, body',
        'b': 'HTML, Body, Title, Head',
        'c': 'HTML, Head, Title, Body',
        'd': 'HTML, Head, Title, Body',
        'correct': 'd'
    },
    {
        'que': 'Which of the following tag is used for inserting the largest heading in HTML?',
        'a': '<h3>',
        'b': '<h1>',
        'c': '<h5>',
        'd': '<h6>',
        'correct': 'b'
    },
    {
        'que': 'Which of the following tag is used to insert a line-break in HTML?',
        'a': '<br>',
        'b': '<a>',
        'c': '<pre>',
        'd': '<b>',
        'correct': 'a'
    },
    {
        'que': 'How to create a hyperlink in HTML?',
        'a': '<a href = "www.javatpoint.com"> javaTpoint.com </a>',
        'b': '<a url = "www.javatpoint.com" javaTpoint.com /a>',
        'c': '<a link = "www.javatpoint.com"> javaTpoint.com </a>',
        'd': '<a> www.javatpoint.com <javaTpoint.com /a>',
        'correct': 'a'
    },
    {
        'que': 'How to create a checkbox in HTML?',
        'a': '<input type = "checkbox">',
        'b': '<input type = "button">',
        'c': '<checkbox>',
        'd': '<input type = "check">',
        'correct': 'a'
    },
    {
        'que': 'Which of the following tag is used to define options in a drop-down selection list?',
        'a': '<select>',
        'b': '<list>',
        'c': '<dropdown>',
        'd': '<option>',
        'correct': 'd'
    }
]
let index = 0;
let total = Questions.length;
let right = 0,
    wrong = 0;

const Quebox = document.getElementById("Quebox");
const optionInputs = document.querySelectorAll('.options')
const loadQuestion = () => {
    if (index === total){
        return endQuiz();
    }
    reset();
    const data = Questions[index];
    Quebox.innerText = ` ${index + 1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}

const submitQuiz = () => {
    const data = Questions[index];
    const ans = getAnswer()
    console.log(ans, data.correct)
    if (ans === data.correct){
     right++;
    }else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}
const getAnswer = () => {
    let answer;
    optionInputs.forEach(
        (input) => {
            if (input.checked) {
                answer = input.value;
            }
        }
    )
    return answer;
}
const reset = () => {
    optionInputs.forEach(
        (input) => {
            if (input.checked) {
                input.checked = false;
            }
        }
    )
}
const endQuiz = () => {
    document.getElementById("box").innerHTML = `
    <h3> Thank you for playing tha quiz </h3>
    <h2> ${right}/ ${total} are correct </h2>
    `
}
loadQuestion();