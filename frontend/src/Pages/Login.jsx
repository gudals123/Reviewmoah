import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState} from 'react'; 
import axios from 'axios';


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

const Form = styled.div`
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
    cursor: pointer;
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
    transform: ${(props) => props.transform};
`;


export default function Login() {


    const [id, setId] = useState('');
    const [pw, setPw] = useState('');

    const [errorMessage, setErrorMessage] = useState(''); 

    const handleAccountIdChange = (e) => { 
        setId(e.target.value);
      };
    
      const handlePasswordChange = (e) => { 
        setPw(e.target.value);
      };

      const handleLogin = () => { 
        if (!id || !pw) { 
          setErrorMessage('아이디와 비밀번호를 모두 입력해주세요.');
          return;
        }
        console.log(id);
        console.log(pw);
        let body ={
          "accountId": id,
          "password": pw
        };
        
        axios.get('test/HelloWorldServlet', body) 
            .then((response) => { 
            console.log(response);
            //const accessToken = response.data.accessToken;
            //localStorage.setItem("accessToken", accessToken);
            //console.log("res.data.accessToken : " + accessToken);
            //axios.defaults.headers.common['Authorization'] = 'Bearer ' + accessToken;
            window.location.href ="/LoginSuccessful";
    
          })
          .catch((error) => {
           if (error.status === 401) {
            console.log(body)
            setErrorMessage('아이디 또는 비밀번호를 잘못 입력했습니다. 입력하신 내용을 다시 확인해주세요.');
           } else {
             setErrorMessage('서버 오류가 발생했습니다. 나중에 다시 시도해주세요.');
           }
          });
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
                            {errorMessage && <div>{errorMessage}</div>}
                            <LoginButton onClick={handleLogin}>로그인</LoginButton>
                        </Form>
                    </WrapForm>
                </WrapLogin>
                <WrapSingup>
                    <Text transform={'translate(-70%, -50%)'}>계정이 없으신가요?</Text>
                    <Link to='/LoginSuccessful'>
                        <Text transform={'translate(27%, -50%)'}>
                            가입하기
                        </Text>
                    </Link>
                </WrapSingup>
            </WrapContent>
        </MainWrap>


    );


}