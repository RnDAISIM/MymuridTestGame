gdjs.Main_32MenuCode = {};
gdjs.Main_32MenuCode.localVariables = [];
gdjs.Main_32MenuCode.idToCallbackMap = new Map();
gdjs.Main_32MenuCode.GDbackgroundObjects1= [];
gdjs.Main_32MenuCode.GDbackgroundObjects2= [];
gdjs.Main_32MenuCode.GDbackgroundObjects3= [];
gdjs.Main_32MenuCode.GDbtn_9595PlayObjects1= [];
gdjs.Main_32MenuCode.GDbtn_9595PlayObjects2= [];
gdjs.Main_32MenuCode.GDbtn_9595PlayObjects3= [];
gdjs.Main_32MenuCode.GDbtn_9595HitboxObjects1= [];
gdjs.Main_32MenuCode.GDbtn_9595HitboxObjects2= [];
gdjs.Main_32MenuCode.GDbtn_9595HitboxObjects3= [];
gdjs.Main_32MenuCode.GDtext_9595TitleObjects1= [];
gdjs.Main_32MenuCode.GDtext_9595TitleObjects2= [];
gdjs.Main_32MenuCode.GDtext_9595TitleObjects3= [];


gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDbtn_95959595HitboxObjects1Objects = Hashtable.newFrom({"btn_Hitbox": gdjs.Main_32MenuCode.GDbtn_9595HitboxObjects1});
gdjs.Main_32MenuCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9546364);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "baeeb718f7142aaca06988016a135804da1068bbc739ea8a568f0faf8cfbe938_Two tone effect.aac", false, 100, 1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9547220);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Game", false);
}
}

}


};gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDbtn_95959595HitboxObjects1Objects = Hashtable.newFrom({"btn_Hitbox": gdjs.Main_32MenuCode.GDbtn_9595HitboxObjects1});
gdjs.Main_32MenuCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("btn_Hitbox"), gdjs.Main_32MenuCode.GDbtn_9595HitboxObjects1);
gdjs.copyArray(runtimeScene.getObjects("btn_Play"), gdjs.Main_32MenuCode.GDbtn_9595PlayObjects1);
{for(var i = 0, len = gdjs.Main_32MenuCode.GDbtn_9595PlayObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDbtn_9595PlayObjects1[i].getBehavior("Scale").setScale(0.244);
}
}
{for(var i = 0, len = gdjs.Main_32MenuCode.GDbtn_9595HitboxObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDbtn_9595HitboxObjects1[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("btn_Hitbox"), gdjs.Main_32MenuCode.GDbtn_9595HitboxObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDbtn_95959595HitboxObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("btn_Play"), gdjs.Main_32MenuCode.GDbtn_9595PlayObjects1);
{for(var i = 0, len = gdjs.Main_32MenuCode.GDbtn_9595PlayObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDbtn_9595PlayObjects1[i].getBehavior("Scale").setScale(0.2);
}
}

{ //Subevents
gdjs.Main_32MenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("btn_Hitbox"), gdjs.Main_32MenuCode.GDbtn_9595HitboxObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDbtn_95959595HitboxObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("btn_Play"), gdjs.Main_32MenuCode.GDbtn_9595PlayObjects1);
{for(var i = 0, len = gdjs.Main_32MenuCode.GDbtn_9595PlayObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDbtn_9595PlayObjects1[i].getBehavior("Scale").setScale(0.244);
}
}
}

}


};

gdjs.Main_32MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Main_32MenuCode.GDbackgroundObjects1.length = 0;
gdjs.Main_32MenuCode.GDbackgroundObjects2.length = 0;
gdjs.Main_32MenuCode.GDbackgroundObjects3.length = 0;
gdjs.Main_32MenuCode.GDbtn_9595PlayObjects1.length = 0;
gdjs.Main_32MenuCode.GDbtn_9595PlayObjects2.length = 0;
gdjs.Main_32MenuCode.GDbtn_9595PlayObjects3.length = 0;
gdjs.Main_32MenuCode.GDbtn_9595HitboxObjects1.length = 0;
gdjs.Main_32MenuCode.GDbtn_9595HitboxObjects2.length = 0;
gdjs.Main_32MenuCode.GDbtn_9595HitboxObjects3.length = 0;
gdjs.Main_32MenuCode.GDtext_9595TitleObjects1.length = 0;
gdjs.Main_32MenuCode.GDtext_9595TitleObjects2.length = 0;
gdjs.Main_32MenuCode.GDtext_9595TitleObjects3.length = 0;

gdjs.Main_32MenuCode.eventsList1(runtimeScene);
gdjs.Main_32MenuCode.GDbackgroundObjects1.length = 0;
gdjs.Main_32MenuCode.GDbackgroundObjects2.length = 0;
gdjs.Main_32MenuCode.GDbackgroundObjects3.length = 0;
gdjs.Main_32MenuCode.GDbtn_9595PlayObjects1.length = 0;
gdjs.Main_32MenuCode.GDbtn_9595PlayObjects2.length = 0;
gdjs.Main_32MenuCode.GDbtn_9595PlayObjects3.length = 0;
gdjs.Main_32MenuCode.GDbtn_9595HitboxObjects1.length = 0;
gdjs.Main_32MenuCode.GDbtn_9595HitboxObjects2.length = 0;
gdjs.Main_32MenuCode.GDbtn_9595HitboxObjects3.length = 0;
gdjs.Main_32MenuCode.GDtext_9595TitleObjects1.length = 0;
gdjs.Main_32MenuCode.GDtext_9595TitleObjects2.length = 0;
gdjs.Main_32MenuCode.GDtext_9595TitleObjects3.length = 0;


return;

}

gdjs['Main_32MenuCode'] = gdjs.Main_32MenuCode;
