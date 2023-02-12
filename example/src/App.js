import React from 'react'

import { ContainerBase } from 'container-base'

class Example extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ContainerBase
          justify="space-around"
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

          <ContainerBase
            border="2px solid grey"
            justify="center"
            height="250px"
            width="250px"
          >
            <p>Lorem ipsum dolor sit amet</p>
          </ContainerBase>

          <ContainerBase
            border="2px solid grey"
            justify="flex-end"
            align="flex-end"
            height="250px"
            width="250px"
          >
            <p>Nullam tristique diam non turpis.</p>
          </ContainerBase>

          <ContainerBase
            border="2px solid grey"
            padding="16px"
            height="250px"
            width="250px"
          >
            <p>Donec neque quam, dignissim in</p>
          </ContainerBase>
        </ContainerBase>
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
