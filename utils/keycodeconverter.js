import keyCodeMap from './keycodemap';

class KeyCodeConverter {
  constructor(keyCode, key, keyIdentifier, shift = false, ctrl = false, alt = false, repeat = false, location = 0) {
    this.keyCode = keyCode;
    this.shift = shift;
    this.ctrl = ctrl;
    this.alt = alt;
    this.repeat = repeat;
    this.location = location;

    const convertedKey = this.convert();

    if(convertedKey) {
      this.key = convertedKey;
    } else {
      this.key = (key) ? key : keyIdentifier;
    }
  }

  convert() {
    const key = keyCodeMap[this.keyCode][this.location];

    return key;
  }
}

export default KeyCodeConverter;
