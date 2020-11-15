class Studentform{
    constructor() {
        this.button2 = createButton('Login');
        this.input = createInput("User Name");
        this.input2 = createInput("Password");
        this.title = createElement('h4');
        
}

display(){
 form.hide();
this.button2.position(displayWidth/2-50,displayHeight/2);
this.input.position(displayWidth/2-100,displayHeight-650);
this.input2.position(displayWidth/2-100,displayHeight-600);
 this.title.html("Student Login Page");
 this.title.position(displayWidth/2-50,50)
 
}
}