﻿

var myImage=document.querySelector("img");

myImage.onclick=function()
{

var mySrc=myImage.getAttribute("src");


if(mySrc==="C:/Ashutosh/TrainingLearning/web-projects/first-test-site/images/dogs.jfif")
{
myImage.setAttribute("src","C:/Ashutosh/TrainingLearning/web-projects/first-test-site/images/dogs2.jfif");
}
else
{
myImage.setAttribute("src","C:/Ashutosh/TrainingLearning/web-projects/first-test-site/images/dogs.jfif");
}



}

var myButton=document.querySelector("button");
var myHeading=document.querySelector("h1");

function setUserName()
{
var myName=prompt("Please Enter your name.");

localStorage.setItem("name",myName);
myHeading.textContent="Welcome,To the Dog Lover's Club, "+ myName;
}

if(!localStorage.getItem("name"))
{
setUserName();
}
else
{
var storedName=localStorage.getItem("name");
myHeading.textContent="Welcome,To the Dog Lover's Club, "+storedName;
}

myButton.onclick=function()
{
setUserName();
}
