import { words as ref } from '../references';

const getRandom = () => {
  let result;

  ref().on('value', snap => {
    let i = 0;
    const rand = Math.floor(Math.random() * snap.numChildren());

    snap.forEach(record => {
      if (i === rand) {
        const { word, translation, lang } = record.val();
        result = {
          key: record.key,
          word,
          translation,
          lang,
        };
      }

      i++;
    });
  });

  return result;
};

export { getRandom };
