import React from 'react';

class SearchBar extends React.Component {
  state = { url: '' };

  render() {
    return (
      <form>
        <input
          value={this.state.url}
          onChange={e => this.setState({ url: e.target.value })}
        />
      </form>
    );
  }
}

export default SearchBar;
