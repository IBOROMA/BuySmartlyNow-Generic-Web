// --- 1. MOCK DATA ---
const products = [
    {
        id: 1,
        name: "Sony WH-1000XM5 Headphones",
        category: "Gadgets",
        image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80&w=400",
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
        image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=400",
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
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&q=80&w=400",
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
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=400",
        description: "Get 50% off large pizzas with this exclusive code.",
        retailers: [
            { name: "Domino's", price: "₦4,500", url: "/go/dominos/deal", color: "bg-blue-800 text-white" }
        ]
    },
    // New Mock Data
    {
        id: 6,
        name: "MacBook Air M2",
        category: "Gadgets",
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca4?auto=format&fit=crop&q=80&w=400",
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
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=400",
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
        image: "https://images.unsplash.com/photo-1512453979798-5ea904ac66de?auto=format&fit=crop&q=80&w=400",
        description: "5 Nights at Atlantis The Palm + Flight + Visa.",
        retailers: [
            { name: "Wakanow", price: "₦2,500,000", url: "/go/wakanow/dubai", color: "bg-blue-600 text-white" }
        ]
    },
    {
        id: 9,
        name: "Canon EOS R50",
        category: "Gadgets",
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=400",
        description: "Compact mirrorless camera for content creators.",
        retailers: [
            { name: "Amazon", price: "$679", url: "/go/amazon/canon", color: "bg-gray-800 text-white" },
            { name: "Konga", price: "₦850,000", url: "/go/konga/canon", color: "bg-pink-600 text-white" }
        ]
    },
    {
        id: 4,
        name: "Flights to London (Round Trip)",
        category: "Travel",
        image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=600",
        description: "Best rates for summer 2025. Direct flights from Lagos.",
        retailers: [
            { name: "TravelStart", price: "N1,150,000", url: "https://www.travelstart.com.ng", color: "bg-purple-600 text-white" },
            { name: "Wakanow", price: "N1,200,000", url: "https://www.wakanow.com", color: "bg-blue-600 text-white" }
        ]
    },
    {
        id: 5,
        name: "Dubai Holiday Package (5 Nights)",
        category: "Travel",
        image: "https://images.unsplash.com/photo-1546412414-e1885259563a?auto=format&fit=crop&q=80&w=600",
        description: "All-inclusive stay at Atlantis The Palm + Visa.",
        retailers: [
            { name: "Wakanow", price: "N2,500,000", url: "#", color: "bg-blue-600 text-white" },
            { name: "TravelStart", price: "N2,650,000", url: "#", color: "bg-purple-600 text-white" }
        ]
    },
    {
        id: 6,
        name: "Sony WH-1000XM5",
        category: "Gadgets",
        image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80&w=600",
        description: "Industry-leading noise canceling with 30-hour battery life.",
        retailers: [
            { name: "Amazon", price: "$348", url: "#", color: "bg-gray-900 text-white" },
            { name: "Jumia", price: "N450,000", url: "#", color: "bg-orange-500 text-white" },
            { name: "Slot", price: "N480,000", url: "#", color: "bg-red-600 text-white" }
        ]
    },
    {
        id: 7,
        name: "MacBook Pro M3",
        category: "Gadgets",
        image: "https://images.unsplash.com/photo-1531297461136-82lw8e826359?auto=format&fit=crop&q=80&w=600",
        description: "Must-have for power users.",
        retailers: [
            { name: "Amazon", price: "$1,599", url: "#", color: "bg-gray-900 text-white" },
            { name: "Slot", price: "N2,800,000", url: "#", color: "bg-red-600 text-white" }
        ]
    },
    {
        id: 8,
        name: "Samsung S24 Ultra",
        category: "Gadgets",
        image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&q=80&w=600",
        description: "Zoom into the future.",
        retailers: [
            { name: "Jumia", price: "N1,900,000", url: "#", color: "bg-orange-500 text-white" },
            { name: "Slot", price: "N2,100,000", url: "#", color: "bg-red-600 text-white" }
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
    const card = document.createElement('div');
    // Minimal Card Style: White bg, subtle shadow, rounded corners
    card.className = "group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col h-full";

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
        <div class="relative overflow-hidden h-64 bg-gray-50">
             <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover transition duration-700 group-hover:scale-105">
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
    ['home-section', 'deals-section', 'auth-section', 'dashboard-section', 'contact-section'].forEach(id => {
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
    if (sectionName === 'contact') document.getElementById('contact-section')?.classList.remove('hidden');

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
    // Simple UI update to show logged in state
    const desktopAuthContainer = document.querySelector('.hidden.md\\:flex.items-center.gap-4');
    if (desktopAuthContainer) {
        desktopAuthContainer.innerHTML = `
            <div class="flex items-center gap-3">
                <div class="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold border border-blue-200">
                    ${name.charAt(0)}
                </div>
                <span class="font-bold text-gray-700">${name}</span>
            </div>
        `;
    }
}

// Ensure functions are global
window.openModal = openModal;
window.closeAllModals = closeAllModals;
window.switchAuthTab = switchAuthTab;

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
