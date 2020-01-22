import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import { Size, Color } from '../constants'
import 'semantic-ui-css/semantic.min.css'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'

const Component: React.FC = props => (
  <div>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <MarkdownHighLight />
    <Body>
      <BodyInner>{props.children}</BodyInner>
    </Body>
  </div>
)

const Body = styled.div`
  /* height: calc(100vh - ${Size.header.height}px); */
  /* background-color: #f6f8fa; */
`
const BodyInner = styled.div`
  margin: 0 auto;
  max-width: 1120px;
  padding: 40px 10px;
  box-sizing: border-box;
`
const MarkdownHighLight = createGlobalStyle`
  body {
    background-color: ${Color.background};
  }
`

export default Component
