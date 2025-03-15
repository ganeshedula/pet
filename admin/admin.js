// admin/admin.js
document.addEventListener('DOMContentLoaded', () => {
    const userList = document.getElementById('userList');
    const adminPetList = document.getElementById('adminPetList');
  
    // Load and display users
    loadUsers();
  
    // Load and display pets
    loadPets();
  });
  
  function loadUsers() {
    const userList = document.getElementById('userList');
    let users = [];
  
    try {
      // Safely parse users from localStorage
      users = JSON.parse(localStorage.getItem('user')) || [];
    } catch (error) {
      console.error('Error parsing users from localStorage:', error);
      userList.innerHTML = '<li>Error loading users. Please try again later.</li>';
      return;
    }
  
    if (users.length === 0) {
      userList.innerHTML = '<li>No users found.</li>';
    } else {
      users.forEach((user, index) => {
        const userItem = document.createElement('li');
        userItem.className = 'user-item';
        userItem.innerHTML = `
          <span>Name: ${user.name}, Email: ${user.email}</span>
          <button onclick="deleteUser(${index})">Delete</button>
        `;
        userList.appendChild(userItem);
      });
    }
  }
  
  function loadPets() {
    const adminPetList = document.getElementById('adminPetList');
    let pets = [];
  
    try {
      // Safely parse pets from localStorage
      pets = JSON.parse(localStorage.getItem('pets')) || [];
    } catch (error) {
      console.error('Error parsing pets from localStorage:', error);
      adminPetList.innerHTML = '<li>Error loading pets. Please try again later.</li>';
      return;
    }
  
    if (pets.length === 0) {
      adminPetList.innerHTML = '<li>No pets listed.</li>';
    } else {
      pets.forEach((pet, index) => {
        const petItem = document.createElement('li');
        petItem.className = 'pet-item';
        petItem.innerHTML = `
          <span>Name: ${pet.petName}, Type: ${pet.petType}</span>
          <button onclick="deletePet(${index})">Delete</button>
        `;
        adminPetList.appendChild(petItem);
      });
    }
  }
  
  function deleteUser(index) {
    let users = [];
  
    try {
      // Safely parse users from localStorage
      users = JSON.parse(localStorage.getItem('user')) || [];
    } catch (error) {
      console.error('Error parsing users from localStorage:', error);
      alert('Error deleting user. Please try again later.');
      return;
    }
  
    // Check if index is valid
    if (index < 0 || index >= users.length) {
      alert('Invalid user selection.');
      return;
    }
  
    // Remove the user
    users.splice(index, 1);
    localStorage.setItem('user', JSON.stringify(users));
  
    // Reload the user list
    loadUsers();
    alert('User deleted successfully!');
  }
  
  function deletePet(index) {
    let pets = [];
  
    try {
      // Safely parse pets from localStorage
      pets = JSON.parse(localStorage.getItem('pets')) || [];
    } catch (error) {
      console.error('Error parsing pets from localStorage:', error);
      alert('Error deleting pet. Please try again later.');
      return;
    }
  
    // Check if index is valid
    if (index < 0 || index >= pets.length) {
      alert('Invalid pet selection.');
      return;
    }
  
    // Remove the pet
    pets.splice(index, 1);
    localStorage.setItem('pets', JSON.stringify(pets));
  
    // Reload the pet list
    loadPets();
    alert('Pet deleted successfully!');
  }