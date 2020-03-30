import _ from 'lodash';
import axios from 'axios';

// Don't care that secret is exposed, these are used to circumvent
// OAuth's API rate limiting and have no permissions assocated with them
const clientId = 'ad86d59410536a7ebf24';
const clientSecret = '5a582a7121af9826d8a5f10ffa9a028ff308efcb';

export default class {
  constructor(path, branch) {
    this.rootPath = path;
    this.branch = branch;
  }
  files = [];

  async fetchFiles(path = this.rootPath) {
    const response = await axios.get(
      `https://api.github.com/repos/stephengrider/reduxcode/contents/${path}?ref=${
        this.branch
      }&client_id=${clientId}&client_secret=${clientSecret}`,
      {
        auth: { username: 'stephengrider' }
      }
    );

    return await this._fetchFiles(response.data, path);
  }

  async _fetchFiles(entries, path) {
    const promises = _.flatMap(entries, entry => {
      return new Promise(async (resolve, reject) => {
        if (entry.type === 'file') {
          entry.path = entry.path.replace(this.rootPath, '');
          this.files.push(entry);
          resolve();
          return;
        }

        await this.fetchFiles(entry.path);
        resolve();
      });
    });

    return Promise.all(promises);
  }

  fetchFileContents() {
    const promises = this.files.map(async file => {
      const response = await axios.get(file.download_url);

      file.contents = response.data;
    });

    return Promise.all(promises);
  }
}
