import { words as ref } from '../references';

const subscribe = cb => {
  const _ref = ref();
  if (!_ref) {
    return;
  }

  _ref.on('value', snap => {
    const items = [];
    snap.forEach(record => {
      const { word, translation, lang } = record.val();
      items.unshift({
        key: record.key,
        word,
        translation,
        lang,
        shouldRemove: false,
      });
    });

    cb(items);
  });
};

export { subscribe };
