import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { StyleSheetManager, ThemeProvider } from 'styled-components'
import {
  Card,
  Content,
  Grid,
  IncorrectAttempts,
  NewButton,
  Numbers,
  Score,
  Title,
} from 'components'

import { configStore, register } from 'core'
import { GlobalStyles, theme } from 'styles'
import { PersistGate } from 'redux-persist/integration/react'
import isPropValid from '@emotion/is-prop-valid'

const { persistor, store } = configStore()

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <>
    <StyleSheetManager
      enableVendorPrefixes
      shouldForwardProp={(propName, elementToBeRendered) => {
        return typeof elementToBeRendered === 'string'
          ? isPropValid(propName)
          : true
      }}
    >
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Content data-cy="content">
              <Title data-cy="title">Sudoku</Title>
              <Card data-cy="card">
                <NewButton />
                <Score />
                <IncorrectAttempts />
                <Grid />
                <Numbers />
              </Card>
            </Content>
          </PersistGate>
        </Provider>
      </ThemeProvider>
    </StyleSheetManager>
  </>
)

register()
