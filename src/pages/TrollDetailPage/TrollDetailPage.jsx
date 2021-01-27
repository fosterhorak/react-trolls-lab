import React from 'react';
import TrollCard from '../../components/TrollCard/TrollCard';
import {useLocation} from 'react-router-dom';

function TrollDetailPage(props) {
  // const { state: {troll} } = useLocation()
  const troll = useLocation().state.troll

  return (
    <>
      <h1>Troll Details</h1>
      <TrollCard
        key={troll._id}
        troll={troll}
      />
    </>
  );
}

export default TrollDetailPage;