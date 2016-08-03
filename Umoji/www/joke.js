var question = ["What did the leaf say to the lawn after the lawn repeatedly bother the leaf?", 
"What do two u's make?", "What do you call a philosophical dolphin?", 
"A programmer is someone who makes a machine turn coffee into code.", 
"Why did the functions stop calling each other?", 
"A programming language walks into a bar and says, Hello World." ,
"How many children do you have?", 
"Person 1: Youll never become a good programmer.Person2: y?", 
"There are three types of people in the world. Those who understand binary and others who don't understand binary.", 
"Group members: YAYYY IT WORKS!!, Anon: What happened? Group members: a button works T_T Group member 1: we have other errors in the code though..",
"How do cows do math?"]

var pics = ["https://holisticmoving.files.wordpress.com/2015/05/laughing8.jpg", "http://i.dailymail.co.uk/i/pix/2014/08/04/article-0-203C9DB900000578-441_964x632.jpg", "http://i4.dailyrecord.co.uk/incoming/article1906481.ece/ALTERNATES/s1227b/laughing-animals.jpg","http://i.huffpost.com/gen/1226293/thumbs/o-OBAMA-LAUGHING-570.jpg?6","http://laughingmeditation.com/wp-content/uploads/Laughing-babies-the-ancie-008.jpg", "http://www.magic1059.com.au/images/cat_laughing.jpeg", "http://67.media.tumblr.com/tumblr_lrwqotD9OD1qdnz0i.gif", "http://gifrific.com/wp-content/uploads/2013/05/Dwight-Schrute-Laughing.gif", "http://pixel.nymag.com/imgs/daily/vulture/2015/gifs/mad-men-don.w529.h352.gif", "http://i.imgur.com/HuYCpuO.gif", "http://i.imgur.com/n1crh.gif", "http://2.bp.blogspot.com/-3o8P5coMlac/UW26hp53exI/AAAAAAAALS4/_c6shngNUQ0/s1600/ryan-shaking-head.gif",]

var answer =  ["leaf-me-a-lawn!", "double u!! (w)", "A purpoise dolphin!", 
"HAHAHA", "Because they had constant arguments.", "HAHAHA", 
"Programmer: I have a daughter and a son, so I have three children.",
"You can't spell right.", "HAHAAHA", "HAHAHA","They use a cow-culator!"]


var randomNum = Math.floor((Math.random() * 10) + 1)


function joke() {
  document.getElementById("jokes!").innerHTML= (question [randomNum]);
}

function answers() {
  document.getElementById("answer!").innerHTML= (answer [randomNum]);
  document.getElementById("images").src= (pics[randomNum]);
}
