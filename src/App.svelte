<svelte:options customElement={{
  tag: 'my-custom'
}} />

<script lang="ts">
  import svelteLogo from './assets/svelte.svg'
  import viteLogo from './assets/vite.svg'
</script>

<main>
  <div>
    <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
      <img src={viteLogo} class="logo" alt="Vite Logo" />
    </a>
    <a href="https://svelte.dev" target="_blank" rel="noreferrer">
      <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
    </a>
  </div>
  <h1>Vite + Svelte <br>= Web Components</h1>

  <p>
    This is a web component built using Svelte and Vite.
  </p>

  <p class="read-the-docs">
    Click on the Vite and Svelte logos to learn more
  </p>
</main>
<footer>Clone this project at <a href="https://github.com/omar2205/svetle-webcomponent">github.com/omar2205/svetle-webcomponent</a></footer>

<style>
  main {
    margin: 0 auto;
    width: min(500px, 90vw);
    border-bottom: 4px solid lightblue;
  }
  main, footer {
    font-family: sans-serif;
  }
  main > div {
    text-align: center;
  }
  h1 {
    font-family: serif;
    text-align: center;
  }
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
  footer {
    margin-top: 0.5rem;
    font-size: 12px;
    text-align: center;
  }
</style>
