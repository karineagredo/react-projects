import { useState } from 'react';
function App() {
  const [person, setPerson] = useState({ name: '', surname: '', email: '' });
  const [participants, setParticipants] = useState([
    { name: 'karine', surname: 'agredo', email: 'karine@gmail.com' },
  ]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, surname, email } = person;
    if (name && surname && email) {
      setParticipants([...participants, person]);
      setPerson({ name: '', surname: '', email: '' });
    }
  };
  const handleChange = (e) => {
    const inputName = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [inputName]: value });
  };
  return (
    <main>
      <section className='section'>
        <div>
          <h2 className='title'>Sign up</h2>
          <div className='underline'></div>
        </div>
        <article>
          <form>
            <div className='form-inputs'>
              <div className='form-control'>
                <label>Name :</label>
                <input
                  onChange={handleChange}
                  type='text'
                  id='name'
                  value={person.name}
                  name='name'
                ></input>
              </div>

              <div className='form-control'>
                <label>Last name :</label>
                <input
                  type='text'
                  id='surname'
                  value={person.surname}
                  name='surname'
                  onChange={handleChange}
                ></input>
              </div>

              <div className='form-control'>
                <label>Email :</label>
                <input
                  type='text'
                  id='email'
                  value={person.email}
                  name='email'
                  onChange={handleChange}
                ></input>
              </div>
            </div>

            <button type='submit' className='btn' onClick={handleSubmit}>
              Sign me
            </button>
          </form>
        </article>
        {participants.map((participant) => {
          const { name, surname, email } = participant;
          return (
            <div key={email} className='current-user'>
              <p>{name}</p>
              <p>{surname}</p>
              <p>{email}</p>
            </div>
          );
        })}
      </section>
    </main>
  );
}

export default App;
