const quizData = [
    
    {
       question: "Em qual local da Ásia o português é língua oficial?",
        a: "Índia",
        b: "Filipinas",
        c: "Moçambique",
        d: "Macau",
        correct: "d", 
    },
    {
       question: "Júpiter e Plutão são os correlatos romanos de quais deuses gregos?",
        a: "Ares e Hermes",
        b: "Dionísio e Deméter",
        c: "Zeus e Hades",
        d: "Cronos e Apolo",
        correct: "c", 
    },
    {
        question: "\"It is six twenty\" ou \"twenty past six\". Que horas são em inglês?",
        a: "12:06",
        b: "6:20",
        c: "2:20",
        d: "6:02",
        correct: "b",
    },
    {
       question: "Qual a montanha mais alta do Brasil?",
        a: "Pico da Neblina",
        b: "Pico do Paraná",
        c: "Monte Roraima",
        d: "Pico da Bandeira",
        correct: "a", 
    }
    
];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>Você respondeu ${score}/${quizData.length} questões corretamente</h2>

           <button onclick="location.reload()">Responder novamente</button>
           `
       }
    }
})