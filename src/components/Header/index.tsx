import React from 'react';

import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles';

import logoImg from '../../assets/logo.svg';
import * as Dialog from '@radix-ui/react-dialog';
import NewTransactionModal from '../NewTransactionModal';

const Header = () => {
  return (
   <HeaderContainer>
    <HeaderContent>
      <img src={logoImg} />
      
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <NewTransactionButton>
            Nova transação
          </NewTransactionButton>
        </Dialog.Trigger>

        <NewTransactionModal />
      </Dialog.Root>
    </HeaderContent>
   </HeaderContainer>
  );
}

export default Header;