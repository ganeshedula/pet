// seller/seller.js
document.getElementById('petForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const petName = document.getElementById('petName').value;
    const petType = document.getElementById('petType').value;
    const petDescription = document.getElementById('petDescription').value;
    const petImage = document.getElementById('petImage').files[0];
  
    // Example: Save pet data (replace with backend API call)
    const pet = { petName, petType, petDescription, petImage };
    let pets = JSON.parse(localStorage.getItem('pets')) || [];
    pets.push(pet);
    localStorage.setItem('pets', JSON.stringify(pets));
  
    alert('Pet listed successfully!');
    document.getElementById('petForm').reset();
  });