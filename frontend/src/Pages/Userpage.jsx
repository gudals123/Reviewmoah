import React, {useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Header_userpag from '../Components/Header_userpag';
import UserProfile from '../Components/UserProfile';
import Feed from '../Components/Feed';


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


export default function Userpage() {
    const [otherData, setOtherData] = useState([1]);

    return (
        <div>
            <Header_userpag/>
            <MainWrap>
                <FeedWrap>
                    <UserProfile/>
                </FeedWrap>
                <FeedWrap>
                    <Feed data={otherData}/>
                </FeedWrap>
                <FeedWrap>
                    <Feed data={otherData}/>
                </FeedWrap>
                <FeedWrap>
                    <Feed data={otherData}/>
                </FeedWrap>

            </MainWrap>
        </div>
        
    );
}