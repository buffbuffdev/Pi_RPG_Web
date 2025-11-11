
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator = gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator || {};

/**
 * Behavior generated from Top-down movement animator
 */
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator = class TopDownMovementAnimator extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.Animation = behaviorData.Animation !== undefined ? behaviorData.Animation : "";
    this._behaviorData.TopDownMovement = behaviorData.TopDownMovement !== undefined ? behaviorData.TopDownMovement : "";
    this._behaviorData.IsScalingAnimation = behaviorData.IsScalingAnimation !== undefined ? behaviorData.IsScalingAnimation : true;
    this._behaviorData.IsPausingAnimation = behaviorData.IsPausingAnimation !== undefined ? behaviorData.IsPausingAnimation : true;
    this._behaviorData.AnimationName = behaviorData.AnimationName !== undefined ? behaviorData.AnimationName : "Walk";
    this._behaviorData.DirectionCount = behaviorData.DirectionCount !== undefined ? behaviorData.DirectionCount : Number("0") || 0;
    this._behaviorData.AngleOffset = behaviorData.AngleOffset !== undefined ? behaviorData.AngleOffset : Number("0") || 0;
    this._behaviorData.AnimationDirection = Number("0") || 0;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.Animation !== newBehaviorData.Animation)
      this._behaviorData.Animation = newBehaviorData.Animation;
    if (oldBehaviorData.TopDownMovement !== newBehaviorData.TopDownMovement)
      this._behaviorData.TopDownMovement = newBehaviorData.TopDownMovement;
    if (oldBehaviorData.IsScalingAnimation !== newBehaviorData.IsScalingAnimation)
      this._behaviorData.IsScalingAnimation = newBehaviorData.IsScalingAnimation;
    if (oldBehaviorData.IsPausingAnimation !== newBehaviorData.IsPausingAnimation)
      this._behaviorData.IsPausingAnimation = newBehaviorData.IsPausingAnimation;
    if (oldBehaviorData.AnimationName !== newBehaviorData.AnimationName)
      this._behaviorData.AnimationName = newBehaviorData.AnimationName;
    if (oldBehaviorData.DirectionCount !== newBehaviorData.DirectionCount)
      this._behaviorData.DirectionCount = newBehaviorData.DirectionCount;
    if (oldBehaviorData.AngleOffset !== newBehaviorData.AngleOffset)
      this._behaviorData.AngleOffset = newBehaviorData.AngleOffset;
    if (oldBehaviorData.AnimationDirection !== newBehaviorData.AnimationDirection)
      this._behaviorData.AnimationDirection = newBehaviorData.AnimationDirection;

    return true;
  }

  // Network sync:
  getNetworkSyncData(syncOptions) {
    return {
      ...super.getNetworkSyncData(syncOptions),
      props: {
        
    Animation: this._behaviorData.Animation,
    TopDownMovement: this._behaviorData.TopDownMovement,
    IsScalingAnimation: this._behaviorData.IsScalingAnimation,
    IsPausingAnimation: this._behaviorData.IsPausingAnimation,
    AnimationName: this._behaviorData.AnimationName,
    DirectionCount: this._behaviorData.DirectionCount,
    AngleOffset: this._behaviorData.AngleOffset,
    AnimationDirection: this._behaviorData.AnimationDirection,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData, options) {
    super.updateFromNetworkSyncData(networkSyncData, options);
    
    if (networkSyncData.props.Animation !== undefined)
      this._behaviorData.Animation = networkSyncData.props.Animation;
    if (networkSyncData.props.TopDownMovement !== undefined)
      this._behaviorData.TopDownMovement = networkSyncData.props.TopDownMovement;
    if (networkSyncData.props.IsScalingAnimation !== undefined)
      this._behaviorData.IsScalingAnimation = networkSyncData.props.IsScalingAnimation;
    if (networkSyncData.props.IsPausingAnimation !== undefined)
      this._behaviorData.IsPausingAnimation = networkSyncData.props.IsPausingAnimation;
    if (networkSyncData.props.AnimationName !== undefined)
      this._behaviorData.AnimationName = networkSyncData.props.AnimationName;
    if (networkSyncData.props.DirectionCount !== undefined)
      this._behaviorData.DirectionCount = networkSyncData.props.DirectionCount;
    if (networkSyncData.props.AngleOffset !== undefined)
      this._behaviorData.AngleOffset = networkSyncData.props.AngleOffset;
    if (networkSyncData.props.AnimationDirection !== undefined)
      this._behaviorData.AnimationDirection = networkSyncData.props.AnimationDirection;
  }

  // Properties:
  
  _getAnimation() {
    return this._behaviorData.Animation !== undefined ? this._behaviorData.Animation : "";
  }
  _setAnimation(newValue) {
    this._behaviorData.Animation = newValue;
  }
  _getTopDownMovement() {
    return this._behaviorData.TopDownMovement !== undefined ? this._behaviorData.TopDownMovement : "";
  }
  _setTopDownMovement(newValue) {
    this._behaviorData.TopDownMovement = newValue;
  }
  _getIsScalingAnimation() {
    return this._behaviorData.IsScalingAnimation !== undefined ? this._behaviorData.IsScalingAnimation : true;
  }
  _setIsScalingAnimation(newValue) {
    this._behaviorData.IsScalingAnimation = newValue;
  }
  _toggleIsScalingAnimation() {
    this._setIsScalingAnimation(!this._getIsScalingAnimation());
  }
  _getIsPausingAnimation() {
    return this._behaviorData.IsPausingAnimation !== undefined ? this._behaviorData.IsPausingAnimation : true;
  }
  _setIsPausingAnimation(newValue) {
    this._behaviorData.IsPausingAnimation = newValue;
  }
  _toggleIsPausingAnimation() {
    this._setIsPausingAnimation(!this._getIsPausingAnimation());
  }
  _getAnimationName() {
    return this._behaviorData.AnimationName !== undefined ? this._behaviorData.AnimationName : "Walk";
  }
  _setAnimationName(newValue) {
    this._behaviorData.AnimationName = newValue;
  }
  _getDirectionCount() {
    return this._behaviorData.DirectionCount !== undefined ? this._behaviorData.DirectionCount : Number("0") || 0;
  }
  _setDirectionCount(newValue) {
    this._behaviorData.DirectionCount = newValue;
  }
  _getAngleOffset() {
    return this._behaviorData.AngleOffset !== undefined ? this._behaviorData.AngleOffset : Number("0") || 0;
  }
  _setAngleOffset(newValue) {
    this._behaviorData.AngleOffset = newValue;
  }
  _getAnimationDirection() {
    return this._behaviorData.AnimationDirection !== undefined ? this._behaviorData.AnimationDirection : Number("0") || 0;
  }
  _setAnimationDirection(newValue) {
    this._behaviorData.AnimationDirection = newValue;
  }
}

/**
 * Shared data generated from Top-down movement animator
 */
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.SharedData = class TopDownMovementAnimatorSharedData {
  constructor(sharedData) {
    
    this.NewAnimationDirection = Number("0") || 0;
    this.AnimationFrame = Number("0") || 0;
  }
  
  // Shared properties:
  
  _getNewAnimationDirection() {
    return this.NewAnimationDirection !== undefined ? this.NewAnimationDirection : Number("0") || 0;
  }
  _setNewAnimationDirection(newValue) {
    this.NewAnimationDirection = newValue;
  }
  _getAnimationFrame() {
    return this.AnimationFrame !== undefined ? this.AnimationFrame : Number("0") || 0;
  }
  _setAnimationFrame(newValue) {
    this.AnimationFrame = newValue;
  }
}

gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._TopDownMovementAnimator_TopDownMovementAnimatorSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._TopDownMovementAnimator_TopDownMovementAnimatorSharedData = new gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.SharedData(
      initialData
    );
  }
  return instanceContainer._TopDownMovementAnimator_TopDownMovementAnimatorSharedData;
}

// Methods:
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.onCreatedContext = {};
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.onCreatedContext.idToCallbackMap = new Map();
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.onCreatedContext.GDObjectObjects2= [];
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.onCreatedContext.GDObjectObjects3= [];


gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.onCreatedContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.onCreatedContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.onCreatedContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).diagonalsAllowed() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.onCreatedContext.GDObjectObjects2[k] = gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.onCreatedContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.onCreatedContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setDirectionCount(8)
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.onCreatedContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.onCreatedContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).diagonalsAllowed()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.onCreatedContext.GDObjectObjects1[k] = gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.onCreatedContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.onCreatedContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setDirectionCount(4)
}
}

}


};gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.onCreatedContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDirectionCount() == 0);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.onCreatedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).UpdateAnimation(eventsFunctionContext);
}
}
}

}


};

gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.onCreated = function(parentEventsFunctionContext) {

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
, "Animation": this._getAnimation()
, "TopDownMovement": this._getTopDownMovement()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("TopDownMovementAnimator"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("TopDownMovementAnimator"),
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

gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.onCreatedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.onCreatedContext.GDObjectObjects3.length = 0;

gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.onCreatedContext.eventsList1(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.onCreatedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.onCreatedContext.GDObjectObjects3.length = 0;


return;
}
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.onActivateContext = {};
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.onActivateContext.idToCallbackMap = new Map();
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.onActivateContext.GDObjectObjects1= [];
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.onActivateContext.GDObjectObjects2= [];


gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.onActivateContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.onActivateContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.onActivateContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.onActivateContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).UpdateAnimation(eventsFunctionContext);
}
}
}

}


};

gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.onActivate = function(parentEventsFunctionContext) {

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
, "Animation": this._getAnimation()
, "TopDownMovement": this._getTopDownMovement()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("TopDownMovementAnimator"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("TopDownMovementAnimator"),
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

gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.onActivateContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.onActivateContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.onActivateContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.onActivateContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.onActivateContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.doStepPostEventsContext.idToCallbackMap = new Map();
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.doStepPostEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.doStepPostEventsContext.GDObjectObjects2= [];


gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.doStepPostEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).UpdateAnimation(eventsFunctionContext);
}
}
}

}


};

gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

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
, "Animation": this._getAnimation()
, "TopDownMovement": this._getTopDownMovement()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("TopDownMovementAnimator"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("TopDownMovementAnimator"),
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

gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationContext = {};
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationContext.idToCallbackMap = new Map();
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationContext.GDObjectObjects1= [];
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationContext.GDObjectObjects2= [];


gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).UpdateAnimationDirection(eventsFunctionContext);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsScalingAnimation();
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).UpdateAnimationSpeedScale(eventsFunctionContext);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsPausingAnimation();
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).UpdateAnimationPause(eventsFunctionContext);
}
}
}

}


};

gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimation = function(parentEventsFunctionContext) {

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
, "Animation": this._getAnimation()
, "TopDownMovement": this._getTopDownMovement()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("TopDownMovementAnimator"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("TopDownMovementAnimator"),
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

gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.AnimationNameContext = {};
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.AnimationNameContext.idToCallbackMap = new Map();
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.AnimationNameContext.GDObjectObjects1= [];
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.AnimationNameContext.GDObjectObjects2= [];


gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.AnimationNameContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAnimationName();}
}

}


};

gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.AnimationName = function(parentEventsFunctionContext) {

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
, "Animation": this._getAnimation()
, "TopDownMovement": this._getTopDownMovement()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("TopDownMovementAnimator"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("TopDownMovementAnimator"),
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

gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.AnimationNameContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.AnimationNameContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.AnimationNameContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.AnimationNameContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.AnimationNameContext.GDObjectObjects2.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetAnimationNameContext = {};
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetAnimationNameContext.idToCallbackMap = new Map();
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetAnimationNameContext.GDObjectObjects1= [];
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetAnimationNameContext.GDObjectObjects2= [];


gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetAnimationNameContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAnimationName() != eventsFunctionContext.getArgument("Value"));
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetAnimationNameContext.GDObjectObjects1);
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setAnimationName(eventsFunctionContext.getArgument("Value"))
}
{for(var i = 0, len = gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetAnimationNameContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetAnimationNameContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).UpdateAnimationName(eventsFunctionContext);
}
}
{for(var i = 0, len = gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetAnimationNameContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetAnimationNameContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).UpdateAnimationDirection(eventsFunctionContext);
}
}
}

}


};

gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetAnimationName = function(Value, parentEventsFunctionContext) {

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
, "Animation": this._getAnimation()
, "TopDownMovement": this._getTopDownMovement()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("TopDownMovementAnimator"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("TopDownMovementAnimator"),
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

gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetAnimationNameContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetAnimationNameContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetAnimationNameContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetAnimationNameContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetAnimationNameContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.IsPausingAnimationContext = {};
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.IsPausingAnimationContext.idToCallbackMap = new Map();
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.IsPausingAnimationContext.GDObjectObjects1= [];
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.IsPausingAnimationContext.GDObjectObjects2= [];


gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.IsPausingAnimationContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsPausingAnimation();
}
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = true;}
}

}


};

gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.IsPausingAnimation = function(parentEventsFunctionContext) {

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
, "Animation": this._getAnimation()
, "TopDownMovement": this._getTopDownMovement()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("TopDownMovementAnimator"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("TopDownMovementAnimator"),
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

gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.IsPausingAnimationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.IsPausingAnimationContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.IsPausingAnimationContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.IsPausingAnimationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.IsPausingAnimationContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetIsPausingAnimationContext = {};
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetIsPausingAnimationContext.idToCallbackMap = new Map();
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetIsPausingAnimationContext.GDObjectObjects1= [];
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetIsPausingAnimationContext.GDObjectObjects2= [];


gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetIsPausingAnimationContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !eventsFunctionContext.getArgument("Value");
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetIsPausingAnimationContext.GDObjectObjects1);
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsPausingAnimation(false)
}
{for(var i = 0, len = gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetIsPausingAnimationContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetIsPausingAnimationContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).resumeAnimation();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getArgument("Value");
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetIsPausingAnimationContext.GDObjectObjects1);
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsPausingAnimation(true)
}
{for(var i = 0, len = gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetIsPausingAnimationContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetIsPausingAnimationContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).UpdateAnimationPause(eventsFunctionContext);
}
}
}

}


};

gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetIsPausingAnimation = function(Value, parentEventsFunctionContext) {

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
, "Animation": this._getAnimation()
, "TopDownMovement": this._getTopDownMovement()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("TopDownMovementAnimator"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("TopDownMovementAnimator"),
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

gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetIsPausingAnimationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetIsPausingAnimationContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetIsPausingAnimationContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetIsPausingAnimationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetIsPausingAnimationContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.IsScalingAnimationContext = {};
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.IsScalingAnimationContext.idToCallbackMap = new Map();
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.IsScalingAnimationContext.GDObjectObjects1= [];
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.IsScalingAnimationContext.GDObjectObjects2= [];


gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.IsScalingAnimationContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsScalingAnimation();
}
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = true;}
}

}


};

gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.IsScalingAnimation = function(parentEventsFunctionContext) {

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
, "Animation": this._getAnimation()
, "TopDownMovement": this._getTopDownMovement()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("TopDownMovementAnimator"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("TopDownMovementAnimator"),
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

gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.IsScalingAnimationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.IsScalingAnimationContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.IsScalingAnimationContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.IsScalingAnimationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.IsScalingAnimationContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetIsScalingAnimationContext = {};
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetIsScalingAnimationContext.idToCallbackMap = new Map();
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetIsScalingAnimationContext.GDObjectObjects1= [];
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetIsScalingAnimationContext.GDObjectObjects2= [];


gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetIsScalingAnimationContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !eventsFunctionContext.getArgument("Value");
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetIsScalingAnimationContext.GDObjectObjects1);
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsScalingAnimation(false)
}
{for(var i = 0, len = gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetIsScalingAnimationContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetIsScalingAnimationContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).setAnimationSpeedScale(1);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getArgument("Value");
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetIsScalingAnimationContext.GDObjectObjects1);
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsScalingAnimation(true)
}
{for(var i = 0, len = gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetIsScalingAnimationContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetIsScalingAnimationContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).UpdateAnimationSpeedScale(eventsFunctionContext);
}
}
}

}


};

gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetIsScalingAnimation = function(Value, parentEventsFunctionContext) {

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
, "Animation": this._getAnimation()
, "TopDownMovement": this._getTopDownMovement()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("TopDownMovementAnimator"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("TopDownMovementAnimator"),
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

gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetIsScalingAnimationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetIsScalingAnimationContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetIsScalingAnimationContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetIsScalingAnimationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetIsScalingAnimationContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationSpeedScaleContext = {};
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationSpeedScaleContext.idToCallbackMap = new Map();
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationSpeedScaleContext.GDObjectObjects1= [];
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationSpeedScaleContext.GDObjectObjects2= [];


gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationSpeedScaleContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationSpeedScaleContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationSpeedScaleContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationSpeedScaleContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).getMaxSpeed() > 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationSpeedScaleContext.GDObjectObjects1[k] = gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationSpeedScaleContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationSpeedScaleContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationSpeedScaleContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationSpeedScaleContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationSpeedScaleContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).setAnimationSpeedScale((gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationSpeedScaleContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).getSpeed()) / (gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationSpeedScaleContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).getMaxSpeed()));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationSpeedScaleContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationSpeedScaleContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationSpeedScaleContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).getMaxSpeed() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationSpeedScaleContext.GDObjectObjects1[k] = gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationSpeedScaleContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationSpeedScaleContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationSpeedScaleContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationSpeedScaleContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationSpeedScaleContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).setAnimationSpeedScale(0);
}
}
}

}


};

gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationSpeedScale = function(parentEventsFunctionContext) {

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
, "Animation": this._getAnimation()
, "TopDownMovement": this._getTopDownMovement()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("TopDownMovementAnimator"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("TopDownMovementAnimator"),
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

gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationSpeedScaleContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationSpeedScaleContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationSpeedScaleContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationSpeedScaleContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationSpeedScaleContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationPauseContext = {};
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationPauseContext.idToCallbackMap = new Map();
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationPauseContext.GDObjectObjects1= [];
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationPauseContext.GDObjectObjects2= [];


gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationPauseContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationPauseContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationPauseContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationPauseContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).getSpeed() > 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationPauseContext.GDObjectObjects1[k] = gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationPauseContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationPauseContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationPauseContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationPauseContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationPauseContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).resumeAnimation();
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationPauseContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationPauseContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationPauseContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).getSpeed() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationPauseContext.GDObjectObjects1[k] = gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationPauseContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationPauseContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationPauseContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationPauseContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationPauseContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).pauseAnimation();
}
}
}

}


};

gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationPause = function(parentEventsFunctionContext) {

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
, "Animation": this._getAnimation()
, "TopDownMovement": this._getTopDownMovement()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("TopDownMovementAnimator"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("TopDownMovementAnimator"),
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

gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationPauseContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationPauseContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationPauseContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationPauseContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationPauseContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.DirectionContext = {};
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.DirectionContext.idToCallbackMap = new Map();
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.DirectionContext.GDObjectObjects1= [];
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.DirectionContext.GDObjectObjects2= [];


gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.DirectionContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.DirectionContext.GDObjectObjects1);
{eventsFunctionContext.returnValue = ((( gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.DirectionContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.DirectionContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).getAngle()) + eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAngleOffset()) * eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDirectionCount() / 360;}
}

}


};

gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.Direction = function(parentEventsFunctionContext) {

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
, "Animation": this._getAnimation()
, "TopDownMovement": this._getTopDownMovement()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("TopDownMovementAnimator"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("TopDownMovementAnimator"),
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

gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.DirectionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.DirectionContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.DirectionContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.DirectionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.DirectionContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.DirectionDifferenceContext = {};
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.DirectionDifferenceContext.idToCallbackMap = new Map();
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.DirectionDifferenceContext.GDObjectObjects1= [];
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.DirectionDifferenceContext.GDObjectObjects2= [];


gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.DirectionDifferenceContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = gdjs.evtTools.common.mod(gdjs.evtTools.common.mod(eventsFunctionContext.getArgument("Direction") - eventsFunctionContext.getArgument("OtherDirection"), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDirectionCount()) + eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDirectionCount() / 2, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDirectionCount()) - eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDirectionCount() / 2;}
}

}


};

gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.DirectionDifference = function(Direction, OtherDirection, parentEventsFunctionContext) {

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
, "Animation": this._getAnimation()
, "TopDownMovement": this._getTopDownMovement()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("TopDownMovementAnimator"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("TopDownMovementAnimator"),
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
if (argName === "Direction") return Direction;
if (argName === "OtherDirection") return OtherDirection;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.DirectionDifferenceContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.DirectionDifferenceContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.DirectionDifferenceContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.DirectionDifferenceContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.DirectionDifferenceContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationDirectionContext = {};
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationDirectionContext.idToCallbackMap = new Map();
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationDirectionContext.GDObjectObjects1= [];
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationDirectionContext.GDObjectObjects2= [];


gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationDirectionContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("AnimationElapsedTime", variable);
}
eventsFunctionContext.localVariables.push(variables);
}
let isConditionTrue_0 = false;
{
/* Reuse gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationDirectionContext.GDObjectObjects1 */
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setAnimationDirection(gdjs.evtTools.common.mod(gdjs.evtTools.common.mod(Math.round(eventsFunctionContext.localVariables[0].getFromIndex(0).getAsNumber()), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDirectionCount()) + eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDirectionCount(), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDirectionCount()))
}
{eventsFunctionContext.localVariables[1].getFromIndex(0).setNumber((( gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationDirectionContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationDirectionContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).getAnimationElapsedTime()));
}
{for(var i = 0, len = gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationDirectionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationDirectionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).UpdateAnimationName(eventsFunctionContext);
}
}
{for(var i = 0, len = gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationDirectionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationDirectionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).setAnimationElapsedTime(eventsFunctionContext.localVariables[1].getFromIndex(0).getAsNumber());
}
}
}
eventsFunctionContext.localVariables.pop();

}


};gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationDirectionContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{



}


{

/* Reuse gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationDirectionContext.GDObjectObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (Math.abs((( gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationDirectionContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationDirectionContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).DirectionDifference(eventsFunctionContext.localVariables[0].getFromIndex(0).getAsNumber(), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAnimationDirection(), eventsFunctionContext))) > 0.5 + 0.03125);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationDirectionContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationDirectionContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{



}


{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("NewAnimationDirection", variable);
}
eventsFunctionContext.localVariables.push(variables);
}
let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationDirectionContext.GDObjectObjects1);
{eventsFunctionContext.localVariables[0].getFromIndex(0).setNumber((( gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationDirectionContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationDirectionContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).Direction(eventsFunctionContext)));
}

{ //Subevents
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationDirectionContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}
eventsFunctionContext.localVariables.pop();

}


};

gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationDirection = function(parentEventsFunctionContext) {

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
, "Animation": this._getAnimation()
, "TopDownMovement": this._getTopDownMovement()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("TopDownMovementAnimator"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("TopDownMovementAnimator"),
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

gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationDirectionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationDirectionContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationDirectionContext.eventsList2(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationDirectionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationDirectionContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationNameContext = {};
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationNameContext.idToCallbackMap = new Map();
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationNameContext.GDObjectObjects1= [];
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationNameContext.GDObjectObjects2= [];


gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationNameContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{

/* Reuse gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationNameContext.GDObjectObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationNameContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationNameContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).getAnimationName() != eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAnimationName() + ("" + eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAnimationDirection()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationNameContext.GDObjectObjects1[k] = gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationNameContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationNameContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationNameContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationNameContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationNameContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).setAnimationName(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAnimationName());
}
}
}

}


};gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationNameContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationNameContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationNameContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationNameContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).setAnimationName(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAnimationName() + ("" + eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAnimationDirection()));
}
}

{ //Subevents
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationNameContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationName = function(parentEventsFunctionContext) {

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
, "Animation": this._getAnimation()
, "TopDownMovement": this._getTopDownMovement()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("TopDownMovementAnimator"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("TopDownMovementAnimator"),
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

gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationNameContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationNameContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationNameContext.eventsList1(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationNameContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.UpdateAnimationNameContext.GDObjectObjects2.length = 0;


return;
}

gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("TopDownMovementAnimator::TopDownMovementAnimator", gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator);
