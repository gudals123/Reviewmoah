import React, {useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Header_home from '../Components/Header_home';
import Feed from '../Components/Feed';


const MainWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width:100%;
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


export default function Main() {

    const [otherData, setOtherData] = useState([1]);

    return (
        <div>
            <Header_home/>
            <MainWrap >
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