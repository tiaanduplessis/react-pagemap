# react-pagemap

> React wrapper for pagemap. Mini map for web pages.

[![NPM](https://img.shields.io/npm/v/react-pagemap.svg)](https://www.npmjs.com/package/react-pagemap) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-pagemap
```

## Usage

```jsx
import React, { Component } from 'react'
import PageMap from 'react-pagemap'

const Example = () => {
  const example = useMyHook()
  return (

  )
}
```

Default props

```jsx
PageMap.defaultProps = {
  viewport: null,
  styles: {
    container: {
      position: 'fixed',
      top: '8px',
      right: '8px',
      width: '100px',
      height: '100%',
      zIndex: '100'
    },
    'header,footer,section,article': 'rgba(0, 0, 0, 0.08)',
    'h1,a': 'rgba(0, 0, 0, 0.10)',
    'h2,h3,h4': 'rgba(0, 0, 0, 0.08)'
  },
  back: 'rgba(0, 0, 0, 0.02)',
  view: 'rgba(0, 0, 0, 0.05)',
  drag: 'rgba(0, 0, 0, 0.10)',
  interval: null
}
```


See [pagemap docs](https://github.com/lrsjng/pagemap) for more information.

## License

MIT © [tiaanduplessis](https://github.com/tiaanduplessis)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
