import React from 'react';
import { data } from './realTestData';
import { LogViewer } from '@patternfly/react-log-viewer';


const BasicLogViewer = () => {

  return (
    <React.Fragment>
      <LogViewer hasLineNumbers={false} height={200}  data={data.data} theme="dark" />
    </React.Fragment>
  );
};

export default BasicLogViewer;