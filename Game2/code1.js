gdjs.LoadingScreenCode = {};
gdjs.LoadingScreenCode.localVariables = [];
gdjs.LoadingScreenCode.GDLoadingScreenObjects1= [];
gdjs.LoadingScreenCode.GDLoadingScreenObjects2= [];
gdjs.LoadingScreenCode.GDLoadingBarObjects1= [];
gdjs.LoadingScreenCode.GDLoadingBarObjects2= [];
gdjs.LoadingScreenCode.GDTransitionObjects1= [];
gdjs.LoadingScreenCode.GDTransitionObjects2= [];


gdjs.LoadingScreenCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LoadingScreen"), gdjs.LoadingScreenCode.GDLoadingScreenObjects1);
{gdjs.evtTools.runtimeScene.prioritizeLoadingOfScene(runtimeScene, "Overworld");
}
{gdjs.evtTools.sound.preloadSound(runtimeScene, "Ambiance forêt_test2.mp3");
}
{for(var i = 0, len = gdjs.LoadingScreenCode.GDLoadingScreenObjects1.length ;i < len;++i) {
    gdjs.LoadingScreenCode.GDLoadingScreenObjects1[i].resetTimer("Loading");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("LoadingScreen"), gdjs.LoadingScreenCode.GDLoadingScreenObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LoadingScreenCode.GDLoadingScreenObjects1.length;i<l;++i) {
    if ( gdjs.LoadingScreenCode.GDLoadingScreenObjects1[i].getTimerElapsedTimeInSecondsOrNaN("Loading") >= 3 ) {
        isConditionTrue_0 = true;
        gdjs.LoadingScreenCode.GDLoadingScreenObjects1[k] = gdjs.LoadingScreenCode.GDLoadingScreenObjects1[i];
        ++k;
    }
}
gdjs.LoadingScreenCode.GDLoadingScreenObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Overworld", false);
}
}

}


};

gdjs.LoadingScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LoadingScreenCode.GDLoadingScreenObjects1.length = 0;
gdjs.LoadingScreenCode.GDLoadingScreenObjects2.length = 0;
gdjs.LoadingScreenCode.GDLoadingBarObjects1.length = 0;
gdjs.LoadingScreenCode.GDLoadingBarObjects2.length = 0;
gdjs.LoadingScreenCode.GDTransitionObjects1.length = 0;
gdjs.LoadingScreenCode.GDTransitionObjects2.length = 0;

gdjs.LoadingScreenCode.eventsList0(runtimeScene);
gdjs.LoadingScreenCode.GDLoadingScreenObjects1.length = 0;
gdjs.LoadingScreenCode.GDLoadingScreenObjects2.length = 0;
gdjs.LoadingScreenCode.GDLoadingBarObjects1.length = 0;
gdjs.LoadingScreenCode.GDLoadingBarObjects2.length = 0;
gdjs.LoadingScreenCode.GDTransitionObjects1.length = 0;
gdjs.LoadingScreenCode.GDTransitionObjects2.length = 0;


return;

}

gdjs['LoadingScreenCode'] = gdjs.LoadingScreenCode;
