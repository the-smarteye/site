import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  font-family: NunitoBold, sans-serif;
  font-size: 1.5rem;

  li {
    padding: 18px 10px;
    color: #ffffff;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #006A71;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: #ffffff;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>Sobre</li>
      <li>Serviços</li>
      <li>Equipe</li>
      <li>Contatos</li>
    </Ul>
  )
}

export default RightNav;
