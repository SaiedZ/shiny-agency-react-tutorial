import React from 'react'

import { useContext } from 'react'
import { ThemeContext } from '../../utils/context'

import styled from 'styled-components'

import colors from '../../utils/style/colors'
import EmailInput from '../EmailInput'

const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 60px 0;
`

const NightModeButton = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: ${colors.secondary};
`

function Footer() {
    const { toggleTheme, theme } = useContext(ThemeContext)
    return (
        // Using context without hooks
        // <ThemeContext.Consumer>
        //     {({toogleTheme, theme}) => (
        //         <FooterContainer>
        //         <NightModeButton onClick={() => toggleTheme()}>
        //             Changer de mode : {theme === 'light' ? '☀️' : '🌙'}
        //         </NightModeButton>
        //     </FooterContainer>
        //     )}
        // </ThemeContext.Consumer>
        <FooterContainer>
            <EmailInput theme={theme} />
            <NightModeButton onClick={() => toggleTheme()}>
                Changer de mode : {theme === 'light' ? '☀️' : '🌙'}
            </NightModeButton>
        </FooterContainer>
    )
}

export default Footer
