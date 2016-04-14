import KeyCodeConverter from './keycodeconverter';

const ButtonmancerUtils = {
  getKey({ keyCode, key, shift, ctrlKey, altKey, repeat, location}) {
    const keyPress = new KeyCodeConverter(keyCode, key, shift, ctrlKey, altKey, repeat, location);

    return keyPress;
  }
};

export default ButtonmancerUtils;
