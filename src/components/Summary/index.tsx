import React, { useContext } from 'react';
import { SummaryCard, SummaryContainer } from './styles';
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react';
import { TransactionsContext } from '../../contexts/TransactionsContext';
import { priceFormatter } from '../../utils/formatter';

const Summary = () => {
  const { transactions } = useContext(TransactionsContext);

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

  return (
   <SummaryContainer>
    <SummaryCard>
     <header>
      <span>Entradas</span>
      <ArrowCircleUp size={32} color='#00b37e'/>
     </header>

     <strong>{priceFormatter.format(summary.income)}</strong>
    </SummaryCard>

    <SummaryCard>
     <header>
      <span>Saídas</span>
      <ArrowCircleDown size={32} color='#f75a68'/>
     </header>

     <strong>{priceFormatter.format(summary.outcome)}</strong>
    </SummaryCard>

    <SummaryCard variant='green'>
     <header>
      <span>Total</span>
      <CurrencyDollar size={32} color='#fff'/>
     </header>

     <strong>{priceFormatter.format(summary.total)}</strong>
    </SummaryCard>
   </SummaryContainer>
  );
}

export default Summary;