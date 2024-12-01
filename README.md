[![npm version](https://img.shields.io/npm/v/react-sizer-div.svg)](https://www.npmjs.com/package/react-sizer-div)
[![Downloads](https://img.shields.io/npm/dm/react-sizer-div.svg)](https://www.npmjs.com/package/react-sizer-div)
![Uses TypeScript](https://img.shields.io/badge/Uses-Typescript-294E80.svg)


# `react-sizer-div`

A `div` that tracks its own size and passes it to a render function.

## Usage
```tsx
import { SizerDiv } from 'react-sizer-div';

// ... in your JSX:
<SizerDiv render={({width, height}) => (
    <div>
        My container size is: {width}, {height}
    </div>
) />
```

The component accepts `styles` and `className` to allow styling.

`SizerDiv` renders a `div`, which by default uses block layout. This measures the container width and the height from the contents.
If `SizerDiv` is styled with `position: absolute` and `inset: 0` then it can measure the size of its positioning container.

The `render` function is only called once the size is resolved. So, `width` and `height` are always defined.
 
This uses `ResizeObserver` directly. If you need a polyfill for older browsers, you must add that independently.
