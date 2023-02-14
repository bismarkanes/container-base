import styled from 'styled-components'

const _container = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height || 'initial'};
  position: ${(props) => props.position};
  display: ${(props) => props.display};

  margin: ${(props) => props.margin || 0};
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};

  padding: ${(props) => props.padding || 0};
  padding-top: ${(props) => props.paddingTop};
  padding-bottom: ${(props) => props.paddingBottom};
  padding-left: ${(props) => props.paddingLeft};
  padding-right: ${(props) => props.paddingRight};

  border: ${(props) => props.border || 'initial'};
`
export const ContainerBaseRow = styled(_container)`
  display: flex;
  justify-content: ${(props) => props.justify || 'space-between'};
  align-items: ${(props) => props.align || 'center'};
  flex: ${(props) => props.flex || 'none'};
  flex-wrap: ${(props) => props.wrap || 'initial'};
`

export const ContainerBaseBlock = styled(_container)`
  display: block;
`

// alias
export const ContainerBase = ContainerBaseRow
