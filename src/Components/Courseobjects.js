import React from 'react'
import styled from 'styled-components'

const Courseobjects = () => {
    return (
        <Wrap>
            <Image>
                <img src="https://s3-alpha-sig.figma.com/img/370b/ac23/7fafb4d5932dfc2167a22a0de5045a7d?Expires=1640563200&Signature=AdUiE7nSNBgZVmeVcxtsxEeA7EQsJJFlbCFIiFxrY6yNi938JWlFp~GfKAceQlHbmewB3I93WvQrSsTPAYNsPS1CnpAUewYW7cdpxM~BTAW~VpOCED4x2qKwz9HWLKSw-hKJn89kMEUns4kG5kuAJXZVC7M9DdWMpv3R4zgX93e6kcvzpcrd7SCEarDuOBF~COcYQXCwNmHvoZQo65bfnixlj4To1nGyVtCqGiNoMsryAuGO6lFo5J1C521~-nAjKUT83KU1OnI-Z8Om4i8NdO8r0Oz~8Z5pOKgh13Ih62i~fKUzaCz73eVr-qwvUYMl~t8wJYd3MElYz2BIiIgPaw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"></img>
            </Image>
            <Info>
                <Heading>
                    <p><b>UI/UX Designing Course</b></p>
                </Heading>
                <Description>
                    <p><b>Rs.699</b></p>
                </Description>
            </Info>
        </Wrap>
    )
}

export default Courseobjects

const Wrap= styled.div`
width: 260px;
margin: 0px 25px 40px 25px;
`
const Image=styled.div`
img{
    width: 100%;
    height: 200px;
    object-fit: cover;
    border:solid 1px;
}
`
const Info=styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
const Heading=styled.div`
font-size: 20px;
margin-top: 0px;
cursor: pointer;
`
const Description=styled.div`
font-size: 14px;
color: #444;
line-height: 0px;
overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 1;
-webkit-box-orient: vertical;
`