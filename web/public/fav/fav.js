function setFavIcon() {
  // Check if the user prefers dark mode
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

  // Get the favicon link element
  const favicon = document.querySelector('link[rel="icon"]');

  // Set the appropriate favicon based on dark mode preference
  if (prefersDarkMode) {
    favicon.href = '/fav/dark/favicon-128.png';
  } else {
    favicon.href = '/fav/light/favicon-128.png';
  }
}

setTimeout(setFavIcon);
