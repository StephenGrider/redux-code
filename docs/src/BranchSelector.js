import React from 'react';
import Select from 'react-select';

const BRANCHES = [
  {
    value: { branch: '213-forms', path: 'streams/client/src' },
    label: 'Forms with Redux Form'
  }
];

class BranchSelector extends React.Component {
  render() {
    return <Select options={BRANCHES} onChange={this.props.onChange} />;
  }
}

export default BranchSelector;
