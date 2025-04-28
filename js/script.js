import {users} from "./db.js"

const container = document.createElement('div');
container.className = 'cards-container';
document.body.appendChild(container);

users.forEach(user => {
  const card = document.createElement('div');
  card.className = 'card';

  const name = document.createElement('h2');
  name.textContent = user.name;

  const company = document.createElement('p');
  company.textContent = `Company: ${user.company.name}`;

  const website = document.createElement('p');
  website.textContent = `Website: ${user.website}`;

  const phone = document.createElement('p');
  phone.textContent = `Phone: ${user.phone}`;

  const button = document.createElement('button');
  button.className = 'btn';
  button.textContent = 'Подробнее';

  button.addEventListener('click', function() {
    localStorage.setItem('selectedUserId', user.id);
    window.location.href = './user.html';
  });

  card.appendChild(name);
  card.appendChild(company);
  card.appendChild(website);
  card.appendChild(phone);
  card.appendChild(button);

  container.appendChild(card);
});

