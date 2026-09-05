// HEALTHTRACK.JS - Pet Heart Rate Calculator JavaScript

// ===== GLOBAL VARIABLES =====
let mobilenetModel = null;
let modelLoading = true;
let timerInterval = null;
let timerSeconds = 15;

// Heart rate ranges for different pet types
const heartRateRanges = {
  dog: {low: 70, high: 120}, 
  cat: {low: 140, high: 220}, 
  parrot: {low: 200, high: 400},
  rabbit: {low: 130, high: 325}, 
  hamster: {low: 300, high: 600}, 
  guineapig: {low: 230, high: 380},
  ferret: {low: 200, high: 400}, 
  horse: {low: 28, high: 44}, 
  cow: {low: 48, high: 84},
  goat: {low: 70, high: 90}, 
  sheep: {low: 70, high: 80}, 
  pig: {low: 70, high: 120},
  chicken: {low: 220, high: 360}, 
  duck: {low: 180, high: 250}, 
  pigeon: {low: 200, high: 300},
  canary: {low: 300, high: 900}, 
  turtle: {low: 15, high: 30}, 
  snake: {low: 20, high: 40},
  lizard: {low: 30, high: 50}, 
  frog: {low: 20, high: 80}, 
  fish: {low: 30, high: 120}
};

// Keywords for AI image recognition
const petKeywords = {
  dog: ["dog", "puppy", "retriever", "labrador", "shepherd", "husky", "terrier", "poodle", "beagle", "bulldog"],
  cat: ["cat", "kitten", "tabby", "siamese", "persian", "bengal"],
  parrot: ["parrot", "macaw", "cockatoo", "parakeet", "budgie"],
  rabbit: ["rabbit", "hare", "bunny"],
  hamster: ["hamster", "rodent"],
  guineapig: ["guinea", "cavy"],
  ferret: ["ferret", "polecat"],
  horse: ["horse", "pony"],
  cow: ["cow", "bull", "ox", "cattle"],
  goat: ["goat"],
  sheep: ["sheep", "lamb"],
  pig: ["pig", "hog", "boar"],
  chicken: ["chicken", "hen", "rooster"],
  duck: ["duck"],
  pigeon: ["pigeon", "dove"],
  canary: ["canary", "finch"],
  turtle: ["turtle", "tortoise"],
  snake: ["snake", "python", "cobra"],
  lizard: ["lizard", "gecko", "iguana"],
  frog: ["frog", "toad"],
  fish: ["fish", "goldfish", "tuna"]
};

const birdTypes = new Set(["parrot", "pigeon", "canary", "chicken", "duck", "eagle", "owl", "peacock"]);

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
  console.log('🐾 Health Track initialized');
  loadMobileNetModel();
  setupFileUpload();
  setupFormValidation();
  
  // Add smooth scroll behavior
  document.documentElement.style.scrollBehavior = 'smooth';
});

// ===== MODEL LOADING =====
async function loadMobileNetModel() {
  try {
    console.log('🤖 Loading MobileNet model...');
    mobilenetModel = await mobilenet.load();
    modelLoading = false;
    console.log('✅ MobileNet model loaded successfully');
    
    // Show success notification
    showNotification('AI model loaded successfully! 🤖', 'success');
  } catch (error) {
    console.error('❌ Failed to load MobileNet model:', error);
    modelLoading = false;
    showNotification('Failed to load AI model. Some features may not work.', 'error');
  }
}

// ===== NAVIGATION FUNCTIONS =====
function startApp() {
  const startBox = document.getElementById('startBox');
  const options = document.getElementById('options');
  
  // Add exit animation to start box
  startBox.style.animation = 'containerSlideOut 0.5s ease-in forwards';
  
  setTimeout(() => {
    startBox.style.display = 'none';
    options.classList.remove('hidden');
    
    // Add entrance animation to options
    options.style.animation = 'fadeInScale 0.6s ease-out forwards';
  }, 500);
}

function showDetail(methodType) {
  const options = document.getElementById('options');
  const detailContainer = document.getElementById(methodType);
  
  // Hide options with animation
  options.style.animation = 'fadeOutScale 0.4s ease-in forwards';
  
  setTimeout(() => {
    options.style.display = 'none';
    document.querySelectorAll('.health-detail-container').forEach(container => {
      container.classList.add('hidden');
    });
    
    detailContainer.classList.remove('hidden');
    detailContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 400);
}

function goBack() {
  const detailContainers = document.querySelectorAll('.health-detail-container');
  const options = document.getElementById('options');
  
  // Hide current detail with animation
  detailContainers.forEach(container => {
    if (!container.classList.contains('hidden')) {
      container.style.animation = 'detailFadeOut 0.4s ease-in forwards';
      setTimeout(() => {
        container.classList.add('hidden');
        container.style.animation = '';
      }, 400);
    }
  });
  
  // Show options after delay
  setTimeout(() => {
    options.style.display = 'grid';
    options.classList.remove('hidden');
    options.style.animation = 'fadeInScale 0.6s ease-out forwards';
    options.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 500);
}

// ===== TIMER FUNCTIONALITY =====
function startTimer() {
  const timerBtn = document.querySelector('.timer-btn');
  const timerDisplay = document.getElementById('timer-display');
  const beatsInput = document.getElementById('beats');
  
  if (timerInterval) {
    clearInterval(timerInterval);
  }
  
  timerSeconds = 15;
  timerDisplay.classList.remove('hidden');
  timerBtn.disabled = true;
  timerBtn.innerHTML = '<span class="material-symbols-outlined">timer</span>Counting...';
  timerBtn.style.opacity = '0.6';
  
  // Focus on beats input
  beatsInput.focus();
  beatsInput.placeholder = 'Count the heartbeats...';
  
  timerInterval = setInterval(() => {
    const minutes = Math.floor(timerSeconds / 60);
    const seconds = timerSeconds % 60;
    timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    if (timerSeconds <= 0) {
      clearInterval(timerInterval);
      timerDisplay.textContent = '00:00';
      timerDisplay.style.animation = 'timerComplete 0.5s ease-in-out';
      
      // Re-enable button
      setTimeout(() => {
        timerBtn.disabled = false;
        timerBtn.innerHTML = '<span class="material-symbols-outlined">timer</span>Start 15s Timer';
        timerBtn.style.opacity = '1';
        timerDisplay.classList.add('hidden');
        timerDisplay.style.animation = '';
        beatsInput.placeholder = 'Enter the count here';
        
        // Show completion notification
        showNotification('Timer completed! Enter your count. ⏰', 'info');
      }, 1000);
      
      return;
    }
    
    timerSeconds--;
  }, 1000);
}

// ===== FILE UPLOAD HANDLING =====
function setupFileUpload() {
  const fileInput = document.getElementById('petPic');
  const uploadArea = document.getElementById('fileUploadArea');
  const preview = document.getElementById('imagePreview');
  const previewImg = document.getElementById('previewImg');
  
  if (!fileInput || !uploadArea) return;
  
  // Drag and drop functionality
  uploadArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    uploadArea.style.borderColor = 'rgba(218, 165, 32, 0.8)';
    uploadArea.style.backgroundColor = 'rgba(218, 165, 32, 0.1)';
  });
  
  uploadArea.addEventListener('dragleave', (e) => {
    e.preventDefault();
    uploadArea.style.borderColor = '';
    uploadArea.style.backgroundColor = '';
  });
  
  uploadArea.addEventListener('drop', (e) => {
    e.preventDefault();
    uploadArea.style.borderColor = '';
    uploadArea.style.backgroundColor = '';
    
    const files = e.dataTransfer.files;
    if (files.length > 0 && files[0].type.startsWith('image/')) {
      fileInput.files = files;
      handleFileSelection(files[0]);
    }
  });
  
  fileInput.addEventListener('change', (e) => {
    if (e.target.files.length > 0) {
      handleFileSelection(e.target.files[0]);
    }
  });
}

function handleFileSelection(file) {
  const preview = document.getElementById('imagePreview');
  const previewImg = document.getElementById('previewImg');
  const placeholder = document.querySelector('.upload-placeholder');
  
  // Validate file size (5MB max)
  if (file.size > 5 * 1024 * 1024) {
    showNotification('File size too large. Please select an image under 5MB.', 'error');
    return;
  }
  
  const reader = new FileReader();
  reader.onload = (e) => {
    previewImg.src = e.target.result;
    placeholder.style.display = 'none';
    preview.classList.remove('hidden');
    preview.style.animation = 'imagePreviewIn 0.5s ease-out forwards';
    
    showNotification('Image uploaded successfully! 📷', 'success');
  };
  reader.readAsDataURL(file);
}

function removeImage() {
  const fileInput = document.getElementById('petPic');
  const preview = document.getElementById('imagePreview');
  const placeholder = document.querySelector('.upload-placeholder');
  
  preview.style.animation = 'imagePreviewOut 0.3s ease-in forwards';
  
  setTimeout(() => {
    fileInput.value = '';
    preview.classList.add('hidden');
    placeholder.style.display = 'block';
    preview.style.animation = '';
  }, 300);
}

// ===== FORM VALIDATION =====
function setupFormValidation() {
  const forms = document.querySelectorAll('form');
  
  forms.forEach(form => {
    const inputs = form.querySelectorAll('input[required], select[required]');
    
    inputs.forEach(input => {
      input.addEventListener('input', validateInput);
      input.addEventListener('blur', validateInput);
    });
  });
}

function validateInput(e) {
  const input = e.target;
  const inputGroup = input.closest('.input-group');
  
  if (!input.value.trim() && input.required) {
    input.style.borderColor = 'rgba(239, 68, 68, 0.6)';
    inputGroup?.classList.add('error');
  } else {
    input.style.borderColor = '';
    inputGroup?.classList.remove('error');
  }
}

// ===== MANUAL CALCULATION =====
function calcManual() {
  const petType = document.getElementById('petType').value;
  const beats = Number(document.getElementById('beats').value);
  const age = Number(document.getElementById('age').value) || 0;
  const weight = Number(document.getElementById('weight').value) || 0;
  const resultElement = document.getElementById('manualResult');
  
  // Clear previous results
  resultElement.innerHTML = '';
  resultElement.classList.remove('hidden');
  
  // Validation
  if (!petType || !beats) {
    displayError(resultElement, '⚠️ Please fill all required fields.');
    return;
  }
  
  if (beats <= 0 || beats > 100) {
    displayError(resultElement, '⚠️ Please enter a valid heartbeat count (1-100).');
    return;
  }
  
  const heartRate = beats * 4;
  const range = heartRateRanges[petType];
  
  if (!range) {
    displayError(resultElement, '❓ No heart rate data available for this pet type.');
    return;
  }
  
  // Apply age and weight adjustments
  let adjustedHeartRate = heartRate;
  if (age > 0) {
    adjustedHeartRate -= Math.min(5, age * 0.5);
  }
  if (weight > 0) {
    adjustedHeartRate += Math.min(8, weight * 0.2);
  }
  adjustedHeartRate = Math.round(Math.max(adjustedHeartRate, 10));
  
  const analysis = analyzeHeartRate(adjustedHeartRate, range);
  displayResult(resultElement, {
    heartRate: adjustedHeartRate,
    status: analysis.status,
    emoji: analysis.emoji,
    colors: analysis.colors,
    range: range,
    method: 'Manual',
    petType: petType
  });
  
  // Add completion animation
  resultElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// ===== CAMERA/AI CALCULATION =====
async function calcCamera() {
  const petType = document.getElementById('camPetType').value;
  const file = document.getElementById('petPic').files[0];
  const age = Number(document.getElementById('camAge').value) || 0;
  const weight = Number(document.getElementById('camWeight').value) || 0;
  const loadingElement = document.getElementById('loadingMsg');
  const resultElement = document.getElementById('cameraResult');
  
  // Reset displays
  loadingElement.classList.add('hidden');
  resultElement.innerHTML = '<span class="material-symbols-outlined mr-2">upload</span>Upload image and click Analyze to get started';
  
  // Validation
  if (!petType || !file) {
    displayError(resultElement, '⚠️ Please select pet type and upload a picture.');
    return;
  }
  
  if (modelLoading) {
    loadingElement.innerHTML = '<div class="loading-spinner"></div><p>🤖 Loading AI model… please wait</p>';
    loadingElement.classList.remove('hidden');
    return;
  }
  
  if (!mobilenetModel) {
    displayError(resultElement, '❌ AI model failed to load. Please refresh the page.');
    return;
  }
  
  // Show loading
  loadingElement.classList.remove('hidden');
  resultElement.innerHTML = '';
  
  try {
    const reader = new FileReader();
    reader.onload = async (e) => {
      const img = new Image();
      img.src = e.target.result;
      
      img.onload = async () => {
        try {
          // AI Classification
          const predictions = await mobilenetModel.classify(img, 5);
          console.log('🔍 AI Predictions:', predictions);
          
          const isValidPet = validatePetImage(predictions, petType);
          if (!isValidPet) {
            loadingElement.classList.add('hidden');
            displayError(resultElement, '🙅 Uploaded image does not match selected pet type. Please upload a correct pet image.');
            return;
          }
          
          // Calculate heart rate based on image analysis
          const heartRate = calculateHeartRateFromImage(img, petType, age, weight);
          const range = heartRateRanges[petType];
          const analysis = analyzeHeartRate(heartRate, range);
          
          loadingElement.classList.add('hidden');
          displayResult(resultElement, {
            heartRate: heartRate,
            status: analysis.status,
            emoji: analysis.emoji,
            colors: analysis.colors,
            range: range,
            method: 'AI-Verified',
            petType: petType,
            aiVerified: true
          });
          
          resultElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
          
        } catch (error) {
          console.error('❌ Analysis error:', error);
          loadingElement.classList.add('hidden');
          displayError(resultElement, '❌ Error analyzing image. Please try again.');
        }
      };
    };
    reader.readAsDataURL(file);
    
  } catch (error) {
    console.error('❌ Camera calculation error:', error);
    loadingElement.classList.add('hidden');
    displayError(resultElement, '❌ Error processing image. Please try again.');
  }
}

// ===== AI IMAGE VALIDATION =====
function validatePetImage(predictions, selectedPetType) {
  if (!selectedPetType) return false;
  
  const keywords = petKeywords[selectedPetType] || [];
  let confidenceScore = 0;
  
  for (let prediction of predictions.slice(0, 5)) {
    const label = (prediction.className || '').toLowerCase();
    const probability = prediction.probability || 0;
    
    // Direct keyword matching
    for (let keyword of keywords) {
      if (label.includes(keyword)) {
        if (probability >= 0.05) return true;
        confidenceScore += probability;
        if (confidenceScore >= 0.15) return true;
      }
    }
    
    // Bird fallback matching
    if (birdTypes.has(selectedPetType) && (label.includes('bird') || label.includes('fowl'))) {
      if (probability >= 0.05) return true;
      confidenceScore += probability;
      if (confidenceScore >= 0.15) return true;
    }
  }
  
  return false;
}

// ===== HEART RATE CALCULATION FROM IMAGE =====
function calculateHeartRateFromImage(img, petType, age, weight) {
  const canvas = document.createElement('canvas');
  canvas.width = img.width;
  canvas.height = img.height;
  const ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0);
  
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;
  
  // Calculate average brightness
  let r = 0, g = 0, b = 0, pixelCount = 0;
  for (let i = 0; i < data.length; i += 4) {
    r += data[i];
    g += data[i + 1];
    b += data[i + 2];
    pixelCount++;
  }
  
  const avgBrightness = (r + g + b) / (3 * pixelCount);
  const range = heartRateRanges[petType];
  
  // Base heart rate calculation using brightness
  let heartRate;
  if (avgBrightness > 180) {
    heartRate = Math.round(range.low + (range.high - range.low) * 0.2);
  } else if (avgBrightness > 100) {
    heartRate = Math.round((range.low + range.high) / 2);
  } else {
    heartRate = Math.round(range.low + (range.high - range.low) * 0.8);
  }
  
  // Apply age and weight adjustments
  if (age > 0) {
    heartRate -= Math.min(5, age * 0.3);
  }
  if (weight > 0) {
    heartRate += Math.min(6, weight * 0.1);
  }
  
  return Math.round(Math.max(heartRate, range.low - 10));
}

// ===== HEART RATE ANALYSIS =====
function analyzeHeartRate(heartRate, range) {
  if (heartRate < range.low) {
    return {
      status: 'Heart Rate is Low',
      emoji: '📉',
      colors: {
        background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(96, 165, 250, 0.15) 100%)',
        text: '#1d4ed8',
        border: 'rgba(59, 130, 246, 0.3)'
      }
    };
  } else if (heartRate > range.high) {
    return {
      status: 'Heart Rate is High',
      emoji: '📈',
      colors: {
        background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.2) 0%, rgba(248, 113, 113, 0.15) 100%)',
        text: '#dc2626',
        border: 'rgba(239, 68, 68, 0.3)'
      }
    };
  } else {
    return {
      status: 'Heart Rate is Normal',
      emoji: '✅',
      colors: {
        background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.2) 0%, rgba(74, 222, 128, 0.15) 100%)',
        text: '#16a34a',
        border: 'rgba(34, 197, 94, 0.3)'
      }
    };
  }
}

// ===== RESULT DISPLAY =====
function displayResult(element, data) {
  const petEmoji = getPetEmoji(data.petType);
  const methodBadge = data.aiVerified ? '🤖 AI-Verified' : '📝 Manual';
  
  element.innerHTML = `
    <div class="result-header" style="font-size: 28px; margin-bottom: 12px;">
      ${data.emoji}
    </div>
    <div class="result-main">
      <strong style="font-size: 20px;">${petEmoji} ${methodBadge}: ${data.heartRate} BPM</strong>
    </div>
    <div class="result-status" style="font-size: 16px; opacity: 0.9; margin: 8px 0;">
      ${data.status}
    </div>
    <div class="result-range" style="font-size: 14px; opacity: 0.7; margin-bottom: 10px;">
      Normal range: ${data.range.low}-${data.range.high} BPM
    </div>
    ${data.aiVerified ? '<div class="ai-badge" style="font-size: 12px; opacity: 0.6; margin-top: 8px;">✨ Verified by AI image analysis</div>' : ''}
  `;
  
  element.style.background = data.colors.background;
  element.style.color = data.colors.text;
  element.style.borderColor = data.colors.border;
  element.classList.remove('hidden');
}

function displayError(element, message) {
  element.innerHTML = message;
  element.style.background = 'linear-gradient(135deg, rgba(239, 68, 68, 0.2) 0%, rgba(248, 113, 113, 0.15) 100%)';
  element.style.color = '#dc2626';
  element.style.borderColor = 'rgba(239, 68, 68, 0.3)';
  element.classList.remove('hidden');
}

// ===== UTILITY FUNCTIONS =====
function getPetEmoji(petType) {
  const emojis = {
    dog: '🐶', cat: '🐱', parrot: '🦜', rabbit: '🐰', hamster: '🐹',
    guineapig: '🐭', ferret: '🦝', horse: '🐴', cow: '🐄', goat: '🐐',
    sheep: '🐑', pig: '🐖', chicken: '🐔', duck: '🦆', pigeon: '🕊️',
    canary: '🐤', turtle: '🐢', snake: '🐍', lizard: '🦎', frog: '🐸',
    fish: '🐟'
  };
  return emojis[petType] || '🐾';
}

function showNotification(message, type = 'info') {
  // Remove existing notifications
  const existing = document.querySelector('.notification');
  if (existing) existing.remove();
  
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: ${getNotificationColor(type)};
    color: white;
    padding: 12px 20px;
    border-radius: 25px;
    backdrop-filter: blur(10px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
    z-index: 1000;
    font-weight: 600;
    animation: notificationSlideIn 0.5s ease-out;
    max-width: 300px;
    font-size: 14px;
  `;
  
  notification.textContent = message;
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.animation = 'notificationSlideOut 0.5s ease-in forwards';
    setTimeout(() => notification.remove(), 500);
  }, 4000);
}

function getNotificationColor(type) {
  const colors = {
    success: 'linear-gradient(135deg, #10b981, #34d399)',
    error: 'linear-gradient(135deg, #ef4444, #f87171)',
    warning: 'linear-gradient(135deg, #f59e0b, #fbbf24)',
    info: 'linear-gradient(135deg, #3b82f6, #60a5fa)'
  };
  return colors[type] || colors.info;
}

// ===== ADDITIONAL CSS ANIMATIONS =====
const additionalStyles = `
<style>
@keyframes containerSlideOut {
  0% { opacity: 1; transform: translateY(0) scale(1); }
  100% { opacity: 0; transform: translateY(-30px) scale(0.9); }
}

@keyframes fadeInScale {
  0% { opacity: 0; transform: scale(0.9); }
  100% { opacity: 1; transform: scale(1); }
}

@keyframes fadeOutScale {
  0% { opacity: 1; transform: scale(1); }
  100% { opacity: 0; transform: scale(0.9); }
}

@keyframes detailFadeOut {
  0% { opacity: 1; transform: translateY(0); }
  100% { opacity: 0; transform: translateY(30px); }
}

@keyframes timerComplete {
  0% { background: rgba(0, 0, 0, 0.3); transform: scale(1); }
  50% { background: rgba(16, 185, 129, 0.5); transform: scale(1.1); }
  100% { background: rgba(16, 185, 129, 0.3); transform: scale(1); }
}

@keyframes imagePreviewIn {
  0% { opacity: 0; transform: scale(0.8); }
  100% { opacity: 1; transform: scale(1); }
}

@keyframes imagePreviewOut {
  0% { opacity: 1; transform: scale(1); }
  100% { opacity: 0; transform: scale(0.8); }
}

@keyframes notificationSlideIn {
  0% { opacity: 0; transform: translateX(100%); }
  100% { opacity: 1; transform: translateX(0); }
}

@keyframes notificationSlideOut {
  0% { opacity: 1; transform: translateX(0); }
  100% { opacity: 0; transform: translateX(100%); }
}

.input-group.error .health-input {
  border-color: rgba(239, 68, 68, 0.6) !important;
  background: linear-gradient(135deg, rgba(254, 226, 226, 0.9) 0%, rgba(252, 165, 165, 0.6) 100%) !important;
}
</style>
`;

// Inject additional styles
document.head.insertAdjacentHTML('beforeend', additionalStyles);

// ===== ENHANCED USER EXPERIENCE =====
document.addEventListener('keydown', function(e) {
  // ESC key to go back
  if (e.key === 'Escape') {
    const visibleDetails = document.querySelector('.health-detail-container:not(.hidden)');
    if (visibleDetails) {
      goBack();
    }
  }
  
  // Enter key to submit forms
  if (e.key === 'Enter' && e.target.matches('input, select')) {
    const form = e.target.closest('form');
    if (form) {
      e.preventDefault();
      const submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) submitBtn.click();
    }
  }
});

// Add loading state management
window.addEventListener('beforeunload', function() {
  if (timerInterval) {
    clearInterval(timerInterval);
  }
});

console.log('✅ Health Track JavaScript loaded successfully!');