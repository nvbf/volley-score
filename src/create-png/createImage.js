const repng = require('repng');
const FakePage = require('../../components/scoreboard/FakePage');
const fs = require('fs');

async function createImage(matchId) {
  const options = {
    width: 512,
    height: 512,
  };

  const result = repng(FakePage, options);
  return result
    .then((stream) => {
      const writeStream = fs.createWriteStream(`${matchId}.png`);
      stream.pipe(writeStream).on('finish', () => {
        console.log('Done');
        writeStream.end();
        stream.destroy();
      });
      // .close();
    })
    .catch((err) => {
      console.log('ERROR');
      console.log(err);
    });
}

createImage('test');
