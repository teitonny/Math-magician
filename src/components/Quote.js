import quoteCss from './Quote.module.css';

const Quote = () => (
  <div className={quoteCss.mainWrapper}>
    <p className={quoteCss.Wrapper}>
      {' '}
      Mathematics is not about number,
      equation, computation or algorithm.
      Its about understanding.
      <span>- William Paul</span>
    </p>
  </div>
);

export default Quote;
