const localStorageHelper = () => {
  // insert into localStorage
  const set = (key, value) => {
    if (checkifSupport()) {
      try {
        window.localStorage.setItem(key, value);
      } catch (e) {
        throw new Error('Exceeded Storage Quota');
      }
    } else {
      throw new Error('Not supported.');
    }
  };
  const get = (key) => {
    try {
      key;
      const data = window.localStorage.getItem(key);
      if (data && typeof data === 'object') {
        return JSON.parse(data);
      } else {
        return data;
      }
    } catch (e) {
      return null;
    }
  };

  const remove = (key) => {
    try {
      window.localStorage.removeItem(key);
      if (window.localStorage.length == 0) {
        clearAll();
      }
      return true;
    } catch (e) {
      return false;
    } finally {
      if (get(key)) {
        delete window.localStorage[key];
        if (window.localStorage.length == 0) {
          clearAll();
        }
      }
    }
  };
  const clearAll = () => {
    try {
      window.localStorage.clear();
      return true;
    } catch (e) {
      return false;
    }
  };
  const checkifSupport = () => {
    try {
      return 'localStorage' in window && window['localStorage'] !== null;
    } catch (e) {
      return false;
    }
  };
  return {
    get,
    set,
    clearAll,
    remove,
  };
};

export default localStorageHelper();
