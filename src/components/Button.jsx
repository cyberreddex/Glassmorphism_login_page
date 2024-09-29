import styled from "styled-components";

export default function Button({content}){
    return (<StyledButton>
        {content}
    </StyledButton>
    );
}
const StyledButton=styled.button`
    background: linear-gradient(to right, #2C2C2C 0%, #4B4B4B 50%, #696969 100%);
    text-transform:uppercase;
    letter-spacing:0.2rem;
    width:65%;
    height:3rem;
    border:none;
    color:white;
    border-radius:2rem;
    cursor:pointer;

`;