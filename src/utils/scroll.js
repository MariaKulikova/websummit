/**
 * Smooth scroll to an element with offset
 * @param {string} selector - CSS selector of the target element
 * @param {number} offset - Offset from top in pixels (default: 80)
 */
export const scrollToElement = (selector, offset = 80) => {
  const element = document.querySelector(selector);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};
