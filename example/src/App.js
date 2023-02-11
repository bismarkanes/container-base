import React from 'react'

import { ContainerRowFlex } from 'container-base'

class Example extends React.Component {
  render() {
    return (
      <ContainerRowFlex backgroundColor="red" >
        Hello
      </ContainerRowFlex>
    )
  }
}


const App = () => {
  return (
    <Example/>
  )
}

export default App
