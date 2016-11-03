# React Native Animated List

High order component to animate and provide animation interfacing for react native ListView. Includes animation presets and is highly customizable.

### Example
Demos are under the example folder

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

#### Using yarn:

```sh
$ yarn add react-native-animated-list
```

### Usage

```jsx
import React, { Component } from 'react';

import AnimatedList from 'react-native-animated-list';


```

#### Props

| Prop | Type | Description |
|---|---|---|
|**`animation`**|`string<opacity|scale|slideLeft|slideRight>`|Animation preset.|
|**`duration`**|`number`|Length of animation in milliseconds. _Default 300._|
|**`animationFunc`**|`() => Aniamted animation object`|Callback that defines a custom animation.|
|**`renderRow`**|`() => ReactElement<any>`|Callback that renders a row.|



### Contributing
All contributions are very appreciated.


### License
[MIT](https://raw.githubusercontent.com/franciscofsales/react-native-animated-list/master/LICENSE)
