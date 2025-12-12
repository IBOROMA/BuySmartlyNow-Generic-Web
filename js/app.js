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
    {
        id: 5,
        name: "Samsung Galaxy Watch 6",
        category: "Gadgets",
        image: "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?auto=format&fit=crop&q=80&w=400",
        description: "Advanced sleep coaching and heart rate monitoring.",
        retailers: [
            { name: "Amazon", price: "$299", url: "/go/amazon/watch6", color: "bg-gray-800 text-white" },
            { name: "Jumia", price: "₦350,000", url: "/go/jumia/watch6", color: "bg-orange-500 text-white" }
        ]
    }
];

// --- 2. RENDER LOGIC ---
function renderProducts(category = null) {
    const grid = document.getElementById('product-grid');
    if (!grid) return;
    grid.innerHTML = '';

    const filtered = category 
        ? products.filter(p => p.category === category) 
        : products;

    if (filtered.length === 0) {
        grid.innerHTML = '<p class="text-center col-span-full text-gray-500 py-12">No products found in this category.</p>';
        return;
    }

    filtered.forEach(product => {
        const card = document.createElement('div');
        card.className = "bg-white rounded-xl shadow-sm hover:shadow-lg transition border border-gray-100 overflow-hidden flex flex-col";
        
        let retailersHtml = '';
        product.retailers.forEach(retailer => {
            retailersHtml += `
                <a href="${retailer.url}" onclick="trackClick(event)" class="flex justify-between items-center w-full px-4 py-3 rounded-lg text-sm font-semibold mb-2 transition hover:opacity-90 ${retailer.color}">
                    <span>Buy on ${retailer.name}</span>
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
                    ${retailersHtml}
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
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
}

function filterCategory(category) {
    showSection('deals');
    const titleEl = document.getElementById('deals-title');
    if (titleEl) titleEl.innerText = `${category} Deals`;
    renderProducts(category);
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
    tailwind.config = {
        theme: {
            extend: {
                colors: {
                    primary: '#0055aa', // Professional Blue
                    secondary: '#28a745', // Trust Green
                    accent: '#f4f7f6', // Light Gray-White
                    dark: '#333333'
                }
            }
        }
    };
            
    renderProducts(); // Pre-render deals in background
    checkAuthState();
});
