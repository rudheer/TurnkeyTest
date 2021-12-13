import React from 'react'
import styled from 'styled-components'
import { AiOutlineLeft,AiOutlineRight } from "react-icons/ai";

const Specific = () => {
    return (
        <Container>
            <Heading>
                <p><b>Advance your career with new skill</b></p>
            </Heading>
            <Detailview>
                <Leftarrow>
                    <AiOutlineLeft/>
                </Leftarrow>
                <Image>
                    <img src="https://s3-alpha-sig.figma.com/img/370b/ac23/7fafb4d5932dfc2167a22a0de5045a7d?Expires=1640563200&Signature=AdUiE7nSNBgZVmeVcxtsxEeA7EQsJJFlbCFIiFxrY6yNi938JWlFp~GfKAceQlHbmewB3I93WvQrSsTPAYNsPS1CnpAUewYW7cdpxM~BTAW~VpOCED4x2qKwz9HWLKSw-hKJn89kMEUns4kG5kuAJXZVC7M9DdWMpv3R4zgX93e6kcvzpcrd7SCEarDuOBF~COcYQXCwNmHvoZQo65bfnixlj4To1nGyVtCqGiNoMsryAuGO6lFo5J1C521~-nAjKUT83KU1OnI-Z8Om4i8NdO8r0Oz~8Z5pOKgh13Ih62i~fKUzaCz73eVr-qwvUYMl~t8wJYd3MElYz2BIiIgPaw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"></img>
                </Image>
                <Text>
                    <Name>
                        <li><b>UI/UX Designing Course</b></li>
                    </Name>
                    <Description>
                        <p>You can now prepare for a new career in a high-growth field without any prior experience. The Career Certificates program offers professional training designed by Google and the opportunity to connect with top employers.</p>
                    </Description>
                    <Cost>
                        <li><b>Rs. 699</b></li>
                    </Cost>
                </Text>
                <Rightarrow>
                    <AiOutlineRight/>
                </Rightarrow>
            </Detailview>
        </Container>
    )
}

export default Specific

const Container=styled.div`
height:300px;
`
const Heading=styled.div`
height:40px;
margin-bottom:30px;
p{
    font-size:36px;
}
`
const Detailview=styled.div`
height:260px;
background-color:#00053C;
display:flex;
justify-content:center;
align-items:center;
color:white;
`
const Leftarrow=styled.div`
font-size:20px;
margin:30px;
cursor:pointer;
`
const Image=styled.div`
margin:30px;
img{
    width: 100%;
    height: 200px;
    object-fit: cover;
    border:solid 1px;
}
`
const Text=styled.div`
cursor:pointer;
margin:30px;
width:900px;
display:flex;
flex-direction:column;
justify-content:left;
align-items:left;
`
const Name=styled.div`
li{
    list-style-type:none;
    font-size:24px;
}
`
const Description=styled.div`
p{
    font-size:18px;
}
`
const Cost=styled.div`
li{
    list-style-type:none;
    font-size:22px;
}
`
const Rightarrow=styled.div`
font-size:20px;
margin:30px;
cursor:pointer;
`