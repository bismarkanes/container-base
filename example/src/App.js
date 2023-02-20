import React from 'react'
import styled from 'styled-components'
import { ContainerBaseRow, ContainerBaseBlock } from 'container-base'


const DivBackground = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: purple;
`;

const DivTest = styled.div`
  width: 100px;
  height: 100px;
  background-color: red;
`;

class Example extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ContainerBaseRow
          position="absolute"
          top="0"
          bottom="0"
          left="0"
          right="0"
          border="1px solid blue"
          justify="center"
          align="center"
        >
          <DivTest/>
        </ContainerBaseRow>
        <ContainerBaseRow
          justify="space-around"
        >
          <ContainerBaseRow
            border="2px solid grey"
            justify="center"
            height="250px"
            width="250px"
          >
            <ContainerBaseBlock>
              <p>1. Nunc rutrum turpis sed pede</p>
              <p>2. Lorem ipsum dolor sit amet</p>
            </ContainerBaseBlock>
          </ContainerBaseRow>

          <ContainerBaseRow
            border="2px solid grey"
            justify="center"
            height="250px"
            width="250px"
          >
            <p>Lorem ipsum dolor sit amet</p>
          </ContainerBaseRow>

          <ContainerBaseRow
            border="2px solid grey"
            justify="flex-end"
            align="flex-end"
            height="250px"
            width="250px"
          >
            <p>Nullam tristique diam non turpis.</p>
          </ContainerBaseRow>

          <ContainerBaseRow
            border="2px solid grey"
            padding="16px"
            height="250px"
            width="250px"
          >
            <p>Donec neque quam, dignissim in</p>
          </ContainerBaseRow>
        </ContainerBaseRow>



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

        <ContainerBaseRow
          width="250px"
          height="250px"
          border="4px solid red"
          position="relative"
        >
          <DivBackground/>
        </ContainerBaseRow>

      </React.Fragment>
    )
  }
}


const App = () => {
  return (
    <Example/>
  )
}

export default App
