const answers = {
    animal: 'Liger',
    Planet: 'Mars',
    plant: 'Photosynthesis',
    race: 'car',  
    sun: 'False' 
};

const next1 = document.getElementById('next1');
next1.addEventListener('click', () => showQuestion(2));

const hint1 = document.getElementById('hint1');
const p1 = document.getElementById('ans1');
hint1.addEventListener('click', () => {
    p1.textContent = 'It is a hybrid';
});

const prev2 = document.getElementById('prev2');
prev2.addEventListener('click', () => showQuestion(1));

const hint2 = document.getElementById('hint2');
const p2 = document.getElementById('ans2');
hint2.addEventListener('click', () => {
    p2.textContent = 'It is present after our home planet';
});

const hint3 = document.getElementById('hint3');
const p3 = document.getElementById('ans3');
hint3.addEventListener('click',(event)=> {
    p3.textContent = 'It involves the use of sunlight to convert carbon dioxide and water into glucose and oxygen';
});

const hint4 = document.getElementById('hint4');
const p4 = document.getElementById('ans4');
hint4.addEventListener('click',(event)=> {
    p4.textContent = 'It has large, complex front and rear wings, sidepods, and a low, wide, and sleek profile designed to maximize downforce and minimize drag';
});

const hint5 = document.getElementById('hint5');
const p5 = document.getElementById('ans5');
hint5.addEventListener('click',(event)=> {
    p5.textContent = 'Think about the Earths rotation and where you would typically see the sun in the morning.'
});

const next2 = document.getElementById('next2');
next2.addEventListener('click', () => showQuestion(3));

const prev3 = document.getElementById('prev3');
prev3.addEventListener('click', () => showQuestion(2));

const next3 = document.getElementById('next3');
next3.addEventListener('click', () => showQuestion(4));

const prev4 = document.getElementById('prev4');
prev4.addEventListener('click', () => showQuestion(3));

const next4 = document.getElementById('next4');
next4.addEventListener('click', () => showQuestion(5));

const prev5 = document.getElementById('prev5');
prev5.addEventListener('click', () => showQuestion(4));

let timers = {};

function startTimer(questionId, duration) {
    const timerDisplay = document.getElementById(`timerDisplay${questionId}`);
    let timeLeft = duration;

    if (timers[questionId]) {
        clearInterval(timers[questionId]);
    }


    timers[questionId] = setInterval(function() {
        if (timeLeft <= 0) {
            clearInterval(timers[questionId]);

            const nextButton = document.getElementById(`next${questionId}`);
            if (nextButton) nextButton.click();
        } else {
            timerDisplay.textContent = timeLeft;
            timeLeft -= 1;
        }
    }, 1000);
}

function showQuestion(questionId) {
    document.querySelectorAll('.box').forEach(box => {
        box.style.display = 'none';
    });

    const questionBox = document.getElementById(`question${questionId}`);
    questionBox.style.display = 'block';
    startTimer(questionId, 60); 
}

function score() {
    let count = 0;
    for (const [question, correctAnswer] of Object.entries(answers)) {
        const selectedAnswer = document.querySelector(`input[name="${question}"]:checked`);
        console.log(`Question: ${question}, Selected: ${selectedAnswer ? selectedAnswer.value : 'None'}, Correct: ${correctAnswer}`);
        if (selectedAnswer && selectedAnswer.value === correctAnswer) {
            count++;
        }
    }
    return count;
}

function displayScore() {
    const finalScore = score();
    document.getElementById('result').textContent = `You scored ${finalScore} out of 5`;
    document.querySelectorAll('.box').forEach(box => box.style.display = 'none');
    document.getElementById('result').style.display = 'block';
}

document.addEventListener('DOMContentLoaded', () => {
    const submit = document.getElementById('submit');
    if (submit) {
        submit.addEventListener('click', displayScore);
    }
    showQuestion(1);
});
