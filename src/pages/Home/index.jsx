import React from 'react'
import { useState } from 'react'

import styled from 'styled-components'

const HomeContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`

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

export default Home
