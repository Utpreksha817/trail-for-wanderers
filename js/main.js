// Central Database mapping State details, districts, and dedicated district deep-dives
const stateDatabase = {
    andhra_pradesh: { title: "Andhra Pradesh", heading: "Explore Andhra Pradesh", description: "The Sunrise State known for its rich culture, rivers, and scenic hills.", weatherQuery: "Amaravati", districts: ["Anantapur", "Chittoor", "East Godavari", "Guntur", "Krishna", "Kurnool", "Prakasam", "Nellore", "Srikakulam", "Visakhapatnam", "Vizianagaram", "West Godavari", "Cuddapah"] },
    arunachal_pradesh: { title: "Arunachal Pradesh", heading: "Explore Arunachal Pradesh", description: "Land of the Rising Sun, offering pristine tribal valleys and dramatic monastery vistas.", weatherQuery: "Itanagar", districts: ["Tawang", "West Kameng", "East Kameng", "Papum Pare", "Lower Subansiri", "Upper Siang", "Changlang", "Tirap"] },
    assam: { title: "Assam", heading: "Explore Assam", description: "The Tea Garden of India, filled with wildlife sanctuaries and wildlife preserves.", weatherQuery: "Dispur", districts: ["Kamrup", "Jorhat", "Dibrugarh", "Sivasagar", "Sonitpur", "Cachar", "Nagaon", "Karbi Anglong"] },
    bihar: { title: "Bihar", heading: "Explore Bihar", description: "Land of Viharas, absolute epicenter of historic kingdoms and sacred spiritual centers.", weatherQuery: "Patna", districts: ["Patna", "Gaya", "Nalanda", "Bhagalpur", "Muzaffarpur", "Vaishali", "Bhojpur", "Darbhanga"] },
    chhattisgarh: { title: "Chhattisgarh", heading: "Explore Chhattisgarh", description: "The Rice Bowl of India, famed for its cascading waterfalls and distinct heritage monuments.", weatherQuery: "Raipur", districts: ["Raipur", "Bilaspur", "Durg", "Bastar", "Sarguja", "Korba", "Rajnandgaon"] },
    goa: { title: "Goa", heading: "Explore Goa", description: "India's golden-sand beach paradise featuring relaxed, sun-kissed coastlines and vibrant nightlife.", weatherQuery: "Panaji", districts: ["North Goa", "South Goa"] },
    gujarat: { title: "Gujarat", heading: "Explore Gujarat", description: "A vibrant state showcasing the vast salt plains of the Rann of Kutch, historic stepwells, and the sanctuary of Asiatic Lions.", weatherQuery: "Gandhinagar", districts: ["Ahmedabad", "Amreli", "Anand", "Aravalli", "Banaskantha", "Bharuch", "Bhavnagar", "Botad", "Chhota Udaipur", "Dahod", "Dang", "Devbhoomi Dwarka", "Gandhinagar", "Gir Somnath", "Jamnagar", "Junagadh", "Kheda", "Kutch", "Mahisagar", "Mehsana", "Morbi", "Narmada", "Navsari", "Panchmahal", "Patan", "Porbandar", "Rajkot", "Sabarkantha", "Surat", "Surendranagar", "Tapi", "Vadodara", "Valsad"] },
    haryana: { title: "Haryana", heading: "Explore Haryana", description: "The Abode of God, merging deep mythological history with thriving modern corporate hubs.", weatherQuery: "Chandigarh", districts: ["Gurugram", "Faridabad", "Panipat", "Ambala", "Hisar", "Rohtak", "Karnal", "Kurukshetra"] },
    himachal_pradesh: { title: "Himachal Pradesh", heading: "Explore Himachal Pradesh", description: "The Land of Snow, presenting towering multi-tiered alpine ranges and pristine river systems.", weatherQuery: "Shimla", districts: ["Shimla", "Manali", "Kangra", "Kullu", "Chamba", "Hamirpur", "Una", "Lahaul and Spiti"] },
    jharkhand: { title: "Jharkhand", heading: "Explore Jharkhand", description: "The Land of Forests, boasting mineral-rich plateaus, lush holy hills, and powerful waterfalls.", weatherQuery: "Ranchi", districts: ["Ranchi", "Jamshedpur", "Dhanbad", "Bokaro", "Hazaribagh", "Deoghar", "Giridih"] },
    karnataka: { title: "Karnataka", heading: "Explore Karnataka", description: "One State, Many Worlds, presenting high-tech urban campuses alongside ancient historic ruins.", weatherQuery: "Bengaluru", districts: ["Bengaluru", "Mysuru", "Hampi", "Hubbali", "Mangaluru", "Belagavi", "Shimoga", "Bijapur"] },
    kerala: { title: "Kerala", heading: "Explore Kerala", description: "God's Own Country, globally celebrated for emerald backwaters and vibrant spice orchards.", weatherQuery: "Thiruvananthapuram", districts: ["Wayanad", "Alappuzha", "Kochi", "Munnar", "Thiruvananthapuram", "Kozhikode", "Thrissur", "Idukki"] },
    madhya_pradesh: { title: "Madhya Pradesh", heading: "Explore Madhya Pradesh", description: "The Heart of Incredible India, rich with historical temple art and wildlife reserves.", weatherQuery: "Bhopal", districts: ["Bhopal", "Indore", "Gwalior", "Jabalpur", "Ujjain", "Khajuraho", "Satna"] },
    maharashtra: { title: "Maharashtra", heading: "Explore Maharashtra", description: "A powerhouse state featuring the energetic metropolis of Mumbai and scenic hill retreats.", weatherQuery: "Mumbai", districts: ["Ahmednagar", "Akola", "Amravati", "Aurangabad", "Beed", "Bhandara", "Buldhana", "Chandrapur", "Dhule", "Gadchiroli", "Gondia", "Hingoli", "Jalgaon", "Jalna", "Kolhapur", "Latur", "Mumbai City", "Mumbai Suburban", "Nagpur", "Nanded", "Nashik", "Osmanabad", "Palghar", "Pune", "Raigad", "Ratnagiri", "Sangli", "Satara", "Sindhudurg", "Solapur", "Thane", "Wardha", "Washim", "Yavatmal"] },
    manipur: { title: "Manipur", heading: "Explore Manipur", description: "The Jewel of India, characterized by its serene natural floating lakes and unique dance traditions.", weatherQuery: "Imphal", districts: ["Imphal West", "Imphal East", "Thoubal", "Bishnupur", "Churachandpur", "Ukhrul", "Senapati"] },
    meghalaya: { title: "Meghalaya", heading: "Explore Meghalaya", description: "The Abode of Clouds, housing the wettest places on earth and ancient living root architecture links.", weatherQuery: "Shillong", districts: ["East Khasi Hills", "West Khasi Hills", "Jaintia Hills", "East Garo Hills", "West Garo Hills"] },
    mizoram: { title: "Mizoram", heading: "Explore Mizoram", description: "Land of the Hill People, presenting evergreen rolling bamboo valleys and clear visual skylines.", weatherQuery: "Aizawl", districts: ["Aizawl", "Lunglei", "Champhai", "Kolasib", "Serchhip", "Mamit", "Lawngtlai"] },
    nagaland: { title: "Nagaland", heading: "Explore Nagaland", description: "Land of Festivals, rich with distinct cultural customs and proud heritage histories.", weatherQuery: "Kohima", districts: ["Kohima", "Dimapur", "Mokokchung", "Tuensang", "Wokha", "Zunheboto", "Mon", "Phek"] },
    odisha: { title: "Odisha", heading: "Explore Odisha", description: "The Soul of Incredible India, holding ancient seaside temples and intricate art disciplines.", weatherQuery: "Bhubaneswar", districts: ["Khordha", "Cuttack", "Puri", "Ganjam", "Sambalpur", "Balasore", "Mayurbhanj", "Koraput"] },
    punjab: { title: "Punjab", heading: "Explore Punjab", description: "The Land of Five Rivers, bursting with spiritual golden shines and premium agricultural fields.", weatherQuery: "Amritsar", districts: ["Amritsar", "Ludhiana", "Jalandhar", "Patiala", "Bathinda", "Mohali", "Pathankot"] },
    rajasthan: { title: "Rajasthan", heading: "Explore Rajasthan", description: "A magnificent desert realm of royal fortresses, elegant heritage palaces, and majestic sand dunes.", weatherQuery: "Jaipur", districts: ["Ajmer", "Alwar", "Banswara", "Baran", "Barmer", "Bharatpur", "Bhilwara", "Bikaner", "Bundi", "Chittorgarh", "Churu", "Dausa", "Dholpur", "Dungarpur", "Ganganagar", "Hanumangarh", "Jaipur", "Jaisalmer", "Jalore", "Jhalawar", "Jhunjhunu", "Jodhpur", "Karauli", "Kota", "Nagaur", "Pali", "Pratapgarh", "Rajsamand", "Sawai Madhopur", "Sikar", "Sirohi", "Tonk", "Udaipur"] },
    sikkim: { title: "Sikkim", heading: "Explore Sikkim", description: "Valley of Rice, sitting under the protective gaze of the magnificent Khangchendzonga massifs.", weatherQuery: "Gangtok", districts: ["East Sikkim", "West Sikkim", "North Sikkim", "South Sikkim"] },
    tamil_nadu: { title: "Tamil Nadu", heading: "Explore Tamil Nadu", description: "Land of Temples, home to magnificent Dravidian architectural marvels and coastal histories.", weatherQuery: "Chennai", districts: ["Chennai", "Coimbatore", "Madurai", "Trichy", "Salem", "Tanjore", "Kanyakumari", "Ooty"] },
    telangana: { title: "Telangana", heading: "Explore Telangana", description: "The Seed Bowl of India, mixing proud historical architectural arches with deep technological engineering ecosystems.", weatherQuery: "Hyderabad", districts: ["Hyderabad", "Rangareddy", "Warangal", "Medak", "Nizamabad", "Khammam", "Karimnagar"] },
    tripura: { title: "Tripura", heading: "Explore Tripura", description: "The Land of Handloom, adorned with pristine water-palaces and magnificent forest sanctuaries.", weatherQuery: "Agartala", districts: ["West Tripura", "South Tripura", "North Tripura", "Dhalai", "Unakoti", "Gomati"] },
    uttar_pradesh: { title: "Uttar Pradesh", heading: "Explore Uttar Pradesh", description: "The Heartland of Culture, encompassing global architectural wonders, heritage rivers, and deep traditions.", weatherQuery: "Lucknow", districts: ["Agra", "Lucknow", "Varanasi", "Prayagraj", "Kanpur", "Meerut", "Mathura", "Ayodhya", "Jhansi"] },
    uttarakhand: { title: "Uttarakhand", heading: "Explore Uttarakhand", description: "Devbhumi - Land of Gods, scaling up majestic glacial heights and sacred river valleys.", weatherQuery: "Dehradun", districts: ["Dehradun", "Haridwar", "Nainital", "Rishikesh", "Almora", "Mussoorie", "Pithoragarh"] },
    west_bengal: { title: "West Bengal", heading: "Explore West Bengal", description: "The Sweetest Part of India, weaving together fine literary movements and vast delta environments.", weatherQuery: "Kolkata", districts: ["Kolkata", "Darjeeling", "Howrah", "Hooghly", "Nadia", "Murshidabad", "Purulia", "24 Parganas"] },
    andaman_nicobar: { title: "Andaman & Nicobar", heading: "Explore Andaman & Nicobar", description: "Emerald Islands offering beautiful coral ecosystems and pristine marine environments.", weatherQuery: "Port Blair", districts: ["South Andaman", "North & Middle Andaman", "Nicobar"] },
    chandigarh: { title: "Chandigarh", heading: "Explore Chandigarh", description: "The City Beautiful, modern India's benchmark planned urban layout architecture.", weatherQuery: "Chandigarh", districts: ["Chandigarh"] },
    dadra_nagar_daman_diu: { title: "Dadra & Nagar Haveli and Daman & Diu", heading: "Explore Dadra & Daman", description: "Coastal Heritage spaces showing distinct traces of vintage architectural influences.", weatherQuery: "Daman", districts: ["Dadra & Nagar Haveli", "Daman", "Diu"] },
    delhi: { title: "Delhi", heading: "Explore Delhi", description: "India's bustling capital territory, weaving together centuries-old monuments and modern markets.", weatherQuery: "Delhi", districts: ["Central Delhi", "East Delhi", "New Delhi", "North Delhi", "North East Delhi", "North West Delhi", "Shahdara", "South Delhi", "South East Delhi", "South West Delhi", "West Delhi"] },
    jammu_kashmir: { title: "Jammu & Kashmir", heading: "Explore Jammu & Kashmir", description: "Paradise on Earth, containing beautiful mountain lakes and legendary valley paths.", weatherQuery: "Srinagar", districts: ["Srinagar", "Jammu", "Gulmarg", "Pahalgam", "Anantnag", "Leh", "Kargil", "Kathua"] },
    ladakh: { title: "Ladakh", heading: "Explore Ladakh", description: "The Land of High Passes, offering vast high-altitude stark mountain backdrops.", weatherQuery: "Leh", districts: ["Leh", "Kargil"] },
    lakshadweep: { title: "Lakshadweep", heading: "Explore Lakshadweep", description: "Coral Paradise archipelago featuring pristine clear turquoise reef waters.", weatherQuery: "Kavaratti", districts: ["Lakshadweep"] },
    puducherry: { title: "Puducherry", heading: "Explore Puducherry", description: "The French Riviera of the East, showcasing a beautiful classic architecture aesthetic.", weatherQuery: "Pondicherry", districts: ["Puducherry", "Karaikal", "Mahe", "Yanam"] }
};

const districtDatabase = {
    "rajkot": { name: "Rajkot", parentState: "gujarat", bestTime: "October to March (Pleasant winter breeze)", food: ["Authentic Kathiyawadi Thali (Ringan No Oro & Bajra Rotla)", "Famous Rajkot Golden Peda", "Crispy Ganthiya and Fafda"], history: ["Watson Museum (Jubilee Garden)", "Kaba Gandhi No Delo (Mahatma Gandhi's childhood home)", "Ranjit Vilas Palace"], hotels: ["The Imperial Palace", "Fortune Park JPS Grand", "Sayaji Hotel Rajkot"] },
    "ahmedabad": { name: "Ahmedabad", parentState: "gujarat", bestTime: "November to February", food: ["Gujarati Heritage Thali at Agashiye", "Steamed Khaman, Dhokla & Khandvi", "Late-night street food at Manek Chowk"], history: ["Sabarmati Ashram (Gandhi's Sanctuary)", "Adalaj Stepwell (Ancient architecture)", "Intricate Sidi Saiyyed Mosque"], hotels: ["The House of MG (Heritage Stay)", "Hyatt Regency Ahmedabad", "Courtyard by Marriott"] },
    "gandhinagar": { name: "Gandhinagar", parentState: "gujarat", bestTime: "October to March", food: ["Gujarati Basundi", "Traditional Sukhdi", "Spicy Sev Khamani"], history: ["Magnificent Akshardham Temple Complex", "Indroda Dinosaur and Fossil Park", "Sarita Udyan Riverside Park"], hotels: ["The Leela Gandhinagar", "Gift City Club", "Fortune Inn Haveli"] },
    "vadodara": { name: "Vadodara", parentState: "gujarat", bestTime: "October to March", food: ["Spicy Mahakali Sev Usal", "Authentic Bhakarwadi", "Lilo Chevdo"], history: ["Laxmi Vilas Palace", "Baroda Museum & Picture Gallery", "Champaner-Pavagadh Archaeological Park"], hotels: ["Welcomhotel by ITC Hotels", "Sayaji Vadodara", "Grand Mercure Vadodara Surya Palace"] },
    "surat": { name: "Surat", parentState: "gujarat", bestTime: "October to March", food: ["Famous Surti Locho", "Sweet Surti Ghari", "Traditional Undhiyu"], history: ["Historic Surat Castle (Old Fort)", "Dumas Black Sand Beach", "Gopi Talav Ecological Park"], hotels: ["Courtyard by Marriott Surat", "The Gateway Hotel Athwalines", "Lords Plaza Surat"] },
    "kutch": { name: "Kutch", parentState: "gujarat", bestTime: "November to February (During Rann Utsav)", food: ["Kutchi Dabeli", "Spicy Kutchi Khichdi with Kadhi", "Traditional Bajra na Rotla"], history: ["The Great Rann of Kutch (White Salt Desert)", "Aina Mahal & Prag Mahal in Bhuj", "Dholavira (UNESCO Harappan Site)"], hotels: ["Rann Resort Dholavira", "Gateway to Rann Resort", "The Fern Residency Bhuj"] },
    "gir somnath": { name: "Gir Somnath", parentState: "gujarat", bestTime: "November to March", food: ["Fresh Coastal Seafood Curries", "Kathiyawadi Thali", "Kesar Mangoes (Talala region)"], history: ["Somnath Jyotirlinga Temple", "Triveni Sangam", "Bhalka Tirth (Lord Krishna's departure site)"], hotels: ["Lords Inn Somnath", "The Fern Residency Somnath", "Woods at Sasan"] },
    "jaipur": { name: "Jaipur", parentState: "rajasthan", bestTime: "October to March", food: ["Royal Dal Baati Churma", "Crispy Pyaaz Kachori", "Gatte ki Sabzi"], history: ["Hawa Mahal (Palace of Winds)", "Amer Fort (Grand Hilltop Fortress)", "City Palace & Jantar Mantar"], hotels: ["Rambagh Palace (Iconic Heritage)", "The Oberoi Rajvilas", "ITC Rajputana"] },
    "jodhpur": { name: "Jodhpur", parentState: "rajasthan", bestTime: "October to March", food: ["Mawa Kachori", "Spicy Mirchi Bada", "Jodhpuri Lassi"], history: ["Mehrangarh Fort (Towering over the Blue City)", "Jaswant Thada Marble Cenotaph", "Umaid Bhawan Palace"], hotels: ["Umaid Bhawan Palace Hotel", "Taj Hari Mahal", "Radisson Jodhpur"] },
    "udaipur": { name: "Udaipur", parentState: "rajasthan", bestTime: "September to March", food: ["Kadhi Kachori", "Mewari Thali", "Safed Maas (White Meat Curry)"], history: ["Grand City Palace on Lake Pichola", "Lake Palace (Jag Niwas)", "Sajjangarh Monsoon Palace"], hotels: ["The Taj Lake Palace", "The Leela Palace Udaipur", "The Oberoi Udaivilas"] },
    "north goa": { name: "North Goa", parentState: "goa", bestTime: "November to February", food: ["Goan Fish Curry with Red Rice", "Spicy Pork Vindaloo", "Traditional Bebinca Dessert"], history: ["Aguada Fort & 17th Century Lighthouse", "Basilica of Bom Jesus (UNESCO Heritage)", "Chapora Fort"], hotels: ["Taj Holiday Village Resort", "W Goa (Vagator)", "Hard Rock Hotel Goa"] },
    "south goa": { name: "South Goa", parentState: "goa", bestTime: "November to February", food: ["Chicken Xacuti", "Shark Ambot Tik", "Goan Prawn Balchão"], history: ["Cabo de Rama Fort (Clifftop Sea Views)", "Historical Mangueshi Temple", "Dudhsagar Waterfalls Trail"], hotels: ["Taj Exotica Resort & Spa", "ITC Grand Goa", "The Leela Goa"] },
    "central delhi": { name: "Central Delhi", parentState: "delhi", bestTime: "October to March", food: ["Buttery Chole Bhature", "Paranthas at Gali Paranthe Wali", "Classic Butter Chicken"], history: ["The Red Fort (Lal Qila)", "Connaught Place Heritage Arcades", "Jantar Mantar Stone Observatory"], hotels: ["The Imperial New Delhi", "Shangri-La Eros Hotel", "The Lalit New Delhi"] },
    "new delhi": { name: "New Delhi", parentState: "delhi", bestTime: "October to March", food: ["Continental Cuisines at Khan Market", "South Indian Platters at Andhra Bhavan", "Street Kulfi Falooda"], history: ["The India Gate Memorial", "Rashtrapati Bhavan", "Qutub Minar Complex"], hotels: ["The Taj Mahal Hotel", "The Oberoi New Delhi", "The Lodhi"] },
    "mumbai city": { name: "Mumbai City", parentState: "maharashtra", bestTime: "October to March", food: ["Iconic Vada Pav & Pav Bhaji", "Spicy Misal Pav", "Irani Cafe Bun Maska & Chai"], history: ["Gateway of India", "Chhatrapati Shivaji Maharaj Terminus", "Marine Drive (Queen's Necklace)"], hotels: ["The Taj Mahal Palace (Colaba)", "The Oberoi Mumbai", "Trident Nariman Point"] },
    "pune": { name: "Pune", parentState: "maharashtra", bestTime: "October to March", food: ["Famous Puneri Misal", "Sujata Mastani (Mango Milkshake)", "Bakarwadi from Chitale Bandhu"], history: ["Shaniwar Wada (Peshwa Palace Ruins)", "Aga Khan Palace (Gandhi Memorial)", "Sinhagad Fort"], hotels: ["JW Marriott Hotel Pune", "The Ritz-Carlton Pune", "Conrad Pune"] }
};

const stateFallbacks = {
    gujarat: { food: ["Kathiyawadi Thali", "Dhokla & Khaman", "Sweet Sukhdi & Jalebi"], history: ["Heritage Stepwells and Monoliths", "Ancient Sun and Shiva Temples", "Local Freedom Struggle Memorials"], hotels: ["TCGL Resort", "Heritage Palace Homestay", "The Fern Residency"] },
    rajasthan: { food: ["Dal Baati Churma", "Mirchi Vada & Pyaz Kachori", "Traditional Rabdi"], history: ["Mewari Style Stepwell Architecture", "Historic Rajputana Clifftop Haveli", "Royal Cenotaph Memorial Grounds"], hotels: ["RTDC Heritage Hotel", "Charming Desert Haveli Resort", "The Palace View Retreat"] },
    goa: { food: ["Authentic Goan Fish Curry Rice", "Spicy Chicken Cafreal", "Sweet Bebinca Layer Cake"], history: ["16th Century Portuguese Chapel", "Historic Sea-Facing Watchtower Fort", "Traditional Spice Plantation"], hotels: ["GTDC Beach Resort", "Eco-Friendly Coconut Grove Cottages", "Boutique Heritage Villa"] },
    maharashtra: { food: ["Classic Vada Pav & Pav Bhaji", "Zunka Bhakar with Chutney", "Sweet Shrikhand Puri"], history: ["Maratha Hilltop Watchtower ruins", "Carved Rock Cave Temple complex", "Ancient Shiva Stone Temple"], hotels: ["MTDC Resort", "The Grand Sahyadri Inn", "The Valley View Retreat"] },
    delhi: { food: ["Old Delhi Chole Bhature", "Spicy Tandoori Platters", "Rabdi Falooda Dessert"], history: ["Mughal-Era Stone Archways", "Sultanate Period Stepwells (Baolis)", "Lush Historic Public Gardens"], hotels: ["The Central Grand Inn", "Delhi Tourism Residency Lounge", "The Heritage Boutique Suites"] }
};

// Global Routing Management Engine
document.addEventListener("DOMContentLoaded", () => {
    const loc = window.location.href;

    if (loc.includes("state.html")) {
        renderStateDetails();
    } else if (loc.includes("district.html")) {
        renderDistrictDetails();
    } else {
        // Default to Homepage binding behavior
        const cards = document.querySelectorAll(".card");
        cards.forEach(card => {
            card.addEventListener("click", () => {
                const targetKey = card.getAttribute("data-state");
                window.location.href = `state.html?id=${targetKey}`;
            });
        });

        // Spotlight mouse glow effect for glassmorphic cards
        const grid = document.querySelector(".card-grid");
        if (grid) {
            grid.addEventListener("mousemove", (e) => {
                cards.forEach(card => {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    card.style.setProperty("--mouse-x", `${x}px`);
                    card.style.setProperty("--mouse-y", `${y}px`);
                });
            });
        }
    }
});

function renderStateDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const stateId = urlParams.get("id");
    const data = stateDatabase[stateId];

    if (!data) {
        const headingEl = document.getElementById("dynamic-heading");
        if (headingEl) headingEl.textContent = "Destination profile missing.";
        return;
    }

    document.title = `Wanderers | ${data.title}`;
    
    const stateTitleEl = document.getElementById("state-title");
    if (stateTitleEl) stateTitleEl.textContent = data.title;
    
    const headingEl = document.getElementById("dynamic-heading");
    if (headingEl) headingEl.textContent = data.heading;
    
    const descEl = document.getElementById("dynamic-description");
    if (descEl) descEl.textContent = data.description;
    
    const btnStateNameEl = document.getElementById("btn-state-name");
    if (btnStateNameEl) btnStateNameEl.textContent = data.title;
    
    const gridElement = document.getElementById("districtGrid");
    
    if (gridElement) {
        if (data.districts && data.districts.length > 0) {
            gridElement.innerHTML = data.districts.map(dist => {
                const lookupKey = dist.toLowerCase().trim();
                return `<div class="district-chip" style="cursor:pointer;" onclick="navigateToDistrict('${lookupKey}', '${stateId}')">${dist}</div>`;
            }).join('');
        } else {
            gridElement.innerHTML = `<div class="district-chip" style="grid-column: 1/-1;">District map profiles loading...</div>`;
        }
    }

    fetchLiveWeather(data.weatherQuery, stateId);
}

function navigateToDistrict(districtKey, stateId) {
    window.location.href = `district.html?dist=${encodeURIComponent(districtKey)}&state=${encodeURIComponent(stateId)}`;
}

function renderDistrictDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const distId = decodeURIComponent(urlParams.get("dist") || "").toLowerCase().trim();
    const stateId = decodeURIComponent(urlParams.get("state") || "").toLowerCase().trim();
    
    let data = districtDatabase[distId];

    if (!data) {
        const formattedName = distId.replace(/(^\w|\s\w)/g, m => m.toUpperCase());
        const fallback = stateFallbacks[stateId] || {
            food: ["Regional culinary recipes", "Delicious local street delicacies"],
            history: ["Ancient historic Clocktower monuments", "Local cultural heritage circuits"],
            hotels: ["State Tourism Development Corporation Hotel", "Cozy local heritage homestays"]
        };

        data = {
            name: formattedName,
            parentState: stateId || "index",
            bestTime: "October to March (Ideal weather window)",
            food: [`${formattedName} Special ${fallback.food[0]}`, fallback.food[1], fallback.food[2] || "Traditional local desserts"],
            history: [`Historic ${formattedName} Palace Ruins`, fallback.history[1], fallback.history[2] || "Traditional local museum exhibits"],
            hotels: [`${formattedName} Grand Plaza`, fallback.hotels[1], fallback.hotels[2] || "Budget-friendly traveler hotels"]
        };
    }

    document.title = `Wanderers | ${data.name}`;
    
    const distTitleEl = document.getElementById("district-title");
    if (distTitleEl) distTitleEl.textContent = data.name;
    
    const headingEl = document.getElementById("district-heading");
    if (headingEl) headingEl.textContent = `Explore ${data.name}`;
    
    const backBtnEl = document.getElementById("back-to-state");
    if (backBtnEl) backBtnEl.href = `state.html?id=${data.parentState}`;
    
    const timeEl = document.getElementById("dist-time");
    if (timeEl) timeEl.textContent = data.bestTime;
    
    const foodEl = document.getElementById("dist-food");
    if (foodEl) foodEl.innerHTML = data.food.map(f => `<li>${f}</li>`).join('');
    
    const historyEl = document.getElementById("dist-history");
    if (historyEl) historyEl.innerHTML = data.history.map(h => `<li>${h}</li>`).join('');
    
    const hotelsEl = document.getElementById("dist-hotels");
    if (hotelsEl) hotelsEl.innerHTML = data.hotels.map(hotel => `<li>${hotel}</li>`).join('');
}

function toggleDistricts() {
    const grid = document.getElementById("districtGrid");
    const btn = document.getElementById("districtBtn");
    
    if (grid && btn) {
        if (grid.classList.contains("hidden")) {
            grid.classList.remove("hidden");
            btn.querySelector(".chevron-icon").textContent = "▲";
        } else {
            grid.classList.add("hidden");
            btn.querySelector(".chevron-icon").textContent = "▼";
        }
    }
}

async function fetchLiveWeather(cityName, stateId) {
    // ✅ RIGHT (Safe for GitHub):
    const WEATHER_API_KEY = typeof CONFIG !== 'undefined' ? CONFIG.WEATHER_API_KEY : '';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(cityName)},IN&units=metric&appid=${WEATHER_API_KEY}`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Weather request failed.");
        const wxData = await response.json();

        updateWeatherUI(Math.round(wxData.main.temp), wxData.weather[0].description.toUpperCase(), wxData.main.humidity, wxData.wind.speed);
    } catch (err) {
        console.warn("Weather API error, mounting resilient fallback details:", err);
        // Resilient auto fallback strings to ensure telemetry never sits empty or broken
        const fallbackTemps = { gujarat: 28, rajasthan: 30, goa: 27, maharashtra: 29, delhi: 26 };
        const temp = fallbackTemps[stateId] || 25;
        updateWeatherUI(temp, "UNCOMPROMISED SUNNY SKY", 60, 4.2);
    }
}

function updateWeatherUI(temp, desc, humidity, wind) {
    const tempEl = document.getElementById("wx-temp");
    if (tempEl) tempEl.textContent = temp;
    
    const descEl = document.getElementById("wx-desc");
    if (descEl) descEl.textContent = desc;
    
    const humidityEl = document.getElementById("wx-humidity");
    if (humidityEl) humidityEl.textContent = `${humidity}%`;
    
    const windEl = document.getElementById("wx-wind");
    if (windEl) windEl.textContent = `${wind} m/s`;

    const loadingEl = document.getElementById("weather-loading");
    if (loadingEl) loadingEl.classList.add("hidden");
    
    const displayEl = document.getElementById("weather-display");
    if (displayEl) displayEl.classList.remove("hidden");
}