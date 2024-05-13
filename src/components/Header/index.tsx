import React from 'react';
import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles';

import logoImg from '../../assets/logo.svg';

const Header = () => {
  return (
   <HeaderContainer>
    <HeaderContent>
      <img src={logoImg} />
      <NewTransactionButton>
        Nova Transação
      </NewTransactionButton>
    </HeaderContent>
   </HeaderContainer>
  );
}

export default Header;