gdjs.CombatCode = {};
gdjs.CombatCode.localVariables = [];
gdjs.CombatCode.idToCallbackMap = new Map();


gdjs.CombatCode.eventsList0 = function(runtimeScene) {

};

gdjs.CombatCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();


gdjs.CombatCode.eventsList0(runtimeScene);


return;

}

gdjs['CombatCode'] = gdjs.CombatCode;
