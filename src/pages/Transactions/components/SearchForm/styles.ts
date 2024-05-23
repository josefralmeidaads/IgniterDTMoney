import styled from "styled-components";

export const SearchFormContainer = styled.form`
 display: flex;
 gap: 1rem;

 input {
  flex: 1;
  border-radius: 6px;
  border: 0;
  background: ${({theme}) => theme["gray-900"]};
  color: ${({theme}) => theme["gray-300"]};
  padding: 1rem;

  &::placeholder {
   color: ${({theme}) => theme["gray-500"]};
  }
 }

 button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;

  border: 1px solid ${({theme}) => theme["green-300"]};
  background: transparent;
  color: ${({theme}) => theme["green-300"]};
  padding: 0 1rem;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;

  &:not(:disabled):hover {
   transition: 0.2s;
   background-color: ${({theme}) => theme["green-300"]};
   color: ${({theme}) => theme.white}
  }

  &:disabled {
   opacity: 0.6;
   cursor: not-allowed;
  }
 }
`;