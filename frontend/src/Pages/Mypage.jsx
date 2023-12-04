import React, {useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Header_mypag from '../Components/Header_mypag';
import MyProfile from '../Components/MyProfile';
import MyFeed from '../Components/MyFeed';


const MainWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width:100vw;
    height:auto;
    overflow: hidden;zoom: 1;position:relative;z-index:1;
`;

const FeedWrap = styled.div`
    width:600px;
    height:300px;
    margin-top: 10px;
    //border-left: 1px solid #ccc;
    // /border-right: 1px solid #ccc;
`;


export default function Mypage() {
    const [otherData, setOtherData] = useState([1]);

    return (
        <div>
            <Header_mypag/>
            <MainWrap>
                <FeedWrap>
                    <MyProfile/>
                </FeedWrap>
                <FeedWrap>
                    <MyFeed data={otherData}/>
                </FeedWrap>
                <FeedWrap>
                    <MyFeed data={otherData}/>
                </FeedWrap>
                <FeedWrap>
                    <MyFeed data={otherData}/>
                </FeedWrap>

            </MainWrap>
        </div>
        
    );
}