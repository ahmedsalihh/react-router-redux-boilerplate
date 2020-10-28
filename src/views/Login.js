import { connect } from 'react-redux';
import * as authActions from '../actions/authActions';

const Login = ({ login }) => {
  return (
    <div>
      <h2>Login</h2>
      <button onClick={() => login()}>Login</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    login: () => dispatch(authActions.login()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
