const localStorage = window.localStorage;

export const checkUser = (username, password) => {
  const users = JSON.parse(localStorage.getItem("users"));
  if (users) {
    const foundUser = users.find((user) => user.username === username);
    if (foundUser) {
      if (foundUser.password === password) {
        return true;
      }
    }
  }
  return false;
};

export const checkUserExists = (username) => {
  const users = JSON.parse(localStorage.getItem("users"));
  if (users) {
    const foundUser = users.find((user) => user.username === username);
    if (foundUser) {
      return true;
    }
  }
  return false;
};

export const saveUser = (username, password) => {
  const users = getUsers();
  let newUsers = [];
  if (users) {
    newUsers = users;
  }
  if (!checkUserExists(username)) {
    newUsers.push({ username, password });
    localStorage.setItem("users", JSON.stringify(newUsers));
    return true;
  } else {
    return false;
  }
};

export const getUsers = () => {
  const users = JSON.parse(localStorage.getItem("users"));
  if (users) {
    return users;
  } else {
    return undefined;
  }
};
