import React, {useState, useEffect} from 'react';
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
    const data =[
        {
            userID : "son_h__m",
            reviewContent : "감동적이에요",
            movieName :"뉴노멀",
            movieIMG :"img/MoviePoster4.svg",
        },
        {
            userID : "son_h__m",
            reviewContent : "감동적이에요",
            movieName :"뉴노멀",
            movieIMG :"img/MoviePoster4.svg",
        },        
        {
            userID : "son_h__m",
            reviewContent : "감동적이에요",
            movieName :"뉴노멀",
            movieIMG :"img/MoviePoster4.svg",
        },
        {
            userID : "son_h__m",
            reviewContent : "감동적이에요",
            movieName :"뉴노멀",
            movieIMG :"img/MoviePoster4.svg",
        },
        {
            userID : "son_h__m",
            reviewContent : "감동적이에요",
            movieName :"뉴노멀",
            movieIMG :"img/MoviePoster4.svg",
        }
    ]

    const [otherData, setOtherData] = useState(data);

    let body ={
        "userID": localStorage.getItem("userID")
    };

    useEffect(() => {
        axios.post("Reviewmoah/mainReview.jsp", body)
        .then(response => {
            const data = response.data;
            setOtherData(data);
            //console.log(response.data);
            //console.log(response.data[0]);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    },[]);


    return (
        <div>
            <Header_home/>
            <MainWrap >
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
           
                
            </MainWrap>
        </div>
    );
}