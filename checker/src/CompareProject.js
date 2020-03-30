import React from 'react';
import CompareFile from './CompareFile';

class Compare extends React.Component {
  render() {
    return this.props.localFetcher.files.map(localFile => {
      const githubFile = this.props.githubFetcher.files.find(gh => {
        return localFile.fullPath.replace('/src', '') === gh.path;
      });

      return (
        <CompareFile
          key={localFile.fullPath}
          local={localFile}
          github={githubFile}
        />
      );
    });
  }
}

export default Compare;
