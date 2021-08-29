import React from 'react';

const Home = ({ setLogin, login, loading, setLoading }) => {
  const btnclickhandler = () => {
    setLoading(true);
    setTimeout(() => {
      setLogin(!login);
      setLoading(false);
    }, 1000);
  };
  return (
    <>
      <div class="container d-flex flex-column justify-content-center align-items-center">
        <h2 class="p-2">Home Page</h2>
        <h3 class="p-2">If not logged in cant see and access, Profile & Dashboard</h3>
        <button class="px-4 py-2 text-light bg-primary btn" onClick={() => btnclickhandler()}>{login ? "Logout" : "Login"}</button>
      </div>

    </>
  );
};

export default Home;
