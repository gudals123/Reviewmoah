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
            userName: "qwe",
            userIntro:null
        }
    ];


    const [otherData, setOtherData] = useState(data);
    const [porfile , setporfile] = useState(porfiledata);
   


    useEffect(() => {
        axios.post('/Reviewmoah/mypageAction.jsp', "review") 
            .then((response) => { 

                const data = response.data;
                setOtherData(data);
                //console.log(response.data);
                //console.log(response.data[0]);
            })
            .catch((error) => {
                console.error('Error:', error);
        });
        axios.post('/Reviewmoah/mypageAction.jsp', "profile") 
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
            <Header_mypag/>
            <MainWrap>
                <FeedWrap>
                    <MyProfile data={porfile[0]}/>
                </FeedWrap>
               
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
               {/*
                <FeedWrap>
                    <MyFeed data={otherData[4]}/>
                </FeedWrap>
              */}
            </MainWrap>
        </div>
        
    );
}