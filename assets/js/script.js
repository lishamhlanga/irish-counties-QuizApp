
//declare the UI element's
const ul = document.getElementById('ul');
const nextButton = document.getElementById('btnNext');
const queArea = document.getElementById('questionArea');
const opt1 = document.getElementById('opt1');
const opt2 = document.getElementById('opt2');
const opt3 = document.getElementById('opt3');
const opt4 = document.getElementById('opt4');
const restartBtn = document.getElementById('btnRestart');

//create object called app control our app( contain attributes and variables
let app = {
  question: [{
      que: 'Which of the following is a county',
      ansSelect: ['Green Castle', 'Buncrana', 'Donegal', 'Clomany'],
      answer: 3
    },
    {
      que: 'Complete the sentence .... is a big county',
      ansSelect: ['Blackrock', 'Dublin', 'Tramore', 'Brandon'],
      answer: 2
    },
    {
      que: 'Cork belong to which Province',
      ansSelect: ['Blackrock', 'Dublin', 'Tramore', 'Brandon'],
      answer: 1
    },
    {
      que: 'Leinster has one of these counties except',
      ansSelect: ['Carlow', 'Dublin', 'Kildare', 'Clare'],
      answer: 4
    },
    {
      que: 'Complete the sentence .... is a big county',
      ansSelect: ['Blackrock', 'Dublin', 'Tramore', 'Brandon'],
      answer: 3
    },
    {
      que: 'Find the sentence .... is a big county',
      ansSelect: ['Blackrock', 'Dublin', 'Tramore', 'Brandon'],
      answer: 1
    },
    {
      que: 'Solve the sentence .... is a big county',
      ansSelect: ['Blackrock', 'Dublin', 'Tramore', 'Brandon'],
      answer: 2
    },
    {
      que: 'Multiply  the sentence .... is a big county',
      ansSelect: ['Blackrock', 'Dublin', 'Tramore', 'Brandon'],
      answer: 3
    },
    {
      que: 'Remove the sentence .... is a big county',
      ansSelect: ['Blackrock', 'Dublin', 'Tramore', 'Brandon'],
      answer: 1
    },
    {
      que: 'Decide the sentence .... is a big county',
      ansSelect: ['Blackrock', 'Dublin', 'Tramore', 'Brandon'],
      answer: 3
    },
    {
      que: 'Complete the sentence .... is a big county',
      ansSelect: ['Blackrock', 'Dublin', 'Tramore', 'Brandon'],
      answer: 2
    },
    {
      que: 'Complete the sentence .... is a big county',
      ansSelect: ['Blackrock', 'Dublin', 'Tramore', 'Brandon'],
      answer: 2
    },
    {
      que: 'Complete the sentence .... is a big county',
      ansSelect: ['Blackrock', 'Dublin', 'Tramore', 'Brandon'],
      answer: 1
    },
    {
      que: 'Complete the sentence .... is a big county',
      ansSelect: ['Blackrock', 'Dublin', 'Tramore', 'Brandon'],
      answer: 3
    },
    {
      que: 'Complete the sentence .... is a big county',
      ansSelect: ['Blackrock', 'Dublin', 'Tramore', 'Brandon'],
      answer: 1
    },
    {
      que: 'Complete the sentence .... is a big county',
      ansSelect: ['Blackrock', 'Dublin', 'Tramore', 'Brandon'],
      answer: 3
    },
    {
      que: 'Which is the odd one out...',
      ansSelect: ['Blackrock', 'Dublin', 'Tramore', 'Brandon'],
      answer: 2
    },
    {
      que: 'Which is the odd one out',
      ansSelect: ['Blackrock', 'Dublin', 'Tramore', 'Brandon'],
      answer: 2
    },

  ],
  index: 0,
  //take index and select the question of that UI and load it up
  load: function () {
    if (this.index <= this.question.length - 1) {
      queArea.innerHTML = this.index + 1 + ". " + this.question[this.index].que;
      opt1.innerHTML = this.question[this.index].ansSelect[0];
      opt2.innerHTML = this.question[this.index].ansSelect[1];
      opt3.innerHTML = this.question[this.index].ansSelect[2];
      opt4.innerHTML = this.question[this.index].ansSelect[3];
    } else {
      queArea.innerHTML = "Quiz Completed! Thank you";
      ul.style.display = "none";
      nextButton.style.display = "none";
      restartBtn.style.display = "inline";
    }
  },
  next: function () {
    this.index++;
    this.load();
  },

  //apply green bacground if correct
  check: function (queEle) {
    let id = queEle.id.split('');
    if (id[id.length - 1] == this.question[this.index].answer) {
      this.score++;
      queEle.className = "correct";
      alert("Hey! You got it right!");
      this.scoreArea();
    } else {
      queEle.className = "wrong";
      alert("Hey! sorry wrong answer try next time");
    }
  },
  //look all the children and prevent click
  preventClick: function () {
    for (let i = 0; i < ul.children.length; i++) {
      ul.children[i].style.pointerEvents = "none";
    }
  },
  allowClick: function () {
    for (let i = 0; i < ul.children.length; i++) {
      ul.children[i].style.pointerEvents = "auto";
      ul.children[i].className = ''
    }
  },
  //initial score is 0 and when answered correct increase score by 1
  score: 0,
  //display the score relative to the total number of questions
  scoreArea: function () {
    scoreArea.innerHTML = this.score + "/" + this.question.length;
  }
}
// window load when the app starts
window.load = app.load();
// function called when an option is clicked
function button(queEle) {
  app.check(queEle);
  app.preventClick();
}
//call upon the index and load next question
function next() {
  app.next();
  app.allowClick();
}
// restart button visible after completion of quiz and reloads app
function restart() {
  app.index = 0;
  if (document.getElementsByClassName('wrong').length) {
    document.getElementsByClassName('wrong')[0].classList.remove('wrong');
  }
  if (document.getElementsByClassName('correct').length) {
    document.getElementsByClassName('correct')[0].classList.remove('correct');
  }
  score = 0;
  app.load();
  ul.style.display = "block";
  nextButton.style.display = "initial";
  restartBtn.style.display = "none";
}
