// Global JavaScript for PAWSOME Project
// Features: loader, unified navbar behavior, dropdown, hamburger, search propagation, utilities

(function(){
  const STATE = {
    loaderDone: false,
  };

  // Loader: 0 -> 100 in ~3 seconds
  function runLoader() {
    const loader = document.getElementById('app-loader');
    if (!loader) return Promise.resolve();

    const bar = loader.querySelector('.loader-bar-fill');
    const percent = loader.querySelector('.loader-percent');
    let p = 0;

    return new Promise(resolve => {
      const tick = setInterval(() => {
        p += 100/30; // ~3 seconds
        if (p > 100) p = 100;
        if (bar) bar.style.width = p + '%';
        if (percent) percent.textContent = Math.round(p) + '%';
        if (p >= 100) {
          clearInterval(tick);
          setTimeout(() => {
            loader.classList.add('hidden');
            STATE.loaderDone = true;
            resolve();
          }, 150);
        }
      }, 100);
    });
  }

  // Dropdown menu open/close helpers
  function toggleDropdown(idBtn, idMenu) {
    const btn = document.getElementById(idBtn);
    const menu = document.getElementById(idMenu);
    if (!btn || !menu) return;

    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      menu.classList.toggle('show');
      btn.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
      if (!menu.contains(e.target) && !btn.contains(e.target)) {
        menu.classList.remove('show');
        btn.classList.remove('active');
      }
    });
    
    // Also handle touch events for mobile devices
    document.addEventListener('touchstart', (e) => {
      if (!menu.contains(e.target) && !btn.contains(e.target)) {
        menu.classList.remove('show');
        btn.classList.remove('active');
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        menu.classList.remove('show');
        btn.classList.remove('active');
      }
    });
    
    // Close dropdown on scroll
    window.addEventListener('scroll', () => {
      if (menu.classList.contains('show')) {
        menu.classList.remove('show');
        btn.classList.remove('active');
      }
    });
    
    // Close dropdown on window resize
    window.addEventListener('resize', () => {
      if (menu.classList.contains('show')) {
        menu.classList.remove('show');
        btn.classList.remove('active');
      }
    });
    
    // Close dropdown on page visibility change (tab switch, etc.)
    document.addEventListener('visibilitychange', () => {
      if (document.hidden && menu.classList.contains('show')) {
        menu.classList.remove('show');
        btn.classList.remove('active');
      }
    });
  }

  // Hamburger behavior for mobile
  function initHamburger() {
    const btn = document.getElementById('hamburger-btn');
    const mobile = document.getElementById('mobile-menu');
    if (!btn || !mobile) return;

    const icon = document.createElement('span');
    icon.className = 'material-symbols-outlined';
    icon.textContent = 'menu';
    btn.innerHTML = '';
    btn.appendChild(icon);

    const setOpen = (open) => {
      if (open) {
        mobile.classList.add('show');
        icon.textContent = 'close';
        btn.setAttribute('aria-expanded','true');
      } else {
        mobile.classList.remove('show');
        icon.textContent = 'menu';
        btn.setAttribute('aria-expanded','false');
      }
    };

    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const open = !mobile.classList.contains('show');
      setOpen(open);
    });

    document.addEventListener('click', (e) => {
      if (!mobile.contains(e.target) && !btn.contains(e.target)) {
        setOpen(false);
      }
    });
  }

  // Comprehensive search functionality that searches tips and breeds
  function attachSearch(inputId, dropdownId) {
    const input = document.getElementById(inputId);
    const dropdown = document.getElementById(dropdownId);
    if (!input || !dropdown) return;

    let searchTimeout;
    
    // Enhanced search function that handles multiple data sources
    function performSearch(query) {
      const results = {
        tips: [],
        dogBreeds: [],
        catBreeds: []
      };
      
      const q = query.toLowerCase().trim();
      
      // Search pet tips
      if (window.petTips) {
        results.tips = window.petTips.filter(tip => {
          const matches = tip.title.toLowerCase().includes(q) || 
                         tip.category.toLowerCase().includes(q) || 
                         tip.summary.toLowerCase().includes(q) ||
                         (tip.details && tip.details.toLowerCase().includes(q));
          return matches;
        }).slice(0, 4);
      }
      
      // Search dog breeds from tips.js (comprehensive breed data)
      if (window.dogBreeds && window.dogBreeds.length > 0) {
        results.dogBreeds = window.dogBreeds.filter(breed => {
          if (!breed || !breed.name) return false;
          
          // Enhanced name matching with common variations
          let nameMatch = breed.name.toLowerCase().includes(q);
          
          // Handle common breed name variations and typos
          const breedLower = breed.name.toLowerCase();
          if (!nameMatch) {
            // Handle common typos and variations
            if (q.includes('golden ret') && breedLower.includes('golden retriever')) nameMatch = true;
            if (q.includes('labrador') && breedLower.includes('labrador retriever')) nameMatch = true;
            if (q.includes('german shep') && breedLower.includes('german shepherd')) nameMatch = true;
            if (q.includes('husky') && breedLower.includes('siberian husky')) nameMatch = true;
            if (q.includes('golden') && breedLower.includes('golden retriever')) nameMatch = true;
            if (q.includes('lab') && q.length <= 4 && breedLower.includes('labrador')) nameMatch = true;
            if (q.includes('shep') && breedLower.includes('shepherd')) nameMatch = true;
            if (q.includes('retriever') && breedLower.includes('retriever')) nameMatch = true;
          }
          
          const personalityMatch = breed.personality && breed.personality.some(trait => trait.toLowerCase().includes(q));
          const behaviorMatch = breed.behaviors && breed.behaviors.some(behavior => behavior.toLowerCase().includes(q));
          const sizeMatch = breed.size && breed.size.toLowerCase().includes(q);
          const groomingMatch = breed.grooming && breed.grooming.toLowerCase().includes(q);
          const healthMatch = breed.healthConcerns && breed.healthConcerns.toLowerCase().includes(q);
          
          const matches = nameMatch || personalityMatch || behaviorMatch || sizeMatch || groomingMatch || healthMatch;
          
          
          return matches;
        }).slice(0, 4);
      }
      
      // Search cat breeds from tips.js (comprehensive breed data) 
      if (window.catBreeds && window.catBreeds.length > 0) {
        results.catBreeds = window.catBreeds.filter(breed => {
          if (!breed || !breed.name) return false;
          
          // Enhanced name matching with common variations
          let nameMatch = breed.name.toLowerCase().includes(q);
          
          // Handle common cat breed name variations and typos
          const breedLower = breed.name.toLowerCase();
          if (!nameMatch) {
            // Handle common typos and variations for cats
            if (q.includes('persian') && breedLower.includes('persian')) nameMatch = true;
            if (q.includes('siamese') && breedLower.includes('siamese')) nameMatch = true;
            if (q.includes('maine') && breedLower.includes('maine coon')) nameMatch = true;
            if (q.includes('ragdoll') && breedLower.includes('ragdoll')) nameMatch = true;
            if (q.includes('british') && breedLower.includes('british shorthair')) nameMatch = true;
            if (q.includes('bengal') && breedLower.includes('bengal')) nameMatch = true;
            if (q.includes('sphynx') && breedLower.includes('sphynx')) nameMatch = true;
            if (q.includes('russian') && breedLower.includes('russian blue')) nameMatch = true;
          }
          
          const personalityMatch = breed.personality && breed.personality.some(trait => trait.toLowerCase().includes(q));
          const behaviorMatch = breed.behaviors && breed.behaviors.some(behavior => behavior.toLowerCase().includes(q));
          const sizeMatch = breed.size && breed.size.toLowerCase().includes(q);
          const groomingMatch = breed.grooming && breed.grooming.toLowerCase().includes(q);
          const healthMatch = breed.healthConcerns && breed.healthConcerns.toLowerCase().includes(q);
          
          const matches = nameMatch || personalityMatch || behaviorMatch || sizeMatch || groomingMatch || healthMatch;
          
          
          return matches;
        }).slice(0, 4);
      }
      
      return results;
    }
    
    input.addEventListener('input', () => {
      const query = input.value.trim();
      clearTimeout(searchTimeout);
      
      searchTimeout = setTimeout(() => {
        if (query.length < 2) { 
          dropdown.classList.remove('show'); 
          dropdown.innerHTML = ''; 
          return; 
        }
        
        const results = performSearch(query);
        let html = '';
        
        // Display pet tips
        if (results.tips.length > 0) {
          html += '<div class="dropdown-section">';
          html += '<div class="section-header">Pet Care Tips</div>';
          results.tips.forEach(tip => {
            html += `
              <div class="tip-item" onclick="showTipPopup(${tip.id})">
                <div class="tip-category">${tip.category}</div>
                <div class="tip-title">${tip.title}</div>
                <div class="tip-summary">${tip.summary}</div>
              </div>`;
          });
          html += '</div>';
        }
        
        // Display dog breeds
        if (results.dogBreeds.length > 0) {
          html += '<div class="dropdown-section">';
          html += '<div class="section-header">Dog Breeds</div>';
          results.dogBreeds.forEach(breed => {
            const personalities = breed.personality.slice(0, 2).join(', ');
            html += `
              <div class="tip-item breed-item" onclick="showBreedPopup(${breed.id}, 'dog')">
                <div class="tip-category">DOG</div>
                <div class="tip-title">${breed.name}</div>
                <div class="tip-summary">${breed.size} • ${personalities}</div>
              </div>`;
          });
          html += '</div>';
        }
        
        // Display cat breeds
        if (results.catBreeds.length > 0) {
          html += '<div class="dropdown-section">';
          html += '<div class="section-header">Cat Breeds</div>';
          results.catBreeds.forEach(breed => {
            const personalities = breed.personality.slice(0, 2).join(', ');
            html += `
              <div class="tip-item breed-item" onclick="showBreedPopup(${breed.id}, 'cat')">
                <div class="tip-category">CAT</div>
                <div class="tip-title">${breed.name}</div>
                <div class="tip-summary">${breed.size} • ${personalities}</div>
              </div>`;
          });
          html += '</div>';
        }
        
        // Show results or no results message
        if (html) {
          dropdown.innerHTML = html;
          dropdown.classList.add('show');
        } else {
          dropdown.innerHTML = '<div class="no-results">No results found</div>';
          dropdown.classList.add('show');
        }
        
      }, 200);
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
      if (!dropdown.contains(e.target) && !input.contains(e.target)) {
        dropdown.classList.remove('show');
      }
    });
    
    // Close dropdown on escape key
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        dropdown.classList.remove('show');
        input.blur();
      }
    });
  }

  // Init on DOM ready
  document.addEventListener('DOMContentLoaded', async () => {
    await runLoader();
    toggleDropdown('nav-dropdown-btn','nav-dropdown-menu');
    initHamburger();
    attachSearch('tips-search','tips-dropdown');
    attachSearch('hero-search','hero-dropdown');
  });
})();

// Global functions for popups and interactions
window.showTipPopup = function(tipId) {
  const tip = window.petTips?.find(t => t.id === tipId);
  if (!tip) return;
  
  // Create modal overlay
  const overlay = document.createElement('div');
  overlay.className = 'popup-overlay';
  overlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10000;
    animation: fadeIn 0.3s ease;
  `;
  
  // Create modal content
  const modal = document.createElement('div');
  modal.className = 'popup-modal';
  modal.style.cssText = `
    background: white;
    border-radius: 12px;
    padding: 24px;
    max-width: 500px;
    max-height: 80vh;
    overflow-y: auto;
    margin: 20px;
    box-shadow: 0 20px 60px rgba(0,0,0,0.3);
    animation: slideIn 0.3s ease;
  `;
  
  modal.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
      <h2 style="color: #993d15; margin: 0; font-size: 24px;">${tip.title}</h2>
      <button onclick="this.closest('.popup-overlay').remove()" style="
        background: none;
        border: none;
        font-size: 24px;
        cursor: pointer;
        color: #666;
        padding: 0;
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
      ">&times;</button>
    </div>
    <div style="background: #f09902; color: white; padding: 6px 12px; border-radius: 20px; display: inline-block; font-size: 12px; font-weight: bold; margin-bottom: 16px;">
      ${tip.category}
    </div>
    <p style="color: #666; font-size: 16px; line-height: 1.5; margin: 0;">
      ${tip.details || tip.summary}
    </p>
  `;
  
  overlay.appendChild(modal);
  document.body.appendChild(overlay);
  
  // Close on overlay click
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) overlay.remove();
  });
  
  // Close on escape key
  document.addEventListener('keydown', function escapeHandler(e) {
    if (e.key === 'Escape') {
      overlay.remove();
      document.removeEventListener('keydown', escapeHandler);
    }
  });
};

window.showBreedPopup = function(breedId, category) {
  let breed;
  if (category === 'dog') {
    breed = window.dogBreeds?.find(b => b.id === breedId);
  } else if (category === 'cat') {
    breed = window.catBreeds?.find(b => b.id === breedId);
  }
  
  if (!breed) return;
  
  // Create modal overlay
  const overlay = document.createElement('div');
  overlay.className = 'popup-overlay';
  overlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10000;
    animation: fadeIn 0.3s ease;
  `;
  
  // Create modal content
  const modal = document.createElement('div');
  modal.className = 'popup-modal';
  modal.style.cssText = `
    background: white;
    border-radius: 12px;
    padding: 24px;
    max-width: 600px;
    max-height: 80vh;
    overflow-y: auto;
    margin: 20px;
    box-shadow: 0 20px 60px rgba(0,0,0,0.3);
    animation: slideIn 0.3s ease;
  `;
  
  const personalityTags = breed.personality.map(trait => 
    `<span style="background: #f09902; color: white; padding: 4px 8px; border-radius: 12px; font-size: 12px; margin: 2px;">${trait}</span>`
  ).join('');
  
  const behaviorsList = breed.behaviors.map(behavior => 
    `<li style="margin: 4px 0;">${behavior}</li>`
  ).join('');
  
  modal.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
      <h2 style="color: #993d15; margin: 0; font-size: 28px;">${breed.name}</h2>
      <button onclick="this.closest('.popup-overlay').remove()" style="
        background: none;
        border: none;
        font-size: 24px;
        cursor: pointer;
        color: #666;
        padding: 0;
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
      ">&times;</button>
    </div>
    <div style="background: ${category === 'dog' ? '#4CAF50' : '#9C27B0'}; color: white; padding: 6px 12px; border-radius: 20px; display: inline-block; font-size: 12px; font-weight: bold; margin-bottom: 16px;">
      ${category.toUpperCase()} BREED
    </div>
    
    <div style="margin-bottom: 16px;">
      <h3 style="color: #333; font-size: 16px; margin: 0 0 8px 0;">Personality Traits</h3>
      <div style="line-height: 1.6;">${personalityTags}</div>
    </div>
    
    <div style="margin-bottom: 16px;">
      <h3 style="color: #333; font-size: 16px; margin: 0 0 8px 0;">Typical Behaviors</h3>
      <ul style="margin: 0; padding-left: 20px; color: #666;">${behaviorsList}</ul>
    </div>
    
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 20px; font-size: 14px;">
      <div>
        <strong style="color: #993d15;">Size:</strong><br>
        <span style="color: #666;">${breed.size}</span>
      </div>
      <div>
        <strong style="color: #993d15;">Lifespan:</strong><br>
        <span style="color: #666;">${breed.lifespan}</span>
      </div>
      <div>
        <strong style="color: #993d15;">Grooming:</strong><br>
        <span style="color: #666;">${breed.grooming}</span>
      </div>
      <div>
        <strong style="color: #993d15;">Climate:</strong><br>
        <span style="color: #666;">${breed.climatePreference}</span>
      </div>
    </div>
    
    ${breed.healthConcerns ? `
      <div style="margin-top: 16px; padding: 12px; background: #fff3cd; border-left: 4px solid #ffc107; border-radius: 4px;">
        <strong style="color: #856404;">Health Considerations:</strong><br>
        <span style="color: #856404; font-size: 14px;">${breed.healthConcerns}</span>
      </div>
    ` : ''}
  `;
  
  overlay.appendChild(modal);
  document.body.appendChild(overlay);
  
  // Close on overlay click
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) overlay.remove();
  });
  
  // Close on escape key
  document.addEventListener('keydown', function escapeHandler(e) {
    if (e.key === 'Escape') {
      overlay.remove();
      document.removeEventListener('keydown', escapeHandler);
    }
  });
};

// Add necessary CSS animations
if (!document.getElementById('popup-animations')) {
  const style = document.createElement('style');
  style.id = 'popup-animations';
  style.textContent = `
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes slideIn {
      from { opacity: 0; transform: translateY(-20px) scale(0.95); }
      to { opacity: 1; transform: translateY(0) scale(1); }
    }
  `;
  document.head.appendChild(style);
}

