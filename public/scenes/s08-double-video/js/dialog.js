
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



function showDialog (id){
    console.log('dialog id is:', id);
    var index ;
    if (!id){
        index = counter();
    }else{
        index = id;   
    }
    //console.log('index', index);
    var overlay = document.getElementById("overlay");

    //var contentsHtml = dialogs[index].content;   
    var dialogTextObj = _.find(dialogs, function(item){ return item.id == index; });
    var contentsHtml = dialogTextObj.content;
    var contents = document.getElementById("dialog");
    contents.innerHTML = contentsHtml;

    overlay.style.display = "block";    
}

function hideDialog (index){

    overlay.style.display = "none";    
}
