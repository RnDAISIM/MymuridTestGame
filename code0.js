gdjs.MainMenuCode = {};
gdjs.MainMenuCode.localVariables = [];
gdjs.MainMenuCode.idToCallbackMap = new Map();
gdjs.MainMenuCode.GDBackgroundObjects1= [];
gdjs.MainMenuCode.GDBackgroundObjects2= [];
gdjs.MainMenuCode.GDObjectiveObjects1= [];
gdjs.MainMenuCode.GDObjectiveObjects2= [];
gdjs.MainMenuCode.GDPlayBtnObjects1= [];
gdjs.MainMenuCode.GDPlayBtnObjects2= [];


gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDPlayBtnObjects1Objects = Hashtable.newFrom({"PlayBtn": gdjs.MainMenuCode.GDPlayBtnObjects1});
gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDPlayBtnObjects1Objects = Hashtable.newFrom({"PlayBtn": gdjs.MainMenuCode.GDPlayBtnObjects1});
gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDPlayBtnObjects1Objects = Hashtable.newFrom({"PlayBtn": gdjs.MainMenuCode.GDPlayBtnObjects1});
gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDPlayBtnObjects1Objects = Hashtable.newFrom({"PlayBtn": gdjs.MainMenuCode.GDPlayBtnObjects1});
gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDPlayBtnObjects1Objects = Hashtable.newFrom({"PlayBtn": gdjs.MainMenuCode.GDPlayBtnObjects1});
gdjs.MainMenuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("PlayBtn"), gdjs.MainMenuCode.GDPlayBtnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDPlayBtnObjects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainGame", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayBtn"), gdjs.MainMenuCode.GDPlayBtnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDPlayBtnObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9208604);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "baeeb718f7142aaca06988016a135804da1068bbc739ea8a568f0faf8cfbe938_Two tone effect.aac", false, 100, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayBtn"), gdjs.MainMenuCode.GDPlayBtnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDPlayBtnObjects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
/* Reuse gdjs.MainMenuCode.GDPlayBtnObjects1 */
{for(var i = 0, len = gdjs.MainMenuCode.GDPlayBtnObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDPlayBtnObjects1[i].getBehavior("Scale").setScale(0.27);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayBtn"), gdjs.MainMenuCode.GDPlayBtnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDPlayBtnObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.MainMenuCode.GDPlayBtnObjects1 */
{for(var i = 0, len = gdjs.MainMenuCode.GDPlayBtnObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDPlayBtnObjects1[i].getBehavior("Scale").setScale(0.24);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayBtn"), gdjs.MainMenuCode.GDPlayBtnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDPlayBtnObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.MainMenuCode.GDPlayBtnObjects1 */
{for(var i = 0, len = gdjs.MainMenuCode.GDPlayBtnObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDPlayBtnObjects1[i].getBehavior("Scale").setScale(0.27);
}
}
}

}


};

gdjs.MainMenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainMenuCode.GDBackgroundObjects1.length = 0;
gdjs.MainMenuCode.GDBackgroundObjects2.length = 0;
gdjs.MainMenuCode.GDObjectiveObjects1.length = 0;
gdjs.MainMenuCode.GDObjectiveObjects2.length = 0;
gdjs.MainMenuCode.GDPlayBtnObjects1.length = 0;
gdjs.MainMenuCode.GDPlayBtnObjects2.length = 0;

gdjs.MainMenuCode.eventsList0(runtimeScene);
gdjs.MainMenuCode.GDBackgroundObjects1.length = 0;
gdjs.MainMenuCode.GDBackgroundObjects2.length = 0;
gdjs.MainMenuCode.GDObjectiveObjects1.length = 0;
gdjs.MainMenuCode.GDObjectiveObjects2.length = 0;
gdjs.MainMenuCode.GDPlayBtnObjects1.length = 0;
gdjs.MainMenuCode.GDPlayBtnObjects2.length = 0;


return;

}

gdjs['MainMenuCode'] = gdjs.MainMenuCode;
