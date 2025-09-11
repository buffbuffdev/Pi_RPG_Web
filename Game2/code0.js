gdjs.OverworldCode = {};
gdjs.OverworldCode.localVariables = [];
gdjs.OverworldCode.GDPlayerObjects1= [];
gdjs.OverworldCode.GDPlayerObjects2= [];
gdjs.OverworldCode.GDPlayerObjects3= [];
gdjs.OverworldCode.GDKscavTilesetObjects1= [];
gdjs.OverworldCode.GDKscavTilesetObjects2= [];
gdjs.OverworldCode.GDKscavTilesetObjects3= [];
gdjs.OverworldCode.GDNewSprite2Objects1= [];
gdjs.OverworldCode.GDNewSprite2Objects2= [];
gdjs.OverworldCode.GDNewSprite2Objects3= [];
gdjs.OverworldCode.GDNewSprite3Objects1= [];
gdjs.OverworldCode.GDNewSprite3Objects2= [];
gdjs.OverworldCode.GDNewSprite3Objects3= [];
gdjs.OverworldCode.GDNewSprite4Objects1= [];
gdjs.OverworldCode.GDNewSprite4Objects2= [];
gdjs.OverworldCode.GDNewSprite4Objects3= [];
gdjs.OverworldCode.GDNewSprite5Objects1= [];
gdjs.OverworldCode.GDNewSprite5Objects2= [];
gdjs.OverworldCode.GDNewSprite5Objects3= [];
gdjs.OverworldCode.GDNewSprite6Objects1= [];
gdjs.OverworldCode.GDNewSprite6Objects2= [];
gdjs.OverworldCode.GDNewSprite6Objects3= [];
gdjs.OverworldCode.GDAligatorObjects1= [];
gdjs.OverworldCode.GDAligatorObjects2= [];
gdjs.OverworldCode.GDAligatorObjects3= [];
gdjs.OverworldCode.GDHearthObjects1= [];
gdjs.OverworldCode.GDHearthObjects2= [];
gdjs.OverworldCode.GDHearthObjects3= [];
gdjs.OverworldCode.GDHearth2Objects1= [];
gdjs.OverworldCode.GDHearth2Objects2= [];
gdjs.OverworldCode.GDHearth2Objects3= [];
gdjs.OverworldCode.GDHearth3Objects1= [];
gdjs.OverworldCode.GDHearth3Objects2= [];
gdjs.OverworldCode.GDHearth3Objects3= [];
gdjs.OverworldCode.GDHearthMobObjects1= [];
gdjs.OverworldCode.GDHearthMobObjects2= [];
gdjs.OverworldCode.GDHearthMobObjects3= [];
gdjs.OverworldCode.GDHearthMob2Objects1= [];
gdjs.OverworldCode.GDHearthMob2Objects2= [];
gdjs.OverworldCode.GDHearthMob2Objects3= [];
gdjs.OverworldCode.GDHearthMob3Objects1= [];
gdjs.OverworldCode.GDHearthMob3Objects2= [];
gdjs.OverworldCode.GDHearthMob3Objects3= [];
gdjs.OverworldCode.GDSpellThunderObjects1= [];
gdjs.OverworldCode.GDSpellThunderObjects2= [];
gdjs.OverworldCode.GDSpellThunderObjects3= [];
gdjs.OverworldCode.GDFireballObjects1= [];
gdjs.OverworldCode.GDFireballObjects2= [];
gdjs.OverworldCode.GDFireballObjects3= [];
gdjs.OverworldCode.GDCircleObjects1= [];
gdjs.OverworldCode.GDCircleObjects2= [];
gdjs.OverworldCode.GDCircleObjects3= [];
gdjs.OverworldCode.GDFireball2Objects1= [];
gdjs.OverworldCode.GDFireball2Objects2= [];
gdjs.OverworldCode.GDFireball2Objects3= [];
gdjs.OverworldCode.GDGrassObjects1= [];
gdjs.OverworldCode.GDGrassObjects2= [];
gdjs.OverworldCode.GDGrassObjects3= [];
gdjs.OverworldCode.GDTransitionObjects1= [];
gdjs.OverworldCode.GDTransitionObjects2= [];
gdjs.OverworldCode.GDTransitionObjects3= [];


gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDNewSprite4Objects1ObjectsGDgdjs_9546OverworldCode_9546GDKscavTilesetObjects1ObjectsGDgdjs_9546OverworldCode_9546GDAligatorObjects1Objects = Hashtable.newFrom({"NewSprite4": gdjs.OverworldCode.GDNewSprite4Objects1, "KscavTileset": gdjs.OverworldCode.GDKscavTilesetObjects1, "Aligator": gdjs.OverworldCode.GDAligatorObjects1});
gdjs.OverworldCode.eventsList0 = function(runtimeScene) {

};gdjs.OverworldCode.eventsList1 = function(runtimeScene) {

};gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDNewSprite6Objects2Objects = Hashtable.newFrom({"NewSprite6": gdjs.OverworldCode.GDNewSprite6Objects2});
gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDNewSprite4Objects2ObjectsGDgdjs_9546OverworldCode_9546GDKscavTilesetObjects2ObjectsGDgdjs_9546OverworldCode_9546GDAligatorObjects2Objects = Hashtable.newFrom({"NewSprite4": gdjs.OverworldCode.GDNewSprite4Objects2, "KscavTileset": gdjs.OverworldCode.GDKscavTilesetObjects2, "Aligator": gdjs.OverworldCode.GDAligatorObjects2});
gdjs.OverworldCode.asyncCallback15396724 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.OverworldCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("NewSprite6"), gdjs.OverworldCode.GDNewSprite6Objects3);

{for(var i = 0, len = gdjs.OverworldCode.GDNewSprite6Objects3.length ;i < len;++i) {
    gdjs.OverworldCode.GDNewSprite6Objects3[i].deleteFromScene(runtimeScene);
}
}gdjs.OverworldCode.localVariables.length = 0;
}
gdjs.OverworldCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.OverworldCode.localVariables);
for (const obj of gdjs.OverworldCode.GDNewSprite6Objects2) asyncObjectsList.addObject("NewSprite6", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.6), (runtimeScene) => (gdjs.OverworldCode.asyncCallback15396724(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDNewSprite6Objects2Objects = Hashtable.newFrom({"NewSprite6": gdjs.OverworldCode.GDNewSprite6Objects2});
gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDNewSprite4Objects2ObjectsGDgdjs_9546OverworldCode_9546GDKscavTilesetObjects2ObjectsGDgdjs_9546OverworldCode_9546GDAligatorObjects2Objects = Hashtable.newFrom({"NewSprite4": gdjs.OverworldCode.GDNewSprite4Objects2, "KscavTileset": gdjs.OverworldCode.GDKscavTilesetObjects2, "Aligator": gdjs.OverworldCode.GDAligatorObjects2});
gdjs.OverworldCode.asyncCallback16394540 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.OverworldCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("NewSprite6"), gdjs.OverworldCode.GDNewSprite6Objects3);

{for(var i = 0, len = gdjs.OverworldCode.GDNewSprite6Objects3.length ;i < len;++i) {
    gdjs.OverworldCode.GDNewSprite6Objects3[i].deleteFromScene(runtimeScene);
}
}gdjs.OverworldCode.localVariables.length = 0;
}
gdjs.OverworldCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.OverworldCode.localVariables);
for (const obj of gdjs.OverworldCode.GDNewSprite6Objects2) asyncObjectsList.addObject("NewSprite6", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.6), (runtimeScene) => (gdjs.OverworldCode.asyncCallback16394540(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDNewSprite6Objects2Objects = Hashtable.newFrom({"NewSprite6": gdjs.OverworldCode.GDNewSprite6Objects2});
gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDNewSprite4Objects2ObjectsGDgdjs_9546OverworldCode_9546GDKscavTilesetObjects2ObjectsGDgdjs_9546OverworldCode_9546GDAligatorObjects2Objects = Hashtable.newFrom({"NewSprite4": gdjs.OverworldCode.GDNewSprite4Objects2, "KscavTileset": gdjs.OverworldCode.GDKscavTilesetObjects2, "Aligator": gdjs.OverworldCode.GDAligatorObjects2});
gdjs.OverworldCode.asyncCallback8981524 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.OverworldCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("NewSprite6"), gdjs.OverworldCode.GDNewSprite6Objects3);

{for(var i = 0, len = gdjs.OverworldCode.GDNewSprite6Objects3.length ;i < len;++i) {
    gdjs.OverworldCode.GDNewSprite6Objects3[i].deleteFromScene(runtimeScene);
}
}gdjs.OverworldCode.localVariables.length = 0;
}
gdjs.OverworldCode.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.OverworldCode.localVariables);
for (const obj of gdjs.OverworldCode.GDNewSprite6Objects2) asyncObjectsList.addObject("NewSprite6", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.6), (runtimeScene) => (gdjs.OverworldCode.asyncCallback8981524(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDNewSprite6Objects1Objects = Hashtable.newFrom({"NewSprite6": gdjs.OverworldCode.GDNewSprite6Objects1});
gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDNewSprite4Objects1ObjectsGDgdjs_9546OverworldCode_9546GDKscavTilesetObjects1ObjectsGDgdjs_9546OverworldCode_9546GDAligatorObjects1Objects = Hashtable.newFrom({"NewSprite4": gdjs.OverworldCode.GDNewSprite4Objects1, "KscavTileset": gdjs.OverworldCode.GDKscavTilesetObjects1, "Aligator": gdjs.OverworldCode.GDAligatorObjects1});
gdjs.OverworldCode.asyncCallback11274764 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.OverworldCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("NewSprite6"), gdjs.OverworldCode.GDNewSprite6Objects2);

{for(var i = 0, len = gdjs.OverworldCode.GDNewSprite6Objects2.length ;i < len;++i) {
    gdjs.OverworldCode.GDNewSprite6Objects2[i].deleteFromScene(runtimeScene);
}
}gdjs.OverworldCode.localVariables.length = 0;
}
gdjs.OverworldCode.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.OverworldCode.localVariables);
for (const obj of gdjs.OverworldCode.GDNewSprite6Objects1) asyncObjectsList.addObject("NewSprite6", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.6), (runtimeScene) => (gdjs.OverworldCode.asyncCallback11274764(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.OverworldCode.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.OverworldCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.OverworldCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.OverworldCode.GDPlayerObjects2[i].getBehavior("Animation").getAnimationName() == "Walk3" ) {
        isConditionTrue_0 = true;
        gdjs.OverworldCode.GDPlayerObjects2[k] = gdjs.OverworldCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.OverworldCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Aligator"), gdjs.OverworldCode.GDAligatorObjects2);
gdjs.copyArray(runtimeScene.getObjects("KscavTileset"), gdjs.OverworldCode.GDKscavTilesetObjects2);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.OverworldCode.GDNewSprite4Objects2);
/* Reuse gdjs.OverworldCode.GDPlayerObjects2 */
gdjs.OverworldCode.GDNewSprite6Objects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDNewSprite6Objects2Objects, (( gdjs.OverworldCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.OverworldCode.GDPlayerObjects2[0].getPointX("")) - 16, (( gdjs.OverworldCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.OverworldCode.GDPlayerObjects2[0].getPointY("")) - 40, "");
}{for(var i = 0, len = gdjs.OverworldCode.GDNewSprite6Objects2.length ;i < len;++i) {
    gdjs.OverworldCode.GDNewSprite6Objects2[i].rotateTowardAngle(-(90), 0, runtimeScene);
}
}{for(var i = 0, len = gdjs.OverworldCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.OverworldCode.GDPlayerObjects2[i].separateFromObjectsList(gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDNewSprite4Objects2ObjectsGDgdjs_9546OverworldCode_9546GDKscavTilesetObjects2ObjectsGDgdjs_9546OverworldCode_9546GDAligatorObjects2Objects, false);
}
}
{ //Subevents
gdjs.OverworldCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.OverworldCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.OverworldCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.OverworldCode.GDPlayerObjects2[i].getBehavior("Animation").getAnimationName() == "Walk2" ) {
        isConditionTrue_0 = true;
        gdjs.OverworldCode.GDPlayerObjects2[k] = gdjs.OverworldCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.OverworldCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Aligator"), gdjs.OverworldCode.GDAligatorObjects2);
gdjs.copyArray(runtimeScene.getObjects("KscavTileset"), gdjs.OverworldCode.GDKscavTilesetObjects2);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.OverworldCode.GDNewSprite4Objects2);
/* Reuse gdjs.OverworldCode.GDPlayerObjects2 */
gdjs.OverworldCode.GDNewSprite6Objects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDNewSprite6Objects2Objects, (( gdjs.OverworldCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.OverworldCode.GDPlayerObjects2[0].getPointX("")) - 40, (( gdjs.OverworldCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.OverworldCode.GDPlayerObjects2[0].getPointY("")) - 12, "");
}{for(var i = 0, len = gdjs.OverworldCode.GDNewSprite6Objects2.length ;i < len;++i) {
    gdjs.OverworldCode.GDNewSprite6Objects2[i].rotateTowardAngle(180, 0, runtimeScene);
}
}{for(var i = 0, len = gdjs.OverworldCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.OverworldCode.GDPlayerObjects2[i].separateFromObjectsList(gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDNewSprite4Objects2ObjectsGDgdjs_9546OverworldCode_9546GDKscavTilesetObjects2ObjectsGDgdjs_9546OverworldCode_9546GDAligatorObjects2Objects, false);
}
}
{ //Subevents
gdjs.OverworldCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.OverworldCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.OverworldCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.OverworldCode.GDPlayerObjects2[i].getBehavior("Animation").getAnimationName() == "Walk1" ) {
        isConditionTrue_0 = true;
        gdjs.OverworldCode.GDPlayerObjects2[k] = gdjs.OverworldCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.OverworldCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Aligator"), gdjs.OverworldCode.GDAligatorObjects2);
gdjs.copyArray(runtimeScene.getObjects("KscavTileset"), gdjs.OverworldCode.GDKscavTilesetObjects2);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.OverworldCode.GDNewSprite4Objects2);
/* Reuse gdjs.OverworldCode.GDPlayerObjects2 */
gdjs.OverworldCode.GDNewSprite6Objects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDNewSprite6Objects2Objects, (( gdjs.OverworldCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.OverworldCode.GDPlayerObjects2[0].getPointX("")) - 16, (( gdjs.OverworldCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.OverworldCode.GDPlayerObjects2[0].getPointY("")) + 8, "");
}{for(var i = 0, len = gdjs.OverworldCode.GDNewSprite6Objects2.length ;i < len;++i) {
    gdjs.OverworldCode.GDNewSprite6Objects2[i].rotateTowardAngle(90, 0, runtimeScene);
}
}{for(var i = 0, len = gdjs.OverworldCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.OverworldCode.GDPlayerObjects2[i].separateFromObjectsList(gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDNewSprite4Objects2ObjectsGDgdjs_9546OverworldCode_9546GDKscavTilesetObjects2ObjectsGDgdjs_9546OverworldCode_9546GDAligatorObjects2Objects, false);
}
}
{ //Subevents
gdjs.OverworldCode.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.OverworldCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.OverworldCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.OverworldCode.GDPlayerObjects1[i].getBehavior("Animation").getAnimationName() == "Walk0" ) {
        isConditionTrue_0 = true;
        gdjs.OverworldCode.GDPlayerObjects1[k] = gdjs.OverworldCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.OverworldCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Aligator"), gdjs.OverworldCode.GDAligatorObjects1);
gdjs.copyArray(runtimeScene.getObjects("KscavTileset"), gdjs.OverworldCode.GDKscavTilesetObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.OverworldCode.GDNewSprite4Objects1);
/* Reuse gdjs.OverworldCode.GDPlayerObjects1 */
gdjs.OverworldCode.GDNewSprite6Objects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDNewSprite6Objects1Objects, (( gdjs.OverworldCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.OverworldCode.GDPlayerObjects1[0].getPointX("")) + 8, (( gdjs.OverworldCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.OverworldCode.GDPlayerObjects1[0].getPointY("")) - 12, "");
}{for(var i = 0, len = gdjs.OverworldCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.OverworldCode.GDNewSprite6Objects1[i].rotateTowardAngle(0, 0, runtimeScene);
}
}{for(var i = 0, len = gdjs.OverworldCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.OverworldCode.GDPlayerObjects1[i].separateFromObjectsList(gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDNewSprite4Objects1ObjectsGDgdjs_9546OverworldCode_9546GDKscavTilesetObjects1ObjectsGDgdjs_9546OverworldCode_9546GDAligatorObjects1Objects, false);
}
}
{ //Subevents
gdjs.OverworldCode.eventsList5(runtimeScene);} //End of subevents
}

}


};gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDNewSprite4Objects2Objects = Hashtable.newFrom({"NewSprite4": gdjs.OverworldCode.GDNewSprite4Objects2});
gdjs.OverworldCode.asyncCallback16059252 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.OverworldCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("NewSprite4"), gdjs.OverworldCode.GDNewSprite4Objects3);

{for(var i = 0, len = gdjs.OverworldCode.GDNewSprite4Objects3.length ;i < len;++i) {
    gdjs.OverworldCode.GDNewSprite4Objects3[i].deleteFromScene(runtimeScene);
}
}gdjs.OverworldCode.localVariables.length = 0;
}
gdjs.OverworldCode.eventsList7 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.OverworldCode.localVariables);
for (const obj of gdjs.OverworldCode.GDNewSprite4Objects2) asyncObjectsList.addObject("NewSprite4", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.6), (runtimeScene) => (gdjs.OverworldCode.asyncCallback16059252(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDNewSprite4Objects2Objects = Hashtable.newFrom({"NewSprite4": gdjs.OverworldCode.GDNewSprite4Objects2});
gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDNewSprite4Objects2ObjectsGDgdjs_9546OverworldCode_9546GDKscavTilesetObjects2ObjectsGDgdjs_9546OverworldCode_9546GDAligatorObjects2Objects = Hashtable.newFrom({"NewSprite4": gdjs.OverworldCode.GDNewSprite4Objects2, "KscavTileset": gdjs.OverworldCode.GDKscavTilesetObjects2, "Aligator": gdjs.OverworldCode.GDAligatorObjects2});
gdjs.OverworldCode.asyncCallback11893396 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.OverworldCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("NewSprite4"), gdjs.OverworldCode.GDNewSprite4Objects3);

{for(var i = 0, len = gdjs.OverworldCode.GDNewSprite4Objects3.length ;i < len;++i) {
    gdjs.OverworldCode.GDNewSprite4Objects3[i].deleteFromScene(runtimeScene);
}
}gdjs.OverworldCode.localVariables.length = 0;
}
gdjs.OverworldCode.eventsList8 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.OverworldCode.localVariables);
for (const obj of gdjs.OverworldCode.GDNewSprite4Objects2) asyncObjectsList.addObject("NewSprite4", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.6), (runtimeScene) => (gdjs.OverworldCode.asyncCallback11893396(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDNewSprite4Objects2Objects = Hashtable.newFrom({"NewSprite4": gdjs.OverworldCode.GDNewSprite4Objects2});
gdjs.OverworldCode.asyncCallback19967244 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.OverworldCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("NewSprite4"), gdjs.OverworldCode.GDNewSprite4Objects3);

{for(var i = 0, len = gdjs.OverworldCode.GDNewSprite4Objects3.length ;i < len;++i) {
    gdjs.OverworldCode.GDNewSprite4Objects3[i].deleteFromScene(runtimeScene);
}
}gdjs.OverworldCode.localVariables.length = 0;
}
gdjs.OverworldCode.eventsList9 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.OverworldCode.localVariables);
for (const obj of gdjs.OverworldCode.GDNewSprite4Objects2) asyncObjectsList.addObject("NewSprite4", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.6), (runtimeScene) => (gdjs.OverworldCode.asyncCallback19967244(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDNewSprite4Objects1Objects = Hashtable.newFrom({"NewSprite4": gdjs.OverworldCode.GDNewSprite4Objects1});
gdjs.OverworldCode.asyncCallback12533364 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.OverworldCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("NewSprite4"), gdjs.OverworldCode.GDNewSprite4Objects2);

{for(var i = 0, len = gdjs.OverworldCode.GDNewSprite4Objects2.length ;i < len;++i) {
    gdjs.OverworldCode.GDNewSprite4Objects2[i].deleteFromScene(runtimeScene);
}
}gdjs.OverworldCode.localVariables.length = 0;
}
gdjs.OverworldCode.eventsList10 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.OverworldCode.localVariables);
for (const obj of gdjs.OverworldCode.GDNewSprite4Objects1) asyncObjectsList.addObject("NewSprite4", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.6), (runtimeScene) => (gdjs.OverworldCode.asyncCallback12533364(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.OverworldCode.eventsList11 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.OverworldCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.OverworldCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.OverworldCode.GDPlayerObjects2[i].getBehavior("Animation").getAnimationName() == "Walk0" ) {
        isConditionTrue_0 = true;
        gdjs.OverworldCode.GDPlayerObjects2[k] = gdjs.OverworldCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.OverworldCode.GDPlayerObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.OverworldCode.GDPlayerObjects2 */
gdjs.OverworldCode.GDNewSprite4Objects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDNewSprite4Objects2Objects, (( gdjs.OverworldCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.OverworldCode.GDPlayerObjects2[0].getPointX("")) + 8, (( gdjs.OverworldCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.OverworldCode.GDPlayerObjects2[0].getPointY("")) - 12, "");
}
{ //Subevents
gdjs.OverworldCode.eventsList7(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.OverworldCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.OverworldCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.OverworldCode.GDPlayerObjects2[i].getBehavior("Animation").getAnimationName() == "Walk1" ) {
        isConditionTrue_0 = true;
        gdjs.OverworldCode.GDPlayerObjects2[k] = gdjs.OverworldCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.OverworldCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Aligator"), gdjs.OverworldCode.GDAligatorObjects2);
gdjs.copyArray(runtimeScene.getObjects("KscavTileset"), gdjs.OverworldCode.GDKscavTilesetObjects2);
/* Reuse gdjs.OverworldCode.GDPlayerObjects2 */
gdjs.OverworldCode.GDNewSprite4Objects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDNewSprite4Objects2Objects, (( gdjs.OverworldCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.OverworldCode.GDPlayerObjects2[0].getPointX("")) - 8, (( gdjs.OverworldCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.OverworldCode.GDPlayerObjects2[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.OverworldCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.OverworldCode.GDPlayerObjects2[i].separateFromObjectsList(gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDNewSprite4Objects2ObjectsGDgdjs_9546OverworldCode_9546GDKscavTilesetObjects2ObjectsGDgdjs_9546OverworldCode_9546GDAligatorObjects2Objects, false);
}
}
{ //Subevents
gdjs.OverworldCode.eventsList8(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.OverworldCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.OverworldCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.OverworldCode.GDPlayerObjects2[i].getBehavior("Animation").getAnimationName() == "Walk2" ) {
        isConditionTrue_0 = true;
        gdjs.OverworldCode.GDPlayerObjects2[k] = gdjs.OverworldCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.OverworldCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
}
if (isConditionTrue_0) {
/* Reuse gdjs.OverworldCode.GDPlayerObjects2 */
gdjs.OverworldCode.GDNewSprite4Objects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDNewSprite4Objects2Objects, (( gdjs.OverworldCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.OverworldCode.GDPlayerObjects2[0].getPointX("")) - 24, (( gdjs.OverworldCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.OverworldCode.GDPlayerObjects2[0].getPointY("")) - 12, "");
}
{ //Subevents
gdjs.OverworldCode.eventsList9(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.OverworldCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.OverworldCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.OverworldCode.GDPlayerObjects1[i].getBehavior("Animation").getAnimationName() == "Walk3" ) {
        isConditionTrue_0 = true;
        gdjs.OverworldCode.GDPlayerObjects1[k] = gdjs.OverworldCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.OverworldCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.OverworldCode.GDPlayerObjects1 */
gdjs.OverworldCode.GDNewSprite4Objects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDNewSprite4Objects1Objects, (( gdjs.OverworldCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.OverworldCode.GDPlayerObjects1[0].getPointX("")) - 8, (( gdjs.OverworldCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.OverworldCode.GDPlayerObjects1[0].getPointY("")) - 24, "");
}
{ //Subevents
gdjs.OverworldCode.eventsList10(runtimeScene);} //End of subevents
}

}


};gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDNewSprite5Objects2Objects = Hashtable.newFrom({"NewSprite5": gdjs.OverworldCode.GDNewSprite5Objects2});
gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDFireball2Objects2Objects = Hashtable.newFrom({"Fireball2": gdjs.OverworldCode.GDFireball2Objects2});
gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDNewSprite6Objects2Objects = Hashtable.newFrom({"NewSprite6": gdjs.OverworldCode.GDNewSprite6Objects2});
gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDNewSprite4Objects1Objects = Hashtable.newFrom({"NewSprite4": gdjs.OverworldCode.GDNewSprite4Objects1});
gdjs.OverworldCode.eventsList12 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.OverworldCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.OverworldCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.OverworldCode.GDPlayerObjects2[i].getBehavior("Animation").getAnimationName() == "Walk0" ) {
        isConditionTrue_0 = true;
        gdjs.OverworldCode.GDPlayerObjects2[k] = gdjs.OverworldCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.OverworldCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.OverworldCode.GDPlayerObjects2 */
gdjs.OverworldCode.GDNewSprite5Objects2.length = 0;

{for(var i = 0, len = gdjs.OverworldCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.OverworldCode.GDPlayerObjects2[i].getBehavior("FireBullet").Fire((gdjs.OverworldCode.GDPlayerObjects2[i].getPointX("Center")), (gdjs.OverworldCode.GDPlayerObjects2[i].getPointY("Center")), gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDNewSprite5Objects2Objects, 0, 60, null);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.OverworldCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.OverworldCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.OverworldCode.GDPlayerObjects2[i].getBehavior("Animation").getAnimationName() == "Walk1" ) {
        isConditionTrue_0 = true;
        gdjs.OverworldCode.GDPlayerObjects2[k] = gdjs.OverworldCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.OverworldCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.OverworldCode.GDPlayerObjects2 */
gdjs.OverworldCode.GDFireball2Objects2.length = 0;

{for(var i = 0, len = gdjs.OverworldCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.OverworldCode.GDPlayerObjects2[i].getBehavior("FireBullet").Fire((gdjs.OverworldCode.GDPlayerObjects2[i].getPointX("Origin")) - 8, (gdjs.OverworldCode.GDPlayerObjects2[i].getPointY("Origin")), gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDFireball2Objects2Objects, 90, 50, null);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.OverworldCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.OverworldCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.OverworldCode.GDPlayerObjects2[i].getBehavior("Animation").getAnimationName() == "Walk2" ) {
        isConditionTrue_0 = true;
        gdjs.OverworldCode.GDPlayerObjects2[k] = gdjs.OverworldCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.OverworldCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.OverworldCode.GDPlayerObjects2 */
gdjs.OverworldCode.GDNewSprite6Objects2.length = 0;

{for(var i = 0, len = gdjs.OverworldCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.OverworldCode.GDPlayerObjects2[i].getBehavior("FireBullet").Fire((gdjs.OverworldCode.GDPlayerObjects2[i].getPointX("Origin")) - 32, (gdjs.OverworldCode.GDPlayerObjects2[i].getPointY("Origin")) - 16, gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDNewSprite6Objects2Objects, 180, 50, null);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.OverworldCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.OverworldCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.OverworldCode.GDPlayerObjects1[i].getBehavior("Animation").getAnimationName() == "Walk3" ) {
        isConditionTrue_0 = true;
        gdjs.OverworldCode.GDPlayerObjects1[k] = gdjs.OverworldCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.OverworldCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.OverworldCode.GDPlayerObjects1 */
gdjs.OverworldCode.GDNewSprite4Objects1.length = 0;

{for(var i = 0, len = gdjs.OverworldCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.OverworldCode.GDPlayerObjects1[i].getBehavior("FireBullet").Fire((gdjs.OverworldCode.GDPlayerObjects1[i].getPointX("Origin")) - 8, (gdjs.OverworldCode.GDPlayerObjects1[i].getPointY("Origin")) - 32, gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDNewSprite4Objects1Objects, 270, 50, null);
}
}}

}


};gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDAligatorObjects2Objects = Hashtable.newFrom({"Aligator": gdjs.OverworldCode.GDAligatorObjects2});
gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.OverworldCode.GDPlayerObjects2});
gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDSpellThunderObjects2Objects = Hashtable.newFrom({"SpellThunder": gdjs.OverworldCode.GDSpellThunderObjects2});
gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDAligatorObjects1Objects = Hashtable.newFrom({"Aligator": gdjs.OverworldCode.GDAligatorObjects1});
gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.OverworldCode.GDPlayerObjects1});
gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDSpellThunderObjects1Objects = Hashtable.newFrom({"SpellThunder": gdjs.OverworldCode.GDSpellThunderObjects1});
gdjs.OverworldCode.eventsList13 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Aligator"), gdjs.OverworldCode.GDAligatorObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.OverworldCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDAligatorObjects2Objects, gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDPlayerObjects2Objects, 80, false);
if (isConditionTrue_0) {
/* Reuse gdjs.OverworldCode.GDAligatorObjects2 */
gdjs.OverworldCode.GDSpellThunderObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDSpellThunderObjects2Objects, (( gdjs.OverworldCode.GDAligatorObjects2.length === 0 ) ? 0 :gdjs.OverworldCode.GDAligatorObjects2[0].getPointX("")), (( gdjs.OverworldCode.GDAligatorObjects2.length === 0 ) ? 0 :gdjs.OverworldCode.GDAligatorObjects2[0].getPointY("")), "");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Aligator"), gdjs.OverworldCode.GDAligatorObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.OverworldCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDAligatorObjects1Objects, gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDPlayerObjects1Objects, 80, true);
if (isConditionTrue_0) {
/* Reuse gdjs.OverworldCode.GDPlayerObjects1 */
gdjs.OverworldCode.GDSpellThunderObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDSpellThunderObjects1Objects, (( gdjs.OverworldCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.OverworldCode.GDPlayerObjects1[0].getPointX("")), (( gdjs.OverworldCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.OverworldCode.GDPlayerObjects1[0].getPointY("")), "");
}}

}


};gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDAligatorObjects2Objects = Hashtable.newFrom({"Aligator": gdjs.OverworldCode.GDAligatorObjects2});
gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.OverworldCode.GDPlayerObjects2});
gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDGrassObjects2Objects = Hashtable.newFrom({"Grass": gdjs.OverworldCode.GDGrassObjects2});
gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDAligatorObjects1Objects = Hashtable.newFrom({"Aligator": gdjs.OverworldCode.GDAligatorObjects1});
gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.OverworldCode.GDPlayerObjects1});
gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDGrassObjects1Objects = Hashtable.newFrom({"Grass": gdjs.OverworldCode.GDGrassObjects1});
gdjs.OverworldCode.eventsList14 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Aligator"), gdjs.OverworldCode.GDAligatorObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.OverworldCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDAligatorObjects2Objects, gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDPlayerObjects2Objects, 80, false);
if (isConditionTrue_0) {
/* Reuse gdjs.OverworldCode.GDAligatorObjects2 */
gdjs.OverworldCode.GDGrassObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDGrassObjects2Objects, (( gdjs.OverworldCode.GDAligatorObjects2.length === 0 ) ? 0 :gdjs.OverworldCode.GDAligatorObjects2[0].getPointX("")), (( gdjs.OverworldCode.GDAligatorObjects2.length === 0 ) ? 0 :gdjs.OverworldCode.GDAligatorObjects2[0].getPointY("")), "");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Aligator"), gdjs.OverworldCode.GDAligatorObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.OverworldCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDAligatorObjects1Objects, gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDPlayerObjects1Objects, 80, true);
if (isConditionTrue_0) {
/* Reuse gdjs.OverworldCode.GDPlayerObjects1 */
gdjs.OverworldCode.GDGrassObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDGrassObjects1Objects, (( gdjs.OverworldCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.OverworldCode.GDPlayerObjects1[0].getPointX("")), (( gdjs.OverworldCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.OverworldCode.GDPlayerObjects1[0].getPointY("")), "");
}}

}


};gdjs.OverworldCode.eventsList15 = function(runtimeScene) {

};gdjs.OverworldCode.eventsList16 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.OverworldCode.localVariables[0].getFromIndex(0).getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Aligator"), gdjs.OverworldCode.GDAligatorObjects2);
gdjs.copyArray(runtimeScene.getObjects("HearthMob"), gdjs.OverworldCode.GDHearthMobObjects2);
gdjs.copyArray(runtimeScene.getObjects("HearthMob2"), gdjs.OverworldCode.GDHearthMob2Objects2);
gdjs.copyArray(runtimeScene.getObjects("HearthMob3"), gdjs.OverworldCode.GDHearthMob3Objects2);
{for(var i = 0, len = gdjs.OverworldCode.GDAligatorObjects2.length ;i < len;++i) {
    gdjs.OverworldCode.GDAligatorObjects2[i].setY(gdjs.OverworldCode.GDAligatorObjects2[i].getY() - (16));
}
}{for(var i = 0, len = gdjs.OverworldCode.GDHearthMobObjects2.length ;i < len;++i) {
    gdjs.OverworldCode.GDHearthMobObjects2[i].setY(gdjs.OverworldCode.GDHearthMobObjects2[i].getY() - (16));
}
}{for(var i = 0, len = gdjs.OverworldCode.GDHearthMob2Objects2.length ;i < len;++i) {
    gdjs.OverworldCode.GDHearthMob2Objects2[i].setY(gdjs.OverworldCode.GDHearthMob2Objects2[i].getY() - (16));
}
}{for(var i = 0, len = gdjs.OverworldCode.GDHearthMob3Objects2.length ;i < len;++i) {
    gdjs.OverworldCode.GDHearthMob3Objects2[i].setY(gdjs.OverworldCode.GDHearthMob3Objects2[i].getY() - (16));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.OverworldCode.localVariables[0].getFromIndex(0).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Aligator"), gdjs.OverworldCode.GDAligatorObjects2);
gdjs.copyArray(runtimeScene.getObjects("HearthMob"), gdjs.OverworldCode.GDHearthMobObjects2);
gdjs.copyArray(runtimeScene.getObjects("HearthMob2"), gdjs.OverworldCode.GDHearthMob2Objects2);
gdjs.copyArray(runtimeScene.getObjects("HearthMob3"), gdjs.OverworldCode.GDHearthMob3Objects2);
{for(var i = 0, len = gdjs.OverworldCode.GDAligatorObjects2.length ;i < len;++i) {
    gdjs.OverworldCode.GDAligatorObjects2[i].setY(gdjs.OverworldCode.GDAligatorObjects2[i].getY() + (16));
}
}{for(var i = 0, len = gdjs.OverworldCode.GDHearthMobObjects2.length ;i < len;++i) {
    gdjs.OverworldCode.GDHearthMobObjects2[i].setY(gdjs.OverworldCode.GDHearthMobObjects2[i].getY() + (16));
}
}{for(var i = 0, len = gdjs.OverworldCode.GDHearthMob2Objects2.length ;i < len;++i) {
    gdjs.OverworldCode.GDHearthMob2Objects2[i].setY(gdjs.OverworldCode.GDHearthMob2Objects2[i].getY() + (16));
}
}{for(var i = 0, len = gdjs.OverworldCode.GDHearthMob3Objects2.length ;i < len;++i) {
    gdjs.OverworldCode.GDHearthMob3Objects2[i].setY(gdjs.OverworldCode.GDHearthMob3Objects2[i].getY() + (16));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.OverworldCode.localVariables[0].getFromIndex(0).getAsNumber() == 2);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Aligator"), gdjs.OverworldCode.GDAligatorObjects2);
gdjs.copyArray(runtimeScene.getObjects("HearthMob"), gdjs.OverworldCode.GDHearthMobObjects2);
gdjs.copyArray(runtimeScene.getObjects("HearthMob2"), gdjs.OverworldCode.GDHearthMob2Objects2);
gdjs.copyArray(runtimeScene.getObjects("HearthMob3"), gdjs.OverworldCode.GDHearthMob3Objects2);
{for(var i = 0, len = gdjs.OverworldCode.GDAligatorObjects2.length ;i < len;++i) {
    gdjs.OverworldCode.GDAligatorObjects2[i].getBehavior("Animation").setAnimationName("WalkLeft");
}
}{for(var i = 0, len = gdjs.OverworldCode.GDAligatorObjects2.length ;i < len;++i) {
    gdjs.OverworldCode.GDAligatorObjects2[i].setX(gdjs.OverworldCode.GDAligatorObjects2[i].getX() - (16));
}
}{for(var i = 0, len = gdjs.OverworldCode.GDHearthMobObjects2.length ;i < len;++i) {
    gdjs.OverworldCode.GDHearthMobObjects2[i].setX(gdjs.OverworldCode.GDHearthMobObjects2[i].getX() - (16));
}
}{for(var i = 0, len = gdjs.OverworldCode.GDHearthMob3Objects2.length ;i < len;++i) {
    gdjs.OverworldCode.GDHearthMob3Objects2[i].setX(gdjs.OverworldCode.GDHearthMob3Objects2[i].getX() - (16));
}
}{for(var i = 0, len = gdjs.OverworldCode.GDHearthMob2Objects2.length ;i < len;++i) {
    gdjs.OverworldCode.GDHearthMob2Objects2[i].setX(gdjs.OverworldCode.GDHearthMob2Objects2[i].getX() - (16));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.OverworldCode.localVariables[0].getFromIndex(0).getAsNumber() == 3);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Aligator"), gdjs.OverworldCode.GDAligatorObjects1);
gdjs.copyArray(runtimeScene.getObjects("HearthMob"), gdjs.OverworldCode.GDHearthMobObjects1);
gdjs.copyArray(runtimeScene.getObjects("HearthMob2"), gdjs.OverworldCode.GDHearthMob2Objects1);
gdjs.copyArray(runtimeScene.getObjects("HearthMob3"), gdjs.OverworldCode.GDHearthMob3Objects1);
{for(var i = 0, len = gdjs.OverworldCode.GDAligatorObjects1.length ;i < len;++i) {
    gdjs.OverworldCode.GDAligatorObjects1[i].getBehavior("Animation").setAnimationName("WalkRight");
}
}{for(var i = 0, len = gdjs.OverworldCode.GDAligatorObjects1.length ;i < len;++i) {
    gdjs.OverworldCode.GDAligatorObjects1[i].setX(gdjs.OverworldCode.GDAligatorObjects1[i].getX() + (16));
}
}{for(var i = 0, len = gdjs.OverworldCode.GDHearthMobObjects1.length ;i < len;++i) {
    gdjs.OverworldCode.GDHearthMobObjects1[i].setX(gdjs.OverworldCode.GDHearthMobObjects1[i].getX() + (16));
}
}{for(var i = 0, len = gdjs.OverworldCode.GDHearthMob2Objects1.length ;i < len;++i) {
    gdjs.OverworldCode.GDHearthMob2Objects1[i].setX(gdjs.OverworldCode.GDHearthMob2Objects1[i].getX() + (16));
}
}{for(var i = 0, len = gdjs.OverworldCode.GDHearthMob3Objects1.length ;i < len;++i) {
    gdjs.OverworldCode.GDHearthMob3Objects1[i].setX(gdjs.OverworldCode.GDHearthMob3Objects1[i].getX() + (16));
}
}}

}


};gdjs.OverworldCode.eventsList17 = function(runtimeScene) {

{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("direction", variable);
}
gdjs.OverworldCode.localVariables.push(variables);
}
let isConditionTrue_0 = false;
{
{gdjs.OverworldCode.localVariables[0].getFromIndex(0).setNumber(gdjs.randomInRange(0, 3));
}
{ //Subevents
gdjs.OverworldCode.eventsList16(runtimeScene);} //End of subevents
}
gdjs.OverworldCode.localVariables.pop();

}


};gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDNewSprite2Objects1ObjectsGDgdjs_9546OverworldCode_9546GDNewSprite4Objects1ObjectsGDgdjs_9546OverworldCode_9546GDNewSprite3Objects1ObjectsGDgdjs_9546OverworldCode_9546GDNewSprite5Objects1ObjectsGDgdjs_9546OverworldCode_9546GDNewSprite6Objects1ObjectsGDgdjs_9546OverworldCode_9546GDSpellThunderObjects1ObjectsGDgdjs_9546OverworldCode_9546GDFireballObjects1ObjectsGDgdjs_9546OverworldCode_9546GDCircleObjects1ObjectsGDgdjs_9546OverworldCode_9546GDGrassObjects1ObjectsGDgdjs_9546OverworldCode_9546GDFireball2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.OverworldCode.GDNewSprite2Objects1, "NewSprite4": gdjs.OverworldCode.GDNewSprite4Objects1, "NewSprite3": gdjs.OverworldCode.GDNewSprite3Objects1, "NewSprite5": gdjs.OverworldCode.GDNewSprite5Objects1, "NewSprite6": gdjs.OverworldCode.GDNewSprite6Objects1, "SpellThunder": gdjs.OverworldCode.GDSpellThunderObjects1, "Fireball": gdjs.OverworldCode.GDFireballObjects1, "Circle": gdjs.OverworldCode.GDCircleObjects1, "Grass": gdjs.OverworldCode.GDGrassObjects1, "Fireball2": gdjs.OverworldCode.GDFireball2Objects1});
gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDAligatorObjects1Objects = Hashtable.newFrom({"Aligator": gdjs.OverworldCode.GDAligatorObjects1});
gdjs.OverworldCode.asyncCallback15630092 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.OverworldCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Aligator"), gdjs.OverworldCode.GDAligatorObjects2);

{for(var i = 0, len = gdjs.OverworldCode.GDAligatorObjects2.length ;i < len;++i) {
    gdjs.OverworldCode.GDAligatorObjects2[i].returnVariable(gdjs.OverworldCode.GDAligatorObjects2[i].getVariables().get("Immune")).setBoolean(false);
}
}gdjs.OverworldCode.localVariables.length = 0;
}
gdjs.OverworldCode.eventsList18 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.OverworldCode.localVariables);
for (const obj of gdjs.OverworldCode.GDAligatorObjects1) asyncObjectsList.addObject("Aligator", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.OverworldCode.asyncCallback15630092(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.OverworldCode.eventsList19 = function(runtimeScene) {

};gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.OverworldCode.GDPlayerObjects1});
gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDAligatorObjects1Objects = Hashtable.newFrom({"Aligator": gdjs.OverworldCode.GDAligatorObjects1});
gdjs.OverworldCode.asyncCallback17573284 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.OverworldCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Player"), gdjs.OverworldCode.GDPlayerObjects2);

{for(var i = 0, len = gdjs.OverworldCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.OverworldCode.GDPlayerObjects2[i].returnVariable(gdjs.OverworldCode.GDPlayerObjects2[i].getVariables().getFromIndex(1)).setBoolean(false);
}
}gdjs.OverworldCode.localVariables.length = 0;
}
gdjs.OverworldCode.eventsList20 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.OverworldCode.localVariables);
for (const obj of gdjs.OverworldCode.GDPlayerObjects1) asyncObjectsList.addObject("Player", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.OverworldCode.asyncCallback17573284(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.OverworldCode.eventsList21 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Aligator"), gdjs.OverworldCode.GDAligatorObjects1);
gdjs.copyArray(runtimeScene.getObjects("KscavTileset"), gdjs.OverworldCode.GDKscavTilesetObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.OverworldCode.GDNewSprite4Objects1);
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 4, "", 0);
}{for(var i = 0, len = gdjs.OverworldCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.OverworldCode.GDNewSprite4Objects1[i].setZOrder((gdjs.OverworldCode.GDNewSprite4Objects1[i].getY()));
}
for(var i = 0, len = gdjs.OverworldCode.GDKscavTilesetObjects1.length ;i < len;++i) {
    gdjs.OverworldCode.GDKscavTilesetObjects1[i].setZOrder((gdjs.OverworldCode.GDKscavTilesetObjects1[i].getY()));
}
for(var i = 0, len = gdjs.OverworldCode.GDAligatorObjects1.length ;i < len;++i) {
    gdjs.OverworldCode.GDAligatorObjects1[i].setZOrder((gdjs.OverworldCode.GDAligatorObjects1[i].getY()));
}
}{for(var i = 0, len = gdjs.OverworldCode.GDAligatorObjects1.length ;i < len;++i) {
    gdjs.OverworldCode.GDAligatorObjects1[i].setZOrder((gdjs.OverworldCode.GDAligatorObjects1[i].getPointY("")));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Aligator"), gdjs.OverworldCode.GDAligatorObjects1);
gdjs.copyArray(runtimeScene.getObjects("KscavTileset"), gdjs.OverworldCode.GDKscavTilesetObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.OverworldCode.GDNewSprite4Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.OverworldCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.OverworldCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.OverworldCode.GDPlayerObjects1[i].separateFromObjectsList(gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDNewSprite4Objects1ObjectsGDgdjs_9546OverworldCode_9546GDKscavTilesetObjects1ObjectsGDgdjs_9546OverworldCode_9546GDAligatorObjects1Objects, false);
}
}{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.OverworldCode.GDPlayerObjects1.length !== 0 ? gdjs.OverworldCode.GDPlayerObjects1[0] : null), true, "", 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.OverworldCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.OverworldCode.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.OverworldCode.GDPlayerObjects1[i].getBehavior("TopDownMovement").isMoving()) ) {
        isConditionTrue_0 = true;
        gdjs.OverworldCode.GDPlayerObjects1[k] = gdjs.OverworldCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.OverworldCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.OverworldCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.OverworldCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.OverworldCode.GDPlayerObjects1[i].setAnimationFrame(0);
}
}}

}


{


gdjs.OverworldCode.eventsList0(runtimeScene);
}


{


gdjs.OverworldCode.eventsList1(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "a");
if (isConditionTrue_0) {

{ //Subevents
gdjs.OverworldCode.eventsList6(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if (isConditionTrue_0) {

{ //Subevents
gdjs.OverworldCode.eventsList11(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "b");
if (isConditionTrue_0) {

{ //Subevents
gdjs.OverworldCode.eventsList12(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "v");
if (isConditionTrue_0) {

{ //Subevents
gdjs.OverworldCode.eventsList13(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "c");
if (isConditionTrue_0) {

{ //Subevents
gdjs.OverworldCode.eventsList14(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Circle"), gdjs.OverworldCode.GDCircleObjects1);
gdjs.copyArray(runtimeScene.getObjects("Fireball"), gdjs.OverworldCode.GDFireballObjects1);
gdjs.copyArray(runtimeScene.getObjects("Fireball2"), gdjs.OverworldCode.GDFireball2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Grass"), gdjs.OverworldCode.GDGrassObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.OverworldCode.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.OverworldCode.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.OverworldCode.GDNewSprite4Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite5"), gdjs.OverworldCode.GDNewSprite5Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite6"), gdjs.OverworldCode.GDNewSprite6Objects1);
gdjs.copyArray(runtimeScene.getObjects("SpellThunder"), gdjs.OverworldCode.GDSpellThunderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.OverworldCode.GDNewSprite2Objects1.length;i<l;++i) {
    if ( gdjs.OverworldCode.GDNewSprite2Objects1[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.OverworldCode.GDNewSprite2Objects1[k] = gdjs.OverworldCode.GDNewSprite2Objects1[i];
        ++k;
    }
}
gdjs.OverworldCode.GDNewSprite2Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.OverworldCode.GDNewSprite4Objects1.length;i<l;++i) {
    if ( gdjs.OverworldCode.GDNewSprite4Objects1[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.OverworldCode.GDNewSprite4Objects1[k] = gdjs.OverworldCode.GDNewSprite4Objects1[i];
        ++k;
    }
}
gdjs.OverworldCode.GDNewSprite4Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.OverworldCode.GDNewSprite3Objects1.length;i<l;++i) {
    if ( gdjs.OverworldCode.GDNewSprite3Objects1[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.OverworldCode.GDNewSprite3Objects1[k] = gdjs.OverworldCode.GDNewSprite3Objects1[i];
        ++k;
    }
}
gdjs.OverworldCode.GDNewSprite3Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.OverworldCode.GDNewSprite5Objects1.length;i<l;++i) {
    if ( gdjs.OverworldCode.GDNewSprite5Objects1[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.OverworldCode.GDNewSprite5Objects1[k] = gdjs.OverworldCode.GDNewSprite5Objects1[i];
        ++k;
    }
}
gdjs.OverworldCode.GDNewSprite5Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.OverworldCode.GDNewSprite6Objects1.length;i<l;++i) {
    if ( gdjs.OverworldCode.GDNewSprite6Objects1[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.OverworldCode.GDNewSprite6Objects1[k] = gdjs.OverworldCode.GDNewSprite6Objects1[i];
        ++k;
    }
}
gdjs.OverworldCode.GDNewSprite6Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.OverworldCode.GDSpellThunderObjects1.length;i<l;++i) {
    if ( gdjs.OverworldCode.GDSpellThunderObjects1[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.OverworldCode.GDSpellThunderObjects1[k] = gdjs.OverworldCode.GDSpellThunderObjects1[i];
        ++k;
    }
}
gdjs.OverworldCode.GDSpellThunderObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.OverworldCode.GDFireballObjects1.length;i<l;++i) {
    if ( gdjs.OverworldCode.GDFireballObjects1[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.OverworldCode.GDFireballObjects1[k] = gdjs.OverworldCode.GDFireballObjects1[i];
        ++k;
    }
}
gdjs.OverworldCode.GDFireballObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.OverworldCode.GDCircleObjects1.length;i<l;++i) {
    if ( gdjs.OverworldCode.GDCircleObjects1[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.OverworldCode.GDCircleObjects1[k] = gdjs.OverworldCode.GDCircleObjects1[i];
        ++k;
    }
}
gdjs.OverworldCode.GDCircleObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.OverworldCode.GDGrassObjects1.length;i<l;++i) {
    if ( gdjs.OverworldCode.GDGrassObjects1[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.OverworldCode.GDGrassObjects1[k] = gdjs.OverworldCode.GDGrassObjects1[i];
        ++k;
    }
}
gdjs.OverworldCode.GDGrassObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.OverworldCode.GDFireball2Objects1.length;i<l;++i) {
    if ( gdjs.OverworldCode.GDFireball2Objects1[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.OverworldCode.GDFireball2Objects1[k] = gdjs.OverworldCode.GDFireball2Objects1[i];
        ++k;
    }
}
gdjs.OverworldCode.GDFireball2Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.OverworldCode.GDCircleObjects1 */
/* Reuse gdjs.OverworldCode.GDFireballObjects1 */
/* Reuse gdjs.OverworldCode.GDFireball2Objects1 */
/* Reuse gdjs.OverworldCode.GDGrassObjects1 */
/* Reuse gdjs.OverworldCode.GDNewSprite2Objects1 */
/* Reuse gdjs.OverworldCode.GDNewSprite3Objects1 */
/* Reuse gdjs.OverworldCode.GDNewSprite4Objects1 */
/* Reuse gdjs.OverworldCode.GDNewSprite5Objects1 */
/* Reuse gdjs.OverworldCode.GDNewSprite6Objects1 */
/* Reuse gdjs.OverworldCode.GDSpellThunderObjects1 */
{for(var i = 0, len = gdjs.OverworldCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.OverworldCode.GDNewSprite2Objects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.OverworldCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.OverworldCode.GDNewSprite4Objects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.OverworldCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.OverworldCode.GDNewSprite3Objects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.OverworldCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.OverworldCode.GDNewSprite5Objects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.OverworldCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.OverworldCode.GDNewSprite6Objects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.OverworldCode.GDSpellThunderObjects1.length ;i < len;++i) {
    gdjs.OverworldCode.GDSpellThunderObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.OverworldCode.GDFireballObjects1.length ;i < len;++i) {
    gdjs.OverworldCode.GDFireballObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.OverworldCode.GDCircleObjects1.length ;i < len;++i) {
    gdjs.OverworldCode.GDCircleObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.OverworldCode.GDGrassObjects1.length ;i < len;++i) {
    gdjs.OverworldCode.GDGrassObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.OverworldCode.GDFireball2Objects1.length ;i < len;++i) {
    gdjs.OverworldCode.GDFireball2Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


gdjs.OverworldCode.eventsList15(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Aligator"), gdjs.OverworldCode.GDAligatorObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "AligatorMoveTimer");
}{for(var i = 0, len = gdjs.OverworldCode.GDAligatorObjects1.length ;i < len;++i) {
    gdjs.OverworldCode.GDAligatorObjects1[i].activateBehavior("Flash", true);
}
}{for(var i = 0, len = gdjs.OverworldCode.GDAligatorObjects1.length ;i < len;++i) {
    gdjs.OverworldCode.GDAligatorObjects1[i].returnVariable(gdjs.OverworldCode.GDAligatorObjects1[i].getVariables().get("Immune")).setBoolean(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "AligatorMoveTimer") > 2;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "AligatorMoveTimer");
}
{ //Subevents
gdjs.OverworldCode.eventsList17(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Aligator"), gdjs.OverworldCode.GDAligatorObjects1);
gdjs.copyArray(runtimeScene.getObjects("Circle"), gdjs.OverworldCode.GDCircleObjects1);
gdjs.copyArray(runtimeScene.getObjects("Fireball"), gdjs.OverworldCode.GDFireballObjects1);
gdjs.copyArray(runtimeScene.getObjects("Fireball2"), gdjs.OverworldCode.GDFireball2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Grass"), gdjs.OverworldCode.GDGrassObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.OverworldCode.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.OverworldCode.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.OverworldCode.GDNewSprite4Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite5"), gdjs.OverworldCode.GDNewSprite5Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite6"), gdjs.OverworldCode.GDNewSprite6Objects1);
gdjs.copyArray(runtimeScene.getObjects("SpellThunder"), gdjs.OverworldCode.GDSpellThunderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDNewSprite2Objects1ObjectsGDgdjs_9546OverworldCode_9546GDNewSprite4Objects1ObjectsGDgdjs_9546OverworldCode_9546GDNewSprite3Objects1ObjectsGDgdjs_9546OverworldCode_9546GDNewSprite5Objects1ObjectsGDgdjs_9546OverworldCode_9546GDNewSprite6Objects1ObjectsGDgdjs_9546OverworldCode_9546GDSpellThunderObjects1ObjectsGDgdjs_9546OverworldCode_9546GDFireballObjects1ObjectsGDgdjs_9546OverworldCode_9546GDCircleObjects1ObjectsGDgdjs_9546OverworldCode_9546GDGrassObjects1ObjectsGDgdjs_9546OverworldCode_9546GDFireball2Objects1Objects, gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDAligatorObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.OverworldCode.GDAligatorObjects1.length;i<l;++i) {
    if ( gdjs.OverworldCode.GDAligatorObjects1[i].getVariableBoolean(gdjs.OverworldCode.GDAligatorObjects1[i].getVariables().get("Immune"), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.OverworldCode.GDAligatorObjects1[k] = gdjs.OverworldCode.GDAligatorObjects1[i];
        ++k;
    }
}
gdjs.OverworldCode.GDAligatorObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.OverworldCode.GDAligatorObjects1 */
{for(var i = 0, len = gdjs.OverworldCode.GDAligatorObjects1.length ;i < len;++i) {
    gdjs.OverworldCode.GDAligatorObjects1[i].returnVariable(gdjs.OverworldCode.GDAligatorObjects1[i].getVariables().get("Immune")).setBoolean(true);
}
}{for(var i = 0, len = gdjs.OverworldCode.GDAligatorObjects1.length ;i < len;++i) {
    gdjs.OverworldCode.GDAligatorObjects1[i].getBehavior("Flash").Flash(0.5, null);
}
}{for(var i = 0, len = gdjs.OverworldCode.GDAligatorObjects1.length ;i < len;++i) {
    gdjs.OverworldCode.GDAligatorObjects1[i].returnVariable(gdjs.OverworldCode.GDAligatorObjects1[i].getVariables().get("PV")).sub(1);
}
}
{ //Subevents
gdjs.OverworldCode.eventsList18(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Aligator"), gdjs.OverworldCode.GDAligatorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.OverworldCode.GDAligatorObjects1.length;i<l;++i) {
    if ( gdjs.OverworldCode.GDAligatorObjects1[i].getVariableNumber(gdjs.OverworldCode.GDAligatorObjects1[i].getVariables().get("PV")) <= 0 ) {
        isConditionTrue_0 = true;
        gdjs.OverworldCode.GDAligatorObjects1[k] = gdjs.OverworldCode.GDAligatorObjects1[i];
        ++k;
    }
}
gdjs.OverworldCode.GDAligatorObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("HearthMob"), gdjs.OverworldCode.GDHearthMobObjects1);
{for(var i = 0, len = gdjs.OverworldCode.GDHearthMobObjects1.length ;i < len;++i) {
    gdjs.OverworldCode.GDHearthMobObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Aligator"), gdjs.OverworldCode.GDAligatorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.OverworldCode.GDAligatorObjects1.length;i<l;++i) {
    if ( gdjs.OverworldCode.GDAligatorObjects1[i].getVariableNumber(gdjs.OverworldCode.GDAligatorObjects1[i].getVariables().get("PV")) <= 2 ) {
        isConditionTrue_0 = true;
        gdjs.OverworldCode.GDAligatorObjects1[k] = gdjs.OverworldCode.GDAligatorObjects1[i];
        ++k;
    }
}
gdjs.OverworldCode.GDAligatorObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("HearthMob3"), gdjs.OverworldCode.GDHearthMob3Objects1);
{for(var i = 0, len = gdjs.OverworldCode.GDHearthMob3Objects1.length ;i < len;++i) {
    gdjs.OverworldCode.GDHearthMob3Objects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Aligator"), gdjs.OverworldCode.GDAligatorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.OverworldCode.GDAligatorObjects1.length;i<l;++i) {
    if ( gdjs.OverworldCode.GDAligatorObjects1[i].getVariableNumber(gdjs.OverworldCode.GDAligatorObjects1[i].getVariables().get("PV")) <= 1 ) {
        isConditionTrue_0 = true;
        gdjs.OverworldCode.GDAligatorObjects1[k] = gdjs.OverworldCode.GDAligatorObjects1[i];
        ++k;
    }
}
gdjs.OverworldCode.GDAligatorObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("HearthMob2"), gdjs.OverworldCode.GDHearthMob2Objects1);
{for(var i = 0, len = gdjs.OverworldCode.GDHearthMob2Objects1.length ;i < len;++i) {
    gdjs.OverworldCode.GDHearthMob2Objects1[i].hide();
}
}}

}


{


gdjs.OverworldCode.eventsList19(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Aligator"), gdjs.OverworldCode.GDAligatorObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.OverworldCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDPlayerObjects1Objects, gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDAligatorObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.OverworldCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.OverworldCode.GDPlayerObjects1[i].getVariableBoolean(gdjs.OverworldCode.GDPlayerObjects1[i].getVariables().getFromIndex(1), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.OverworldCode.GDPlayerObjects1[k] = gdjs.OverworldCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.OverworldCode.GDPlayerObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.OverworldCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.OverworldCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.OverworldCode.GDPlayerObjects1[i].returnVariable(gdjs.OverworldCode.GDPlayerObjects1[i].getVariables().getFromIndex(1)).setBoolean(true);
}
}{for(var i = 0, len = gdjs.OverworldCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.OverworldCode.GDPlayerObjects1[i].getBehavior("Flash").Flash(0.5, null);
}
}{for(var i = 0, len = gdjs.OverworldCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.OverworldCode.GDPlayerObjects1[i].returnVariable(gdjs.OverworldCode.GDPlayerObjects1[i].getVariables().getFromIndex(0)).sub(1);
}
}
{ //Subevents
gdjs.OverworldCode.eventsList20(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.OverworldCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.OverworldCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.OverworldCode.GDPlayerObjects1[i].getVariableNumber(gdjs.OverworldCode.GDPlayerObjects1[i].getVariables().getFromIndex(0)) <= 2 ) {
        isConditionTrue_0 = true;
        gdjs.OverworldCode.GDPlayerObjects1[k] = gdjs.OverworldCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.OverworldCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Hearth3"), gdjs.OverworldCode.GDHearth3Objects1);
{for(var i = 0, len = gdjs.OverworldCode.GDHearth3Objects1.length ;i < len;++i) {
    gdjs.OverworldCode.GDHearth3Objects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.OverworldCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.OverworldCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.OverworldCode.GDPlayerObjects1[i].getVariableNumber(gdjs.OverworldCode.GDPlayerObjects1[i].getVariables().getFromIndex(0)) <= 1 ) {
        isConditionTrue_0 = true;
        gdjs.OverworldCode.GDPlayerObjects1[k] = gdjs.OverworldCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.OverworldCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Hearth2"), gdjs.OverworldCode.GDHearth2Objects1);
{for(var i = 0, len = gdjs.OverworldCode.GDHearth2Objects1.length ;i < len;++i) {
    gdjs.OverworldCode.GDHearth2Objects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.OverworldCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.OverworldCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.OverworldCode.GDPlayerObjects1[i].getVariableNumber(gdjs.OverworldCode.GDPlayerObjects1[i].getVariables().getFromIndex(0)) <= 0 ) {
        isConditionTrue_0 = true;
        gdjs.OverworldCode.GDPlayerObjects1[k] = gdjs.OverworldCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.OverworldCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Hearth"), gdjs.OverworldCode.GDHearthObjects1);
{for(var i = 0, len = gdjs.OverworldCode.GDHearthObjects1.length ;i < len;++i) {
    gdjs.OverworldCode.GDHearthObjects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.OverworldCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.OverworldCode.GDPlayerObjects1.length = 0;
gdjs.OverworldCode.GDPlayerObjects2.length = 0;
gdjs.OverworldCode.GDPlayerObjects3.length = 0;
gdjs.OverworldCode.GDKscavTilesetObjects1.length = 0;
gdjs.OverworldCode.GDKscavTilesetObjects2.length = 0;
gdjs.OverworldCode.GDKscavTilesetObjects3.length = 0;
gdjs.OverworldCode.GDNewSprite2Objects1.length = 0;
gdjs.OverworldCode.GDNewSprite2Objects2.length = 0;
gdjs.OverworldCode.GDNewSprite2Objects3.length = 0;
gdjs.OverworldCode.GDNewSprite3Objects1.length = 0;
gdjs.OverworldCode.GDNewSprite3Objects2.length = 0;
gdjs.OverworldCode.GDNewSprite3Objects3.length = 0;
gdjs.OverworldCode.GDNewSprite4Objects1.length = 0;
gdjs.OverworldCode.GDNewSprite4Objects2.length = 0;
gdjs.OverworldCode.GDNewSprite4Objects3.length = 0;
gdjs.OverworldCode.GDNewSprite5Objects1.length = 0;
gdjs.OverworldCode.GDNewSprite5Objects2.length = 0;
gdjs.OverworldCode.GDNewSprite5Objects3.length = 0;
gdjs.OverworldCode.GDNewSprite6Objects1.length = 0;
gdjs.OverworldCode.GDNewSprite6Objects2.length = 0;
gdjs.OverworldCode.GDNewSprite6Objects3.length = 0;
gdjs.OverworldCode.GDAligatorObjects1.length = 0;
gdjs.OverworldCode.GDAligatorObjects2.length = 0;
gdjs.OverworldCode.GDAligatorObjects3.length = 0;
gdjs.OverworldCode.GDHearthObjects1.length = 0;
gdjs.OverworldCode.GDHearthObjects2.length = 0;
gdjs.OverworldCode.GDHearthObjects3.length = 0;
gdjs.OverworldCode.GDHearth2Objects1.length = 0;
gdjs.OverworldCode.GDHearth2Objects2.length = 0;
gdjs.OverworldCode.GDHearth2Objects3.length = 0;
gdjs.OverworldCode.GDHearth3Objects1.length = 0;
gdjs.OverworldCode.GDHearth3Objects2.length = 0;
gdjs.OverworldCode.GDHearth3Objects3.length = 0;
gdjs.OverworldCode.GDHearthMobObjects1.length = 0;
gdjs.OverworldCode.GDHearthMobObjects2.length = 0;
gdjs.OverworldCode.GDHearthMobObjects3.length = 0;
gdjs.OverworldCode.GDHearthMob2Objects1.length = 0;
gdjs.OverworldCode.GDHearthMob2Objects2.length = 0;
gdjs.OverworldCode.GDHearthMob2Objects3.length = 0;
gdjs.OverworldCode.GDHearthMob3Objects1.length = 0;
gdjs.OverworldCode.GDHearthMob3Objects2.length = 0;
gdjs.OverworldCode.GDHearthMob3Objects3.length = 0;
gdjs.OverworldCode.GDSpellThunderObjects1.length = 0;
gdjs.OverworldCode.GDSpellThunderObjects2.length = 0;
gdjs.OverworldCode.GDSpellThunderObjects3.length = 0;
gdjs.OverworldCode.GDFireballObjects1.length = 0;
gdjs.OverworldCode.GDFireballObjects2.length = 0;
gdjs.OverworldCode.GDFireballObjects3.length = 0;
gdjs.OverworldCode.GDCircleObjects1.length = 0;
gdjs.OverworldCode.GDCircleObjects2.length = 0;
gdjs.OverworldCode.GDCircleObjects3.length = 0;
gdjs.OverworldCode.GDFireball2Objects1.length = 0;
gdjs.OverworldCode.GDFireball2Objects2.length = 0;
gdjs.OverworldCode.GDFireball2Objects3.length = 0;
gdjs.OverworldCode.GDGrassObjects1.length = 0;
gdjs.OverworldCode.GDGrassObjects2.length = 0;
gdjs.OverworldCode.GDGrassObjects3.length = 0;
gdjs.OverworldCode.GDTransitionObjects1.length = 0;
gdjs.OverworldCode.GDTransitionObjects2.length = 0;
gdjs.OverworldCode.GDTransitionObjects3.length = 0;

gdjs.OverworldCode.eventsList21(runtimeScene);
gdjs.OverworldCode.GDPlayerObjects1.length = 0;
gdjs.OverworldCode.GDPlayerObjects2.length = 0;
gdjs.OverworldCode.GDPlayerObjects3.length = 0;
gdjs.OverworldCode.GDKscavTilesetObjects1.length = 0;
gdjs.OverworldCode.GDKscavTilesetObjects2.length = 0;
gdjs.OverworldCode.GDKscavTilesetObjects3.length = 0;
gdjs.OverworldCode.GDNewSprite2Objects1.length = 0;
gdjs.OverworldCode.GDNewSprite2Objects2.length = 0;
gdjs.OverworldCode.GDNewSprite2Objects3.length = 0;
gdjs.OverworldCode.GDNewSprite3Objects1.length = 0;
gdjs.OverworldCode.GDNewSprite3Objects2.length = 0;
gdjs.OverworldCode.GDNewSprite3Objects3.length = 0;
gdjs.OverworldCode.GDNewSprite4Objects1.length = 0;
gdjs.OverworldCode.GDNewSprite4Objects2.length = 0;
gdjs.OverworldCode.GDNewSprite4Objects3.length = 0;
gdjs.OverworldCode.GDNewSprite5Objects1.length = 0;
gdjs.OverworldCode.GDNewSprite5Objects2.length = 0;
gdjs.OverworldCode.GDNewSprite5Objects3.length = 0;
gdjs.OverworldCode.GDNewSprite6Objects1.length = 0;
gdjs.OverworldCode.GDNewSprite6Objects2.length = 0;
gdjs.OverworldCode.GDNewSprite6Objects3.length = 0;
gdjs.OverworldCode.GDAligatorObjects1.length = 0;
gdjs.OverworldCode.GDAligatorObjects2.length = 0;
gdjs.OverworldCode.GDAligatorObjects3.length = 0;
gdjs.OverworldCode.GDHearthObjects1.length = 0;
gdjs.OverworldCode.GDHearthObjects2.length = 0;
gdjs.OverworldCode.GDHearthObjects3.length = 0;
gdjs.OverworldCode.GDHearth2Objects1.length = 0;
gdjs.OverworldCode.GDHearth2Objects2.length = 0;
gdjs.OverworldCode.GDHearth2Objects3.length = 0;
gdjs.OverworldCode.GDHearth3Objects1.length = 0;
gdjs.OverworldCode.GDHearth3Objects2.length = 0;
gdjs.OverworldCode.GDHearth3Objects3.length = 0;
gdjs.OverworldCode.GDHearthMobObjects1.length = 0;
gdjs.OverworldCode.GDHearthMobObjects2.length = 0;
gdjs.OverworldCode.GDHearthMobObjects3.length = 0;
gdjs.OverworldCode.GDHearthMob2Objects1.length = 0;
gdjs.OverworldCode.GDHearthMob2Objects2.length = 0;
gdjs.OverworldCode.GDHearthMob2Objects3.length = 0;
gdjs.OverworldCode.GDHearthMob3Objects1.length = 0;
gdjs.OverworldCode.GDHearthMob3Objects2.length = 0;
gdjs.OverworldCode.GDHearthMob3Objects3.length = 0;
gdjs.OverworldCode.GDSpellThunderObjects1.length = 0;
gdjs.OverworldCode.GDSpellThunderObjects2.length = 0;
gdjs.OverworldCode.GDSpellThunderObjects3.length = 0;
gdjs.OverworldCode.GDFireballObjects1.length = 0;
gdjs.OverworldCode.GDFireballObjects2.length = 0;
gdjs.OverworldCode.GDFireballObjects3.length = 0;
gdjs.OverworldCode.GDCircleObjects1.length = 0;
gdjs.OverworldCode.GDCircleObjects2.length = 0;
gdjs.OverworldCode.GDCircleObjects3.length = 0;
gdjs.OverworldCode.GDFireball2Objects1.length = 0;
gdjs.OverworldCode.GDFireball2Objects2.length = 0;
gdjs.OverworldCode.GDFireball2Objects3.length = 0;
gdjs.OverworldCode.GDGrassObjects1.length = 0;
gdjs.OverworldCode.GDGrassObjects2.length = 0;
gdjs.OverworldCode.GDGrassObjects3.length = 0;
gdjs.OverworldCode.GDTransitionObjects1.length = 0;
gdjs.OverworldCode.GDTransitionObjects2.length = 0;
gdjs.OverworldCode.GDTransitionObjects3.length = 0;


return;

}

gdjs['OverworldCode'] = gdjs.OverworldCode;
