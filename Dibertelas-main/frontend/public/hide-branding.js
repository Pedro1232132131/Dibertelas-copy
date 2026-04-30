// Hide Emergent branding via JavaScript
(function() {
  function hideBranding() {
    // Find and hide elements that might be the "Made with Emergent" button
    const selectors = [
      '[href*="emergent"]',
      'a[href*="emergent.sh"]',
      'button[aria-label*="Emergent"]',
      'div[class*="emergent"]',
      'a[style*="position: fixed"]',
      'button[style*="position: fixed"]',
      'div[style*="position: fixed"][style*="bottom"]'
    ];
    
    selectors.forEach(selector => {
      try {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => {
          if (el.textContent.toLowerCase().includes('emergent') || 
              el.textContent.toLowerCase().includes('made with')) {
            el.style.display = 'none';
            el.style.visibility = 'hidden';
            el.style.opacity = '0';
            el.style.pointerEvents = 'none';
          }
        });
      } catch(e) {}
    });
  }
  
  // Run immediately
  hideBranding();
  
  // Run after DOM is loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', hideBranding);
  }
  
  // Run periodically to catch dynamically added elements
  setInterval(hideBranding, 1000);
  
  // Use MutationObserver to catch new elements
  const observer = new MutationObserver(hideBranding);
  observer.observe(document.body, { 
    childList: true, 
    subtree: true 
  });
})();
