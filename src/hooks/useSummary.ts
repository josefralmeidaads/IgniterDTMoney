import { TransactionsContext } from "../contexts/TransactionsContext";
import { useContextSelector } from "use-context-selector";

export const useSummary = () => {
 const transactions = useContextSelector(TransactionsContext, (context) => {
  return context.transactions
 });

  const summary = transactions.reduce((accumulatorTransaction, transaction) => {
    switch (transaction.type) {
      case 'income':
        accumulatorTransaction.income += transaction.price
      break;

      case 'outcome':
        accumulatorTransaction.outcome += transaction.price
      break;
    
      default:
      break;
    }
    accumulatorTransaction.total = accumulatorTransaction.income - accumulatorTransaction.outcome

    return accumulatorTransaction;
  }, {
    income: 0,
    outcome: 0,
    total: 0,
  });

  return summary;
}