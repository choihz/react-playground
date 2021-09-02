import React from 'react';
import PropTypes from 'prop-types';
import Fetch from './Fetch';
import UserDetails from './UserDetails';

const GitHubUser = ({ login }) => {
  return (
    <Fetch
      uri={`https://api.github.com/users/${login}`}
      renderSuccess={UserDetails}
      renderError={(error) => {
        return <p>Something went wrong... {error.message}</p>;
      }}
    />
  );
};

GitHubUser.propTypes = {
  login: PropTypes.string,
};

export default GitHubUser;
