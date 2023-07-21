
import React from 'react'
import { styled } from 'styled-components'

const Header = () => {
  return (
    <HeaderStyled>
        <div className='ui_container'>
            <h2>Fake Shop</h2>
            <hr/>
        </div>
    </HeaderStyled>
  )
}

const HeaderStyled = styled.div`
    h2{
        padding:20px 22px;

    }
`;

export default Header
