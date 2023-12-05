import React, {useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Header_home from '../Components/Header_home';

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
    height:540px;
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
const MovietitleBox = styled.div`
    display: flex;
    width:700px;
    height:40px;
    margin-top:49px;
    //border-bottom: 1px solid #ccc;
`;
const P = styled.p`
    margin:0px;
    margin-left:15px;
    width:79px;
    height:40px;
    padding: 0px;
    font-size: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const TitleInput = styled.input`
    width:210px;
    height:20px;
    padding: 10px;
    font-size: 18px;
    border: 1px solid #ccc;
    align-items: center;
`;

const ReviewBox = styled.div`
    display: flex;
    width:700px;
    height:280px;
    margin-top:22px;
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


export default function ReviewAdd() {
    
    const [tiltle, setTiltle] = useState('');
    const [review, setReview] = useState('');

    const handleTiltleChange = (e) => { 
        setTiltle(e.target.value);
    };
    const handleReviewChange = (e) => { 
        setReview(e.target.value);
    };

    const handleAdd = () => { 
        if (!tiltle || !review) { 

          return;
        }
        console.log(tiltle);
        console.log(review);
       let body ={
          "movieName": tiltle,
          "reviewContent": review
        }; 
        
        axios.post('/Reviewmoah/writeAction.jsp', body) 
            .then((response) => { 
            console.log(response);
            
            console.log("업로드 성공");
            window.location.replace("/Mypage");
          })
          .catch(() => {

          });
      };
    return (
        <div>
            <Header_home/>
            <MainWrap>
                <AddWrap>
                    <Title>리뷰 작성</Title>
                    <MovietitleBox>
                        <P>영화 제목</P>
                        <TitleInput 
                        type="text"
                        value={tiltle} 
                        onChange={handleTiltleChange}/>
                    </MovietitleBox>
                    <ReviewBox>
                        <P>리뷰</P>
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