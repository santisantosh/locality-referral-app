/**
 * NeighborWorks - Community Locality Referral Application Logic
 */

// Initial Mock Dataset of Local Helpers
const INITIAL_PROVIDERS = [
    {
        id: "p1",
        name: "Ramesh Kumar",
        category: "Barber",
        phone: "+91 98123 45678",
        whatsapp: "+91 98123 45678",
        locality: "Green Park",
        experience: 8,
        rate: "₹250 / haircut",
        rating: 4.9,
        endorsementsCount: 24,
        isVerified: true,
        referrerName: "Amit Sharma (Block B)",
        recommendation: "Ramesh has been cutting hair for our family for 5 years. Brings his own sanitized kit, super punctual and extremely skilled!",
        avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80",
        gender: "male",
        skills: ["Haircut", "Beard Styling", "Head Massage", "Home Service"],
        xRatio: 0.25,
        yRatio: 0.35,
        createdAt: "2026-07-15",
        reviews: [
            { author: "Amit Sharma", text: "Best home barber in Green Park!", rating: 5, date: "2 weeks ago" },
            { author: "Siddharth N.", text: "Very gentle with kids haircuts. Highly recommended.", rating: 5, date: "1 month ago" }
        ]
    },
    {
        id: "p2",
        name: "Sunita Devi",
        category: "Maid",
        phone: "+91 98765 12345",
        whatsapp: "+91 98765 12345",
        locality: "Sunrise Heights",
        experience: 6,
        rate: "₹4,500 / month",
        rating: 4.8,
        endorsementsCount: 31,
        isVerified: true,
        referrerName: "Priya Mukherjee (Apt 402)",
        recommendation: "Sunita is extremely honest and thorough with cleaning, dusting, and dishwashing. We leave house keys with her without any worries.",
        avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=250&q=80",
        gender: "female",
        skills: ["Deep Cleaning", "Dishwashing", "Dusting", "Laundry"],
        xRatio: 0.65,
        yRatio: 0.45,
        createdAt: "2026-07-20",
        reviews: [
            { author: "Priya M.", text: "Super clean work and very punctual every morning.", rating: 5, date: "3 weeks ago" },
            { author: "Rahul V.", text: "Dependable helper for family.", rating: 4.5, date: "1 month ago" }
        ]
    },
    {
        id: "p3",
        name: "Gurpreet Singh",
        category: "Driver",
        phone: "+91 99887 66554",
        whatsapp: "+91 99887 66554",
        locality: "Central Valley",
        experience: 12,
        rate: "₹16,000 / month",
        rating: 4.95,
        endorsementsCount: 18,
        isVerified: true,
        referrerName: "Col. Malhotra (Retd)",
        recommendation: "Excellent defensive driver, non-smoker, knows all city routes by heart. Drives automatic & manual luxury SUVs safely.",
        avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=250&q=80",
        gender: "male",
        skills: ["Outstation Driving", "Automatic & Manual", "Night Driving", "Car Maintenance"],
        xRatio: 0.45,
        yRatio: 0.25,
        createdAt: "2026-08-01",
        reviews: [
            { author: "Col. Malhotra", text: "Drove us safely on mountain trips. Very respectful.", rating: 5, date: "1 week ago" }
        ]
    },
    {
        id: "p4",
        name: "Chef Rajesh Maharaj",
        category: "Cook",
        phone: "+91 97112 33445",
        whatsapp: "+91 97112 33445",
        locality: "Green Park",
        experience: 10,
        rate: "₹7,000 / month",
        rating: 4.9,
        endorsementsCount: 42,
        isVerified: true,
        referrerName: "Dr. K. S. Verma",
        recommendation: "Makes delicious North Indian, South Indian, and Gujarati thalis. Maintains utmost kitchen hygiene and cooks according to diet needs.",
        avatarUrl: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=250&q=80",
        gender: "male",
        skills: ["North Indian", "South Indian", "Party Catering", "Low Oil Diet"],
        xRatio: 0.30,
        yRatio: 0.55,
        createdAt: "2026-06-10",
        reviews: [
            { author: "Dr. Verma", text: "Amazing dal makhani and rotis!", rating: 5, date: "2 days ago" }
        ]
    },
    {
        id: "p5",
        name: "Anil Sharma",
        category: "Electrician",
        phone: "+91 98991 00223",
        whatsapp: "+91 98991 00223",
        locality: "Lakeview Enclave",
        experience: 9,
        rate: "₹300 / visit",
        rating: 4.7,
        endorsementsCount: 15,
        isVerified: true,
        referrerName: "Sanjay Gupta (Villa 12)",
        recommendation: "Quick response for electrical short circuits, inverter wiring, and MCB fixes. Reasonable charges and transparent pricing.",
        avatarUrl: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=250&q=80",
        gender: "male",
        skills: ["Inverter Repair", "MCB Wiring", "Fan & Light Fitting", "Appliance Check"],
        xRatio: 0.75,
        yRatio: 0.65,
        createdAt: "2026-07-28",
        reviews: [
            { author: "Sanjay G.", text: "Fixed our power outage in 20 minutes.", rating: 5, date: "4 days ago" }
        ]
    },
    {
        id: "p6",
        name: "Manoj Verma",
        category: "Plumber",
        phone: "+91 98114 55667",
        whatsapp: "+91 98114 55667",
        locality: "Metro Heights",
        experience: 7,
        rate: "₹350 / visit",
        rating: 4.65,
        endorsementsCount: 19,
        isVerified: false,
        referrerName: "Deepak Mehta (Tower 3)",
        recommendation: "Specialist in resolving pipe leakage, tap fittings, water tank cleaning, and geyser installations. Carries all spare parts.",
        avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=250&q=80",
        gender: "male",
        skills: ["Pipe Leakage", "Geyser Fitting", "Sanitary Work", "Water Tank Clean"],
        xRatio: 0.15,
        yRatio: 0.70,
        createdAt: "2026-07-02",
        reviews: [
            { author: "Deepak M.", text: "Resolved stubborn kitchen sink blockage easily.", rating: 4.5, date: "3 weeks ago" }
        ]
    },
    {
        id: "p7",
        name: "Priya Sengupta",
        category: "Tutor",
        phone: "+91 99100 88776",
        whatsapp: "+91 99100 88776",
        locality: "Sunrise Heights",
        experience: 5,
        rate: "₹500 / hr",
        rating: 4.9,
        endorsementsCount: 28,
        isVerified: true,
        referrerName: "Mrs. Anjali Roy",
        recommendation: "M.Sc Mathematics graduate. Teaches Class 6 to 10 Maths & Science. My daughter's marks improved from 70% to 92%!",
        avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=250&q=80",
        gender: "female",
        skills: ["Class 6-10 Maths", "Science", "Exam Prep", "Interactive Teaching"],
        xRatio: 0.55,
        yRatio: 0.30,
        createdAt: "2026-06-25",
        reviews: [
            { author: "Anjali Roy", text: "Wonderful tutor, very patient with children.", rating: 5, date: "1 month ago" }
        ]
    },
    {
        id: "p8",
        name: "Salim Khan",
        category: "Barber",
        phone: "+91 98711 22334",
        whatsapp: "+91 98711 22334",
        locality: "Lakeview Enclave",
        experience: 11,
        rate: "₹300 / service",
        rating: 4.85,
        endorsementsCount: 36,
        isVerified: true,
        referrerName: "Rohan Kapoor",
        recommendation: "Master of trendy fades and classic scissor cuts. Has worked at top salons and now provides doorstep grooming.",
        avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=250&q=80",
        gender: "male",
        skills: ["Fade Haircuts", "Beard Sculpting", "Facial Grooming"],
        xRatio: 0.80,
        yRatio: 0.40,
        createdAt: "2026-07-12",
        reviews: [
            { author: "Rohan K.", text: "Best fade cut I've had in years!", rating: 5, date: "5 days ago" }
        ]
    },
    {
        id: "p9",
        name: "Meena Bai",
        category: "Maid",
        phone: "+91 97654 32109",
        whatsapp: "+91 97654 32109",
        locality: "Green Park",
        experience: 9,
        rate: "₹5,000 / month",
        rating: 4.75,
        endorsementsCount: 22,
        isVerified: true,
        referrerName: "Shweta T. (Block C)",
        recommendation: "Punctual, energetic, handles cleaning and cooking seamlessly. Great attitude and takes good care of household tasks.",
        avatarUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=250&q=80",
        gender: "female",
        skills: ["Housekeeping", "Cooking Assistance", "Baby Sitting"],
        xRatio: 0.35,
        yRatio: 0.70,
        createdAt: "2026-07-18",
        reviews: [
            { author: "Shweta T.", text: "Very trustworthy helper.", rating: 5, date: "2 weeks ago" }
        ]
    },
    {
        id: "p10",
        name: "Joseph D'Souza",
        category: "Gardener",
        phone: "+91 98220 11998",
        whatsapp: "+91 98220 11998",
        locality: "Sunrise Heights",
        experience: 14,
        rate: "₹2,500 / month (2x week)",
        rating: 4.9,
        endorsementsCount: 16,
        isVerified: true,
        referrerName: "Dr. Vikram Seth",
        recommendation: "Transforms balcony gardens & lawn landscapes. Expert in plant organic fertilizers, pruning, and indoor plant care.",
        avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=250&q=80",
        gender: "male",
        skills: ["Lawn Maintenance", "Pruning", "Organic Fertilizers", "Bonsai"],
        xRatio: 0.60,
        yRatio: 0.75,
        createdAt: "2026-07-05",
        reviews: [
            { author: "Dr. Seth", text: "Our garden is blooming thanks to Joseph!", rating: 5, date: "1 month ago" }
        ]
    }
];

// Application State
class AppState {
    constructor() {
        this.providers = this.loadProviders();
        this.bookmarks = this.loadBookmarks();
        this.activeCategory = 'all';
        this.activeLocality = 'all';
        this.searchQuery = '';
        this.ratingFilter = 0;
        this.verifiedOnly = false;
        this.hasPhoneOnly = false;
        this.minExperience = 0;
        this.sortBy = 'rating';
        this.currentView = 'grid';
        this.theme = localStorage.getItem('nw_theme') || 'dark';
    }

    loadProviders() {
        const stored = localStorage.getItem('nw_providers');
        if (stored) {
            try { return JSON.parse(stored); } catch(e) {}
        }
        localStorage.setItem('nw_providers', JSON.stringify(INITIAL_PROVIDERS));
        return INITIAL_PROVIDERS;
    }

    saveProviders() {
        localStorage.setItem('nw_providers', JSON.stringify(this.providers));
    }

    loadBookmarks() {
        const stored = localStorage.getItem('nw_bookmarks');
        return stored ? JSON.parse(stored) : [];
    }

    saveBookmarks() {
        localStorage.setItem('nw_bookmarks', JSON.stringify(this.bookmarks));
    }

    toggleBookmark(providerId) {
        const idx = this.bookmarks.indexOf(providerId);
        if (idx > -1) {
            this.bookmarks.splice(idx, 1);
        } else {
            this.bookmarks.push(providerId);
        }
        this.saveBookmarks();
    }

    addProvider(newProvider) {
        this.providers.unshift(newProvider);
        this.saveProviders();
    }

    addReview(providerId, reviewObj) {
        const provider = this.providers.find(p => p.id === providerId);
        if (provider) {
            if (!provider.reviews) provider.reviews = [];
            provider.reviews.unshift(reviewObj);
            provider.endorsementsCount += 1;
            // Recalculate average rating
            const totalRating = provider.reviews.reduce((sum, r) => sum + Number(r.rating), 0);
            provider.rating = Number((totalRating / provider.reviews.length).toFixed(1));
            this.saveProviders();
        }
    }
}

// Global App Instance
const app = new AppState();

// DOM Elements Cache
const DOM = {
    // Header & Hero
    headerLocalitySelect: document.getElementById('headerLocalitySelect'),
    themeToggleBtn: document.getElementById('themeToggleBtn'),
    favoritesBtn: document.getElementById('favoritesBtn'),
    favCountBadge: document.getElementById('favCountBadge'),
    openReferralModalBtn: document.getElementById('openReferralModalBtn'),
    searchInput: document.getElementById('searchInput'),
    clearSearchBtn: document.getElementById('clearSearchBtn'),
    searchTriggerBtn: document.getElementById('searchTriggerBtn'),
    categoryChips: document.getElementById('categoryChips'),

    // Controls & Sidebar
    resultsCountText: document.getElementById('resultsCountText'),
    activeFilterBadge: document.getElementById('activeFilterBadge'),
    sortBySelect: document.getElementById('sortBySelect'),
    gridViewBtn: document.getElementById('gridViewBtn'),
    mapViewBtn: document.getElementById('mapViewBtn'),
    sidebarLocalitySelect: document.getElementById('sidebarLocalitySelect'),
    sidebarCategorySelect: document.getElementById('sidebarCategorySelect'),
    verifiedOnlyCheckbox: document.getElementById('verifiedOnlyCheckbox'),
    hasPhoneCheckbox: document.getElementById('hasPhoneCheckbox'),
    experienceFilterSelect: document.getElementById('experienceFilterSelect'),
    resetFiltersBtn: document.getElementById('resetFiltersBtn'),

    // Containers
    spotlightCards: document.getElementById('spotlightCards'),
    providersGrid: document.getElementById('providersGrid'),
    localityMapView: document.getElementById('localityMapView'),
    localityMapCanvas: document.getElementById('localityMapCanvas'),
    mapTooltip: document.getElementById('mapTooltip'),
    emptyState: document.getElementById('emptyState'),
    emptyReferBtn: document.getElementById('emptyReferBtn'),
    footerReferTrigger: document.getElementById('footerReferTrigger'),

    // Dialogs
    referralModal: document.getElementById('referralModal'),
    closeReferralModalBtn: document.getElementById('closeReferralModalBtn'),
    cancelReferralBtn: document.getElementById('cancelReferralBtn'),
    referralForm: document.getElementById('referralForm'),
    refLocality: document.getElementById('refLocality'),

    detailModal: document.getElementById('detailModal'),
    closeDetailModalBtn: document.getElementById('closeDetailModalBtn'),
    modalCategoryBadge: document.getElementById('modalCategoryBadge'),
    detailModalContent: document.getElementById('detailModalContent'),

    contactActionModal: document.getElementById('contactActionModal'),
    closeContactModalBtn: document.getElementById('closeContactModalBtn'),
    contactModalContent: document.getElementById('contactModalContent'),

    // Toast
    toastNotification: document.getElementById('toastNotification'),
    toastMessage: document.getElementById('toastMessage')
};

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
    applyTheme(app.theme);
    syncLocalitiesFromData();
    bindEvents();
    renderAll();
});

// Dynamic Locality Sync Helper
function registerLocality(localityName) {
    if (!localityName) return;
    const selects = [DOM.headerLocalitySelect, DOM.sidebarLocalitySelect, DOM.refLocality];
    selects.forEach(select => {
        if (!select) return;
        const exists = Array.from(select.options).some(opt => opt.value === localityName);
        if (!exists) {
            const opt = document.createElement('option');
            opt.value = localityName;
            opt.textContent = localityName;
            if (select === DOM.refLocality) {
                // Insert before CUSTOM option
                const customOpt = select.querySelector('option[value="CUSTOM"]');
                select.insertBefore(opt, customOpt);
            } else {
                select.appendChild(opt);
            }
        }
    });
}

function syncLocalitiesFromData() {
    app.providers.forEach(p => {
        if (p.locality) registerLocality(p.locality);
    });
}

// Theme Management
function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    const icon = DOM.themeToggleBtn.querySelector('i');
    if (theme === 'light') {
        icon.className = 'fa-solid fa-sun';
    } else {
        icon.className = 'fa-solid fa-moon';
    }
}

// Toast Helper
function showToast(message, iconClass = 'fa-solid fa-circle-check') {
    DOM.toastMessage.textContent = message;
    DOM.toastNotification.querySelector('.toast-icon').className = `toast-icon ${iconClass}`;
    DOM.toastNotification.classList.remove('hidden');
    setTimeout(() => {
        DOM.toastNotification.classList.add('hidden');
    }, 3200);
}

// Event Bindings
function bindEvents() {
    // Theme Toggle
    DOM.themeToggleBtn.addEventListener('click', () => {
        app.theme = app.theme === 'dark' ? 'light' : 'dark';
        localStorage.setItem('nw_theme', app.theme);
        applyTheme(app.theme);
    });

    // Favorites filter
    DOM.favoritesBtn.addEventListener('click', () => {
        if (app.activeCategory === 'favorites') {
            app.activeCategory = 'all';
            showToast('Showing all providers');
        } else {
            app.activeCategory = 'favorites';
            showToast(`Showing ${app.bookmarks.length} saved provider(s)`);
        }
        updateCategoryChipUI();
        renderAll();
    });

    // Locality Selectors Sync
    DOM.headerLocalitySelect.addEventListener('change', (e) => {
        app.activeLocality = e.target.value;
        DOM.sidebarLocalitySelect.value = e.target.value;
        renderAll();
    });

    DOM.sidebarLocalitySelect.addEventListener('change', (e) => {
        app.activeLocality = e.target.value;
        DOM.headerLocalitySelect.value = e.target.value;
        renderAll();
    });

    // Search Bar
    DOM.searchInput.addEventListener('input', (e) => {
        app.searchQuery = e.target.value.trim().toLowerCase();
        if (app.searchQuery) {
            DOM.clearSearchBtn.classList.remove('hidden');
        } else {
            DOM.clearSearchBtn.classList.add('hidden');
        }
        renderAll();
    });

    DOM.clearSearchBtn.addEventListener('click', () => {
        DOM.searchInput.value = '';
        app.searchQuery = '';
        DOM.clearSearchBtn.classList.add('hidden');
        renderAll();
    });

    DOM.searchTriggerBtn.addEventListener('click', () => {
        renderAll();
    });

    // Category Chips
    DOM.categoryChips.addEventListener('click', (e) => {
        const chip = e.target.closest('.chip');
        if (!chip) return;
        app.activeCategory = chip.dataset.category;
        DOM.sidebarCategorySelect.value = app.activeCategory;
        updateCategoryChipUI();
        renderAll();
    });

    // Sidebar Category Select Sync
    DOM.sidebarCategorySelect.addEventListener('change', (e) => {
        app.activeCategory = e.target.value;
        updateCategoryChipUI();
        renderAll();
    });

    // Sidebar Filters
    document.querySelectorAll('input[name="ratingFilter"]').forEach(radio => {
        radio.addEventListener('change', (e) => {
            app.ratingFilter = Number(e.target.value);
            renderAll();
        });
    });

    DOM.verifiedOnlyCheckbox.addEventListener('change', (e) => {
        app.verifiedOnly = e.target.checked;
        renderAll();
    });

    DOM.hasPhoneCheckbox.addEventListener('change', (e) => {
        app.hasPhoneOnly = e.target.checked;
        renderAll();
    });

    DOM.experienceFilterSelect.addEventListener('change', (e) => {
        app.minExperience = Number(e.target.value);
        renderAll();
    });

    DOM.resetFiltersBtn.addEventListener('click', () => {
        app.activeCategory = 'all';
        app.activeLocality = 'all';
        app.searchQuery = '';
        app.ratingFilter = 0;
        app.verifiedOnly = false;
        app.hasPhoneOnly = false;
        app.minExperience = 0;
        app.sortBy = 'rating';

        DOM.searchInput.value = '';
        DOM.headerLocalitySelect.value = 'all';
        DOM.sidebarLocalitySelect.value = 'all';
        DOM.sidebarCategorySelect.value = 'all';
        DOM.verifiedOnlyCheckbox.checked = false;
        DOM.hasPhoneCheckbox.checked = false;
        DOM.experienceFilterSelect.value = '0';
        DOM.sortBySelect.value = 'rating';
        document.querySelector('input[name="ratingFilter"][value="0"]').checked = true;

        updateCategoryChipUI();
        showToast('All filters reset');
        renderAll();
    });

    // Sorting
    DOM.sortBySelect.addEventListener('change', (e) => {
        app.sortBy = e.target.value;
        renderAll();
    });

    // View Toggles
    DOM.gridViewBtn.addEventListener('click', () => {
        app.currentView = 'grid';
        DOM.gridViewBtn.classList.add('active');
        DOM.mapViewBtn.classList.remove('active');
        DOM.providersGrid.classList.remove('hidden');
        DOM.localityMapView.classList.add('hidden');
    });

    DOM.mapViewBtn.addEventListener('click', () => {
        app.currentView = 'map';
        DOM.mapViewBtn.classList.add('active');
        DOM.gridViewBtn.classList.remove('active');
        DOM.providersGrid.classList.add('hidden');
        DOM.localityMapView.classList.remove('hidden');
        renderMap();
    });

    // Modals Triggers
    const openModal = (modal) => modal.showModal();
    const closeModal = (modal) => modal.close();

    DOM.openReferralModalBtn.addEventListener('click', () => openModal(DOM.referralModal));
    DOM.footerReferTrigger.addEventListener('click', (e) => {
        e.preventDefault();
        openModal(DOM.referralModal);
    });
    DOM.emptyReferBtn.addEventListener('click', () => openModal(DOM.referralModal));

    DOM.closeReferralModalBtn.addEventListener('click', () => closeModal(DOM.referralModal));
    DOM.cancelReferralBtn.addEventListener('click', () => closeModal(DOM.referralModal));
    DOM.closeDetailModalBtn.addEventListener('click', () => closeModal(DOM.detailModal));
    DOM.closeContactModalBtn.addEventListener('click', () => closeModal(DOM.contactActionModal));

    // Custom Locality Toggle Listener
    const refLocalitySelect = document.getElementById('refLocality');
    const refCustomInput = document.getElementById('refCustomLocality');

    if (refLocalitySelect && refCustomInput) {
        refLocalitySelect.addEventListener('change', (e) => {
            if (e.target.value === 'CUSTOM') {
                refCustomInput.classList.remove('hidden');
                refCustomInput.required = true;
                refCustomInput.focus();
            } else {
                refCustomInput.classList.add('hidden');
                refCustomInput.required = false;
            }
        });
    }

    // Referral Form Submit
    DOM.referralForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('refName').value.trim();
        const category = document.getElementById('refCategory').value;
        const phone = document.getElementById('refPhone').value.trim();
        const whatsapp = document.getElementById('refWhatsapp').value.trim() || phone;
        
        let locality = document.getElementById('refLocality').value;
        if (locality === 'CUSTOM') {
            locality = document.getElementById('refCustomLocality').value.trim();
            if (!locality) locality = 'Local Area';
        }
        
        // Dynamically add new locality to all dropdowns if new
        registerLocality(locality);

        const experience = Number(document.getElementById('refExperience').value) || 2;
        const rate = document.getElementById('refRate').value.trim() || 'Negotiable';
        const referrer = document.getElementById('refReferrer').value.trim();
        const review = document.getElementById('refReview').value.trim();
        const avatarPreset = document.getElementById('refAvatarStyle').value;
        const photoFileInput = document.getElementById('refPhotoFile');

        // Helper creation function
        const createAndSaveHelper = (avatarUrl) => {
            const newHelper = {
                id: "p_" + Date.now(),
                name,
                category,
                phone,
                whatsapp,
                locality,
                experience,
                rate,
                rating: 5.0,
                endorsementsCount: 1,
                isVerified: true,
                referrerName: referrer,
                recommendation: review,
                avatarUrl,
                gender: avatarPreset.includes('female') ? 'female' : 'male',
                skills: [category, "Community Referred", "Punctual"],
                xRatio: 0.2 + Math.random() * 0.6,
                yRatio: 0.2 + Math.random() * 0.6,
                createdAt: new Date().toISOString().split('T')[0],
                reviews: [
                    { author: referrer, text: review, rating: 5, date: "Just now" }
                ]
            };

            app.addProvider(newHelper);
            DOM.referralForm.reset();
            const refCustomInput = document.getElementById('refCustomLocality');
            if (refCustomInput) refCustomInput.classList.add('hidden');
            closeModal(DOM.referralModal);
            showToast(`🎉 ${name} has been added to ${locality} referrals!`, 'fa-solid fa-party-horn');
            renderAll();
        };

        // Check if user uploaded a custom photo file
        if (photoFileInput && photoFileInput.files && photoFileInput.files[0]) {
            const reader = new FileReader();
            reader.onload = (event) => {
                createAndSaveHelper(event.target.result);
            };
            reader.readAsDataURL(photoFileInput.files[0]);
        } else {
            let avatarUrl = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=250&q=80";
            if (avatarPreset === 'female_friendly') {
                avatarUrl = "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=250&q=80";
            } else if (avatarPreset === 'experienced') {
                avatarUrl = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=250&q=80";
            }
            createAndSaveHelper(avatarUrl);
        }
    });
}

function updateCategoryChipUI() {
    document.querySelectorAll('#categoryChips .chip').forEach(chip => {
        if (chip.dataset.category === app.activeCategory) {
            chip.classList.add('active');
        } else {
            chip.classList.remove('active');
        }
    });
}

// Data Filtering & Sorting Pipeline
function getFilteredProviders() {
    return app.providers.filter(p => {
        // Bookmarks filter
        if (app.activeCategory === 'favorites' && !app.bookmarks.includes(p.id)) {
            return false;
        }
        // Category filter
        if (app.activeCategory !== 'all' && app.activeCategory !== 'favorites' && p.category !== app.activeCategory) {
            return false;
        }
        // Locality filter
        if (app.activeLocality !== 'all' && p.locality !== app.activeLocality) {
            return false;
        }
        // Rating filter
        if (app.ratingFilter > 0 && p.rating < app.ratingFilter) {
            return false;
        }
        // Verified filter
        if (app.verifiedOnly && !p.isVerified) {
            return false;
        }
        // Experience filter
        if (app.minExperience > 0 && p.experience < app.minExperience) {
            return false;
        }
        // Direct WhatsApp filter
        if (app.hasPhoneOnly && !p.whatsapp) {
            return false;
        }
        // Search query (Name, category, locality, skills, referrer)
        if (app.searchQuery) {
            const q = app.searchQuery;
            const matchName = p.name.toLowerCase().includes(q);
            const matchCat = p.category.toLowerCase().includes(q);
            const matchLoc = p.locality.toLowerCase().includes(q);
            const matchSkills = p.skills && p.skills.some(s => s.toLowerCase().includes(q));
            const matchReferrer = p.referrerName.toLowerCase().includes(q);
            if (!matchName && !matchCat && !matchLoc && !matchSkills && !matchReferrer) {
                return false;
            }
        }
        return true;
    }).sort((a, b) => {
        if (app.sortBy === 'rating') return b.rating - a.rating;
        if (app.sortBy === 'endorsements') return b.endorsementsCount - a.endorsementsCount;
        if (app.sortBy === 'experience') return b.experience - a.experience;
        if (app.sortBy === 'recent') return new Date(b.createdAt) - new Date(a.createdAt);
        return 0;
    });
}

// Render Functions
function renderAll() {
    const filtered = getFilteredProviders();

    // Update Counter & Badge UI
    DOM.favCountBadge.textContent = app.bookmarks.length;
    DOM.resultsCountText.innerHTML = `Showing <strong>${filtered.length}</strong> service provider${filtered.length === 1 ? '' : 's'}`;

    if (app.activeCategory !== 'all' || app.activeLocality !== 'all' || app.searchQuery) {
        DOM.activeFilterBadge.classList.remove('hidden');
        DOM.activeFilterBadge.textContent = `Filters Active`;
    } else {
        DOM.activeFilterBadge.classList.add('hidden');
    }

    // Render Spotlight (Top 3 overall rated)
    renderSpotlight();

    // Render Grid & Empty State
    if (filtered.length === 0) {
        DOM.providersGrid.innerHTML = '';
        DOM.emptyState.classList.remove('hidden');
    } else {
        DOM.emptyState.classList.add('hidden');
        DOM.providersGrid.innerHTML = filtered.map(p => createProviderCardHTML(p)).join('');
        bindCardActions();
    }

    if (app.currentView === 'map') {
        renderMap();
    }
}

function renderSpotlight() {
    const topPicks = [...app.providers].sort((a, b) => b.rating - a.rating).slice(0, 3);
    DOM.spotlightCards.innerHTML = topPicks.map(p => `
        <div class="provider-card spotlight-card" onclick="openProviderDetail('${p.id}')" style="cursor: pointer;">
            <div class="card-header">
                <div class="avatar-wrapper">
                    <img src="${p.avatarUrl}" alt="${p.name}" class="avatar-img">
                    ${p.isVerified ? '<span class="verified-badge-icon" title="Neighbor Verified"><i class="fa-solid fa-check"></i></span>' : ''}
                </div>
                <div class="provider-meta">
                    <div class="provider-name-row">
                        <h4 class="provider-name">${p.name}</h4>
                        <span class="stars">⭐ ${p.rating}</span>
                    </div>
                    <span class="category-tag">${p.category}</span>
                    <span class="locality-location"><i class="fa-solid fa-location-dot"></i> ${p.locality}</span>
                </div>
            </div>
            <div class="review-snippet">"${p.recommendation}"</div>
            <div class="card-footer">
                <span class="rate-text">${p.rate}</span>
                <button class="btn btn-primary btn-sm" onclick="event.stopPropagation(); openContactModal('${p.id}')">
                    <i class="fa-solid fa-phone"></i> Contact
                </button>
            </div>
        </div>
    `).join('');
}

function createProviderCardHTML(p) {
    const isBookmarked = app.bookmarks.includes(p.id);
    const categoryIcon = getCategoryIcon(p.category);

    return `
        <div class="provider-card" data-id="${p.id}">
            <div>
                <div class="card-header">
                    <div class="avatar-wrapper">
                        <img src="${p.avatarUrl}" alt="${p.name}" class="avatar-img">
                        ${p.isVerified ? '<span class="verified-badge-icon" title="Neighbor Verified"><i class="fa-solid fa-check"></i></span>' : ''}
                    </div>
                    <div class="provider-meta">
                        <div class="provider-name-row">
                            <h3 class="provider-name">${p.name}</h3>
                            <button class="bookmark-card-btn ${isBookmarked ? 'active' : ''}" data-action="bookmark" title="Bookmark Provider">
                                <i class="fa-solid fa-bookmark"></i>
                            </button>
                        </div>
                        <span class="category-tag"><i class="${categoryIcon}"></i> ${p.category}</span>
                        <div class="locality-location"><i class="fa-solid fa-location-dot text-accent"></i> ${p.locality} &bull; ${p.experience} yrs exp</div>
                    </div>
                </div>

                <div class="rating-and-endorsements">
                    <span class="stars"><i class="fa-solid fa-star"></i> ${p.rating}</span>
                    <span class="endorsement-count">(${p.endorsementsCount} Neighbor Endorsements)</span>
                </div>

                <div class="review-snippet">
                    "${p.recommendation}"
                </div>

                <div class="referrer-info">
                    <i class="fa-solid fa-circle-user text-muted"></i> Referred by <strong>${p.referrerName}</strong>
                </div>
            </div>

            <div class="card-footer">
                <span class="rate-text">${p.rate}</span>
                <div class="card-actions">
                    <button class="btn btn-secondary btn-sm" data-action="detail" title="View Full Profile">
                        <i class="fa-solid fa-circle-info"></i> Info
                    </button>
                    <button class="btn btn-accent btn-sm" data-action="contact" title="Direct Contact">
                        <i class="fa-solid fa-phone"></i> Contact
                    </button>
                </div>
            </div>
        </div>
    `;
}

function bindCardActions() {
    DOM.providersGrid.querySelectorAll('.provider-card').forEach(card => {
        const id = card.dataset.id;

        card.addEventListener('click', (e) => {
            if (e.target.closest('button')) return;
            openProviderDetail(id);
        });

        card.querySelector('[data-action="bookmark"]').addEventListener('click', (e) => {
            e.stopPropagation();
            app.toggleBookmark(id);
            const isFav = app.bookmarks.includes(id);
            showToast(isFav ? 'Provider saved to bookmarks' : 'Removed from bookmarks');
            renderAll();
        });

        card.querySelector('[data-action="detail"]').addEventListener('click', (e) => {
            e.stopPropagation();
            openProviderDetail(id);
        });

        card.querySelector('[data-action="contact"]').addEventListener('click', (e) => {
            e.stopPropagation();
            openContactModal(id);
        });
    });
}

function getCategoryIcon(category) {
    switch (category) {
        case 'Barber': return 'fa-solid fa-scissors';
        case 'Maid': return 'fa-solid fa-broom';
        case 'Driver': return 'fa-solid fa-car';
        case 'Cook': return 'fa-solid fa-utensils';
        case 'Electrician': return 'fa-solid fa-bolt';
        case 'Plumber': return 'fa-solid fa-faucet-drip';
        case 'Tutor': return 'fa-solid fa-book-open';
        case 'Gardener': return 'fa-solid fa-leaf';
        default: return 'fa-solid fa-briefcase';
    }
}

// Provider Detail Modal
function openProviderDetail(id) {
    const p = app.providers.find(item => item.id === id);
    if (!p) return;

    DOM.modalCategoryBadge.innerHTML = `<i class="${getCategoryIcon(p.category)}"></i> ${p.category}`;

    DOM.detailModalContent.innerHTML = `
        <div class="detail-profile-header">
            <img src="${p.avatarUrl}" alt="${p.name}" class="detail-avatar">
            <div class="detail-info">
                <h2>${p.name} ${p.isVerified ? '<i class="fa-solid fa-circle-check text-verified" title="Neighbor Verified"></i>' : ''}</h2>
                <p class="locality-location"><i class="fa-solid fa-location-dot text-accent"></i> ${p.locality} Neighborhood</p>
                <div class="mt-2">
                    <span class="stars">⭐ ${p.rating} / 5.0</span> &bull; 
                    <span class="text-secondary">${p.endorsementsCount} Neighbor Vouched</span>
                </div>
            </div>
        </div>

        <div class="quick-stats-row">
            <div class="stat-box">
                <div class="val">${p.experience} Yrs</div>
                <div class="lbl">Experience</div>
            </div>
            <div class="stat-box">
                <div class="val">${p.rate}</div>
                <div class="lbl">Typical Rate</div>
            </div>
            <div class="stat-box">
                <div class="val">${p.locality}</div>
                <div class="lbl">Service Zone</div>
            </div>
            <div class="stat-box">
                <div class="val">${p.isVerified ? 'Verified' : 'Community'}</div>
                <div class="lbl">Status</div>
            </div>
        </div>

        <div class="form-group mb-3">
            <label class="filter-label">Key Specialties & Skills</label>
            <div class="category-chips-scroll" style="padding:0;">
                ${p.skills ? p.skills.map(s => `<span class="chip" style="cursor:default;"><i class="fa-solid fa-check text-accent"></i> ${s}</span>`).join('') : ''}
            </div>
        </div>

        <div class="form-group mb-3">
            <label class="filter-label">Original Referral Endorsement</label>
            <div class="review-item" style="background: var(--bg-card);">
                <div class="review-meta">
                    <span class="review-author"><i class="fa-solid fa-user-shield"></i> ${p.referrerName}</span>
                    <span>Referred on ${p.createdAt}</span>
                </div>
                <p style="font-size: 0.9rem; color: var(--text-primary);">"${p.recommendation}"</p>
            </div>
        </div>

        <div class="dialog-actions mb-3" style="justify-content: flex-start;">
            <button class="btn btn-whatsapp glow-effect" onclick="openContactModal('${p.id}')">
                <i class="fa-brands fa-whatsapp"></i> Chat / Call Provider
            </button>
            <button class="btn btn-secondary" onclick="copyContactNumber('${p.phone}')">
                <i class="fa-solid fa-copy"></i> Copy ${p.phone}
            </button>
        </div>

        <!-- Reviews & Endorsement Section -->
        <div class="reviews-list-container">
            <h3><i class="fa-solid fa-comments text-accent"></i> Community Reviews (${p.reviews ? p.reviews.length : 0})</h3>
            
            <div style="margin-top: 1rem;">
                ${p.reviews ? p.reviews.map(r => `
                    <div class="review-item">
                        <div class="review-meta">
                            <span class="review-author">${r.author}</span>
                            <span>⭐ ${r.rating} &bull; ${r.date}</span>
                        </div>
                        <p style="font-size:0.88rem; color: var(--text-secondary);">${r.text}</p>
                    </div>
                `).join('') : '<p class="text-muted">No additional reviews yet. Be the first neighbor to write one!</p>'}
            </div>

            <!-- Write Endorsement / Review Form -->
            <form id="addReviewForm" style="margin-top: 1.5rem; background: var(--bg-card); padding: 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--border-color);">
                <h4 style="font-size: 0.95rem; margin-bottom: 0.75rem;"><i class="fa-solid fa-pen"></i> Add Your Neighbor Review & Endorse</h4>
                <div class="form-row">
                    <div class="form-group">
                        <label>Your Name *</label>
                        <input type="text" id="revAuthor" required placeholder="e.g. S. Patel, Neighbor">
                    </div>
                    <div class="form-group">
                        <label>Rating (1 to 5 Stars) *</label>
                        <select id="revRating" required class="custom-select full-width">
                            <option value="5">⭐⭐⭐⭐⭐ (5.0 Excellent)</option>
                            <option value="4">⭐⭐⭐⭐ (4.0 Good)</option>
                            <option value="3">⭐⭐⭐ (3.0 Average)</option>
                        </select>
                    </div>
                </div>
                <div class="form-group">
                    <label>Your Feedback *</label>
                    <textarea id="revText" rows="2" required placeholder="Describe your experience with this service provider..."></textarea>
                </div>
                <button type="submit" class="btn btn-accent btn-sm">
                    <i class="fa-solid fa-plus"></i> Post Review & Endorse
                </button>
            </form>
        </div>
    `;

    DOM.detailModal.showModal();

    // Bind Add Review Form Handler
    document.getElementById('addReviewForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const author = document.getElementById('revAuthor').value.trim();
        const rating = Number(document.getElementById('revRating').value);
        const text = document.getElementById('revText').value.trim();

        app.addReview(id, { author, rating, text, date: "Just now" });
        showToast('⭐ Thank you! Your review & endorsement have been added.');
        openProviderDetail(id); // Reload modal
        renderAll(); // Reload cards
    });
}

// Contact Action Modal
function openContactModal(id) {
    const p = app.providers.find(item => item.id === id);
    if (!p) return;

    DOM.contactModalContent.innerHTML = `
        <div style="margin-bottom: 1.5rem;">
            <img src="${p.avatarUrl}" style="width: 70px; height: 70px; border-radius: 50%; object-fit: cover; margin-bottom: 0.5rem; border: 2px solid var(--accent);">
            <h4>${p.name}</h4>
            <p style="font-size: 0.85rem; color: var(--text-secondary);">${p.category} &bull; ${p.locality}</p>
        </div>

        <div style="display: flex; flex-direction: column; gap: 0.85rem;">
            <a href="tel:${p.phone}" class="btn btn-call btn-block" style="width: 100%; text-decoration: none;">
                <i class="fa-solid fa-phone-flip"></i> Direct Phone Call (${p.phone})
            </a>

            <a href="https://wa.me/${p.whatsapp.replace(/[^0-9]/g, '')}?text=Hi%20${encodeURIComponent(p.name)},%20I%20found%20your%20referral%20on%20NeighborWorks%20for%20${encodeURIComponent(p.locality)}.%20Are%20you%20available?" target="_blank" class="btn btn-whatsapp btn-block" style="width: 100%; text-decoration: none;">
                <i class="fa-brands fa-whatsapp"></i> Chat on WhatsApp
            </a>

            <button class="btn btn-secondary" style="width: 100%;" onclick="copyContactNumber('${p.phone}')">
                <i class="fa-solid fa-copy"></i> Copy Phone Number
            </button>

            <button class="btn btn-secondary" style="width: 100%;" onclick="shareProviderLink('${p.name}', '${p.category}')">
                <i class="fa-solid fa-share-nodes"></i> Share Referral Link
            </button>
        </div>
    `;

    DOM.contactActionModal.showModal();
}

function copyContactNumber(phone) {
    navigator.clipboard.writeText(phone);
    showToast(`Copied ${phone} to clipboard!`, 'fa-solid fa-copy');
}

function shareProviderLink(name, category) {
    if (navigator.share) {
        navigator.share({
            title: `NeighborWorks Referral: ${name}`,
            text: `Check out ${name} (${category}) on NeighborWorks locality referrals!`,
            url: window.location.href
        }).catch(() => {});
    } else {
        navigator.clipboard.writeText(window.location.href);
        showToast('Referral page link copied to clipboard!');
    }
}

// Canvas Map Renderer
function renderMap() {
    const canvas = DOM.localityMapCanvas;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    // Clear background
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, 0, width, height);

    // Draw Map Grid / Locality Roads
    ctx.strokeStyle = '#1e293b';
    ctx.lineWidth = 1;
    for (let x = 0; x < width; x += 40) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
    }
    for (let y = 0; y < height; y += 40) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
    }

    // Main Locality Road Arteries
    ctx.strokeStyle = '#334155';
    ctx.lineWidth = 12;

    // Horizontal Road
    ctx.beginPath();
    ctx.moveTo(0, height * 0.5);
    ctx.lineTo(width, height * 0.5);
    ctx.stroke();

    // Vertical Road
    ctx.beginPath();
    ctx.moveTo(width * 0.5, 0);
    ctx.lineTo(width * 0.5, height);
    ctx.stroke();

    // Labels for Localities
    ctx.fillStyle = '#475569';
    ctx.font = 'bold 14px Outfit';
    ctx.fillText('Green Park Area', 40, 40);
    ctx.fillText('Sunrise Heights', width - 160, 40);
    ctx.fillText('Central Valley', 40, height - 40);
    ctx.fillText('Lakeview Enclave', width - 180, height - 40);

    const filtered = getFilteredProviders();

    // Draw Marker Pins for Filtered Providers
    filtered.forEach(p => {
        const x = p.xRatio * width;
        const y = p.yRatio * height;

        // Pin Glow Effect
        ctx.beginPath();
        ctx.arc(x, y, 16, 0, Math.PI * 2);
        ctx.fillStyle = p.isVerified ? 'rgba(6, 182, 212, 0.25)' : 'rgba(99, 102, 241, 0.25)';
        ctx.fill();

        // Outer Pin
        ctx.beginPath();
        ctx.arc(x, y, 10, 0, Math.PI * 2);
        ctx.fillStyle = p.isVerified ? '#06b6d4' : '#6366f1';
        ctx.fill();

        // Inner Core
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.fill();

        // Label Tag
        ctx.fillStyle = '#f8fafc';
        ctx.font = '600 11px Inter';
        ctx.fillText(`${p.name} (${p.category})`, x + 14, y + 4);
    });

    // Handle Map Canvas Hover Tooltip & Click
    canvas.onmousemove = (e) => {
        const rect = canvas.getBoundingClientRect();
        const mouseX = ((e.clientX - rect.left) / rect.width) * width;
        const mouseY = ((e.clientY - rect.top) / rect.height) * height;

        let hovered = null;
        filtered.forEach(p => {
            const x = p.xRatio * width;
            const y = p.yRatio * height;
            const dist = Math.hypot(mouseX - x, mouseY - y);
            if (dist <= 16) {
                hovered = p;
            }
        });

        if (hovered) {
            canvas.style.cursor = 'pointer';
            DOM.mapTooltip.classList.remove('hidden');
            DOM.mapTooltip.style.left = `${e.clientX - rect.left + 15}px`;
            DOM.mapTooltip.style.top = `${e.clientY - rect.top + 15}px`;
            DOM.mapTooltip.innerHTML = `<strong>${hovered.name}</strong> (${hovered.category})<br>📍 ${hovered.locality} &bull; ⭐ ${hovered.rating}`;
        } else {
            canvas.style.cursor = 'crosshair';
            DOM.mapTooltip.classList.add('hidden');
        }
    };

    canvas.onclick = (e) => {
        const rect = canvas.getBoundingClientRect();
        const mouseX = ((e.clientX - rect.left) / rect.width) * width;
        const mouseY = ((e.clientY - rect.top) / rect.height) * height;

        filtered.forEach(p => {
            const x = p.xRatio * width;
            const y = p.yRatio * height;
            const dist = Math.hypot(mouseX - x, mouseY - y);
            if (dist <= 16) {
                openProviderDetail(p.id);
            }
        });
    };
}
