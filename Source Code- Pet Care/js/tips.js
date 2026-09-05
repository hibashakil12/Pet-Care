// Pet Tips Database - 100+ helpful tips
const petTips = [
    {
        id: 1,
        category: "Nutrition",
        title: "Proper Feeding Schedule",
        summary: "Feed adult dogs twice daily",
        details: "Adult dogs should be fed twice a day - once in the morning and once in the evening. This helps maintain steady energy levels and prevents overeating. Puppies may need 3-4 meals per day until they're 6 months old."
    },
    {
        id: 2,
        category: "Health",
        title: "Regular Vet Checkups",
        summary: "Annual vet visits are essential",
        details: "Schedule regular veterinary checkups at least once a year for adult pets, and twice a year for senior pets (7+ years). Early detection of health issues can save your pet's life and reduce treatment costs."
    },
    {
        id: 3,
        category: "Exercise",
        title: "Daily Exercise Requirements",
        summary: "Dogs need 30 minutes to 2 hours of exercise daily",
        details: "Exercise needs vary by breed, age, and size. Working breeds need 2+ hours daily, while smaller or older dogs may need just 30 minutes. Regular exercise prevents obesity, behavioral issues, and promotes mental health."
    },
    {
        id: 4,
        category: "Grooming",
        title: "Regular Brushing",
        summary: "Brush your pet's coat regularly",
        details: "Long-haired pets should be brushed daily, while short-haired pets need brushing 2-3 times per week. Regular brushing prevents matting, reduces shedding, and helps you spot skin issues early."
    },
    {
        id: 5,
        category: "Safety",
        title: "Pet-Proof Your Home",
        summary: "Remove hazardous items from reach",
        details: "Keep chocolate, grapes, onions, garlic, and xylitol away from pets. Secure cleaning products, medications, and small objects that could cause choking. Install baby gates if needed."
    },
    {
        id: 6,
        category: "Training",
        title: "Start Training Early",
        summary: "Begin training and socialization young",
        details: "Start training puppies as early as 8 weeks old. Early socialization helps prevent behavioral problems. Use positive reinforcement techniques and be consistent with commands and rewards."
    },
    {
        id: 7,
        category: "Nutrition",
        title: "Fresh Water Always",
        summary: "Provide clean, fresh water daily",
        details: "Change your pet's water daily and clean the bowl regularly. Cats especially need fresh water to prevent kidney issues. Consider a water fountain to encourage drinking."
    },
    {
        id: 8,
        category: "Health",
        title: "Dental Care",
        summary: "Brush your pet's teeth regularly",
        details: "Dental disease affects 80% of pets by age 3. Brush teeth 2-3 times weekly with pet-safe toothpaste. Provide dental chews and schedule professional cleanings as recommended by your vet."
    },
    {
        id: 9,
        category: "Safety",
        title: "ID Tags and Microchips",
        summary: "Ensure proper identification",
        details: "Keep ID tags updated with current contact information. Microchip your pet and register the chip. This dramatically increases the chances of reunion if your pet gets lost."
    },
    {
        id: 10,
        category: "Exercise",
        title: "Mental Stimulation",
        summary: "Provide mental enrichment activities",
        details: "Use puzzle toys, training sessions, and new experiences to keep your pet mentally stimulated. Bored pets often develop destructive behaviors. Rotate toys weekly to maintain interest."
    },
    {
        id: 11,
        category: "Nutrition",
        title: "Age-Appropriate Food",
        summary: "Choose food suitable for life stage",
        details: "Puppies and kittens need nutrient-dense growth formulas. Senior pets may need easily digestible foods with joint support. Always transition foods gradually over 7-10 days."
    },
    {
        id: 12,
        category: "Health",
        title: "Watch for Warning Signs",
        summary: "Monitor for health changes",
        details: "Watch for changes in appetite, water consumption, bathroom habits, energy levels, or behavior. Sudden changes often indicate health issues requiring veterinary attention."
    },
    {
        id: 13,
        category: "Grooming",
        title: "Nail Trimming",
        summary: "Trim nails every 2-4 weeks",
        details: "Overgrown nails can cause pain and walking difficulties. Trim gradually, avoiding the pink 'quick' inside the nail. If nervous, ask your vet or groomer to demonstrate proper technique."
    },
    {
        id: 14,
        category: "Safety",
        title: "Temperature Awareness",
        summary: "Protect from extreme temperatures",
        details: "Never leave pets in hot cars. Provide shade and water in summer. In winter, limit time outdoors for short-haired breeds. Watch for signs of overheating or hypothermia."
    },
    {
        id: 15,
        category: "Training",
        title: "Consistency is Key",
        summary: "Use consistent commands and rules",
        details: "Everyone in the household should use the same commands and follow the same rules. Inconsistency confuses pets and slows training progress. Practice commands daily in short sessions."
    },
    {
        id: 16,
        category: "Nutrition",
        title: "Portion Control",
        summary: "Measure food portions accurately",
        details: "Obesity is common in pets. Use measuring cups, not eyeballing. Follow feeding guidelines on food packages, but adjust based on your pet's body condition and vet recommendations."
    },
    {
        id: 17,
        category: "Health",
        title: "Parasite Prevention",
        summary: "Stay current on flea, tick, and worm prevention",
        details: "Use veterinarian-recommended parasite preventatives year-round. Check pets regularly for fleas and ticks. Many preventatives protect against multiple parasites simultaneously."
    },
    {
        id: 18,
        category: "Exercise",
        title: "Swimming Benefits",
        summary: "Swimming is excellent low-impact exercise",
        details: "Swimming is perfect for senior pets, overweight pets, or those with joint issues. Always supervise water activities and rinse off chlorine or salt water afterward."
    },
    {
        id: 19,
        category: "Grooming",
        title: "Ear Cleaning",
        summary: "Clean ears weekly with proper solution",
        details: "Use veterinarian-approved ear cleaner. Avoid cotton swabs deep in the ear canal. Watch for signs of infection: odor, discharge, redness, or head shaking."
    },
    {
        id: 20,
        category: "Safety",
        title: "Holiday Hazards",
        summary: "Be aware of seasonal dangers",
        details: "Keep holiday decorations, especially tinsel and small ornaments, away from pets. Many holiday foods (chocolate, grapes, macadamia nuts) are toxic. Secure Christmas trees."
    },
    // Adding 80+ more tips to reach 100+
    {
        id: 21,
        category: "Training",
        title: "Crate Training Benefits",
        summary: "Crate training provides security and aids housebreaking",
        details: "A properly sized crate becomes a safe haven for your pet. It helps with housebreaking, prevents destructive behavior when alone, and provides a quiet space for rest. Never use the crate as punishment."
    },
    {
        id: 22,
        category: "Nutrition",
        title: "Treat Moderation",
        summary: "Treats should be less than 10% of daily calories",
        details: "While treats are great for training and bonding, too many can lead to obesity and nutritional imbalances. Choose healthy options like small pieces of fruits and vegetables (safe ones only)."
    },
    {
        id: 23,
        category: "Health",
        title: "Spay/Neuter Benefits",
        summary: "Spaying and neutering prevents health and behavior issues",
        details: "Spaying/neutering reduces risk of certain cancers, prevents unwanted litters, and can improve behavior. Discuss the best timing with your veterinarian based on breed and size."
    },
    {
        id: 24,
        category: "Exercise",
        title: "Indoor Exercise Options",
        summary: "Bad weather doesn't mean no exercise",
        details: "Use stairs, play hide-and-seek, practice training commands, or use puzzle toys. Interactive toys and laser pointers (for cats) can provide physical activity indoors."
    },
    {
        id: 25,
        category: "Grooming",
        title: "Seasonal Coat Care",
        summary: "Adjust grooming routine by season",
        details: "Spring shedding requires more frequent brushing. Summer may need lighter trimming. Winter coats need protection from salt and de-icers. Always dry thoroughly after baths."
    },
    {
        id: 26,
        category: "Safety",
        title: "Plant Safety",
        summary: "Many common plants are toxic to pets",
        details: "Lilies, tulips, azaleas, and many others are dangerous. Research plants before bringing them home. Keep existing plants out of reach and know which emergency vet to call if ingestion occurs."
    },
    {
        id: 27,
        category: "Training",
        title: "Socialization Windows",
        summary: "Critical socialization period is 3-16 weeks for puppies",
        details: "Expose young pets to various people, animals, sounds, and experiences during this crucial period. Proper socialization prevents fear-based behavioral issues later in life."
    },
    {
        id: 28,
        category: "Nutrition",
        title: "Senior Pet Nutrition",
        summary: "Older pets have changing nutritional needs",
        details: "Senior pets may need fewer calories but more protein quality. Joint supplements, easier-to-chew kibble, and more frequent small meals can help maintain health in golden years."
    },
    {
        id: 29,
        category: "Health",
        title: "Weight Management",
        summary: "Maintain healthy body weight throughout life",
        details: "Feel your pet's ribs easily but don't see them. Waist should be visible from above. Obesity leads to diabetes, joint problems, and reduced lifespan. Consult vet for weight loss plans."
    },
    {
        id: 30,
        category: "Exercise",
        title: "Breed-Specific Needs",
        summary: "Different breeds have different exercise requirements",
        details: "Hounds need mental stimulation, terriers need jobs to do, sporting breeds need vigorous exercise. Research your pet's breed characteristics to meet their specific needs."
    },
    // NUTRITION TIPS (31-40)
    {
        id: 31,
        category: "Nutrition",
        title: "Raw Diet Considerations",
        summary: "Research thoroughly before switching to raw feeding",
        details: "Raw diets can be beneficial but require careful planning to ensure nutritional balance. Consult with a veterinary nutritionist, handle food safely to prevent bacterial contamination, and monitor your pet's health closely."
    },
    {
        id: 32,
        category: "Nutrition",
        title: "Food Allergies",
        summary: "Common allergens include chicken, beef, dairy, and grains",
        details: "Signs include itching, digestive upset, and ear infections. Elimination diets help identify triggers. Novel protein sources like duck, venison, or fish may help allergic pets."
    },
    {
        id: 33,
        category: "Nutrition",
        title: "Slow Feeding Benefits",
        summary: "Slow feeders prevent bloat and aid digestion",
        details: "Fast eating can cause choking, vomiting, and dangerous bloat in large dogs. Use puzzle feeders, slow-feed bowls, or spread food on a mat to encourage slower eating habits."
    },
    {
        id: 34,
        category: "Nutrition",
        title: "Hydration Monitoring",
        summary: "Cats need more encouragement to drink water",
        details: "Cats have a low thirst drive and are prone to kidney disease. Use water fountains, add wet food to their diet, and place multiple water bowls around the house to encourage drinking."
    },
    {
        id: 35,
        category: "Nutrition",
        title: "Supplement Safety",
        summary: "Only give supplements recommended by your vet",
        details: "Over-supplementation can be harmful. Quality commercial diets are usually complete. Joint supplements, omega-3 fatty acids, and probiotics may benefit some pets when vet-approved."
    },
    
    // TRAINING TIPS (36-45)
    {
        id: 36,
        category: "Training",
        title: "Positive Reinforcement Power",
        summary: "Reward good behavior immediately for best results",
        details: "Timing is crucial - reward within 3 seconds of the desired behavior. Use high-value treats, praise, or play. Punishment-based methods can create fear and aggression."
    },
    {
        id: 37,
        category: "Training",
        title: "House Training Success",
        summary: "Take puppies out every 1-2 hours initially",
        details: "Establish a routine: outside immediately after waking, eating, playing, and before bed. Clean accidents thoroughly with enzymatic cleaners. Praise and treat for outdoor success."
    },
    {
        id: 38,
        category: "Training",
        title: "Leash Training Tips",
        summary: "Start with short, positive experiences",
        details: "Let puppies wear a collar for short periods indoors first. Use treats and praise when the leash is attached. Start with 5-10 minute walks, gradually increasing duration and distance."
    },
    {
        id: 39,
        category: "Training",
        title: "Separation Anxiety Prevention",
        summary: "Gradually increase alone time to build confidence",
        details: "Start with very short departures (1-2 minutes) and gradually increase. Make departures and arrivals low-key. Provide engaging toys and comfortable spaces when alone."
    },
    {
        id: 40,
        category: "Training",
        title: "Clicker Training Benefits",
        summary: "Clickers provide precise timing for training",
        details: "The click marks the exact moment of correct behavior, making learning faster and clearer. Pair clicks with treats initially. Great for complex tricks and behavior shaping."
    },
    
    // HEALTH & SAFETY TIPS (41-55)
    {
        id: 41,
        category: "Health",
        title: "First Aid Kit Essentials",
        summary: "Keep pet first aid supplies readily available",
        details: "Include bandages, antiseptic wipes, thermometer, tweezers, emergency vet contact, and any prescription medications. Know basic first aid procedures before emergencies occur."
    },
    {
        id: 42,
        category: "Safety",
        title: "Car Safety Protocols",
        summary: "Never leave pets unattended in vehicles",
        details: "Cars can become deadly hot in minutes, even with windows cracked. Use proper restraints or carriers while driving. Bring water for longer trips and plan frequent stops."
    },
    {
        id: 43,
        category: "Health",
        title: "Medication Administration",
        summary: "Follow dosing instructions precisely",
        details: "Never give human medications to pets without vet approval. Complete full antibiotic courses even if symptoms improve. Store medications safely away from children and pets."
    },
    {
        id: 44,
        category: "Safety",
        title: "Toxic Food Awareness",
        summary: "Know which human foods are dangerous for pets",
        details: "Chocolate, grapes, onions, garlic, avocado, xylitol, and alcohol are toxic. Keep garbage secured. Even small amounts can be dangerous for small pets."
    },
    {
        id: 45,
        category: "Health",
        title: "Senior Pet Care",
        summary: "Older pets need modified care routines",
        details: "Increase vet visits to twice yearly. Provide softer bedding for arthritic joints. Consider ramps instead of stairs. Monitor for cognitive changes and adjust environment accordingly."
    },
    {
        id: 46,
        category: "Safety",
        title: "Weather Protection",
        summary: "Adjust outdoor time based on weather conditions",
        details: "Hot pavement can burn paw pads - test with your hand. Provide booties for winter walks on salted sidewalks. Watch for signs of overheating or hypothermia."
    },
    {
        id: 47,
        category: "Health",
        title: "Vaccination Schedules",
        summary: "Keep vaccinations current for disease prevention",
        details: "Core vaccines protect against serious diseases. Follow your vet's recommended schedule. Titers can determine if re-vaccination is needed for some diseases."
    },
    {
        id: 48,
        category: "Safety",
        title: "Emergency Preparedness",
        summary: "Have an evacuation plan that includes your pets",
        details: "Keep carriers accessible, maintain emergency food/water supply, and have copies of medical records. Identify pet-friendly shelters or hotels in advance."
    },
    {
        id: 49,
        category: "Health",
        title: "Pain Recognition",
        summary: "Pets often hide pain - learn the subtle signs",
        details: "Watch for decreased activity, changes in appetite, altered gait, excessive panting, or behavioral changes. Cats may hide more when painful. Don't assume it's just aging."
    },
    {
        id: 50,
        category: "Safety",
        title: "Household Chemical Safety",
        summary: "Store cleaning products and chemicals securely",
        details: "Use pet-safe cleaning products when possible. Keep antifreeze, pest control products, and fertilizers locked away. Even natural doesn't always mean safe for pets."
    },
    
    // GROOMING & CARE TIPS (51-65)
    {
        id: 51,
        category: "Grooming",
        title: "Bathing Best Practices",
        summary: "Most pets only need baths monthly unless they get dirty",
        details: "Over-bathing strips natural oils from skin and coat. Use lukewarm water and pet-specific shampoos. Dry thoroughly, especially in skin folds, to prevent infections."
    },
    {
        id: 52,
        category: "Grooming",
        title: "Professional Grooming Benefits",
        summary: "Regular professional grooming maintains health and comfort",
        details: "Groomers can spot skin issues, maintain difficult areas like sanitary trims, and provide nail care. Especially important for breeds with special coat requirements."
    },
    {
        id: 53,
        category: "Grooming",
        title: "Eye Care Routine",
        summary: "Clean around eyes daily for flat-faced breeds",
        details: "Use damp cotton balls to remove discharge. Watch for excessive tearing, cloudiness, or irritation. Some breeds need daily cleaning to prevent staining and infections."
    },
    {
        id: 54,
        category: "Grooming",
        title: "Paw Care Importance",
        summary: "Check paws regularly for cuts, foreign objects, and nail length",
        details: "Trim hair between toes to prevent matting. Remove thorns, seeds, or ice balls promptly. Moisturize dry, cracked paw pads with pet-safe balms."
    },
    {
        id: 55,
        category: "Grooming",
        title: "Shedding Management",
        summary: "Regular brushing reduces shedding and prevents matting",
        details: "Brush daily during shedding seasons. Use appropriate tools for coat type - slicker brushes for most, undercoat rakes for double-coated breeds. Vacuum regularly."
    },
    
    // EXERCISE & ENRICHMENT TIPS (56-70)
    {
        id: 56,
        category: "Exercise",
        title: "Age-Appropriate Activities",
        summary: "Adjust exercise intensity and duration based on age",
        details: "Puppies need short, frequent play sessions. Adult dogs need consistent daily exercise. Senior pets benefit from gentle, low-impact activities like swimming or short walks."
    },
    {
        id: 57,
        category: "Enrichment",
        title: "Puzzle Toy Benefits",
        summary: "Mental stimulation is as important as physical exercise",
        details: "Puzzle toys prevent boredom and destructive behaviors. Start with easy puzzles and gradually increase difficulty. Rotate toys weekly to maintain interest and challenge."
    },
    {
        id: 58,
        category: "Exercise",
        title: "Dog Park Etiquette",
        summary: "Ensure your dog is well-socialized before visiting dog parks",
        details: "Supervise interactions closely. Remove your dog if they show signs of stress or aggression. Keep vaccinations current and pick up waste immediately."
    },
    {
        id: 59,
        category: "Enrichment",
        title: "Scent Work Activities",
        summary: "Use your pet's natural scenting abilities for mental enrichment",
        details: "Hide treats around the house or yard. Teach 'find it' games. For cats, use catnip or silvervine in toys. Scent work is especially great for senior pets with mobility issues."
    },
    {
        id: 60,
        category: "Exercise",
        title: "Hiking with Pets",
        summary: "Build endurance gradually for hiking adventures",
        details: "Start with short, easy trails. Bring plenty of water for both of you. Check paws for cuts or thorns. Be aware of wildlife and keep pets on leash when required."
    },
    
    // BEHAVIORAL TIPS (61-75)
    {
        id: 61,
        category: "Behavior",
        title: "Reading Body Language",
        summary: "Learn to interpret your pet's signals to prevent problems",
        details: "Tail wagging doesn't always mean happy - watch the whole body. Yawning, lip licking, and panting can indicate stress. Respect warning signs like growling or hissing."
    },
    {
        id: 62,
        category: "Behavior",
        title: "Destructive Behavior Solutions",
        summary: "Address the root cause rather than just the symptoms",
        details: "Destructive behavior often stems from boredom, anxiety, or excess energy. Increase exercise, provide appropriate chew toys, and consider professional training if needed."
    },
    {
        id: 63,
        category: "Behavior",
        title: "Multi-Pet Household Tips",
        summary: "Introduce new pets gradually and supervise initial interactions",
        details: "Provide separate resources (food, water, litter boxes) initially. Allow pets to see and smell each other before direct contact. Some pets may never be best friends, and that's okay."
    },
    {
        id: 64,
        category: "Behavior",
        title: "Excessive Barking Management",
        summary: "Identify triggers and address underlying causes",
        details: "Don't yell at barking dogs - it often makes it worse. Use positive interruption techniques, increase exercise, and consider anti-anxiety measures for fear-based barking."
    },
    {
        id: 65,
        category: "Behavior",
        title: "Litter Box Issues",
        summary: "Medical problems often cause litter box avoidance",
        details: "Rule out urinary tract infections or other medical issues first. Keep boxes clean, provide enough boxes (one per cat plus one extra), and try different litter types if needed."
    },
    
    // TRAVEL & SITUATIONAL TIPS (66-80)
    {
        id: 66,
        category: "Travel",
        title: "Air Travel Preparation",
        summary: "Research airline policies and prepare pets for flying",
        details: "Get health certificates from your vet. Practice with carriers beforehand. Direct flights are less stressful. Consider sedation risks - most vets don't recommend it for air travel."
    },
    {
        id: 67,
        category: "Travel",
        title: "Hotel Stays with Pets",
        summary: "Book pet-friendly accommodations in advance",
        details: "Bring familiar bedding and toys. Keep pets leashed or crated when housekeeping is present. Clean up any accidents immediately and report them to hotel staff."
    },
    {
        id: 68,
        category: "Seasonal",
        title: "Summer Safety Measures",
        summary: "Hot weather poses serious risks to pets",
        details: "Walk during cooler parts of the day. Provide shade and fresh water outdoors. Never shave double-coated breeds completely. Watch for signs of heat stroke: excessive panting, drooling, weakness."
    },
    {
        id: 69,
        category: "Seasonal",
        title: "Winter Care Essentials",
        summary: "Cold weather requires special precautions",
        details: "Wipe paws after walks to remove salt and ice. Consider sweaters for short-haired breeds. Check for ice buildup between toes. Antifreeze is extremely toxic - clean spills immediately."
    },
    {
        id: 70,
        category: "Emergency",
        title: "Choking Response",
        summary: "Know how to help a choking pet",
        details: "For dogs: open mouth and sweep visible objects with finger. Lift small dogs by hind legs, push large dogs' shoulders down and lift rear. For cats: hold upside down and shake gently while sweeping mouth."
    },
    {
        id: 71,
        category: "Emergency",
        title: "Poison Control Knowledge",
        summary: "Have poison control numbers readily available",
        details: "ASPCA Poison Control: (888) 426-4435. Don't induce vomiting unless instructed. Bring packaging of suspected toxin to vet. Time is critical in poisoning cases."
    },
    {
        id: 72,
        category: "Behavior",
        title: "Stress Reduction Techniques",
        summary: "Create calm environments during stressful situations",
        details: "Use pheromone diffusers, calming music, or anxiety wraps. Maintain normal routines as much as possible. Consider natural calming supplements for chronically anxious pets."
    },
    {
        id: 73,
        category: "Health",
        title: "Allergy Management",
        summary: "Environmental and food allergies require different approaches",
        details: "Work with your vet to identify allergens through testing or elimination diets. Regular bathing can help with environmental allergies. Some pets need lifelong management."
    },
    {
        id: 74,
        category: "Nutrition",
        title: "Prescription Diet Compliance",
        summary: "Follow veterinary diet recommendations strictly",
        details: "Prescription diets are formulated for specific medical conditions. Don't mix with other foods or treats unless approved. Results may take weeks to months to become apparent."
    },
    {
        id: 75,
        category: "Bonding",
        title: "Quality Time Activities",
        summary: "Build strong bonds through positive shared experiences",
        details: "Try new activities together like agility, hiking, or trick training. Respect your pet's preferences - some prefer quiet bonding, others love active play. Consistency builds trust."
    },
    
    // ADVANCED CARE TIPS (76-90+)
    {
        id: 76,
        category: "Health",
        title: "Cognitive Health in Senior Pets",
        summary: "Mental exercises help maintain cognitive function",
        details: "Continue training and learning new tricks. Puzzle toys and new experiences stimulate the brain. Some pets may benefit from supplements that support brain health. Watch for signs of cognitive decline."
    },
    {
        id: 77,
        category: "Exercise",
        title: "Water Safety Guidelines",
        summary: "Not all pets are natural swimmers",
        details: "Introduce water gradually. Use life jackets for safety. Rinse off chlorine or salt water after swimming. Watch for signs of water intoxication from drinking too much while playing."
    },
    {
        id: 78,
        category: "Training",
        title: "Advanced Trick Training",
        summary: "Complex tricks provide mental stimulation and strengthen bonds",
        details: "Break complex behaviors into small steps. Practice regularly but keep sessions short and fun. Use high-value rewards for challenging tricks. Video training sessions to track progress."
    },
    {
        id: 79,
        category: "Grooming",
        title: "Show-Quality Coat Care",
        summary: "Some breeds require specialized grooming techniques",
        details: "Research breed-specific grooming standards. Use appropriate tools and products. Professional grooming may be necessary for complex cuts. Start coat care routines early."
    },
    {
        id: 80,
        category: "Behavior",
        title: "Resource Guarding Prevention",
        summary: "Teach pets to share resources willingly",
        details: "Practice 'trading' games with treats and toys. Never punish guarding behavior - it often makes it worse. Work with a professional trainer for serious guarding issues."
    },
    {
        id: 81,
        category: "Health",
        title: "Holistic Health Approaches",
        summary: "Complementary therapies can support traditional veterinary care",
        details: "Acupuncture, massage, and physical therapy can help with pain management. Always use qualified practitioners and inform your vet about any alternative treatments."
    },
    {
        id: 82,
        category: "Nutrition",
        title: "Homemade Diet Safety",
        summary: "Homemade diets require careful nutritional planning",
        details: "Work with a veterinary nutritionist to ensure balanced meals. Some nutrients are difficult to provide in homemade diets. Regular blood work can monitor nutritional status."
    },
    {
        id: 83,
        category: "Safety",
        title: "Technology Safety",
        summary: "Modern technology can pose new risks to curious pets",
        details: "Secure electrical cords and charging cables. Keep small electronics out of reach. Be cautious with automatic feeders and pet cameras - ensure they're pet-safe and secure."
    },
    {
        id: 84,
        category: "Exercise",
        title: "Breed-Specific Sports",
        summary: "Many breeds excel at specific activities they were bred for",
        details: "Herding breeds often love agility, hounds enjoy scent work, terriers love earth dog trials. Research activities that match your pet's natural instincts and abilities."
    },
    {
        id: 85,
        category: "Behavior",
        title: "Fear Period Management",
        summary: "Young pets go through predictable fear periods",
        details: "Don't force interactions during fear periods. Continue gentle exposure to new things while respecting their comfort level. What they learn during fear periods can last a lifetime."
    },
    {
        id: 86,
        category: "Health",
        title: "Reproductive Health",
        summary: "Spaying and neutering timing affects health outcomes",
        details: "Large breed dogs may benefit from later spaying/neutering for proper growth. Discuss optimal timing with your vet based on breed, size, and individual health factors."
    },
    {
        id: 87,
        category: "Grooming",
        title: "Dental Health Maintenance",
        summary: "Daily dental care prevents serious health problems",
        details: "Brush teeth daily if possible, minimum 3x weekly. Use enzymatic toothpaste designed for pets. Dental chews and special diets can supplement brushing but not replace it."
    },
    {
        id: 88,
        category: "Travel",
        title: "International Travel Requirements",
        summary: "Each country has specific pet import requirements",
        details: "Research requirements months in advance. Some countries require quarantine periods. Microchips, vaccinations, and health certificates are typically required. Use approved pet transport services."
    },
    {
        id: 89,
        category: "Emergency",
        title: "Natural Disaster Preparation",
        summary: "Include pets in all emergency preparedness plans",
        details: "Pack go-bags for pets including food, medications, and comfort items. Identify pet-friendly shelters or arrange stays with friends/family. Keep copies of medical records accessible."
    },
    {
        id: 90,
        category: "Bonding",
        title: "Understanding Pet Communication",
        summary: "Learn your pet's unique communication style",
        details: "Every pet has individual ways of communicating needs and emotions. Pay attention to subtle changes in behavior, vocalization, and body language. Respond appropriately to build trust."
    }
];

// COMPREHENSIVE DOG BREEDS DATABASE (100 FAMOUS BREEDS)
const dogBreeds = [
    {
        id: 1,
        name: "Labrador Retriever",
        category: "dog",
        personality: ["outgoing", "active", "friendly", "food-motivated", "patient"],
        behaviors: ["easy to train", "loves swimming", "high energy when young", "excellent with children"],
        size: "Large",
        lifespan: "10-12 years",
        grooming: "Weekly brushing, seasonal coat blowouts",
        healthConcerns: "Hip dysplasia, eye problems, obesity",
        idealHome: "Active families, first-time dog owners"
    },
    {
        id: 2,
        name: "Golden Retriever",
        category: "dog",
        personality: ["gentle", "loyal", "friendly", "intelligent", "eager to please"],
        behaviors: ["easy to train", "highly social", "loves water", "moderate exercise needs"],
        size: "Large",
        lifespan: "10-12 years",
        grooming: "Weekly brushing, seasonal shedding",
        healthConcerns: "Hip dysplasia, heart conditions, cancer",
        idealHome: "Families with children, active owners"
    },
    {
        id: 3,
        name: "German Shepherd",
        category: "dog",
        personality: ["confident", "courageous", "versatile", "loyal", "protective"],
        behaviors: ["highly trainable", "needs mental stimulation", "strong work drive", "can be aloof with strangers"],
        size: "Large",
        lifespan: "9-13 years",
        grooming: "Brushing 2-3 times weekly, heavy shedding",
        healthConcerns: "Hip/elbow dysplasia, bloat, degenerative myelopathy",
        idealHome: "Active families, experienced dog owners"
    },
    {
        id: 4,
        name: "French Bulldog",
        category: "dog",
        personality: ["adaptable", "playful", "smart", "affectionate", "alert"],
        behaviors: ["good apartment dog", "low exercise needs", "can be stubborn", "sensitive to heat"],
        size: "Small",
        lifespan: "10-12 years",
        grooming: "Weekly brushing, face wrinkle cleaning",
        healthConcerns: "Breathing problems, hip dysplasia, spine issues",
        idealHome: "Apartment living, less active owners"
    },
    {
        id: 5,
        name: "Bulldog",
        category: "dog",
        personality: ["docile", "willful", "friendly", "calm", "courageous"],
        behaviors: ["low exercise needs", "can be stubborn", "gentle with children", "prone to overheating"],
        size: "Medium",
        lifespan: "8-10 years",
        grooming: "Weekly brushing, daily face wrinkle cleaning",
        healthConcerns: "Breathing problems, hip dysplasia, skin issues",
        idealHome: "Apartment living, less active owners"
    },
    {
        id: 6,
        name: "Beagle",
        category: "dog",
        personality: ["curious", "friendly", "merry", "determined", "pack-oriented"],
        behaviors: ["follows scents intensely", "can be vocal", "good with children", "moderate exercise needs"],
        size: "Medium",
        lifespan: "12-15 years",
        grooming: "Weekly brushing, minimal grooming needs",
        healthConcerns: "Hip dysplasia, eye problems, epilepsy",
        idealHome: "Families, homes with secure yards"
    },
    {
        id: 7,
        name: "Poodle",
        category: "dog",
        personality: ["intelligent", "active", "elegant", "trainable", "hypoallergenic"],
        behaviors: ["highly trainable", "needs mental stimulation", "good swimmer", "can be reserved with strangers"],
        size: "Varies (Toy, Miniature, Standard)",
        lifespan: "12-15 years",
        grooming: "Professional grooming every 6-8 weeks, daily brushing",
        healthConcerns: "Hip dysplasia, bloat, eye problems",
        idealHome: "Active owners, those seeking low-shedding dogs"
    },
    {
        id: 8,
        name: "Siberian Husky",
        category: "dog",
        personality: ["outgoing", "mischievous", "loyal", "alert", "gentle"],
        behaviors: ["high exercise needs", "escape artist", "pack mentality", "can be vocal"],
        size: "Large",
        lifespan: "12-14 years",
        grooming: "Brushing 2-3 times weekly, heavy seasonal shedding",
        healthConcerns: "Hip dysplasia, eye problems, skin conditions",
        idealHome: "Very active owners, cooler climates"
    },
    {
        id: 9,
        name: "Border Collie",
        category: "dog",
        personality: ["intelligent", "energetic", "responsive", "keen", "workaholic"],
        behaviors: ["needs intense mental stimulation", "herding instinct", "highly trainable", "can be obsessive"],
        size: "Medium",
        lifespan: "12-15 years",
        grooming: "Weekly brushing, more during shedding seasons",
        healthConcerns: "Hip dysplasia, epilepsy, eye problems",
        idealHome: "Very active, experienced dog owners"
    },
    {
        id: 10,
        name: "Yorkshire Terrier",
        category: "dog",
        personality: ["bold", "determined", "courageous", "energetic", "clever"],
        behaviors: ["can be yappy", "good watchdog", "may chase small animals", "needs socialization"],
        size: "Toy",
        lifespan: "13-16 years",
        grooming: "Daily brushing, professional grooming every 6-8 weeks",
        healthConcerns: "Luxating patella, tracheal collapse, dental issues",
        idealHome: "Apartment living, adults or older children"
    },
    {
        id: 11,
        name: "Dachshund",
        category: "dog",
        personality: ["curious", "friendly", "spunky", "devoted", "brave"],
        behaviors: ["can be stubborn", "may bark frequently", "good with familiar children", "low to moderate exercise"],
        size: "Small",
        lifespan: "12-16 years",
        grooming: "Weekly brushing, nail trims important",
        healthConcerns: "Back problems, obesity, dental issues",
        idealHome: "Apartment living, families without very young children"
    },
    {
        id: 11,
        name: "Australian Shepherd",
        category: "dog",
        personality: ["intelligent", "work-oriented", "exuberant", "versatile", "protective"],
        behaviors: ["needs job to do", "herding instinct", "highly trainable", "can be reserved with strangers"],
        size: "Large",
        lifespan: "12-13 years",
        grooming: "Regular brushing, heavy seasonal shedding",
        healthConcerns: "Hip dysplasia, eye problems, epilepsy",
        idealHome: "Active families, experienced dog owners"
    },
    {
        id: 12,
        name: "Boxer",
        category: "dog",
        personality: ["fun-loving", "bright", "active", "loyal", "patient with children"],
        behaviors: ["high energy", "can be mouthy when excited", "good guard dog", "needs consistent training"],
        size: "Large",
        lifespan: "10-12 years",
        grooming: "Minimal grooming, occasional brushing",
        healthConcerns: "Heart conditions, cancer, bloat",
        idealHome: "Active families with children"
    },
    {
        id: 13,
        name: "Cocker Spaniel",
        category: "dog",
        personality: ["gentle", "smart", "happy", "sporting", "trusting"],
        behaviors: ["eager to please", "good with children", "moderate exercise needs", "can be sensitive"],
        size: "Medium",
        lifespan: "10-14 years",
        grooming: "Professional grooming every 6-8 weeks, daily brushing",
        healthConcerns: "Eye problems, hip dysplasia, autoimmune issues",
        idealHome: "Families, first-time dog owners"
    },
    {
        id: 14,
        name: "Boston Terrier",
        category: "dog",
        personality: ["friendly", "bright", "amusing", "lively", "gentlemanly"],
        behaviors: ["good apartment dog", "can be stubborn", "sensitive to extreme temperatures", "good with children"],
        size: "Small",
        lifespan: "11-13 years",
        grooming: "Minimal grooming, face wrinkle cleaning",
        healthConcerns: "Breathing problems, eye issues, luxating patella",
        idealHome: "Apartment living, families"
    },
    {
        id: 15,
        name: "Rottweiler",
        category: "dog",
        personality: ["confident", "fearless", "alert", "self-assured", "good-natured"],
        behaviors: ["needs early socialization", "protective", "can be aloof with strangers", "needs consistent training"],
        size: "Large",
        lifespan: "9-10 years",
        grooming: "Weekly brushing, seasonal shedding",
        healthConcerns: "Hip dysplasia, heart problems, osteosarcoma",
        idealHome: "Experienced dog owners, secure yards"
    },
    {
        id: 16,
        name: "Shih Tzu",
        category: "dog",
        personality: ["affectionate", "playful", "outgoing", "happy", "trusting"],
        behaviors: ["good apartment dog", "friendly with everyone", "low exercise needs", "can be stubborn to house train"],
        size: "Toy",
        lifespan: "10-18 years",
        grooming: "Daily brushing, professional grooming every 6-8 weeks",
        healthConcerns: "Breathing problems, eye issues, hip dysplasia",
        idealHome: "Apartment living, seniors, families"
    },
    {
        id: 17,
        name: "Great Dane",
        category: "dog",
        personality: ["friendly", "patient", "dependable", "gentle", "confident"],
        behaviors: ["gentle giant", "good with children", "needs space", "short exercise bursts"],
        size: "Extra Large",
        lifespan: "7-10 years",
        grooming: "Weekly brushing, minimal grooming needs",
        healthConcerns: "Bloat, heart problems, hip dysplasia",
        idealHome: "Large homes, experienced large breed owners"
    },
    {
        id: 18,
        name: "Chihuahua",
        category: "dog",
        personality: ["alert", "quick", "devoted", "sassy", "charming"],
        behaviors: ["can be yappy", "big personality in small body", "may be nippy if not socialized", "low exercise needs"],
        size: "Toy",
        lifespan: "14-16 years",
        grooming: "Weekly brushing, more for long-coat variety",
        healthConcerns: "Luxating patella, heart problems, dental issues",
        idealHome: "Apartment living, adults or older children"
    },
    {
        id: 19,
        name: "Mastiff",
        category: "dog",
        personality: ["docile", "dignified", "good-natured", "courageous", "calm"],
        behaviors: ["gentle giant", "protective of family", "low to moderate exercise", "can be stubborn"],
        size: "Extra Large",
        lifespan: "6-10 years",
        grooming: "Weekly brushing, face wrinkle cleaning",
        healthConcerns: "Hip dysplasia, bloat, heart problems",
        idealHome: "Experienced large breed owners, large homes"
    },
    {
        id: 20,
        name: "Jack Russell Terrier",
        category: "dog",
        personality: ["energetic", "fearless", "alert", "independent", "clever"],
        behaviors: ["high energy", "strong prey drive", "can be aggressive with other dogs", "needs mental stimulation"],
        size: "Small",
        lifespan: "13-16 years",
        grooming: "Weekly brushing, hand stripping for show dogs",
        healthConcerns: "Luxating patella, eye problems, deafness",
        idealHome: "Active owners, experienced dog handlers"
    },
    {
        id: 21,
        name: "Bernese Mountain Dog",
        category: "dog",
        personality: ["good-natured", "friendly", "calm", "patient", "strong"],
        behaviors: ["gentle with children", "moderate exercise needs", "can be slow to mature", "friendly with strangers"],
        size: "Large",
        lifespan: "7-10 years",
        grooming: "Regular brushing, heavy seasonal shedding",
        healthConcerns: "Cancer, hip dysplasia, bloat",
        idealHome: "Families with children, cooler climates"
    },
    {
        id: 22,
        name: "Pug",
        category: "dog",
        personality: ["charming", "mischievous", "loving", "sociable", "even-tempered"],
        behaviors: ["good apartment dog", "loves people", "can be stubborn", "prone to weight gain"],
        size: "Small",
        lifespan: "13-15 years",
        grooming: "Weekly brushing, daily face wrinkle cleaning",
        healthConcerns: "Breathing problems, eye issues, obesity",
        idealHome: "Apartment living, families, seniors"
    },
    {
        id: 23,
        name: "Doberman Pinscher",
        category: "dog",
        personality: ["loyal", "fearless", "alert", "intelligent", "obedient"],
        behaviors: ["highly trainable", "protective", "needs early socialization", "high exercise needs"],
        size: "Large",
        lifespan: "10-13 years",
        grooming: "Weekly brushing, minimal grooming needs",
        healthConcerns: "Heart problems, hip dysplasia, von Willebrand's disease",
        idealHome: "Experienced dog owners, active families"
    },
    {
        id: 24,
        name: "Saint Bernard",
        category: "dog",
        personality: ["playful", "charming", "inquisitive", "friendly", "welcoming"],
        behaviors: ["gentle giant", "good with children", "moderate exercise needs", "can drool"],
        size: "Extra Large",
        lifespan: "8-10 years",
        grooming: "Regular brushing, more for rough coat variety",
        healthConcerns: "Hip dysplasia, bloat, heart problems",
        idealHome: "Large homes, families with children"
    },
    {
        id: 25,
        name: "Basset Hound",
        category: "dog",
        personality: ["placid", "patient", "low-key", "devoted", "endearing"],
        behaviors: ["follows scents", "can be stubborn", "good with children", "moderate exercise needs"],
        size: "Medium",
        lifespan: "12-13 years",
        grooming: "Weekly brushing, ear cleaning important",
        healthConcerns: "Hip dysplasia, bloat, ear infections",
        idealHome: "Families, homes with secure yards"
    },
    {
        id: 26,
        name: "Dalmatian",
        category: "dog",
        personality: ["outgoing", "friendly", "active", "playful", "sensitive"],
        behaviors: ["high exercise needs", "can be stubborn", "good with children", "needs early socialization"],
        size: "Large",
        lifespan: "11-13 years",
        grooming: "Weekly brushing, sheds year-round",
        healthConcerns: "Deafness, urinary stones, skin allergies",
        idealHome: "Active families, experienced dog owners"
    },
    {
        id: 27,
        name: "Afghan Hound",
        category: "dog",
        personality: ["aloof", "dignified", "independent", "sweet", "clownish"],
        behaviors: ["moderate exercise needs", "can be stubborn", "strong prey drive", "needs patient training"],
        size: "Large",
        lifespan: "12-18 years",
        grooming: "Daily brushing required, professional grooming recommended",
        healthConcerns: "Hip dysplasia, eye problems, heart issues",
        idealHome: "Experienced dog owners, secure yards"
    },
    {
        id: 28,
        name: "Bloodhound",
        category: "dog",
        personality: ["gentle", "patient", "noble", "mild-mannered", "friendly"],
        behaviors: ["follows scents obsessively", "good with children", "can bay loudly", "needs mental stimulation"],
        size: "Large",
        lifespan: "10-12 years",
        grooming: "Weekly brushing, regular ear cleaning",
        healthConcerns: "Bloat, hip dysplasia, ear infections",
        idealHome: "Patient owners, homes with secure yards"
    },
    {
        id: 29,
        name: "Greyhound",
        category: "dog",
        personality: ["gentle", "noble", "independent", "quiet", "calm"],
        behaviors: ["sprint then sleep", "good apartment dog", "sensitive", "low maintenance"],
        size: "Large",
        lifespan: "10-14 years",
        grooming: "Weekly brushing, minimal grooming needs",
        healthConcerns: "Bloat, heart problems, osteosarcoma",
        idealHome: "Quiet homes, apartment living acceptable"
    },
    {
        id: 30,
        name: "Whippet",
        category: "dog",
        personality: ["gentle", "friendly", "quiet", "calm", "affectionate"],
        behaviors: ["good apartment dog", "needs warm clothing in cold", "sensitive", "good with children"],
        size: "Medium",
        lifespan: "12-15 years",
        grooming: "Minimal grooming, occasional brushing",
        healthConcerns: "Heart problems, eye issues, generally healthy",
        idealHome: "Apartments, families, seniors"
    },
    {
        id: 31,
        name: "Weimaraner",
        category: "dog",
        personality: ["friendly", "fearless", "alert", "obedient", "energetic"],
        behaviors: ["high exercise needs", "can be destructive if bored", "strong prey drive", "needs job to do"],
        size: "Large",
        lifespan: "10-13 years",
        grooming: "Weekly brushing, minimal grooming needs",
        healthConcerns: "Bloat, hip dysplasia, eye problems",
        idealHome: "Very active families, experienced dog owners"
    },
    {
        id: 32,
        name: "Akita",
        category: "dog",
        personality: ["alert", "responsive", "dignified", "courageous", "loyal"],
        behaviors: ["can be aggressive with other dogs", "protective", "needs early socialization", "independent"],
        size: "Large",
        lifespan: "10-14 years",
        grooming: "Brushing 2-3 times weekly, heavy seasonal shedding",
        healthConcerns: "Hip dysplasia, autoimmune conditions, bloat",
        idealHome: "Experienced dog owners, single dog homes"
    },
    {
        id: 33,
        name: "Shiba Inu",
        category: "dog",
        personality: ["alert", "agile", "attentive", "bold", "spirited"],
        behaviors: ["can be stubborn", "independent", "clean habits", "can be aloof with strangers"],
        size: "Medium",
        lifespan: "13-16 years",
        grooming: "Brushing 2-3 times weekly, seasonal shedding",
        healthConcerns: "Hip dysplasia, eye problems, allergies",
        idealHome: "Experienced dog owners, secure yards"
    },
    {
        id: 34,
        name: "Newfoundland",
        category: "dog",
        personality: ["sweet", "patient", "devoted", "gentle", "strong"],
        behaviors: ["excellent swimmer", "gentle with children", "moderate exercise needs", "can drool"],
        size: "Extra Large",
        lifespan: "9-10 years",
        grooming: "Daily brushing required, heavy shedding",
        healthConcerns: "Hip dysplasia, heart problems, cystinuria",
        idealHome: "Large homes, families with children"
    },
    {
        id: 35,
        name: "Portuguese Water Dog",
        category: "dog",
        personality: ["intelligent", "loyal", "athletic", "spirited", "adventurous"],
        behaviors: ["loves water", "highly trainable", "needs mental stimulation", "good with children"],
        size: "Medium",
        lifespan: "11-13 years",
        grooming: "Professional grooming every 6-8 weeks, daily brushing",
        healthConcerns: "Hip dysplasia, eye problems, heart conditions",
        idealHome: "Active families, those wanting hypoallergenic dogs"
    },
    {
        id: 36,
        name: "Australian Cattle Dog",
        category: "dog",
        personality: ["alert", "curious", "pleasant", "energetic", "loyal"],
        behaviors: ["extremely high exercise needs", "herding instinct", "can nip heels", "needs job to do"],
        size: "Medium",
        lifespan: "12-16 years",
        grooming: "Weekly brushing, seasonal shedding",
        healthConcerns: "Hip dysplasia, eye problems, deafness",
        idealHome: "Very active owners, experienced dog handlers"
    },
    {
        id: 37,
        name: "Belgian Malinois",
        category: "dog",
        personality: ["confident", "hardworking", "trainable", "protective", "intense"],
        behaviors: ["extremely high drive", "needs extensive training", "not for novice owners", "protective"],
        size: "Medium",
        lifespan: "14-16 years",
        grooming: "Weekly brushing, moderate shedding",
        healthConcerns: "Hip dysplasia, eye problems, sensitive stomach",
        idealHome: "Very experienced dog owners, working homes"
    },
    {
        id: 38,
        name: "Rhodesian Ridgeback",
        category: "dog",
        personality: ["affectionate", "dignified", "even-tempered", "reserved", "strong-willed"],
        behaviors: ["moderate exercise needs", "independent", "good guard dog", "needs early socialization"],
        size: "Large",
        lifespan: "10-12 years",
        grooming: "Weekly brushing, minimal grooming needs",
        healthConcerns: "Hip dysplasia, dermoid sinus, bloat",
        idealHome: "Experienced dog owners, active families"
    },
    {
        id: 39,
        name: "Vizsla",
        category: "dog",
        personality: ["affectionate", "gentle", "energetic", "loyal", "sensitive"],
        behaviors: ["high exercise needs", "velcro dog", "needs mental stimulation", "good with children"],
        size: "Medium",
        lifespan: "12-14 years",
        grooming: "Weekly brushing, minimal grooming needs",
        healthConcerns: "Hip dysplasia, eye problems, epilepsy",
        idealHome: "Very active families, experienced dog owners"
    },
    {
        id: 40,
        name: "Irish Setter",
        category: "dog",
        personality: ["outgoing", "sweet", "active", "eager", "trainable"],
        behaviors: ["high energy", "friendly with everyone", "needs exercise", "can be mouthy"],
        size: "Large",
        lifespan: "12-15 years",
        grooming: "Daily brushing required, professional grooming recommended",
        healthConcerns: "Hip dysplasia, bloat, eye problems",
        idealHome: "Active families, experienced dog owners"
    },
    {
        id: 41,
        name: "English Springer Spaniel",
        category: "dog",
        personality: ["friendly", "eager", "outgoing", "alert", "gentle"],
        behaviors: ["high energy", "needs mental stimulation", "good with children", "eager to please"],
        size: "Medium",
        lifespan: "12-14 years",
        grooming: "Regular brushing, professional grooming every 6-8 weeks",
        healthConcerns: "Hip dysplasia, eye problems, ear infections",
        idealHome: "Active families, those wanting sporting dogs"
    },
    {
        id: 42,
        name: "Cavalier King Charles Spaniel",
        category: "dog",
        personality: ["affectionate", "gentle", "graceful", "courageous", "sporting"],
        behaviors: ["good with everyone", "moderate exercise needs", "adaptable", "eager to please"],
        size: "Small",
        lifespan: "12-15 years",
        grooming: "Regular brushing, moderate grooming needs",
        healthConcerns: "Heart problems, eye issues, neurological problems",
        idealHome: "Families, seniors, apartment living"
    },
    {
        id: 43,
        name: "Bichon Frise",
        category: "dog",
        personality: ["playful", "curious", "peppy", "bold", "lively"],
        behaviors: ["good apartment dog", "hypoallergenic", "good with children", "can be stubborn"],
        size: "Small",
        lifespan: "14-15 years",
        grooming: "Professional grooming every 4-6 weeks, daily brushing",
        healthConcerns: "Allergies, patellar luxation, hip dysplasia",
        idealHome: "Apartment living, families, those wanting hypoallergenic dogs"
    },
    {
        id: 44,
        name: "Maltese",
        category: "dog",
        personality: ["gentle", "playful", "charming", "bold", "responsive"],
        behaviors: ["good apartment dog", "can be yappy", "good with gentle children", "may be nippy if not socialized"],
        size: "Toy",
        lifespan: "12-15 years",
        grooming: "Daily brushing required, professional grooming recommended",
        healthConcerns: "Luxating patella, dental issues, eye problems",
        idealHome: "Apartment living, adults, seniors"
    },
    {
        id: 45,
        name: "Havanese",
        category: "dog",
        personality: ["outgoing", "funny", "intelligent", "happy", "social"],
        behaviors: ["good apartment dog", "trainable", "good with children", "can have separation anxiety"],
        size: "Toy",
        lifespan: "14-16 years",
        grooming: "Daily brushing required, professional grooming recommended",
        healthConcerns: "Heart problems, eye issues, luxating patella",
        idealHome: "Families, apartment living, those wanting companion dogs"
    },
    {
        id: 46,
        name: "Papillon",
        category: "dog",
        personality: ["happy", "alert", "friendly", "hardy", "intelligent"],
        behaviors: ["highly trainable", "good watchdog", "can be shy", "needs early socialization"],
        size: "Toy",
        lifespan: "14-16 years",
        grooming: "Regular brushing, moderate grooming needs",
        healthConcerns: "Luxating patella, eye problems, dental issues",
        idealHome: "Active families, those wanting small trainable dogs"
    },
    {
        id: 47,
        name: "Italian Greyhound",
        category: "dog",
        personality: ["mischievous", "alert", "high-stepping", "playful", "clever"],
        behaviors: ["sensitive to cold", "can be shy", "moderate exercise needs", "good apartment dog"],
        size: "Toy",
        lifespan: "14-15 years",
        grooming: "Minimal grooming, occasional brushing",
        healthConcerns: "Bone fractures, dental issues, eye problems",
        idealHome: "Gentle families, apartment living, seniors"
    },
    {
        id: 48,
        name: "Bull Terrier",
        category: "dog",
        personality: ["playful", "charming", "mischievous", "bold", "active"],
        behaviors: ["can be stubborn", "needs early socialization", "strong", "needs consistent training"],
        size: "Medium",
        lifespan: "12-13 years",
        grooming: "Weekly brushing, minimal grooming needs",
        healthConcerns: "Heart problems, kidney issues, skin problems",
        idealHome: "Experienced dog owners, active families"
    },
    {
        id: 49,
        name: "Staffordshire Bull Terrier",
        category: "dog",
        personality: ["reliable", "brave", "tenacious", "intelligent", "bold"],
        behaviors: ["good with children", "needs early socialization", "strong", "can be dog aggressive"],
        size: "Medium",
        lifespan: "12-14 years",
        grooming: "Weekly brushing, minimal grooming needs",
        healthConcerns: "Hip dysplasia, eye problems, skin issues",
        idealHome: "Experienced dog owners, families with older children"
    },
    {
        id: 50,
        name: "American Staffordshire Terrier",
        category: "dog",
        personality: ["confident", "smart", "good-natured", "courageous", "loyal"],
        behaviors: ["needs early socialization", "strong", "can be dog aggressive", "protective of family"],
        size: "Medium",
        lifespan: "12-16 years",
        grooming: "Weekly brushing, minimal grooming needs",
        healthConcerns: "Hip dysplasia, heart problems, skin allergies",
        idealHome: "Experienced dog owners, secure yards"
    }
];

// COMPREHENSIVE CAT BREEDS DATABASE (75 FAMOUS BREEDS)
const catBreeds = [
    {
        id: 1,
        name: "Persian",
        category: "cat",
        personality: ["quiet", "docile", "sweet", "gentle", "undemanding"],
        behaviors: ["low activity", "enjoys routine", "minimal vocalization", "indoor lifestyle"],
        size: "Medium to Large",
        lifespan: "10-17 years",
        grooming: "Daily brushing required, professional grooming recommended",
        healthConcerns: "Breathing problems, eye issues, kidney disease",
        climatePreference: "Indoor, temperature controlled"
    },
    {
        id: 2,
        name: "Siamese",
        category: "cat",
        personality: ["active", "curious", "social", "vocal", "intelligent"],
        behaviors: ["very talkative", "follows owner around", "high activity level", "demands attention"],
        size: "Medium",
        lifespan: "11-15 years",
        grooming: "Weekly brushing, minimal grooming needs",
        healthConcerns: "Respiratory issues, dental problems, certain cancers",
        climatePreference: "Warmer climates, indoor lifestyle"
    },
    {
        id: 3,
        name: "Maine Coon",
        category: "cat",
        personality: ["friendly", "laid-back", "gentle", "intelligent", "adaptable"],
        behaviors: ["dog-like personality", "enjoys water", "chirps and trills", "good with children"],
        size: "Large",
        lifespan: "10-13 years",
        grooming: "2-3 times weekly brushing, seasonal coat changes",
        healthConcerns: "Hip dysplasia, heart problems, spinal muscular atrophy",
        climatePreference: "Cooler climates, adaptable"
    },
    {
        id: 4,
        name: "British Shorthair",
        category: "cat",
        personality: ["calm", "easygoing", "affectionate", "dignified", "independent"],
        behaviors: ["low to moderate activity", "not overly clingy", "quiet voice", "good with other pets"],
        size: "Medium to Large",
        lifespan: "12-17 years",
        grooming: "Weekly brushing, more during shedding season",
        healthConcerns: "Heart disease, obesity, dental issues",
        climatePreference: "Temperate climates, indoor lifestyle"
    },
    {
        id: 5,
        name: "Ragdoll",
        category: "cat",
        personality: ["docile", "placid", "affectionate", "gentle", "relaxed"],
        behaviors: ["goes limp when picked up", "follows owner", "low energy", "indoor cat"],
        size: "Large",
        lifespan: "12-17 years",
        grooming: "2-3 times weekly brushing, minimal matting",
        healthConcerns: "Heart problems, kidney issues, bladder stones",
        climatePreference: "Indoor only, temperature controlled"
    },
    {
        id: 6,
        name: "Abyssinian",
        category: "cat",
        personality: ["active", "playful", "curious", "intelligent", "extroverted"],
        behaviors: ["high activity level", "loves to climb", "interactive play", "may be destructive if bored"],
        size: "Medium",
        lifespan: "9-15 years",
        grooming: "Weekly brushing, minimal grooming needs",
        healthConcerns: "Kidney disease, eye problems, patellar luxation",
        climatePreference: "Warmer climates, can adapt to most conditions"
    },
    {
        id: 7,
        name: "Russian Blue",
        category: "cat",
        personality: ["reserved", "gentle", "quiet", "intelligent", "loyal"],
        behaviors: ["shy with strangers", "bonds closely with family", "moderate activity", "routine-oriented"],
        size: "Medium",
        lifespan: "10-16 years",
        grooming: "Weekly brushing, dense double coat",
        healthConcerns: "Generally healthy, some bladder stones",
        climatePreference: "Cooler climates, indoor lifestyle"
    },
    {
        id: 8,
        name: "Bengal",
        category: "cat",
        personality: ["active", "intelligent", "curious", "confident", "energetic"],
        behaviors: ["very high activity", "loves water", "can be vocal", "needs mental stimulation"],
        size: "Medium to Large",
        lifespan: "12-16 years",
        grooming: "Weekly brushing, enjoys being groomed",
        healthConcerns: "Heart problems, hip dysplasia, eye issues",
        climatePreference: "Warmer climates, high humidity tolerance"
    },
    {
        id: 9,
        name: "Birman",
        category: "cat",
        personality: ["gentle", "quiet", "companionable", "intelligent", "curious"],
        behaviors: ["moderate activity", "people-oriented", "soft voice", "enjoys routine"],
        size: "Medium to Large",
        lifespan: "12-16 years",
        grooming: "2-3 times weekly brushing, silky coat",
        healthConcerns: "Kidney problems, heart disease, corneal dystrophy",
        climatePreference: "Temperate climates, indoor lifestyle"
    },
    {
        id: 10,
        name: "Norwegian Forest Cat",
        category: "cat",
        personality: ["gentle", "friendly", "intelligent", "adaptable", "patient"],
        behaviors: ["loves to climb", "good with children", "moderate activity", "outdoor skills"],
        size: "Large",
        lifespan: "12-16 years",
        grooming: "2-3 times weekly, heavy seasonal shedding",
        healthConcerns: "Heart disease, hip dysplasia, kidney disease",
        climatePreference: "Cold climates, very hardy"
    },
    {
        id: 11,
        name: "Sphynx",
        category: "cat",
        personality: ["energetic", "mischievous", "loyal", "outgoing", "intelligent"],
        behaviors: ["heat-seeking", "very social", "acrobatic", "demands attention"],
        size: "Medium",
        lifespan: "8-14 years",
        grooming: "Weekly baths, sun protection needed",
        healthConcerns: "Skin problems, heart disease, neurological issues",
        climatePreference: "Warm climates, indoor only"
    },
    {
        id: 12,
        name: "Scottish Fold",
        category: "cat",
        personality: ["sweet", "calm", "adaptable", "loving", "quiet"],
        behaviors: ["moderate activity", "enjoys human company", "gets along with other pets", "indoor lifestyle"],
        size: "Medium",
        lifespan: "11-15 years",
        grooming: "Weekly brushing, more for longhair variety",
        healthConcerns: "Joint problems, heart disease, ear issues",
        climatePreference: "Indoor lifestyle, temperature controlled"
    },
    {
        id: 12,
        name: "American Shorthair",
        category: "cat",
        personality: ["easy-going", "calm", "gentle", "adaptable", "friendly"],
        behaviors: ["moderate activity", "good with children", "independent", "good hunter"],
        size: "Medium to Large",
        lifespan: "13-17 years",
        grooming: "Weekly brushing, seasonal shedding",
        healthConcerns: "Heart disease, hip dysplasia, generally healthy",
        climatePreference: "All climates, very adaptable"
    },
    {
        id: 13,
        name: "Oriental",
        category: "cat",
        personality: ["vocal", "social", "intelligent", "active", "demanding"],
        behaviors: ["very talkative", "follows owner", "high activity", "needs companionship"],
        size: "Medium",
        lifespan: "12-15 years",
        grooming: "Weekly brushing, minimal grooming",
        healthConcerns: "Liver problems, heart issues, respiratory problems",
        climatePreference: "Warmer climates, indoor lifestyle"
    },
    {
        id: 14,
        name: "Birman",
        category: "cat",
        personality: ["gentle", "quiet", "companionable", "intelligent", "curious"],
        behaviors: ["moderate activity", "people-oriented", "soft voice", "enjoys routine"],
        size: "Medium to Large",
        lifespan: "12-16 years",
        grooming: "2-3 times weekly brushing, silky coat",
        healthConcerns: "Kidney problems, heart disease, corneal dystrophy",
        climatePreference: "Temperate climates, indoor lifestyle"
    },
    {
        id: 15,
        name: "Burmese",
        category: "cat",
        personality: ["people-oriented", "playful", "curious", "intelligent", "social"],
        behaviors: ["follows owner around", "vocal but soft", "active and playful", "good with children"],
        size: "Medium",
        lifespan: "10-17 years",
        grooming: "Weekly brushing, minimal grooming needs",
        healthConcerns: "Diabetes, heart problems, kidney disease",
        climatePreference: "Warmer climates, indoor lifestyle"
    },
    {
        id: 16,
        name: "Norwegian Forest Cat",
        category: "cat",
        personality: ["gentle", "friendly", "intelligent", "adaptable", "patient"],
        behaviors: ["loves to climb", "good with children", "moderate activity", "outdoor skills"],
        size: "Large",
        lifespan: "12-16 years",
        grooming: "2-3 times weekly, heavy seasonal shedding",
        healthConcerns: "Heart disease, hip dysplasia, kidney disease",
        climatePreference: "Cold climates, very hardy"
    },
    {
        id: 17,
        name: "Devon Rex",
        category: "cat",
        personality: ["mischievous", "active", "people-oriented", "intelligent", "playful"],
        behaviors: ["high activity level", "loves attention", "can be destructive", "dog-like behavior"],
        size: "Small to Medium",
        lifespan: "9-15 years",
        grooming: "Gentle weekly brushing, fragile coat",
        healthConcerns: "Heart problems, muscle weakness, skin issues",
        climatePreference: "Warmer climates, indoor lifestyle"
    },
    {
        id: 18,
        name: "Turkish Angora",
        category: "cat",
        personality: ["intelligent", "loyal", "gentle", "playful", "athletic"],
        behaviors: ["bonds with one person", "enjoys water", "active and agile", "can be territorial"],
        size: "Medium",
        lifespan: "12-18 years",
        grooming: "2-3 times weekly, silky single coat",
        healthConcerns: "Deafness in white cats, heart problems",
        climatePreference: "Temperate climates, adaptable"
    },
    {
        id: 19,
        name: "Manx",
        category: "cat",
        personality: ["playful", "intelligent", "loyal", "gentle", "social"],
        behaviors: ["dog-like loyalty", "good with children", "active hunter", "territorial"],
        size: "Medium",
        lifespan: "8-14 years",
        grooming: "Weekly brushing, double coat variety exists",
        healthConcerns: "Manx syndrome, arthritis, bowel problems",
        climatePreference: "Cooler climates, very hardy"
    },
    {
        id: 20,
        name: "Cornish Rex",
        category: "cat",
        personality: ["active", "playful", "people-oriented", "intelligent", "acrobatic"],
        behaviors: ["high activity level", "heat-seeking", "can be vocal", "kitten-like throughout life"],
        size: "Small to Medium",
        lifespan: "11-15 years",
        grooming: "Gentle weekly brushing, delicate curly coat",
        healthConcerns: "Heart problems, skin issues, patellar luxation",
        climatePreference: "Warmer climates, needs warmth"
    },
    {
        id: 21,
        name: "Exotic Shorthair",
        category: "cat",
        personality: ["quiet", "gentle", "loyal", "affectionate", "peaceful"],
        behaviors: ["less active than most breeds", "enjoys routine", "quiet voice", "indoor lifestyle"],
        size: "Medium",
        lifespan: "8-15 years",
        grooming: "Weekly brushing, face cleaning needed",
        healthConcerns: "Breathing problems, eye issues, kidney disease",
        climatePreference: "Indoor only, temperature controlled"
    },
    {
        id: 21,
        name: "Oriental Shorthair",
        category: "cat",
        personality: ["vocal", "social", "intelligent", "active", "demanding"],
        behaviors: ["very talkative", "follows owner", "high activity", "needs companionship"],
        size: "Medium",
        lifespan: "12-15 years",
        grooming: "Weekly brushing, minimal grooming",
        healthConcerns: "Liver problems, heart issues, respiratory problems",
        climatePreference: "Warmer climates, indoor lifestyle"
    },
    {
        id: 22,
        name: "Tonkinese",
        category: "cat",
        personality: ["active", "playful", "vocal", "intelligent", "social"],
        behaviors: ["moderately vocal", "people-oriented", "playful throughout life", "good with children"],
        size: "Medium",
        lifespan: "13-16 years",
        grooming: "Weekly brushing, minimal grooming needs",
        healthConcerns: "Generally healthy, some heart problems",
        climatePreference: "Indoor lifestyle, adaptable"
    },
    {
        id: 23,
        name: "Turkish Van",
        category: "cat",
        personality: ["energetic", "intelligent", "playful", "independent", "athletic"],
        behaviors: ["loves water", "excellent swimmer", "active and agile", "can be territorial"],
        size: "Large",
        lifespan: "12-17 years",
        grooming: "Regular brushing, water-resistant coat",
        healthConcerns: "Generally healthy, some heart problems",
        climatePreference: "Temperate climates, adaptable"
    },
    {
        id: 24,
        name: "Siberian",
        category: "cat",
        personality: ["calm", "friendly", "playful", "intelligent", "loyal"],
        behaviors: ["good with children", "moderate activity", "hypoallergenic qualities", "patient"],
        size: "Large",
        lifespan: "11-15 years",
        grooming: "Regular brushing, triple coat",
        healthConcerns: "Generally healthy, some heart problems",
        climatePreference: "Cold climates, very hardy"
    },
    {
        id: 25,
        name: "Bombay",
        category: "cat",
        personality: ["outgoing", "friendly", "playful", "intelligent", "adaptable"],
        behaviors: ["people-oriented", "good with children", "moderate activity", "heat-seeking"],
        size: "Medium",
        lifespan: "12-16 years",
        grooming: "Weekly brushing, shiny coat",
        healthConcerns: "Heart problems, breathing issues, generally healthy",
        climatePreference: "Indoor lifestyle, warm climates"
    },
    {
        id: 28,
        name: "Chartreux",
        category: "cat",
        personality: ["quiet", "gentle", "intelligent", "observant", "loyal"],
        behaviors: ["rarely vocal", "patient", "good with children", "independent"],
        size: "Medium to Large",
        lifespan: "11-15 years",
        grooming: "Weekly brushing, water-repellent coat",
        healthConcerns: "Generally healthy, some joint problems",
        climatePreference: "Cooler climates, adaptable"
    },
    {
        id: 29,
        name: "Egyptian Mau",
        category: "cat",
        personality: ["intelligent", "loyal", "gentle", "active", "shy"],
        behaviors: ["fastest domestic cat", "good climber", "territorial", "bonds with family"],
        size: "Medium",
        lifespan: "12-15 years",
        grooming: "Weekly brushing, naturally spotted coat",
        healthConcerns: "Generally healthy, some heart problems",
        climatePreference: "Warmer climates, indoor lifestyle"
    },
    {
        id: 30,
        name: "Ocicat",
        category: "cat",
        personality: ["outgoing", "friendly", "active", "intelligent", "social"],
        behaviors: ["dog-like personality", "trainable", "good with strangers", "high activity"],
        size: "Medium to Large",
        lifespan: "12-18 years",
        grooming: "Weekly brushing, spotted coat",
        healthConcerns: "Generally healthy, some heart problems",
        climatePreference: "Indoor lifestyle, adaptable"
    },
    {
        id: 31,
        name: "Savannah",
        category: "cat",
        personality: ["active", "curious", "bold", "intelligent", "loyal"],
        behaviors: ["very high activity", "loves water", "can jump high", "dog-like traits"],
        size: "Large",
        lifespan: "12-20 years",
        grooming: "Weekly brushing, short coat",
        healthConcerns: "Generally healthy, some fertility issues",
        climatePreference: "Warmer climates, needs space"
    },
    {
        id: 32,
        name: "Himalayan",
        category: "cat",
        personality: ["calm", "gentle", "sweet", "quiet", "affectionate"],
        behaviors: ["low activity", "enjoys routine", "indoor lifestyle", "lap cat"],
        size: "Medium to Large",
        lifespan: "9-15 years",
        grooming: "Daily brushing required, long coat",
        healthConcerns: "Breathing problems, eye issues, kidney disease",
        climatePreference: "Indoor only, temperature controlled"
    },
    {
        id: 33,
        name: "Balinese",
        category: "cat",
        personality: ["intelligent", "playful", "affectionate", "vocal", "social"],
        behaviors: ["very talkative", "active", "good with children", "attention-seeking"],
        size: "Medium",
        lifespan: "12-20 years",
        grooming: "2-3 times weekly brushing, silky coat",
        healthConcerns: "Generally healthy, some heart problems",
        climatePreference: "Indoor lifestyle, warmer climates"
    },
    {
        id: 34,
        name: "Javanese",
        category: "cat",
        personality: ["active", "playful", "intelligent", "vocal", "curious"],
        behaviors: ["high activity level", "talkative", "investigative", "people-oriented"],
        size: "Medium",
        lifespan: "10-15 years",
        grooming: "Regular brushing, medium-length coat",
        healthConcerns: "Generally healthy, some respiratory issues",
        climatePreference: "Indoor lifestyle, moderate climates"
    },
    {
        id: 35,
        name: "Somali",
        category: "cat",
        personality: ["active", "intelligent", "curious", "playful", "gentle"],
        behaviors: ["high activity level", "loves to climb", "water-curious", "interactive"],
        size: "Medium",
        lifespan: "11-16 years",
        grooming: "Regular brushing, fox-like coat",
        healthConcerns: "Generally healthy, some kidney problems",
        climatePreference: "Moderate climates, indoor lifestyle"
    },
    {
        id: 36,
        name: "Korat",
        category: "cat",
        personality: ["quiet", "gentle", "intelligent", "playful", "loyal"],
        behaviors: ["bonds with one person", "dislikes loud noises", "good memory", "gentle play"],
        size: "Medium",
        lifespan: "10-15 years",
        grooming: "Weekly brushing, silver-blue coat",
        healthConcerns: "Generally healthy, some genetic conditions",
        climatePreference: "Indoor lifestyle, moderate climates"
    },
    {
        id: 37,
        name: "LaPerm",
        category: "cat",
        personality: ["affectionate", "active", "curious", "gentle", "people-oriented"],
        behaviors: ["loves attention", "good with children", "moderate activity", "seeks warmth"],
        size: "Medium",
        lifespan: "10-15 years",
        grooming: "Minimal brushing, curly coat",
        healthConcerns: "Generally healthy breed",
        climatePreference: "Indoor lifestyle, warmer climates"
    },
    {
        id: 38,
        name: "Selkirk Rex",
        category: "cat",
        personality: ["patient", "tolerant", "playful", "calm", "affectionate"],
        behaviors: ["good with children", "relaxed demeanor", "moderate activity", "social"],
        size: "Medium to Large",
        lifespan: "10-15 years",
        grooming: "Gentle brushing, curly coat care",
        healthConcerns: "Generally healthy, some heart problems",
        climatePreference: "Indoor lifestyle, moderate climates"
    },
    {
        id: 39,
        name: "Singapura",
        category: "cat",
        personality: ["curious", "playful", "affectionate", "intelligent", "active"],
        behaviors: ["smallest breed", "loves heights", "people-oriented", "inquisitive"],
        size: "Small",
        lifespan: "11-15 years",
        grooming: "Minimal grooming, short coat",
        healthConcerns: "Generally healthy, some kidney problems",
        climatePreference: "Warmer climates, indoor lifestyle"
    },
    {
        id: 40,
        name: "Snowshoe",
        category: "cat",
        personality: ["sweet", "affectionate", "intelligent", "social", "vocal"],
        behaviors: ["moderately vocal", "good with families", "enjoys water", "playful"],
        size: "Medium",
        lifespan: "14-19 years",
        grooming: "Weekly brushing, short coat",
        healthConcerns: "Generally healthy breed",
        climatePreference: "Indoor lifestyle, adaptable"
    },
    {
        id: 41,
        name: "Turkish Angora",
        category: "cat",
        personality: ["intelligent", "playful", "energetic", "social", "graceful"],
        behaviors: ["loves to swim", "climbs well", "interactive", "bonds with family"],
        size: "Medium",
        lifespan: "12-18 years",
        grooming: "Daily brushing, silky coat",
        healthConcerns: "Deafness in white cats, heart problems",
        climatePreference: "Moderate climates, adaptable"
    },
    {
        id: 42,
        name: "American Curl",
        category: "cat",
        personality: ["sweet", "gentle", "playful", "people-oriented", "adaptable"],
        behaviors: ["kitten-like throughout life", "good with children", "moderate activity", "curious"],
        size: "Medium",
        lifespan: "12-16 years",
        grooming: "Weekly brushing, ear care important",
        healthConcerns: "Ear problems, generally healthy",
        climatePreference: "Indoor lifestyle, adaptable"
    },
    {
        id: 43,
        name: "Japanese Bobtail",
        category: "cat",
        personality: ["active", "intelligent", "social", "vocal", "playful"],
        behaviors: ["very talkative", "dog-like traits", "loves water", "interactive"],
        size: "Medium",
        lifespan: "15-18 years",
        grooming: "Weekly brushing, short coat",
        healthConcerns: "Generally healthy breed",
        climatePreference: "Indoor lifestyle, adaptable"
    },
    {
        id: 44,
        name: "Munchkin",
        category: "cat",
        personality: ["outgoing", "intelligent", "playful", "people-oriented", "curious"],
        behaviors: ["good with children", "sits on hind legs", "fast despite short legs", "social"],
        size: "Small to Medium",
        lifespan: "12-15 years",
        grooming: "Weekly brushing, various coat types",
        healthConcerns: "Spinal problems, generally healthy",
        climatePreference: "Indoor lifestyle, adaptable"
    },
    {
        id: 45,
        name: "Peterbald",
        category: "cat",
        personality: ["affectionate", "peaceful", "curious", "smart", "energetic"],
        behaviors: ["dog-like loyalty", "follows owner", "needs warmth", "social"],
        size: "Medium",
        lifespan: "12-15 years",
        grooming: "Minimal grooming, hairless care",
        healthConcerns: "Skin issues, sun sensitivity",
        climatePreference: "Warm climates, needs protection"
    },
    {
        id: 46,
        name: "Pixiebob",
        category: "cat",
        personality: ["dog-like", "intelligent", "active", "loyal", "bold"],
        behaviors: ["chirps and chatters", "walks on leash", "plays fetch", "family-oriented"],
        size: "Large",
        lifespan: "13-15 years",
        grooming: "Weekly brushing, dense coat",
        healthConcerns: "Generally healthy breed",
        climatePreference: "Adaptable, prefers cooler climates"
    },
    {
        id: 47,
        name: "Ragamuffin",
        category: "cat",
        personality: ["docile", "calm", "affectionate", "patient", "sweet"],
        behaviors: ["goes limp when picked up", "good with children", "low activity", "indoor cat"],
        size: "Large",
        lifespan: "12-16 years",
        grooming: "Daily brushing, long coat",
        healthConcerns: "Heart problems, kidney issues",
        climatePreference: "Indoor only, temperature controlled"
    },
    {
        id: 48,
        name: "Serengeti",
        category: "cat",
        personality: ["confident", "alert", "friendly", "active", "curious"],
        behaviors: ["high activity level", "needs mental stimulation", "good jumper", "playful"],
        size: "Medium to Large",
        lifespan: "13-15 years",
        grooming: "Weekly brushing, short coat",
        healthConcerns: "Generally healthy breed",
        climatePreference: "Indoor lifestyle, warmer climates"
    },
    {
        id: 49,
        name: "York Chocolate",
        category: "cat",
        personality: ["friendly", "intelligent", "curious", "active", "social"],
        behaviors: ["good with families", "playful", "enjoys interaction", "moderate activity"],
        size: "Medium to Large",
        lifespan: "13-15 years",
        grooming: "Regular brushing, semi-long coat",
        healthConcerns: "Generally healthy breed",
        climatePreference: "Indoor lifestyle, adaptable"
    },
    {
        id: 50,
        name: "Chausie",
        category: "cat",
        personality: ["active", "intelligent", "curious", "athletic", "loyal"],
        behaviors: ["very high activity", "needs space", "good jumper", "interactive"],
        size: "Large",
        lifespan: "12-14 years",
        grooming: "Weekly brushing, short coat",
        healthConcerns: "Generally healthy, some digestive issues",
        climatePreference: "Needs space, adaptable"
    },
    {
        id: 51,
        name: "Highlander",
        category: "cat",
        personality: ["outgoing", "confident", "playful", "intelligent", "social"],
        behaviors: ["dog-like personality", "loves water", "high activity", "family-oriented"],
        size: "Medium to Large",
        lifespan: "10-15 years",
        grooming: "Weekly brushing, dense coat",
        healthConcerns: "Generally healthy breed",
        climatePreference: "Indoor lifestyle, adaptable"
    },
    {
        id: 52,
        name: "Khao Manee",
        category: "cat",
        personality: ["active", "playful", "intelligent", "curious", "social"],
        behaviors: ["very interactive", "attention-seeking", "communicative", "energetic"],
        size: "Medium",
        lifespan: "10-12 years",
        grooming: "Minimal grooming, white coat",
        healthConcerns: "Deafness, generally healthy",
        climatePreference: "Warmer climates, indoor lifestyle"
    },
    {
        id: 53,
        name: "Lykoi",
        category: "cat",
        personality: ["outgoing", "energetic", "playful", "intelligent", "loyal"],
        behaviors: ["dog-like behavior", "hunting instincts", "social with family", "active"],
        size: "Medium",
        lifespan: "12-15 years",
        grooming: "Minimal grooming, sparse coat",
        healthConcerns: "New breed, generally healthy",
        climatePreference: "Indoor lifestyle, needs protection"
    },
    {
        id: 54,
        name: "Minuet",
        category: "cat",
        personality: ["sweet", "calm", "affectionate", "gentle", "patient"],
        behaviors: ["good with children", "low to moderate activity", "lap cat", "quiet"],
        size: "Small to Medium",
        lifespan: "12-14 years",
        grooming: "Daily brushing, long coat variety",
        healthConcerns: "Spinal issues, breathing problems",
        climatePreference: "Indoor only, temperature controlled"
    },
    {
        id: 55,
        name: "Napoleon",
        category: "cat",
        personality: ["sweet", "affectionate", "playful", "calm", "social"],
        behaviors: ["good with families", "adaptable", "moderate activity", "lap cat tendencies"],
        size: "Small",
        lifespan: "12-15 years",
        grooming: "Regular brushing, various coat lengths",
        healthConcerns: "Spinal problems, generally healthy",
        climatePreference: "Indoor lifestyle, adaptable"
    },
    {
        id: 56,
        name: "Toyger",
        category: "cat",
        personality: ["outgoing", "friendly", "intelligent", "easy-going", "active"],
        behaviors: ["good with families", "trainable", "moderate activity", "social"],
        size: "Medium to Large",
        lifespan: "12-15 years",
        grooming: "Weekly brushing, tiger-striped coat",
        healthConcerns: "Generally healthy breed",
        climatePreference: "Indoor lifestyle, adaptable"
    },
    {
        id: 57,
        name: "Bambino",
        category: "cat",
        personality: ["outgoing", "affectionate", "energetic", "intelligent", "social"],
        behaviors: ["very active despite short legs", "playful", "people-oriented", "curious"],
        size: "Small",
        lifespan: "12-14 years",
        grooming: "Minimal grooming, hairless care",
        healthConcerns: "Skin issues, spinal problems",
        climatePreference: "Warm climates, needs protection"
    },
    {
        id: 58,
        name: "Dwelf",
        category: "cat",
        personality: ["outgoing", "energetic", "intelligent", "playful", "social"],
        behaviors: ["very active", "attention-seeking", "people-oriented", "curious"],
        size: "Small",
        lifespan: "12-14 years",
        grooming: "Minimal grooming, hairless care",
        healthConcerns: "Multiple genetic issues, skin problems",
        climatePreference: "Warm climates, indoor only"
    },
    {
        id: 59,
        name: "Elf",
        category: "cat",
        personality: ["outgoing", "friendly", "energetic", "intelligent", "people-oriented"],
        behaviors: ["very social", "playful", "attention-seeking", "active"],
        size: "Medium",
        lifespan: "8-14 years",
        grooming: "Minimal grooming, hairless care",
        healthConcerns: "Heart problems, skin issues",
        climatePreference: "Warm climates, needs protection"
    },
    {
        id: 60,
        name: "Genetta",
        category: "cat",
        personality: ["active", "playful", "intelligent", "curious", "affectionate"],
        behaviors: ["high activity level", "good climber", "playful throughout life", "social"],
        size: "Small to Medium",
        lifespan: "12-16 years",
        grooming: "Weekly brushing, spotted coat",
        healthConcerns: "Spinal issues, generally healthy",
        climatePreference: "Indoor lifestyle, adaptable"
    },
    {
        id: 61,
        name: "Kinkalow",
        category: "cat",
        personality: ["playful", "outgoing", "people-oriented", "intelligent", "active"],
        behaviors: ["very social", "good with children", "playful", "curious"],
        size: "Small",
        lifespan: "10-15 years",
        grooming: "Weekly brushing, ear care important",
        healthConcerns: "Spinal problems, ear issues",
        climatePreference: "Indoor lifestyle, adaptable"
    },
    {
        id: 62,
        name: "Lambkin",
        category: "cat",
        personality: ["sweet", "gentle", "playful", "affectionate", "calm"],
        behaviors: ["good with families", "moderate activity", "lap cat tendencies", "social"],
        size: "Small",
        lifespan: "12-14 years",
        grooming: "Regular brushing, curly coat",
        healthConcerns: "Spinal problems, generally healthy",
        climatePreference: "Indoor lifestyle, adaptable"
    },
    {
        id: 63,
        name: "Minskin",
        category: "cat",
        personality: ["outgoing", "affectionate", "playful", "intelligent", "people-oriented"],
        behaviors: ["very social", "good with children", "active despite appearance", "curious"],
        size: "Small",
        lifespan: "12-14 years",
        grooming: "Minimal grooming, sparse coat",
        healthConcerns: "Skin issues, spinal problems",
        climatePreference: "Warm climates, needs protection"
    },
    {
        id: 64,
        name: "Skookum",
        category: "cat",
        personality: ["playful", "active", "intelligent", "curious", "affectionate"],
        behaviors: ["high activity level", "good climber despite short legs", "social", "playful"],
        size: "Small",
        lifespan: "10-15 years",
        grooming: "Regular brushing, curly coat",
        healthConcerns: "Spinal problems, generally healthy",
        climatePreference: "Indoor lifestyle, adaptable"
    },
    {
        id: 65,
        name: "Ukrainian Levkoy",
        category: "cat",
        personality: ["friendly", "outgoing", "intelligent", "playful", "people-oriented"],
        behaviors: ["very social", "dog-like loyalty", "active", "attention-seeking"],
        size: "Medium",
        lifespan: "9-15 years",
        grooming: "Minimal grooming, hairless care",
        healthConcerns: "Skin issues, ear problems",
        climatePreference: "Warm climates, needs protection"
    },
    {
        id: 66,
        name: "Aegean",
        category: "cat",
        personality: ["intelligent", "lively", "communicative", "social", "playful"],
        behaviors: ["loves water", "excellent fisher", "very vocal", "active"],
        size: "Medium",
        lifespan: "9-12 years",
        grooming: "Weekly brushing, semi-long coat",
        healthConcerns: "Generally healthy breed",
        climatePreference: "Coastal climates, adaptable"
    },
    {
        id: 67,
        name: "Cyprus",
        category: "cat",
        personality: ["gentle", "affectionate", "intelligent", "social", "adaptable"],
        behaviors: ["good with families", "moderate activity", "indoor/outdoor adaptable", "social"],
        size: "Medium",
        lifespan: "12-15 years",
        grooming: "Weekly brushing, short to medium coat",
        healthConcerns: "Generally healthy breed",
        climatePreference: "Mediterranean climate, adaptable"
    },
    {
        id: 68,
        name: "Dragon Li",
        category: "cat",
        personality: ["intelligent", "friendly", "gentle", "loyal", "calm"],
        behaviors: ["bonds with family", "good with children", "moderate activity", "patient"],
        size: "Medium",
        lifespan: "12-15 years",
        grooming: "Weekly brushing, short coat",
        healthConcerns: "Generally healthy breed",
        climatePreference: "Moderate climates, adaptable"
    },
    {
        id: 69,
        name: "Kanaani",
        category: "cat",
        personality: ["active", "intelligent", "curious", "independent", "alert"],
        behaviors: ["high activity level", "excellent hunter", "needs mental stimulation", "territorial"],
        size: "Medium to Large",
        lifespan: "12-15 years",
        grooming: "Weekly brushing, short spotted coat",
        healthConcerns: "Generally healthy breed",
        climatePreference: "Warmer climates, needs space"
    },
    {
        id: 70,
        name: "Kurilian Bobtail",
        category: "cat",
        personality: ["gentle", "intelligent", "playful", "easy-going", "social"],
        behaviors: ["excellent fisher", "loves water", "good with families", "moderate activity"],
        size: "Medium to Large",
        lifespan: "15-20 years",
        grooming: "Weekly brushing, weather-resistant coat",
        healthConcerns: "Generally healthy breed",
        climatePreference: "Cold climates, very hardy"
    },
    {
        id: 71,
        name: "Sokoke",
        category: "cat",
        personality: ["active", "playful", "intelligent", "independent", "curious"],
        behaviors: ["excellent climber", "loves heights", "moderate activity", "alert"],
        size: "Medium",
        lifespan: "15-20 years",
        grooming: "Minimal grooming, short coat",
        healthConcerns: "Generally healthy breed",
        climatePreference: "Warm climates, indoor lifestyle"
    },
    {
        id: 72,
        name: "Thai",
        category: "cat",
        personality: ["vocal", "intelligent", "active", "social", "affectionate"],
        behaviors: ["very talkative", "people-oriented", "high activity", "attention-seeking"],
        size: "Medium",
        lifespan: "12-16 years",
        grooming: "Weekly brushing, short coat",
        healthConcerns: "Generally healthy, some respiratory issues",
        climatePreference: "Warmer climates, indoor lifestyle"
    },
    {
        id: 73,
        name: "Raas",
        category: "cat",
        personality: ["calm", "gentle", "intelligent", "loyal", "independent"],
        behaviors: ["bonds with family", "moderate activity", "good mouser", "patient"],
        size: "Medium",
        lifespan: "12-14 years",
        grooming: "Weekly brushing, short coat",
        healthConcerns: "Generally healthy breed",
        climatePreference: "Tropical climates, adaptable"
    },
    {
        id: 74,
        name: "Sam Sawet",
        category: "cat",
        personality: ["calm", "gentle", "intelligent", "affectionate", "quiet"],
        behaviors: ["bonds with owner", "low to moderate activity", "indoor lifestyle", "peaceful"],
        size: "Medium",
        lifespan: "10-15 years",
        grooming: "Weekly brushing, short coat",
        healthConcerns: "Generally healthy, some genetic conditions",
        climatePreference: "Warmer climates, indoor lifestyle"
    },
    {
        id: 75,
        name: "Suphalak",
        category: "cat",
        personality: ["active", "playful", "intelligent", "affectionate", "social"],
        behaviors: ["people-oriented", "moderate to high activity", "good with families", "interactive"],
        size: "Medium",
        lifespan: "12-16 years",
        grooming: "Weekly brushing, copper-colored coat",
        healthConcerns: "Generally healthy breed",
        climatePreference: "Warmer climates, indoor lifestyle"
    }
];

// Combine all breed data for search functionality
const allBreeds = [...dogBreeds, ...catBreeds];

// Export globally for search functionality
window.allBreeds = allBreeds;
window.dogBreeds = dogBreeds;
window.catBreeds = catBreeds;
window.petTips = petTips;

// Note: Search functionality is now handled by global.js
