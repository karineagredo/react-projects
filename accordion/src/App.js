import CardAccordion from './components/CardAccordion';
import questions from './data';

function App() {
  return (
    <main>
      <div className='container'>
        <h3>Questions and answers</h3>
        <section className='info'>
          {questions.map((question) => {
            return (
              <CardAccordion key={question.id} {...question}></CardAccordion>
            );
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
