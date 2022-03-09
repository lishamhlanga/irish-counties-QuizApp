
//declare the UI elememts
const ul = document.getElementById('ul');
const nextButton = document.getElementById('btnNext');
const quizbox = document.getElementById('questionArea');
const opt1 = document.getElementById('opt1');
const opt2 = document.getElementById('opt2');
const opt3 = document.getElementById('opt3');
const opt4 = document.getElementById('opt4');

//create object called app ( contain attributes and variables)
let app = {
    questions: [{
        q: 'Which of the following is a county',
        options: ['Green Castle', 'Buncrana', 'Donegal', 'Clomany'],
        answer: 3
      },
      {
        q: 'Complete the sentence .... is a big county',
        options: ['Blackrock', 'Dublin', 'Tramore', 'Brandon'],
        answer: 2
      },
      {
      q: 'Cork belong to which Province',
      options: ['Blackrock', 'Dublin', 'Tramore', 'Brandon'],
      answer: 1
    },
    {
      q: 'Leinster has one of these counties except',
      options: ['Carlow', 'Dublin', 'Kildare', 'Clare'],
      answer: 4
    },
    {
      q: 'Complete the sentence .... is a big county',
      options: ['Blackrock', 'Dublin', 'Tramore', 'Brandon'],
      answer: 3
    },
    {
      q: 'Find the sentence .... is a big county',
      options: ['Blackrock', 'Dublin', 'Tramore', 'Brandon'],
      answer: 1
    },
    {
      q: 'Solve the sentence .... is a big county',
      options: ['Blackrock', 'Dublin', 'Tramore', 'Brandon'],
      answer: 2
    },
    {
      q: 'Multiply  the sentence .... is a big county',
      options: ['Blackrock', 'Dublin', 'Tramore', 'Brandon'],
      answer: 3
    },
    {
      q: 'Remove the sentence .... is a big county',
      options: ['Blackrock', 'Dublin', 'Tramore', 'Brandon'],
      answer: 1
    },
    {
      q: 'Decide the sentence .... is a big county',
      options: ['Blackrock', 'Dublin', 'Tramore', 'Brandon'],
      answer: 3
    },
    {
      q: 'Complete the sentence .... is a big county',
      options: ['Blackrock', 'Dublin', 'Tramore', 'Brandon'],
      answer: 2
    },
    {
      q: 'Complete the sentence .... is a big county',
      options: ['Blackrock', 'Dublin', 'Tramore', 'Brandon'],
      answer: 2
    },
    {
      q: 'Complete the sentence .... is a big county',
      options: ['Blackrock', 'Dublin', 'Tramore', 'Brandon'],
      answer: 1
    },
    {
      q: 'Complete the sentence .... is a big county',
      options: ['Blackrock', 'Dublin', 'Tramore', 'Brandon'],
      answer: 3
    },
    {
      q: 'Complete the sentence .... is a big county',
      options: ['Blackrock', 'Dublin', 'Tramore', 'Brandon'],
      answer: 1
    },
    {
      q: 'Complete the sentence .... is a big county',
      options: ['Blackrock', 'Dublin', 'Tramore', 'Brandon'],
      answer: 3
    },
    {
      q: 'Which is the odd one out...',
      options: ['Blackrock', 'Dublin', 'Tramore', 'Brandon'],
      answer: 2
    },
      {
        q: 'Which is the odd one out',
        options: ['Blackrock', 'Dublin', 'Tramore', 'Brandon'],
        answer: 2
      },
  
    ],
    index: 0,