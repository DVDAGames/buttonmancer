const KeyCodeConverter = require('./keycodeconverter');

const ButtonmancerUtils = {
  getKey({ keyCode, key, shift, ctrlKey, altKey, repeat, location}) {
    const keyPress = new KeyCodeConverter(keyCode, key, shift, ctrlKey, altKey, repeat, location);

    return keyPress;
  },

  convertButtonIndexesToButtonNames(gamepadActionMap, controllerMap) {
    console.log(controllerMap);
    for(const action in gamepadActionMap) {
      if(gamepadActionMap.hasOwnProperty(action)) {
        gamepadActionMap[action].forEach((buttonIndex, index) => {
          gamepadActionMap[action][index] = controllerMap[buttonIndex];
        });
      }
    }

    return gamepadActionMap;
  }
};

module.exports = ButtonmancerUtils;
