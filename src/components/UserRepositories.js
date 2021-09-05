import React from 'react';
import PropTypes from 'prop-types';
import Fetch from './Fetch';
import RepoMenu from './RepoMenu';

const UserRepositories = ({ login, onSelect = (f) => f }) => {
  return (
    <Fetch
      uri={`https://api.github.com/users/${login}/repos`}
      renderSuccess={({ data }) => (
        <RepoMenu repositories={data} login={login} onSelect={onSelect} />
      )}
    />
  );
};

UserRepositories.propTypes = {
  login: PropTypes.string,
  onSelect: PropTypes.func,
};

export default UserRepositories;
