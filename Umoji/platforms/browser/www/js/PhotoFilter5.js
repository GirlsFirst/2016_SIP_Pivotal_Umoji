var question = ["What did the leaf say to the lawn after the lawn repeatedly bother the leaf?", 
"What do two u's make?", "What do you call a philosophical dolphin?", 
"A programmer is someone who makes a machine turn coffee into code.", 
"Why did the functions stop calling each other?", 
"A programming language walks into a bar and says, Hello World." ,
"How many children do you have?", 
"Person 1: Youll never become a good programmer.Person2: y?", 
"There are three types of people in the world. Those who understand binary and others who don't understand binary.", 
"Group members: YAYYY IT WORKS!!, Anon: What happened? Group members: a button works T_T Group member 1: we have other errors in the code though.."]

var answer =  ["leaf-me-a-lawn!", "double u!! (w)", "A purpoise dolphin!", 
"HAHAHA", "Because they had constant arguments.", "HAHAHA", 
"Programmer: I have a daughter and a son, so I have three children.",
"You can't spell right.", "HAHAAHA", "HAHAHA"]

var randomNum = Math.floor((Math.random() * 9) + 1)

function joke() {
  document.getElementById("jokes!").innerHTML= (question [randomNum]);
  document.getElementById("answer").className = "button";

}

function answers() {
  document.getElementById("answer!").innerHTML= (answer [randomNum]);
    document.getElementById("clear").className = "button";

}

