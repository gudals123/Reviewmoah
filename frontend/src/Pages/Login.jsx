import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState} from 'react'; 



const MainWrap = styled.div`
    position: relative;
    width:100vw;
    height:100vh;
`;

const WrapContent = styled.div`
    width: 550px;
    height:788px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    //border: 1px solid #ccc;
    //box-shadow: 1px 1px grey;
`;

const WrapLogin = styled.div`
    width: 550px;
    height: 610px;
    border: 1px solid #ccc;
`;

const LogoWrapper = styled.div`
    width: 550px;
    height: 240px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const WrapForm = styled.div`
    width: 550px;
    height:230px;

`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Input = styled.input`
    width:350px;
    height: 20px;
    padding: 15px;
    margin-bottom: 23px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 20px;
`;

const LoginButton = styled.button`
    width:380px;
    height: 50px;
    //padding: 15px;
    margin-top: 10px;
    border-radius: 5px;
    font-size: 20px;    
    color: white;
    background: #4CB5F9;
    border: 1px solid #ccc;
`;


const WrapSingup = styled.div`
    width: 550px;
    height: 135px;
    border: 1px solid #ccc;
    margin-top: 39px;
    position: relative;
`;

const Text = styled.div`

    position: absolute;
    width: 170px;
    font-size: 19px;
    top: 50%;
    left: 50%;
    transform: ${(props) => props.transForm};
`;


export default function Login() {


    const [id, setId] = useState('');
    const [pw, setPw] = useState('');

    const handleAccountIdChange = (e) => { 
        setId(e.target.value);
      };
    
      const handlePasswordChange = (e) => { 
        setPw(e.target.value);
      };

    return (
        <MainWrap>
            <WrapContent>
                <WrapLogin>
                    <LogoWrapper>
                        <img src = "img/Reviewmoah.svg"/>
                    </LogoWrapper>
                    <WrapForm>
                        <Form>
                            <Input placeholder="아이디"
                                type="text"
                                value={id} 
                                onChange={handleAccountIdChange}/>
                            <Input placeholder="비밀번호"
                                type="password"
                                value={pw} 
                                onChange={handlePasswordChange}/>
                            <LoginButton>로그인</LoginButton>
                        </Form>
                    </WrapForm>
                </WrapLogin>
                <WrapSingup>
                    <Text transForm={'translate(-90%, -50%)'}>계정이 없으신가요?</Text>
                    <Link to='/LoginSuccessful'>
                        <Text transForm={'translate(25%, -50%)'}>
                            가입하기
                        </Text>
                    </Link>
                </WrapSingup>
            </WrapContent>
        </MainWrap>


    );


}