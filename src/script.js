/********************************************************************************************************* */
/*export var player = ["Ally","Kath","Jon","Ericka","Player5","Player6","Player7","hatdog"];
export var score = [54, 323, 2323, 242, 435, 454,453, 1];
export var playername = sessionStorage.getItem("sent");

if(playername!=null){
    player.push(playername);
    score.push(2000);   
}
var indexCurr = player.indexOf(playername);
document.getElementById("username").innerHTML = player[indexCurr];



export function btnAsk(){
    score[indexCurr] += 100;
    leaderboard();
    document.getElementById("btnAsk").disabled = true;
    const cooldown = setTimeout(cdAsk, 60000);
}

export function cdAsk(){
    document.getElementById("btnAsk").disabled = false;
}

export function btnRecite(){
    score[indexCurr] += 500;
    leaderboard();
}

export function btnGive(){
    score[indexCurr] += 500;
    leaderboard();
}

export function btnAskStud(){
    var i = Math.floor(Math.random() * player.length);
    leaderboard();
    document.getElementById("chosenStudent").innerHTML = player[i];
    document.getElementById("bulletin").style.display = "block";
    document.querySelector('.prof').style.display = 'none';
    
    sessionStorage.setItem("chosen", i);
}

export function btnEnd(){
    var i = Math.floor(Math.random() * player.length);
    leaderboard();
    document.getElementById("chosenStudent1").innerHTML = player[i];
    document.getElementById("bulletin1").style.display = "block";
    document.querySelector('.prof').style.top = '30%';
    document.getElementById("btnProf").style.display = "none";
    sessionStorage.setItem("chosen", i);
}

export function btnCorrect(){
    var chosen = sessionStorage.getItem("chosen");
    document.getElementById("bulletin").style.display = "none";
    document.querySelector('.prof').style.top = '60%';
    document.querySelector('.prof').style.display = 'block';
    score[chosen] += 500;
    leaderboard();
}

export function btnWrong(){
    
    document.getElementById("bulletin").style.display = "none";
    document.querySelector('.prof').style.top = '60%';
    document.querySelector('.prof').style.display = 'block';
    
}
export function btnFinished(){
    var chosen = sessionStorage.getItem("chosen");
    document.getElementById("btnEnd").style.display = "none";
    document.getElementById("bulletin1").style.display = "none";
    document.querySelector('.prof').style.top = '60%';
    document.getElementById("btnFinished").style.display = "none";
    document.getElementById("bulletin2").style.display = "block";

    score[chosen] += 1500;
    leaderboard();
}

export function leaderboard(){
    var className = sessionStorage.getItem("className");
    if(className != null){
        var classOn = document.getElementById("lblClass");
        classOn.innerHTML = "On going session: " + className; 
    }
    
    var table = document.getElementById("myTable");   
    var k = 0;

    for(var i = 1; i < table.rows.length; i++, k++){
    
        var objCells = table.rows.item(i).cells;
    
        objCells.item(1).innerHTML = player[k];
        objCells.item(2).innerHTML = score[k];      
        
    }
    
    var additionalRow = player.length - table.rows.length;
    
    for(var x = table.rows.length; x < player.length + 5; x++, k++){
    
        var row = table.insertRow(x);
        var objCells = table.rows.item(i).cells;
    
        row.insertCell(0).innerHTML = x;
        row.insertCell(1).innerHTML = player[k];
        row.insertCell(2).innerHTML = score[k];
    }
}
*/
/************************************************************************************************************ */
/*
function compare(a, b){
    if(a > b){
        return a;
    }
    else if(b > a){
        return b;
    }
}

function setting(){
    var className = document.getElementById("className").value;
    var code = document.getElementById("code").value;

    sessionStorage.setItem("className", className);
    sessionStorage.setItem("code", code);

    window.open("facultyLeaderboard.html");
}

function validate() {
    var code = document.getElementById("code").value;

    if(code =="user"){
        
        
        window.open("leaderboard.html");
        windown.close("code.html");
    }
    else{
        window.open("code.html")
    }
}

function validateStudentLogin() {
    var user = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;
    
   
    if(user =="user123" && pass == "pass123"){
        sessionStorage.setItem("sent", user);       
        window.open("code.html");
    }
    else{
            window.open("studentLogin.html");
    }
}

function validateFacultyLogin() {
    var user = document.getElementById("userFac").value;
    var pass = document.getElementById("passFac").value;

    if(user == "user@yahoo.com" && pass == "pass123"){
       
        window.open("setting.html");
    }
    else{
        
        window.open("facultyLogin.html");
    }
}



*/