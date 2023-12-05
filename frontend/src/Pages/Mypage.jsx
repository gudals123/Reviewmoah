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
  
    const data =[
        {
            followingID : "son_h__m",
            reviewCrawl : "인생영화",
            reviewPlus : "감동적이에요",
            movieName :"뉴노멀",
            movieImg :"img/MoviePoster4.svg",
            reviewDATE :"닉네ㅁㄴㅇㅁㄴ임"
        },

        {
            followingID : "son_h__m",
            reviewCrawl : "감동적이에요",
            reviewPlus : "인생영화",
            movieName :"더 마블스",
            movieImg :"img/MoviePoster5.svg",
            reviewDATE :"닉네ㅁㄴㅇㅁㄴ임"
        },
        {
        followingID : "son_h__m",
        reviewCrawl : "감동적이에요",
        reviewPlus : "OOOdk 이거 꼭봐",
        movieName :"비투비",
        movieImg :"img/MoviePoster2.svg",
        reviewDATE :"닉네ㅁㄴㅇㅁㄴ임"
    },
    {
        followingID : "son_h__m",
        reviewCrawl : "최고의 영화!",
        reviewPlus : "인생영화",
        movieName :"슬램덩크",
        movieImg :"img/MoviePoster3.svg",
        reviewDATE :"닉네ㅁㄴㅇㅁㄴ임"
    },
    

    {
        followingID : "son_h__m",
        reviewCrawl : "ㅁㄴㅇㅁㄴㅇ",
        reviewPlus : "인생영화",
        movieName :"소년들",
        movieImg :"img/MoviePoster6.svg",
        reviewDATE :"닉네ㅁㄴㅇㅁㄴ임"
    }
];

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
                <FeedWrap>
                    <MyFeed data={data[1]}/>
                </FeedWrap>
                <FeedWrap>
                    <MyFeed data={data[2]}/>
                </FeedWrap>
                <FeedWrap>
                    <MyFeed data={data[3]}/>
                </FeedWrap>
                <FeedWrap>
                    <MyFeed data={data[4]}/>
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