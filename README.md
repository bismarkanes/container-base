# Container Base

> Small library container base for fast development based on flexbox

This library is using:
  * [Styled Components](https://styled-components.com/)

[![NPM](https://img.shields.io/npm/v/@bismarkanes/container-base.svg)](https://www.npmjs.com/package/@bismarkanes/container-base) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save container-base

or

npm install @bismarkanes/container-base
```

### Note
* *This library is intended to be small.*
	

## Usage

```jsx
import React from 'react'

import { ContainerBase } from 'container-base'

class Example extends React.Component {
  render() {
    return (
      <ContainerBase 
        justify="flex-end"
        height="100vh"
	  >
          <ContainerBase
            border="2px solid grey"
            justify="center"
            height="250px"
            width="250px"
          >
            <p>Nunc rutrum turpis sed pede</p>
          </ContainerBase>
      </ContainerBase>
    )
  }
}
```

## Reference
TODO

## License

Licensed under the MIT License, Copyright © 2023-present Bismark Johannes

See [LICENSE](./LICENSE) for more information.
