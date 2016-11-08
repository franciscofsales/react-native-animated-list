# React Native Animated List

High order component to animate and provide animation interfacing for react native ListView. Includes animation presets and is highly customizable.


<img align="left" width="360px" src="https://github.com/franciscofsales/react-native-animated-list/raw/master/react-native-animated-list.gif">

### Example

Demo is under examples folder

To build and run a example app:

```bash
git clone https://github.com/franciscofsales/react-native-animated-list

cd react-native-animated-list/examples/simple

npm install
```

To run on iOS:

```bash
react-native run-ios
```

To run on Android:

```bash
react-native run-android
```

### Installation

#### Using npm:

```sh
$ npm install --save react-native-animated-list
```


### Usage

```jsx
import React, { Component } from 'react';

import AnimatedList from 'react-native-animated-list';

render() {
  return (
    <AnimatedList
        animation="scale"
        items={Data}
        duration={300}
        renderRow={this._renderRow}  
        onRemove={(item) => this._removeItem(item)}
    />
  );
}
```

#### Props

| Prop | Type | Description |
|---|---|---|
|**`animation`**|`string<opacity|scale|slideLeft|slideRight>`|Animation preset.|
|**`duration`**|`number`|Length of animation in milliseconds. _Default 300._|
|**`animationFunc`**|`() => Aniamted animation object`|Callback that defines a custom animation.|
|**`renderRow`**|`() => ReactElement<any>`|Function t renders a row.|
|**`onRemove`**|`() => ReactElement<any>`|Function to delete a row.|



### Contributing
All contributions are very appreciated <3.


### License
[MIT](https://raw.githubusercontent.com/franciscofsales/react-native-animated-list/master/LICENSE)
