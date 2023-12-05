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


export default function Userpage() {
    const [otherData, setOtherData] = useState([1]);

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
        axios.get("/Reviewmoah/uploadReview.jsp")
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
            <Header_userpag/>
            <MainWrap>
                <FeedWrap>
                    <UserProfile/>
                </FeedWrap>
                <FeedWrap>
                    <Feed data={data[0]}/>
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