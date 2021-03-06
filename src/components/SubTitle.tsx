import React from 'react'
import styled from 'styled-components'
import { Sizes } from '../constants'

const SubTitle: React.FC = ({ children }) => {
  return (
    <Component>
      <Title>{children}</Title>
    </Component>
  )
}

const Component = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  margin-top: 5rem;
  margin-bottom: 3rem;
`
const Title = styled.h2`
  font-size: ${Sizes.font.m}rem;
  padding-bottom: 1rem;
`

export default SubTitle
