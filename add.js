// Fonction pour ajouter un utilisateur
document.getElementById('addUserForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Stocker l'utilisateur dans le localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push({ username, email, password });
    localStorage.setItem('users', JSON.stringify(users));
  
    alert('Utilisateur ajouté avec succès!');
    document.getElementById('addUserForm').reset();
  });
  
  // Fonction pour se connecter
  document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const loginUsername = document.getElementById('loginUsername').value;
    const loginPassword = document.getElementById('loginPassword').value;
  
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.username === loginUsername && u.password === loginPassword);
  
    if (user) {
      alert('Connexion réussie!');
    } else {
      alert('Nom d\'utilisateur ou mot de passe incorrect.');
    }
  
    document.getElementById('loginForm').reset();
  });
  

  document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Empêche le comportement par défaut du formulaire (rechargement de la page)
  
      const username = document.getElementById('loginUsername').value;
      const password = document.getElementById('loginPassword').value;
  
      // Simuler un processus d'authentification
      if (username === 'admin' && password === '1234') {  // Utilisez vos propres critères ici
        window.location.href = 'planete.html'; // Rediriger vers la page planete.html
      } else {
        alert('Nom d\'utilisateur ou mot de passe incorrect!');
      }
    });
  });
  