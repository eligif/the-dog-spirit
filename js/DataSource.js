﻿$(document).ready(function(){

//$(function () {

//    "use strict"


    var body = $(document.body);
    var j;
  

    var DogJSON = [

         {
            "id":"1",
            "Name": "Affenpincher",
            "OtherNames": "Monkey Terrier",
            "Info": "Hello Affenpincher Hello Affenpincher Hello Affenpincher Hello Affenpincher Hello Affenpincher",
            "pic": "../img/dogart2.jpg",
            "family":"Shepherd"
           
        },

       {
            "id": "2",
            "Name": "Afghan Hound",
            "OtherNames": "Parsian GreyHound,Tazi",
            "Info": "Hello Afghan Hound Hello Afghan Hound Hello Afghan Hound Hello Afghan Hound Hello Afghan Hound Hello Afghan Hound Hello Afghan Hound ",
            "pic": "../img/dogart2.jpg",
            "family":"Shpitz"

    
       },

       {
           "id": "3",
           "Name": "Alaskan Malamute",
           "OtherNames": "Parsian GreyHound,Tazi",
           "Info": "Hello Afghan Hound Hello Afghan Hound Hello Afghan Hound Hello Afghan Hound Hello Afghan Hound Hello Afghan Hound Hello Afghan Hound ",
           "pic": "../img/dogart2.jpg",
           "family": "Shpitz"

       },

       {
           "id": "4",
           "Name": "Afghan Hound",
           "OtherNames": "Parsian GreyHound,Tazi",
           "Info": "Hello Afghan Hound Hello Afghan Hound Hello Afghan Hound Hello Afghan Hound Hello Afghan Hound Hello Afghan Hound Hello Afghan Hound ",
           "pic": "../img/dogart2.jpg",
           "family": "Shpitz"

       },

       {
           "id": "5",
           "Name": "Afghan Hound",
           "OtherNames": "Parsian GreyHound,Tazi",
           "Info": "Hello Afghan Hound Hello Afghan Hound Hello Afghan Hound Hello Afghan Hound Hello Afghan Hound Hello Afghan Hound Hello Afghan Hound ",
           "pic": "../img/dogart2.jpg",
           "family": "Shpitz"

       },

       {
           "id": "6",
           "Name": "Afghan Hound",
           "OtherNames": "Parsian GreyHound,Tazi",
           "Info": "Hello Afghan Hound Hello Afghan Hound Hello Afghan Hound Hello Afghan Hound Hello Afghan Hound Hello Afghan Hound Hello Afghan Hound ",
           "pic": "../img/dogart2.jpg",
           "family": "Shpitz"

       },

       {
           "id": "7",
           "Name": "Afghan Hound",
           "OtherNames": "Parsian GreyHound,Tazi",
           "Info": "Hello Afghan Hound Hello Afghan Hound Hello Afghan Hound Hello Afghan Hound Hello Afghan Hound Hello Afghan Hound Hello Afghan Hound ",
           "pic": "../img/dogart2.jpg",
           "family": "Shpitz"

       },

       {
           "id": "2",
           "Name": "Afghan Hound",
           "OtherNames": "Parsian GreyHound,Tazi",
           "Info": "Hello Afghan Hound Hello Afghan Hound Hello Afghan Hound Hello Afghan Hound Hello Afghan Hound Hello Afghan Hound Hello Afghan Hound ",
           "pic": "../img/dogart2.jpg",
           "family": "Shpitz"

       },

       {
           "id": "2",
           "Name": "Alaskan Malamute",
           "OtherNames": "Parsian GreyHound,Tazi",
           "Info": "Hello Afghan Hound Hello Afghan Hound Hello Afghan Hound Hello Afghan Hound Hello Afghan Hound Hello Afghan Hound Hello Afghan Hound ",
           "pic": "../img/dogart2.jpg",
           "family": "Shpitz"

       }
     
    ];
   

   

    for (var i = 0; i < DogJSON.length; i++) {

        var item = $('<div></div>').addClass('item').appendTo(".holder" + [i] + "").css("z-index", "1");
        $('<img />').attr('id', 'breedimg').attr('src', DogJSON[i].pic).appendTo(item);
        $('<div></div>').addClass('ItemContainer').appendTo(item)
        $('<p></p>').text(DogJSON[i].Name).attr('id', 'name').appendTo(item);
        $('<p></p>').text(DogJSON[i].OtherNames).attr('id', 'othernames').appendTo(item);
        var button = $('<button></button>').attr('id', 'BtnMore').css("z-index", "-1").click(function () {
            console.log("aaaaaa");
            window.location.href = "http://www.google.co.il";

        }).text('read more').appendTo(item);
                 

    }


    function Shepherd() {

        document.getElementById("demo").innerHTML ="hiiiiiiiiiiiiiiiiiiiiiiiiii";


    }

    $("#ChkShepherd").click(function () {

        clean();
        Shepherd();


    });

    $("#BtnSearch").click(function () {

        clean();
        BreedSearch();

    });



    $('#BtnMore').click(function () {
        console.log("bbbbbbbbb");
        window.location.href = 'http://www.google.co.il';
    }) 

    $(".item").click(function () {
        console.log("ccccccccc");
        window.location.href = 'http://www.google.co.il';
    })








    function clean() {
       
        for (var i = 0; i < 100; i++) {
         
            $(".holder" + [i] + "").empty();
          
        }        
    }


    function Shepherd() {


        j = 0;
        for (var i = 0; i < DogJSON.length; i++) {

            if (DogJSON[i].family == "Shepherd") {
               
                console.log("hiiiiiiii");
                var item = $('<div></div>').addClass('item').appendTo(".holder" + [j] + "");
                $('<img />').attr('id', 'breedimg').attr('src', DogJSON[i].pic).appendTo(item);
                var container = $('<div></div>').addClass('ItemContainer').appendTo(item)
                $('<p></p>').text(DogJSON[i].Name).attr('id', 'name').appendTo(container);
                $('<p></p>').text(DogJSON[i].OtherNames).attr('id', 'othernames').appendTo(container);
                $('<button></button>').attr('id', 'BtnMore').text('קרא עוד').appendTo(container);
                j = j + 1;
            }
        }
       

    };


    function BreedSearch() {

        var SerchItem = document.getElementById("txtSearch").value.toLowerCase();;
       console.log(SerchItem)
        j = 0;
        for (var i = 0; i < DogJSON.length; i++) {

            if (DogJSON[i].Name.toLowerCase().includes(SerchItem)) {
                
                console.log("hiiiiiiii");
                var item = $('<div></div>').addClass('item').appendTo(".holder" + [j] + "");
                $('<img />').attr('id', 'breedimg').attr('src', DogJSON[i].pic).appendTo(item);
                var container = $('<div></div>').addClass('ItemContainer').appendTo(item)
                $('<p></p>').text(DogJSON[i].Name).attr('id', 'name').appendTo(container);
                $('<p></p>').text(DogJSON[i].OtherNames).attr('id', 'othernames').appendTo(container);
                $('<button></button>').attr('id', 'BtnMore').text('קרא עוד').appendTo(container);
                j = j+1;;
            }
        }
    }



   
});



