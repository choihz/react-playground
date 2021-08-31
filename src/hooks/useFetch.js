import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const useFetch = (uri) => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!uri) return;

    fetch(uri)
      .then((data) => data.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, [uri]);

  return {
    loading,
    data,
    error,
  };
};

useFetch.propTypes = {
  uri: PropTypes.string,
};

export default useFetch;
