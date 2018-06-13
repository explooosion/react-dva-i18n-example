import React from 'react';
import { connect } from 'dva';

import Example from '../components/Example'

function IndexPage() {
  return (
    <div>
      <Example />
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
