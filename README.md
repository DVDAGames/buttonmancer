#buttonmancer 0.2.0

Easily facilitate mapping gamepad buttons and keyboard keys to specific actions in your game.

Buttonmancer supports multiple alternate keys for each action, remapping controls, and returning to default controls;

Just pass in an Action Map to the `Buttonmancer()` class like the example below to get started.

```js
import Buttonmancer from 'buttonmancer';

const actionMap = {
  gamepad: {
    MOVE_LEFT: ['Left'],
    MOVE_RIGHT: ['Right'],
    JUMP: ['X']
  },
  keyboard: {
    MOVE_LEFT: ['ArrowLeft', 'KeyA'],
    MOVE_RIGHT: ['ArrowRight', 'KeyD'],
    JUMP: ['SpaceBar']
  }
};

const controls = new Buttonmancer(actionMap.gamepad);
```

You can remap all of the controls in your button mapping by using the `remap()` method and passing in a new Action Map.

```js
const newMap = {
  MOVE_LEFT: ['Up'],
  MOVE_RIGHT: ['Down'],
  JUMP: ['X', 'Circle', 'Sqaure', 'R1']
};

controls.remap(newMap);
```

You can remap a single control by using the `alterControl()` method and passing a single Action.

```js
const newLeft = {
  MOVE_LEFT: ['Left', 'L1']
};

controls.alterControl(newLeft);
```
Buttonmancer also comes with some utilities, including a simple way to get an accurate and consistent keyboard event name.

```js
import ButtonmancerUtils from 'buttonmancer';

document.addEventListener('keydown', (e) => {
  const keyPressed = ButtonmancerUtils.getKey(e);
});
```
Currently this function uses the `e.keyCode` or `e.which` value to return a normalized `e.key` value because browser implementations are inconsistent. In the future, it will use the appropriate `e.key` or `e.keyIdentifier` value to normalize the event name.
