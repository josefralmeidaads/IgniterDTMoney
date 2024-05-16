import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "./themes/global"
import { defaultTheme } from "./themes/default"
import Transactions from "./pages/Transactions"
import { TransactionsProvider } from "./contexts/TransactionsContext"

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <TransactionsProvider>
        <Transactions />
      </TransactionsProvider>
    </ThemeProvider>
  )
}

export default App
