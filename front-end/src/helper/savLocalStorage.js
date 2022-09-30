const savLocalStorage = (key, item) => {
  localStorage.setItem(key, JSON.stringify(item));
};

export default savLocalStorage;
