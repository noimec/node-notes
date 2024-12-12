import App from './App.svelte';

async function app() {
  try {
    const data = await fetchWithAuth('http://localhost:3000/dashboard');
    console.log('Данные успешно получены:', data);

    const main = document.getElementById('main');

    if (!main) {
      throw new Error("Element with id 'main' not found.");
    }

    new App({
      target: main,
    });
  } catch (error) {
    console.error('Ошибка при загрузке приложения:', error);
  }
}

app();

async function fetchWithAuth(url, options = {}) {
  const token = localStorage.getItem('token');
  const headers = {
    ...options.headers,
    Authorization: `Bearer ${token}`,
  };

  const response = await fetch(url, {
    ...options,
    headers,
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
