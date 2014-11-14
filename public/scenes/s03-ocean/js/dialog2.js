
var dialogs = [
{'header':"1. ", 'content':'以此片做为二十周年聚会的纪念'},
{'header':"1. ", 'content':'This is totally unoffial.'},
{'header':"2. ",'content':'Feel free to watch,'},
{'header':"2. ",'content':'to critic, to feedback.'},
{'header':"3. ", 'content':' Feel free to feel,'},
{'header':"3. ", 'content':'as far as you can.'},
{'header':"4. ", 'content':'在不是很久很久很久以前以前以前'},
{'header':"4. ", 'content':'有一位'},
{'header':"4. ", 'content':'好班长'},
{'header':"4. ", 'content':'他慈眉善目，目不转睛，晶莹剔透，'},
{'header':"4. ", 'content':'他是班级的带头羊，是大海的舵手，'},
{'header':"4. ", 'content':'水的知音, 山的朋友，'},
{'header':"4. ", 'content':'一派溪山千古秀'},
{'header':"4. ", 'content':'故事的发生是这样的喽'},

    
    



















];

function getCounter(){
    var counter = -1;

    function next(){
        counter ++;
        if (counter >=dialogs.length){
            counter = 0;
        }
        return counter;
    }

    return next;
}

var counter = getCounter();



function showDialog (){
    var index = counter();
    console.log('index', index);
    var overlay = document.getElementById("overlay");

    var contentsHtml = dialogs[index].content;   
  
    var contents = document.getElementById("dialog");
    contents.innerHTML = contentsHtml;

    overlay.style.display = "block";    
}

function hideDialog (index){

    overlay.style.display = "none";    
}
