//GET VALUES IN JS
var element; //variable create only
element = document;         //initializing the value of variable
console.log(element);       //check console
element2 = document.all;         
console.log(element2);          //list of all tags displayed
element3 = document.all[8];         
console.log(element3);  
//if not work, document.all[9] on console
element4 = document.head;         
console.log(element4); 
element5 = document.title;         
console.log(element5);  
element6 = document.body;         
console.log(element6); 
//if not work, document.body on console 
element7 = document.links;         
console.log(element7);  
//if not work, document.links[0] on console 
element8 = document.images;         
console.log(element8);  
element9 = document.forms;         
console.log(element9);  
element10 = document.doctype;         
console.log(element10);  
element11 = document.URL;         
console.log(element11);
element12 = document.domain;         
console.log(element12);
//Js main target attributes:
element13 = document.getElementById("header");         
console.log(element13);
element14 = document.getElementsByClassName("list");        
console.log(element14);
element15 = document.getElementsByTagName("ul");        
console.log(element15);
