// PAWSOME AI SYMPTOM CHECKER - Comprehensive Pet Health Analysis System
// Enhanced with extensive medical knowledge and AI-like reasoning

// ===== GLOBAL VARIABLES =====
let isAnalyzing = false;
let analysisHistory = [];
let currentPetType = null;

// ===== COMPREHENSIVE SYMPTOM DATABASE =====
const symptomDatabase = {
  // Gastrointestinal Issues
  gastrointestinal: [
    {
      keywords: ["vomit", "vomiting", "nausea", "throwing up", "retching", "puke", "sick", "heaving"],
      category: "Gastrointestinal",
      severity: "moderate",
      icon: "🤢",
      pets: ["dog", "cat", "rabbit", "ferret"],
      symptoms: ["Repeated vomiting", "Loss of appetite", "Dehydration", "Lethargy"],
      causes: ["Dietary indiscretion", "Food poisoning", "Parasites", "Gastritis", "Foreign object ingestion"],
      advice: "Withhold food for 6-8 hours, offer small amounts of water. Monitor for dehydration signs.",
      emergency: "If vomiting persists >24h, contains blood, or pet is lethargic/dehydrated, seek immediate veterinary care.",
      homecare: ["Withhold food 6-8 hours", "Offer small water amounts frequently", "Bland diet when symptoms improve"],
      timeline: "24-48 hours"
    },
    {
      keywords: ["diarrhea", "loose stool", "runny", "watery stool", "soft stool", "bowel movement", "poop", "loose bowels"],
      category: "Gastrointestinal",
      severity: "moderate",
      icon: "💩",
      pets: ["dog", "cat", "rabbit", "guinea pig"],
      symptoms: ["Frequent loose stools", "Urgency", "Possible blood or mucus", "Dehydration"],
      causes: ["Dietary changes", "Stress", "Parasites", "Bacterial infection", "Food intolerance"],
      advice: "Ensure adequate hydration. Bland diet (boiled chicken and rice) for 24-48 hours.",
      emergency: "If diarrhea is severe, bloody, contains mucus, or lasts >48h, consult a veterinarian.",
      homecare: ["Maintain hydration", "Bland diet", "Monitor frequency and consistency"],
      timeline: "48-72 hours"
    },
    {
      keywords: ["constipation", "constipated", "not pooping", "hard stool", "straining", "difficult bowel"],
      category: "Gastrointestinal",
      severity: "moderate",
      icon: "😣",
      pets: ["dog", "cat", "rabbit"],
      symptoms: ["Straining to defecate", "Hard, dry stools", "Decreased appetite", "Discomfort"],
      causes: ["Dehydration", "Lack of fiber", "Foreign object", "Stress", "Medical conditions"],
      advice: "Increase water intake, add fiber to diet, encourage exercise.",
      emergency: "If no bowel movement for >72h or signs of pain/distress, seek veterinary care.",
      homecare: ["Increase water intake", "Add pumpkin to diet", "Encourage gentle exercise"],
      timeline: "72 hours"
    }
  ],

  // Respiratory Issues
  respiratory: [
    {
      keywords: ["cough", "coughing", "hack", "hacking", "kennel cough", "dry cough", "wet cough"],
      category: "Respiratory",
      severity: "moderate",
      icon: "😤",
      pets: ["dog", "cat"],
      symptoms: ["Persistent coughing", "Possible fever", "Lethargy", "Loss of appetite"],
      causes: ["Kennel cough", "Upper respiratory infection", "Allergies", "Heart disease"],
      advice: "Monitor breathing patterns. Avoid vigorous activity. Ensure good ventilation.",
      emergency: "If cough is persistent, breathing is labored, or gums appear bluish, seek urgent veterinary care.",
      homecare: ["Rest and limit activity", "Use humidifier", "Monitor breathing"],
      timeline: "7-10 days"
    },
    {
      keywords: ["sneeze", "sneezing", "nasal discharge", "runny nose", "stuffy", "congested"],
      category: "Respiratory",
      severity: "low",
      icon: "🤧",
      pets: ["dog", "cat", "rabbit"],
      symptoms: ["Frequent sneezing", "Nasal discharge", "Possible eye watering", "Reduced appetite"],
      causes: ["Allergies", "Upper respiratory infection", "Foreign object", "Environmental irritants"],
      advice: "Monitor discharge color and consistency. Clear discharge is usually less concerning.",
      emergency: "If discharge is thick, yellow/green, or accompanied by fever and loss of appetite, see a vet.",
      homecare: ["Keep nasal passages clear", "Use humidifier", "Remove irritants"],
      timeline: "5-7 days"
    },
    {
      keywords: ["difficulty breathing", "labored breathing", "panting", "wheezing", "gasping", "blue gums"],
      category: "Respiratory Emergency",
      severity: "urgent",
      icon: "🚨",
      pets: ["dog", "cat", "bird"],
      symptoms: ["Labored breathing", "Open mouth breathing", "Blue/pale gums", "Panic/distress"],
      causes: ["Asthma", "Heart disease", "Pneumonia", "Foreign object", "Allergic reaction"],
      advice: "This is a medical emergency. Keep pet calm and seek immediate veterinary attention.",
      emergency: "IMMEDIATE veterinary care required. This is life-threatening.",
      homecare: ["Keep pet calm", "Ensure fresh air", "Transport to vet immediately"],
      timeline: "IMMEDIATE"
    }
  ],

  // Neurological Issues
  neurological: [
    {
      keywords: ["seizure", "convulsion", "tremor", "shaking", "twitching", "spasm", "fit"],
      category: "Neurological",
      severity: "urgent",
      icon: "⚡",
      pets: ["dog", "cat"],
      symptoms: ["Uncontrolled muscle movements", "Loss of consciousness", "Confusion after episode"],
      causes: ["Epilepsy", "Toxin ingestion", "Brain tumor", "Metabolic disorder"],
      advice: "Time the seizure duration. Clear area of hazards. Do NOT put hands near mouth.",
      emergency: "If seizure lasts >2 minutes, occurs in clusters, or is first-time event, seek immediate care.",
      homecare: ["Time the seizure", "Clear surrounding area", "Stay calm"],
      timeline: "IMMEDIATE if severe"
    },
    {
      keywords: ["dizzy", "balance", "falling", "tilting head", "circling", "disoriented", "confusion"],
      category: "Neurological",
      severity: "moderate",
      icon: "😵",
      pets: ["dog", "cat"],
      symptoms: ["Loss of balance", "Head tilting", "Circling", "Disorientation"],
      causes: ["Inner ear infection", "Vestibular disease", "Brain injury", "Toxins"],
      advice: "Provide safe, quiet environment. Prevent falls and injuries.",
      emergency: "If symptoms worsen rapidly or accompanied by other neurological signs, seek veterinary care.",
      homecare: ["Provide safe environment", "Limit movement", "Monitor closely"],
      timeline: "24-48 hours"
    }
  ],

  // Skin & Coat Issues
  dermatological: [
    {
      keywords: ["itch", "itching", "scratch", "scratching", "rash", "hot spot", "red skin", "irritated"],
      category: "Dermatological",
      severity: "low",
      icon: "🐾",
      pets: ["dog", "cat", "rabbit"],
      symptoms: ["Excessive scratching", "Red, irritated skin", "Hair loss", "Possible odor"],
      causes: ["Allergies", "Fleas/ticks", "Dry skin", "Contact irritant", "Bacterial infection"],
      advice: "Check for fleas/ticks. Use gentle, pet-safe shampoos. Identify potential allergens.",
      emergency: "If skin is broken, oozing, or pet is in severe distress, consult veterinarian.",
      homecare: ["Check for parasites", "Use gentle cleansing", "Prevent scratching"],
      timeline: "1-2 weeks"
    },
    {
      keywords: ["hair loss", "bald spots", "patchy fur", "thinning coat", "alopecia"],
      category: "Dermatological",
      severity: "moderate",
      icon: "🦲",
      pets: ["dog", "cat", "rabbit"],
      symptoms: ["Patches of hair loss", "Possible itching", "Skin changes"],
      causes: ["Allergies", "Hormonal issues", "Fungal infection", "Stress", "Parasites"],
      advice: "Document affected areas with photos. Note any patterns or progression.",
      emergency: "If accompanied by severe itching, skin lesions, or systemic symptoms, see a vet.",
      homecare: ["Document progression", "Gentle care", "Avoid irritants"],
      timeline: "2-3 weeks"
    }
  ],

  // Orthopedic Issues
  orthopedic: [
    {
      keywords: ["limp", "limping", "lameness", "favoring leg", "not walking", "leg pain"],
      category: "Orthopedic",
      severity: "moderate",
      icon: "🦵",
      pets: ["dog", "cat"],
      symptoms: ["Altered gait", "Reluctance to move", "Swelling", "Pain on touch"],
      causes: ["Injury", "Arthritis", "Muscle strain", "Foreign object in paw"],
      advice: "Restrict activity for 24-48 hours. Apply cold compress for first 24h, then warm.",
      emergency: "If severe pain, non-weight bearing, obvious deformity, or swelling, see veterinarian.",
      homecare: ["Restrict activity", "Cold compress initially", "Monitor improvement"],
      timeline: "48-72 hours"
    }
  ],

  // Eye Issues
  ophthalmological: [
    {
      keywords: ["eye", "red eye", "discharge", "squint", "tearing", "cloudy", "eye injury"],
      category: "Ophthalmological",
      severity: "urgent",
      icon: "👁️",
      pets: ["dog", "cat", "rabbit"],
      symptoms: ["Redness", "Discharge", "Squinting", "Cloudiness", "Pawing at eye"],
      causes: ["Infection", "Injury", "Foreign object", "Allergies", "Corneal ulcer"],
      advice: "Eye conditions can worsen rapidly. Avoid touching or cleaning unless directed by vet.",
      emergency: "Most eye issues require prompt veterinary evaluation to prevent vision loss.",
      homecare: ["Prevent scratching", "Keep area clean", "Seek veterinary care"],
      timeline: "12-24 hours"
    }
  ],

  // Urinary Issues
  urinary: [
    {
      keywords: ["urination", "peeing", "blood in urine", "straining", "litter box", "frequent urination"],
      category: "Urinary",
      severity: "urgent",
      icon: "🚽",
      pets: ["dog", "cat"],
      symptoms: ["Frequent urination attempts", "Blood in urine", "Straining", "Crying while urinating"],
      causes: ["Urinary tract infection", "Bladder stones", "Blockage", "Kidney disease"],
      advice: "Ensure access to fresh water. Monitor urination frequency and output.",
      emergency: "Male cats unable to urinate is a life-threatening emergency. Seek immediate care.",
      homecare: ["Increase water intake", "Monitor closely", "Note urination patterns"],
      timeline: "12-24 hours (IMMEDIATE for blockage)"
    }
  ],

  // General/Behavioral
  general: [
    {
      keywords: ["lethargy", "tired", "weak", "not active", "sleeping more", "low energy"],
      category: "General",
      severity: "moderate",
      icon: "😴",
      pets: ["dog", "cat", "rabbit", "bird"],
      symptoms: ["Decreased activity", "More sleeping", "Reluctance to play", "General malaise"],
      causes: ["Illness", "Pain", "Depression", "Age-related changes", "Medication effects"],
      advice: "Monitor for other symptoms. Ensure comfortable environment and access to food/water.",
      emergency: "If accompanied by vomiting, pale gums, collapse, or persists >24h, seek care.",
      homecare: ["Rest", "Monitor appetite", "Comfort care"],
      timeline: "24-48 hours"
    },
    {
      keywords: ["not eating", "loss of appetite", "anorexia", "refusing food", "won't eat"],
      category: "General",
      severity: "moderate",
      icon: "🍽️",
      pets: ["dog", "cat", "rabbit", "bird"],
      symptoms: ["Refusal to eat", "Decreased interest in food", "Weight loss", "Weakness"],
      causes: ["Illness", "Stress", "Dental problems", "Medication side effects", "Environmental changes"],
      advice: "Try offering favorite foods or treats. Ensure fresh food and water availability.",
      emergency: "If refusal >24h (cats >12h), or with other symptoms, contact veterinarian.",
      homecare: ["Offer favorite foods", "Ensure fresh water", "Monitor weight"],
      timeline: "12-24 hours"
    }
  ],

  // Emergency Situations
  emergency: [
    {
      keywords: ["bloated", "bloat", "distended abdomen", "swollen belly", "GDV", "twisted stomach"],
      category: "Emergency",
      severity: "urgent",
      icon: "🚨",
      pets: ["dog"],
      symptoms: ["Distended abdomen", "Retching without vomiting", "Restlessness", "Drooling"],
      causes: ["Gastric dilation-volvulus (GDV)", "Food bloat", "Gas accumulation"],
      advice: "This is a life-threatening emergency requiring immediate veterinary intervention.",
      emergency: "IMMEDIATE emergency care required. This condition can be fatal within hours.",
      homecare: ["Transport immediately", "Do not give food/water", "Keep calm"],
      timeline: "IMMEDIATE"
    }
  ]
};

// ===== PET TYPE DETECTION =====
function detectPetType(text) {
  const petKeywords = {
    dog: ['dog', 'puppy', 'canine', 'pup', 'doggy', 'golden retriever', 'labrador', 'german shepherd'],
    cat: ['cat', 'kitten', 'feline', 'kitty', 'persian', 'siamese', 'tabby'],
    rabbit: ['rabbit', 'bunny', 'hare', 'cottontail'],
    bird: ['bird', 'parrot', 'canary', 'budgie', 'cockatiel', 'finch', 'parakeet'],
    guinea_pig: ['guinea pig', 'cavy'],
    hamster: ['hamster', 'gerbil'],
    ferret: ['ferret']
  };
  
  const lower = text.toLowerCase();
  for (const [pet, keywords] of Object.entries(petKeywords)) {
    for (const keyword of keywords) {
      if (lower.includes(keyword)) {
        return pet;
      }
    }
  }
  return 'unknown';
}

// ===== ADVANCED SYMPTOM ANALYSIS =====
function analyzeSymptomsText(text) {
  const lower = text.toLowerCase();
  const detectedPetType = detectPetType(text);
  const matches = [];
  const contextClues = extractContextClues(text);
  
  // Search through all symptom categories
  for (const [category, symptoms] of Object.entries(symptomDatabase)) {
    for (const symptom of symptoms) {
      let matchScore = 0;
      let matchedKeywords = [];
      
      // Check keyword matches
      for (const keyword of symptom.keywords) {
        if (lower.includes(keyword)) {
          matchScore += getKeywordWeight(keyword);
          matchedKeywords.push(keyword);
        }
      }
      
      // Boost score for pet-specific symptoms
      if (detectedPetType !== 'unknown' && symptom.pets.includes(detectedPetType)) {
        matchScore *= 1.5;
      }
      
      if (matchScore > 0) {
        matches.push({
          ...symptom,
          matchScore,
          matchedKeywords,
          detectedPetType
        });
      }
    }
  }
  
  // Sort by match score and remove duplicates
  const sortedMatches = matches
    .sort((a, b) => b.matchScore - a.matchScore)
    .slice(0, 5); // Top 5 matches
  
  // Remove category duplicates, keeping highest scored
  const uniqueMatches = [];
  const seenCategories = new Set();
  
  for (const match of sortedMatches) {
    if (!seenCategories.has(match.category)) {
      uniqueMatches.push(match);
      seenCategories.add(match.category);
    }
  }
  
  // Generate AI-like summary
  const analysis = generateAnalysisSummary(uniqueMatches, contextClues, detectedPetType);
  
  return {
    summary: analysis.summary,
    results: uniqueMatches,
    petType: detectedPetType,
    urgencyLevel: analysis.urgencyLevel,
    recommendations: analysis.recommendations,
    contextClues: contextClues
  };
}

// ===== CONTEXT EXTRACTION =====
function extractContextClues(text) {
  const lower = text.toLowerCase();
  const clues = {
    duration: null,
    frequency: null,
    severity: null,
    age: null,
    recent_changes: []
  };
  
  // Duration indicators
  const durationPatterns = {
    'few hours': /few hours|couple hours|2-3 hours/,
    'all day': /all day|entire day|whole day/,
    'few days': /few days|couple days|2-3 days/,
    'week': /week|7 days/,
    'month': /month|weeks/
  };
  
  for (const [duration, pattern] of Object.entries(durationPatterns)) {
    if (pattern.test(lower)) {
      clues.duration = duration;
      break;
    }
  }
  
  // Frequency indicators
  if (lower.includes('constantly') || lower.includes('all the time')) clues.frequency = 'constant';
  else if (lower.includes('frequently') || lower.includes('often')) clues.frequency = 'frequent';
  else if (lower.includes('sometimes') || lower.includes('occasionally')) clues.frequency = 'occasional';
  
  // Severity indicators
  if (lower.includes('severe') || lower.includes('terrible') || lower.includes('unbearable')) clues.severity = 'severe';
  else if (lower.includes('mild') || lower.includes('slight') || lower.includes('little bit')) clues.severity = 'mild';
  else if (lower.includes('getting worse') || lower.includes('worsening')) clues.severity = 'worsening';
  
  // Age indicators
  const ageMatch = lower.match(/(\d+)\s*(year|month|week)s?\s*old/);
  if (ageMatch) {
    clues.age = `${ageMatch[1]} ${ageMatch[2]}${ageMatch[1] > 1 ? 's' : ''} old`;
  }
  
  return clues;
}

// ===== KEYWORD WEIGHTING =====
function getKeywordWeight(keyword) {
  const highPriorityKeywords = ['seizure', 'bloat', 'difficulty breathing', 'blood', 'emergency'];
  const mediumPriorityKeywords = ['vomit', 'diarrhea', 'pain', 'injury', 'wound'];
  
  if (highPriorityKeywords.some(k => keyword.includes(k))) return 3;
  if (mediumPriorityKeywords.some(k => keyword.includes(k))) return 2;
  return 1;
}

// ===== AI ANALYSIS SUMMARY =====
function generateAnalysisSummary(matches, contextClues, petType) {
  let urgencyLevel = 'low';
  let recommendations = [];
  
  // Determine urgency
  const hasUrgentSymptoms = matches.some(m => m.severity === 'urgent');
  const hasModerateSymptoms = matches.some(m => m.severity === 'moderate');
  
  if (hasUrgentSymptoms) {
    urgencyLevel = 'urgent';
  } else if (hasModerateSymptoms) {
    urgencyLevel = 'moderate';
  }
  
  // Generate summary based on findings
  let summary;
  if (matches.length === 0) {
    summary = `🤔 I didn't find specific matches for the symptoms described. However, if you're concerned about your ${petType === 'unknown' ? 'pet' : petType}'s health, it's always best to consult with a veterinarian for professional advice.`;
  } else {
    const petTypeText = petType === 'unknown' ? 'your pet' : `your ${petType}`;
    const mainCategory = matches[0].category;
    
    if (urgencyLevel === 'urgent') {
      summary = `🚨 **URGENT**: Based on the symptoms described, ${petTypeText} may have a ${mainCategory.toLowerCase()} issue that requires immediate veterinary attention. Please seek emergency care promptly.`;
    } else if (urgencyLevel === 'moderate') {
      summary = `⚠️ I've identified potential ${mainCategory.toLowerCase()} concerns in ${petTypeText}. While not immediately life-threatening, these symptoms warrant veterinary evaluation within the recommended timeframe.`;
    } else {
      summary = `💙 The symptoms suggest ${petTypeText} may have a minor ${mainCategory.toLowerCase()} issue. Monitor closely and consider veterinary consultation if symptoms persist or worsen.`;
    }
  }
  
  // Generate specific recommendations
  if (contextClues.duration) {
    recommendations.push(`Duration: Symptoms have been present for ${contextClues.duration}`);
  }
  if (contextClues.severity === 'worsening') {
    recommendations.push('⚠️ Worsening symptoms require more urgent attention');
    urgencyLevel = urgencyLevel === 'low' ? 'moderate' : urgencyLevel;
  }
  
  return { summary, urgencyLevel, recommendations };
}

// ===== ENHANCED RESULT RENDERING =====
function renderSymptomResults(analysisResult) {
  const container = document.getElementById('symptom-results');
  if (!container) return;
  
  const { summary, results, petType, urgencyLevel, recommendations, contextClues } = analysisResult;
  
  // Show loading animation first
  showLoadingAnimation(container);
  
  // Simulate AI thinking time for better UX
  setTimeout(() => {
    container.classList.add('show');
    container.innerHTML = generateResultsHTML(analysisResult);
    
    // Add interactive elements
    addInteractiveFeatures(container, results);
    
    // Smooth scroll to results
    container.scrollIntoView({ behavior: 'smooth', block: 'start' });
    
    // Add to history
    addToAnalysisHistory(analysisResult);
    
    // Show follow-up questions if appropriate
    showFollowUpQuestions(urgencyLevel, results);
  }, 1500);
}

// ===== LOADING ANIMATION =====
function showLoadingAnimation(container) {
  container.classList.add('show');
  container.innerHTML = `
    <div class="ai-thinking-animation">
      <div class="thinking-header">
        <div class="ai-avatar">🤖</div>
        <h3>AI Veterinary Assistant Analyzing...</h3>
      </div>
      <div class="thinking-dots">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
      <div class="analysis-steps">
        <div class="step active">📝 Processing symptoms...</div>
        <div class="step">🔍 Matching medical database...</div>
        <div class="step">⚕️ Generating recommendations...</div>
        <div class="step">✅ Analysis complete!</div>
      </div>
    </div>
  `;
  
  // Animate analysis steps
  setTimeout(() => animateAnalysisSteps(), 300);
}

// ===== ANALYSIS STEPS ANIMATION =====
function animateAnalysisSteps() {
  const steps = document.querySelectorAll('.step');
  let currentStep = 0;
  
  const interval = setInterval(() => {
    if (currentStep < steps.length) {
      steps.forEach(s => s.classList.remove('active'));
      steps[currentStep].classList.add('active');
      currentStep++;
    } else {
      clearInterval(interval);
    }
  }, 400);
}

// ===== GENERATE RESULTS HTML =====
function generateResultsHTML(analysisResult) {
  const { summary, results, petType, urgencyLevel, recommendations } = analysisResult;
  
  const urgencyColors = {
    urgent: 'urgent-result',
    moderate: 'moderate-result', 
    low: 'low-result'
  };
  
  let html = `
    <div class="analysis-results ${urgencyColors[urgencyLevel]}">
      <div class="result-header">
        <div class="ai-badge">
          <span class="ai-icon">🤖</span>
          <span>AI Veterinary Analysis</span>
        </div>
        ${petType !== 'unknown' ? `<div class="pet-badge">${getPetEmoji(petType)} ${petType.charAt(0).toUpperCase() + petType.slice(1)}</div>` : ''}
      </div>
      
      <div class="summary-section">
        <div class="summary-text">${summary}</div>
      </div>
  `;
  
  if (results.length > 0) {
    html += `<div class="conditions-section">`;
    
    results.forEach((result, index) => {
      html += `
        <div class="condition-card ${getSeverityClass(result.severity)}" data-condition-index="${index}">
          <div class="condition-header">
            <div class="condition-icon">${result.icon}</div>
            <div class="condition-info">
              <h4>${result.category}</h4>
              <span class="severity-badge ${getSeverityClass(result.severity)}">${result.severity.toUpperCase()}</span>
            </div>
            <button class="expand-btn" onclick="toggleConditionDetails(${index})">
              <span class="material-symbols-outlined">expand_more</span>
            </button>
          </div>
          
          <div class="condition-summary">
            <p>${result.advice}</p>
          </div>
          
          <div class="condition-details hidden" id="details-${index}">
            <div class="symptoms-list">
              <h5>🔍 Associated Symptoms:</h5>
              <ul>${result.symptoms.map(s => `<li>${s}</li>`).join('')}</ul>
            </div>
            
            <div class="causes-list">
              <h5>💡 Possible Causes:</h5>
              <ul>${result.causes.map(c => `<li>${c}</li>`).join('')}</ul>
            </div>
            
            <div class="homecare-section">
              <h5>🏠 Home Care:</h5>
              <ul>${result.homecare.map(h => `<li>${h}</li>`).join('')}</ul>
            </div>
            
            <div class="emergency-section">
              <h5>🚨 When to Seek Immediate Care:</h5>
              <p class="emergency-text">${result.emergency}</p>
            </div>
            
            <div class="timeline-section">
              <h5>⏰ Expected Timeline:</h5>
              <p class="timeline-text">${result.timeline}</p>
            </div>
          </div>
        </div>
      `;
    });
    
    html += `</div>`;
  }
  
  // Add recommendations if any
  if (recommendations.length > 0) {
    html += `
      <div class="recommendations-section">
        <h4>📋 Additional Insights:</h4>
        <ul>${recommendations.map(r => `<li>${r}</li>`).join('')}</ul>
      </div>
    `;
  }
  
  // Add action buttons
  html += `
    <div class="action-buttons">
      <button class="btn-primary" onclick="findVeterinarianNearby()">🏥 Find Veterinarian Nearby</button>
      <button class="btn-secondary" onclick="saveAnalysis()">💾 Save Analysis</button>
      <button class="btn-secondary" onclick="shareAnalysis()">📤 Share with Vet</button>
    </div>
    
    <div class="disclaimer">
      <p>⚕️ <strong>Medical Disclaimer:</strong> This AI analysis provides educational information only and is not a substitute for professional veterinary diagnosis. Always consult with a qualified veterinarian for definitive medical advice.</p>
    </div>
  `;
  
  html += `</div>`;
  
  return html;
}

// ===== UTILITY FUNCTIONS =====
function getPetEmoji(petType) {
  const emojis = {
    dog: '🐶',
    cat: '🐱',
    rabbit: '🐰',
    bird: '🦜',
    guinea_pig: '🐹',
    hamster: '🐹',
    ferret: '🦫'
  };
  return emojis[petType] || '🐾';
}

function getSeverityClass(severity) {
  if (severity.includes('urgent')) return 'severity-urgent';
  if (severity === 'moderate') return 'severity-moderate';
  return 'severity-low';
}

// ===== INTERACTIVE FEATURES =====
function addInteractiveFeatures(container, results) {
  // Add click handlers for condition cards
  const conditionCards = container.querySelectorAll('.condition-card');
  conditionCards.forEach((card, index) => {
    card.addEventListener('click', (e) => {
      if (!e.target.closest('.expand-btn')) {
        toggleConditionDetails(index);
      }
    });
  });
  
  // Add hover effects
  conditionCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-2px)';
      card.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)';
      card.style.boxShadow = '';
    });
  });
}

// ===== TOGGLE CONDITION DETAILS =====
function toggleConditionDetails(index) {
  const details = document.getElementById(`details-${index}`);
  const expandBtn = document.querySelector(`[data-condition-index="${index}"] .expand-btn span`);
  
  if (details.classList.contains('hidden')) {
    details.classList.remove('hidden');
    details.style.animation = 'slideDown 0.3s ease-out';
    expandBtn.style.transform = 'rotate(180deg)';
  } else {
    details.style.animation = 'slideUp 0.3s ease-in';
    expandBtn.style.transform = 'rotate(0deg)';
    setTimeout(() => {
      details.classList.add('hidden');
    }, 300);
  }
}

// ===== FOLLOW-UP QUESTIONS =====
function showFollowUpQuestions(urgencyLevel, results) {
  if (urgencyLevel === 'urgent') {
    showNotification('⚠️ Based on the analysis, this appears to be an urgent situation. Please contact your veterinarian immediately.', 'error');
  } else if (results.length === 0) {
    showNotification('💡 Try describing symptoms in more detail (e.g., "My dog has been vomiting yellow liquid for 2 days")', 'info');
  }
}

// ===== UTILITY FUNCTIONS =====
function addToAnalysisHistory(analysisResult) {
  analysisHistory.push({
    timestamp: new Date(),
    ...analysisResult
  });
  
  // Keep only last 10 analyses
  if (analysisHistory.length > 10) {
    analysisHistory.shift();
  }
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
    max-width: 350px;
    font-size: 14px;
  `;
  
  notification.textContent = message;
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.animation = 'notificationSlideOut 0.5s ease-in forwards';
    setTimeout(() => notification.remove(), 500);
  }, 5000);
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

// ===== ACTION BUTTON FUNCTIONS =====
function findVeterinarianNearby() {
  showNotification('📍 Opening veterinary clinics near your location...', 'info');
  // In a real app, this would integrate with maps API
  setTimeout(() => {
    window.open('https://www.google.com/maps/search/veterinarian+near+me', '_blank');
  }, 1000);
}

function saveAnalysis() {
  if (analysisHistory.length > 0) {
    const latest = analysisHistory[analysisHistory.length - 1];
    const data = JSON.stringify(latest, null, 2);
    
    // Create downloadable file
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `pet-symptom-analysis-${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    showNotification('💾 Analysis saved successfully!', 'success');
  }
}

function shareAnalysis() {
  if (analysisHistory.length > 0) {
    const latest = analysisHistory[analysisHistory.length - 1];
    const shareText = `Pet Symptom Analysis\n\nSummary: ${latest.summary}\n\nPet Type: ${latest.petType}\nUrgency: ${latest.urgencyLevel}\n\nGenerated by PAWSOME AI Symptom Checker`;
    
    if (navigator.share) {
      navigator.share({
        title: 'Pet Symptom Analysis',
        text: shareText
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(shareText).then(() => {
        showNotification('📋 Analysis copied to clipboard!', 'success');
      }).catch(() => {
        showNotification('⚠️ Unable to copy to clipboard', 'error');
      });
    }
  }
}

// ===== ENHANCED SYMPTOM CHECKER INITIALIZATION =====
function initSymptomChecker() {
  const input = document.getElementById('symptoms');
  const btn = document.getElementById('analyze-btn');
  const container = document.getElementById('symptom-results');
  
  if (!input || !btn || !container) {
    console.warn('Symptom checker elements not found');
    return;
  }

  console.log('🤖 PAWSOME AI Symptom Checker initialized');
  
  // Enhanced button click handler
  btn.addEventListener('click', handleSymptomAnalysis);
  
  // Enter key support
  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
      handleSymptomAnalysis();
    }
  });
  
  // Auto-resize textarea
  input.addEventListener('input', () => {
    input.style.height = 'auto';
    input.style.height = Math.min(input.scrollHeight, 200) + 'px';
  });
  
  // Add helpful placeholder rotation
  rotatePlaceholder(input);
  
  // Show welcome message
  setTimeout(() => {
    showNotification('🐾 Welcome to PAWSOME AI Symptom Checker! Describe your pet\'s symptoms for instant analysis.', 'info');
  }, 1000);
}

// ===== MAIN ANALYSIS HANDLER =====
function handleSymptomAnalysis() {
  const input = document.getElementById('symptoms');
  const btn = document.getElementById('analyze-btn');
  const container = document.getElementById('symptom-results');
  
  const text = input.value.trim();
  
  if (!text) {
    container.innerHTML = `
      <div class="error-message">
        <div class="error-icon">⚠️</div>
        <div class="error-text">
          <h4>Please describe your pet's symptoms</h4>
          <p>Try to include details like duration, severity, and your pet's behavior.</p>
        </div>
      </div>
    `;
    container.classList.add('show');
    input.focus();
    return;
  }
  
  if (text.length < 10) {
    showNotification('📝 Please provide more detailed description of the symptoms', 'warning');
    return;
  }
  
  // Prevent multiple simultaneous analyses
  if (isAnalyzing) {
    showNotification('🤖 Analysis in progress, please wait...', 'info');
    return;
  }
  
  isAnalyzing = true;
  btn.disabled = true;
  btn.innerHTML = '<span class="material-symbols-outlined animate-spin">autorenew</span> Analyzing...';
  
  try {
    const analysis = analyzeSymptomsText(text);
    renderSymptomResults(analysis);
  } catch (error) {
    console.error('Analysis error:', error);
    container.innerHTML = `
      <div class="error-message">
        <div class="error-icon">❌</div>
        <div class="error-text">
          <h4>Analysis Error</h4>
          <p>Sorry, there was an error analyzing the symptoms. Please try again.</p>
        </div>
      </div>
    `;
    container.classList.add('show');
    showNotification('❌ Analysis failed. Please try again.', 'error');
  } finally {
    setTimeout(() => {
      isAnalyzing = false;
      btn.disabled = false;
      btn.innerHTML = '<span class="material-symbols-outlined">health_and_safety</span> Analyze Symptoms';
    }, 2000);
  }
}

// ===== PLACEHOLDER ROTATION =====
function rotatePlaceholder(input) {
  const placeholders = [
    "For example: My dog has been vomiting and has diarrhea...",
    "Describe symptoms like: My cat is not eating and seems lethargic...",
    "Try: My rabbit has been sneezing and has watery eyes...",
    "Example: My bird is breathing heavily and won't fly...",
    "Tell me: My pet has been limping on their back leg..."
  ];
  
  let currentIndex = 0;
  
  setInterval(() => {
    if (!input.value && document.activeElement !== input) {
      currentIndex = (currentIndex + 1) % placeholders.length;
      input.placeholder = placeholders[currentIndex];
    }
  }, 4000);
}

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', initSymptomChecker);

// ===== GLOBAL FUNCTIONS (for onclick handlers) =====
window.toggleConditionDetails = toggleConditionDetails;
window.findVeterinarianNearby = findVeterinarianNearby;
window.saveAnalysis = saveAnalysis;
window.shareAnalysis = shareAnalysis;

console.log('✨ PAWSOME AI Symptom Checker loaded successfully!');

// ===== CSS ANIMATIONS (injected dynamically) =====
const additionalCSS = `
<style>
@keyframes notificationSlideIn {
  0% { opacity: 0; transform: translateX(100%); }
  100% { opacity: 1; transform: translateX(0); }
}

@keyframes notificationSlideOut {
  0% { opacity: 1; transform: translateX(0); }
  100% { opacity: 0; transform: translateX(100%); }
}

@keyframes slideDown {
  0% { opacity: 0; max-height: 0; transform: translateY(-10px); }
  100% { opacity: 1; max-height: 1000px; transform: translateY(0); }
}

@keyframes slideUp {
  0% { opacity: 1; max-height: 1000px; transform: translateY(0); }
  100% { opacity: 0; max-height: 0; transform: translateY(-10px); }
}

.animate-spin {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* AI Thinking Animation */
.ai-thinking-animation {
  text-align: center;
  padding: 30px;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1));
  border-radius: 15px;
  border: 2px solid rgba(59, 130, 246, 0.2);
}

.thinking-header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-bottom: 20px;
}

.ai-avatar {
  font-size: 32px;
  animation: bounce 2s ease-in-out infinite;
}

.thinking-dots {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: 25px;
}

.dot {
  width: 10px;
  height: 10px;
  background: #3b82f6;
  border-radius: 50%;
  animation: dotPulse 1.4s ease-in-out infinite both;
}

.dot:nth-child(1) { animation-delay: -0.32s; }
.dot:nth-child(2) { animation-delay: -0.16s; }

@keyframes dotPulse {
  0%, 80%, 100% {
    transform: scale(0.8);
    opacity: 0.5;
  }
  40% {
    transform: scale(1.2);
    opacity: 1;
  }
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.analysis-steps {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.step {
  padding: 8px 15px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  color: #666;
  transition: all 0.3s ease;
  font-size: 14px;
}

.step.active {
  background: rgba(59, 130, 246, 0.2);
  color: #1d4ed8;
  transform: scale(1.05);
  font-weight: 600;
}

/* Error Message Styling */
.error-message {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 20px;
  background: linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(248, 113, 113, 0.1));
  border: 2px solid rgba(239, 68, 68, 0.2);
  border-radius: 12px;
  color: #dc2626;
}

.error-icon {
  font-size: 24px;
}

.error-text h4 {
  margin: 0 0 5px 0;
  font-size: 16px;
  font-weight: 600;
}

.error-text p {
  margin: 0;
  font-size: 14px;
  opacity: 0.8;
}
</style>
`;

document.head.insertAdjacentHTML('beforeend', additionalCSS);

