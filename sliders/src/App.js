import Title from './components/Title';
import data from './data';
import { useDebugValue, useEffect, useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { FiChevronLeft } from 'react-icons/fi';
function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    console.log('the index changed, now it is => ' + index);
    const lastIndex = people.length - 1;
    if (index > lastIndex) {
      setIndex(0);
    }
    if (index < 0) {
      setIndex(lastIndex);
    }
  }, [index, people]); // only re-run effect if index changes

  useEffect(() => {
    console.log('initiating the effect timeout');
    const timer = setTimeout(() => {
      console.log('in timout, after 8 secs');
      setIndex(index + 1);
    }, 8000);
    return () => {
      console.log('clearing the timeout');
      clearTimeout(timer);
    };
  });
  return (
    <div className='section'>
      <Title></Title>
      <section className='section-center'>
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;
          let position = '';
          if (personIndex === index) {
            position = 'activeSlide';
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = 'lastSlide';
          }
          if (personIndex === index + 1) {
            position = 'nextSlide';
          }

          return (
            <article key={id} className={position}>
              <img src={image} alt='profile' className='person-img'></img>
              <h4>{name}</h4>
              <p className='title'>{title}</p>
              <p className='text'>{quote}</p>
              <p>{personIndex}</p>
              <FiChevronLeft
                className='prev icon'
                onClick={() => {
                  setIndex(index - 1);
                }}
              />
              <FiChevronRight
                className='next icon'
                onClick={() => {
                  setIndex(index + 1);
                }}
              />
            </article>
          );
        })}
      </section>
    </div>
  );
}

export default App;
