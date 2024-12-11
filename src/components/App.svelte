<script lang="ts">
  import Router from "svelte-spa-router";
  import Main from "./Main.svelte";
  const routes = new Map();
  routes.set(/^\/(.*)?/, Main);

  import { onMount } from 'svelte';

onMount(() => {
  const form = document.getElementById('loginForm');
  console.log('asfsaf');

  if (form) {
    form.addEventListener('submit', async (event) => {
      // ваш код обработки формы
    });
  }
});
</script>

<Router {routes} />
