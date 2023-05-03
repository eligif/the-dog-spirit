$(function () {
    var count;
    count = 0;


    $(".panels").click(function () {


     

        if (count == 0) {
            $(".menu").slideDown();
            count = 1;
        }
       
        else if (count == 1) {

            $(".menu").slideUp();
            count = 0;

        }
           
    

       

    });
});