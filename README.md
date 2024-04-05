# BC_C4_JSQuiz
A quiz built using JavaScript

## Description

This project was created to get a better understanding on the inner workings of JavaScript, and to learn how it can control the different elements within a webpage.

- The project was an aid to help us understand loops, functions, storing JSON in the browswer, retrieving JSON from the browswer, and manipulating elements within the HTML
- As I was working off a single html page in this project, I was focing myself to learn how to hid elements in the dom and then display them again at certain times
- This project also required me to hone my html and css skills in order to get the elements to appear correctly after they are revealed. 


## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

To pull the rep files:
1. Go to my git hub repo (https://github.com/dstorie80/BC_C4_JSQuiz_2) 
2. Click on the code button and select SSH
3. navigate git bash to a designated folder of your chosing (CD <filepath/> [if a new folder needs to be created, you can use the mkdir command in git bash])
4. Pull the latest update from git using the clone command in git bash (git clone <repo url>)
5. Once the repo has been downloaded into the folder, you can use open vs code (code . in git bash) to open the files from the repo



## Usage

To access the website you will need to follow this published link - [https://dstorie80.github.io/BC_C4_JSQuiz/](https://dstorie80.github.io/BC_C4_JSQuiz_2/)

To access the latest repo you will need to follow this github rep link - [https://github.com/dstorie80/BC_C4_JSQuiz.git](https://github.com/dstorie80/BC_C4_JSQuiz_2.git)

The landing page gives you two options, you can either click the start quiz button to begin the quiz, or you can click the view high scores button to see all the stored high scores.

To begin the quiz:

1. Click on "Start Quiz"
   - a. Once the button is clicked the user will be presented with the first question
   - b. The timer will begin counting down

![image](https://github.com/dstorie80/BC_C4_JSQuiz_2/assets/149905416/b2d5899c-63b5-4e5f-8155-62fc8d7e174d)

2. As the quiz begins, the timer will begin to count down. As the timer counts down the user will see that at certain points in the countdown the color begins to change Green -> Orange -> Red.  

Plenty of time = green
![image](https://github.com/dstorie80/BC_C4_JSQuiz_2/assets/149905416/0d47f780-7ca6-41b4-b588-d3455af2b57e)

Still time left on the clock but its running out = Yellow
![image](https://github.com/dstorie80/BC_C4_JSQuiz_2/assets/149905416/a3d4bcf2-81f9-4b62-af5d-e52881aad90d)

Time is running out = Red
![image](https://github.com/dstorie80/BC_C4_JSQuiz_2/assets/149905416/d2fef482-6a11-4071-a458-01d913e8b9b5)

3. When the timer runs out, the user is presented with the "Game Over" page and has the option to restart. The timer will also show them that their time has run out.
![image](https://github.com/dstorie80/BC_C4_JSQuiz_2/assets/149905416/59e671d8-5edd-4800-ac25-600343a71f9c)

4. The questions on the quiz are multiple choice (including a true / false question).  
   - a. Clicking on either a correct or incorrect response will move the user to the next question		
      - i. Clicking on an incorrect question will show the correct answer in red text at the bottom of the quizbox
        - A. Every incorrect answer selected will deduct 10 seconds off the time remaining
      - ii. Clicking on a correct response, will show the word "Correct" in green letters at the bottom of the quizbox

Incorrect
![image](https://github.com/dstorie80/BC_C4_JSQuiz_2/assets/149905416/8b9f51b1-ce3d-462b-94d8-85e5d36ce3f7)

Correct
![image](https://github.com/dstorie80/BC_C4_JSQuiz_2/assets/149905416/786600a6-bab5-4718-b3f2-628858989357)

10 sec penalty
Time before incorrect answer
![image](https://github.com/dstorie80/BC_C4_JSQuiz_2/assets/149905416/38fc6517-1c0b-42db-af9c-657b34cc5646)

Time after incorrect answer
![image](https://github.com/dstorie80/BC_C4_JSQuiz_2/assets/149905416/ddb45379-6546-4fca-9873-a1fad1ec3ec2)

5. Answering the questions correctly or incorrectly will eventually bring the user to the end of the quiz where they can enter their initials into a text box to add their initials and score to the high scores page
   - a. The score is the reminaing time left on the clock

![image](https://github.com/dstorie80/BC_C4_JSQuiz_2/assets/149905416/b4ef69cf-4c46-4b4d-80b8-cb543a809259)

6. Once the initials are entered, the user will click on the "Submit" and be shown the score board

![image](https://github.com/dstorie80/BC_C4_JSQuiz_2/assets/149905416/e45df1e6-c7ab-4aa6-971b-df5ad2e95938)

![image](https://github.com/dstorie80/BC_C4_JSQuiz_2/assets/149905416/616d3bf9-4480-4f95-8e29-2404ca70356d)


7. From the scoreboard the user is presented with a couple of options.
   - a. The user can clear the high scores
   - b. Or the user can click restart and be taken back to the start of the quiz
  
Clearing the high scores by clicking the clear high scores button
![image](https://github.com/dstorie80/BC_C4_JSQuiz_2/assets/149905416/213333e5-dfb6-4bee-a8e6-dcbde0b35186)

![image](https://github.com/dstorie80/BC_C4_JSQuiz_2/assets/149905416/5f6e7dbd-4a14-425a-9858-e7b1950722db)

Going back to the start of the quiz by clicking the restart button
![image](https://github.com/dstorie80/BC_C4_JSQuiz_2/assets/149905416/3702c25a-b5a1-4819-9d39-e18476f3fbd3)

![image](https://github.com/dstorie80/BC_C4_JSQuiz_2/assets/149905416/11bd6a1f-e765-4c13-92ef-5c558a28ce21)


8. If the user wants to go back and see the high scores, they can click on the view high scores option at the quiz start

![image](https://github.com/dstorie80/BC_C4_JSQuiz_2/assets/149905416/5d42e6a9-4ffd-4c24-bf45-e219b94aa530)

![image](https://github.com/dstorie80/BC_C4_JSQuiz_2/assets/149905416/a3c6b017-0ad1-46b6-b04d-b09ee7992efd)

The view high scores button is not visbile during the code quiz

![image](https://github.com/dstorie80/BC_C4_JSQuiz_2/assets/149905416/26ddbe65-fc24-49c4-b58a-e04809663b47)



## Credits

Background images:

The background image for the main site was taken from - wallpapers.com (https://wallpapers.com/background/coding-background-9izlympnd0ovmpli.html)

The background image for the highschore site was taken from - freepik.com (https://www.freepik.com/free-vector/celebration-background-with-colorful-party-flag-falling-confetti_5128060.htm#query=party%20background&position=0&from_view=keyword&track=ais&uuid=df971e32-3db8-4a43-a48c-e7a5408789c5#position=0&query=party%20background)

Some of the quiz questions come from W3S school website:
https://www.w3schools.com/java/java_quiz.asp


## License

No license used 
