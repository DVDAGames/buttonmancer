const ButtonmancerUtils = require('./utils/utils');

class Buttonmancer {
  constructor(defaultMap) {
    this.defaultMap = defaultMap;

    this.map = this.mapControlActions();
  }

  mapControlActions(map = this.defaultMap) {
    const generatedMap = {};

    for(const controllerAction in map) {
      if(map.hasOwnProperty(controllerAction)) {
        map[controllerAction].forEach((actionTrigger) => {
          generatedMap[actionTrigger] = controllerAction;
        });
      }
    }

    return generatedMap;
  }

  remap(newMap) {
    return this.mapControlActions(newMap);
  }

  alterControl(controlMap) {
    const remap = {};

    for(const controllerAction in controlMap) {
      if(controlMap.hasOwnProperty(controllerAction)) {
        controlMap[controllerAction].forEach((actionTrigger) => {
          remap[actionTrigger] = controllerAction;
        });
      }
    }

    this.map = Object.assign(this.map, remap);

    return this;
  }
};

module.exports = {
  Buttonmancer,
  ButtonmancerUtils
};
