import React from 'react'

import colors from '../../utils/style/colors'
import { StyledLink } from '../../utils/style/Atoms'
import HomeIllustration from '../../assets/home-illustration.svg'

// import { useState } from 'react'

import styled from 'styled-components'

const HomeWrapper = styled.div`
    display: flex;
    justify-content: center;
`

const HomerContainer = styled.div`
    margin: 30px;
    background-color: ${colors.background};
    padding: 60px 90px;
    display: flex;
    flex-direction: row;
    max-width: 1200px;
`

const LeftCol = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
    ${StyledLink} {
        max-width: 250px;
    }
`

const StyledTitle = styled.h2`
    padding-bottom: 30px;
    max-width: 280px;
    line-height: 50px;
`

const Illustration = styled.img`
    flex: 1;
`

function Home() {
    return (
        <HomeWrapper>
            <HomerContainer>
                <LeftCol>
                    <StyledTitle>
                        Repérez vos besoins, on s’occupe du reste, avec les
                        meilleurs talents
                    </StyledTitle>
                    <StyledLink to="/survey/1" $isFullLink>
                        Faire le test
                    </StyledLink>
                </LeftCol>
                <Illustration src={HomeIllustration} alt="home-illustration" />
            </HomerContainer>
        </HomeWrapper>
    )
}

/*
const Balloon = styled.div`
    width: 100px;
    height: 100px;
    background-color: gold;
    border-radius: 50px;
    transform: scale(${(props) => props.size});
`


function Home() {
    const [size, setSize] = useState(1)

    return (
        <HomeContainer>
            <h1 onClick={() => setSize(size + 0.1)}>
                Page d'accueil{' '}
                <span role="img" aria-label="desc">
                    🏡
                </span>
            </h1>
            <Balloon size={size} />
        </HomeContainer>
    )
}
*/

export default Home
