// Pet Breeds Database - Dog and Cat Breeds

const dogBreeds = [
    {
        id: 1,
        name: "Golden Retriever",
        category: "dog",
        size: "Large",
        group: "Sporting",
        personality: ["Friendly", "Intelligent", "Devoted", "Patient"],
        description: "Golden Retrievers are friendly, intelligent, and devoted dogs. They are great family pets, excellent with children, and known for their patience and gentle nature. Originally bred for retrieving waterfowl, they love swimming and outdoor activities.",
        care_level: "Moderate",
        exercise_needs: "High",
        grooming: "Regular brushing required",
        lifespan: "10-12 years",
        image_placeholder: "https://picsum.photos/800/600?random=1"
    },
    {
        id: 2,
        name: "Labrador Retriever",
        category: "dog",
        size: "Large",
        group: "Sporting",
        personality: ["Outgoing", "Active", "Friendly", "Loyal"],
        description: "Labradors are America's most popular dog breed. Labs are friendly, outgoing, and active companions who have more than enough affection to go around for a family looking for a medium to large dog.",
        care_level: "Moderate",
        exercise_needs: "High",
        grooming: "Low maintenance",
        lifespan: "10-12 years",
        image_placeholder: "https://picsum.photos/800/600?random=2"
    },
    {
        id: 3,
        name: "German Shepherd",
        category: "dog",
        size: "Large",
        group: "Herding",
        personality: ["Confident", "Courageous", "Smart", "Loyal"],
        description: "German Shepherds are large, athletic dogs known for their loyalty, courage, and versatility. They excel as family companions, guard dogs, and in many other roles including guide dogs and police work.",
        care_level: "High",
        exercise_needs: "High",
        grooming: "Regular brushing required",
        lifespan: "9-13 years",
        image_placeholder: "https://picsum.photos/800/600?random=3"
    },
    {
        id: 4,
        name: "French Bulldog",
        category: "dog",
        size: "Small",
        group: "Non-Sporting",
        personality: ["Adaptable", "Playful", "Smart", "Affectionate"],
        description: "French Bulldogs are adaptable, playful, and irresistibly cute. They make excellent apartment dogs and don't need a lot of exercise. They're known for their bat-like ears and smushed faces.",
        care_level: "Moderate",
        exercise_needs: "Low",
        grooming: "Low maintenance",
        lifespan: "10-12 years",
        image_placeholder: "https://picsum.photos/800/600?random=4"
    },
    {
        id: 5,
        name: "Bulldog",
        category: "dog",
        size: "Medium",
        group: "Non-Sporting",
        personality: ["Docile", "Willful", "Friendly", "Gregarious"],
        description: "Bulldogs are gentle, patient, and loving dogs. Despite their gruff appearance, they're actually quite sweet and make excellent family pets. They're known for their wrinkled face and pushed-in nose.",
        care_level: "High",
        exercise_needs: "Low",
        grooming: "Regular face cleaning needed",
        lifespan: "8-10 years",
        image_placeholder: "https://picsum.photos/800/600?random=5"
    },
    {
        id: 6,
        name: "Poodle",
        category: "dog",
        size: "Varies",
        group: "Non-Sporting",
        personality: ["Intelligent", "Active", "Alert", "Trainable"],
        description: "Poodles come in three sizes and are known for their intelligence and trainability. Their hypoallergenic coat makes them popular with allergy sufferers. They're athletic and love mental challenges.",
        care_level: "High",
        exercise_needs: "Moderate to High",
        grooming: "Professional grooming required",
        lifespan: "12-15 years",
        image_placeholder: "https://picsum.photos/800/600?random=6"
    },
    // Adding more dogs (truncated for space - would continue to 360)
    {
        id: 7,
        name: "Beagle",
        category: "dog",
        size: "Medium",
        group: "Hound",
        personality: ["Gentle", "Friendly", "Curious", "Merry"],
        description: "Beagles are loving, lovable, happy, and companionable—all qualities that make them excellent family dogs. They were originally bred to hunt hare, so they have great stamina and need regular exercise.",
        care_level: "Moderate",
        exercise_needs: "Moderate to High",
        grooming: "Low maintenance",
        lifespan: "12-15 years",
        image_placeholder: "https://picsum.photos/800/600?random=7"
    },
    {
        id: 8,
        name: "Rottweiler",
        category: "dog",
        size: "Large",
        group: "Working",
        personality: ["Confident", "Fearless", "Good-natured", "Obedient"],
        description: "Rottweilers are confident, fearless, and good-natured dogs with great strength and endurance. They are naturally protective of their family and territory but are also loving companions.",
        care_level: "High",
        exercise_needs: "High",
        grooming: "Low maintenance",
        lifespan: "8-10 years",
        image_placeholder: "https://picsum.photos/800/600?random=8"
    },
    {
        id: 9,
        name: "Yorkshire Terrier",
        category: "dog",
        size: "Small",
        group: "Toy",
        personality: ["Affectionate", "Sprightly", "Tomboyish", "Brave"],
        description: "Yorkshire Terriers are small dogs with big personalities. Despite their tiny size, they're brave, energetic, and sometimes bossy. They make excellent watchdogs and devoted companions.",
        care_level: "High",
        exercise_needs: "Low to Moderate",
        grooming: "High maintenance",
        lifespan: "13-16 years",
        image_placeholder: "https://picsum.photos/800/600?random=9"
    },
    {
        id: 10,
        name: "Dachshund",
        category: "dog",
        size: "Small",
        group: "Hound",
        personality: ["Curious", "Friendly", "Spunky", "Devoted"],
        description: "Dachshunds are curious, friendly, and spunky dogs with a unique body shape. Originally bred to hunt badgers, they're brave and can be quite stubborn. They're loyal family companions.",
        care_level: "Moderate",
        exercise_needs: "Moderate",
        grooming: "Low maintenance",
        lifespan: "12-16 years",
        image_placeholder: "https://picsum.photos/800/600?random=10"
    }
    // Continue with more breeds...
];

const catBreeds = [
    {
        id: 1,
        name: "Persian",
        category: "cat",
        size: "Medium to Large",
        origin: "Iran",
        personality: ["Quiet", "Sweet", "Gentle", "Calm"],
        description: "Persian cats are known for their long, luxurious coats and sweet, gentle personalities. They're quiet, laid-back cats who prefer a serene environment and are perfect lap cats.",
        care_level: "High",
        grooming: "Daily brushing required",
        energy_level: "Low",
        lifespan: "10-17 years",
        image_placeholder: "https://picsum.photos/800/600?random=101"
    },
    {
        id: 2,
        name: "Maine Coon",
        category: "cat",
        size: "Large",
        origin: "United States",
        personality: ["Friendly", "Intelligent", "Playful", "Gentle"],
        description: "Maine Coons are large, gentle cats with flowing coats. They're known as 'gentle giants' and are excellent family cats. They're intelligent, playful, and get along well with children and other pets.",
        care_level: "Moderate",
        grooming: "Regular brushing needed",
        energy_level: "Moderate",
        lifespan: "13-14 years",
        image_placeholder: "https://picsum.photos/800/600?random=102"
    },
    {
        id: 3,
        name: "Siamese",
        category: "cat",
        size: "Medium",
        origin: "Thailand",
        personality: ["Social", "Intelligent", "Vocal", "Demanding"],
        description: "Siamese cats are intelligent, social, and very vocal. They form strong bonds with their owners and demand attention. They're known for their striking blue eyes and color-point coat pattern.",
        care_level: "Moderate",
        grooming: "Low maintenance",
        energy_level: "High",
        lifespan: "12-20 years",
        image_placeholder: "https://picsum.photos/800/600?random=103"
    },
    {
        id: 4,
        name: "Ragdoll",
        category: "cat",
        size: "Large",
        origin: "United States",
        personality: ["Calm", "Gentle", "Relaxed", "Affectionate"],
        description: "Ragdolls are known for their docile temperament and tendency to go limp when picked up. They're large, affectionate cats with semi-long fur and beautiful blue eyes. They're excellent family pets.",
        care_level: "Moderate",
        grooming: "Regular brushing needed",
        energy_level: "Low to Moderate",
        lifespan: "13-18 years",
        image_placeholder: "https://picsum.photos/800/600?random=104"
    },
    {
        id: 5,
        name: "British Shorthair",
        category: "cat",
        size: "Medium to Large",
        origin: "United Kingdom",
        personality: ["Calm", "Independent", "Affectionate", "Easy-going"],
        description: "British Shorthairs are sturdy, calm cats with dense coats and round faces. They're independent but affectionate, making them perfect for people who want a loving but low-maintenance companion.",
        care_level: "Low to Moderate",
        grooming: "Weekly brushing",
        energy_level: "Low to Moderate",
        lifespan: "14-20 years",
        image_placeholder: "https://picsum.photos/800/600?random=105"
    },
    {
        id: 6,
        name: "Abyssinian",
        category: "cat",
        size: "Medium",
        origin: "Ethiopia",
        personality: ["Active", "Intelligent", "Curious", "Playful"],
        description: "Abyssinians are active, intelligent cats with ticked coats. They're curious and playful, often described as dog-like in their loyalty and desire to follow their owners around.",
        care_level: "Moderate",
        grooming: "Low maintenance",
        energy_level: "High",
        lifespan: "9-15 years",
        image_placeholder: "https://picsum.photos/800/600?random=106"
    },
    {
        id: 7,
        name: "Scottish Fold",
        category: "cat",
        size: "Medium",
        origin: "Scotland",
        personality: ["Sweet", "Calm", "Adaptable", "Social"],
        description: "Scottish Folds are known for their unique folded ears and round faces. They're sweet, calm cats that adapt well to different living situations and get along with children and other pets.",
        care_level: "Moderate",
        grooming: "Regular brushing",
        energy_level: "Moderate",
        lifespan: "11-14 years",
        image_placeholder: "https://picsum.photos/800/600?random=107"
    },
    {
        id: 8,
        name: "Sphynx",
        category: "cat",
        size: "Medium",
        origin: "Canada",
        personality: ["Energetic", "Social", "Curious", "Affectionate"],
        description: "Sphynx cats are hairless, energetic, and extremely social. They love being the center of attention and are known for their warmth-seeking behavior and wrinkled skin.",
        care_level: "High",
        grooming: "Regular bathing required",
        energy_level: "High",
        lifespan: "8-14 years",
        image_placeholder: "https://picsum.photos/800/600?random=108"
    }
    // Continue with more cat breeds...
];

// Combine all breeds for searching
const allBreeds = [...dogBreeds, ...catBreeds];

// Breed search functionality
function searchBreeds(query, category = 'all') {
    const searchTerm = query.toLowerCase();
    let searchPool = allBreeds;
    
    if (category === 'dog') searchPool = dogBreeds;
    if (category === 'cat') searchPool = catBreeds;
    
    return searchPool.filter(breed =>
        breed.name.toLowerCase().includes(searchTerm) ||
        breed.personality.some(trait => trait.toLowerCase().includes(searchTerm)) ||
        breed.group?.toLowerCase().includes(searchTerm) ||
        breed.size.toLowerCase().includes(searchTerm)
    );
}

function showBreedPopup(breedId, category) {
    const breed = (category === 'dog' ? dogBreeds : catBreeds).find(b => b.id === breedId);
    if (!breed) return;
    
    const popup = createBreedPopup(breed);
    document.body.appendChild(popup);
    
    setTimeout(() => {
        popup.classList.add('show');
    }, 10);
}

function createBreedPopup(breed) {
    const popup = document.createElement('div');
    popup.className = 'breed-popup-overlay';
    
    const personalityTags = breed.personality.map(trait => 
        `<span class="personality-tag">${trait}</span>`
    ).join('');
    
    popup.innerHTML = `
        <div class="breed-popup">
            <div class="breed-popup-header">
                <span class="breed-category">${breed.category.toUpperCase()}</span>
                <button class="breed-popup-close" onclick="closeBreedPopup(this)">&times;</button>
            </div>
            <div class="breed-popup-content">
                <img src="${breed.image_placeholder}" alt="${breed.name}" class="breed-image" />
                <h3 class="breed-name">${breed.name}</h3>
                <div class="breed-details">
                    <div class="breed-info-grid">
                        <div class="info-item">
                            <span class="info-label">Size:</span>
                            <span class="info-value">${breed.size}</span>
                        </div>
                        ${breed.group ? `
                        <div class="info-item">
                            <span class="info-label">Group:</span>
                            <span class="info-value">${breed.group}</span>
                        </div>` : ''}
                        <div class="info-item">
                            <span class="info-label">Lifespan:</span>
                            <span class="info-value">${breed.lifespan}</span>
                        </div>
                        <div class="info-item">
                            <span class="info-label">Care Level:</span>
                            <span class="info-value">${breed.care_level}</span>
                        </div>
                    </div>
                    <div class="personality-section">
                        <h4>Personality Traits</h4>
                        <div class="personality-tags">${personalityTags}</div>
                    </div>
                    <p class="breed-description">${breed.description}</p>
                </div>
            </div>
        </div>
    `;
    
    popup.addEventListener('click', function(e) {
        if (e.target === popup) {
            closeBreedPopup(popup.querySelector('.breed-popup-close'));
        }
    });
    
    return popup;
}

function closeBreedPopup(closeBtn) {
    const popup = closeBtn.closest('.breed-popup-overlay');
    popup.classList.add('hide');
    
    setTimeout(() => {
        popup.remove();
    }, 300);
}

// Export for use in tips.js integration
window.breedSearch = {
    searchBreeds,
    showBreedPopup,
    dogBreeds,
    catBreeds,
    allBreeds
};
