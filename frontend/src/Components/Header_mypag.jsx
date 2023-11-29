import React from 'react';
import {useState,useRef} from 'react';
import styled from 'styled-components';
import useDetectClose from '../hooks/useDetectClose';


const HeaderWrapper = styled.div`
  height: 3.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.4rem;
  border-bottom: 1px solid #D9D9D9;
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
  background: #FFFFFF;
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

export const DropDown = ({ value, setIdentify, setIsOpen, isOpen }) => {
  const ValueClick = () => {
      setIdentify(value)
      setIsOpen(!isOpen)
  }
  return(
      <Option onClick={ValueClick}>{value}</Option>
  )
}


export default function Header_mypag() {
  const dropDownRef = useRef();
  const [Identify, setIdentify] = useState('영화');  
  const list =['영화', '유저'];
  const [isOpen, setIsOpen ] = useDetectClose(dropDownRef, false);

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
                <SearchInput type="text" name="keyword" class="searchInput" maxlength="20"/>
                <SearchBtn  onclick="alert('클릭!')">
                  <img src="img/search.svg"/>
                </SearchBtn>
              </SearchBox>
            </SearchArea>
            <ButtonArea>
              <ButtonArea_a href="Main"><img src="img/home-out.svg"/></ButtonArea_a>
              <ButtonArea_a href="Mypage"><img src="img/mypage-in.svg"/></ButtonArea_a>
              <ButtonArea_a href="Add"><img src="img/add-button.svg"/></ButtonArea_a>
              <ButtonArea_a href="Logout"><img src="img/logout.svg"/></ButtonArea_a>
            </ButtonArea>
            
        </HeaderWrapper>
    );
}