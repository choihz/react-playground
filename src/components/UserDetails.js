import React from 'react';
import PropTypes from 'prop-types';

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

UserDetails.propTypes = {
  data: PropTypes.object.isRequired,
};

export default UserDetails;
