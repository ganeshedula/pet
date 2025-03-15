// buyer/buyer.js
document.addEventListener('DOMContentLoaded', () => {
    const petList = document.getElementById('petList');
    let pets = [];
  
    try {
      // Safely parse pets from localStorage
      pets = JSON.parse(localStorage.getItem('pets')) || [];
    } catch (error) {
      console.error('Error parsing pets from localStorage:', error);
      petList.innerHTML = '<p>Error loading pets. Please try again later.</p>';
      return;
    }
  
    if (pets.length === 0) {
      petList.innerHTML = '<p>No pets available for adoption.</p>';
    } else {
      pets.forEach((pet, index) => {
        const petCard = document.createElement('div');
        petCard.className = 'pet-card';
        petCard.innerHTML = `
          <h3>${pet.petName}</h3>
          <p><strong>Type:</strong> ${pet.petType}</p>
          <p><strong>Description:</strong> ${pet.petDescription}</p>
          <button data-index="${index}">Adopt</button>
        `;
        petList.appendChild(petCard);
      });
  
      // Add event listeners to all "Adopt" buttons
      const adoptButtons = document.querySelectorAll('.pet-card button');
      adoptButtons.forEach(button => {
        button.addEventListener('click', () => {
          const index = button.getAttribute('data-index');
          adoptPet(index);
        });
      });
    }
  });
  
  function adoptPet(index) {
    let pets = [];
  
    try {
      // Safely parse pets from localStorage
      pets = JSON.parse(localStorage.getItem('pets')) || [];
    } catch (error) {
      console.error('Error parsing pets from localStorage:', error);
      alert('Error adopting pet. Please try again later.');
      return;
    }
  
    // Check if index is valid
    if (index < 0 || index >= pets.length) {
      alert('Invalid pet selection.');
      return;
    }
  
    // Remove the adopted pet
    const adoptedPet = pets.splice(index, 1)[0];
    localStorage.setItem('pets', JSON.stringify(pets));
  
    // Notify the user
    showNotification('You adopted ${adoptedPet.petName}!');
  
    // Reload the page to reflect changes
    window.location.reload();
  }



// buyer/buyer.js
// document.addEventListener('DOMContentLoaded', () => {
//     const petList = document.getElementById('petList');
//     let pets = [];
  
//     try {
//       // Safely parse pets from localStorage
//       pets = JSON.parse(localStorage.getItem('pets')) || [];
//     } catch (error) {
//       console.error('Error parsing pets from localStorage:', error);
//       petList.innerHTML = '<p>Error loading pets. Please try again later.</p>';
//       return;
//     }
  
//     if (pets.length === 0) {
//       petList.innerHTML = '<p>No pets available for adoption.</p>';
//     } else {
//       pets.forEach((pet, index) => {
//         const petCard = document.createElement('div');
//         petCard.className = 'pet-card';
//         petCard.innerHTML = `
//           <h3>${pet.petName}</h3>
//           <p><strong>Type:</strong> ${pet.petType}</p>
//           <p><strong>Description:</strong> ${pet.petDescription}</p>
//           <button data-index="${index}">Adopt</button>
//         `;
//         petList.appendChild(petCard);
//       });
  
//       // Add event listeners to all "Adopt" buttons
//       const adoptButtons = document.querySelectorAll('.pet-card button');
//       adoptButtons.forEach(button => {
//         button.addEventListener('click', () => {
//           const index = button.getAttribute('data-index');
//           adoptPet(index);
//         });
//       });
//     }
//   });
  
//   function adoptPet(index) {
//     let pets = [];
  
//     try {
//       // Safely parse pets from localStorage
//       pets = JSON.parse(localStorage.getItem('pets')) || [];
//     } catch (error) {
//       console.error('Error parsing pets from localStorage:', error);
//       alert('Error adopting pet. Please try again later.');
//       return;
//     }
  
//     // Check if index is valid
//     if (index < 0 || index >= pets.length) {
//       alert('Invalid pet selection.');
//       return;
//     }
  
//     // Remove the adopted pet
//     const adoptedPet = pets.splice(index, 1)[0];
  
//     // Check if adoptedPet exists
//     if (!adoptedPet) {
//       alert('Error: Pet not found.');
//       return;
//     }
  
//     // Update localStorage
//     localStorage.setItem('pets', JSON.stringify(pets));
  
//     // Notify the user
//     alert(You adopted ${adoptedPet.petName}!);
  
//     // Reload the page to reflect changes
//     window.location.reload();
//   }