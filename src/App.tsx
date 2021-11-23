import { GlobalStyle } from "./styles/global";
import { Header } from './components/Header';
import Modal from 'react-modal'
import { Dashboard } from "./components/Dashboard";
import React, { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from "./hooks/useTransactions"; 

Modal.setAppElement('#root');

export function App() {

  const [ isNewTransactionModalOpen, setIsNewTransactionModal ] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModal(true);
  }
  function handleCloseNewTransactionModal() {
    setIsNewTransactionModal(false);
  }

  return (
    <div className="App">
      <TransactionsProvider>
        <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
        <Dashboard />

        <NewTransactionModal 
          isOpen={isNewTransactionModalOpen}
          onRequestClose={handleCloseNewTransactionModal}
        />

        <GlobalStyle />
     </TransactionsProvider>
    </div>
  );
}