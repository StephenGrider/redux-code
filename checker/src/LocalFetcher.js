import _ from 'lodash';

export default class {
  files = [];

  async read(folder) {
    return new Promise((resolve, reject) => {
      folder
        .webkitGetAsEntry()
        .createReader()
        .readEntries(async entries => {
          await this.collectFiles(entries);
          resolve();
        }, reject);
    });
  }

  collectFiles = entries => {
    const promises = _.flatMap(entries, entry => {
      return new Promise((resolve, reject) => {
        if (entry.isFile) {
          this.files.push(entry);
          return resolve();
        }

        const reader = entry.createReader();
        reader.readEntries(async results => {
          await this.collectFiles(results);
          resolve();
        });
      });
    });

    return Promise.all(promises);
  };

  readContents() {
    const promises = this.files.map(file => {
      return (f => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();

          reader.onloadend = () => {
            f.contents = reader.result;
            resolve();
          };

          f.file(fileBlob => {
            reader.readAsText(fileBlob);
          });
        });
      })(file);
    });

    return Promise.all(promises);
  }
}
