import { ReactNode, createContext, useEffect, useState } from "react";

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
}

interface ITransactionsProviderProps {
 children: ReactNode;
}

export const TransactionsContext = createContext({} as ITransactionsContextType);

export const TransactionsProvider = ({ children }: ITransactionsProviderProps) => {
 const [transactions, setTransactions] = useState<ITransactions[]>([]);

 const loadTransactions = async() => {
   const response = await fetch('http://localhost:3333/transactions')
   const data = await response.json();
   setTransactions(data);
 }

 useEffect(() => {
  loadTransactions()
 }, [])

 return (
  <TransactionsContext.Provider value={{
   transactions
  }}>
   {children}
  </TransactionsContext.Provider>
 )
}

