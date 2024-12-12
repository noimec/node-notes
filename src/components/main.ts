import App from './App.svelte';

function app() {
  const data = fetchWithAuth();
  console.log('Данные успешно получены:', data);

  const main = document.getElementById('main');

  if (!main) {
    throw new Error("Element with id 'main' not found.");
  }

  new App({
    target: main,
  });
}

app();

async function fetchWithAuth() {
  const token = localStorage.getItem('token');

  const response = await fetch('http://localhost:3000/dashboard', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`
    },
  });

  if (!response.ok) {
    if (response.status === 401) {
      alert('Авторизация не пройдена. Пожалуйста, войдите снова.');
      localStorage.removeItem('token');
      window.location.href = '/login';
    } else if (response.status === 403) {
      alert('У вас нет доступа к этому ресурсу.');
    }
  }

  return response.json();
}
