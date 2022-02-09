
const user={
    gender: "",
    firstName: "",
    lastName: "",
}

function setup() {
    frameRate(60);
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.style('z-index', '-1');
    canvas.style('position', 'fixed');
    canvas.style('top', '0');
}

function draw() {
    //background(0, 50);
    background(0);
    newCursor();
    fill(255);
    textSize(30);
    fill(200);
    text("User information:", 100, 100)
    textSize(20);
    
    rect(100,150,300,200);
    fill(0);
    rect(140, 190,10,10);
    rect(140, 240,10,10);
    rect(140, 290,10,10);
    text(user.gender,180,200);
    text(user.firstName,180,250);
    text(user.lastName,180,300);
    

    /*
     gender: data.results[0].gender,
        firstName: data.results[0].name.first,
        lastName: data.results[0].name.last,
        */
}

function mouseClicked(){
    //bird.flyUpward();
    //const serverData=fetch("https://dog.ceo/api/breeds/image/random");
    console.log('getUser'); 
    getUserData();
    //console.log(serverData);
    
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function newCursor() {
    noStroke();
    fill(255);
    ellipse(pmouseX, pmouseY, 10, 10);
}
async function getUserData() {
    //request user data from server
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json(); 

    user.gender = data.results[0].gender;
    user.firstName = data.results[0].name.first;
    user.lastName = data.results[0].name.last;
    


}