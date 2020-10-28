import { connect } from 'react-redux';

import * as authActions from '../actions/authActions';

const Secret = ({ logout }) => {
  return (
    <div>
      <h2>Secret</h2>
      <button onClick={() => logout()}>Logout</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(authActions.logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Secret);
