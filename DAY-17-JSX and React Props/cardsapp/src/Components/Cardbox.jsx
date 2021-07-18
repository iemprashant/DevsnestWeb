import React from 'react';
import Card from './Card';
const Cardbox = () => {
  var styleforcardsbox = {
    height: '100%',
    width: '75vw',
    display: 'flex',
    flexDirection: 'column',
    padding: '1rem',
  };
  var books = [
    {
      book: 'The Monk Who Sold His Ferrari',
      author: 'Robin Sharma',
    },
    {
      book: 'The 7 Habits of Highly Effective People',
      author: 'R. Stephen Covey',
    },
    {
      book: 'The Power Of Now',
      author: 'Eckhart Tolle ',
    },
    {
      book: '21 Lessons for the 21st Century',
      author: 'Yuval Noah Harari ',
    },
    {
      book: 'Atomic Habits',
      author: 'James Clear',
    },
    {
      book: 'The Kite Runner',
      author: 'Khaled Hosseini',
    },
    {
      book: 'Rich Dad Poor Dad',
      author: 'Robert T. Kiyosaki',
    },
    {
      book: 'Think Like a Monk',
      author: 'Jay Shetty ',
    },
    {
      book: "Life's Amazing Secrets",
      author: 'Gaur Gopal Das',
    },
    {
      book: 'Pitch Anything',
      author: 'Oren Klaff',
    },
    {
      book: 'How To Win Friends And Influence People',
      author: 'Dale Carnegie',
    },
    {
      book: 'The Magic of Thinking Big',
      author: 'David J Schwartz',
    },
    {
      book: 'Everything Is F*cked',
      author: 'Mark Manson',
    },
    {
      book: 'Educated',
      author: 'Tara Westover',
    },
    {
      book: 'A Thousand Splendid Suns',
      author: 'Khaled Hosseini ',
    },
    {
      book: 'The Bridges Of Madison County',
      author: 'Robert James Waller',
    },
    {
      book: 'Digital Minimalism',
      author: ' Cal Newport',
    },
  ];
  return (
    <div style={styleforcardsbox}>
      {books.map((item) => (
        <Card book={item.book} author={item.author} />
      ))}
    </div>
  );
};

export default Cardbox;
