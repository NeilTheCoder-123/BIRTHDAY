var canvas = new fabric.Canvas('canvas');
 var x= document.getElementById("myAudio");


function playSound(){
	x.play();
}

playx = 10;
playy = 10;

block_width = 30;
block_height = 30;

blockObject = "";

function newImage() {
    fabric.Image.fromURL('BirthdayImage.jpg', function(Img){
        blockObject = Img;
        blockObject.scaleToWidth(100);
        blockObject.scaleToHeight(600);

        blockObject.set({
            top: playy,
            left: playx
        });

        canvas.add(blockObject);
    });
}
