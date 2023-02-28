import quoteCss from './Quote.module.css';

const Quote = () => (
  <div className={quoteCss.mainWrapper}>
    <p>
      {' '}
      Mathematics is not about number,
      equation, computation or algorithm.
      Its about understanding - William Paul
    </p>
  </div>
);

export default Quote;
