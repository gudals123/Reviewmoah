import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FeedWrap = styled.div`
    width:598px;
    height:266px;
    border-bottom: 1px solid #ccc;
    //border: 1px solid #ccc;
    display: flex;
`;

const ProfileWrap = styled.div`
    width:176px;
    height:266px;
    //border-bottom: 1px solid #ccc;
    //border: 1px solid #ccc;
    display: flex;
    align-items:center;
    justify-content:center;
`;
const ProfileBox =styled.div`
    width: 130px;
    height: 130px;
    //border: 1px solid #ccc;

`;
const ProfileImg =styled.img`
    width: 100%;
    height: 100%;


`;

const ContentWrap = styled.div`
    width:422px;
    height:266px;
    // /border: 1px solid #ccc;
    
`;

const NickNameWrap = styled.div`
    width:422px;
    height:30px;
    margin-top: 60px;
    //border: 1px solid #ccc;
    display: flex;
    
    align-items:center;
`;

const NickNameBox = styled.div`
    width:200px;
    height:30px;
    //border: 1px solid #ccc;
    font-size: 25px;
    font-weight: bold;
`;

const InfoBtn = styled.button`
    width:80px;
    height:25px;
    margin-left: 45px;
    //border: 1px solid #ccc;
    font-size: 12px;
    border-radius: 10px;
    cursor: pointer;
`;

const Job = styled.div`
    margin-top: 30px;
    width:422px;
    height:30px;
    //border: 1px solid #ccc;
    font-size: 12px;
    font-weight: bold;
    display: flex;
    align-items:center;
`;

const Intro = styled.div`
    margin-top: 20px;
    width:422px;
    height:50px;
    //border: 1px solid #ccc;
    font-size: 12px;
`;

const UserProfile = ({ data }) => {

    return (
    <div>
        <FeedWrap>
            <ProfileWrap>
                <ProfileBox>
                    <ProfileImg src="img/Profile-frame1.svg"/>
                </ProfileBox>
            </ProfileWrap>
            <ContentWrap>
                <NickNameWrap>
                    <NickNameBox >
                    es.__.fgos
                    </NickNameBox>
                    <InfoBtn >
                        프로필 편집
                    </InfoBtn>
                </NickNameWrap>
                <Job>
                    정성일 영화감독/영화평론가 아카이브
                </Job>
                <Intro>
                정성일 영화감독/영화평론가 아카이브의 최신 소식을 instagram에서 동시에 업데이트 합니다. 아카이브에 없는 자료에 대한 제보도 함께 받습니다.
                </Intro>
            </ContentWrap>
        </FeedWrap>
    </div>
   );
};
export default UserProfile;