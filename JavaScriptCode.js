//OBJCTIVE: MAKE CRAPS

/*Creates a function that serves the purpose of writing welcoming information such as the name of the webpage and what the objective of the webpage is*/
function welcome(){
    /*Writes a HTML header tag to give context to the name of the Webpage*/
    document.write(" <h1>The Satelite Casino</h1> ");
    /*Writes HTML code that out puts 2 lines under two different class: objective is to styling the webpage using two lines of varied sizes*/
    document.write(" <hr class='shortHR'> <hr class='shorterHR'> ");
    /*Writes HTML code that tells the user what kind of game the webpage is trying to display*/
    document.write(" <h2>The game today is: <h1>Space Craps</h1></h2> ");
}

/*A Function that displays the rules of the game and also gives a user a button to re-roll (aka reload the page)*/
function rules(){

    /*Writes HTML code that makes a header for to show that the next message are the rules of the game*/
    document.write(" <h1>Rules:</h1> ")
    /*writes HTML code that displays the rules of the game in a <h2> header font-size*/
    document.write(" <h2 class='gameRules'>Roll the dice and see if you can get doubles. Watch out though, if you roll a 7 or 11, you'll lose the game</h2> ")
    /*writes HTML code that tells the user what the button does and also displays a button*/
    document.write("<br> <h2> Go ahead and roll: <button onclick ='location.reload()'>Roll Dice</button> </h2> <br> ")
}

/*A function that has the job to roll random integers for 2 variables and to add those two variables. It also handles the message that is outputted depending on the total of the roll*/
function play(){

    /*Integer Variable that chooses a random number between 1-6*/
    let die1 = Math.ceil(Math.random()*6);

    /*Integer Variable that chooses a random number between 1-6*/
    let die2 = Math.ceil(Math.random()*6);

    /*Integer variable that adds the two random vinteger variables*/
    let sum = die1 + die2;

    /*writes in HTML that everything between this <div> tag is under the ID of gameBoard*/
    document.write("<div id ='gameBoard'>")
    
    /* if statement that tests if the sum variable is either 7 or 11*/
    if (sum == 7 || sum == 11){
        /*if yes: outputs a message telling the user they lost*/
        document.write ("<center>Bad Luck. You Lost. <br/></center>")
    }

    /*else if statement testing, if not the first if, do the values of the two dice variables equal each other and that value have a remainder of 0 after being dived by 2?*/
    else if (die1==die2 && die1 % 2 == 0){
        /*write a message to the user that they have won*/
        document.write ("<center>What Luck! You Won!<br/></center>")
    }

    /* if not any of those statements, then a defualt procedure is set.*/
    else{

        /*write a message saying that the roll di have the user win or lose*/
        document.write("<center>Nothing happening here. Roll again. <br/></center>")
    }



    /*writes in HTML to display the results and label the 1st dice variable : is a part of the resultBox <div> class*/
    document.write("<div class='resultBox'> <p>Dice 1:</p><h2>" + die1 + "</h2></div>" )

    /**writes in HTML to display the results and label the 2nd dice variable : is a part of the resultBox <div> class*/
    document.write("<div class='resultBox'> <p>Dice 2</p><h2>" + die2 + "</h2></div>" )

    /**writes in HTML to display the results and label the sum variable : is a part of the resultBox <div> class*/
    document.write("<div class='resultBox'> <p>Total:</p><h2>" + sum + "</h2></div>" )
    
    /*Ends the gameBoard <div> tag*/
    document.write ("</div>")
    }