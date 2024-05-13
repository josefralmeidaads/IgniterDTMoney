import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "./themes/global"
import { defaultTheme } from "./themes/default"
import Transactions from "./pages/Transactions"

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Transactions />
    </ThemeProvider>
  )
}

export default App
