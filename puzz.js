            var iSelected=1
            var swapImg=[]
            var arr = [];
            var imgid=[]

            function randomArrangement()
            {
                //This will generate unique random number from 1 to 9 and stores it in array arr[]
                
                while(arr.length <49)
                {
                    var r = 1 + Math.floor(Math.random() * 49)
                    if(arr.indexOf(r) === -1) arr.push(r);
                }   
                var b = [];
                for(var j = 0; j < 49; j++)
                {
                    b[j] = "Horse\\ig" + arr[j] + ".jpg";
                }
               
                
                for(var j = 0; j < 49; j++)
                {
                    var tag = "b" + (j + 1);
                    document.getElementById(tag).setAttribute("src", b[j]);
                }
              

            }

            function Check(){
              var Kval=0;
              for(var j = 0; j < 49; j++)
              {
                a=document.getElementById("b"+arr[j]);
                //console.log("b"+(arr[1]));
                x=a.src;
                y=a.getAttribute("value");
                y=y.substring(y.length-6,y.length-4);
                x=x.substring(x.length-6,x.length-4);
                if(x==y){
                  Kval++;
                }
              }
               if(Kval==49){
                document.getElementById("perfect").innerHTML="Congratulations! You Won the Game.."
               }
               else{
                document.getElementById("perfect").innerHTML="Oops!! The Puzzle is Incorrect"
               }

            } 

          
            
            function selected(a)
            {
              a.style.border="2px";
              a.style.borderStyle="solid";
              a.style.borderColor="aqua";
              
              swapImg[iSelected]=a.src
              imgid[iSelected]=a.id 
              iSelected++
              if(swapImg[1]!=null && swapImg[2]!=null)
              {
                i1=document.getElementById(imgid[2]);
                i2=document.getElementById(imgid[1])
                i1.src=swapImg[1];
                i2.src=swapImg[2];
                swapImg[1]=null
                swapImg[2]=null
                imgid[1]=null
                imgid[2]=null
                iSelected=1
                i1.style.border="0px";
                i2.style.border="0px";
                
              }
                
            }

            
            
           
            