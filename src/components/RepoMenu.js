import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import useIterator from '../hooks/useIterator';
import RepositoryReadme from './RepositoryReadme';

const RepoMenu = ({ repositories, login, onSelect = (f) => f }) => {
  const [{ name }, previous, next] = useIterator(repositories);

  useEffect(() => {
    if (!name) return;
    onSelect(name);
  }, [name, onSelect]);

  return (
    <>
      <div style={{ display: 'flex' }}>
        <button onClick={previous}>&lt;</button>
        <p>{name}</p>
        <button onClick={next}>&gt;</button>
      </div>
      <RepositoryReadme login={login} repo={name} />
    </>
  );
};

RepoMenu.propTypes = {
  repositories: PropTypes.array,
  login: PropTypes.string,
  onSelect: PropTypes.func,
};

export default RepoMenu;
