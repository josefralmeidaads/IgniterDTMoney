import { ReactNode, useCallback, useEffect, useState } from "react";
import { api } from "../api/api";
import { createContext } from "use-context-selector";

export interface ITransactions {
 id: number,
 description: string,
 type: 'income' | 'outcome',
 category: string,
 price: number,
 createdAt: string
}

interface ITransactionsContextType {
 transactions: ITransactions[];
 fetchTransactions: (query?:string) => Promise<void>;
 searchTransactions: (query: string) => Promise<void>;
 createTransaction: (data: ITransactions) => Promise<void>;
}

interface ITransactionsProviderProps {
 children: ReactNode;
}

export const TransactionsContext = createContext({} as ITransactionsContextType);

export const TransactionsProvider = ({ children }: ITransactionsProviderProps) => {
 const [transactions, setTransactions] = useState<ITransactions[]>([]);

 const fetchTransactions = useCallback(async(query?: string) => {
  const response = await api.get('transactions', {
    params: {
      q: query,
    }
  })  

  setTransactions(response.data);
}, [])

 const createTransaction = useCallback(async(data: ITransactions) => {
  const response = await api.post('transactions', {
    description: data.description,
    category: data.category,
    type: data.type,
    price: data.price,
    createdAt: new Date(),
  })

  setTransactions((prevState) => [...prevState, response.data])
 }, [])

 const searchTransactions = async(query: string) => {
  const searchTransactionsFiltered = transactions.filter((transaction) => transaction.description.includes(query))
  setTransactions(searchTransactionsFiltered);
 }

 useEffect(() => {
  fetchTransactions()
 }, [fetchTransactions])

 return (
  <TransactionsContext.Provider value={{
    fetchTransactions,
    createTransaction,
    searchTransactions,
    transactions,
  }}>
   {children}
  </TransactionsContext.Provider>
 )
}

