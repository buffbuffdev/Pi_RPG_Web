
gdjs.evtsExt__YSort__YSort = gdjs.evtsExt__YSort__YSort || {};

/**
 * Behavior generated from YSort
 */
gdjs.evtsExt__YSort__YSort.YSort = class YSort extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__YSort__YSort.YSort.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    

    return true;
  }

  // Network sync:
  getNetworkSyncData() {
    return {
      ...super.getNetworkSyncData(),
      props: {
        
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData) {
    super.updateFromNetworkSyncData(networkSyncData);
    
  }

  // Properties:
  
}

/**
 * Shared data generated from YSort
 */
gdjs.evtsExt__YSort__YSort.YSort.SharedData = class YSortSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__YSort__YSort.YSort.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._YSort_YSortSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._YSort_YSortSharedData = new gdjs.evtsExt__YSort__YSort.YSort.SharedData(
      initialData
    );
  }
  return instanceContainer._YSort_YSortSharedData;
}

// Methods:
gdjs.evtsExt__YSort__YSort.YSort.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__YSort__YSort.YSort.prototype.doStepPostEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__YSort__YSort.YSort.prototype.doStepPostEventsContext.GDObjectObjects2= [];


gdjs.evtsExt__YSort__YSort.YSort.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__YSort__YSort.YSort.prototype.doStepPostEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__YSort__YSort.YSort.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__YSort__YSort.YSort.prototype.doStepPostEventsContext.GDObjectObjects1[i].setZOrder((gdjs.evtsExt__YSort__YSort.YSort.prototype.doStepPostEventsContext.GDObjectObjects1[i].getY()));
}
}}

}


};

gdjs.evtsExt__YSort__YSort.YSort.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("YSort"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("YSort"),
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
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
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

gdjs.evtsExt__YSort__YSort.YSort.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__YSort__YSort.YSort.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__YSort__YSort.YSort.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__YSort__YSort.YSort.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__YSort__YSort.YSort.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;


return;
}

gdjs.evtsExt__YSort__YSort.YSort.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("YSort::YSort", gdjs.evtsExt__YSort__YSort.YSort);
