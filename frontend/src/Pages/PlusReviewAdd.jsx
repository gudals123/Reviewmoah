import React, {useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Header_mypag from '../Components/Header_mypag';

const MainWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width:100vw;
    height:90vh;
    overflow: hidden;zoom: 1;position:relative;z-index:1;
`;


const AddWrap = styled.div`
    width:700px;
    height:500px;
    border: 1px solid #ccc;
    border-radius: 30px;
`;

const Title = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width:700px;
    height:66px;
    border-bottom: 1px solid #ccc;
    font-size: 20px;
    font-weight: bold;
`;

const ReviewBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width:700px;
    height:280px;
    margin-top:46px;
    //border-bottom: 1px solid #ccc;
`;

const ReviewInput = styled.textarea`
    width:500px;
    height: 280px;
    border: 1px solid #ccc;
    font-size: 17px;
    maxlenth: 100;
`;

const Button = styled.button`
    width:50px;
    height: 40px;
    //padding: 15px;
    margin-top: 29px;
    margin-left: 617px;
    border-radius: 5px;
    font-size: 16px;    
    color: #2995F6;
    background: #FFFFFF;
    border: 0px;
    font-weight: bold;
    cursor: pointer;
`;


export default function PlusReviewAdd() {
    
    const [review, setReview] = useState('');


    const handleReviewChange = (e) => { 
        setReview(e.target.value);
    };

    const handleAdd = () => { 
        window.location.replace("/Mypage");
        {/*
        if (!review) { 

          return;
        }

        console.log(review);
        let body ={
          "password": review
        };
        
        axios.get('test/HelloWorldServlet', body) 
            .then((response) => { 
            console.log(response);
            window.location.replace("/Mypage");


    
          })
          .catch(() => {

          });*/}
      };


    return (
        <div>
            <Header_mypag/>
            <MainWrap>
                <AddWrap>
                    <Title>추가 리뷰 작성</Title>
                    <ReviewBox>
                        <ReviewInput 
                                value={review} 
                                onChange={handleReviewChange}/>
                    </ReviewBox>
                    <Button onClick={handleAdd}>게시</Button>

                </AddWrap>
            </MainWrap>

        </div>

    );


}