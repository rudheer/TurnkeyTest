import React from 'react'
import styled from 'styled-components'
import Courseobjects from './Courseobjects'

const Course = () => {
    return (
        <Container>
            <Courseobjects/>
            <Courseobjects/>
            <Courseobjects/>
            <Courseobjects/>
            <Courseobjects/>
            <Courseobjects/>
        </Container>
    )
}

export default Course

const Container=styled.div`
display:flex;
flex:9;
flex-wrap: wrap;
margin: 0px 50px;
`
