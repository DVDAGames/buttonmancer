const keyCodeMap = {
  8: [
    {
      key: 'BackSpace',
      value: null
    }
  ],
  9: [
    {
      key: 'Tab',
      value: null
    }
  ],
  13: [
    {
      key: 'Enter',
      value: '\n'
    }
  ],
  16: [
    {
      key: 'Shift',
      value: null
    },
    {
      key: 'ShiftLeft',
      value: null
    },
    {
      key: 'ShiftRight',
      value: null
    }
  ],
  18: [
    {
      key: 'Alt',
      value: null
    },
    {
      key: 'AltLeft',
      value: null
    },
    {
      key: 'AltRight',
      value: null
    }
  ],
  19: [
    {
      key: 'Pause',
      value: null
    }
  ],
  20: [
    {
      key: 'CapsLock',
      value: null,
    }
  ],
  27: [
    {
      key: 'Escape',
      value: null
    }
  ],
  32: [
    {
      key: 'Space',
      value: ' '
    }
  ],
  33: [
    {
      key: 'PageUp',
      value: null
    }
  ],
  34: [
    {
      key: 'PageDown',
      value: null
    }
  ],
  35: [
    {
      key: 'End',
      value: null
    }
  ],
  36: [
    {
      key: 'Home',
      value: null
    }
  ],
  37: [
    {
      key: 'ArrowLeft',
      value: null
    }
  ],
  38: [
    {
      key: 'ArrowUp',
      value: null
    }
  ],
  39: [
    {
      key: 'ArrowRight',
      value: null
    }
  ],
  40: [
    {
      key: 'ArrowDown',
      value: null
    }
  ],
  45: [
    {
      key: 'Insert',
      value: null
    }
  ],
  46: [
    {
      key: 'Delete',
      value: null
    }
  ],
  112: [
    {
      key: 'F1',
      value: null
    }
  ],
  113: [
    {
      key: 'F2',
      value: null
    }
  ],
114: [
    {
      key: 'F3',
      value: null
    }
  ],
  115: [
    {
      key: 'F4',
      value: null
    }
  ],
  116: [
    {
      key: 'F5',
      value: null
    }
  ],
  117: [
    {
      key: 'F6',
      value: null
    }
  ],
  118: [
    {
      key: 'F7',
      value: null
    }
  ],
  119: [
    {
      key: 'F8',
      value: null
    }
  ],
  120: [
    {
      key: 'F9',
      value: null
    }
  ],
  121: [
    {
      key: 'F10',
      value: null
    }
  ],
  122: [
    {
      key: 'F11',
      value: null
    }
  ],
  123: [
    {
      key: 'F12',
      value: null
    }
  ],
  144: [
    {
      key: 'NumLock',
      value: null
    }
  ],
  145: [
    {
      key: 'ScrollLock',
      value: null
    }
  ],
  48: [
    {
      key: 'Digit0',
      value: '0',
      shift: ')'
    }
  ],
  49: [
    {
      key: 'Digit1',
      value: '1',
      shift: '!'
    }
  ],
  50: [
    {
      key: 'Digit2',
      value: '2',
      shift: '@'
    }
  ],
  51: [
    {
      key: 'Digit3',
      value: '3',
      shift: '#'
    }
  ],
  52: [
    {
      key: 'Digit4',
      value: '4',
      shift: '$'
    }
  ],
  53: [
    {
      key: 'Digit5',
      value: '5',
      shift: '%'
    }
  ],
  54: [
    {
      key: 'Digit6',
      value: '6',
      shift: '^'
    }
  ],
  55: [
    {
      key: 'Digit7',
      value: '7',
      shift: '&'
    }
  ],
  56: [
    {
      key: 'Digit8',
      value: '8',
      shift: '*'
    }
  ],
  57: [
    {
      key: 'Digit9',
      value: '9',
      shift: '('
    }
  ],
  65: [
    {
      key: 'KeyA',
      value: 'a',
      shift: 'A'
    }
  ],
  66: [
    {
      key: 'KeyB',
      value: 'b',
      shift: 'B'
    }
  ],
  67: [
    {
      key: 'KeyC',
      value: 'c',
      shift: 'C'
    }
  ],
  68: [
    {
      key: 'KeyD',
      value: 'd',
      shift: 'D'
    }
  ],
  69: [
    {
      key: 'KeyE',
      value: 'e',
      shift: 'E'
    }
  ],
  70: [
    {
      key: 'KeyF',
      value: 'f',
      shift: 'F'
    }
  ],
  71: [
    {
      key: 'KeyG',
      value: 'g',
      shift: 'G'
    }
  ],
  72: [
    {
      key: 'KeyH',
      value: 'h',
      shift: 'H'
    }
  ],
  73: [
    {
      key: 'KeyI',
      value: 'i',
      shift: 'I'
    }
  ],
  74: [
    {
      key: 'KeyJ',
      value: 'j',
      shift: 'J'
    }
  ],
  75: [
    {
      key: 'KeyK',
      value: 'k',
      shift: 'K'
    }
  ],
  76: [
    {
      key: 'KeyL',
      value: 'l',
      shift: 'L'
    }
  ],
  77: [
    {
      key: 'KeyM',
      value: 'm',
      shift: 'M'
    }
  ],
  78: [
    {
      key: 'KeyN',
      value: 'n',
      shift: 'N'
    }
  ],
  79: [
    {
      key: 'KeyO',
      value: 'o',
      shift: 'O'
    }
  ],
  80: [
    {
      key: 'KeyP',
      value: 'p',
      shift: 'P'
    }
  ],
  81: [
    {
      key: 'KeyQ',
      value: 'q',
      shift: 'Q'
    }
  ],
  82: [
    {
      key: 'KeyR',
      value: 'r',
      shift: 'R'
    }
  ],
  83: [
    {
      key: 'KeyS',
      value: 's',
      shift: 'S'
    }
  ],
  84: [
    {
      key: 'KeyT',
      value: 't',
      shift: 'T'
    }
  ],
  85: [
    {
      key: 'KeyU',
      value: 'u',
      shift: 'U'
    }
  ],
  86: [
    {
      key: 'KeyV',
      value: 'v',
      shift: 'V'
    }
  ],
  87: [
    {
      key: 'KeyW',
      value: 'w',
      shift: 'W'
    }
  ],
  88: [
    {
      key: 'KeyX',
      value: 'x',
      shift: 'X'
    }
  ],
  89: [
    {
      key: 'KeyY',
      value: 'y',
      shift: 'Y'
    }
  ],
  90: [
    {
      key: 'KeyZ',
      value: 'z',
      shift: 'Z'
    }
  ],
  186: [
    {
      key: 'Semicolon',
      value: ';',
      shift: ':'
    }
  ],
  187: [
    {
      key: 'Equal',
      value: '=',
      shift: '+'
    }
  ],
  188: [
    {
      key: 'Comma',
      value: ',',
      shift: '<'
    }
  ],
  189: [
    {
      key: 'Minus',
      value: '-',
      shift: '_'
    }
  ],
  190: [
    {
      key: 'Period',
      value: '.',
      shift: '>'
    }
  ],
  191: [
    {
      key: 'Slash',
      value: '/',
      shift: '?'
    }
  ],
  192: [
    {
      key: 'Backquote',
      value: '`',
      shift: '~'
    }
  ],
  219: [
    {
      key: 'BracketLeft',
      value: '[',
      shift: '{'
    }
  ],
  220: [
    {
      key: 'Backslash',
      value: '\\',
      shift: '|'
    }
  ],
  221: [
    {
      key: 'BracketRight',
      value: ']',
      shift: '}'
    }
  ],
  222: [
    {
      key: 'Comma',
      value: ',',
      shift: '<'
    }
  ]
};

export default keyCodeMap;
