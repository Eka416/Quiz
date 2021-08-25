class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
    this.input2 = createInput("Enter Your Answer Here...")

    

    this.button = createButton('Submit');
    //Create elements for One question (h3) and 4 options (h4)
    this.question = createElement('h3')
    this.option1 = createElement('h4')
    this.option2 = createElement('h4')
    this.option3 = createElement('h4')
    this.option4 = createElement('h4')


    this.message = createElement("h2")
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide()
     this.question.hide()
    this.option4.hide()
    this.option3.hide()
    this.option2.hide()
    this.option1.hide()
    //this.message.hide();
    //Add hide() for questions, options & input box


  }

  display(){
    this.title.html("My Quiz Game");
    this.title.position(350, 0);


    //Create html() and position() for each question, input and answers.
    this.question.html("What starts and ends with a E, but only has one letter.")
    this.question.position(250, 50);

    this.option1.html("1. Everyone")
    this.option2.html("2. Envelope")
    this.option3.html("3. Estimate")
    this.option4.html("4. Example")


    this.input2.position(500,280)
    this.input1.position(150, 280);

    this.option1.position(150,100)
    this.option2.position(150, 140);    
    this.option3.position(150,180)
    this.option4.position(150, 220);

    this.button.position(375, 350);

    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{
      this.hide()
      this.message.html("Thank You")
      this.message.position(375,175)

      
    })


  }
}
