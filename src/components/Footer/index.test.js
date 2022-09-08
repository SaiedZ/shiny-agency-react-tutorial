import React from 'react'

import { render, screen, fireEvent } from '@testing-library/react'

import Footer from './'
import { ThemeProvider } from '../../utils/context'

// Même si nous voulons tester Footer ici, il utilise le Contexte pour accéder à
// toggleTheme,pour cette raison on l'englobe avec le Provider

describe('Footer', () => {
    test('Should render without crashing', async () => {
        render(
            <ThemeProvider>
                <Footer />
            </ThemeProvider>
        )
    })
    test('Change theme', async () => {
        render(
            <ThemeProvider>
                <Footer />
            </ThemeProvider>
        )
        const nightModeButton = screen.getByRole('button')
        expect(nightModeButton.textContent).toBe('Changer de mode : ☀️')
        fireEvent.click(nightModeButton)
        expect(nightModeButton.textContent).toBe('Changer de mode : 🌙')
    })
})

/* 
Ici, nous avons utilisé le sélecteur getByRole  . 
Ce sélecteur peut dans beaucoup de cas vous permettre 
d'accéder à votre élément, d'autant que vous pouvez lui passer 
un paramètre pour cibler encore plus précisément un élément. 
Mais dans le cas où vous ne pouvez pas l'utiliser, et où aucun autre 
sélecteur ne vous permet de cibler votre élément, vous pouvez tout à fait 
passer data-testid  à votre composant et ensuite y accéder avec le sélecteur
 getByTestId  : https://testing-library.com/docs/queries/bytestid
*/
