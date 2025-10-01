
gdjs.evtsExt__Flash__FlashEffect = gdjs.evtsExt__Flash__FlashEffect || {};

/**
 * Behavior generated from Flash effect
 */
gdjs.evtsExt__Flash__FlashEffect.FlashEffect = class FlashEffect extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__Flash__FlashEffect.FlashEffect.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.Effect = behaviorData.Effect !== undefined ? behaviorData.Effect : "";
    this._behaviorData.HalfPeriodTime = behaviorData.HalfPeriodTime !== undefined ? behaviorData.HalfPeriodTime : Number("0.1") || 0;
    this._behaviorData.IsFlashing = false;
    this._behaviorData.FlashDuration = Number("0") || 0;
    this._behaviorData.EffectName = "";
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.Effect !== newBehaviorData.Effect)
      this._behaviorData.Effect = newBehaviorData.Effect;
    if (oldBehaviorData.HalfPeriodTime !== newBehaviorData.HalfPeriodTime)
      this._behaviorData.HalfPeriodTime = newBehaviorData.HalfPeriodTime;
    if (oldBehaviorData.IsFlashing !== newBehaviorData.IsFlashing)
      this._behaviorData.IsFlashing = newBehaviorData.IsFlashing;
    if (oldBehaviorData.FlashDuration !== newBehaviorData.FlashDuration)
      this._behaviorData.FlashDuration = newBehaviorData.FlashDuration;
    if (oldBehaviorData.EffectName !== newBehaviorData.EffectName)
      this._behaviorData.EffectName = newBehaviorData.EffectName;

    return true;
  }

  // Network sync:
  getNetworkSyncData() {
    return {
      ...super.getNetworkSyncData(),
      props: {
        
    Effect: this._behaviorData.Effect,
    HalfPeriodTime: this._behaviorData.HalfPeriodTime,
    IsFlashing: this._behaviorData.IsFlashing,
    FlashDuration: this._behaviorData.FlashDuration,
    EffectName: this._behaviorData.EffectName,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData) {
    super.updateFromNetworkSyncData(networkSyncData);
    
    if (networkSyncData.props.Effect !== undefined)
      this._behaviorData.Effect = networkSyncData.props.Effect;
    if (networkSyncData.props.HalfPeriodTime !== undefined)
      this._behaviorData.HalfPeriodTime = networkSyncData.props.HalfPeriodTime;
    if (networkSyncData.props.IsFlashing !== undefined)
      this._behaviorData.IsFlashing = networkSyncData.props.IsFlashing;
    if (networkSyncData.props.FlashDuration !== undefined)
      this._behaviorData.FlashDuration = networkSyncData.props.FlashDuration;
    if (networkSyncData.props.EffectName !== undefined)
      this._behaviorData.EffectName = networkSyncData.props.EffectName;
  }

  // Properties:
  
  _getEffect() {
    return this._behaviorData.Effect !== undefined ? this._behaviorData.Effect : "";
  }
  _setEffect(newValue) {
    this._behaviorData.Effect = newValue;
  }
  _getHalfPeriodTime() {
    return this._behaviorData.HalfPeriodTime !== undefined ? this._behaviorData.HalfPeriodTime : Number("0.1") || 0;
  }
  _setHalfPeriodTime(newValue) {
    this._behaviorData.HalfPeriodTime = newValue;
  }
  _getIsFlashing() {
    return this._behaviorData.IsFlashing !== undefined ? this._behaviorData.IsFlashing : false;
  }
  _setIsFlashing(newValue) {
    this._behaviorData.IsFlashing = newValue;
  }
  _toggleIsFlashing() {
    this._setIsFlashing(!this._getIsFlashing());
  }
  _getFlashDuration() {
    return this._behaviorData.FlashDuration !== undefined ? this._behaviorData.FlashDuration : Number("0") || 0;
  }
  _setFlashDuration(newValue) {
    this._behaviorData.FlashDuration = newValue;
  }
  _getEffectName() {
    return this._behaviorData.EffectName !== undefined ? this._behaviorData.EffectName : "";
  }
  _setEffectName(newValue) {
    this._behaviorData.EffectName = newValue;
  }
}

/**
 * Shared data generated from Flash effect
 */
gdjs.evtsExt__Flash__FlashEffect.FlashEffect.SharedData = class FlashEffectSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__Flash__FlashEffect.FlashEffect.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._Flash_FlashEffectSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._Flash_FlashEffectSharedData = new gdjs.evtsExt__Flash__FlashEffect.FlashEffect.SharedData(
      initialData
    );
  }
  return instanceContainer._Flash_FlashEffectSharedData;
}

// Methods:
gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.doStepPreEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.doStepPreEventsContext.GDObjectObjects3= [];


gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.doStepPreEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.doStepPreEventsContext.GDObjectObjects2[i].getTimerElapsedTimeInSecondsOrNaN("Flash_Effect_Timer") > eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHalfPeriodTime() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.doStepPreEventsContext.GDObjectObjects2[i].resetTimer("Flash_Effect_Timer");
}
}
{for(var i = 0, len = gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).ToggleEffect(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getEffectName(), eventsFunctionContext);
}
}
}

}


};gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.doStepPreEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.doStepPreEventsContext.GDObjectObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFlashDuration() > 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.doStepPreEventsContext.GDObjectObjects1[i].getTimerElapsedTimeInSecondsOrNaN("Flash_Effect_Duration_Timer") > eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFlashDuration() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).Stop(eventsFunctionContext);
}
}
}

}


};gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.doStepPreEventsContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.doStepPreEventsContext.eventsList1(runtimeScene, eventsFunctionContext);
}


};gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.doStepPreEventsContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsFlashing(eventsFunctionContext) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.doStepPreEventsContext.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
this._onceTriggers.startNewFrame();
var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Effect": this._getEffect()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Flash"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Flash"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.doStepPreEventsContext.GDObjectObjects3.length = 0;

gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.doStepPreEventsContext.eventsList3(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.doStepPreEventsContext.GDObjectObjects3.length = 0;


return;
}
gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.FlashContext = {};
gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.FlashContext.GDObjectObjects1= [];
gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.FlashContext.GDObjectObjects2= [];
gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.FlashContext.GDObjectObjects3= [];


gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.FlashContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.FlashContext.GDObjectObjects1, gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.FlashContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.FlashContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.FlashContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Effect")).isEffectEnabled(eventsFunctionContext.getArgument("NewEffectName")) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.FlashContext.GDObjectObjects2[k] = gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.FlashContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.FlashContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.FlashContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.FlashContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.FlashContext.GDObjectObjects2[i].setVariableBoolean(gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.FlashContext.GDObjectObjects2[i].getVariables().get("__FlashColor_StartingState"), true);
}
}
}

}


{

gdjs.copyArray(gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.FlashContext.GDObjectObjects1, gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.FlashContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.FlashContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.FlashContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Effect")).isEffectEnabled(eventsFunctionContext.getArgument("NewEffectName"))) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.FlashContext.GDObjectObjects2[k] = gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.FlashContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.FlashContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.FlashContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.FlashContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.FlashContext.GDObjectObjects2[i].setVariableBoolean(gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.FlashContext.GDObjectObjects2[i].getVariables().get("__FlashColor_StartingState"), false);
}
}
}

}


{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.FlashContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.FlashContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.FlashContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).ToggleEffect(eventsFunctionContext.getArgument("NewEffectName"), eventsFunctionContext);
}
}
{for(var i = 0, len = gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.FlashContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.FlashContext.GDObjectObjects1[i].resetTimer("Flash_Effect_Timer");
}
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsFlashing(true)
}
}

}


};gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.FlashContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.FlashContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.FlashContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.FlashContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsFlashing(eventsFunctionContext) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.FlashContext.GDObjectObjects1[k] = gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.FlashContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.FlashContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getEffectName() != eventsFunctionContext.getArgument("NewEffectName"));
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.FlashContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.FlashContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.FlashContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).Stop(eventsFunctionContext);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.FlashContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.FlashContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.FlashContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsFlashing(eventsFunctionContext)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.FlashContext.GDObjectObjects1[k] = gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.FlashContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.FlashContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.FlashContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.FlashContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.FlashContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.FlashContext.GDObjectObjects1[i].resetTimer("Flash_Effect_Duration_Timer");
}
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setFlashDuration(eventsFunctionContext.getArgument("NewFlashDuration"))
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setEffectName(eventsFunctionContext.getArgument("NewEffectName"))
}
}

}


};

gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.Flash = function(NewFlashDuration, NewEffectName, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Effect": this._getEffect()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Flash"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Flash"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "NewFlashDuration") return NewFlashDuration;
if (argName === "NewEffectName") return NewEffectName;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.FlashContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.FlashContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.FlashContext.GDObjectObjects3.length = 0;

gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.FlashContext.eventsList1(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.FlashContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.FlashContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.FlashContext.GDObjectObjects3.length = 0;


return;
}
gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.IsFlashingContext = {};
gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.IsFlashingContext.GDObjectObjects1= [];
gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.IsFlashingContext.GDObjectObjects2= [];


gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.IsFlashingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = false;}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsFlashing();
}
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = true;}
}

}


};

gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.IsFlashing = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Effect": this._getEffect()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Flash"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Flash"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.IsFlashingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.IsFlashingContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.IsFlashingContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.IsFlashingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.IsFlashingContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.onDeActivateContext = {};
gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.onDeActivateContext.GDObjectObjects1= [];
gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.onDeActivateContext.GDObjectObjects2= [];


gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.onDeActivateContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.onDeActivateContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.onDeActivateContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.onDeActivateContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).Stop(eventsFunctionContext);
}
}
}

}


};

gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.onDeActivate = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Effect": this._getEffect()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Flash"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Flash"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.onDeActivateContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.onDeActivateContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.onDeActivateContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.onDeActivateContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.onDeActivateContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.StopContext = {};
gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.StopContext.GDObjectObjects1= [];
gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.StopContext.GDObjectObjects2= [];
gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.StopContext.GDObjectObjects3= [];


gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.StopContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.StopContext.GDObjectObjects1, gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.StopContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.StopContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.StopContext.GDObjectObjects2[i].getVariableBoolean(gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.StopContext.GDObjectObjects2[i].getVariables().get("__FlashEffect_StartingState"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.StopContext.GDObjectObjects2[k] = gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.StopContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.StopContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.StopContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.StopContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.StopContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Effect")).enableEffect(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getEffectName(), true);
}
}
}

}


{

/* Reuse gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.StopContext.GDObjectObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.StopContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.StopContext.GDObjectObjects1[i].getVariableBoolean(gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.StopContext.GDObjectObjects1[i].getVariables().get("__FlashEffect_StartingState"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.StopContext.GDObjectObjects1[k] = gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.StopContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.StopContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.StopContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.StopContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.StopContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Effect")).enableEffect(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getEffectName(), false);
}
}
}

}


};gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.StopContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsFlashing();
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.StopContext.GDObjectObjects1);
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsFlashing(false)
}
{for(var i = 0, len = gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.StopContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.StopContext.GDObjectObjects1[i].removeTimer("Flash_Effect_Timer");
}
}
{for(var i = 0, len = gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.StopContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.StopContext.GDObjectObjects1[i].removeTimer("Flash_Effect_Duration_Timer");
}
}

{ //Subevents
gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.StopContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.Stop = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Effect": this._getEffect()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Flash"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Flash"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.StopContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.StopContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.StopContext.GDObjectObjects3.length = 0;

gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.StopContext.eventsList1(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.StopContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.StopContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.StopContext.GDObjectObjects3.length = 0;


return;
}
gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.HalfPeriodTimeContext = {};
gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.HalfPeriodTimeContext.GDObjectObjects1= [];
gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.HalfPeriodTimeContext.GDObjectObjects2= [];


gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.HalfPeriodTimeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHalfPeriodTime();}
}

}


};

gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.HalfPeriodTime = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Effect": this._getEffect()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Flash"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Flash"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.HalfPeriodTimeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.HalfPeriodTimeContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.HalfPeriodTimeContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.HalfPeriodTimeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.HalfPeriodTimeContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.SetHalfPeriodTimeContext = {};
gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.SetHalfPeriodTimeContext.GDObjectObjects1= [];
gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.SetHalfPeriodTimeContext.GDObjectObjects2= [];


gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.SetHalfPeriodTimeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHalfPeriodTime(eventsFunctionContext.getArgument("Value"))
}
}

}


};

gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.SetHalfPeriodTime = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Effect": this._getEffect()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Flash"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Flash"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.SetHalfPeriodTimeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.SetHalfPeriodTimeContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.SetHalfPeriodTimeContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.SetHalfPeriodTimeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.SetHalfPeriodTimeContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.ToggleEffectContext = {};
gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.ToggleEffectContext.GDObjectObjects1= [];
gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.ToggleEffectContext.GDObjectObjects2= [];


gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.ToggleEffectContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.ToggleEffectContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.ToggleEffectContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.ToggleEffectContext.GDObjectObjects1[i].setVariableBoolean(gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.ToggleEffectContext.GDObjectObjects1[i].getVariables().get("__Flash_EffectToggled"), false);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.ToggleEffectContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.ToggleEffectContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.ToggleEffectContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Effect")).isEffectEnabled(eventsFunctionContext.getArgument("EffectName")) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.ToggleEffectContext.GDObjectObjects1[k] = gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.ToggleEffectContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.ToggleEffectContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.ToggleEffectContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.ToggleEffectContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.ToggleEffectContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Effect")).enableEffect(eventsFunctionContext.getArgument("EffectName"), false);
}
}
{for(var i = 0, len = gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.ToggleEffectContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.ToggleEffectContext.GDObjectObjects1[i].setVariableBoolean(gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.ToggleEffectContext.GDObjectObjects1[i].getVariables().get("__Flash_EffectToggled"), true);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.ToggleEffectContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.ToggleEffectContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.ToggleEffectContext.GDObjectObjects1[i].getVariableBoolean(gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.ToggleEffectContext.GDObjectObjects1[i].getVariables().get("__Flash_EffectToggled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.ToggleEffectContext.GDObjectObjects1[k] = gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.ToggleEffectContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.ToggleEffectContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.ToggleEffectContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.ToggleEffectContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Effect")).isEffectEnabled(eventsFunctionContext.getArgument("EffectName"))) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.ToggleEffectContext.GDObjectObjects1[k] = gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.ToggleEffectContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.ToggleEffectContext.GDObjectObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.ToggleEffectContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.ToggleEffectContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.ToggleEffectContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Effect")).enableEffect(eventsFunctionContext.getArgument("EffectName"), true);
}
}
}

}


};

gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.ToggleEffect = function(EffectName, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Effect": this._getEffect()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Flash"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Flash"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "EffectName") return EffectName;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.ToggleEffectContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.ToggleEffectContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.ToggleEffectContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.ToggleEffectContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Flash__FlashEffect.FlashEffect.prototype.ToggleEffectContext.GDObjectObjects2.length = 0;


return;
}


gdjs.registerBehavior("Flash::FlashEffect", gdjs.evtsExt__Flash__FlashEffect.FlashEffect);
