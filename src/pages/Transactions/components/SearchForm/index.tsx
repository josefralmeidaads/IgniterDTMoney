import React from 'react';
import '@radix-ui/themes/styles.css';

import { MagnifyingGlass } from 'phosphor-react';
import { SearchFormContainer } from './styles';
import { useForm } from 'react-hook-form';
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';
import { TransactionsContext } from '../../../../contexts/TransactionsContext';
import { useContextSelector } from 'use-context-selector';

const searchFormSchema = z.object({
  query: z.string()
})

type ISearchFormInputs = z.infer<typeof searchFormSchema>;

const SearchForm: React.FC = () => {
  const { searchTransactions, fetchTransactions } = useContextSelector(TransactionsContext, (context) => {
    return {
      searchTransactions: context.searchTransactions,
      fetchTransactions: context.fetchTransactions,
    }
  });

  const { register, handleSubmit, formState: { isSubmitting } } = useForm<ISearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  });

  const handleSearchTransaction = async(data: ISearchFormInputs) => {
    if(data.query) {
      await searchTransactions(data.query)
    } else {
      await fetchTransactions()
    }
  }

  return (
   <SearchFormContainer onSubmit={handleSubmit(handleSearchTransaction)}>
    <input 
      type="text" 
      placeholder='Busque por transações'
      {...register('query')}
    />
    
    <button type="submit" disabled={isSubmitting}>
     <MagnifyingGlass size={20}/>
     buscar
    </button>
   </SearchFormContainer>
  );
}

export default SearchForm;