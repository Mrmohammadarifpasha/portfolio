// ============================
// Utilities / Helper Functions
// ============================

/**
 * Smooth scroll to a target element
 * @param {string} selector - CSS selector of the target element
 */
function smoothScrollTo(selector) {
  const element = document.querySelector(selector);
  if (!element) return;
  element.scrollIntoView({ behavior: "smooth" });
}

/**
 * Create an element with optional classes and content
 * @param {string} tagName - HTML tag name
 * @param {Array} classList - Array of classes
 * @param {string} innerHTML - Inner HTML content
 * @returns {HTMLElement}
 */
function createElement(tagName, classList = [], innerHTML = "") {
  const el = document.createElement(tagName);
  if (classList.length) el.classList.add(...classList);
  if (innerHTML) el.innerHTML = innerHTML;
  return el;
}

/**
 * Toggle a class on an element
 * @param {string} selector - CSS selector
 * @param {string} className - Class to toggle
 */
function toggleClass(selector, className) {
  const el = document.querySelector(selector);
  if (el) el.classList.toggle(className);
}

/**
 * Validate email format
 * @param {string} email
 * @returns {boolean}
 */
function isValidEmail(email) {
  const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;
  return pattern.test(email);
}

/**
 * Display a temporary message inside a container
 * @param {HTMLElement} container
 * @param {string} message
 * @param {string} type - "success" or "error"
 * @param {number} duration - in milliseconds
 */
function showMessage(container, message, type = "success", duration = 3000) {
  if (!container) return;
  container.textContent = message;
  container.className = type;
  setTimeout(() => {
    container.textContent = "";
    container.className = "";
  }, duration);
}

/**
 * Fetch JSON data from a URL
 * @param {string} url
 * @returns {Promise<Object>}
 */
async function fetchJSON(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error(`Failed to fetch JSON from ${url}:`, error);
    return null;
  }
}

/**
 * Debounce function to limit how often a function can run
 * @param {Function} func
 * @param {number} wait
 * @returns {Function}
 */
function debounce(func, wait = 300) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}
