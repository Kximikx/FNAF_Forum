document.addEventListener('DOMContentLoaded', function() {
    // Initialize Lucide icons
    lucide.createIcons();
  
    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
  
    // Mobile menu toggle
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenuClose = document.getElementById('mobile-menu-close');
    const mobileMenu = document.getElementById('mobile-menu');
  
    if (mobileMenuToggle && mobileMenu && mobileMenuClose) {
      mobileMenuToggle.addEventListener('click', function() {
        mobileMenu.classList.add('active');
      });
      
      mobileMenuClose.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
      });
    }
  
    // Tab functionality
    const tabTriggers = document.querySelectorAll('.tab-trigger');
    const tabContents = document.querySelectorAll('.tab-content');
  
    tabTriggers.forEach(trigger => {
      trigger.addEventListener('click', () => {
        // Remove active class from all triggers and contents
        tabTriggers.forEach(t => t.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));
        
        // Add active class to clicked trigger and corresponding content
        trigger.classList.add('active');
        const tabId = trigger.getAttribute('data-tab');
        document.getElementById(`${tabId}-tab`).classList.add('active');
      });
    });
  
    // Login button functionality
    const loginButton = document.getElementById('login-button');
  
    if (loginButton) {
      loginButton.addEventListener('click', function() {
        // Simulate login
        this.innerHTML = `
          <div class="post-avatar">
            <span class="avatar-text">U</span>
          </div>
        `;
      });
    }
  
    // Random jumpscare effect
    function randomJumpscare() {
      const shouldJumpscare = Math.random() < 0.01; // 1% chance
      if (shouldJumpscare) {
        document.body.classList.add('jumpscare');
        setTimeout(() => {
          document.body.classList.remove('jumpscare');
        }, 500);
      }
    }
  
    // Check for jumpscare every 30 seconds
    setInterval(randomJumpscare, 30000);
  });