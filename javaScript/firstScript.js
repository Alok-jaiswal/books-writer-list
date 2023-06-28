function display() {
let books=[
    {
        bookName :"Vision of the Past",
        Writer :"Michel Madhusudan Dutta",
    },
    {
        bookName : "Captive Lady",
        Writer : "Michel Madhusudan Dutta",
    },
    {
        bookName : "A Nation is Marking", 
        Writer : "Suredra Nath Bandhopadhye",
    },
    {
        bookName : "War and Peace",
        Writer : "tolstoy",
    },
    {
        bookName : "End and Means",
        Writer : "Huxlay",
    },
    {
        bookName : "Shadow of Ladakh", 
        Writer : "B. Bhattacharia",
    },
    {
        bookName : "Paradise Lost ", 
        Writer : "John Milton ",
    },
    {
        bookName : "A week with Gandhi ", 
        Writer : "L. Fischer",
    },
    {
        bookName : "Myth of Independence ", 
        Writer : "Zulfikar Ali Bhutto ",
    },
    {
        bookName : "Kidnapped ", 
        Writer : "Stevenson ",
    },
    {
        bookName : "I Van Ho ", 
        Writer : "Walter Scot ",
    },
    {
        bookName : "I follow the Mahatma ", 
        Writer : "K. M. Munshi",
    },
    {
        bookName : "Hindu View of Life ", 
        Writer : "S. Radhakrishnan",
    },
    {
        bookName :"Gathering Strom ", 
        Writer : "Churchil",
    },
    {
        bookName : "All the Prime Minister's Men ", 
        Writer : "Janardan Thakur",
    },
    {
        bookName : "Death of President", 
        Writer : "W. Marchent ",
    },
    {
        bookName : "Crisis Of India ", 
        Writer : "Ronal Segal ",
    },
    {
        bookName : "Urbashi ", 
        Writer : "R. D. Dinkar ",
    },
    {
        bookName : "Adventures of Sherlock Homes", 
        Writer : "Arther Canon Doel ",
    },
    {
        bookName : "The Commedy of Errors ", 
        Writer : "William Shekhspeare ",
    },
    {
        bookName : "Devine Comedi", 
        Writer : "Dante ",
    },
    {
        bookName : "A Pair Of Blue Eyes ", 
        Writer : " Thomash Hardy ",
    },
    {
        bookName : "Volga Se Ganga ", 
        Writer : "Rahul Sankrityayan",
    },
    {
        bookName : "Buddhacharit ", 
        Writer : "Asha Ghosh ",
    },
    
];
// var d = books[0].bookName;
// var w = books[0].Writer;
// console.log(Math.floor(Math.random() * books.length));

var n = Math.floor(Math.random() * books.length);

// console.log(n);

var d = books[n].bookName;
var w = books[n].Writer;

 // console.log( d );
// console.log( w );

document.getElementById("display1").innerHTML=  d ;
document.getElementById("display2").innerHTML=  w ;

}