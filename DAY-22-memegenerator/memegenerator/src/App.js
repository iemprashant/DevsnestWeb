import './App.css';
import Layout from './Components/Layout';
import React, { useState, useEffect } from 'react';
import MemeTemplate from './Components/MemeTemplate';
import Spinner from './Components/Spinner';
import MemePage from './Components/MemePage';
function App() {
  const [memes, setmemes] = useState([]);
  const [loading, setloading] = useState(false);
  const [showmeme, setshowmeme] = useState(null);
  useEffect(() => {
    const fecthmemes = async () => {
      setloading(true);
      const res = await fetch('https://api.imgflip.com/get_memes');
      const data = await res.json();
      setmemes(data.data.memes);
      setloading(false);
    };
    fecthmemes();
  }, []);
  return (
    <>
      <Layout>
        {loading && <Spinner />}
        {!loading &&
          (showmeme === null ? (
            <MemeTemplate memes={memes} setshowmeme={setshowmeme} />
          ) : (
            <MemePage showmeme={showmeme} />
          ))}
      </Layout>
    </>
  );
}

export default App;
