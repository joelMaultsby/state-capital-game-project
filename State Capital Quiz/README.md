# States-Capital-Project
Quiz Game Title: State Capitals

![Image 2-4-25 at 5 25 PM](https://github.com/user-attachments/assets/25a1f4f8-4363-40b2-8526-6b09b00e7bda)


BEGIN Quiz

    SET score = 0

    Question 1
    DISPLAY "Question 1: What is the capital of Missouri?"
    GET  answer to question 1 which is answer1 from user
    IF answer1 == "Jefferson city"
        INCREMENT score by 1

        DISPLAY "Please provide a text answer. Empty response is not accepted."
    
    ELSE IF answer==null
    
    Question 2
    DISPLAY "Question 2: What is the capital Utah?"
    GET answer to question 2 which is answer2 from user
    IF answer2 == "Salt Lake city"
        INCREMENT score by 1


    ELSE IF answer==null

        DISPLAY "Please provide a text answer. Empty response is not accepted."

    Question 3
    DISPLAY "Question 3: What is the capital of Texas?"
    GET answer to question 3 which is answer3 from user
    IF answer3 == "Austin"
        INCREMENT score by 1

    ELSE IF answer==null

        DISPLAY "Please provide a text answer. Empty response is not accepted."

    Question 4
    DISPLAY "Question 4: What is the capital of Florida?"
    GET answer to question 4 which is answer4 from user
    IF answer4 == "Tallahassee"
        INCREMENT score by 1
    

     ELSE IF answer==null

     

        DISPLAY "Please provide a text answer. Empty response is not accepted."

    Display final score to the score
    DISPLAY "Your final score is: " + score

END Quiz


# Description of Game

The game quizzes the player on state capitals for 4 states. In order to win the game the user must correctly enter the name for each state capital, MO, UT, TX, and FL.

# Technologies Used: 
JavaScript, HTML, and CSS

# Next Steps
To enhance the game I would like to expand it to quiz the players on all state capitals in the US. Also I would like to update the scoring for the game to allow players to win if they answer 80% of the state capitals correct instead of 100% of the state capitals. I would also enhance my css code to make user be able actually see a picture of each state, while question is be asked. 



