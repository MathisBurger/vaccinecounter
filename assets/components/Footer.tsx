import '../styles/footer.scss';

const Footer = () => {
  const onCreditsClick = () => {
    window.location.href = 'https://github.com/MathisBurger';
  };
  const onGithubClick = () => {
    window.location.href = 'https://github.com/MathisBurger/vaccinecounter';
  };

  return (
    <div className="footer">
      <div className="copyright">©2021 MIT Licensed</div>
      <div />
      <div className="link" onClick={onCreditsClick}>
        Credits
      </div>
      <div className="link" onClick={onGithubClick}>
        GitHub
      </div>
    </div>
  );
};

export default Footer;
