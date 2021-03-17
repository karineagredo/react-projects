import logo from './logo.svg';
import Values from 'values.js';
import { useEffect, useState } from 'react';

const LIGTH_GREEN = '#9CB2A5';

function App() {
  const [color, setColor] = useState(LIGTH_GREEN);
  const [list, setList] = useState([]); // show initial color
  const [error, setError] = useState('');
  let colorValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      setError(''); // TODO: listen to onchange to remove the red border dynamically while user is entering input
      colorValues = new Values(color).all(10);
      setList(colorValues);
    } catch (e) {
      setError(e.message);
    }
  };
  useEffect(() => {
    colorValues = new Values(color).all(10);
    setList(colorValues);
  }, []);
  return (
    <>
      <section className='container'>
        <h1>Amazing color generator</h1>
        <form onSubmit={handleSubmit} className='form'>
          <p>Enter a hex code below and we will create shades and tints</p>
          <input
            className={error ? 'input-error' : null}
            type='text'
            value={color}
            placeholder='#9CB2A5'
            onChange={(e) => setColor(e.target.value)}
          ></input>
          <button type='submit' className='btn'>
            Generate
          </button>
          {error && <p className='error'>{error}</p>}
        </form>
      </section>
      <section className='container'>
        <h4>Shades and tints</h4>

        <article className='colorsContainer'>
          {list.map(({ hex, weight }, index) => {
            const colorHex = `#${hex}`;
            return (
              <div
                onClick={() => navigator.clipboard.writeText(colorHex)}
                className={`color ${index > 10 && 'color-light'}`}
                style={{ background: colorHex }}
                key={hex}
              >
                {
                  <p
                    style={{ cursor: 'pointer' }}
                    onMouseEnter={(e) =>
                      e.target.innerText === colorHex
                        ? (e.target.innerText = 'copy')
                        : colorHex
                    }
                    onMouseLeave={(e) => (e.target.innerText = colorHex)}
                  >
                    {colorHex}
                  </p>
                }
                <p> {`${weight}%`}</p>
              </div>
            );
          })}
        </article>
      </section>
    </>
  );
}

export default App;
