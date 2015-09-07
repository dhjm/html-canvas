function bsp1() {
          var bsp1 = document.getElementById("bsp1");
            if(bsp1.getContext){
               var ctx = bsp1.getContext("2d");
                
                ctx.fillStyle = "rgb(200,0,0)";
                ctx.fillRect (10, 10, 55, 50);

                ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
                ctx.fillRect (30, 30, 55, 50);
                ctx.strokeRect(5,5,140,140);
        }
}

function bsp3() {
          var bsp3 = document.getElementById("bsp3");
            if(bsp3.getContext){
               var ctx = bsp3.getContext("2d");
                
                   var line=new Path2D();
                   line.moveTo(5,130);
                   line.lineTo(130,5);
                   line.closePath();
                   ctx.stroke(line);
            }
      }

function bsp4() {
          var bsp4 = document.getElementById("bsp4");
            if(bsp4.getContext){
               var ctx = bsp4.getContext("2d");
                
                for(var i=0;i<4;i++){
                    for(var j=0;j<3;j++){
                        var path = new Path2D();
                        var x = 25+j*50; // x coordinate
                        var y = 25+i*50; // y coordinate
                        var radius = 20; // Arc radius
                        var startAngle = 0; // Starting point on circle
                        var endAngle = Math.PI+(Math.PI*j)/2; // End point on circle
                        var anticlockwise = i%2==0 ? false : true; // clockwise or anticlockwise

                        path.arc(x, y, radius, startAngle, endAngle, anticlockwise);

                        if (i>1){
                          ctx.fill(path);
                        } else {
                          ctx.stroke(path);
                        }
                      }
                }
            }
      }

function bsp5() {
          var bsp5 = document.getElementById("bsp5");
            if(bsp5.getContext){
               var ctx = bsp5.getContext("2d");
                
                    var path = new Path2D();
                    path.moveTo(75,25);
                    path.quadraticCurveTo(25,25,25,62.5);
                    path.quadraticCurveTo(25,100,50,100);
                    path.quadraticCurveTo(50,120,30,125);
                    path.quadraticCurveTo(60,120,65,100);
                    path.quadraticCurveTo(125,100,125,62.5);
                    path.quadraticCurveTo(125,25,75,25);
                    ctx.stroke(path);
            }
      }

function bsp6() {
          var bsp6 = document.getElementById("bsp6");
            if(bsp6.getContext){
               var ctx = bsp6.getContext("2d");
                
                    var path = new Path2D();
                    path.moveTo(75,40);
                    path.bezierCurveTo(75,37,70,25,50,25);
                    path.bezierCurveTo(20,25,20,62.5,20,62.5);
                    path.bezierCurveTo(20,80,40,102,75,120);
                    path.bezierCurveTo(110,102,130,80,130,62.5);
                    path.bezierCurveTo(130,62.5,130,25,100,25);
                    path.bezierCurveTo(85,25,75,37,75,40);
                    ctx.fill(path);
            }
      }

function bsp7() {
          var bsp7 = document.getElementById("bsp7");
            if(bsp7.getContext){
               var ctx = bsp7.getContext("2d");
                
                 for (var i=0;i<6;i++){
                    for (var j=0;j<6;j++){
                      ctx.fillStyle = 'rgb(' + Math.floor(255-42.5*i) + ',' +
                                       Math.floor(255-42.5*j) + ',0)';
                      ctx.fillRect(j*25,i*25,25,25);
                    }
            }
      }
}

function bsp8() {
          var bsp8 = document.getElementById("bsp8");
            if(bsp8.getContext){
               var ctx = bsp8.getContext("2d");
                
                  // draw background
                      ctx.fillStyle = '#FD0';
                      ctx.fillRect(0,0,75,75);
                      ctx.fillStyle = '#6C0';
                      ctx.fillRect(75,0,75,75);
                      ctx.fillStyle = '#09F';
                      ctx.fillRect(0,75,75,75);
                      ctx.fillStyle = '#F30';
                      ctx.fillRect(75,75,75,75);
                      ctx.fillStyle = '#FFF';

                      // set transparency value
                      ctx.globalAlpha = 0.2;

                      // Draw semi transparent circles
                      for (i=0;i<7;i++){
                        ctx.beginPath();
                        ctx.arc(75,75,10+10*i,0,Math.PI*2,true);
                        ctx.fill();
                      }
            }
      }

function bsp9() {
          var bsp9 = document.getElementById("bsp9");
            if(bsp9.getContext){
               var ctx = bsp9.getContext("2d");
                
                  for (var i = 0; i < 10; i++){
                    ctx.lineWidth = 1+i;
                    ctx.beginPath();
                    ctx.moveTo(5+i*14,5);
                    ctx.lineTo(5+i*14,140);
                    ctx.stroke();
                  }
            }
      }

var ctx = document.getElementById('bsp10').getContext('2d');
var offset = 0;

function rect() {
  ctx.clearRect(0,0, bsp10.width, bsp10.height);
  ctx.setLineDash([4, 2]);
  ctx.lineDashOffset = -offset;
  ctx.strokeRect(10,10, 130, 130);
}

function march() {
  offset++;
  if (offset > 16) {
    offset = 0;
  }
  rect();
  setTimeout(march, 40);
}

march();



var sun = new Image();
var moon = new Image();
var earth = new Image();
function init(){
  sun.src = 'https://mdn.mozillademos.org/files/1456/Canvas_sun.png';
  moon.src = 'https://mdn.mozillademos.org/files/1443/Canvas_moon.png';
  earth.src = 'https://mdn.mozillademos.org/files/1429/Canvas_earth.png';
  window.requestAnimationFrame(solar);
}

function solar() {
  var ctx = document.getElementById('bsp12').getContext('2d');

  ctx.globalCompositeOperation = 'destination-over';
  ctx.clearRect(0,0,200,200); // clear canvas

  ctx.fillStyle = 'rgba(0,0,0,0.4)';
  ctx.strokeStyle = 'rgba(0,153,255,0.4)';
  ctx.save();
  ctx.translate(100,100);

  // Earth
  var time = new Date();
  ctx.rotate( ((2*Math.PI)/60)*time.getSeconds() + ((2*Math.PI)/60000)*time.getMilliseconds() );
  ctx.translate(69.3,0);
  ctx.fillRect(0,-8,33,16); // Shadow
  ctx.drawImage(earth,-8,-8);

  // Moon
  ctx.save();
  ctx.rotate( ((2*Math.PI)/6)*time.getSeconds() + ((2*Math.PI)/6000)*time.getMilliseconds() );
  ctx.translate(0,18.81);
  ctx.drawImage(moon,-2.31,-2.31);
  ctx.restore();

  ctx.restore();
  
  ctx.beginPath();
  ctx.arc(100,100,70,0,Math.PI*2,false); // Earth orbit
  ctx.stroke();
 
  ctx.drawImage(sun,0,0,200,200);

  window.requestAnimationFrame(solar);
}

init();
