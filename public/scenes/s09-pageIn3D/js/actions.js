
// Depend on scene, title.js

var actions =[
    /* */
    {duration:3000, action:showDialog, parameter:0},
    {duration:3000, action:showDialog, parameter:1},//
    {duration:3000, action:showDialog, parameter:2},
    {duration:3000, action:showDialog, parameter:3},
    {duration:3000, action:showDialog, parameter:4},
    {duration:3000, action:showDialog, parameter:5},
    {duration:3000, action:showDialog, parameter:6},
    {duration:3000, action:showDialog, parameter:7},
    {duration:3000, action:showDialog, parameter:8},//
    {duration:3000, action:showDialog, parameter:9},//
    {duration:3000, action:showDialog, parameter:10},
    {duration:3000, action:showDialog, parameter:11},
    {duration:3000, action:showDialog, parameter:12},
    {duration:3000, action:showDialog, parameter:13},
    {duration:3000, action:showDialog, parameter:14},
    {duration:3000, action:showDialog, parameter:15},
    {duration:3000, action:showDialog, parameter:16},

    {duration:3000, action:hideDialog}

]
    
function showInfo(){
    console.log('show info');   
}
function runActions(curAction){
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
