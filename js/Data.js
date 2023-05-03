



var dogs = []

dogs[1] = "Males are about 27 or 28 inches tall and weigh about 70 pounds (32 kilograms), while females are an inch or two shorter and weigh about 60 to 65 pounds (27 to 29 kilograms). The Doberman pinscher has a long head and a sleek, muscular body. The ears are often cropped to stand erect, and the tail is usually docked short";
dogs[2] = "Saint Bernards are very large, powerful, muscular dogs.A male Saint Bernard's height can range between 28 and 30 inches, and he can weigh between 140 and 180 pounds (63 to 81 kilograms). A female's height may range between 26 and 28 inches, and she may weigh between 120 and 140 pounds (54 to 63 kilograms)";
dogs[3] = "Border Collies were originally bred to herd sheep. They excel at the task because of their strength, stamina, intelligence, and work ethic. Border Collies are famous for using “the eye”— staring intensely at members of the flock to intimidate them";
dogs[4] = "s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the";

var imagedogs = new Array();
imagedogs[1] = new Image();
imagedogs[1].src = "img/Pinscher.jpg";
imagedogs[2] = new Image();
imagedogs[2].src = "img/sanbernard.jpg";
imagedogs[3] = new Image();
imagedogs[3].src = "img/bordercolie.jpg";
imagedogs[4] = new Image();
imagedogs[4].src = "img/null.jpg";
imagedogs[5] = new Image();
imagedogs[5].src = "img/null.jpg";
imagedogs[6] = new Image();
imagedogs[6].src = "img/null.jpg";
imagedogs[7] = new Image();
imagedogs[7].src = "img/null.jpg";
imagedogs[8] = new Image();
imagedogs[8].src = "img/null.jpg";




function ContentFunction(DogId) {


    document.getElementById("information").innerHTML = dogs[DogId];
  

}


function imagefunc(DogId) {

    document.getElementById("myimg").src = imagedogs[DogId].src
}


