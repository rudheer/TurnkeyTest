import React from 'react'
import styled from 'styled-components'
import { AiOutlineShoppingCart } from "react-icons/ai";

const Topbar = () => {
    return (
        <Container>
            <input type="text" placeholder='Search'></input>
            <label>Home</label>
            <label>Courses</label>
            <li><AiOutlineShoppingCart/></li>
            <button>Login</button>
        </Container>
    )
}

export default Topbar

const Container=styled.div`
display:flex;
align-items:center;
justify-content:right;
height:60px;
width:100%;
font-size:22px;
border-bottom: solid 1px;
input[type='text']{
    margin-right:70px;
    width:400px;
    height:27px;
    border-radius:40px;
    border:solid 1px;
}
label{
    margin-right:70px;
    cursor:pointer;
}
li{
    list-style-type:none;
    margin-right:70px;
    align-items:center;
    justify-content:center;
    font-size:22px;
    cursor:pointer;
}
button{
    margin-right:70px;
    background-color:#DBDFE8;
    border-radius:6px;
    border:none;
    height:35px;
    width:80px;
    cursor:pointer;
}
`
