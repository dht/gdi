const fs = require('fs-extra');

const clearDir = () => {
  fs.emptyDirSync('./videos');
};

module.exports = {
  clearDir,
};
