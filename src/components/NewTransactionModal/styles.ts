import styled from 'styled-components';
import * as Dialog from '@radix-ui/react-dialog';
import * as RadioGroup from '@radix-ui/react-radio-group';

export const Overlay = styled(Dialog.Overlay)`
 position: fixed;
 width: 100vw;
 height: 100vh;
 inset: 0;

 background-color: rgba(0, 0, 0, 0.75);
`;

export const Content = styled(Dialog.Content)`
 min-width: 32rem;
 border-radius: 6px;
 padding: 2.5rem 3rem;
 background: ${({theme}) => theme['gray-800']};

 position: fixed;
 top: 50%;
 left: 50%;
 transform: translate(-50%, -50%);

 form {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  input {
   border-radius: 6px;
   border: 0;
   background: ${({theme}) => theme['gray-900']};
   color: ${({theme}) => theme['gray-300']};
   padding: 1rem;

   &::placeholder {
    color: ${({theme}) => theme['gray-500']};
   }
  }

  button[type="submit"] {
   height: 58px;
   border: 0;
   background: ${({theme}) => theme['green-500']};
   color: ${({theme}) => theme.white};
   font-weight: bold;
   border-radius: 6px;
   padding: 0 1.25rem;
   margin-top: 1.5rem;
   cursor: pointer;

   &:not(:disabled):hover {
    transition: 0.2s;
    background: ${({theme}) => theme['green-700']};
   }

   &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
   }
  }
 }
`;

export const CloseButton = styled(Dialog.Close)`
 position: absolute;
 background-color: transparent;
 border: 0;
 color: ${({theme}) => theme['gray-500']};
 top: 1.5rem;
 right: 1.5rem;
 line-height: 0;
 cursor: pointer;
`;

export const TransactionType = styled(RadioGroup.Root)`
 display: grid;
 grid-template-columns: 1fr 1fr;
 gap: 1rem;
 margin-top: 0.5rem;
`;

interface ITransactionTypeButton {
 variant: 'income' | 'outcome';
}

export const TransactionTypeButton = styled(RadioGroup.Item)<ITransactionTypeButton>`
 background: ${({theme}) => theme['gray-700']};
 padding: 1rem;
 display: flex;
 align-items: center;
 justify-content: center;
 gap: 0.5rem;
 border-radius: 6px;
 cursor: pointer;
 border: 0;
 color: ${({theme}) => theme['gray-300']};

 svg {
  color: ${({variant, theme}) => variant === 'income' ? theme['green-300'] : theme['red-300']};
 }

 &[data-state="unchecked"]:hover {
  transition: 0.2s;
  background: ${({theme}) => theme['gray-600']};
 }

 &[data-state="checked"] {
  transition: 0.2s;
  background: ${({variant, theme}) => variant === 'income' ? theme['green-500'] : theme['red-500']};
  color: ${({theme}) => theme.white};

  &:focus {
   outline: none;
   box-shadow: none;
  }

  svg {
   color: ${({theme}) => theme['gray-100']};
  }
 }
`;