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
                p.description.toLowerCase().includes(query)
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

    // Render Featured Grid (Home Page - Top 3) - Only if not searching/filtering
    if (featuredGrid && !filter) {
        featuredGrid.innerHTML = '';
        products.slice(0, 3).forEach(product => featuredGrid.appendChild(createProductCard(product)));
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
    card.className = "bg-white rounded-xl shadow-sm hover:shadow-lg transition border border-gray-100 overflow-hidden flex flex-col";

    // 1. Sort Retailers by Price (Generic Parser)
    // Remove symbols and sort
    const sortedRetailers = [...product.retailers].sort((a, b) => {
        const priceA = parseInt(a.price.replace(/[^0-9]/g, ''));
        const priceB = parseInt(b.price.replace(/[^0-9]/g, ''));
        return priceA - priceB;
    });

    let retailersHtml = '';
    sortedRetailers.forEach((retailer, index) => {
        const isBestPrice = index === 0;
        const badge = isBestPrice ? '<span class="ml-2 bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full font-bold">Best Price</span>' : '';
        const borderClass = isBestPrice ? 'border-2 border-green-500 ring-2 ring-green-100' : 'border border-gray-200';

        retailersHtml += `
            <a href="${retailer.url}" target="_blank" rel="noopener noreferrer" onclick="trackClick(event)" class="flex justify-between items-center w-full px-4 py-3 rounded-lg text-sm font-semibold mb-2 transition hover:opacity-90 ${retailer.color} ${isBestPrice ? 'order-first' : ''}">
                <div class="flex items-center">
                    <span>Buy on ${retailer.name}</span>
                    ${isBestPrice ? '<span class="ml-2 bg-white/20 text-white text-[10px] px-1.5 py-0.5 rounded uppercase tracking-wider">Best Deal</span>' : ''}
                </div>
                <span>${retailer.price}</span>
            </a>
        `;
    });

    card.innerHTML = `
        <div class="h-48 overflow-hidden relative group">
            <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover transition duration-500 group-hover:scale-105">
            <span class="absolute top-3 right-3 bg-white/90 backdrop-blur text-xs font-bold px-2 py-1 rounded-full text-gray-800">${product.category}</span>
        </div>
        <div class="p-5 flex flex-col flex-grow">
            <h3 class="font-bold text-lg text-gray-900 mb-2 leading-tight">${product.name}</h3>
            <p class="text-sm text-gray-500 mb-6 flex-grow">${product.description}</p>
            
            <div class="mt-auto">
                <p class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Compare Prices</p>
                <div class="flex flex-col gap-1">
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
function toggleAuth() {
    const user = localStorage.getItem('bsn_user');
    if (user) {
        showSection('dashboard');
    } else {
        showSection('auth');
    }
}

function handleSignup(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    const user = { name, email, joined: new Date().toISOString() };
    localStorage.setItem('bsn_user', JSON.stringify(user));

    alert('Registration Successful! Welcome to the Partner Program.');
    checkAuthState(); // Update navbar
    showSection('dashboard');
}

function handleLogout() {
    localStorage.removeItem('bsn_user');
    alert('Signed out successfully.');
    checkAuthState();
    showSection('home');
}

function checkAuthState() {
    const userStr = localStorage.getItem('bsn_user');
    const navBtn = document.getElementById('nav-auth-btn');
    const mobileBtn = document.getElementById('mobile-auth-btn');
    const userNameDisplay = document.getElementById('user-name');

    if (userStr) {
        const user = JSON.parse(userStr);
        if (navBtn) navBtn.innerText = "My Dashboard";
        if (mobileBtn) mobileBtn.innerText = "My Dashboard";
        if (userNameDisplay) userNameDisplay.innerText = user.name;
    } else {
        if (navBtn) navBtn.innerText = "Partner Sign In";
        if (mobileBtn) mobileBtn.innerText = "Partner Sign In";
    }
}

function updateDashboard() {
    // In a real app, fetch data from API. Here we rely on static + session clicks.
    const userStr = localStorage.getItem('bsn_user');
    if (userStr) {
        const user = JSON.parse(userStr);
        const userNameDisplay = document.getElementById('user-name');
        if (userNameDisplay) userNameDisplay.innerText = user.name;
    }
}

// --- 5. INITIALIZE ---
window.addEventListener('DOMContentLoaded', () => {
    // Tailwind Config Injection
    // Tailwind Config Moved to index.html

    renderProducts(); // Pre-render deals in background
    checkAuthState();

    // Handle Initial Hash
    const hash = window.location.hash.slice(1);
    if (hash) {
        // Handle explicit section loads
        if (['deals', 'contact', 'gadgets', 'food', 'delivery', 'travel'].includes(hash)) {
            if (['gadgets', 'food', 'delivery', 'travel'].includes(hash)) {
                // It's a category
                // Capitalize first letter
                const category = hash.charAt(0).toUpperCase() + hash.slice(1);
                filterCategory(category);
            } else {
                showSection(hash);
            }
        }
    }
});
