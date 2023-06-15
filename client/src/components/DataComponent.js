import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, selectData, selectLoading, selectError } from '../redux/dataSlice.js';

const DataComponent = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectData);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Data</h1>
      {data}
      {/* // &&<pre>{JSON.stringify(data, null, 2)}</pre> */}
    </div>
  );
};

export default DataComponent;
