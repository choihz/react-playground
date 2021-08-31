import React from 'react';
import PropTypes from 'prop-types';
import Fetch from './Fetch';

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

const UserDetails = ({ data }) => {
  return (
    <div className="gitHubUser">
      <img src={data.avatar_url} alt={data.login} style={{ width: 200 }} />
      <div>
        <h1>{data.login}</h1>
        {data.name && <p>{data.name}</p>}
        {data.location && <p>{data.location}</p>}
      </div>
    </div>
  );
};

GitHubUser.propTypes = {
  login: PropTypes.string,
};

UserDetails.propTypes = {
  data: PropTypes.object,
};

export default GitHubUser;
