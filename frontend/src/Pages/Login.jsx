import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState} from 'react'; 



const MainWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width:100vw;
    height:100vh;
`;

const WrapContent = styled.div`
    width: 400px;
    height:auto;
    //position: absolute;
    //top: 50%;
    //left: 50%;
    //transform: translate(-50%, -50%);
    //border: 1px solid #ccc;
    //box-shadow: 1px 1px grey;
`;

const WrapLogin = styled.div`
    width: 400px;
    height: 476px;
    border: 1px solid #ccc;

`;

const WrapForm = styled.div`
    width: 400px;
    height:auto;

`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const LogoWrapper = styled.div`
    width: 400px;
    height: 138px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 10px;
    margin-bottom: 40px;
`;

const Input = styled.input`
    width:300PX;
    height: 20px;
    padding: 10px;
    margin-bottom: 23px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 15px;
    
`;

const LoginButton = styled.button`
    width:320px;
    height: 40px;
    //padding: 15px;
    margin-top: 10px;
    border-radius: 5px;
    font-size: 16px;    
    color: white;
    background: #4CB5F9;
    border: 1px solid #ccc;
`;


const WrapSingup = styled.div`
    width: 400px;
    height: 70px;
    border: 1px solid #ccc;
    margin-top: 39px;
    position: relative;
`;

const Text = styled.div`

    position: absolute;
    width: 170px;
    font-size: 17px;

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

                    <WrapForm>
                        <Form>
                            <LogoWrapper>
                                <img src = "img/Reviewmoah.svg"/>
                            </LogoWrapper>
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
                    <Text transForm={'translate(-70%, -50%)'}>계정이 없으신가요?</Text>
                    <Link to='/LoginSuccessful'>
                        <Text transForm={'translate(27%, -50%)'}>
                            가입하기
                        </Text>
                    </Link>
                </WrapSingup>
            </WrapContent>
        </MainWrap>


    );


}