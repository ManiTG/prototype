class Teacherform{
  constructor() {
     this.button3 = createButton('Login');
     this.input3 = createInput("User Name");
     this.input4 = createInput("Password");
     this.title = createElement('h4');
            
    }

    display(){
      form.hide();
      this.button3.position(displayWidth/2-50,displayHeight/2);
      this.input3.position(displayWidth/2-100,displayHeight-650);
      this.input4.position(displayWidth/2-100,displayHeight-600);
       this.title.html("Teacher  Login Page");
       this.title.position(displayWidth/2-50,50)
    }
    }