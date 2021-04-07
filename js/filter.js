/*
This script is referenced in download.html
*/

/*

Lines of codes:- 30(excluding spaces)
*/


function filter() {
    var input = document.getElementById('search123'); //it searches for the html element with “id” value = ‘search123’ 
                                                      //This html element contains an input field in download.html file.
    var FilterValue = input.value.toUpperCase();  // it converts the input value to uppercase.
    var ul = document.getElementById('search-ul');  //it searches for the html element with “id” value = ‘search-ul’ 
    
    /* 
    we use this ul variable to get the html element with class value = “search-li” 
    and store it in “li” variable.
    (But here is no search-li class in document.html) 
    */

    /*
     there is no search-li class in the github code in document.html 
     but when we go on for inspecting like right click on document.html then click on inspect. 
     Then there we can see the class with value "search-li".
     */

    var li = ul.getElementsByClassName('search-li'); 
    

    for (let i = 0; i < li.length; i++) //this loop is used to loop through all the “li” values.
    {
        var a = li[i].getElementsByTagName('div')[0];  //we are storing html element for tag=’div’ and chossing the first div tag inside the ‘search-li’ class.
        if (a.innerText.toUpperCase().indexOf(FilterValue) > -1) //we are checking if the index of the innerText inside this div is  -1
        {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

/*
below function is same as above with just change in parameters in few functions.

 I) “input” variable is taking  html element with “id” value = ‘search123’
 II) ‘ul’ variable is taking html element with “id” value = “search-ul1”. 
 And rest is same.
 */

function filter1() {
    var input = document.getElementById('search1234');
    var FilterValue = input.value.toUpperCase();
    var ul = document.getElementById('search-ul1');
    var li = ul.getElementsByClassName('search-li');
    for (let i = 0; i < li.length; i++) {
        var a = li[i].getElementsByTagName('div')[0];
        if (a.innerText.toUpperCase().indexOf(FilterValue) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
