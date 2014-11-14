
// Depend on scene, title.js
var map;

var actions =[
    /* */
    {duration:2000, action:setZoom, parameter:2},
      {duration:2000, action:setZoom, parameter:3},
    {duration:2000, action:setZoom, parameter:4},
    {duration:2000, action:setZoom, parameter:5},
    {duration:2000, action:setZoom, parameter:6},
    {duration:2000, action:setZoom, parameter:7},
    {duration:2000, action:setZoom, parameter:8},
    {duration:2000, action:setZoom, parameter:9},
    {duration:2000, action:setZoom, parameter:10},
    {duration:2000, action:setZoom, parameter:11},
    {duration:2000, action:setZoom, parameter:12},
    {duration:2000, action:setZoom, parameter:13},
    {duration:2000, action:setZoom, parameter:14},
    {duration:2000, action:setZoom, parameter:15},
    {duration:2000, action:setZoom, parameter:16},
    {duration:2000, action:setZoom, parameter:17},
    {duration:1000, action:redirect, parameter:2},

    

]
  
function redirect(){
    window.location.replace("./marker.html");
}
    
function setZoom(scale){
    console.log('here 2');
    map.setZoom(scale);
}
    
function showInfo(){
    console.log('show info');   
}
function runActions(curAction, googleMap){
    console.log('here 1', googleMap);
    if (!map && googleMap)
        map = googleMap;
    
    if(curAction){
        if (curAction.parameter){
            curAction.action(curAction.parameter);
        }else{
            curAction.action();
        }
    }
    var nextActionObj = getNextAction();
    if(nextActionObj){
        //console.log( nextActionObj.duration);
        window.setTimeout(runActions,
            nextActionObj.duration, nextActionObj);
    }
}

function processActions(){
    var actionId =-1;

    return function(){
        actionId ++;
        if(actionId >= actions.length){
            return null;
        }else{
            return actions[actionId];
        }
    }
}
    
    
var getNextAction = processActions();
    
function test1(){
    console.log("This is function test1");
}

function test2(){
    console.log("This is the function test2");
}
