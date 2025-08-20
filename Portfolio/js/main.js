// ============================
// Dynamic Component Loader
// ============================

document.addEventListener("DOMContentLoaded", () => {

  /**
   * Load HTML content into a container
   * @param {string} selector - CSS selector where content will be inserted
   * @param {string} url - URL of the HTML component
   */
  function loadComponent(selector, url) {
    const container = document.querySelector(selector);
    if (!container) return;

    fetch(url)
      .then(response => response.text())
      .then(data => {
        container.innerHTML = data;
      })
      .catch(err => {
        console.error(`Failed to load ${url}:`, err);
      });
  }

  // Load Header
  loadComponent("header", "components/header.html");

  // Load Footer
  loadComponent("footer", "components/footer.html");

  // Load Sidebar (optional)
  loadComponent(".sidebar-container", "components/sidebar.html");
});
