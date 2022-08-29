import React, {ReactNode} from "react"
import { createGlobalStyle } from "styled-components"
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;700&display=swap');
  
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    color: #2D2945;
    background-color: #D1BB8F;
    overflow-x: hidden;
    min-height: 1500px;
  }
`
export default function Layout({ children } : {children: ReactNode}) {
    return (
        <>
            <GlobalStyle/>
            {children}
        </>
    )
}