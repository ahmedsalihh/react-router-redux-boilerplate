import { push } from 'connected-react-router';
import { connect } from 'react-redux';

const About = ({ goToHome }) => {
  return (
    <div>
      <h2>About</h2>
      <button onClick={() => goToHome()}> to home</button>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    goToHome: () => dispatch(push('/')),
  };
};

export default connect(null, mapDispatchToProps)(About);
