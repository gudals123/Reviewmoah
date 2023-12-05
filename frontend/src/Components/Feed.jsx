import React, { useState ,useEffect} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const FeedWrap = styled.div`
    width:598px;
    height:300px;
    border-bottom: 1px solid #ccc;
    
`;

const UserWrap = styled.div`
    width:598px;
    height:55px;
    //border: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    align-items:center;
`;

const ProfileWrap =styled.div`
    display: flex;

`;

const ProfileBox =styled.div`
    width:55px;
    height:55px;
    //border: 1px solid #ccc;
    display: flex;
    align-items:center;
    justify-content:center;
`;

const NicknameBox =styled.div`
    width:130px;
    height:55px;
    //border: 1px solid #ccc;
    display: flex;
    align-items:center;
`;

const InfoBox =styled.div`
    width:55px;
    height:55px;
    //border: 1px solid #ccc;
    display: flex;
    align-items:center;
    //justify-content:center;
`;

const InfoBtn = styled.button`
    width:55px;
    height:55px;
    border: 0px;
    margin-right:20px;
    background: #FFFFFF;
    cursor: pointer;
    border: 0px;

`;

const Modal = styled.div`
    width:100px;
    height:60px;
    margin-top: 25px;
    border: 1px solid #ccc;

    
`;

const Modal1 = styled.div`
    width:100px;
    height:30px;
    //border: 1px solid #ccc;
    display: flex;
    align-items:center;
    justify-content:center;
    font-size: 12px;
    font-weight: bold;
`;

const Modal2 = styled.div`
    width:100px;
    height:30px;
    border-top: 1px solid #ccc;
    display: flex;
    align-items:center;
    justify-content:center;
    font-size: 12px;
    font-weight: bold;
    text-decoration-line: none;
`;

const ContentWrap = styled.div`
    width:598px;
    height:240px;
    //border: 1px solid #ccc;
    display: flex;
`;

const MoviePosterWrap = styled.div`
    width:189px;
    height:240px;
    //border: 1px solid #ccc;
    display: flex;
    align-items:center;
    justify-content:center;
`;

const Poster = styled.img`
    width: 100%;
    height: 100%;

`;

const ReviewWrap = styled.div`
    width:409px;
    height:240px;
    //border: 1px solid #ccc;
`;

const MovieTitle = styled.div`
    width:409px;
    height:30px;
    margin-top: 5px;
    //border: 1px solid #ccc;
    display: flex;
    align-items:center;
    font-size: 17px;
    font-weight: bold;
`;

const Review = styled.div`
    width:409px;
    height:30px;
    margin-top: 5px;
    //border: 1px solid #ccc;
    display: flex;
    align-items:center;
    font-size: 14px;
    font-weight: bold;
`;

const ReviewContent = styled.div`
    width:370px;
    height:60px;
    margin-top: 5px;
    margin-left: 35px;
    //border: 1px solid #ccc;
    font-size: 14px;
`;

const AddReview = styled.div`
    width:409px;
    height:30px;
    //border: 1px solid #ccc;
    display: flex;
    align-items:center;
    font-size: 14px;
    font-weight: bold;
`;
const AddReviewContent = styled.div`
    width:370px;
    height:60px;
    margin-top: 5px;
    margin-left: 35px;
    //border: 1px solid #ccc;
    font-size: 14px;
`;



const Feed = (data) => {

    const [followingid, setFollowingID] = useState('');
    const [reviewcrawl, setReviewCrawl] = useState('');
    const [reviewplus, setReviewPlus] = useState('');
    const [moviename, setMovieName] = useState('');
    const [movieimg, setMovieImg] = useState('');

    useEffect(() => {
        const ddd = data.data
        console.log(data);
        setFollowingID(ddd.followingID);
        //console.log(followingid);
        setReviewCrawl(ddd.reviewCrawl);
        setReviewPlus(ddd.reviewPlus);
        setMovieName(ddd.movieName);
        setMovieImg(ddd.movieImg);
    },[]);

    let [modal,setModal] = useState(false);

    return (
    <div>
        <FeedWrap>
            <UserWrap>
                <Link to ="/Userpage" style={{ textDecoration: "none", color : "black" }}>
                    <ProfileWrap >
                        <ProfileBox>
                            <img src="img/Profile-frame.svg"/>
                        </ProfileBox>
                        <NicknameBox>
                            {followingid}
                        </NicknameBox>
                    </ProfileWrap>
                </Link>
                <InfoBox>
                    <InfoBtn onClick={()=>{setModal(!modal)}}>
                        <img src="img/Info.svg"/>
                    </InfoBtn>
                    {modal === true ? <Modal>
                        <Modal1>팔로우</Modal1>
                        <Link to ="/Userpage"  style={{ textDecoration: "none", color : "black" }}>
                            <Modal2>이 계정 정보</Modal2>
                        </Link>
                        </Modal>: null}
                </InfoBox>
            </UserWrap>
            <ContentWrap>
                <MoviePosterWrap>
                    <Poster src={movieimg}/>
                </MoviePosterWrap>
                <ReviewWrap>
                    <MovieTitle>
                        {moviename}
                    </MovieTitle>
                    <Review>
                        CGV 리뷰
                    </Review>
                    <ReviewContent>
                        {reviewcrawl}
                    </ReviewContent>
                    <AddReview>
                        추가 리뷰
                    </AddReview>
                    <AddReviewContent>
                        {reviewplus}
                    </AddReviewContent>

                </ReviewWrap>
            </ContentWrap>
        </FeedWrap> 
    </div>
   );
};
export default Feed;