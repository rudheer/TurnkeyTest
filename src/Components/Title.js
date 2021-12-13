import React from 'react'
import styled from 'styled-components'

const Title = () => {
    return (
        <Container>
            <li><b>Design Courses</b></li>
            <li><b>Courses to get you started</b></li>
        </Container>
    )
}

export default Title

const Container=styled.div`
height:140px;
width:100%;
align-items:center;
justify-content:left;
li{
    font-size:36px;
    list-style-type:none;
    margin-left:90px;
    align-items:center;
    padding:10px;
}
`
