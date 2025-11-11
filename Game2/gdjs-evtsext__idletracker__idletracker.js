
gdjs.evtsExt__IdleTracker__IdleTracker = gdjs.evtsExt__IdleTracker__IdleTracker || {};

/**
 * Behavior generated from Idle tracker
 */
gdjs.evtsExt__IdleTracker__IdleTracker.IdleTracker = class IdleTracker extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__IdleTracker__IdleTracker.IdleTracker.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.LastX = Number("") || 0;
    this._behaviorData.LastY = Number("") || 0;
    this._behaviorData.IsFarFromLastPosition = false;
    this._behaviorData.DurationBeforeIdle = behaviorData.DurationBeforeIdle !== undefined ? behaviorData.DurationBeforeIdle : Number("1") || 0;
    this._behaviorData.IdleDistanceTolerance = behaviorData.IdleDistanceTolerance !== undefined ? behaviorData.IdleDistanceTolerance : Number("20") || 0;
    this._behaviorData.IdleTime = Number("") || 0;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.LastX !== newBehaviorData.LastX)
      this._behaviorData.LastX = newBehaviorData.LastX;
    if (oldBehaviorData.LastY !== newBehaviorData.LastY)
      this._behaviorData.LastY = newBehaviorData.LastY;
    if (oldBehaviorData.IsFarFromLastPosition !== newBehaviorData.IsFarFromLastPosition)
      this._behaviorData.IsFarFromLastPosition = newBehaviorData.IsFarFromLastPosition;
    if (oldBehaviorData.DurationBeforeIdle !== newBehaviorData.DurationBeforeIdle)
      this._behaviorData.DurationBeforeIdle = newBehaviorData.DurationBeforeIdle;
    if (oldBehaviorData.IdleDistanceTolerance !== newBehaviorData.IdleDistanceTolerance)
      this._behaviorData.IdleDistanceTolerance = newBehaviorData.IdleDistanceTolerance;
    if (oldBehaviorData.IdleTime !== newBehaviorData.IdleTime)
      this._behaviorData.IdleTime = newBehaviorData.IdleTime;

    return true;
  }

  // Network sync:
  getNetworkSyncData(syncOptions) {
    return {
      ...super.getNetworkSyncData(syncOptions),
      props: {
        
    LastX: this._behaviorData.LastX,
    LastY: this._behaviorData.LastY,
    IsFarFromLastPosition: this._behaviorData.IsFarFromLastPosition,
    DurationBeforeIdle: this._behaviorData.DurationBeforeIdle,
    IdleDistanceTolerance: this._behaviorData.IdleDistanceTolerance,
    IdleTime: this._behaviorData.IdleTime,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData, options) {
    super.updateFromNetworkSyncData(networkSyncData, options);
    
    if (networkSyncData.props.LastX !== undefined)
      this._behaviorData.LastX = networkSyncData.props.LastX;
    if (networkSyncData.props.LastY !== undefined)
      this._behaviorData.LastY = networkSyncData.props.LastY;
    if (networkSyncData.props.IsFarFromLastPosition !== undefined)
      this._behaviorData.IsFarFromLastPosition = networkSyncData.props.IsFarFromLastPosition;
    if (networkSyncData.props.DurationBeforeIdle !== undefined)
      this._behaviorData.DurationBeforeIdle = networkSyncData.props.DurationBeforeIdle;
    if (networkSyncData.props.IdleDistanceTolerance !== undefined)
      this._behaviorData.IdleDistanceTolerance = networkSyncData.props.IdleDistanceTolerance;
    if (networkSyncData.props.IdleTime !== undefined)
      this._behaviorData.IdleTime = networkSyncData.props.IdleTime;
  }

  // Properties:
  
  _getLastX() {
    return this._behaviorData.LastX !== undefined ? this._behaviorData.LastX : Number("") || 0;
  }
  _setLastX(newValue) {
    this._behaviorData.LastX = newValue;
  }
  _getLastY() {
    return this._behaviorData.LastY !== undefined ? this._behaviorData.LastY : Number("") || 0;
  }
  _setLastY(newValue) {
    this._behaviorData.LastY = newValue;
  }
  _getIsFarFromLastPosition() {
    return this._behaviorData.IsFarFromLastPosition !== undefined ? this._behaviorData.IsFarFromLastPosition : false;
  }
  _setIsFarFromLastPosition(newValue) {
    this._behaviorData.IsFarFromLastPosition = newValue;
  }
  _toggleIsFarFromLastPosition() {
    this._setIsFarFromLastPosition(!this._getIsFarFromLastPosition());
  }
  _getDurationBeforeIdle() {
    return this._behaviorData.DurationBeforeIdle !== undefined ? this._behaviorData.DurationBeforeIdle : Number("1") || 0;
  }
  _setDurationBeforeIdle(newValue) {
    this._behaviorData.DurationBeforeIdle = newValue;
  }
  _getIdleDistanceTolerance() {
    return this._behaviorData.IdleDistanceTolerance !== undefined ? this._behaviorData.IdleDistanceTolerance : Number("20") || 0;
  }
  _setIdleDistanceTolerance(newValue) {
    this._behaviorData.IdleDistanceTolerance = newValue;
  }
  _getIdleTime() {
    return this._behaviorData.IdleTime !== undefined ? this._behaviorData.IdleTime : Number("") || 0;
  }
  _setIdleTime(newValue) {
    this._behaviorData.IdleTime = newValue;
  }
}

/**
 * Shared data generated from Idle tracker
 */
gdjs.evtsExt__IdleTracker__IdleTracker.IdleTracker.SharedData = class IdleTrackerSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__IdleTracker__IdleTracker.IdleTracker.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._IdleTracker_IdleTrackerSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._IdleTracker_IdleTrackerSharedData = new gdjs.evtsExt__IdleTracker__IdleTracker.IdleTracker.SharedData(
      initialData
    );
  }
  return instanceContainer._IdleTracker_IdleTrackerSharedData;
}

// Methods:
gdjs.evtsExt__IdleTracker__IdleTracker.IdleTracker.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__IdleTracker__IdleTracker.IdleTracker.prototype.doStepPreEventsContext.idToCallbackMap = new Map();
gdjs.evtsExt__IdleTracker__IdleTracker.IdleTracker.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__IdleTracker__IdleTracker.IdleTracker.prototype.doStepPreEventsContext.GDObjectObjects2= [];


gdjs.evtsExt__IdleTracker__IdleTracker.IdleTracker.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsFarFromLastPosition(false)
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__IdleTracker__IdleTracker.IdleTracker.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.common.distanceBetweenPositions((( gdjs.evtsExt__IdleTracker__IdleTracker.IdleTracker.prototype.doStepPreEventsContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__IdleTracker__IdleTracker.IdleTracker.prototype.doStepPreEventsContext.GDObjectObjects1[0].getX()), (( gdjs.evtsExt__IdleTracker__IdleTracker.IdleTracker.prototype.doStepPreEventsContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__IdleTracker__IdleTracker.IdleTracker.prototype.doStepPreEventsContext.GDObjectObjects1[0].getY()), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLastX(), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLastY()) > eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIdleDistanceTolerance());
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsFarFromLastPosition(true)
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__IdleTracker__IdleTracker.IdleTracker.prototype.doStepPreEventsContext.GDObjectObjects1);
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIdleTime(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIdleTime()+gdjs.evtTools.camera.getLayerTimeScale(runtimeScene, (( gdjs.evtsExt__IdleTracker__IdleTracker.IdleTracker.prototype.doStepPreEventsContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__IdleTracker__IdleTracker.IdleTracker.prototype.doStepPreEventsContext.GDObjectObjects1[0].getLayer())) * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene))
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsFarFromLastPosition();
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__IdleTracker__IdleTracker.IdleTracker.prototype.doStepPreEventsContext.GDObjectObjects1);
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setLastX((( gdjs.evtsExt__IdleTracker__IdleTracker.IdleTracker.prototype.doStepPreEventsContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__IdleTracker__IdleTracker.IdleTracker.prototype.doStepPreEventsContext.GDObjectObjects1[0].getX()))
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setLastY((( gdjs.evtsExt__IdleTracker__IdleTracker.IdleTracker.prototype.doStepPreEventsContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__IdleTracker__IdleTracker.IdleTracker.prototype.doStepPreEventsContext.GDObjectObjects1[0].getY()))
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIdleTime(0)
}
}

}


};

gdjs.evtsExt__IdleTracker__IdleTracker.IdleTracker.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("IdleTracker"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("IdleTracker"),
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

gdjs.evtsExt__IdleTracker__IdleTracker.IdleTracker.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__IdleTracker__IdleTracker.IdleTracker.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__IdleTracker__IdleTracker.IdleTracker.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__IdleTracker__IdleTracker.IdleTracker.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__IdleTracker__IdleTracker.IdleTracker.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__IdleTracker__IdleTracker.IdleTracker.prototype.onCreatedContext = {};
gdjs.evtsExt__IdleTracker__IdleTracker.IdleTracker.prototype.onCreatedContext.idToCallbackMap = new Map();
gdjs.evtsExt__IdleTracker__IdleTracker.IdleTracker.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__IdleTracker__IdleTracker.IdleTracker.prototype.onCreatedContext.GDObjectObjects2= [];


gdjs.evtsExt__IdleTracker__IdleTracker.IdleTracker.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__IdleTracker__IdleTracker.IdleTracker.prototype.onCreatedContext.GDObjectObjects1);
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setLastX((( gdjs.evtsExt__IdleTracker__IdleTracker.IdleTracker.prototype.onCreatedContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__IdleTracker__IdleTracker.IdleTracker.prototype.onCreatedContext.GDObjectObjects1[0].getX()))
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setLastY((( gdjs.evtsExt__IdleTracker__IdleTracker.IdleTracker.prototype.onCreatedContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__IdleTracker__IdleTracker.IdleTracker.prototype.onCreatedContext.GDObjectObjects1[0].getY()))
}
}

}


};

gdjs.evtsExt__IdleTracker__IdleTracker.IdleTracker.prototype.onCreated = function(parentEventsFunctionContext) {

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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("IdleTracker"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("IdleTracker"),
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

gdjs.evtsExt__IdleTracker__IdleTracker.IdleTracker.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__IdleTracker__IdleTracker.IdleTracker.prototype.onCreatedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__IdleTracker__IdleTracker.IdleTracker.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__IdleTracker__IdleTracker.IdleTracker.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__IdleTracker__IdleTracker.IdleTracker.prototype.onCreatedContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__IdleTracker__IdleTracker.IdleTracker.prototype.HasMovedFromLastPositionContext = {};
gdjs.evtsExt__IdleTracker__IdleTracker.IdleTracker.prototype.HasMovedFromLastPositionContext.idToCallbackMap = new Map();
gdjs.evtsExt__IdleTracker__IdleTracker.IdleTracker.prototype.HasMovedFromLastPositionContext.GDObjectObjects1= [];
gdjs.evtsExt__IdleTracker__IdleTracker.IdleTracker.prototype.HasMovedFromLastPositionContext.GDObjectObjects2= [];


gdjs.evtsExt__IdleTracker__IdleTracker.IdleTracker.prototype.HasMovedFromLastPositionContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsFarFromLastPosition();
}
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = true;}
}

}


};

gdjs.evtsExt__IdleTracker__IdleTracker.IdleTracker.prototype.HasMovedFromLastPosition = function(parentEventsFunctionContext) {

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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("IdleTracker"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("IdleTracker"),
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

gdjs.evtsExt__IdleTracker__IdleTracker.IdleTracker.prototype.HasMovedFromLastPositionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__IdleTracker__IdleTracker.IdleTracker.prototype.HasMovedFromLastPositionContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__IdleTracker__IdleTracker.IdleTracker.prototype.HasMovedFromLastPositionContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__IdleTracker__IdleTracker.IdleTracker.prototype.HasMovedFromLastPositionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__IdleTracker__IdleTracker.IdleTracker.prototype.HasMovedFromLastPositionContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__IdleTracker__IdleTracker.IdleTracker.prototype.IsIdleContext = {};
gdjs.evtsExt__IdleTracker__IdleTracker.IdleTracker.prototype.IsIdleContext.idToCallbackMap = new Map();
gdjs.evtsExt__IdleTracker__IdleTracker.IdleTracker.prototype.IsIdleContext.GDObjectObjects1= [];
gdjs.evtsExt__IdleTracker__IdleTracker.IdleTracker.prototype.IsIdleContext.GDObjectObjects2= [];


gdjs.evtsExt__IdleTracker__IdleTracker.IdleTracker.prototype.IsIdleContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIdleTime() > eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDurationBeforeIdle());
}
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = true;}
}

}


};

gdjs.evtsExt__IdleTracker__IdleTracker.IdleTracker.prototype.IsIdle = function(parentEventsFunctionContext) {

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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("IdleTracker"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("IdleTracker"),
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

gdjs.evtsExt__IdleTracker__IdleTracker.IdleTracker.prototype.IsIdleContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__IdleTracker__IdleTracker.IdleTracker.prototype.IsIdleContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__IdleTracker__IdleTracker.IdleTracker.prototype.IsIdleContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__IdleTracker__IdleTracker.IdleTracker.prototype.IsIdleContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__IdleTracker__IdleTracker.IdleTracker.prototype.IsIdleContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}


gdjs.registerBehavior("IdleTracker::IdleTracker", gdjs.evtsExt__IdleTracker__IdleTracker.IdleTracker);
