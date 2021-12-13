import React from 'react'
import styled from 'styled-components'
import Course from './Course'
import Filter from'./Filter'

const Main = () => {
    return (
        <Container>
            <Filter/>
            <Course/>
        </Container>
    )
}

export default Main

const Container=styled.div`
display:flex;
height:700px;
justify-content:center;
align-items:center;
`
