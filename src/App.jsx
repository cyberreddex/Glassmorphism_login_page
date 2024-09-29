import styled from "styled-components";
import { FaFacebookF, FaInstagram , FaTwitter } from 'react-icons/fa';
import Input from "./components/Input";
import Button from "./components/Button"
import Icon from "./components/Icon";
function App() {
  const FacebookBackground = "linear-gradient(to right, #4D4D4D 0%, #A6A6A6 100%)";
  const InstagramBackground="linear-gradient(to right, #4D4D4D 0%, #A6A6A6 100%)";
  const TwitterBackground="linear-gradient(to right, #4D4D4D 0%, #A6A6A6 100%)";

  
  return <MainContainer>
    <WelcomeText>welcome</WelcomeText>
    <InputContainer>
      <Input type="text" placeholder="Email" />
      <Input type="password" placeholder="Password" />
      </InputContainer>
      <ButtonContainer>
        <Button content="signup" />
      </ButtonContainer>
      <LoginWith>or Login With</LoginWith>
      <HorizontalRule></HorizontalRule>
      <IconContainer>
        <Icon color={FacebookBackground}>
          <FaFacebookF />
        </Icon>
        <Icon color={InstagramBackground}>
            <FaInstagram />
        </Icon>
        <Icon color={TwitterBackground}> 
            <FaTwitter />
        </Icon>
      </IconContainer>
      <ForgotPassword>Forgot Password?</ForgotPassword>

  </MainContainer>
}
const MainContainer=styled.div`
  display:flex;
  align-items:center;
  flex-direction:column;
  height:80vh;
  width:30vw;
  background:rgba(255,255,255,0.15);
  box-shadow: 0 8px 35px 0 rgba(128, 128, 128, 0.37);
  backdrop-filter:blur(6px);
  border-radius:10px;
  color:white;
  text-transform:uppercase;
  letter-spacing:0.4rem;
  @media only screen and (max-width: 320px) {
    width: 80vw;
    height: 90vh;
    hr {
      margin-bottom: 0.3rem;
    }
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 360px) {
    width: 80vw;
    height: 90vh;
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 411px) {
    width: 80vw;
    height: 90vh;
  }

  @media only screen and (min-width: 768px) {
    width: 80vw;
    height: 80vh;
  }
  @media only screen and (min-width: 1024px) {
    width: 70vw;
    height: 50vh;
  }
  @media only screen and (min-width: 1280px) {
    width: 30vw;
    height: 80vh;
  }
    @media screen and (max-width: 1024px) and (max-height: 600px) {
  width:50vw;
  height:95vh;

}
   @media screen and (max-width: 904px) and (max-height: 2316px) {
  width:90vw;
  height:95vh;

}
 
  
`;

const WelcomeText=styled.h1`
  margin:3rem 0 2rem 0;
`;
const InputContainer=styled.div`
  display:flex;
  flex-direction:column;
  justify-content:space-around;
  align-items:center;
  height:20%;
  width:100%;
`;

const ButtonContainer=styled.div`
  margin:1rem 0 2rem 0;
  width:100%;
  display:flex;
  align-items:center;
  justify-content:center;
`;
const LoginWith=styled.h5`
cursor:pointer;
`;

const HorizontalRule=styled.hr`
width:90%;
height:0.3rem;
border-radius:0.8rem;
border:none;
margin:1.5rem 0 1rem 0;
background: linear-gradient(to right, #2C2C2C 0%, #4B4B4B 50%, #696969 100%);
backdrop-filter:blur(25px);
`;
const IconContainer=styled.div`
display:flex;
justify-content:space-evenly;
margin:2rem 0 3rem 0;
width:80%;
`;

const ForgotPassword=styled.h4`
  cursor:pointer;
  `;
export default App;
