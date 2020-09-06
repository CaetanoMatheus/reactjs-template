import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');

  :root {
    --default-text: #2c3e50;
    --purple: #7400d3;
    --white: #fff;
    --light-grey: #d3d3d3;
  }

  * {
    font-family: Poppins, Avenir, Helvetica, Arial, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: var(--default-text);
  }

  html, body {
    min-height: 100vh;
  }
`
