// Main JavaScript for Home Page Functionality

// Pet zodiac data
const petZodiac = {
    'aries': {
        name: 'Aries Pet',
        dates: 'Mar 21 - Apr 19',
        description: 'Your energetic Aries pet is a natural leader, always ready for a new adventure. Keep them active and engaged!',
        traits: ['Energetic', 'Leader', 'Adventurous', 'Bold']
    },
    'taurus': {
        name: 'Taurus Pet', 
        dates: 'Apr 20 - May 20',
        description: 'A Taurus pet loves comfort and treats. They\'re loyal and cuddly, but can be a bit stubborn. Spoil them with affection!',
        traits: ['Loyal', 'Comfort-loving', 'Stubborn', 'Affectionate']
    },
    'gemini': {
        name: 'Gemini Pet',
        dates: 'May 21 - Jun 20', 
        description: 'Curious and playful, your Gemini pet is always up for a game or a chat. They thrive on variety and mental stimulation.',
        traits: ['Curious', 'Playful', 'Social', 'Intelligent']
    },
    'cancer': {
        name: 'Cancer Pet',
        dates: 'Jun 21 - Jul 22',
        description: 'Cancer pets are deeply emotional and intuitive. They form strong bonds with their family and love cozy spaces.',
        traits: ['Emotional', 'Intuitive', 'Loyal', 'Homebody']
    },
    'leo': {
        name: 'Leo Pet',
        dates: 'Jul 23 - Aug 22',
        description: 'Leo pets love being the center of attention! They\'re confident, playful, and enjoy showing off their tricks.',
        traits: ['Confident', 'Attention-seeking', 'Playful', 'Dramatic']
    },
    'virgo': {
        name: 'Virgo Pet',
        dates: 'Aug 23 - Sep 22',
        description: 'Virgo pets are neat, organized, and health-conscious. They prefer routines and may be picky eaters.',
        traits: ['Organized', 'Health-conscious', 'Routine-loving', 'Picky']
    },
    'libra': {
        name: 'Libra Pet',
        dates: 'Sep 23 - Oct 22',
        description: 'Libra pets are social butterflies who love harmony. They get along well with other pets and enjoy beautiful surroundings.',
        traits: ['Social', 'Peaceful', 'Harmonious', 'Beauty-loving']
    },
    'scorpio': {
        name: 'Scorpio Pet',
        dates: 'Oct 23 - Nov 21',
        description: 'Intense and mysterious, Scorpio pets form deep connections. They\'re protective and can be quite determined.',
        traits: ['Intense', 'Mysterious', 'Protective', 'Determined']
    },
    'sagittarius': {
        name: 'Sagittarius Pet',
        dates: 'Nov 22 - Dec 21',
        description: 'Sagittarius pets love adventure and exploration. They need lots of exercise and new experiences to stay happy.',
        traits: ['Adventurous', 'Explorer', 'Energetic', 'Freedom-loving']
    },
    'capricorn': {
        name: 'Capricorn Pet',
        dates: 'Dec 22 - Jan 19',
        description: 'Capricorn pets are disciplined and goal-oriented. They respond well to training and enjoy having jobs to do.',
        traits: ['Disciplined', 'Goal-oriented', 'Hardworking', 'Responsible']
    },
    'aquarius': {
        name: 'Aquarius Pet',
        dates: 'Jan 20 - Feb 18',
        description: 'Aquarius pets are unique and independent thinkers. They may have quirky habits and enjoy innovative toys.',
        traits: ['Independent', 'Unique', 'Innovative', 'Quirky']
    },
    'pisces': {
        name: 'Pisces Pet',
        dates: 'Feb 19 - Mar 20',
        description: 'Pisces pets are sensitive and intuitive. They\'re deeply empathetic and may pick up on your emotions easily.',
        traits: ['Sensitive', 'Intuitive', 'Empathetic', 'Dreamy']
    }
};

// Get zodiac sign from date
function getZodiacSign(month, day) {
    const date = month * 100 + day;
    
    if ((date >= 321 && date <= 331) || (date >= 401 && date <= 419)) return 'aries';
    if ((date >= 420 && date <= 431) || (date >= 501 && date <= 520)) return 'taurus';
    if ((date >= 521 && date <= 531) || (date >= 601 && date <= 620)) return 'gemini';
    if ((date >= 621 && date <= 630) || (date >= 701 && date <= 722)) return 'cancer';
    if ((date >= 723 && date <= 731) || (date >= 801 && date <= 822)) return 'leo';
    if ((date >= 823 && date <= 831) || (date >= 901 && date <= 922)) return 'virgo';
    if ((date >= 923 && date <= 930) || (date >= 1001 && date <= 1022)) return 'libra';
    if ((date >= 1023 && date <= 1031) || (date >= 1101 && date <= 1121)) return 'scorpio';
    if ((date >= 1122 && date <= 1130) || (date >= 1201 && date <= 1221)) return 'sagittarius';
    if ((date >= 1222 && date <= 1231) || (date >= 101 && date <= 119)) return 'capricorn';
    if ((date >= 120 && date <= 131) || (date >= 201 && date <= 218)) return 'aquarius';
    if ((date >= 219 && date <= 229) || (date >= 301 && date <= 320)) return 'pisces';
    
    return null;
}

// Profile dropdown functionality
function initializeProfileDropdown() {
    const profileAvatar = document.getElementById('profile-avatar');
    const profileMenu = document.getElementById('profile-menu');
    
    if (!profileAvatar || !profileMenu) return;
    
    profileAvatar.addEventListener('click', function(e) {
        e.stopPropagation();
        profileMenu.classList.toggle('show');
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!profileAvatar.contains(e.target) && !profileMenu.contains(e.target)) {
            profileMenu.classList.remove('show');
        }
    });
    
    // Handle dropdown item clicks
    const dropdownItems = profileMenu.querySelectorAll('.profile-dropdown-item');
    dropdownItems.forEach(item => {
        item.addEventListener('click', function() {
            const text = this.textContent.trim();
            console.log('Profile menu clicked:', text);
            // Add specific functionality for each menu item here
            profileMenu.classList.remove('show');
        });
    });
}

// Zodiac reveal functionality
function initializeZodiacReveal() {
    const zodiacBtn = document.getElementById('zodiac-btn');
    const zodiacDate = document.getElementById('zodiac-date');
    const zodiacResult = document.getElementById('zodiac-result');
    
    if (!zodiacBtn || !zodiacDate || !zodiacResult) return;
    
    zodiacBtn.addEventListener('click', function() {
        const dateValue = zodiacDate.value;
        
        if (!dateValue) {
            zodiacResult.innerHTML = '<p class="text-red-600 font-semibold">Please select your pet\'s birthday first!</p>';
            return;
        }
        
        const date = new Date(dateValue);
        const month = date.getMonth() + 1;
        const day = date.getDate();
        
        const sign = getZodiacSign(month, day);
        
        if (sign && petZodiac[sign]) {
            const zodiac = petZodiac[sign];
            zodiacResult.innerHTML = `
                <div class="bg-white rounded-lg p-6 shadow-lg max-w-md mx-auto animate-bounce">
                    <h3 class="text-2xl font-bold text-[#993d15] mb-2">${zodiac.name}</h3>
                    <p class="text-sm text-gray-600 mb-3">${zodiac.dates}</p>
                    <p class="text-gray-800 mb-4">${zodiac.description}</p>
                    <div class="flex flex-wrap gap-2 justify-center">
                        ${zodiac.traits.map(trait => `
                            <span class="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">${trait}</span>
                        `).join('')}
                    </div>
                </div>
            `;
        } else {
            zodiacResult.innerHTML = '<p class="text-red-600 font-semibold">Unable to determine zodiac sign. Please check the date.</p>';
        }
        
        // Scroll to result
        zodiacResult.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
}

// Pet sound interactions
function initializePetSounds() {
    const soundButtons = document.querySelectorAll('.pet-sound-btn');
    
    soundButtons.forEach(button => {
        button.addEventListener('click', function() {
            const soundType = this.dataset.sound;
            playPetSound(soundType);
            
            // Add visual feedback
            this.classList.add('animate-bounce');
            setTimeout(() => {
                this.classList.remove('animate-bounce');
            }, 300);
        });
    });
}

function playPetSound(soundType) {
    // Create audio context for sound synthesis
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    
    switch(soundType) {
        case 'bark':
            // Simulate dog bark with oscillator
            playBarkSound(audioContext);
            break;
        case 'meow':
            // Simulate cat meow
            playMeowSound(audioContext);
            break;
        case 'chirp':
            // Simulate bird chirp
            playChirpSound(audioContext);
            break;
    }
}

function playBarkSound(audioContext) {
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.setValueAtTime(200, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(100, audioContext.currentTime + 0.2);
    
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.2);
}

function playMeowSound(audioContext) {
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.setValueAtTime(400, audioContext.currentTime);
    oscillator.frequency.linearRampToValueAtTime(200, audioContext.currentTime + 0.3);
    
    gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.3);
}

function playChirpSound(audioContext) {
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(1200, audioContext.currentTime + 0.1);
    
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.1);
}

// Add data attributes to sound buttons
function setupSoundButtons() {
    // Wait for DOM to be ready
    setTimeout(() => {
        const barkButton = document.querySelector('button:has(.material-symbols-outlined:contains("pets"))');
        const meowButton = document.querySelector('button:has(.material-symbols-outlined:contains("cat"))');
        const chirpButton = document.querySelector('button:has(.material-symbols-outlined:contains("flutter"))');
        
        if (barkButton) {
            barkButton.dataset.sound = 'bark';
            barkButton.classList.add('pet-sound-btn');
        }
        if (meowButton) {
            meowButton.dataset.sound = 'meow';
            meowButton.classList.add('pet-sound-btn');
        }
        if (chirpButton) {
            chirpButton.dataset.sound = 'chirp';
            chirpButton.classList.add('pet-sound-btn');
        }
    }, 100);
}

// Navigation dropdown functionality
function initializeNavDropdown() {
    const dropdownBtn = document.getElementById('nav-dropdown-btn');
    const dropdownMenu = document.getElementById('nav-dropdown-menu');
    
    if (!dropdownBtn || !dropdownMenu) return;
    
    dropdownBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        const isActive = dropdownMenu.classList.contains('show');
        
        if (isActive) {
            closeNavDropdown();
        } else {
            openNavDropdown();
        }
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!dropdownBtn.contains(e.target) && !dropdownMenu.contains(e.target)) {
            closeNavDropdown();
        }
    });
    
    // Close dropdown when pressing Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeNavDropdown();
        }
    });
}

function openNavDropdown() {
    const dropdownBtn = document.getElementById('nav-dropdown-btn');
    const dropdownMenu = document.getElementById('nav-dropdown-menu');
    
    dropdownBtn.classList.add('active');
    dropdownMenu.classList.add('show');
}

function closeNavDropdown() {
    const dropdownBtn = document.getElementById('nav-dropdown-btn');
    const dropdownMenu = document.getElementById('nav-dropdown-menu');
    
    dropdownBtn.classList.remove('active');
    dropdownMenu.classList.remove('show');
}

// Hero search functionality (similar to navbar search)
function initializeHeroSearch() {
    const searchInput = document.getElementById('hero-search');
    const dropdown = document.getElementById('hero-dropdown');
    const searchForm = searchInput?.closest('form');
    
    if (!searchInput || !dropdown) return;
    
    let searchTimeout;
    
    searchInput.addEventListener('input', function() {
        const query = this.value.toLowerCase().trim();
        
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            if (query.length < 2) {
                hideHeroDropdown();
                return;
            }
            
            showHeroSearchDropdown(query);
        }, 200);
    });
    
    // Handle form submission
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const query = searchInput.value.trim();
            if (query) {
                performHeroSearch(query);
            }
        });
    }
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!searchInput.contains(e.target) && !dropdown.contains(e.target)) {
            hideHeroDropdown();
        }
    });
}

function showHeroSearchDropdown(query) {
    const dropdown = document.getElementById('hero-dropdown');
    
    // Search tips if available
    let tipResults = [];
    if (window.petTips) {
        tipResults = window.petTips.filter(tip => 
            tip.title.toLowerCase().includes(query) ||
            tip.category.toLowerCase().includes(query) ||
            tip.summary.toLowerCase().includes(query)
        ).slice(0, 5);
    }
    
    // Search breeds if available
    let breedResults = [];
    if (window.breedSearch) {
        breedResults = window.breedSearch.searchBreeds(query).slice(0, 5);
    }
    
    let content = '';
    
    // Add tips section
    if (tipResults.length > 0) {
        content += '<div class="dropdown-section"><div class="section-header">Pet Tips</div>';
        content += tipResults.map(tip => `
            <div class="tip-item" onclick="showTipPopup(${tip.id})">
                <div class="tip-category">${tip.category}</div>
                <div class="tip-title">${tip.title}</div>
                <div class="tip-summary">${tip.summary}</div>
            </div>
        `).join('');
        content += '</div>';
    }
    
    // Add breeds section
    if (breedResults.length > 0) {
        content += '<div class="dropdown-section"><div class="section-header">Pet Breeds</div>';
        content += breedResults.map(breed => `
            <div class="tip-item breed-item" onclick="window.breedSearch.showBreedPopup(${breed.id}, '${breed.category}')">
                <div class="tip-category">${breed.category.toUpperCase()}</div>
                <div class="tip-title">${breed.name}</div>
                <div class="tip-summary">${breed.size} • ${breed.personality.slice(0, 2).join(', ')}</div>
            </div>
        `).join('');
        content += '</div>';
    }
    
    if (content === '') {
        dropdown.innerHTML = '<div class="no-results">No results found</div>';
    } else {
        dropdown.innerHTML = content;
    }
    
    dropdown.classList.add('show');
}

function hideHeroDropdown() {
    const dropdown = document.getElementById('hero-dropdown');
    if (dropdown) {
        dropdown.classList.remove('show');
    }
}

function performHeroSearch(query) {
    // Hide dropdown first
    hideHeroDropdown();
    
    // You can implement actual search logic here
    console.log('Performing search for:', query);
    
    // For now, show an alert (you can replace with actual search results page)
    alert(`Searching for: "${query}". This would redirect to a search results page.`);
}

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeProfileDropdown();
    initializeNavDropdown();
    initializeHeroSearch();
    initializeZodiacReveal();
    setupSoundButtons();
    
    // Initialize pet sounds after setup
    setTimeout(() => {
        initializePetSounds();
    }, 200);
    
    console.log('Home page functionality initialized with dropdown and hero search');
});
