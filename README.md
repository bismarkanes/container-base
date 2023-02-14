# Container Base

> Small library container base for fast development based on flexbox

This library is using:
  * [Styled Components](https://styled-components.com/)

[![NPM](https://img.shields.io/npm/v/@bismarkanes/container-base.svg)](https://www.npmjs.com/package/@bismarkanes/container-base) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install @bismarkanes/container-base
```

### Note
* *This library is intended to be small.*
	

## Usage

> ContainerBaseRow is row oriented container using flex.

> ContainerBaseBlock is block oriented container.

```jsx
import React from 'react'
import { ContainerBaseRow, ContainerBaseBlock } from 'container-base'

class Example extends React.Component {
  render() {
    return (
      <ContainerBaseRow>
        <ContainerBaseBlock>
          <ContainerBaseRow
            border="2px solid grey"
            justify="space-between"
            align="center"
            height="250px"
            width="500px"
          >
            <p>Row 1, Block 1, Row 1</p>
            <p>Row 1, Block 1, Row 2</p>
          </ContainerBaseRow>
          <ContainerBaseRow
            border="2px solid grey"
            justify="space-around"
            align="flex-start"
            height="250px"
            width="500px"
          >
            <p>Row 1, Block 2, Row 1</p>
            <p>Row 1, Block 2, Row 2</p>
          </ContainerBaseRow>
        </ContainerBaseBlock>

        <ContainerBaseBlock>
          <ContainerBaseRow
            border="2px solid grey"
            justify="space-between"
            align="center"
            height="250px"
            width="500px"
          >
            <p>Row 2, Block 1, Row 1</p>
            <p>Row 2, Block 1, Row 2</p>
          </ContainerBaseRow>
          <ContainerBaseRow
            border="2px solid grey"
            justify="space-around"
            align="flex-start"
            height="250px"
            width="500px"
          >
            <p>Row 2, Block 2, Row 1</p>
            <p>Row 2, Block 2, Row 2</p>
          </ContainerBaseRow>
        </ContainerBaseBlock>
      </ContainerBaseRow>
    )
  }
}
```

## Reference
TODO

## License

Licensed under the MIT License, Copyright © 2023-present Bismark Johannes

See [LICENSE](./LICENSE) for more information.
