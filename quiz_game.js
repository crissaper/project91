player1_login = localStorage.getItem("player1_login");
player2_login = localStorage.getItem("player2_login");

player1_score=0;
player2_score=0;

document.getElementById("player1_login").innerHTML=player1_login+":";
document.getElementById("player2_login").innerHTML=player2_login+":";
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="question turn-"+player1_login;
document.getElementById("player_answer").innerHTML="answer turn-"+player2_login;



function send(){
    number1 = document.getElementById("number1").value;
	number2 = document.getElementById("number2").value;
	actual_answer = parseInt(number1) * parseInt(number2);
    question_number = "<h4>" + number1 + " X "+ number2 +"</h4>";
    input_box = "<br>Answer : <input type='text' id='input_answer_output'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check_answer()'>Check</button>";
    row =  question_number + input_box + check_button ; 
    document.getElementById("output").innerHTML = row;
	document.getElementById("number1").value = "";
	document.getElementById("number2").value = "";   
}

question_turn="player1";
answer_turn="player2";

function check_answer(){
    get_answer_input=document.getElementById("input_answer_output").value;
     if(get_answer_input == actual_answer){
         if(answer_turn == "player1"){
             player1_score=player1_score+1;
             document.getElementById("player1_score").innerHTML= player1_score;
            
         }
         else{
            player2_score=player2_score+1;
            document.getElementById("player2_score").innerHTML= player2_score;
         }}

         if(question_turn=="player1"){
             question_turn="player2";
             document.getElementById("player_question").innerHTML=player2_login;

         }
         else{
             question_turn="player1";
             document.getElementById("player_question").innerHTML=player1_login;
             
         }

         if(answer_turn == "player1"){
           answer_turn="player2";
            document.getElementById("player_answer").innerHTML= player2_login;
           
        }
        else{
         answer_turn="player1";
           document.getElementById("player_answer").innerHTML= player1_login;
        }
     }  
    


