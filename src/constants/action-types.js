import auth from './actions/auth';
import basket from './actions/basket';
import favorites from './actions/favorites';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  ...auth,
  ...basket,
  ...favorites,
};
