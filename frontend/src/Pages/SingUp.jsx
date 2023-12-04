import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState} from 'react'; 
import axios from 'axios';

const MainWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width:100%;
    height:90vh;
    margin-top: 11px;
    margin-bottom: 11px;
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


const WrapSingUp = styled.div`
    width: 400px;
    height: 624px;
    border: 1px solid #ccc;

`;

const WrapForm = styled.div`
    width: 400px;
    height:auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`;

const Form = styled.div`
    width: 320px;
    
`;

const LogoWrapper = styled.div`
    width: 320px;
    height: 138px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 10px;
    margin-bottom: 40px;
`;

const Input = styled.input`
    width:300px;
    height: 20px;
    padding: 10px;
    margin-top: 10px;
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

const WrapLogin = styled.div`
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

const IntroInput = styled.textarea`
    width:300px;
    height: 40px;
    padding: 10px;
    border: 1px solid #ccc;
    font-size: 12px;
    maxlenth: 100;
    
`;

const P = styled.p`
    margin-top: 5px;
    margin-bottom: 5px;
    font-size: 12px;

`;

const SynchronizationWrap = styled.div`
    display: flex;
    justify-content: space-between;
    width:321px;
    height: 74px;
    //border: 1px solid #ccc;
`;

const SynchronizationBox =styled.div`
    width:107px;
    height: 74px;
    //border: 1px solid #ccc;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const SynchronizationIput =styled.input`
    width:78px;
    height: 15px;
    padding: 5px;
    border: 1px solid #ccc;
    font-size: 15px;
    margin-bottom: 4px;
`;

const P2 = styled.p`
    margin:0px;
    margin-top: 5px;
    margin-bottom: 5px;
    font-size: 12px;
`;



export default function SingUp() {

    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [c_id, setC_id] = useState('');
    const [c_pw, setC_pw] = useState('');
    const [l_id, setL_id] = useState('');
    const [l_pw, setL_pw] = useState('');
    const [m_id, setM_id] = useState('');
    const [m_pw, setM_pw] = useState('');
    const [nickname, setNickname] = useState('');
    const [intro, setIntro] = useState('');
    let [introcount, setIntroCount] = useState(0);

    const [errorMessage, setErrorMessage] = useState(''); 

    const handleAccountIdChange = (e) => { 
        setId(e.target.value);
    };
    
    const handlePasswordChange = (e) => { 
        setPw(e.target.value);
    };

    const handleC_idChange = (e) => { 
        setC_id(e.target.value);
    };
    const handleC_pwChange = (e) => { 
        setC_pw(e.target.value);
    };
    const handleL_idChange = (e) => { 
        setL_id(e.target.value);
    };
    const handleL_pwChange = (e) => { 
        setL_pw(e.target.value);
    };
    const handleM_idChange = (e) => { 
        setM_id(e.target.value);
    };
    const handleM_pwChange = (e) => { 
        setM_pw(e.target.value);
    };

    const handleNicknameChange = (e) => { 
        setNickname(e.target.value);
    };
    const handleIntroChange = (e) => { 
        setIntro(e.target.value);
        setIntroCount(e.target.value.length);
    };
    
    const handleSingUp = () => { 
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
                <WrapSingUp>
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
                            <Input placeholder="닉네임"
                                type="text"
                                value={nickname} 
                                onChange={handleNicknameChange}/>
                            <P>
                                소개
                            </P>
                            <IntroInput 
                                value={intro} 
                                onChange={handleIntroChange}/>
                            <P>
                                <span >{introcount}</span> 
                                <span>/150 자</span>
                            </P>
                            <SynchronizationWrap>
                                <SynchronizationBox>
                                    <P2>CGV</P2>
                                    <SynchronizationIput
                                        placeholder="ID"
                                        type="text"
                                        value={c_id} 
                                        onChange={handleC_idChange}/>
                                    <SynchronizationIput
                                        placeholder="PW"
                                        type="password"
                                        value={c_pw} 
                                        onChange={handleC_pwChange}/>
                                </SynchronizationBox>
                                <SynchronizationBox>
                                    <P2>롯데시네마</P2>
                                    <SynchronizationIput
                                        placeholder="ID"
                                        type="text"
                                        value={l_id} 
                                        onChange={handleL_idChange}/>
                                    <SynchronizationIput
                                        placeholder="PW"
                                        type="password"
                                        value={l_pw} 
                                        onChange={handleL_pwChange}/>
                                </SynchronizationBox>
                                <SynchronizationBox>
                                    <P2>메가박스</P2>
                                    <SynchronizationIput
                                        placeholder="ID"
                                        type="text"
                                        value={m_id} 
                                        onChange={handleM_idChange}/>
                                    <SynchronizationIput
                                        placeholder="PW"
                                        type="password"
                                        value={m_pw} 
                                        onChange={handleM_pwChange}/>
                                </SynchronizationBox>
                            </SynchronizationWrap>
                            <LoginButton onClick={handleSingUp}>가입하기</LoginButton>
                        </Form>
                    </WrapForm>
                </WrapSingUp>
                <WrapLogin>
                    <Text transform={'translate(-70%, -50%)'}>계정이 있으신가요?</Text>
                    <Link to='/'>
                        <Text transform={'translate(27%, -50%)'}>
                            로그인
                        </Text>
                    </Link>
                </WrapLogin>



            </WrapContent>
        </MainWrap>
    );
}