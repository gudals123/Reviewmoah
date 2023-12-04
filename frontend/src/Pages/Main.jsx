import React, {useState,useEffect} from 'react';
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

    const [otherData, setOtherData] = useState([]);
    
    const data =[{
        followingID : "닉네임",
        reviewCrawl : "ㅁㄴㅇㅁㄴㅇ",
        reviewPlus : "닉네ㅁㄴㅇㅁㄴㅇ임",
        movieName :"닉네ㅁㄴㅇㅁㄴ임",
        movieImg :"닉네ㅁㄴㅇ임",
        reviewDATE :"닉네ㅁㄴㅇㅁㄴ임"
    }];
  


    return (
        <div>
            <Header_home/>
            <MainWrap >
                <FeedWrap>
                    <Feed data={data[0]}/>
                </FeedWrap>
                <FeedWrap>
                    <Feed data={otherData[1]}/>
                </FeedWrap>
                <FeedWrap>
                    <Feed data={otherData[2]}/>
                </FeedWrap>
                <FeedWrap>
                    <Feed data={otherData[3]}/>
                </FeedWrap>
                <FeedWrap>
                    <Feed data={otherData[4]}/>
                </FeedWrap>

                
            </MainWrap>
        </div>
    );
}