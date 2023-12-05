import React, {useState,useEffect} from 'react';
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


export default function Mypage() {
    const [otherData, setOtherData] = useState([]);
  
    const data =[{
        followingID : "닉네임",
        reviewCrawl : "ㅁㄴㅇㅁㄴㅇ",
        reviewPlus : "닉네ㅁㄴㅇㅁㄴㅇ임",
        movieName :"닉네ㅁㄴㅇㅁㄴ임",
        movieImg :"닉네ㅁㄴㅇ임",
        reviewDATE :"닉네ㅁㄴㅇㅁㄴ임"
    }];

    /*
    useEffect(() => {
        axios.get("/Reviewmoah/mypageAction.jsp")
        .then(response => {
            setOtherData(response.data);
        })
        .catch(error => {
            console.error('Error:', error);
        });


    },[]);
  */

    return (
        <div>
            <Header_mypag/>
            <MainWrap>
                <FeedWrap>
                    <MyProfile/>
                </FeedWrap>
                <FeedWrap>
                    <MyFeed data={data[0]}/>
                </FeedWrap>
                {/*
                <FeedWrap>
                    <MyFeed data={otherData[0]}/>
                </FeedWrap>
                
                <FeedWrap>
                    <MyFeed data={otherData[1]}/>
                </FeedWrap>
                <FeedWrap>
                    <MyFeed data={otherData[2]}/>
                </FeedWrap>
                <FeedWrap>
                    <MyFeed data={otherData[3]}/>
                </FeedWrap>
                <FeedWrap>
                    <MyFeed data={otherData[4]}/>
                </FeedWrap>
                */}
            </MainWrap>
        </div>
        
    );
}