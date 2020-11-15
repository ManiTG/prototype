class Form {

    constructor() {
      this.button = createButton('Login as Teacher');
      this.title = createElement('h4');
      this.button1=createButton('Login as Student');
      this.image1=loadImage("js/boy student.png");
      this.image2=loadImage("js/teacher-girl.png");
    }
    hide(){
      this.button.hide();
      this.title.hide();
      this.button1.hide();
    }
    
    display(){
      this.title.html("Prototype");
      this.title.position(displayWidth/2 - 50, 0);
      this.button.position(displayWidth/2-5, displayHeight/2);
      this.button1.position(displayWidth/2-200,displayHeight/2);
      image(this.image1,displayWidth/2,displayHeight/2);
     image(this.image2,displayWidth/2,displayHeight/2);
      this.button.mousePressed(()=>{
        var teacherform= new Teacherform();
        teacherform.display();
      });
  this.button1.mousePressed(()=>{
   var studentform = new Studentform();
  studentform.display();
  

  });
  }
  }
  