import App from "./App.svelte";

const app = document.getElementById("main");

if (app) {
  new App({
    target: app,
  });
} else {
  console.error("Element with id 'main' not found.");
}
