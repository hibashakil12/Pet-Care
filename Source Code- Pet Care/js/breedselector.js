// breedselector.js - Breed matching logic

const breedMatchingQuestions = [
  {
    id: "living_space",
    question: "What type of living space do you have?",
    options: [
      { text: "Apartment", value: "apartment", weight: { small: 3, medium: 2, large: 1 } },
      { text: "House with a small yard", value: "small_yard", weight: { small: 2, medium: 3, large: 2 } },
      { text: "House with a large yard", value: "large_yard", weight: { small: 2, medium: 3, large: 3 } }
    ]
  },
  {
    id: "activity_level",
    question: "How active is your lifestyle?",
    options: [
      { text: "Low (mostly indoors)", value: "low", weight: { low_energy: 3, medium_energy: 1, high_energy: 0 } },
      { text: "Moderate (some outdoor activities)", value: "moderate", weight: { low_energy: 2, medium_energy: 3, high_energy: 2 } },
      { text: "High (very active, outdoors often)", value: "high", weight: { low_energy: 1, medium_energy: 2, high_energy: 3 } }
    ]
  },
  {
    id: "household_size",
    question: "How many people are in your household?",
    options: [
      { text: "1-2", value: "small", weight: { independent: 3, social: 1 } },
      { text: "3-4", value: "medium", weight: { independent: 2, social: 2 } },
      { text: "5+", value: "large", weight: { independent: 1, social: 3 } }
    ]
  }
];

const extendedBreedDatabase = [
  // Dogs
  {
    id: "golden_retriever",
    name: "Golden Retriever",
    type: "dog",
    size: "large",
    energy: "high_energy",
    temperament: "social",
    traits: { friendly: 5, intelligent: 5, energetic: 4, loyal: 5, trainable: 5 },
    care_level: "moderate",
    description: "Friendly, intelligent, and devoted. Great family dogs who love water and exercise.",
    image: "https://picsum.photos/400/300?random=dog1"
  },
  {
    id: "french_bulldog",
    name: "French Bulldog",
    type: "dog",
    size: "small",
    energy: "low_energy",
    temperament: "social",
    traits: { adaptable: 5, playful: 4, calm: 4, affectionate: 5, low_maintenance: 4 },
    care_level: "moderate",
    description: "Adaptable, playful, and smart. Perfect apartment dogs with minimal exercise needs.",
    image: "https://picsum.photos/400/300?random=dog2"
  },
  {
    id: "border_collie",
    name: "Border Collie",
    type: "dog",
    size: "medium",
    energy: "high_energy",
    temperament: "independent",
    traits: { intelligent: 5, energetic: 5, trainable: 5, focused: 5, active: 5 },
    care_level: "high",
    description: "Extremely intelligent and energetic. Needs lots of mental and physical stimulation.",
    image: "https://picsum.photos/400/300?random=dog3"
  },
  {
    id: "cavalier_king_charles",
    name: "Cavalier King Charles Spaniel",
    type: "dog",
    size: "small",
    energy: "medium_energy",
    temperament: "social",
    traits: { gentle: 5, friendly: 5, adaptable: 4, affectionate: 5, calm: 4 },
    care_level: "moderate",
    description: "Gentle, friendly, and adaptable. Perfect family companions with moderate exercise needs.",
    image: "https://picsum.photos/400/300?random=dog4"
  },
  {
    id: "german_shepherd",
    name: "German Shepherd",
    type: "dog",
    size: "large",
    energy: "high_energy",
    temperament: "independent",
    traits: { loyal: 5, intelligent: 5, protective: 5, trainable: 5, confident: 5 },
    care_level: "high",
    description: "Loyal, intelligent, and versatile. Great guard dogs and family protectors.",
    image: "https://picsum.photos/400/300?random=dog5"
  },
  {
    id: "pug",
    name: "Pug",
    type: "dog",
    size: "small",
    energy: "low_energy",
    temperament: "social",
    traits: { charming: 5, playful: 4, calm: 4, adaptable: 4, low_maintenance: 3 },
    care_level: "moderate",
    description: "Charming, playful, and adaptable. Great apartment dogs with moderate care needs.",
    image: "https://picsum.photos/400/300?random=dog6"
  },
  // Cats
  {
    id: "maine_coon",
    name: "Maine Coon",
    type: "cat",
    size: "large",
    energy: "medium_energy",
    temperament: "social",
    traits: { gentle: 5, intelligent: 4, friendly: 5, adaptable: 4, calm: 4 },
    care_level: "moderate",
    description: "Large, gentle cats known as 'gentle giants'. Great with families and other pets.",
    image: "https://picsum.photos/400/300?random=cat1"
  },
  {
    id: "siamese",
    name: "Siamese",
    type: "cat",
    size: "medium",
    energy: "high_energy",
    temperament: "social",
    traits: { vocal: 5, intelligent: 5, social: 5, energetic: 4, demanding: 4 },
    care_level: "moderate",
    description: "Intelligent, social, and very vocal. Form strong bonds with their owners.",
    image: "https://picsum.photos/400/300?random=cat2"
  },
  {
    id: "persian",
    name: "Persian",
    type: "cat",
    size: "medium",
    energy: "low_energy",
    temperament: "independent",
    traits: { calm: 5, gentle: 5, quiet: 5, affectionate: 4, low_maintenance: 2 },
    care_level: "high",
    description: "Quiet, gentle, and calm. Perfect lap cats who prefer peaceful environments.",
    image: "https://picsum.photos/400/300?random=cat3"
  },
  {
    id: "ragdoll",
    name: "Ragdoll",
    type: "cat",
    size: "large",
    energy: "low_energy",
    temperament: "social",
    traits: { docile: 5, gentle: 5, relaxed: 5, affectionate: 5, calm: 5 },
    care_level: "moderate",
    description: "Known for their docile temperament and tendency to go limp when picked up.",
    image: "https://picsum.photos/400/300?random=cat4"
  },
  {
    id: "british_shorthair",
    name: "British Shorthair",
    type: "cat",
    size: "medium",
    energy: "low_energy",
    temperament: "independent",
    traits: { calm: 5, independent: 5, gentle: 4, low_maintenance: 4, adaptable: 4 },
    care_level: "low",
    description: "Calm, independent cats with dense coats and round faces. Low maintenance companions.",
    image: "https://picsum.photos/400/300?random=cat5"
  },
  {
    id: "abyssinian",
    name: "Abyssinian",
    type: "cat",
    size: "medium",
    energy: "high_energy",
    temperament: "independent",
    traits: { active: 5, intelligent: 5, curious: 5, playful: 5, independent: 4 },
    care_level: "moderate",
    description: "Active, intelligent cats with ticked coats. Often described as dog-like in loyalty.",
    image: "https://picsum.photos/400/300?random=cat6"
  }
];

class BreedSelector {
  constructor() {
    this.currentQuestion = 0;
    this.answers = {};
    this.scores = {};
    this.init();
  }

  init() {
    this.renderQuestion();
  }

  renderQuestion() {
    const container = document.getElementById('breed-selector-container');
    const progressContainer = document.getElementById('breed-progress');
    
    if (!container) return;

    const question = breedMatchingQuestions[this.currentQuestion];
    const progress = ((this.currentQuestion + 1) / breedMatchingQuestions.length) * 100;

    if (progressContainer) {
      progressContainer.innerHTML = `
        <div class="w-full bg-gray-200 rounded-full h-2 mb-4">
          <div class="bg-[var(--primary-color)] h-2 rounded-full transition-all duration-300" style="width: ${progress}%"></div>
        </div>
        <p class="text-sm text-gray-600 mb-6">Question ${this.currentQuestion + 1} of ${breedMatchingQuestions.length}</p>
      `;
    }

    container.innerHTML = `
      <div class="space-y-6">
        <h3 class="text-xl font-bold text-[#1c1c0d] text-center">${question.question}</h3>
        <div class="flex flex-wrap gap-4 justify-center">
          ${question.options.map((option, index) => `
            <label class="relative flex cursor-pointer items-center justify-center rounded-full border border-gray-300 bg-white px-6 py-3 text-base font-medium text-[#1c1c0d] transition-all hover:bg-gray-50 has-[:checked]:border-[var(--primary-color)] has-[:checked]:bg-[var(--primary-color)] has-[:checked]:text-white has-[:checked]:shadow-lg">
              ${option.text}
              <input class="invisible absolute" name="question_${question.id}" type="radio" value="${option.value}"/>
            </label>
          `).join('')}
        </div>
        <div class="flex justify-center pt-6">
          <button onclick="breedSelector.nextQuestion()" class="bg-[var(--primary-color)] text-white font-bold py-3 px-8 rounded-full hover:opacity-90 transition-all text-lg shadow-lg transform hover:scale-105">
            ${this.currentQuestion < breedMatchingQuestions.length - 1 ? 'Next Question' : 'Find My Matches!'}
          </button>
        </div>
      </div>
    `;
  }

  nextQuestion() {
    const question = breedMatchingQuestions[this.currentQuestion];
    const selected = document.querySelector(`input[name="question_${question.id}"]:checked`);
    
    if (!selected) {
      alert('Please select an answer!');
      return;
    }

    const selectedOption = question.options.find(opt => opt.value === selected.value);
    this.answers[question.id] = selectedOption;

    // Update scores
    for (const [key, value] of Object.entries(selectedOption.weight)) {
      this.scores[key] = (this.scores[key] || 0) + value;
    }

    this.currentQuestion++;

    if (this.currentQuestion < breedMatchingQuestions.length) {
      this.renderQuestion();
    } else {
      this.showResults();
    }
  }

  showResults() {
    const matches = this.calculateMatches();
    const container = document.getElementById('breed-selector-container');
    const progressContainer = document.getElementById('breed-progress');
    
    if (progressContainer) {
      progressContainer.innerHTML = '<div class="text-center"><span class="text-lg font-bold" style="background: linear-gradient(135deg, #8B4513 0%, #D2691E 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">Matching Complete! 🎉</span></div>';
    }

    container.innerHTML = `
      <div class="space-y-6">
        <div class="text-center mb-8">
          <h2 class="text-3xl font-bold text-[var(--primary-color)] mb-4">Your Top Breed Matches!</h2>
          <p class="text-gray-600">Based on your answers, here are the breeds that would suit you best:</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          ${matches.slice(0, 6).map((match, index) => `
            <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img src="${match.breed.image}" alt="${match.breed.name}" class="w-full h-48 object-cover">
              <div class="p-4">
                <div class="flex items-center justify-between mb-2">
                  <h3 class="text-lg font-bold text-[#1c1c0d]">${match.breed.name}</h3>
                  <div class="flex items-center">
                    <span class="text-sm font-bold text-green-600">${Math.round(match.score)}% match</span>
                  </div>
                </div>
                <p class="text-sm text-gray-600 mb-3">${match.breed.description}</p>
                <div class="flex flex-wrap gap-1 mb-3">
                  ${Object.entries(match.breed.traits).slice(0, 3).map(([trait, level]) => `
                    <span class="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">${trait}</span>
                  `).join('')}
                </div>
                <div class="text-xs text-gray-500">
                  Size: ${match.breed.size} • Energy: ${match.breed.energy.replace('_', ' ')} • Care: ${match.breed.care_level}
                </div>
              </div>
            </div>
          `).join('')}
        </div>
        
        <div class="text-center pt-6">
          <button onclick="breedSelector.restart()" class="bg-[var(--primary-color)] text-white font-bold py-3 px-8 rounded-full hover:opacity-90 transition-colors mr-4" style="min-width: 140px;">
            Try Again
          </button>
          <a href="petcarequiz.html" class="text-white font-bold py-3 px-8 rounded-full transition-colors inline-block" style="background: linear-gradient(135deg, #8B4513 0%, #D2691E 100%); box-shadow: 0 4px 15px rgba(139,69,19,0.3); min-width: 140px; text-decoration: none;" onmouseover="this.style.background='linear-gradient(135deg, #A0522D 0%, #DEB887 100%)'; this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 20px rgba(139,69,19,0.4)';" onmouseout="this.style.background='linear-gradient(135deg, #8B4513 0%, #D2691E 100%)'; this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(139,69,19,0.3)';">
            Take Full Quiz
          </a>
        </div>
      </div>
    `;
  }

  calculateMatches() {
    const matches = [];
    
    for (const breed of extendedBreedDatabase) {
      let score = 0;
      let maxScore = 0;

      // Size matching
      if (this.scores.small && breed.size === 'small') score += this.scores.small * 20;
      if (this.scores.medium && breed.size === 'medium') score += this.scores.medium * 20;
      if (this.scores.large && breed.size === 'large') score += this.scores.large * 20;
      maxScore += 60;

      // Energy matching
      if (this.scores.low_energy && breed.energy === 'low_energy') score += this.scores.low_energy * 15;
      if (this.scores.medium_energy && breed.energy === 'medium_energy') score += this.scores.medium_energy * 15;
      if (this.scores.high_energy && breed.energy === 'high_energy') score += this.scores.high_energy * 15;
      maxScore += 45;

      // Temperament matching
      if (this.scores.social && breed.temperament === 'social') score += this.scores.social * 10;
      if (this.scores.independent && breed.temperament === 'independent') score += this.scores.independent * 10;
      maxScore += 30;

      const percentage = maxScore > 0 ? (score / maxScore) * 100 : 0;
      matches.push({ breed, score: percentage });
    }

    return matches.sort((a, b) => b.score - a.score);
  }

  restart() {
    this.currentQuestion = 0;
    this.answers = {};
    this.scores = {};
    this.renderQuestion();
  }
}

// Initialize breed selector when page loads
let breedSelector;
document.addEventListener('DOMContentLoaded', () => {
  breedSelector = new BreedSelector();
});
