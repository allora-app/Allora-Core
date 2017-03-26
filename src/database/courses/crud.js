import { courses as ref } from '../references';

const add = name => {
  ref().push({
    name,
    added: Date.now(),
  });
};

const remove = key => {
  ref().child(key).remove();
};

export { add, remove };
