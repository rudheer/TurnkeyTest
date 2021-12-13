import React from 'react'
import styled from 'styled-components'
import { AiFillCloseSquare } from "react-icons/ai";

const Filter = () => {
    return (
        <Wrap>
            <Container>
                <Heading>
                    <li><b>Filter</b></li>
                </Heading>
                <Topic>
                    <Topictitle>
                        <li><b>Topic</b></li>
                    </Topictitle>
                    <Topicbox>
                        <Designoption>
                            <li>Design</li>
                            <AiFillCloseSquare/>
                        </Designoption>
                    </Topicbox>
                </Topic>
                <Level>
                    <Leveltitle>
                        <li><b>Level</b></li>
                    </Leveltitle>
                    <Leveloptions>
                        <Loption>
                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                            <label for="vehicle1"> Begginer</label>
                        </Loption>
                        <Loption>
                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                            <label for="vehicle1"> Intermediate</label>
                        </Loption>
                        <Loption>
                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                            <label for="vehicle1"> Advanced</label>
                        </Loption>
                        <Loption>
                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                            <label for="vehicle1"> All of the above</label>
                        </Loption>
                    </Leveloptions>
                </Level>
                <Price>
                    <Pricetitle>
                        <li><b>Price</b></li>
                    </Pricetitle>
                    <Priceoptions>
                        <Poption>
                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                            <label for="vehicle1"> 499 - 1000</label>
                        </Poption>
                        <Poption>
                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                            <label for="vehicle1"> 1000 - 1500 </label>
                        </Poption>
                        <Poption>
                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                            <label for="vehicle1"> 499 - 1000</label>
                        </Poption>
                        <Poption>
                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                            <label for="vehicle1"> 1000 - 1500</label>
                        </Poption>
                    </Priceoptions>
                </Price>
            </Container>
        </Wrap>
    )
}

export default Filter

const Wrap=styled.div`
padding:20px;
margin-left:30px;
`

const Container=styled.div`
display:flex;
flex-direction:column;
flex:3;
padding:15px;
border:solid 1px;
flex-wrap:wrap;
`
const Heading=styled.div`
display:flex;
height:60px;
width:100%;
justify-content:center;
align-items:center;
li{
    list-style-type:none;
    font-size:26px;
    justify-content:center;
    align-itmes:center;
}
`
const Topic=styled.div`
display:flex;
flex-direction:column;
height:70px;
width:100%;
justify-content:left;
`
const Topictitle=styled.div`
width:100%;
height:30px;
li{
    list-style-type:none;
    font-size:20px;
    justify-content:left;
    align-itmes:center;
}
`
const Topicbox=styled.div`
width:250px;
height:40px;
border:solid 1px;
padding:10px;
margin-top:5px;
`
const Designoption=styled.div`
display:flex;
background-color:#DBDFE8;
width:150px;
border-radius:6px;
align-items:center;
justify-content:right;
padding-right:10px;
li{
    margin-right:80px;
    list-style-type:none;
    padding-left:5px;
}
`
const Level=styled.div`
display:flex;
flex-direction:column;
height:130px;
width:100%;
justify-content:left;
margin-top:10px;
`
const Leveltitle=styled.div`
width:100%;
height:30px;
li{
    list-style-type:none;
    font-size:20px;
    justify-content:left;
    align-itmes:center;
}
`
const Leveloptions=styled.div`
display:flex;
flex-direction:column;
height:100px;
width:100%;
justify-content:left;
`
const Loption=styled.div`
margin:2px;
`
const Price=styled.div`
display:flex;
flex-direction:column;
height:130px;
width:100%;
justify-content:left;
margin-top:10px;
`
const Pricetitle=styled.div`
width:100%;
height:30px;
li{
    list-style-type:none;
    font-size:20px;
    justify-content:left;
    align-itmes:center;
}
`
const Priceoptions=styled.div`
display:flex;
flex-direction:column;
height:100px;
width:100%;
justify-content:left;
`
const Poption=styled.div`
margin:2px;
`