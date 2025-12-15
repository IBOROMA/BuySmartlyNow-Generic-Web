const products = [
    {
        id: 1,
        name: "Sony WH-1000XM5 Headphones",
        category: "Gadgets",
        image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80&w=600",
        description: "Industry-leading noise canceling with 30-hour battery life.",
        retailers: [
            { name: "Amazon", price: "$348", url: "/go/amazon/sony-xm5", color: "bg-gray-800 text-white" },
            { name: "Jumia", price: "₦450,000", url: "/go/jumia/sony-xm5", color: "bg-orange-500 text-white" }
        ]
    },
    {
        id: 2,
        name: "Flights to London (Round Trip)",
        category: "Travel",
        image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=600",
        description: "Best rates for summer 2025. Direct flights from Lagos.",
        retailers: [
            { name: "Wakanow", price: "₦1,200,000", url: "/go/wakanow/london", color: "bg-blue-600 text-white" },
            { name: "TravelStart", price: "₦1,150,000", url: "/go/travelstart/london", color: "bg-purple-600 text-white" }
        ]
    },
    {
        id: 3,
        name: "iPhone 15 Pro Max",
        category: "Gadgets",
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&q=80&w=600",
        description: "Titanium design, A17 Pro chip, 48MP Main Camera.",
        retailers: [
            { name: "Amazon", price: "$1,199", url: "/go/amazon/iphone15", color: "bg-gray-800 text-white" },
            { name: "Slot", price: "₦1,800,000", url: "/go/slot/iphone15", color: "bg-red-600 text-white" }
        ]
    },
    {
        id: 4,
        name: "Domino's Pizza Voucher",
        category: "Food",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=600",
        description: "Get 50% off large pizzas with this exclusive code.",
        retailers: [
            { name: "Domino's", price: "₦4,500", url: "/go/dominos/deal", color: "bg-blue-800 text-white" }
        ]
    },
    {
        id: 6,
        name: "MacBook Air M2",
        category: "Gadgets",
        image: "https://images.unsplash.com/photo-1661961110218-35688a456c3e?auto=format&fit=crop&q=80&w=600",
        description: "Supercharged by M2. 18 hours battery life. Stunning Liquid Retina display.",
        retailers: [
            { name: "Amazon", price: "$999", url: "/go/amazon/macbook", color: "bg-gray-800 text-white" },
            { name: "Jumia", price: "₦1,300,000", url: "/go/jumia/macbook", color: "bg-orange-500 text-white" }
        ]
    },
    {
        id: 7,
        name: "Nike Air Jordan 1",
        category: "Fashion",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=600",
        description: "Classic high-top sneakers. Iconic style for everyday wear.",
        retailers: [
            { name: "Nike", price: "$180", url: "/go/nike/jordan", color: "bg-black text-white" },
            { name: "Jumia", price: "₦45,000", url: "/go/jumia/jordan", color: "bg-orange-500 text-white" }
        ]
    },
    {
        id: 8,
        name: "Dubai Vacation Package",
        category: "Travel",
        image: "https://images.unsplash.com/photo-1546412414-e1885259563a?auto=format&fit=crop&q=80&w=600",
        description: "5 Nights at Atlantis The Palm + Flight + Visa.",
        retailers: [
            { name: "Wakanow", price: "₦2,500,000", url: "/go/wakanow/dubai", color: "bg-blue-600 text-white" }
        ]
    },
    {
        id: 9,
        name: "Canon EOS R50",
        category: "Gadgets",
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=600",
        description: "Compact mirrorless camera for content creators.",
        retailers: [
            { name: "Amazon", price: "$679", url: "/go/amazon/canon", color: "bg-gray-800 text-white" },
            { name: "Konga", price: "₦850,000", url: "/go/konga/canon", color: "bg-pink-600 text-white" }
        ]
    },
    {
        id: 10,
        name: "Sony Play Station 5",
        category: "Gadgets",
        image: "https://images.unsplash.com/photo-1606144042614-b441db3ce5a7?auto=format&fit=crop&q=80&w=600",
        description: "Experience lightning-fast loading and deeper immersion.",
        retailers: [
            { name: "Amazon", price: "$499", url: "/go/amazon/ps5", color: "bg-gray-900 text-white" },
            { name: "Jumia", price: "₦650,000", url: "/go/jumia/ps5", color: "bg-orange-500 text-white" }
        ]
    }
];

// --- 2. RENDER LOGIC ---
function renderProducts(filter = null, type = 'category') {
    const grid = document.getElementById('product-grid');
    const featuredGrid = document.getElementById('featured-grid');
    const dealsTitle = document.getElementById('deals-title');

    let filtered = products;

    if (filter) {
        if (type === 'category') {
            filtered = products.filter(p => p.category === filter);
            if (dealsTitle) dealsTitle.innerText = `${filter} Deals`;
        } else if (type === 'search') {
            const query = filter.toLowerCase();
            filtered = products.filter(p =>
                p.name.toLowerCase().includes(query) ||
                p.description.toLowerCase().includes(query) ||
                p.category.toLowerCase().includes(query)
            );
            if (dealsTitle) dealsTitle.innerText = `Search Results for "${filter}"`;
        }
    } else {
        if (dealsTitle) dealsTitle.innerText = "All Deals";
    }

    // Render Main Grid (Deals Page)
    if (grid) {
        grid.innerHTML = '';
        if (filtered.length === 0) {
            grid.innerHTML = `
                <div class="col-span-full text-center py-12">
                    <p class="text-xl text-gray-500 mb-4">No products found matching your criteria.</p>
                    <button onclick="renderProducts()" class="text-primary font-bold hover:underline">View All Deals</button>
                </div>`;
        } else {
            filtered.forEach(product => grid.appendChild(createProductCard(product)));
        }
    }

    // Render Featured Grid (Home Page - Top 8)
    if (featuredGrid && !filter) {
        featuredGrid.innerHTML = '';
        // Show 8 items for the new expanded grid layout
        products.slice(0, 8).forEach(product => featuredGrid.appendChild(createProductCard(product)));
    }
}

function handleSearch(e) {
    if (e.key === 'Enter' || e.type === 'click') {
        const query = document.getElementById('hero-search').value;
        if (query.trim()) {
            showSection('deals');
            renderProducts(query, 'search');
            // Update URL hash for "state"
            window.location.hash = `search=${encodeURIComponent(query)}`;
        }
    }
}

function createProductCard(product) {
    // Minimal Card Style: White bg, subtle shadow, rounded corners + Hover Effect
    card.className = "group bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col h-full transform hover:-translate-y-2";

    // 1. Sort Retailers by Price
    const sortedRetailers = [...product.retailers].sort((a, b) => {
        const priceA = parseInt(a.price.replace(/[^0-9]/g, ''));
        const priceB = parseInt(b.price.replace(/[^0-9]/g, ''));
        return priceA - priceB;
    });

    let retailersHtml = '';
    sortedRetailers.forEach((retailer, index) => {
        const isBestPrice = index === 0;
        // Material U Style Button: Full width, pill shape, bold color
        retailersHtml += `
            <a href="${retailer.url}" target="_blank" rel="noopener noreferrer" onclick="trackClick(event)" 
               class="flex justify-between items-center w-full px-6 py-3 rounded-xl text-sm font-bold mb-3 transition transform hover:scale-[1.02] active:scale-95 shadow-sm hover:shadow-md ${retailer.color} ${isBestPrice ? 'ring-2 ring-offset-2 ring-blue-500' : ''}">
                <div class="flex flex-col items-start leading-tight">
                    <span class="opacity-90">Buy on</span>
                    <span class="text-lg">${retailer.name}</span>
                </div>
                <div class="flex flex-col items-end text-right">
                    ${isBestPrice ? '<span class="bg-white/20 text-white text-[10px] px-2 py-0.5 rounded-full mb-1 uppercase tracking-wider">Best Deal</span>' : ''}
                    <span class="text-lg font-extrabold">${retailer.price}</span>
                </div>
            </a>
        `;
    });

    card.innerHTML = `
        <div class="relative overflow-hidden h-64 bg-gray-50 group">
             <img src="${product.image}" loading="lazy" alt="${product.name}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
             <div class="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
             <!-- Category Pill -->
             <span class="absolute top-4 right-4 bg-white/95 backdrop-blur-sm text-gray-800 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                ${product.category}
             </span>
        </div>

        <div class="p-6 flex flex-col flex-grow">
            <!-- Minimal Title -->
            <h3 class="text-xl font-bold text-gray-900 mb-2 leading-tight group-hover:text-blue-600 transition">${product.name}</h3>
            <p class="text-sm text-gray-500 mb-6 flex-grow leading-relaxed">${product.description}</p>
            
            <div class="mt-auto border-t border-gray-100 pt-4">
                <p class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Compare Prices</p>
                <div class="flex flex-col">
                    ${retailersHtml}
                </div>
            </div>
        </div>
    `;
    return card;
}

function trackClick(e) {
    e.preventDefault(); // Prevent actual navigation for demo

    // Increment local clicks for fun
    let currentClicks = parseInt(document.getElementById('clicks').innerText) || 842;
    currentClicks++;
    document.getElementById('clicks').innerText = currentClicks;

    alert(`Redirecting via Cloaked Link: ${e.currentTarget.getAttribute('href')}\n\n(This counts as a click in your dashboard!)`);
}

// --- 3. NAVIGATION LOGIC ---
function showSection(sectionName) {
    // Hide all
    ['home-section', 'deals-section', 'flights-section', 'auth-section', 'dashboard-section', 'contact-section', 'travel-section'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.classList.add('hidden');
    });

    // Show selected
    if (sectionName === 'home') document.getElementById('home-section')?.classList.remove('hidden');
    if (sectionName === 'marketing') document.getElementById('home-section')?.classList.remove('hidden'); // Fallback
    if (sectionName === 'deals') {
        document.getElementById('deals-section')?.classList.remove('hidden');
        const titleEl = document.getElementById('deals-title');
        if (titleEl) titleEl.innerText = "All Deals";
        renderProducts();
    }
    if (sectionName === 'contact') document.getElementById('footer-contact')?.scrollIntoView({ behavior: 'smooth' });
    if (sectionName === 'flights') {
        showSection('travel');
        switchTravelTab('flights');
    }
    if (sectionName === 'travel') {
        document.getElementById('travel-section')?.classList.remove('hidden');
        // Default to Deals if not specified, but let's keep state? 
        // For now, default to deals unless flight requested
        if (!document.querySelector('#tab-travel-flights').classList.contains('text-primary')) {
            switchTravelTab('deals');
        }
        renderProducts('Travel', 'category'); // Ensure deals are rendered
    }

    // Auth Handling
    if (sectionName === 'auth') {
        const user = localStorage.getItem('bsn_user');
        if (user) {
            showSection('dashboard');
        } else {
            document.getElementById('auth-section')?.classList.remove('hidden');
        }
    }
    if (sectionName === 'dashboard') {
        updateDashboard();
        document.getElementById('dashboard-section')?.classList.remove('hidden');
    }

    // Scroll to top
    window.scrollTo(0, 0);

    // Update URL Hash without scrolling
    if (history.pushState) {
        history.pushState(null, null, '#' + sectionName);
    } else {
        window.location.hash = sectionName;
    }
}

function filterCategory(category) {
    showSection('deals');
    renderProducts(category, 'category');
}

// --- 4. AUTH & DASHBOARD LOGIC ---
// --- 4. AUTH & MODAL LOGIC ---

function openModal(modalId) {
    const overlay = document.getElementById('modal-overlay');
    const modal = document.getElementById(modalId);
    const content = document.getElementById(modalId + '-content');

    if (overlay && modal) {
        overlay.classList.remove('hidden');
        modal.classList.remove('hidden');

        // Staggered Animation
        setTimeout(() => {
            overlay.classList.remove('opacity-0');
            if (content) {
                content.classList.remove('scale-95', 'opacity-0');
                content.classList.add('scale-100', 'opacity-100');
            }
        }, 10);
    }
}

function closeAllModals() {
    const overlay = document.getElementById('modal-overlay');
    const modals = document.querySelectorAll('[id$="-modal"]'); // Select all modals

    overlay.classList.add('opacity-0');
    modals.forEach(modal => {
        const content = modal.querySelector('[id$="-content"]');
        if (content) {
            content.classList.remove('scale-100', 'opacity-100');
            content.classList.add('scale-95', 'opacity-0');
        }
    });

    setTimeout(() => {
        overlay.classList.add('hidden');
        modals.forEach(modal => modal.classList.add('hidden'));
    }, 300);
}

function switchAuthTab(tab) {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const tabLogin = document.getElementById('tab-login');
    const tabSignup = document.getElementById('tab-signup');
    const title = document.getElementById('auth-title');

    if (tab === 'login') {
        loginForm.classList.remove('hidden');
        signupForm.classList.add('hidden');

        tabLogin.classList.add('text-blue-600', 'border-blue-600');
        tabLogin.classList.remove('text-gray-500', 'border-transparent');

        tabSignup.classList.remove('text-blue-600', 'border-blue-600');
        tabSignup.classList.add('text-gray-500', 'border-transparent');

        title.innerText = "Welcome Back";
    } else {
        loginForm.classList.add('hidden');
        signupForm.classList.remove('hidden');

        tabSignup.classList.add('text-blue-600', 'border-blue-600');
        tabSignup.classList.remove('text-gray-500', 'border-transparent');

        tabLogin.classList.remove('text-blue-600', 'border-blue-600');
        tabLogin.classList.add('text-gray-500', 'border-transparent');

        title.innerText = "Create Account";
    }
}

// --- MOCK AUTH HANDLERS ---

function handleUserLogin(e) {
    e.preventDefault();
    closeAllModals();
    alert("User Logged In Successfully!");
    updateNavForUser("User");
}

function handleUserSignup(e) {
    e.preventDefault();
    const name = document.getElementById('signup-name').value;
    closeAllModals();
    alert(`Account Created! Welcome, ${name}. verifying phone number...`);
    updateNavForUser(name);
}

function mockGoogleLogin() {
    closeAllModals();
    alert("Connecting to Google Account...");
    setTimeout(() => {
        alert("Google Login Successful!");
        updateNavForUser("Google User");
    }, 1000);
}

function handlePartnerLogin(e) {
    e.preventDefault();
    closeAllModals();
    alert("Partner Dashboard Accessed.");
    // Redirect or show dashboard section
    showSection('dashboard');
}

function updateNavForUser(name) {
    const container = document.getElementById('desktop-auth-container');
    if (container) {
        container.innerHTML = `
            <div class="flex items-center gap-3">
                <div class="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold border border-blue-200">
                    ${name.charAt(0)}
                </div>
                <div class="flex flex-col">
                    <span class="font-bold text-gray-700 text-sm leading-tight">${name}</span>
                    <button onclick="handleLogout()" class="text-xs text-red-500 hover:underline text-left">Sign Out</button>
                </div>
            </div>
        `;
    }
}

// --- 5. TRAVEL & FLIGHT LOGIC ---
function switchTravelTab(tab) {
    const dealsTab = document.getElementById('tab-travel-deals');
    const flightsTab = document.getElementById('tab-travel-flights');
    const dealsContent = document.getElementById('travel-deals-tab');
    const flightContent = document.getElementById('flight-compare-tab');

    if (tab === 'deals') {
        dealsTab?.classList.add('bg-white', 'text-primary', 'shadow-sm');
        dealsTab?.classList.remove('text-gray-500', 'hover:text-gray-900');

        flightsTab?.classList.remove('bg-white', 'text-primary', 'shadow-sm');
        flightsTab?.classList.add('text-gray-500', 'hover:text-gray-900');

        dealsContent?.classList.remove('hidden');
        flightContent?.classList.add('hidden');

        // Render Travel Deals specifically into the travel grid
        const travelGrid = document.getElementById('travel-product-grid');
        if (travelGrid) {
            travelGrid.innerHTML = '';
            const travelProducts = products.filter(p => p.category === 'Travel');
            if (travelProducts.length > 0) {
                travelProducts.forEach(product => travelGrid.appendChild(createProductCard(product)));
            } else {
                travelGrid.innerHTML = '<p class="col-span-full text-center text-gray-500">No travel deals available right now.</p>';
            }
        }

    } else {
        flightsTab?.classList.add('bg-white', 'text-blue-600', 'shadow-sm');
        flightsTab?.classList.remove('text-gray-500', 'hover:text-gray-900');

        dealsTab?.classList.remove('bg-white', 'text-primary', 'shadow-sm');
        dealsTab?.classList.add('text-gray-500', 'hover:text-gray-900');

        flightContent?.classList.remove('hidden');
        dealsContent?.classList.add('hidden');
    }
}

function handleFlightSearch(e) {
    e.preventDefault();
    const origin = document.getElementById('flight-origin').value;
    const dest = document.getElementById('flight-dest').value;
    const resultsContainer = document.getElementById('flight-results');
    const btn = document.getElementById('search-flights-btn');

    if (!dest) {
        alert("Please enter a destination");
        return;
    }

    // Loading State
    btn.innerHTML = '<svg class="animate-spin h-5 w-5 text-white inline mr-2" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Searching...';

    setTimeout(() => {
        resultsContainer.classList.remove('hidden');
        resultsContainer.scrollIntoView({ behavior: 'smooth' });
        btn.innerHTML = 'Compare Flight Prices';

        // Mock Results
        const carriers = [
            { name: "Qatar Airways", price: "₦1,250,500", time: "6h 45m", stops: "Direct", logo: "https://logo.clearbit.com/qatarairways.com" },
            { name: "British Airways", price: "₦1,420,000", time: "7h 15m", stops: "Direct", logo: "https://logo.clearbit.com/britishairways.com" },
            { name: "Virgin Atlantic", price: "₦1,150,000", time: "7h 00m", stops: "Direct", logo: "https://logo.clearbit.com/virginatlantic.com" },
            { name: "Air Peace", price: "₦950,000", time: "6h 30m", stops: "Direct", logo: "https://logo.clearbit.com/flyairpeace.com" },
            { name: "Emirates", price: "₦1,550,000", time: "8h 30m", stops: "1 Stop", logo: "https://logo.clearbit.com/emirates.com" }
        ];

        let html = '';
        carriers.forEach(c => {
            html += `
                <div class="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4 hover:shadow-md transition">
                    <div class="flex items-center gap-4 w-full md:w-auto">
                        <img src="${c.logo}" alt="${c.name}" class="w-12 h-12 rounded-full object-contain bg-gray-50 p-1 border">
                        <div>
                            <h4 class="font-bold text-gray-900">${c.name}</h4>
                            <p class="text-xs text-gray-500">${origin.split('(')[0]} ➝ ${dest}</p>
                        </div>
                    </div>
                    
                    <div class="flex items-center gap-8 w-full md:w-auto justify-between md:justify-start">
                        <div class="text-center">
                            <p class="font-bold text-gray-900">${c.time}</p>
                            <p class="text-xs text-gray-400">${c.stops}</p>
                        </div>
                        <div class="text-right">
                            <p class="text-xl font-extrabold text-blue-600">${c.price}</p>
                            <button onclick="window.open('https://www.google.com/search?q=flight+${c.name.toLowerCase().replace(' ', '+')}+${dest}', '_blank')" class="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-black transition">Select</button>
                        </div>
                    </div>
                </div>
            `;
        });

        resultsContainer.innerHTML = html;

    }, 1500);
}

// Ensure functions are global
window.openModal = openModal;
window.closeAllModals = closeAllModals;
window.switchAuthTab = switchAuthTab;
window.switchTravelTab = switchTravelTab;
window.handleFlightSearch = handleFlightSearch;


// --- 5. INITIALIZE ---
window.addEventListener('DOMContentLoaded', () => {
    // Tailwind Config Injection
    // Tailwind Config Moved to index.html

    renderProducts(); // Pre-render deals in background

    // Check for logged in user
    const userStr = localStorage.getItem('bsn_user');
    if (userStr) {
        const user = JSON.parse(userStr);
        updateNavForUser(user.name);
    }

    // Handle Initial Hash
    const hash = window.location.hash.slice(1);
    if (hash) {
        if (['deals', 'contact', 'gadgets', 'food', 'delivery', 'travel'].includes(hash)) {
            if (['gadgets', 'food', 'delivery', 'travel'].includes(hash)) {
                // It's a category
                const category = hash.charAt(0).toUpperCase() + hash.slice(1);
                filterCategory(category);
            } else {
                showSection(hash);
            }
        }
    }
});

function handleLogout() {
    localStorage.removeItem('bsn_user');
    alert('Signed out successfully.');

    // Reset Nav
    const container = document.getElementById('desktop-auth-container');
    if (container) {
        container.innerHTML = `
            <button onclick="openModal('login-modal')" class="text-gray-600 font-bold hover:text-blue-600 transition">
                Login
            </button>
            <button onclick="openModal('affiliate-modal')" class="bg-blue-600 text-white px-5 py-2 rounded-full font-bold shadow-md hover:bg-blue-700 hover:shadow-lg transition transform hover:-translate-y-0.5">
                Affiliate Sign In
            </button>
        `;
    }
    showSection('home');
}

