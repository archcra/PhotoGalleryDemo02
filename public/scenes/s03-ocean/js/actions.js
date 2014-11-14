
// Depend on scene, title.js

var actions =[
    //{duration:3000, action:test1},
    //{duration:5000, action:test2},

    {duration:3000, action:showTitle},
    {duration:500, action:showDialog},
    {duration:5000, action:hideTitle},
    {duration:3000, action:showDialog},
    {duration:3000, action:showDialog},
    {duration:3000, action:showDialog},
    {duration:3000, action:showDialog},
    {duration:3000, action:showDialog},
    {duration:3000, action:showDialog},
    {duration:13000, action:showDialog},//有一位
    {duration:3000, action:showDialog},//好班长
    {duration:3000, action:showDialog},
    {duration:3000, action:addPlane, parameter:'images/赵伟-12.png'},
    
    {duration:16000, action:showDialog},
    {duration:1000, action:updatePlaneImage, parameter:'images/赵伟-04.png'},
    {duration:16000, action:showDialog},
    {duration:1000, action:updatePlaneImage, parameter:'images/赵伟-01.png'},
    {duration:16000, action:showDialog},
    {duration:3000, action:showDialog},
    {duration:3000, action:hideDialog}

]
    
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
        console.log( nextActionObj.duration);
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
