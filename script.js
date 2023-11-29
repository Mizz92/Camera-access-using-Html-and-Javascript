let VIDEO=null;
let CANVAS=null;
let CONTEXT=null;
let SCALER=0.8;
let SIZE={x:0,y:0,width:0,height:0};

function main(){
    CANVAS=document.getElementById("myCanvas");
    CONTEXT=CANVAS.getContext("2d");
    let promise=navigator.mediaDevices.getUserMedia({
        video:true
    });
    promise.then(function(signal){
        VIDEO=document.createElement("video");
        VIDEO.scrObject=signal;
        VIDEO.play();

        VIDEO.onloadeddata=function(){
           handleResize();
           // window.addEventListener('resize',handleResize);
            updateCanvas();
        }
    }).catch(function(err){
        alert("Camera error: "+err);
    });
}
function handleResize(){
    let resizer=SCALER*
                Math.main(
                    window.innerWidth/VIDEO.videoWidht,
                    window.innerHeight/VIDEO.videoHeight
                 );
    SIZE.width=resizer*VIDEO.videoWidth;
    SIZE.height=resizer*VIDEO.videoHeigth;
    SIZE.x=window.innerWidth/2-SIZE.width/2;
    SIZE.y=window.innerHeight/2-SIZE.height/2;
}

function updatecanvas(){
    Context.drawImage(VIDEO,
            SIZE.x, SIZE.y,
            SIZE.width, SIZE.height);
    window.requestAnimationFrame(updatecanvas);
}