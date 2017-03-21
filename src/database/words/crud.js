import { words as ref } from '../references';

const add = ({ word = '', translation = '', lang }) => {
  ref().push({
    word,
    translation,
    lang,
    added: Date.now(),
  });
};

const update = (key, { word, translation, lang }) => {
  ref().child(key).update({
    word,
    translation,
    lang,
    updated: Date.now(),
  });
};

const remove = key => {
  ref().child(key).remove();
};

export { add, update, remove };
