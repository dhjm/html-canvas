function draw() {
          var canvas = document.getElementById("canvas");
            if(canvas.getContext){
               var ctx = canvas.getContext("2d");
                
                var path = new Path2D();
                path.arc(200,200,100,0,Math.PI*2,true); //Kopf
                path.moveTo(275,200);
                path.arc(200,200,75,0,Math.PI,false); //Mund
                path.moveTo(180,170);
                path.arc(170,170,10,0,Math.PI*2,true); //linkes Auge
                path.moveTo(240,170);
                path.arc(230,170,10,0,Math.PI*2,true); //rechtes Auge
                ctx.stroke(path);
            }
      }