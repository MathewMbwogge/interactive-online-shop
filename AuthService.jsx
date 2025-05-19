let mockUsers = []; // Simulated user database
let loggedInUser = null;

export const register = (username, email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const exists = mockUsers.find(
        (user) => user.username === username || user.email === email
      );
      if (exists) {
        reject("Username or email already exists.");
      } else {
        mockUsers.push({ username, email, password });
        resolve("Registration successful!");
      }
    }, 500); // Simulate network delay
  });
};

export const login = (usernameOrEmail, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const mockUsers = [
        { username: "testuser", email: "testuser@example.com", password: "test1234" },
      ];
      const user = mockUsers.find(
        (u) =>
          (u.username === usernameOrEmail || u.email === usernameOrEmail) &&
          u.password === password
      );
      if (user) {
        resolve(user); // Login successful
      } else {
        reject("Invalid username/email or password"); // Login failed
      }
    }, 500); // Simulating network delay
  });
};

export const logout = () => {
  loggedInUser = null;
  localStorage.removeItem("user");
};

export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};



