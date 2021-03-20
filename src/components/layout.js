import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import normalize from "styled-normalize"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import Header from "./header"
const GlobleStyle = createGlobalStyle`
${normalize}
*{
   text-decoration:none;
  
}
html{
  box-sizing:border-box;
  --webkit-font-smoothing:antialiased;
  font-size:16px;
}
body{
  font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  overscroll-behavior: none;
  overflow-x :hidden;
}


`
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={lightTheme}>
      <GlobleStyle />
      <Header />
      <main>{children}</main>
    </ThemeProvider>
  )
}
const lightTheme = {
  color: "#fff",
  background: "000",
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
