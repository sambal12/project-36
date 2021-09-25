class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("").attribute("placeholder", "Enter your name");
    this.input2 = createInput("").attribute("placeholder", "Enter Correct Option No..");;
    this.button = createButton('Submit');
    this.question = createElement('h3');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');
    this.message = createElement("h2")
    this.message2= createElement("h2")
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.message.hide();
  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(450, 0);
    
    
    
    // this.question("Question:- What starts and ends with the letter ‘E’, but has only one letter? " );
    // this.html("Question:- What starts and ends with the letter ‘E’, but has only one letter? " );
    this.question.html("Question:- What starts and ends with the letter ‘E’, but has only one letter? " );
    // question.html("Question:- What starts and ends with the letter ‘E’, but has only one letter? " );

    this.question.position(250, 80);
  
    this.option1.html("1: Everyone " );
    this.option1.position(250, 100);
    this.option2.html("2: Envelope" );
    this.option2.position(250, 120);
    this.option3.html("3: Estimate " );
    this.option3.position(250, 140);
    this.option4.html("4: Example" );
    this.option4.position(250, 160);

    this.input1.position(250, 230);
    this.input2.position(450, 230);
    this.button.position(390, 300);

    this.button.mousePressed(()=>{
      
       this.message.html( ` Thank you, ${this.input1.value()} Your answer has been submitted`);
      this.message.position(450, 350);
      this.message2.html("The correct answer is ENVELOPE");
      this.message2.position(450, 390);

      // this.message.html("Thank You, Your Answer Has Been Submitted");
      // this.message.position();

      // this.message("Thank You, Your Answer Has Been Submitted");
      // this.message(350, 350);

      // this.message.html("Thank You, Your Answer Has Been Submitted");
      // this.message.position(350);


    });
  }
}
