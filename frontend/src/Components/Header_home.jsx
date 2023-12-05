import React from 'react';
import {useState,useRef} from 'react';
import styled from 'styled-components';
import useDetectClose from '../hooks/useDetectClose';


const HeaderWrapper = styled.div`
  height: 3.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.2rem;
  border-bottom: 1px solid #D9D9D9;
  position:relative;z-index:2;
`;

const LogoArea = styled.div`
    display: flex;
`;

const SearchArea = styled.div`
    display: flex;
    justify-content: space-between;
    width:445px;
    height:40px;
`;

const WrapSelect = styled.div`
    width:80px;
    height:40px;
    border: 1px solid #D9D9D9;
    padding:0px;
`;

const SelectSearchType = styled.input`
  width:80px;
  height:40px;
  border:0px;
  padding:0px;
  outline: none;
  cursor:pointer;
  background: #FFFFFF;
  font-size:15px;
`;

const Option = styled.div`
  display: flex;
  justify-content: center;
  align-items:center;
  width:80px;
  height:40px;
  padding:0px;
  cursor:pointer;
  font-size:15px;
  background-color: #FFFFFF;
  border: 1px solid #ccc;
`;

const SearchBox = styled.div`
    display: flex;
    justify-content: center;
    border: 1px solid #D9D9D9;
    width:310px;
    height:40px;
    padding:0px;
`;

const SearchInput = styled.input`
    width:280px;
    height:40px;
    border:0px;
    padding:0px;
    outline: none;
    margin-left:15px;
`;

const SearchBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items:center;
    background: #FFFFFF;
    border:0px;
    padding:0px;
    cursor:pointer;
`;

const ButtonArea= styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width:180px;
  height:40px;
`;

const ButtonArea_a= styled.a`
  display: flex;
  align-items: center;
`;

const Logoutbtn = styled.button`
align-items: center;
justify-content: center;
display: flex;
list-style: none;
background-color: #0000;
border: none;
cursor: pointer;
/*&:hover {
  cursor: pointer;
  background-color: black;
  border-top-left-radius: 30%;
  border-top-right-radius: 30%;
  color: white;
}*/
`;

export const DropDown = ({ value, setIdentify, setIsOpen, isOpen }) => {
  const ValueClick = () => {
      setIdentify(value)
      setIsOpen(!isOpen)
  }
  return(
      <Option onClick={ValueClick}>{value}</Option>
  )
}


export default function Header_home() {
  const dropDownRef = useRef();
  const [Identify, setIdentify] = useState('영화');  
  const list =['영화', '유저'];
  const [isOpen, setIsOpen ] = useDetectClose(dropDownRef, false);


  const logout =()=>{

    localStorage.clear("userID");
    console.log("로그아웃");
  }

    return (
        <HeaderWrapper>
            <LogoArea>
                <a href="Main">
                    <img src="img/nav-Reviewmoah.svg"/>
                </a>
            </LogoArea>
            <SearchArea>
              <WrapSelect ref={dropDownRef}>
                <SelectSearchType 
                  onClick={() => setIsOpen(!isOpen)}
                  type='button'
                  value={Identify}
                />
                {isOpen && 
                  <div>
                    {list.map((value, index) => (
                      <DropDown key={index} value={value} setIsOpen={setIsOpen} setIdentify={setIdentify} isOpen={isOpen} />
                      ))}
                  </div>
                }
              </WrapSelect>
              <SearchBox>
                <SearchInput type="text" name="keyword"/>
                <SearchBtn>
                  <img src="img/search.svg"/>
                </SearchBtn>
              </SearchBox>
            </SearchArea>
            <ButtonArea>
              <ButtonArea_a href="Main"><img src="img/home-in.svg"/></ButtonArea_a>
              <ButtonArea_a href="Mypage"><img src="img/mypage-out.svg"/></ButtonArea_a>
              <ButtonArea_a href="ReviewAdd"><img src="img/add-button.svg"/></ButtonArea_a>
              <Logoutbtn onClick={logout}><img src="img/logout.svg"/></Logoutbtn>
            </ButtonArea>
            
        </HeaderWrapper>
    );
}