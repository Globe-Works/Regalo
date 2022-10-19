import React, { useEffect, useState } from 'react';
import SelectionComponent from '../components/SelectionComponent';
const MainPage = () => {
  const [matchList, setMatchList] = useState([]);
  const [recentlyDeleted, setDeleted] = useState({ giftId: 0 });
  const [recipientDeleted, setRecipientDeleted] = useState({ recipientId: 0 });
  const [giftAdded, setGiftAdded] = useState({gift: null});

  const fetchMatches = async () => {
    try {
      const response = await fetch('/api/recipient');
      const matchData = await response.json();

      const allGifts = await fetch('/api/gift');
      const giftsData = await allGifts.json();
      console.log('Fetching Matches -->', matchData, giftsData);
      const tmpArr = [];
      matchData.forEach((recipient, i) => {
        // giftId, fullName, giftName, url, date, notes
        const { id, fullName, gifts, notes } = recipient;
        tmpArr.push(
          <SelectionComponent
            recipientId={id}
            key={id}
            fullName={fullName}
            gifts={gifts} //[{gifId: 1, giftName: 'Teddy Bear', url: 'https://google.com', notes: '123'}]
            notes={notes}
            setDeleted={setDeleted}
            recentlyDeleted={recentlyDeleted}
            setRecipientDeleted={setRecipientDeleted}
            giftsData = {giftsData}
            setGiftAdded={setGiftAdded}
            giftAdded={giftAdded}
          />,
        );
        setMatchList(tmpArr);
      });
    } catch (err) {
      console.log(`Error inside fetchMatches function ${err}`);
    }
  };

  useEffect(() => {
    try {
      fetchMatches();
    } catch (err) {
      console.log(`Error attempting to fetch match list ${err}`);
    }
  }, [recentlyDeleted, recipientDeleted, giftAdded]);

  return (
    <div className="main-container">
      <h4>Gift Matches</h4>
      <div className="selections-list">{matchList}</div>
    </div>
  );
};

export default MainPage;
