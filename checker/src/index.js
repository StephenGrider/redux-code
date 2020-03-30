import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';
import Upload from './Upload';
import BranchSelector from './BranchSelector';
import LocalFetcher from './LocalFetcher';
import GithubFetcher from './GithubFetcher';
import CompareProject from './CompareProject';

class App extends React.Component {
  state = { localFetcher: null, branch: null };

  onReceivedFiles = async srcFolder => {
    const localFetcher = new LocalFetcher();

    await localFetcher.read(_.first(srcFolder));
    await localFetcher.readContents();

    this.setState({ localFetcher });
  };

  onBranchChange = ({ value: { path, branch } }) => {
    this.setState({ branch, path });
  };

  onSubmit = async event => {
    event.preventDefault();

    const githubFetcher = new GithubFetcher(this.state.path, this.state.branch);

    await githubFetcher.fetchFiles();
    await githubFetcher.fetchFileContents();

    this.setState({ githubFetcher });
  };

  renderForm() {
    return (
      <form onSubmit={this.onSubmit}>
        <div>Select the section you want to compare against</div>
        <BranchSelector onChange={this.onBranchChange} />
        <button>Compare!</button>
      </form>
    );
  }

  render() {
    if (!this.state.localFetcher) {
      return <Upload onReceivedFiles={this.onReceivedFiles} />;
    } else if (!this.state.githubFetcher) {
      return this.renderForm();
    } else {
      return (
        <CompareProject
          githubFetcher={this.state.githubFetcher}
          localFetcher={this.state.localFetcher}
        />
      );
    }
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
