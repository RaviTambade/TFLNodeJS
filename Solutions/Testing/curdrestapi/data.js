let users = [];
let idCounter = 1;

module.exports = {
  getAll: () => users,
  getById: (id) => users.find((u) => u.id === id),
  create: (user) => {
    const newUser = { id: idCounter++, ...user };
    users.push(newUser);
    return newUser;
  },
  update: (id, updatedData) => {
    const index = users.findIndex((u) => u.id === id);
    if (index === -1) return null;
    users[index] = { ...users[index], ...updatedData };
    return users[index];
  },
  remove: (id) => {
    const index = users.findIndex((u) => u.id === id);
    if (index === -1) return false;
    users.splice(index, 1);
    return true;
  },
  reset: () => {
    users = [];
    idCounter = 1;
  },
};
