let count = 40;


document.getElementById("amba").onclick = function(){
    count -=1
    if(count < 0){
     count = 0
     window.location = "win.html"
    }
    else if(count < 30){
document.body.style.color = "red"
    }
   
    document.getElementById("MyLabel").innerHTML = count;
    
}


