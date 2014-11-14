
// Depend on scene, title.js

var actions =[
    /* */
    {duration:3000, action:changeScene},
    {duration:13000, action:changeScene},
    {duration:1000, action:showDialog, parameter:1},//在山水
    {duration:3000, action:changeScene},
    {duration:3000, action:showDialog, parameter:2},
    {duration:3000, action:changeScene},
    {duration:3000, action:showDialog, parameter:3},
    {duration:3000, action:changeScene},
    {duration:3000, action:showDialog, parameter:4},
{duration:3000, action:changeScene},
    {duration:3000, action:changeScene},
{duration:3000, action:changeScene,parameter:1.5}, //waiting here, sea shore
     {duration:3000, action:showInfo},
    {duration:3000, action:showDialog, parameter:5},
    {duration:3000, action:showDialog, parameter:6},
    {duration:3000, action:showDialog, parameter:7},

    {duration:1000, action:changeScene}, //eating pidgen
    {duration:3000, action:changeScene,parameter:-1.0},
    {duration:5000, action:showDialog, parameter:8},//吃着吃着
    {duration:5000, action:showDialog, parameter:9},//忽然，深刻感觉
    {duration:3000, action:changeScene}, 
    {duration:1000, action:showDialog, parameter:10},//这么冷清
    {duration:5000, action:showDialog, parameter:11},
    {duration:3000, action:showDialog, parameter:12},//
    {duration:3000, action:changeScene}, //肉
    
   
    
    {duration:3000, action:showDialog, parameter:13},//大伟慢吞吞地夹了起来
    {duration:3000, action:changeScene}, 
    {duration:3000, action:showDialog, parameter:14},
    {duration:3000, action:changeScene}, 
    {duration:1000, action:showDialog, parameter:15},//还淡悠悠地瞥了他一眼
    {duration:1000, action:changeScene}, 

    {duration:1000, action:showDialog, parameter:16},
    {duration:3000, action:showDialog, parameter:17},
    {duration:3000, action:showDialog, parameter:18},
    {duration:3000, action:showDialog, parameter:19},//我当时明明也是拿着筷子的啊
     /* */
    {duration:3000, action:changeScene}, 
    {duration:3000, action:showDialog, parameter:20},
    {duration:3000, action:showDialog, parameter:21},
    {duration:3000, action:showDialog, parameter:22},
    {duration:3000, action:showDialog, parameter:23},

    {duration:3000, action:showDialog, parameter:24},//我要与大伟施不俩梨
            {duration:3000, action:changeScene}, 

    {duration:5000, action:showDialog, parameter:25},
    {duration:1000, action:changeScene}, //meat
    {duration:3000, action:showDialog, parameter:26},//今天明明有肉啊！

    {duration:3000, action:showDialog, parameter:27},
    {duration:3000, action:showDialog, parameter:28},
    {duration:3000, action:showDialog, parameter:29},
    {duration:3000, action:changeScene, parameter:-2.0}, //one_little_friend
    {duration:3000, action:showDialog, parameter:30},//人少

    {duration:3000, action:showDialog, parameter:31},//需要找人聊聊
            {duration:3000, action:changeScene}, 

    {duration:3000, action:showDialog, parameter:32},
    {duration:3000, action:showDialog, parameter:33},
    {duration:3000, action:showDialog, parameter:34},
    

    {duration:3000, action:showDialog, parameter:35},//人还少
    {duration:4000, action:showDialog, parameter:36},
    {duration:3000, action:showDialog, parameter:37},
    {duration:4000, action:showDialog, parameter:38},
    {duration:4000, action:showDialog, parameter:39},

    {duration:4000, action:showDialog, parameter:40},
    {duration:4000, action:showDialog, parameter:41},
    {duration:3000, action:showDialog, parameter:42},//七月是螃蟹座
    {duration:1000, action:changeScene, parameter:-0.6}, //crab

    {duration:3000, action:showDialog, parameter:43},
    {duration:3000, action:showDialog, parameter:44},//九月是处女座
    {duration:1000, action:changeScene}, //autumn
    {duration:3000, action:showDialog, parameter:45},
    {duration:3000, action:showDialog, parameter:46},//４月？这是山羊座
    {duration:1000, action:changeScene}, //spring
    {duration:3000, action:showDialog, parameter:47},
    {duration:3000, action:showDialog, parameter:48},
    
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
