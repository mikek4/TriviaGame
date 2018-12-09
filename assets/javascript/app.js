 var questions = ["1. Who is the best-selling musician of all time?", "2. What artist wrote the song 'In My Feelings'?", "3. According to Billboard, who sings the most popular christmas single?", "4. Who sings the hit single 'Breathin'?", "5. What was the band known as Linkin Park originally called?"];
 
 var answer1 = ["The Beatles", "Michael Jackson", "Madonna", "Kenny Rogers"];
 var answer2 = ["Lil Yachty", "Jay-Z", "Drake", "Lil' Baby"];
 var answer3 = ["Brenda Lee", "Nat King Cole", "Bing Crosby", "Mariah Carey"];
 var answer4 = ["Ariana Grande", "Camilla Cabello", "Cardi B", "Beyonce"];
 var answer5 = ["Meteora", "Xero", "Hybrid Theory", "Reanimators"];    


 var correctAnswers = [0, 2, 3, 0, 1];
 var number = 30;
 var intervalID;

 $(document).ready(function(){
    
      

function displayAnswers(){
  for (i = 0; i < answer1.length; i++) {
  $("<button>" + answer1[i] + "</button>").appendTo('.answers1');     
}

for (i = 0; i < answer2.length; i++) {
  $("<button>" + answer2[i] + "</button>").appendTo('.answers2');
  }

for (i = 0; i < answer3.length; i++) {
  $("<button>" + answer3[i] + "</button>").appendTo('.answers3');
}

for (i = 0; i < answer4.length; i++) {
  $("<button>" + answer4[i] + "</button>").appendTo('.answers4');
}

for (i = 0; i < answer5.length; i++) {
  $("<button>" + answer5[i] + "</button>").appendTo('.answers5');
}
}


function displayQuestion(){
    
    $(".question1").append(questions[0])


}
    $("#start").click(function(){
      
          $("#start").on("click", start);  
          $("#submit").on("click", stop);  
          $("#start").hide();
          $(".rules").hide();
          
          function start(){
              number = 30;
              clearInterval(intervalID);
              intervalID = setInterval(timer, 1000);
              displayQuestion();    
              displayAnswers();
          }
          
          function timer(){
            number-- 
            $("#show-timer").html("<h2>Time Remaining: " + number + "</h2>" );
            if (number === 0){
              alert("Your Score: "); // need to add variable that has correct answers
              stop(); 
            }
          }
          function stop(){
              clearInterval(intervalID);
          }
          
          start();
        });
      });
        
        // need a for loop that creates the radio buttons - assigns them values - and then appends the answers to the new radio buttons
        // need to create a function that uses jquery to apply the answers to divs instead of having them hardcoded into the HTML
        // need to create a function that will check the answers that were submitted against what the actual answer is.
        // need to add the calculated score at the end of the timer.
        // need to add styling to make website more presentable.


        
