import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHttpPost, selectData, selectLoading, selectError } from '../redux/dataSlice.js';

const BaseComponent = (url) => {
  const frames = useSelector((state) => state.bowling.frames);
  const [responseData, setResponseData] = useState(null);
  const dispatch = useDispatch();
  const data = useSelector(selectData);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const requestPostData = {
    title: 'Bowling calculator',
    frames: { frames }
  };
  useEffect(() => {
    console.log(requestPostData);
    dispatch(fetchHttpPost(requestPostData, url));
  }, [dispatch, url, frames]);

  useEffect(() => {
    setResponseData(data);
  }, [data]);

  let totalScore = responseData ? responseData.totalScore : null;
  console.log('BaseComponent totalScore: ', totalScore);

  const boxStyle = {
    width: '200px',
    height: '50px',
    backgroundColor: 'red'
  };

  if (loading) {
    return <div style={boxStyle}>Loading...</div>;
  }

  if (error) {
    return <div style={boxStyle}>Error: {error}</div>;
  }

  return (
    <div style={boxStyle}>
      <h1>Data</h1>
    </div>
  );
};

export default BaseComponent;
