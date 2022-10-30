import React from 'react';
import PropTypes from 'prop-types';
import { Vortex } from 'react-loader-spinner';

function Loader({ isLoader }) {
  return (
    <Vortex
      visible={isLoader}
      height="80"
      width="80"
      ariaLabel="vortex-loading"
      colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
    />
  );
}

Loader.propTypes = { isLoader: PropTypes.bool.isRequired };

export default Loader;
