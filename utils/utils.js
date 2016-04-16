const KeyCodeConverter = require('./keycodeconverter');

const ButtonmancerUtils = {
  getKey({ keyCode, key, shift, ctrlKey, altKey, repeat, location}) {
    const keyPress = new KeyCodeConverter(keyCode, key, shift, ctrlKey, altKey, repeat, location);

    return keyPress;
  }
};

module.exports = ButtonmancerUtils;
