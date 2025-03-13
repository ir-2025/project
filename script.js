const Questions = [
    {
        q: "Fill in the blank: Who was the last speaker at the March on Washington? _____.",
        a: [{text: "Rosa Parks.", isCorrect: false},
            {text: "Roy Wilkins.", isCorrect: false},
            {text: "A. Phillip Randolph.", isCorrect: false},
            {text: "Martin Luther King Jr.", isCorrect: true},
           ]
    },
    {
        q: "Fill in the blank: How long was the I have a dream speech?  _____.",
        a: [{text: "5 minutes.", isCorrect: false},
            {text: "17 minutes.", isCorrect: true},
            {text: "20 minutes.", isCorrect: false},
            {text: "45 minutes.", isCorrect: false},
           ]
        },
    {
        q: "Fill in the blank: Where was the I have a dream speech held? _____.",
        a: [{text: "California.", isCorrect: false},
            {text: "Georgia.", isCorrect: false},
            {text: "Washington D.C.", isCorrect: true},
            {text: "Texas.", isCorrect: false},
           ]
    },
    {
        q: "Fill in the blank: How many people attended the march on washington? _____.",
        a: [{text: "50,000.", isCorrect: false},
            {text: "100,000.", isCorrect: false},
            {text: "250,000.", isCorrect: true},
            {text: "75,000.", isCorrect: false},
           ]
    },
    {
        q: "Fill in the blank: How long did the Civil Rights Movement last? _____.",
        a: [{text: "1928 - 1935.", isCorrect: false},
            {text: "1954 - 1968.", isCorrect: true},
            {text: "1895 - 1900.", isCorrect: false},
            {text: "2005 - 2010.", isCorrect: false},
           ]
    },

]; 

let currQuestion = 0;
let score = 0;

function loadQues() 
{
    const question = document.getElementById("ques");
    const opt = document.getElementById("opt");

    question.textContent = Questions[currQuestion].q;
    opt.innerHTML = "";

    for ( let i = 0; i < Questions[currQuestion].a.length; i++ )
    {
        const choicesDiv = document.createElement("div");
        const choice = document.createElement("input");
        const choiceLabel = document.createElement("label");

        choice.type = "radio";
        choice.name = "answer";
        choice.value = i;

        choiceLabel.textContent = Questions[currQuestion].a[i].text;

        choicesDiv.appendChild(choice);
        choicesDiv.appendChild(choiceLabel);
        opt.appendChild(choicesDiv);
    }
}

loadQues();

function checkAns()
{
    const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);

    if ( Questions[currQuestion].a[selectedAns].isCorrect  )
    {
        score++;
        console.log("Correct");
        nextQuestion();
    }
    else
    {
        nextQuestion();
    }
}

function loadScore() 
{
    const totalScore = document.getElementById("score");
    totalScore.textContent = `You scored ${score} out of ${Questions.length}`;

}

function nextQuestion() 
{
    if (  currQuestion < Questions.length - 1  )
    {
        currQuestion++;
        loadQues();
    }
    else
    {
        document.getElementById("ques").remove();
        document.getElementById("opt").remove();
        document.getElementById("btn").remove();
        loadScore();
    }
}