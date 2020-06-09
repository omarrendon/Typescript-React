import React, { useEffect } from "react";
import { useParams, StaticRouter } from "react-router-dom";
import useMyStore from "../../zustand";
import UserPost from '../../components/userPost/index'

const [useStore] = useMyStore;

export default function User() {
  const { userId } = useParams();
  const getUserDetail = useStore(state => state.getUserDetail);
  const getUserPost = useStore(state => state.getUserPost);
  const userDetail = useStore(state => state.userDetail);
  const userPost = useStore(state => state.userPost);

 
  
  useEffect(() => {
    (async function() {
      await getUserDetail(userId);
      await getUserPost(userId);
    })();
  }, []);

  const renderPost = () => {
    if( userPost && userPost.length) {
      return userPost.map( (value) => <UserPost key={value.id} {...value}/>);
    }
  };
  return (
    <div>
      <h2>{userDetail?.name}</h2>
      <h3>{userDetail?.email}</h3>

      <h2>POST</h2>
      {renderPost()}
    </div>
  );
}
