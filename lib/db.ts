// This is a mock database using localStorage for persistence across reloads.
// In a real application, you would connect to a proper database.

export interface User {
  id: string;
  name: string;
  email: string;
  passwordHash: string; // In a real app, never store plain text passwords.
}

// Load users from localStorage or initialize an empty array
const loadUsers = (): User[] => {
  try {
    const usersJson = localStorage.getItem('users');
    return usersJson ? JSON.parse(usersJson) : [];
  } catch (e) {
    console.error("Could not load users from localStorage", e);
    return [];
  }
};

// Save users to localStorage
const saveUsers = (users: User[]) => {
  try {
    localStorage.setItem('users', JSON.stringify(users));
  } catch (e) {
    console.error("Could not save users to localStorage", e);
  }
};

let users: User[] = loadUsers();

// Mock database client
export const db = {
  user: {
    findUnique: async ({ where: { email } }: { where: { email: string } }): Promise<User | null> => {
      await new Promise(resolve => setTimeout(resolve, 50));
      const user = users.find(user => user.email === email) || null;
      return user ? { ...user } : null; // Return a copy
    },
    create: async ({ data }: { data: Omit<User, 'id'> }): Promise<User> => {
      await new Promise(resolve => setTimeout(resolve, 50));
      const existingUser = users.find(user => user.email === data.email);
      if (existingUser) {
        throw new Error("User with this email already exists.");
      }
      const newUser = { ...data, id: Date.now().toString() };
      users.push(newUser);
      saveUsers(users);
      return { ...newUser }; // Return a copy
    },
    update: async ({ where: { id }, data }: { where: { id: string }, data: Partial<Omit<User, 'id'>> }): Promise<User> => {
      await new Promise(resolve => setTimeout(resolve, 50));
      const userIndex = users.findIndex(user => user.id === id);
      if (userIndex === -1) {
        throw new Error("User not found.");
      }
      // Check if new email is already taken by another user
      if (data.email) {
          const existingUser = users.find(user => user.email === data.email && user.id !== id);
          if (existingUser) {
              throw new Error("Email is already in use by another account.");
          }
      }

      users[userIndex] = { ...users[userIndex], ...data };
      saveUsers(users);
      return { ...users[userIndex] }; // Return a copy
    }
  },
};