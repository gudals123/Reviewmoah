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
   
    const data =[
       
        {
            followingID : "sKK_#1",
            reviewCrawl : "최고의 영화!",
            reviewPlus : "인생영화",
            movieName :"슬램덩크",
            movieImg :"img/MoviePoster3.svg",
            reviewDATE :"닉네ㅁㄴㅇㅁㄴ임"
        },
        {
            followingID : "s454KK2",
            reviewCrawl : "감동적이에요",
            reviewPlus : "인생영화",
            movieName :"더 마블스",
            movieImg :"img/MoviePoster5.svg",
            reviewDATE :"닉네ㅁㄴㅇㅁㄴ임"
        }, 
        {
            followingID : "son_h__m",
            reviewCrawl : "인생영화",
            reviewPlus : "감동적이에요",
            movieName :"뉴노멀",
            movieImg :"img/MoviePoster4.svg",
            reviewDATE :"닉네ㅁㄴㅇㅁㄴ임"
        },
        {
        followingID : "Nmmm",
        reviewCrawl : "감동적이에요",
        reviewPlus : "OOOdk 이거 꼭봐",
        movieName :"비투비",
        movieImg :"img/MoviePoster2.svg",
        reviewDATE :"닉네ㅁㄴㅇㅁㄴ임"
    },

    

    {
        followingID : "zxczxc@a",
        reviewCrawl : "ㅁㄴㅇㅁㄴㅇ",
        reviewPlus : "인생영화",
        movieName :"소년들",
        movieImg :"img/MoviePoster6.svg",
        reviewDATE :"닉네ㅁㄴㅇㅁㄴ임"
    }
];


   /*
    useEffect(() => {
        axios.get("Reviewmoah/uploadReview.jsp")
        .then(response => {
            setOtherData(response.data);
            console.log(response);
            console.log(response.data);
        })
        .catch(error => {
            console.error('Error:', error);
        });


    },[]);
  */

    return (
        <div>
            <Header_home/>
            <MainWrap >
            

                <FeedWrap>
                    <Feed data={data[0]}/>
                </FeedWrap>
                <FeedWrap>
                    <Feed data={data[1]}/>
                </FeedWrap>
                <FeedWrap>
                    <Feed data={data[2]}/>
                </FeedWrap>
                <FeedWrap>
                    <Feed data={data[3]}/>
                </FeedWrap>
                <FeedWrap>
                    <Feed data={data[4]}/>
                </FeedWrap>
              
                     {/*
                <FeedWrap>
                    <Feed data={otherData[0]}/>
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
          */}
                
            </MainWrap>
        </div>
    );
}