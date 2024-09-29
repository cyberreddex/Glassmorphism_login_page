import styled from "styled-components";
export default function Input({type,placeholder}){
    return(
        <StyledInput type={type} placeholder={placeholder} />
    );
}
const StyledInput=styled.input`
    background:rgba(255,255,255,0.10);
    box-shadow: 0 8px 35px 0 rgba(128, 128, 128, 0.37);
    border-radius:2rem;
    width:80%;
    height:3rem;
    padding:1rem;
    border:none;
    outline:none;
    color:black;
    font-size:1rem;
    font-weight:bold;
    &:focus{
    display:inline-block;
    box-shadow:0 0 0 0.2rem linear-gradient(90deg, #C0C0C0, #696969);;
    backdrop-filter:blur(12rem);
    border-radius:2rem;
    }
    &::placeholder{
    color:#2C3539;
    font-weight:100;
    font-size:1rem;
   
    }

`;
