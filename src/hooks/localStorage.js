

export const setUser = (user) => {
  localStorage.setItem('user', JSON.stringify(user));

  //Json vitra encode garerw rakhnu parxa
}

export const getUserFromLocal = () => {
  const user = localStorage.getItem('user');
  return user === null ? null : JSON.parse(user);
}


export const removeUserFromLocal = () => {
  localStorage.clear();
}


//yo handle garna hamle slice banaunu parxa -- userSice.js


export const setCarts = (carts) => {
  localStorage.setItem('carts', JSON.stringify(carts));
}

export const getCartsFromLocal = () => {
  const carts = localStorage.getItem('carts');
  return carts === null ? [] : JSON.parse(carts)
}

export const removeCartsFromLocal = () => {
  localStorage.removeItem('carts');
}