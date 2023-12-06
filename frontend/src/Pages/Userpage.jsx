import React, {useState, useEffect} from 'react';
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
    ];

    const porfiledata=[
        {
            userName: "es.__.fgos",
            userIntro:null
        }
    ];

    const [otherData, setOtherData] = useState(data);
    const [porfile , setporfile] = useState(porfiledata);
   
    useEffect(() => {
        axios.post('/Reviewmoah/yourpageAction.jsp', localStorage.getItem("yourID")+","+"review") 
            .then((response) => { 

                const data = response.data;
                setOtherData(data);
                console.log(response.data);
                //console.log(response.data[0]);
            })
            .catch((error) => {
                console.error('Error:', error);
        });
        axios.post('/Reviewmoah/yourpageAction.jsp', localStorage.getItem("yourID")+","+"profile") 
            .then((response) => { 

                const porfiledata = response.data;
                setporfile(porfiledata);
                console.log(response.data);
                //console.log(response.data[0]);
            })
            .catch((error) => {
                console.error('Error:', error);
        });
    },[]);


    return (
        <div>
            <Header_userpag/>
            <MainWrap>
                <FeedWrap>
                    <UserProfile data={porfile[0]}/>
                </FeedWrap>               
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
                     {/*
                <FeedWrap>
                    <Feed data={otherData[4]}/>
                </FeedWrap>
                   */}

            </MainWrap>
        </div>
    );
}