gdjs.MainGameCode = {};
gdjs.MainGameCode.localVariables = [];
gdjs.MainGameCode.idToCallbackMap = new Map();
gdjs.MainGameCode.forEachCount0_2 = 0;

gdjs.MainGameCode.forEachCount1_2 = 0;

gdjs.MainGameCode.forEachCount2_2 = 0;

gdjs.MainGameCode.forEachIndex2 = 0;

gdjs.MainGameCode.forEachObjects2 = [];

gdjs.MainGameCode.forEachTotalCount2 = 0;

gdjs.MainGameCode.GDBackgroundObjects1= [];
gdjs.MainGameCode.GDBackgroundObjects2= [];
gdjs.MainGameCode.GDBackgroundObjects3= [];
gdjs.MainGameCode.GDCorrectBoxObjects1= [];
gdjs.MainGameCode.GDCorrectBoxObjects2= [];
gdjs.MainGameCode.GDCorrectBoxObjects3= [];
gdjs.MainGameCode.GDIncorrectBoxObjects1= [];
gdjs.MainGameCode.GDIncorrectBoxObjects2= [];
gdjs.MainGameCode.GDIncorrectBoxObjects3= [];
gdjs.MainGameCode.GDInstanceCorrect_95951Objects1= [];
gdjs.MainGameCode.GDInstanceCorrect_95951Objects2= [];
gdjs.MainGameCode.GDInstanceCorrect_95951Objects3= [];
gdjs.MainGameCode.GDInstaneceIncorrect_95951Objects1= [];
gdjs.MainGameCode.GDInstaneceIncorrect_95951Objects2= [];
gdjs.MainGameCode.GDInstaneceIncorrect_95951Objects3= [];
gdjs.MainGameCode.GDObjectiveObjects1= [];
gdjs.MainGameCode.GDObjectiveObjects2= [];
gdjs.MainGameCode.GDObjectiveObjects3= [];
gdjs.MainGameCode.GDInstanceCorrect_95952Objects1= [];
gdjs.MainGameCode.GDInstanceCorrect_95952Objects2= [];
gdjs.MainGameCode.GDInstanceCorrect_95952Objects3= [];
gdjs.MainGameCode.GDInstaneceIncorrect_95952Objects1= [];
gdjs.MainGameCode.GDInstaneceIncorrect_95952Objects2= [];
gdjs.MainGameCode.GDInstaneceIncorrect_95952Objects3= [];
gdjs.MainGameCode.GDInstaneceIncorrect_95953Objects1= [];
gdjs.MainGameCode.GDInstaneceIncorrect_95953Objects2= [];
gdjs.MainGameCode.GDInstaneceIncorrect_95953Objects3= [];
gdjs.MainGameCode.GDInstanceCorrect_95953Objects1= [];
gdjs.MainGameCode.GDInstanceCorrect_95953Objects2= [];
gdjs.MainGameCode.GDInstanceCorrect_95953Objects3= [];
gdjs.MainGameCode.GDScoreObjects1= [];
gdjs.MainGameCode.GDScoreObjects2= [];
gdjs.MainGameCode.GDScoreObjects3= [];


gdjs.MainGameCode.mapOfGDgdjs_9546MainGameCode_9546GDInstanceCorrect_959595951Objects1ObjectsGDgdjs_9546MainGameCode_9546GDInstaneceIncorrect_959595951Objects1ObjectsGDgdjs_9546MainGameCode_9546GDInstanceCorrect_959595952Objects1ObjectsGDgdjs_9546MainGameCode_9546GDInstaneceIncorrect_959595952Objects1ObjectsGDgdjs_9546MainGameCode_9546GDInstaneceIncorrect_959595953Objects1ObjectsGDgdjs_9546MainGameCode_9546GDInstanceCorrect_959595953Objects1Objects = Hashtable.newFrom({"InstanceCorrect_1": gdjs.MainGameCode.GDInstanceCorrect_95951Objects1, "InstaneceIncorrect_1": gdjs.MainGameCode.GDInstaneceIncorrect_95951Objects1, "InstanceCorrect_2": gdjs.MainGameCode.GDInstanceCorrect_95952Objects1, "InstaneceIncorrect_2": gdjs.MainGameCode.GDInstaneceIncorrect_95952Objects1, "InstaneceIncorrect_3": gdjs.MainGameCode.GDInstaneceIncorrect_95953Objects1, "InstanceCorrect_3": gdjs.MainGameCode.GDInstanceCorrect_95953Objects1});
gdjs.MainGameCode.eventsList0 = function(runtimeScene) {

};gdjs.MainGameCode.eventsList1 = function(runtimeScene) {

};gdjs.MainGameCode.mapOfGDgdjs_9546MainGameCode_9546GDInstanceCorrect_959595951Objects1ObjectsGDgdjs_9546MainGameCode_9546GDInstaneceIncorrect_959595951Objects1ObjectsGDgdjs_9546MainGameCode_9546GDInstanceCorrect_959595952Objects1ObjectsGDgdjs_9546MainGameCode_9546GDInstaneceIncorrect_959595952Objects1ObjectsGDgdjs_9546MainGameCode_9546GDInstaneceIncorrect_959595953Objects1ObjectsGDgdjs_9546MainGameCode_9546GDInstanceCorrect_959595953Objects1Objects = Hashtable.newFrom({"InstanceCorrect_1": gdjs.MainGameCode.GDInstanceCorrect_95951Objects1, "InstaneceIncorrect_1": gdjs.MainGameCode.GDInstaneceIncorrect_95951Objects1, "InstanceCorrect_2": gdjs.MainGameCode.GDInstanceCorrect_95952Objects1, "InstaneceIncorrect_2": gdjs.MainGameCode.GDInstaneceIncorrect_95952Objects1, "InstaneceIncorrect_3": gdjs.MainGameCode.GDInstaneceIncorrect_95953Objects1, "InstanceCorrect_3": gdjs.MainGameCode.GDInstanceCorrect_95953Objects1});
gdjs.MainGameCode.eventsList2 = function(runtimeScene) {

{

/* Reuse gdjs.MainGameCode.GDInstanceCorrect_95951Objects1 */
/* Reuse gdjs.MainGameCode.GDInstanceCorrect_95952Objects1 */
/* Reuse gdjs.MainGameCode.GDInstanceCorrect_95953Objects1 */
/* Reuse gdjs.MainGameCode.GDInstaneceIncorrect_95951Objects1 */
/* Reuse gdjs.MainGameCode.GDInstaneceIncorrect_95952Objects1 */
/* Reuse gdjs.MainGameCode.GDInstaneceIncorrect_95953Objects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickAllObjects(runtimeScene, gdjs.MainGameCode.mapOfGDgdjs_9546MainGameCode_9546GDInstanceCorrect_959595951Objects1ObjectsGDgdjs_9546MainGameCode_9546GDInstaneceIncorrect_959595951Objects1ObjectsGDgdjs_9546MainGameCode_9546GDInstanceCorrect_959595952Objects1ObjectsGDgdjs_9546MainGameCode_9546GDInstaneceIncorrect_959595952Objects1ObjectsGDgdjs_9546MainGameCode_9546GDInstaneceIncorrect_959595953Objects1ObjectsGDgdjs_9546MainGameCode_9546GDInstanceCorrect_959595953Objects1Objects);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainGameCode.GDInstanceCorrect_95951Objects1.length;i<l;++i) {
    if ( !(gdjs.MainGameCode.GDInstanceCorrect_95951Objects1[i].getBehavior("Draggable").isDragged()) ) {
        isConditionTrue_0 = true;
        gdjs.MainGameCode.GDInstanceCorrect_95951Objects1[k] = gdjs.MainGameCode.GDInstanceCorrect_95951Objects1[i];
        ++k;
    }
}
gdjs.MainGameCode.GDInstanceCorrect_95951Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.MainGameCode.GDInstaneceIncorrect_95951Objects1.length;i<l;++i) {
    if ( !(gdjs.MainGameCode.GDInstaneceIncorrect_95951Objects1[i].getBehavior("Draggable").isDragged()) ) {
        isConditionTrue_0 = true;
        gdjs.MainGameCode.GDInstaneceIncorrect_95951Objects1[k] = gdjs.MainGameCode.GDInstaneceIncorrect_95951Objects1[i];
        ++k;
    }
}
gdjs.MainGameCode.GDInstaneceIncorrect_95951Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.MainGameCode.GDInstanceCorrect_95952Objects1.length;i<l;++i) {
    if ( !(gdjs.MainGameCode.GDInstanceCorrect_95952Objects1[i].getBehavior("Draggable").isDragged()) ) {
        isConditionTrue_0 = true;
        gdjs.MainGameCode.GDInstanceCorrect_95952Objects1[k] = gdjs.MainGameCode.GDInstanceCorrect_95952Objects1[i];
        ++k;
    }
}
gdjs.MainGameCode.GDInstanceCorrect_95952Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.MainGameCode.GDInstaneceIncorrect_95952Objects1.length;i<l;++i) {
    if ( !(gdjs.MainGameCode.GDInstaneceIncorrect_95952Objects1[i].getBehavior("Draggable").isDragged()) ) {
        isConditionTrue_0 = true;
        gdjs.MainGameCode.GDInstaneceIncorrect_95952Objects1[k] = gdjs.MainGameCode.GDInstaneceIncorrect_95952Objects1[i];
        ++k;
    }
}
gdjs.MainGameCode.GDInstaneceIncorrect_95952Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.MainGameCode.GDInstaneceIncorrect_95953Objects1.length;i<l;++i) {
    if ( !(gdjs.MainGameCode.GDInstaneceIncorrect_95953Objects1[i].getBehavior("Draggable").isDragged()) ) {
        isConditionTrue_0 = true;
        gdjs.MainGameCode.GDInstaneceIncorrect_95953Objects1[k] = gdjs.MainGameCode.GDInstaneceIncorrect_95953Objects1[i];
        ++k;
    }
}
gdjs.MainGameCode.GDInstaneceIncorrect_95953Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.MainGameCode.GDInstanceCorrect_95953Objects1.length;i<l;++i) {
    if ( !(gdjs.MainGameCode.GDInstanceCorrect_95953Objects1[i].getBehavior("Draggable").isDragged()) ) {
        isConditionTrue_0 = true;
        gdjs.MainGameCode.GDInstanceCorrect_95953Objects1[k] = gdjs.MainGameCode.GDInstanceCorrect_95953Objects1[i];
        ++k;
    }
}
gdjs.MainGameCode.GDInstanceCorrect_95953Objects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.MainGameCode.GDInstanceCorrect_95951Objects1 */
/* Reuse gdjs.MainGameCode.GDInstanceCorrect_95952Objects1 */
/* Reuse gdjs.MainGameCode.GDInstanceCorrect_95953Objects1 */
/* Reuse gdjs.MainGameCode.GDInstaneceIncorrect_95951Objects1 */
/* Reuse gdjs.MainGameCode.GDInstaneceIncorrect_95952Objects1 */
/* Reuse gdjs.MainGameCode.GDInstaneceIncorrect_95953Objects1 */
{for(var i = 0, len = gdjs.MainGameCode.GDInstanceCorrect_95951Objects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDInstanceCorrect_95951Objects1[i].activateBehavior("Draggable", false);
}
for(var i = 0, len = gdjs.MainGameCode.GDInstaneceIncorrect_95951Objects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDInstaneceIncorrect_95951Objects1[i].activateBehavior("Draggable", false);
}
for(var i = 0, len = gdjs.MainGameCode.GDInstanceCorrect_95952Objects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDInstanceCorrect_95952Objects1[i].activateBehavior("Draggable", false);
}
for(var i = 0, len = gdjs.MainGameCode.GDInstaneceIncorrect_95952Objects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDInstaneceIncorrect_95952Objects1[i].activateBehavior("Draggable", false);
}
for(var i = 0, len = gdjs.MainGameCode.GDInstaneceIncorrect_95953Objects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDInstaneceIncorrect_95953Objects1[i].activateBehavior("Draggable", false);
}
for(var i = 0, len = gdjs.MainGameCode.GDInstanceCorrect_95953Objects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDInstanceCorrect_95953Objects1[i].activateBehavior("Draggable", false);
}
}
{for(var i = 0, len = gdjs.MainGameCode.GDInstanceCorrect_95951Objects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDInstanceCorrect_95951Objects1[i].setZOrder(1);
}
for(var i = 0, len = gdjs.MainGameCode.GDInstaneceIncorrect_95951Objects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDInstaneceIncorrect_95951Objects1[i].setZOrder(1);
}
for(var i = 0, len = gdjs.MainGameCode.GDInstanceCorrect_95952Objects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDInstanceCorrect_95952Objects1[i].setZOrder(1);
}
for(var i = 0, len = gdjs.MainGameCode.GDInstaneceIncorrect_95952Objects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDInstaneceIncorrect_95952Objects1[i].setZOrder(1);
}
for(var i = 0, len = gdjs.MainGameCode.GDInstaneceIncorrect_95953Objects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDInstaneceIncorrect_95953Objects1[i].setZOrder(1);
}
for(var i = 0, len = gdjs.MainGameCode.GDInstanceCorrect_95953Objects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDInstanceCorrect_95953Objects1[i].setZOrder(1);
}
}
}

}


};gdjs.MainGameCode.mapOfGDgdjs_9546MainGameCode_9546GDInstanceCorrect_959595951Objects1ObjectsGDgdjs_9546MainGameCode_9546GDInstaneceIncorrect_959595951Objects1ObjectsGDgdjs_9546MainGameCode_9546GDInstanceCorrect_959595952Objects1ObjectsGDgdjs_9546MainGameCode_9546GDInstaneceIncorrect_959595952Objects1ObjectsGDgdjs_9546MainGameCode_9546GDInstaneceIncorrect_959595953Objects1ObjectsGDgdjs_9546MainGameCode_9546GDInstanceCorrect_959595953Objects1Objects = Hashtable.newFrom({"InstanceCorrect_1": gdjs.MainGameCode.GDInstanceCorrect_95951Objects1, "InstaneceIncorrect_1": gdjs.MainGameCode.GDInstaneceIncorrect_95951Objects1, "InstanceCorrect_2": gdjs.MainGameCode.GDInstanceCorrect_95952Objects1, "InstaneceIncorrect_2": gdjs.MainGameCode.GDInstaneceIncorrect_95952Objects1, "InstaneceIncorrect_3": gdjs.MainGameCode.GDInstaneceIncorrect_95953Objects1, "InstanceCorrect_3": gdjs.MainGameCode.GDInstanceCorrect_95953Objects1});
gdjs.MainGameCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("InstanceCorrect_1"), gdjs.MainGameCode.GDInstanceCorrect_95951Objects2);
gdjs.copyArray(runtimeScene.getObjects("InstanceCorrect_2"), gdjs.MainGameCode.GDInstanceCorrect_95952Objects2);
gdjs.copyArray(runtimeScene.getObjects("InstanceCorrect_3"), gdjs.MainGameCode.GDInstanceCorrect_95953Objects2);
gdjs.copyArray(runtimeScene.getObjects("InstaneceIncorrect_1"), gdjs.MainGameCode.GDInstaneceIncorrect_95951Objects2);
gdjs.copyArray(runtimeScene.getObjects("InstaneceIncorrect_2"), gdjs.MainGameCode.GDInstaneceIncorrect_95952Objects2);
gdjs.copyArray(runtimeScene.getObjects("InstaneceIncorrect_3"), gdjs.MainGameCode.GDInstaneceIncorrect_95953Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainGameCode.GDInstanceCorrect_95951Objects2.length;i<l;++i) {
    if ( gdjs.MainGameCode.GDInstanceCorrect_95951Objects2[i].getZOrder() == 10000 ) {
        isConditionTrue_0 = true;
        gdjs.MainGameCode.GDInstanceCorrect_95951Objects2[k] = gdjs.MainGameCode.GDInstanceCorrect_95951Objects2[i];
        ++k;
    }
}
gdjs.MainGameCode.GDInstanceCorrect_95951Objects2.length = k;
for (var i = 0, k = 0, l = gdjs.MainGameCode.GDInstaneceIncorrect_95951Objects2.length;i<l;++i) {
    if ( gdjs.MainGameCode.GDInstaneceIncorrect_95951Objects2[i].getZOrder() == 10000 ) {
        isConditionTrue_0 = true;
        gdjs.MainGameCode.GDInstaneceIncorrect_95951Objects2[k] = gdjs.MainGameCode.GDInstaneceIncorrect_95951Objects2[i];
        ++k;
    }
}
gdjs.MainGameCode.GDInstaneceIncorrect_95951Objects2.length = k;
for (var i = 0, k = 0, l = gdjs.MainGameCode.GDInstanceCorrect_95952Objects2.length;i<l;++i) {
    if ( gdjs.MainGameCode.GDInstanceCorrect_95952Objects2[i].getZOrder() == 10000 ) {
        isConditionTrue_0 = true;
        gdjs.MainGameCode.GDInstanceCorrect_95952Objects2[k] = gdjs.MainGameCode.GDInstanceCorrect_95952Objects2[i];
        ++k;
    }
}
gdjs.MainGameCode.GDInstanceCorrect_95952Objects2.length = k;
for (var i = 0, k = 0, l = gdjs.MainGameCode.GDInstaneceIncorrect_95952Objects2.length;i<l;++i) {
    if ( gdjs.MainGameCode.GDInstaneceIncorrect_95952Objects2[i].getZOrder() == 10000 ) {
        isConditionTrue_0 = true;
        gdjs.MainGameCode.GDInstaneceIncorrect_95952Objects2[k] = gdjs.MainGameCode.GDInstaneceIncorrect_95952Objects2[i];
        ++k;
    }
}
gdjs.MainGameCode.GDInstaneceIncorrect_95952Objects2.length = k;
for (var i = 0, k = 0, l = gdjs.MainGameCode.GDInstaneceIncorrect_95953Objects2.length;i<l;++i) {
    if ( gdjs.MainGameCode.GDInstaneceIncorrect_95953Objects2[i].getZOrder() == 10000 ) {
        isConditionTrue_0 = true;
        gdjs.MainGameCode.GDInstaneceIncorrect_95953Objects2[k] = gdjs.MainGameCode.GDInstaneceIncorrect_95953Objects2[i];
        ++k;
    }
}
gdjs.MainGameCode.GDInstaneceIncorrect_95953Objects2.length = k;
for (var i = 0, k = 0, l = gdjs.MainGameCode.GDInstanceCorrect_95953Objects2.length;i<l;++i) {
    if ( gdjs.MainGameCode.GDInstanceCorrect_95953Objects2[i].getZOrder() == 10000 ) {
        isConditionTrue_0 = true;
        gdjs.MainGameCode.GDInstanceCorrect_95953Objects2[k] = gdjs.MainGameCode.GDInstanceCorrect_95953Objects2[i];
        ++k;
    }
}
gdjs.MainGameCode.GDInstanceCorrect_95953Objects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MainGameCode.GDInstanceCorrect_95951Objects2 */
/* Reuse gdjs.MainGameCode.GDInstanceCorrect_95952Objects2 */
/* Reuse gdjs.MainGameCode.GDInstanceCorrect_95953Objects2 */
/* Reuse gdjs.MainGameCode.GDInstaneceIncorrect_95951Objects2 */
/* Reuse gdjs.MainGameCode.GDInstaneceIncorrect_95952Objects2 */
/* Reuse gdjs.MainGameCode.GDInstaneceIncorrect_95953Objects2 */
{for(var i = 0, len = gdjs.MainGameCode.GDInstanceCorrect_95951Objects2.length ;i < len;++i) {
    gdjs.MainGameCode.GDInstanceCorrect_95951Objects2[i].setZOrder((gdjs.RuntimeObject.getVariableNumber(gdjs.MainGameCode.GDInstanceCorrect_95951Objects2[i].getVariables().get("MyNewZ"))));
}
for(var i = 0, len = gdjs.MainGameCode.GDInstaneceIncorrect_95951Objects2.length ;i < len;++i) {
    gdjs.MainGameCode.GDInstaneceIncorrect_95951Objects2[i].setZOrder((gdjs.RuntimeObject.getVariableNumber(gdjs.MainGameCode.GDInstaneceIncorrect_95951Objects2[i].getVariables().get("MyNewZ"))));
}
for(var i = 0, len = gdjs.MainGameCode.GDInstanceCorrect_95952Objects2.length ;i < len;++i) {
    gdjs.MainGameCode.GDInstanceCorrect_95952Objects2[i].setZOrder((gdjs.RuntimeObject.getVariableNumber(gdjs.MainGameCode.GDInstanceCorrect_95952Objects2[i].getVariables().get("MyNewZ"))));
}
for(var i = 0, len = gdjs.MainGameCode.GDInstaneceIncorrect_95952Objects2.length ;i < len;++i) {
    gdjs.MainGameCode.GDInstaneceIncorrect_95952Objects2[i].setZOrder((gdjs.RuntimeObject.getVariableNumber(gdjs.MainGameCode.GDInstaneceIncorrect_95952Objects2[i].getVariables().get("MyNewZ"))));
}
for(var i = 0, len = gdjs.MainGameCode.GDInstaneceIncorrect_95953Objects2.length ;i < len;++i) {
    gdjs.MainGameCode.GDInstaneceIncorrect_95953Objects2[i].setZOrder((gdjs.RuntimeObject.getVariableNumber(gdjs.MainGameCode.GDInstaneceIncorrect_95953Objects2[i].getVariables().get("MyNewZ"))));
}
for(var i = 0, len = gdjs.MainGameCode.GDInstanceCorrect_95953Objects2.length ;i < len;++i) {
    gdjs.MainGameCode.GDInstanceCorrect_95953Objects2[i].setZOrder((gdjs.RuntimeObject.getVariableNumber(gdjs.MainGameCode.GDInstanceCorrect_95953Objects2[i].getVariables().get("MyNewZ"))));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("InstanceCorrect_1"), gdjs.MainGameCode.GDInstanceCorrect_95951Objects1);
gdjs.copyArray(runtimeScene.getObjects("InstanceCorrect_2"), gdjs.MainGameCode.GDInstanceCorrect_95952Objects1);
gdjs.copyArray(runtimeScene.getObjects("InstanceCorrect_3"), gdjs.MainGameCode.GDInstanceCorrect_95953Objects1);
gdjs.copyArray(runtimeScene.getObjects("InstaneceIncorrect_1"), gdjs.MainGameCode.GDInstaneceIncorrect_95951Objects1);
gdjs.copyArray(runtimeScene.getObjects("InstaneceIncorrect_2"), gdjs.MainGameCode.GDInstaneceIncorrect_95952Objects1);
gdjs.copyArray(runtimeScene.getObjects("InstaneceIncorrect_3"), gdjs.MainGameCode.GDInstaneceIncorrect_95953Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickAllObjects(runtimeScene, gdjs.MainGameCode.mapOfGDgdjs_9546MainGameCode_9546GDInstanceCorrect_959595951Objects1ObjectsGDgdjs_9546MainGameCode_9546GDInstaneceIncorrect_959595951Objects1ObjectsGDgdjs_9546MainGameCode_9546GDInstanceCorrect_959595952Objects1ObjectsGDgdjs_9546MainGameCode_9546GDInstaneceIncorrect_959595952Objects1ObjectsGDgdjs_9546MainGameCode_9546GDInstaneceIncorrect_959595953Objects1ObjectsGDgdjs_9546MainGameCode_9546GDInstanceCorrect_959595953Objects1Objects);
if (isConditionTrue_0) {
/* Reuse gdjs.MainGameCode.GDInstanceCorrect_95951Objects1 */
/* Reuse gdjs.MainGameCode.GDInstanceCorrect_95952Objects1 */
/* Reuse gdjs.MainGameCode.GDInstanceCorrect_95953Objects1 */
/* Reuse gdjs.MainGameCode.GDInstaneceIncorrect_95951Objects1 */
/* Reuse gdjs.MainGameCode.GDInstaneceIncorrect_95952Objects1 */
/* Reuse gdjs.MainGameCode.GDInstaneceIncorrect_95953Objects1 */
{for(var i = 0, len = gdjs.MainGameCode.GDInstanceCorrect_95951Objects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDInstanceCorrect_95951Objects1[i].activateBehavior("Draggable", true);
}
for(var i = 0, len = gdjs.MainGameCode.GDInstaneceIncorrect_95951Objects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDInstaneceIncorrect_95951Objects1[i].activateBehavior("Draggable", true);
}
for(var i = 0, len = gdjs.MainGameCode.GDInstanceCorrect_95952Objects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDInstanceCorrect_95952Objects1[i].activateBehavior("Draggable", true);
}
for(var i = 0, len = gdjs.MainGameCode.GDInstaneceIncorrect_95952Objects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDInstaneceIncorrect_95952Objects1[i].activateBehavior("Draggable", true);
}
for(var i = 0, len = gdjs.MainGameCode.GDInstaneceIncorrect_95953Objects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDInstaneceIncorrect_95953Objects1[i].activateBehavior("Draggable", true);
}
for(var i = 0, len = gdjs.MainGameCode.GDInstanceCorrect_95953Objects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDInstanceCorrect_95953Objects1[i].activateBehavior("Draggable", true);
}
}
}

}


};gdjs.MainGameCode.mapOfGDgdjs_9546MainGameCode_9546GDInstanceCorrect_959595951Objects1ObjectsGDgdjs_9546MainGameCode_9546GDInstanceCorrect_959595952Objects1ObjectsGDgdjs_9546MainGameCode_9546GDInstanceCorrect_959595953Objects1Objects = Hashtable.newFrom({"InstanceCorrect_1": gdjs.MainGameCode.GDInstanceCorrect_95951Objects1, "InstanceCorrect_2": gdjs.MainGameCode.GDInstanceCorrect_95952Objects1, "InstanceCorrect_3": gdjs.MainGameCode.GDInstanceCorrect_95953Objects1});
gdjs.MainGameCode.mapOfGDgdjs_9546MainGameCode_9546GDCorrectBoxObjects1Objects = Hashtable.newFrom({"CorrectBox": gdjs.MainGameCode.GDCorrectBoxObjects1});
gdjs.MainGameCode.mapOfGDgdjs_9546MainGameCode_9546GDInstaneceIncorrect_959595951Objects1ObjectsGDgdjs_9546MainGameCode_9546GDInstaneceIncorrect_959595952Objects1ObjectsGDgdjs_9546MainGameCode_9546GDInstaneceIncorrect_959595953Objects1Objects = Hashtable.newFrom({"InstaneceIncorrect_1": gdjs.MainGameCode.GDInstaneceIncorrect_95951Objects1, "InstaneceIncorrect_2": gdjs.MainGameCode.GDInstaneceIncorrect_95952Objects1, "InstaneceIncorrect_3": gdjs.MainGameCode.GDInstaneceIncorrect_95953Objects1});
gdjs.MainGameCode.mapOfGDgdjs_9546MainGameCode_9546GDIncorrectBoxObjects1Objects = Hashtable.newFrom({"IncorrectBox": gdjs.MainGameCode.GDIncorrectBoxObjects1});
gdjs.MainGameCode.mapOfGDgdjs_9546MainGameCode_9546GDInstanceCorrect_959595951Objects1ObjectsGDgdjs_9546MainGameCode_9546GDInstanceCorrect_959595952Objects1ObjectsGDgdjs_9546MainGameCode_9546GDInstanceCorrect_959595953Objects1Objects = Hashtable.newFrom({"InstanceCorrect_1": gdjs.MainGameCode.GDInstanceCorrect_95951Objects1, "InstanceCorrect_2": gdjs.MainGameCode.GDInstanceCorrect_95952Objects1, "InstanceCorrect_3": gdjs.MainGameCode.GDInstanceCorrect_95953Objects1});
gdjs.MainGameCode.mapOfGDgdjs_9546MainGameCode_9546GDIncorrectBoxObjects1Objects = Hashtable.newFrom({"IncorrectBox": gdjs.MainGameCode.GDIncorrectBoxObjects1});
gdjs.MainGameCode.mapOfGDgdjs_9546MainGameCode_9546GDInstaneceIncorrect_959595951Objects1ObjectsGDgdjs_9546MainGameCode_9546GDInstaneceIncorrect_959595952Objects1ObjectsGDgdjs_9546MainGameCode_9546GDInstaneceIncorrect_959595953Objects1Objects = Hashtable.newFrom({"InstaneceIncorrect_1": gdjs.MainGameCode.GDInstaneceIncorrect_95951Objects1, "InstaneceIncorrect_2": gdjs.MainGameCode.GDInstaneceIncorrect_95952Objects1, "InstaneceIncorrect_3": gdjs.MainGameCode.GDInstaneceIncorrect_95953Objects1});
gdjs.MainGameCode.mapOfGDgdjs_9546MainGameCode_9546GDCorrectBoxObjects1Objects = Hashtable.newFrom({"CorrectBox": gdjs.MainGameCode.GDCorrectBoxObjects1});
gdjs.MainGameCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("InstanceCorrect_1"), gdjs.MainGameCode.GDInstanceCorrect_95951Objects1);
gdjs.copyArray(runtimeScene.getObjects("InstanceCorrect_2"), gdjs.MainGameCode.GDInstanceCorrect_95952Objects1);
gdjs.copyArray(runtimeScene.getObjects("InstanceCorrect_3"), gdjs.MainGameCode.GDInstanceCorrect_95953Objects1);
gdjs.copyArray(runtimeScene.getObjects("InstaneceIncorrect_1"), gdjs.MainGameCode.GDInstaneceIncorrect_95951Objects1);
gdjs.copyArray(runtimeScene.getObjects("InstaneceIncorrect_2"), gdjs.MainGameCode.GDInstaneceIncorrect_95952Objects1);
gdjs.copyArray(runtimeScene.getObjects("InstaneceIncorrect_3"), gdjs.MainGameCode.GDInstaneceIncorrect_95953Objects1);
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.MainGameCode.GDScoreObjects1);
{gdjs.evtTools.sound.playMusic(runtimeScene, "assets\\Kids Happy Funny Background Music For Videos.mp3", false, 12, 1);
}
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(gdjs.evtTools.object.pickedObjectsCount(gdjs.MainGameCode.mapOfGDgdjs_9546MainGameCode_9546GDInstanceCorrect_959595951Objects1ObjectsGDgdjs_9546MainGameCode_9546GDInstaneceIncorrect_959595951Objects1ObjectsGDgdjs_9546MainGameCode_9546GDInstanceCorrect_959595952Objects1ObjectsGDgdjs_9546MainGameCode_9546GDInstaneceIncorrect_959595952Objects1ObjectsGDgdjs_9546MainGameCode_9546GDInstaneceIncorrect_959595953Objects1ObjectsGDgdjs_9546MainGameCode_9546GDInstanceCorrect_959595953Objects1Objects));
}
{for(var i = 0, len = gdjs.MainGameCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDScoreObjects1[i].getBehavior("Text").setText("0/" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2))));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("InstanceCorrect_1"), gdjs.MainGameCode.GDInstanceCorrect_95951Objects1);
gdjs.copyArray(runtimeScene.getObjects("InstanceCorrect_2"), gdjs.MainGameCode.GDInstanceCorrect_95952Objects1);
gdjs.copyArray(runtimeScene.getObjects("InstanceCorrect_3"), gdjs.MainGameCode.GDInstanceCorrect_95953Objects1);

gdjs.MainGameCode.forEachTotalCount2 = 0;
gdjs.MainGameCode.forEachObjects2.length = 0;
gdjs.MainGameCode.forEachCount0_2 = gdjs.MainGameCode.GDInstanceCorrect_95951Objects1.length;
gdjs.MainGameCode.forEachTotalCount2 += gdjs.MainGameCode.forEachCount0_2;
gdjs.MainGameCode.forEachObjects2.push.apply(gdjs.MainGameCode.forEachObjects2,gdjs.MainGameCode.GDInstanceCorrect_95951Objects1);
gdjs.MainGameCode.forEachCount1_2 = gdjs.MainGameCode.GDInstanceCorrect_95952Objects1.length;
gdjs.MainGameCode.forEachTotalCount2 += gdjs.MainGameCode.forEachCount1_2;
gdjs.MainGameCode.forEachObjects2.push.apply(gdjs.MainGameCode.forEachObjects2,gdjs.MainGameCode.GDInstanceCorrect_95952Objects1);
gdjs.MainGameCode.forEachCount2_2 = gdjs.MainGameCode.GDInstanceCorrect_95953Objects1.length;
gdjs.MainGameCode.forEachTotalCount2 += gdjs.MainGameCode.forEachCount2_2;
gdjs.MainGameCode.forEachObjects2.push.apply(gdjs.MainGameCode.forEachObjects2,gdjs.MainGameCode.GDInstanceCorrect_95953Objects1);
for (gdjs.MainGameCode.forEachIndex2 = 0;gdjs.MainGameCode.forEachIndex2 < gdjs.MainGameCode.forEachTotalCount2;++gdjs.MainGameCode.forEachIndex2) {
gdjs.MainGameCode.GDInstanceCorrect_95951Objects2.length = 0;

gdjs.MainGameCode.GDInstanceCorrect_95952Objects2.length = 0;

gdjs.MainGameCode.GDInstanceCorrect_95953Objects2.length = 0;


if (gdjs.MainGameCode.forEachIndex2 < gdjs.MainGameCode.forEachCount0_2) {
    gdjs.MainGameCode.GDInstanceCorrect_95951Objects2.push(gdjs.MainGameCode.forEachObjects2[gdjs.MainGameCode.forEachIndex2]);
}
else if (gdjs.MainGameCode.forEachIndex2 < gdjs.MainGameCode.forEachCount0_2+gdjs.MainGameCode.forEachCount1_2) {
    gdjs.MainGameCode.GDInstanceCorrect_95952Objects2.push(gdjs.MainGameCode.forEachObjects2[gdjs.MainGameCode.forEachIndex2]);
}
else if (gdjs.MainGameCode.forEachIndex2 < gdjs.MainGameCode.forEachCount0_2+gdjs.MainGameCode.forEachCount1_2+gdjs.MainGameCode.forEachCount2_2) {
    gdjs.MainGameCode.GDInstanceCorrect_95953Objects2.push(gdjs.MainGameCode.forEachObjects2[gdjs.MainGameCode.forEachIndex2]);
}
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.MainGameCode.GDInstanceCorrect_95951Objects2.length ;i < len;++i) {
    gdjs.MainGameCode.GDInstanceCorrect_95951Objects2[i].returnVariable(gdjs.MainGameCode.GDInstanceCorrect_95951Objects2[i].getVariables().get("CorrectOriX")).setNumber((gdjs.MainGameCode.GDInstanceCorrect_95951Objects2[i].getPointX("")));
}
for(var i = 0, len = gdjs.MainGameCode.GDInstanceCorrect_95952Objects2.length ;i < len;++i) {
    gdjs.MainGameCode.GDInstanceCorrect_95952Objects2[i].returnVariable(gdjs.MainGameCode.GDInstanceCorrect_95952Objects2[i].getVariables().get("CorrectOriX")).setNumber((gdjs.MainGameCode.GDInstanceCorrect_95952Objects2[i].getPointX("")));
}
for(var i = 0, len = gdjs.MainGameCode.GDInstanceCorrect_95953Objects2.length ;i < len;++i) {
    gdjs.MainGameCode.GDInstanceCorrect_95953Objects2[i].returnVariable(gdjs.MainGameCode.GDInstanceCorrect_95953Objects2[i].getVariables().get("CorrectOriX")).setNumber((gdjs.MainGameCode.GDInstanceCorrect_95953Objects2[i].getPointX("")));
}
}
{for(var i = 0, len = gdjs.MainGameCode.GDInstanceCorrect_95951Objects2.length ;i < len;++i) {
    gdjs.MainGameCode.GDInstanceCorrect_95951Objects2[i].returnVariable(gdjs.MainGameCode.GDInstanceCorrect_95951Objects2[i].getVariables().get("CorrectOriY")).setNumber((gdjs.MainGameCode.GDInstanceCorrect_95951Objects2[i].getPointY("")));
}
for(var i = 0, len = gdjs.MainGameCode.GDInstanceCorrect_95952Objects2.length ;i < len;++i) {
    gdjs.MainGameCode.GDInstanceCorrect_95952Objects2[i].returnVariable(gdjs.MainGameCode.GDInstanceCorrect_95952Objects2[i].getVariables().get("CorrectOriY")).setNumber((gdjs.MainGameCode.GDInstanceCorrect_95952Objects2[i].getPointY("")));
}
for(var i = 0, len = gdjs.MainGameCode.GDInstanceCorrect_95953Objects2.length ;i < len;++i) {
    gdjs.MainGameCode.GDInstanceCorrect_95953Objects2[i].returnVariable(gdjs.MainGameCode.GDInstanceCorrect_95953Objects2[i].getVariables().get("CorrectOriY")).setNumber((gdjs.MainGameCode.GDInstanceCorrect_95953Objects2[i].getPointY("")));
}
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("InstaneceIncorrect_1"), gdjs.MainGameCode.GDInstaneceIncorrect_95951Objects1);
gdjs.copyArray(runtimeScene.getObjects("InstaneceIncorrect_2"), gdjs.MainGameCode.GDInstaneceIncorrect_95952Objects1);
gdjs.copyArray(runtimeScene.getObjects("InstaneceIncorrect_3"), gdjs.MainGameCode.GDInstaneceIncorrect_95953Objects1);

gdjs.MainGameCode.forEachTotalCount2 = 0;
gdjs.MainGameCode.forEachObjects2.length = 0;
gdjs.MainGameCode.forEachCount0_2 = gdjs.MainGameCode.GDInstaneceIncorrect_95951Objects1.length;
gdjs.MainGameCode.forEachTotalCount2 += gdjs.MainGameCode.forEachCount0_2;
gdjs.MainGameCode.forEachObjects2.push.apply(gdjs.MainGameCode.forEachObjects2,gdjs.MainGameCode.GDInstaneceIncorrect_95951Objects1);
gdjs.MainGameCode.forEachCount1_2 = gdjs.MainGameCode.GDInstaneceIncorrect_95952Objects1.length;
gdjs.MainGameCode.forEachTotalCount2 += gdjs.MainGameCode.forEachCount1_2;
gdjs.MainGameCode.forEachObjects2.push.apply(gdjs.MainGameCode.forEachObjects2,gdjs.MainGameCode.GDInstaneceIncorrect_95952Objects1);
gdjs.MainGameCode.forEachCount2_2 = gdjs.MainGameCode.GDInstaneceIncorrect_95953Objects1.length;
gdjs.MainGameCode.forEachTotalCount2 += gdjs.MainGameCode.forEachCount2_2;
gdjs.MainGameCode.forEachObjects2.push.apply(gdjs.MainGameCode.forEachObjects2,gdjs.MainGameCode.GDInstaneceIncorrect_95953Objects1);
for (gdjs.MainGameCode.forEachIndex2 = 0;gdjs.MainGameCode.forEachIndex2 < gdjs.MainGameCode.forEachTotalCount2;++gdjs.MainGameCode.forEachIndex2) {
gdjs.MainGameCode.GDInstaneceIncorrect_95951Objects2.length = 0;

gdjs.MainGameCode.GDInstaneceIncorrect_95952Objects2.length = 0;

gdjs.MainGameCode.GDInstaneceIncorrect_95953Objects2.length = 0;


if (gdjs.MainGameCode.forEachIndex2 < gdjs.MainGameCode.forEachCount0_2) {
    gdjs.MainGameCode.GDInstaneceIncorrect_95951Objects2.push(gdjs.MainGameCode.forEachObjects2[gdjs.MainGameCode.forEachIndex2]);
}
else if (gdjs.MainGameCode.forEachIndex2 < gdjs.MainGameCode.forEachCount0_2+gdjs.MainGameCode.forEachCount1_2) {
    gdjs.MainGameCode.GDInstaneceIncorrect_95952Objects2.push(gdjs.MainGameCode.forEachObjects2[gdjs.MainGameCode.forEachIndex2]);
}
else if (gdjs.MainGameCode.forEachIndex2 < gdjs.MainGameCode.forEachCount0_2+gdjs.MainGameCode.forEachCount1_2+gdjs.MainGameCode.forEachCount2_2) {
    gdjs.MainGameCode.GDInstaneceIncorrect_95953Objects2.push(gdjs.MainGameCode.forEachObjects2[gdjs.MainGameCode.forEachIndex2]);
}
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.MainGameCode.GDInstaneceIncorrect_95951Objects2.length ;i < len;++i) {
    gdjs.MainGameCode.GDInstaneceIncorrect_95951Objects2[i].returnVariable(gdjs.MainGameCode.GDInstaneceIncorrect_95951Objects2[i].getVariables().get("IncorrectOriX")).setNumber((gdjs.MainGameCode.GDInstaneceIncorrect_95951Objects2[i].getPointX("")));
}
for(var i = 0, len = gdjs.MainGameCode.GDInstaneceIncorrect_95952Objects2.length ;i < len;++i) {
    gdjs.MainGameCode.GDInstaneceIncorrect_95952Objects2[i].returnVariable(gdjs.MainGameCode.GDInstaneceIncorrect_95952Objects2[i].getVariables().get("IncorrectOriX")).setNumber((gdjs.MainGameCode.GDInstaneceIncorrect_95952Objects2[i].getPointX("")));
}
for(var i = 0, len = gdjs.MainGameCode.GDInstaneceIncorrect_95953Objects2.length ;i < len;++i) {
    gdjs.MainGameCode.GDInstaneceIncorrect_95953Objects2[i].returnVariable(gdjs.MainGameCode.GDInstaneceIncorrect_95953Objects2[i].getVariables().get("IncorrectOriX")).setNumber((gdjs.MainGameCode.GDInstaneceIncorrect_95953Objects2[i].getPointX("")));
}
}
{for(var i = 0, len = gdjs.MainGameCode.GDInstaneceIncorrect_95951Objects2.length ;i < len;++i) {
    gdjs.MainGameCode.GDInstaneceIncorrect_95951Objects2[i].returnVariable(gdjs.MainGameCode.GDInstaneceIncorrect_95951Objects2[i].getVariables().get("IncorrectOriY")).setNumber((gdjs.MainGameCode.GDInstaneceIncorrect_95951Objects2[i].getPointY("")));
}
for(var i = 0, len = gdjs.MainGameCode.GDInstaneceIncorrect_95952Objects2.length ;i < len;++i) {
    gdjs.MainGameCode.GDInstaneceIncorrect_95952Objects2[i].returnVariable(gdjs.MainGameCode.GDInstaneceIncorrect_95952Objects2[i].getVariables().get("IncorrectOriY")).setNumber((gdjs.MainGameCode.GDInstaneceIncorrect_95952Objects2[i].getPointY("")));
}
for(var i = 0, len = gdjs.MainGameCode.GDInstaneceIncorrect_95953Objects2.length ;i < len;++i) {
    gdjs.MainGameCode.GDInstaneceIncorrect_95953Objects2[i].returnVariable(gdjs.MainGameCode.GDInstaneceIncorrect_95953Objects2[i].getVariables().get("IncorrectOriY")).setNumber((gdjs.MainGameCode.GDInstaneceIncorrect_95953Objects2[i].getPointY("")));
}
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("InstanceCorrect_1"), gdjs.MainGameCode.GDInstanceCorrect_95951Objects1);
gdjs.copyArray(runtimeScene.getObjects("InstanceCorrect_2"), gdjs.MainGameCode.GDInstanceCorrect_95952Objects1);
gdjs.copyArray(runtimeScene.getObjects("InstanceCorrect_3"), gdjs.MainGameCode.GDInstanceCorrect_95953Objects1);
gdjs.copyArray(runtimeScene.getObjects("InstaneceIncorrect_1"), gdjs.MainGameCode.GDInstaneceIncorrect_95951Objects1);
gdjs.copyArray(runtimeScene.getObjects("InstaneceIncorrect_2"), gdjs.MainGameCode.GDInstaneceIncorrect_95952Objects1);
gdjs.copyArray(runtimeScene.getObjects("InstaneceIncorrect_3"), gdjs.MainGameCode.GDInstaneceIncorrect_95953Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainGameCode.GDInstanceCorrect_95951Objects1.length;i<l;++i) {
    if ( gdjs.MainGameCode.GDInstanceCorrect_95951Objects1[i].getBehavior("Draggable").isDragged() ) {
        isConditionTrue_0 = true;
        gdjs.MainGameCode.GDInstanceCorrect_95951Objects1[k] = gdjs.MainGameCode.GDInstanceCorrect_95951Objects1[i];
        ++k;
    }
}
gdjs.MainGameCode.GDInstanceCorrect_95951Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.MainGameCode.GDInstaneceIncorrect_95951Objects1.length;i<l;++i) {
    if ( gdjs.MainGameCode.GDInstaneceIncorrect_95951Objects1[i].getBehavior("Draggable").isDragged() ) {
        isConditionTrue_0 = true;
        gdjs.MainGameCode.GDInstaneceIncorrect_95951Objects1[k] = gdjs.MainGameCode.GDInstaneceIncorrect_95951Objects1[i];
        ++k;
    }
}
gdjs.MainGameCode.GDInstaneceIncorrect_95951Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.MainGameCode.GDInstanceCorrect_95952Objects1.length;i<l;++i) {
    if ( gdjs.MainGameCode.GDInstanceCorrect_95952Objects1[i].getBehavior("Draggable").isDragged() ) {
        isConditionTrue_0 = true;
        gdjs.MainGameCode.GDInstanceCorrect_95952Objects1[k] = gdjs.MainGameCode.GDInstanceCorrect_95952Objects1[i];
        ++k;
    }
}
gdjs.MainGameCode.GDInstanceCorrect_95952Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.MainGameCode.GDInstaneceIncorrect_95952Objects1.length;i<l;++i) {
    if ( gdjs.MainGameCode.GDInstaneceIncorrect_95952Objects1[i].getBehavior("Draggable").isDragged() ) {
        isConditionTrue_0 = true;
        gdjs.MainGameCode.GDInstaneceIncorrect_95952Objects1[k] = gdjs.MainGameCode.GDInstaneceIncorrect_95952Objects1[i];
        ++k;
    }
}
gdjs.MainGameCode.GDInstaneceIncorrect_95952Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.MainGameCode.GDInstaneceIncorrect_95953Objects1.length;i<l;++i) {
    if ( gdjs.MainGameCode.GDInstaneceIncorrect_95953Objects1[i].getBehavior("Draggable").isDragged() ) {
        isConditionTrue_0 = true;
        gdjs.MainGameCode.GDInstaneceIncorrect_95953Objects1[k] = gdjs.MainGameCode.GDInstaneceIncorrect_95953Objects1[i];
        ++k;
    }
}
gdjs.MainGameCode.GDInstaneceIncorrect_95953Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.MainGameCode.GDInstanceCorrect_95953Objects1.length;i<l;++i) {
    if ( gdjs.MainGameCode.GDInstanceCorrect_95953Objects1[i].getBehavior("Draggable").isDragged() ) {
        isConditionTrue_0 = true;
        gdjs.MainGameCode.GDInstanceCorrect_95953Objects1[k] = gdjs.MainGameCode.GDInstanceCorrect_95953Objects1[i];
        ++k;
    }
}
gdjs.MainGameCode.GDInstanceCorrect_95953Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(8315484);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MainGameCode.GDInstanceCorrect_95951Objects1 */
/* Reuse gdjs.MainGameCode.GDInstanceCorrect_95952Objects1 */
/* Reuse gdjs.MainGameCode.GDInstanceCorrect_95953Objects1 */
/* Reuse gdjs.MainGameCode.GDInstaneceIncorrect_95951Objects1 */
/* Reuse gdjs.MainGameCode.GDInstaneceIncorrect_95952Objects1 */
/* Reuse gdjs.MainGameCode.GDInstaneceIncorrect_95953Objects1 */
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}
{for(var i = 0, len = gdjs.MainGameCode.GDInstanceCorrect_95951Objects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDInstanceCorrect_95951Objects1[i].returnVariable(gdjs.MainGameCode.GDInstanceCorrect_95951Objects1[i].getVariables().get("MyNewZ")).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
for(var i = 0, len = gdjs.MainGameCode.GDInstaneceIncorrect_95951Objects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDInstaneceIncorrect_95951Objects1[i].returnVariable(gdjs.MainGameCode.GDInstaneceIncorrect_95951Objects1[i].getVariables().get("MyNewZ")).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
for(var i = 0, len = gdjs.MainGameCode.GDInstanceCorrect_95952Objects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDInstanceCorrect_95952Objects1[i].returnVariable(gdjs.MainGameCode.GDInstanceCorrect_95952Objects1[i].getVariables().get("MyNewZ")).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
for(var i = 0, len = gdjs.MainGameCode.GDInstaneceIncorrect_95952Objects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDInstaneceIncorrect_95952Objects1[i].returnVariable(gdjs.MainGameCode.GDInstaneceIncorrect_95952Objects1[i].getVariables().get("MyNewZ")).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
for(var i = 0, len = gdjs.MainGameCode.GDInstaneceIncorrect_95953Objects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDInstaneceIncorrect_95953Objects1[i].returnVariable(gdjs.MainGameCode.GDInstaneceIncorrect_95953Objects1[i].getVariables().get("MyNewZ")).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
for(var i = 0, len = gdjs.MainGameCode.GDInstanceCorrect_95953Objects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDInstanceCorrect_95953Objects1[i].returnVariable(gdjs.MainGameCode.GDInstanceCorrect_95953Objects1[i].getVariables().get("MyNewZ")).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.MainGameCode.GDInstanceCorrect_95951Objects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDInstanceCorrect_95951Objects1[i].setZOrder(10000);
}
for(var i = 0, len = gdjs.MainGameCode.GDInstaneceIncorrect_95951Objects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDInstaneceIncorrect_95951Objects1[i].setZOrder(10000);
}
for(var i = 0, len = gdjs.MainGameCode.GDInstanceCorrect_95952Objects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDInstanceCorrect_95952Objects1[i].setZOrder(10000);
}
for(var i = 0, len = gdjs.MainGameCode.GDInstaneceIncorrect_95952Objects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDInstaneceIncorrect_95952Objects1[i].setZOrder(10000);
}
for(var i = 0, len = gdjs.MainGameCode.GDInstaneceIncorrect_95953Objects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDInstaneceIncorrect_95953Objects1[i].setZOrder(10000);
}
for(var i = 0, len = gdjs.MainGameCode.GDInstanceCorrect_95953Objects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDInstanceCorrect_95953Objects1[i].setZOrder(10000);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "d32cb297988f21b74f7f893fff28430f0198b3c1f8a6c0622520e9158b284d3f_jump.aac", false, 100, 1);
}

{ //Subevents
gdjs.MainGameCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs.MainGameCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CorrectBox"), gdjs.MainGameCode.GDCorrectBoxObjects1);
gdjs.copyArray(runtimeScene.getObjects("InstanceCorrect_1"), gdjs.MainGameCode.GDInstanceCorrect_95951Objects1);
gdjs.copyArray(runtimeScene.getObjects("InstanceCorrect_2"), gdjs.MainGameCode.GDInstanceCorrect_95952Objects1);
gdjs.copyArray(runtimeScene.getObjects("InstanceCorrect_3"), gdjs.MainGameCode.GDInstanceCorrect_95953Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainGameCode.GDInstanceCorrect_95951Objects1.length;i<l;++i) {
    if ( !(gdjs.MainGameCode.GDInstanceCorrect_95951Objects1[i].getBehavior("Draggable").isDragged()) ) {
        isConditionTrue_0 = true;
        gdjs.MainGameCode.GDInstanceCorrect_95951Objects1[k] = gdjs.MainGameCode.GDInstanceCorrect_95951Objects1[i];
        ++k;
    }
}
gdjs.MainGameCode.GDInstanceCorrect_95951Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.MainGameCode.GDInstanceCorrect_95952Objects1.length;i<l;++i) {
    if ( !(gdjs.MainGameCode.GDInstanceCorrect_95952Objects1[i].getBehavior("Draggable").isDragged()) ) {
        isConditionTrue_0 = true;
        gdjs.MainGameCode.GDInstanceCorrect_95952Objects1[k] = gdjs.MainGameCode.GDInstanceCorrect_95952Objects1[i];
        ++k;
    }
}
gdjs.MainGameCode.GDInstanceCorrect_95952Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.MainGameCode.GDInstanceCorrect_95953Objects1.length;i<l;++i) {
    if ( !(gdjs.MainGameCode.GDInstanceCorrect_95953Objects1[i].getBehavior("Draggable").isDragged()) ) {
        isConditionTrue_0 = true;
        gdjs.MainGameCode.GDInstanceCorrect_95953Objects1[k] = gdjs.MainGameCode.GDInstanceCorrect_95953Objects1[i];
        ++k;
    }
}
gdjs.MainGameCode.GDInstanceCorrect_95953Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainGameCode.mapOfGDgdjs_9546MainGameCode_9546GDInstanceCorrect_959595951Objects1ObjectsGDgdjs_9546MainGameCode_9546GDInstanceCorrect_959595952Objects1ObjectsGDgdjs_9546MainGameCode_9546GDInstanceCorrect_959595953Objects1Objects, gdjs.MainGameCode.mapOfGDgdjs_9546MainGameCode_9546GDCorrectBoxObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9324316);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MainGameCode.GDInstanceCorrect_95951Objects1 */
/* Reuse gdjs.MainGameCode.GDInstanceCorrect_95952Objects1 */
/* Reuse gdjs.MainGameCode.GDInstanceCorrect_95953Objects1 */
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.MainGameCode.GDScoreObjects1);
{for(var i = 0, len = gdjs.MainGameCode.GDInstanceCorrect_95951Objects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDInstanceCorrect_95951Objects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.MainGameCode.GDInstanceCorrect_95952Objects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDInstanceCorrect_95952Objects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.MainGameCode.GDInstanceCorrect_95953Objects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDInstanceCorrect_95953Objects1[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "95aef1c1a58062c7bcb3d61bdaa14c87a5032d3332ec5c257b359cc1efb5ce87_Gold 2.aac", false, 75, 1);
}
{runtimeScene.getScene().getVariables().getFromIndex(1).add(1);
}
{for(var i = 0, len = gdjs.MainGameCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDScoreObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1))) + "/" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2))));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("IncorrectBox"), gdjs.MainGameCode.GDIncorrectBoxObjects1);
gdjs.copyArray(runtimeScene.getObjects("InstaneceIncorrect_1"), gdjs.MainGameCode.GDInstaneceIncorrect_95951Objects1);
gdjs.copyArray(runtimeScene.getObjects("InstaneceIncorrect_2"), gdjs.MainGameCode.GDInstaneceIncorrect_95952Objects1);
gdjs.copyArray(runtimeScene.getObjects("InstaneceIncorrect_3"), gdjs.MainGameCode.GDInstaneceIncorrect_95953Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainGameCode.GDInstaneceIncorrect_95951Objects1.length;i<l;++i) {
    if ( !(gdjs.MainGameCode.GDInstaneceIncorrect_95951Objects1[i].getBehavior("Draggable").isDragged()) ) {
        isConditionTrue_0 = true;
        gdjs.MainGameCode.GDInstaneceIncorrect_95951Objects1[k] = gdjs.MainGameCode.GDInstaneceIncorrect_95951Objects1[i];
        ++k;
    }
}
gdjs.MainGameCode.GDInstaneceIncorrect_95951Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.MainGameCode.GDInstaneceIncorrect_95952Objects1.length;i<l;++i) {
    if ( !(gdjs.MainGameCode.GDInstaneceIncorrect_95952Objects1[i].getBehavior("Draggable").isDragged()) ) {
        isConditionTrue_0 = true;
        gdjs.MainGameCode.GDInstaneceIncorrect_95952Objects1[k] = gdjs.MainGameCode.GDInstaneceIncorrect_95952Objects1[i];
        ++k;
    }
}
gdjs.MainGameCode.GDInstaneceIncorrect_95952Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.MainGameCode.GDInstaneceIncorrect_95953Objects1.length;i<l;++i) {
    if ( !(gdjs.MainGameCode.GDInstaneceIncorrect_95953Objects1[i].getBehavior("Draggable").isDragged()) ) {
        isConditionTrue_0 = true;
        gdjs.MainGameCode.GDInstaneceIncorrect_95953Objects1[k] = gdjs.MainGameCode.GDInstaneceIncorrect_95953Objects1[i];
        ++k;
    }
}
gdjs.MainGameCode.GDInstaneceIncorrect_95953Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainGameCode.mapOfGDgdjs_9546MainGameCode_9546GDInstaneceIncorrect_959595951Objects1ObjectsGDgdjs_9546MainGameCode_9546GDInstaneceIncorrect_959595952Objects1ObjectsGDgdjs_9546MainGameCode_9546GDInstaneceIncorrect_959595953Objects1Objects, gdjs.MainGameCode.mapOfGDgdjs_9546MainGameCode_9546GDIncorrectBoxObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9324716);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MainGameCode.GDInstaneceIncorrect_95951Objects1 */
/* Reuse gdjs.MainGameCode.GDInstaneceIncorrect_95952Objects1 */
/* Reuse gdjs.MainGameCode.GDInstaneceIncorrect_95953Objects1 */
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.MainGameCode.GDScoreObjects1);
{for(var i = 0, len = gdjs.MainGameCode.GDInstaneceIncorrect_95951Objects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDInstaneceIncorrect_95951Objects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.MainGameCode.GDInstaneceIncorrect_95952Objects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDInstaneceIncorrect_95952Objects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.MainGameCode.GDInstaneceIncorrect_95953Objects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDInstaneceIncorrect_95953Objects1[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "95aef1c1a58062c7bcb3d61bdaa14c87a5032d3332ec5c257b359cc1efb5ce87_Gold 2.aac", false, 75, 1);
}
{runtimeScene.getScene().getVariables().getFromIndex(1).add(1);
}
{for(var i = 0, len = gdjs.MainGameCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDScoreObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1))) + "/" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2))));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("IncorrectBox"), gdjs.MainGameCode.GDIncorrectBoxObjects1);
gdjs.copyArray(runtimeScene.getObjects("InstanceCorrect_1"), gdjs.MainGameCode.GDInstanceCorrect_95951Objects1);
gdjs.copyArray(runtimeScene.getObjects("InstanceCorrect_2"), gdjs.MainGameCode.GDInstanceCorrect_95952Objects1);
gdjs.copyArray(runtimeScene.getObjects("InstanceCorrect_3"), gdjs.MainGameCode.GDInstanceCorrect_95953Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainGameCode.GDInstanceCorrect_95951Objects1.length;i<l;++i) {
    if ( !(gdjs.MainGameCode.GDInstanceCorrect_95951Objects1[i].getBehavior("Draggable").isDragged()) ) {
        isConditionTrue_0 = true;
        gdjs.MainGameCode.GDInstanceCorrect_95951Objects1[k] = gdjs.MainGameCode.GDInstanceCorrect_95951Objects1[i];
        ++k;
    }
}
gdjs.MainGameCode.GDInstanceCorrect_95951Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.MainGameCode.GDInstanceCorrect_95952Objects1.length;i<l;++i) {
    if ( !(gdjs.MainGameCode.GDInstanceCorrect_95952Objects1[i].getBehavior("Draggable").isDragged()) ) {
        isConditionTrue_0 = true;
        gdjs.MainGameCode.GDInstanceCorrect_95952Objects1[k] = gdjs.MainGameCode.GDInstanceCorrect_95952Objects1[i];
        ++k;
    }
}
gdjs.MainGameCode.GDInstanceCorrect_95952Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.MainGameCode.GDInstanceCorrect_95953Objects1.length;i<l;++i) {
    if ( !(gdjs.MainGameCode.GDInstanceCorrect_95953Objects1[i].getBehavior("Draggable").isDragged()) ) {
        isConditionTrue_0 = true;
        gdjs.MainGameCode.GDInstanceCorrect_95953Objects1[k] = gdjs.MainGameCode.GDInstanceCorrect_95953Objects1[i];
        ++k;
    }
}
gdjs.MainGameCode.GDInstanceCorrect_95953Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainGameCode.mapOfGDgdjs_9546MainGameCode_9546GDInstanceCorrect_959595951Objects1ObjectsGDgdjs_9546MainGameCode_9546GDInstanceCorrect_959595952Objects1ObjectsGDgdjs_9546MainGameCode_9546GDInstanceCorrect_959595953Objects1Objects, gdjs.MainGameCode.mapOfGDgdjs_9546MainGameCode_9546GDIncorrectBoxObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9327452);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MainGameCode.GDInstanceCorrect_95951Objects1 */
/* Reuse gdjs.MainGameCode.GDInstanceCorrect_95952Objects1 */
/* Reuse gdjs.MainGameCode.GDInstanceCorrect_95953Objects1 */
{for(var i = 0, len = gdjs.MainGameCode.GDInstanceCorrect_95951Objects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDInstanceCorrect_95951Objects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.MainGameCode.GDInstanceCorrect_95952Objects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDInstanceCorrect_95952Objects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.MainGameCode.GDInstanceCorrect_95953Objects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDInstanceCorrect_95953Objects1[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "483c313c13e5af9aac8770d0f5b22a1b1213b889e7a58756c481604fbffd3830_Blip 2.aac", false, 100, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CorrectBox"), gdjs.MainGameCode.GDCorrectBoxObjects1);
gdjs.copyArray(runtimeScene.getObjects("InstaneceIncorrect_1"), gdjs.MainGameCode.GDInstaneceIncorrect_95951Objects1);
gdjs.copyArray(runtimeScene.getObjects("InstaneceIncorrect_2"), gdjs.MainGameCode.GDInstaneceIncorrect_95952Objects1);
gdjs.copyArray(runtimeScene.getObjects("InstaneceIncorrect_3"), gdjs.MainGameCode.GDInstaneceIncorrect_95953Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainGameCode.GDInstaneceIncorrect_95951Objects1.length;i<l;++i) {
    if ( !(gdjs.MainGameCode.GDInstaneceIncorrect_95951Objects1[i].getBehavior("Draggable").isDragged()) ) {
        isConditionTrue_0 = true;
        gdjs.MainGameCode.GDInstaneceIncorrect_95951Objects1[k] = gdjs.MainGameCode.GDInstaneceIncorrect_95951Objects1[i];
        ++k;
    }
}
gdjs.MainGameCode.GDInstaneceIncorrect_95951Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.MainGameCode.GDInstaneceIncorrect_95952Objects1.length;i<l;++i) {
    if ( !(gdjs.MainGameCode.GDInstaneceIncorrect_95952Objects1[i].getBehavior("Draggable").isDragged()) ) {
        isConditionTrue_0 = true;
        gdjs.MainGameCode.GDInstaneceIncorrect_95952Objects1[k] = gdjs.MainGameCode.GDInstaneceIncorrect_95952Objects1[i];
        ++k;
    }
}
gdjs.MainGameCode.GDInstaneceIncorrect_95952Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.MainGameCode.GDInstaneceIncorrect_95953Objects1.length;i<l;++i) {
    if ( !(gdjs.MainGameCode.GDInstaneceIncorrect_95953Objects1[i].getBehavior("Draggable").isDragged()) ) {
        isConditionTrue_0 = true;
        gdjs.MainGameCode.GDInstaneceIncorrect_95953Objects1[k] = gdjs.MainGameCode.GDInstaneceIncorrect_95953Objects1[i];
        ++k;
    }
}
gdjs.MainGameCode.GDInstaneceIncorrect_95953Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainGameCode.mapOfGDgdjs_9546MainGameCode_9546GDInstaneceIncorrect_959595951Objects1ObjectsGDgdjs_9546MainGameCode_9546GDInstaneceIncorrect_959595952Objects1ObjectsGDgdjs_9546MainGameCode_9546GDInstaneceIncorrect_959595953Objects1Objects, gdjs.MainGameCode.mapOfGDgdjs_9546MainGameCode_9546GDCorrectBoxObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9328788);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MainGameCode.GDInstaneceIncorrect_95951Objects1 */
/* Reuse gdjs.MainGameCode.GDInstaneceIncorrect_95952Objects1 */
/* Reuse gdjs.MainGameCode.GDInstaneceIncorrect_95953Objects1 */
{for(var i = 0, len = gdjs.MainGameCode.GDInstaneceIncorrect_95951Objects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDInstaneceIncorrect_95951Objects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.MainGameCode.GDInstaneceIncorrect_95952Objects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDInstaneceIncorrect_95952Objects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.MainGameCode.GDInstaneceIncorrect_95953Objects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDInstaneceIncorrect_95953Objects1[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "483c313c13e5af9aac8770d0f5b22a1b1213b889e7a58756c481604fbffd3830_Blip 2.aac", false, 100, 1);
}
}

}


};

gdjs.MainGameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainGameCode.GDBackgroundObjects1.length = 0;
gdjs.MainGameCode.GDBackgroundObjects2.length = 0;
gdjs.MainGameCode.GDBackgroundObjects3.length = 0;
gdjs.MainGameCode.GDCorrectBoxObjects1.length = 0;
gdjs.MainGameCode.GDCorrectBoxObjects2.length = 0;
gdjs.MainGameCode.GDCorrectBoxObjects3.length = 0;
gdjs.MainGameCode.GDIncorrectBoxObjects1.length = 0;
gdjs.MainGameCode.GDIncorrectBoxObjects2.length = 0;
gdjs.MainGameCode.GDIncorrectBoxObjects3.length = 0;
gdjs.MainGameCode.GDInstanceCorrect_95951Objects1.length = 0;
gdjs.MainGameCode.GDInstanceCorrect_95951Objects2.length = 0;
gdjs.MainGameCode.GDInstanceCorrect_95951Objects3.length = 0;
gdjs.MainGameCode.GDInstaneceIncorrect_95951Objects1.length = 0;
gdjs.MainGameCode.GDInstaneceIncorrect_95951Objects2.length = 0;
gdjs.MainGameCode.GDInstaneceIncorrect_95951Objects3.length = 0;
gdjs.MainGameCode.GDObjectiveObjects1.length = 0;
gdjs.MainGameCode.GDObjectiveObjects2.length = 0;
gdjs.MainGameCode.GDObjectiveObjects3.length = 0;
gdjs.MainGameCode.GDInstanceCorrect_95952Objects1.length = 0;
gdjs.MainGameCode.GDInstanceCorrect_95952Objects2.length = 0;
gdjs.MainGameCode.GDInstanceCorrect_95952Objects3.length = 0;
gdjs.MainGameCode.GDInstaneceIncorrect_95952Objects1.length = 0;
gdjs.MainGameCode.GDInstaneceIncorrect_95952Objects2.length = 0;
gdjs.MainGameCode.GDInstaneceIncorrect_95952Objects3.length = 0;
gdjs.MainGameCode.GDInstaneceIncorrect_95953Objects1.length = 0;
gdjs.MainGameCode.GDInstaneceIncorrect_95953Objects2.length = 0;
gdjs.MainGameCode.GDInstaneceIncorrect_95953Objects3.length = 0;
gdjs.MainGameCode.GDInstanceCorrect_95953Objects1.length = 0;
gdjs.MainGameCode.GDInstanceCorrect_95953Objects2.length = 0;
gdjs.MainGameCode.GDInstanceCorrect_95953Objects3.length = 0;
gdjs.MainGameCode.GDScoreObjects1.length = 0;
gdjs.MainGameCode.GDScoreObjects2.length = 0;
gdjs.MainGameCode.GDScoreObjects3.length = 0;

gdjs.MainGameCode.eventsList4(runtimeScene);
gdjs.MainGameCode.GDBackgroundObjects1.length = 0;
gdjs.MainGameCode.GDBackgroundObjects2.length = 0;
gdjs.MainGameCode.GDBackgroundObjects3.length = 0;
gdjs.MainGameCode.GDCorrectBoxObjects1.length = 0;
gdjs.MainGameCode.GDCorrectBoxObjects2.length = 0;
gdjs.MainGameCode.GDCorrectBoxObjects3.length = 0;
gdjs.MainGameCode.GDIncorrectBoxObjects1.length = 0;
gdjs.MainGameCode.GDIncorrectBoxObjects2.length = 0;
gdjs.MainGameCode.GDIncorrectBoxObjects3.length = 0;
gdjs.MainGameCode.GDInstanceCorrect_95951Objects1.length = 0;
gdjs.MainGameCode.GDInstanceCorrect_95951Objects2.length = 0;
gdjs.MainGameCode.GDInstanceCorrect_95951Objects3.length = 0;
gdjs.MainGameCode.GDInstaneceIncorrect_95951Objects1.length = 0;
gdjs.MainGameCode.GDInstaneceIncorrect_95951Objects2.length = 0;
gdjs.MainGameCode.GDInstaneceIncorrect_95951Objects3.length = 0;
gdjs.MainGameCode.GDObjectiveObjects1.length = 0;
gdjs.MainGameCode.GDObjectiveObjects2.length = 0;
gdjs.MainGameCode.GDObjectiveObjects3.length = 0;
gdjs.MainGameCode.GDInstanceCorrect_95952Objects1.length = 0;
gdjs.MainGameCode.GDInstanceCorrect_95952Objects2.length = 0;
gdjs.MainGameCode.GDInstanceCorrect_95952Objects3.length = 0;
gdjs.MainGameCode.GDInstaneceIncorrect_95952Objects1.length = 0;
gdjs.MainGameCode.GDInstaneceIncorrect_95952Objects2.length = 0;
gdjs.MainGameCode.GDInstaneceIncorrect_95952Objects3.length = 0;
gdjs.MainGameCode.GDInstaneceIncorrect_95953Objects1.length = 0;
gdjs.MainGameCode.GDInstaneceIncorrect_95953Objects2.length = 0;
gdjs.MainGameCode.GDInstaneceIncorrect_95953Objects3.length = 0;
gdjs.MainGameCode.GDInstanceCorrect_95953Objects1.length = 0;
gdjs.MainGameCode.GDInstanceCorrect_95953Objects2.length = 0;
gdjs.MainGameCode.GDInstanceCorrect_95953Objects3.length = 0;
gdjs.MainGameCode.GDScoreObjects1.length = 0;
gdjs.MainGameCode.GDScoreObjects2.length = 0;
gdjs.MainGameCode.GDScoreObjects3.length = 0;


return;

}

gdjs['MainGameCode'] = gdjs.MainGameCode;
