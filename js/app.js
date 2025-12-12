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

    // Render Featured Grid (Home Page - Top 4)
    if (featuredGrid && !filter) {
        featuredGrid.innerHTML = '';
        // Show 4 items for the new grid layout
        products.slice(0, 4).forEach(product => featuredGrid.appendChild(createProductCard(product)));
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
    card.className = "group bg-transparent"; // Removed default card styling to match clean look

    // 1. Sort Retailers by Price
    const sortedRetailers = [...product.retailers].sort((a, b) => {
        const priceA = parseInt(a.price.replace(/[^0-9]/g, ''));
        const priceB = parseInt(b.price.replace(/[^0-9]/g, ''));
        return priceA - priceB;
    });

    const bestPrice = sortedRetailers[0].price;
    const oldPrice = sortedRetailers[0].price.replace(/[^0-9]/g, '') * 1.2; // Mock old price

    // Retailer Logic (Hidden by default, shown on click/hover detail - Simplified for 'DNK' look to just show 'Shop' button or best price)
    // For this design, we'll keep it simple: Image -> Title -> Stars -> Price

    card.innerHTML = `
        <div class="relative overflow-hidden mb-4">
             <img src="${product.image}" alt="${product.name}" class="w-full h-[300px] object-cover transition duration-500 group-hover:scale-105">

             <!-- Sale Badge -->
             <div class="absolute top-4 left-4 bg-white rounded-full h-12 w-12 flex items-center justify-center shadow-md badge-sale">
                <span class="text-xs font-bold text-gray-900">Sale!</span>
             </div>

             <!-- Hover Actions -->
             <div class="absolute top-4 right-4 flex flex-col gap-2 translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition duration-300">
                <button class="bg-white p-2 rounded-full shadow-md hover:bg-black hover:text-white transition"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg></button>
             </div>
        </div>

        <div>
            <h3 class="text-lg font-bold text-gray-900 mb-1 leading-tight">${product.name}</h3>
            <p class="text-sm text-gray-400 mb-2">${product.category}</p>

            <!-- Price Block -->
            <div class="flex items-center gap-3 mb-2">
                <span class="text-gray-400 line-through text-sm">Now</span>
                <span class="text-gray-900 font-bold text-lg">${bestPrice}</span>
            </div>

            <!-- Stars -->
            <div class="flex text-yellow-500 text-sm mb-3 star-rating">
                <span>★</span><span>★</span><span>★</span><span>★</span><span class="text-gray-300">★</span>
            </div>

            <!-- Swatches (Mock) -->
            <div class="flex gap-2 mb-4">
                <div class="w-4 h-4 rounded-full bg-blue-500 border border-gray-200 cursor-pointer hover:scale-110 transition"></div>
                <div class="w-4 h-4 rounded-full bg-green-500 border border-gray-200 cursor-pointer hover:scale-110 transition"></div>
                <div class="w-4 h-4 rounded-full bg-red-500 border border-gray-200 cursor-pointer hover:scale-110 transition"></div>
            </div>

             <!-- Retailer Link Button -->
             <a href="${sortedRetailers[0].url}" onclick="trackClick(event)" class="inline-block border border-gray-900 text-gray-900 px-4 py-2 text-sm font-bold uppercase tracking-wider hover:bg-gray-900 hover:text-white transition">Check Deal</a>
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
