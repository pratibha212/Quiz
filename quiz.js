const ques=document.querySelector(".ques")
const radios = document.querySelectorAll(".option")
const labels = document.querySelectorAll("label")

const questions = [
    {
      q: "2+2",
      a: 4,
      options: [5, 4, 3, 2],
    },
    {
      q: "2*2*0",
      a: 0,
      options: [22, 4, 0, 2],
    },
    {
      q: "3+3-3",
      a: 3,
      options: [9, 3, 33, 333],
    },
    {
      q: "4*4/2",
      a: 8,
      options: [8, 16,4,44],
    },
  ];
  let questionNumber = 1;
  ques.innerHTML=questions[0].q
  changeSelection(); 
  checkRadio()

  let Inter = setInterval(()=>{
  if( questionNumber === questions.length){
    clearInterval(Inter)
  

  }
   else{
  ques.innerHTML=questions[questionNumber].q
  questionNumber++
  changeSelection()
  checkRadio()
  }
  },1000)

  function changeSelection (){
    for(i=0; i<questions.length; i++){
        radios[i].value= questions[questionNumber-1].options[i]
    }
    for(i=0; i<questions.length; i++){
        labels[i].innerHTML = questions[questionNumber-1].options[i]
    }

  }
  function checkRadio(){
    // if(radios===checked)radios=false
    for(i=0;i<radios.length;i++){
      if(radios[i].checked===true){
        radios[i].checked=false;
      }
    }
  }