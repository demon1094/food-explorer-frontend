import React from 'react'
import ReactDOM from 'react-dom/client'

import GlobalStyles from './styles/global'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'

import { Favorites } from './pages/Favorites'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Favorites />
    </ThemeProvider>
  </React.StrictMode>
)