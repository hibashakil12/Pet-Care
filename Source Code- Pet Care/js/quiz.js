// quiz.js - Interactive Pet Care Quiz

const petQuizQuestions = [
  {
    id: 1,
    question: "What's your lifestyle like?",
    options: [
      { text: "Very Active - I exercise daily and love outdoor adventures", score: { dog_active: 3, dog_calm: 1, cat_active: 2, cat_calm: 1 } },
      { text: "Moderately Active - I enjoy walks and weekend activities", score: { dog_active: 2, dog_calm: 2, cat_active: 2, cat_calm: 2 } },
      { text: "Relaxed - I prefer indoor activities and quiet time", score: { dog_active: 1, dog_calm: 3, cat_active: 1, cat_calm: 3 } }
    ]
  },
  {
    id: 2,
    question: "How much time can you dedicate to a pet daily?",
    options: [
      { text: "4+ hours - I have lots of time for training and play", score: { dog_active: 3, dog_calm: 2, cat_active: 1, cat_calm: 1 } },
      { text: "2-3 hours - I can provide good attention and care", score: { dog_active: 2, dog_calm: 3, cat_active: 2, cat_calm: 2 } },
      { text: "1-2 hours - I want a more independent companion", score: { dog_active: 1, dog_calm: 2, cat_active: 3, cat_calm: 3 } }
    ]
  },
  {
    id: 3,
    question: "What's your living space like?",
    options: [
      { text: "Large house with yard - Plenty of space to roam", score: { dog_active: 3, dog_calm: 2, cat_active: 2, cat_calm: 2 } },
      { text: "Medium apartment/home - Comfortable but limited", score: { dog_active: 2, dog_calm: 3, cat_active: 3, cat_calm: 3 } },
      { text: "Small apartment - Cozy but space is at a premium", score: { dog_active: 1, dog_calm: 2, cat_active: 3, cat_calm: 3 } }
    ]
  },
  {
    id: 4,
    question: "What's your budget for pet care?",
    options: [
      { text: "High - I can afford premium food, grooming, and vet care", score: { dog_active: 2, dog_calm: 3, cat_active: 2, cat_calm: 2 } },
      { text: "Moderate - I can cover essentials and some extras", score: { dog_active: 3, dog_calm: 2, cat_active: 3, cat_calm: 3 } },
      { text: "Budget-conscious - I need a lower-maintenance pet", score: { dog_active: 1, dog_calm: 2, cat_active: 3, cat_calm: 3 } }
    ]
  },
  {
    id: 5,
    question: "How do you feel about pet training?",
    options: [
      { text: "Love it! I enjoy teaching commands and tricks", score: { dog_active: 3, dog_calm: 2, cat_active: 1, cat_calm: 1 } },
      { text: "Basic training is fine, but nothing too complex", score: { dog_active: 2, dog_calm: 3, cat_active: 2, cat_calm: 2 } },
      { text: "Prefer a pet that doesn't need much training", score: { dog_active: 1, dog_calm: 2, cat_active: 3, cat_calm: 3 } }
    ]
  }
];

const petRecommendations = {
  dog_active: {
    type: "High-Energy Dog",
    breeds: ["Border Collie", "Australian Shepherd", "Golden Retriever", "Labrador Retriever"],
    description: "You'd do great with an active dog breed! These dogs love exercise, mental stimulation, and being part of an active family. They're loyal, trainable, and will be your adventure buddy.",
    care_tips: ["Daily exercise (1-2 hours)", "Mental stimulation with puzzle toys", "Regular training sessions", "Consistent routine"]
  },
  dog_calm: {
    type: "Calm & Gentle Dog",
    breeds: ["Cavalier King Charles Spaniel", "Pug", "French Bulldog", "Basset Hound"],
    description: "A calm, gentle dog would suit your lifestyle perfectly! These breeds are affectionate, relatively low-maintenance, and happy to be your relaxed companion.",
    care_tips: ["Moderate daily walks", "Regular vet checkups", "Gentle play sessions", "Comfortable sleeping area"]
  },
  cat_active: {
    type: "Playful & Social Cat",
    breeds: ["Bengal", "Abyssinian", "Siamese", "Maine Coon"],
    description: "An active, social cat would be perfect for you! These breeds are playful, intelligent, and enjoy interaction with their humans. They'll keep you entertained!",
    care_tips: ["Interactive play sessions", "Climbing trees/shelves", "Mental enrichment toys", "Social interaction"]
  },
  cat_calm: {
    type: "Relaxed & Independent Cat",
    breeds: ["Persian", "Ragdoll", "British Shorthair", "Russian Blue"],
    description: "A calm, independent cat is ideal for your lifestyle! These breeds are gentle, low-maintenance, and perfect companions for a peaceful home environment.",
    care_tips: ["Quiet spaces to rest", "Regular grooming (long-haired)", "Consistent feeding routine", "Gentle affection on their terms"]
  }
};

class PetQuiz {
  constructor() {
    this.currentQuestion = 0;
    this.scores = { dog_active: 0, dog_calm: 0, cat_active: 0, cat_calm: 0 };
    this.answers = [];
    this.init();
  }

  init() {
    this.renderQuestion();
    this.setupEventListeners();
  }

  setupEventListeners() {
    const form = document.getElementById('quiz-form');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleAnswer();
      });
    }
  }

  renderQuestion() {
    const container = document.getElementById('quiz-container');
    const progressContainer = document.getElementById('quiz-progress');
    
    if (!container) return;

    const question = petQuizQuestions[this.currentQuestion];
    const progress = ((this.currentQuestion + 1) / petQuizQuestions.length) * 100;

    if (progressContainer) {
      progressContainer.innerHTML = `
        <div class="w-full bg-gray-200 rounded-full h-2 mb-4">
          <div class="bg-[#993d15] h-2 rounded-full transition-all duration-300" style="width: ${progress}%"></div>
        </div>
        <p class="text-sm text-gray-600 mb-6">Question ${this.currentQuestion + 1} of ${petQuizQuestions.length}</p>
      `;
    }

    container.innerHTML = `
      <form id="quiz-form" class="space-y-6">
        <div class="text-center mb-8">
          <h2 class="text-2xl font-bold text-[#1c1c0d] mb-4">${question.question}</h2>
        </div>
        
        <div class="space-y-3">
          ${question.options.map((option, index) => `
            <label class="flex items-start p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors has-[:checked]:border-[#993d15] has-[:checked]:bg-orange-50">
              <input type="radio" name="answer" value="${index}" class="mr-3 mt-1">
              <span class="text-[#1c1c0d]">${option.text}</span>
            </label>
          `).join('')}
        </div>
        
        <div class="flex justify-center pt-6">
          <button type="submit" class="bg-[#993d15] text-white font-bold py-3 px-8 rounded-full hover:bg-[#7a3111] transition-colors text-lg shadow-lg">
            ${this.currentQuestion < petQuizQuestions.length - 1 ? 'Next Question' : 'Get My Results!'}
          </button>
        </div>
      </form>
    `;

    // Re-setup event listener for the new form
    setTimeout(() => this.setupEventListeners(), 100);
  }

  handleAnswer() {
    const selected = document.querySelector('input[name="answer"]:checked');
    if (!selected) {
      alert('Please select an answer!');
      return;
    }

    const answerIndex = parseInt(selected.value);
    const question = petQuizQuestions[this.currentQuestion];
    const selectedOption = question.options[answerIndex];

    // Record answer
    this.answers.push({
      question: question.question,
      answer: selectedOption.text
    });

    // Update scores
    for (const [key, value] of Object.entries(selectedOption.score)) {
      this.scores[key] += value;
    }

    this.currentQuestion++;

    if (this.currentQuestion < petQuizQuestions.length) {
      this.renderQuestion();
    } else {
      this.showResults();
    }
  }

  showResults() {
    // Find the highest scoring category
    const maxScore = Math.max(...Object.values(this.scores));
    const bestMatch = Object.entries(this.scores).find(([key, score]) => score === maxScore)[0];
    
    const recommendation = petRecommendations[bestMatch];
    
    const container = document.getElementById('quiz-container');
    const progressContainer = document.getElementById('quiz-progress');
    
    if (progressContainer) {
      progressContainer.innerHTML = '<div class="text-center"><span class="text-lg font-bold text-green-600">Quiz Complete! 🎉</span></div>';
    }

    container.innerHTML = `
      <div class="text-center space-y-6 quiz-result-container">
        <div class="bg-white rounded-2xl p-8 shadow-lg result-card">
          <h2 class="text-3xl font-bold text-[#993d15] mb-4 result-title">Your Perfect Pet Match!</h2>
          
          <div class="bg-gradient-to-r from-orange-100 to-yellow-100 rounded-xl p-6 mb-6 recommendation-card">
            <h3 class="text-2xl font-bold text-[#1c1c0d] mb-3 pet-type-title">${recommendation.type}</h3>
            <p class="text-gray-700 text-lg leading-relaxed mb-4 description-text">${recommendation.description}</p>
            
            <div class="mb-4 breeds-section">
              <h4 class="font-bold text-[#1c1c0d] mb-2">Recommended Breeds:</h4>
              <div class="flex flex-wrap gap-2 justify-center breeds-container">
                ${recommendation.breeds.map((breed, index) => `
                  <span class="bg-white px-3 py-1 rounded-full text-sm font-medium text-[#993d15] border border-orange-200 breed-tag" style="animation-delay: ${index * 0.1}s">${breed}</span>
                `).join('')}
              </div>
            </div>
          </div>
          
          <div class="bg-blue-50 rounded-xl p-6 mb-6 care-tips-card">
            <h4 class="font-bold text-[#1c1c0d] mb-3">Care Tips for Your New Pet:</h4>
            <ul class="text-left space-y-2">
              ${recommendation.care_tips.map((tip, index) => `
                <li class="flex items-center care-tip-item" style="animation-delay: ${0.5 + index * 0.1}s">
                  <span class="text-green-600 mr-2 checkmark">✓</span>
                  <span class="text-gray-700">${tip}</span>
                </li>
              `).join('')}
            </ul>
          </div>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center buttons-container">
            <button onclick="petQuiz.restart()" class="quiz-button quiz-button-primary">
              Take Quiz Again
            </button>
            <a href="petbreedselector.html" class="quiz-button quiz-button-secondary">
              Find Specific Breeds
            </a>
          </div>
        </div>
      </div>
    `;
    
    // Add the enhanced styles for the quiz result
    if (!document.getElementById('quiz-result-styles')) {
      const styles = document.createElement('style');
      styles.id = 'quiz-result-styles';
      styles.textContent = `
        /* Quiz Result Animation Styles */
        .quiz-result-container {
          animation: fadeInUp 0.8s ease-out;
        }
        
        .result-card {
          animation: scaleIn 0.6s ease-out 0.2s both;
          transform-origin: center;
        }
        
        .result-title {
          animation: fadeInDown 0.6s ease-out 0.4s both;
        }
        
        .recommendation-card {
          animation: slideInLeft 0.6s ease-out 0.6s both;
        }
        
        .pet-type-title {
          animation: bounceIn 0.8s ease-out 0.8s both;
        }
        
        .description-text {
          animation: fadeIn 0.6s ease-out 1s both;
        }
        
        .breeds-section {
          animation: fadeInUp 0.6s ease-out 1.2s both;
        }
        
        .breed-tag {
          animation: popIn 0.4s ease-out both;
          transform: scale(0);
        }
        
        .care-tips-card {
          animation: slideInRight 0.6s ease-out 0.8s both;
        }
        
        .care-tip-item {
          animation: slideInLeft 0.4s ease-out both;
          transform: translateX(-30px);
          opacity: 0;
        }
        
        .checkmark {
          animation: checkmarkPulse 0.6s ease-out both;
        }
        
        .buttons-container {
          animation: fadeInUp 0.6s ease-out 1.4s both;
        }
        
        /* Enhanced Button Styles */
        .quiz-button {
          font-weight: bold;
          padding: 12px 24px;
          border-radius: 9999px;
          text-decoration: none;
          display: inline-block;
          text-center;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          transform: translateY(0);
        }
        
        .quiz-button:before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s;
        }
        
        .quiz-button:hover:before {
          left: 100%;
        }
        
        .quiz-button-primary {
          background: linear-gradient(135deg, #993d15, #7a3111);
          color: white;
          border: none;
          cursor: pointer;
        }
        
        .quiz-button-primary:hover {
          background: linear-gradient(135deg, #7a3111, #5c240d);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(153, 61, 21, 0.3);
        }
        
        .quiz-button-primary:active {
          transform: translateY(0);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }
        
        .quiz-button-secondary {
          background: linear-gradient(135deg, #8b4513, #a0522d);
          color: white;
        }
        
        .quiz-button-secondary:hover {
          background: linear-gradient(135deg, #a0522d, #cd853f);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(139, 69, 19, 0.3);
          color: white;
          text-decoration: none;
        }
        
        .quiz-button-secondary:active {
          transform: translateY(0);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }
        
        /* Animation Keyframes */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes popIn {
          from {
            opacity: 0;
            transform: scale(0);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes checkmarkPulse {
          0% {
            transform: scale(0.8);
          }
          50% {
            transform: scale(1.2);
          }
          100% {
            transform: scale(1);
          }
        }
        
        /* Responsive adjustments */
        @media (max-width: 640px) {
          .quiz-button {
            width: 100%;
            margin-bottom: 8px;
          }
        }
      `;
      document.head.appendChild(styles);
    }
  }

  restart() {
    this.currentQuestion = 0;
    this.scores = { dog_active: 0, dog_calm: 0, cat_active: 0, cat_calm: 0 };
    this.answers = [];
    this.renderQuestion();
  }
}

// Initialize quiz when page loads
let petQuiz;
document.addEventListener('DOMContentLoaded', () => {
  petQuiz = new PetQuiz();
});
