document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mainNav = document.querySelector('.main-nav');

    mobileMenuBtn.addEventListener('click', function() {
        mainNav.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
            }
        });
    });

    // Featured Concerts Data
    const featuredConcerts = [
        {
            id: 1,
            image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            date: 'June 15, 2023',
            title: 'Summer Beats Festival',
            artist: 'Various Artists',
            location: 'Central Park, New York',
            ticketLink: 'https://www.ticketmaster.com/'
        },
        {
            id: 2,
            image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            date: 'July 22, 2023',
            title: 'Rock Legends Tour',
            artist: 'The Rolling Stones',
            location: 'Madison Square Garden',
            ticketLink: 'https://www.livenation.com/'
        },
        {
            id: 3,
            image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            date: 'August 5, 2023',
            title: 'Jazz Under the Stars',
            artist: 'Diana Krall',
            location: 'Hollywood Bowl, LA',
            ticketLink: 'https://www.stubhub.com/'
        }
    ];

    // Upcoming Events Data
    const upcomingEvents = [
        {
            date: 'June 10, 2023',
            title: 'Indie Night Out',
            description: 'Discover the best indie bands in the city at this exclusive event.'
        },
        {
            date: 'June 25, 2023',
            title: 'Electronic Dreams',
            description: 'A night of electronic music with top DJs from around the world.'
        },
        {
            date: 'July 8, 2023',
            title: 'Classical Evenings',
            description: 'Experience the magic of classical music in an open-air setting.'
        },
        {
            date: 'July 30, 2023',
            title: 'Country Roads Festival',
            description: 'Three days of country music, food, and fun for the whole family.'
        }
    ];

    // Popular Venues Data
    const popularVenues = [
        {
            id: 1,
            image: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            name: 'Madison Square Garden',
            location: 'New York, NY',
            capacity: '20,000'
        },
        {
            id: 2,
            image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            name: 'Red Rocks Amphitheatre',
            location: 'Morrison, CO',
            capacity: '9,525'
        },
        {
            id: 3,
            image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            name: 'Hollywood Bowl',
            location: 'Los Angeles, CA',
            capacity: '17,500'
        }
    ];

    // Ticket Providers Data
    const ticketProviders = [
        {
            id: 1,
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Ticketmaster_2016.svg/1200px-Ticketmaster_2016.svg.png',
            name: 'Ticketmaster',
            rating: 4.5,
            link: 'https://www.ticketmaster.com/'
        },
        {
            id: 2,
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Live_Nation_Entertainment_logo.svg/1200px-Live_Nation_Entertainment_logo.svg.png',
            name: 'Live Nation',
            rating: 4.3,
            link: 'https://www.livenation.com/'
        },
        {
            id: 3,
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/StubHub_logo.svg/1200px-StubHub_logo.svg.png',
            name: 'StubHub',
            rating: 4.0,
            link: 'https://www.stubhub.com/'
        },
        {
            id: 4,
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Eventbrite_Logo.svg/1200px-Eventbrite_Logo.svg.png',
            name: 'Eventbrite',
            rating: 4.2,
            link: 'https://www.eventbrite.com/'
        }
    ];

    // Render Featured Concerts
    const concertGrid = document.querySelector('.concert-grid');
    featuredConcerts.forEach(concert => {
        const concertCard = document.createElement('div');
        concertCard.className = 'concert-card';
        concertCard.innerHTML = `
            <div class="concert-image">
                <img src="${concert.image}" alt="${concert.title}">
            </div>
            <div class="concert-info">
                <span class="concert-date">${concert.date}</span>
                <h3 class="concert-title">${concert.title}</h3>
                <p class="concert-artist">${concert.artist}</p>
                <p class="concert-location"><i class="fas fa-map-marker-alt"></i> ${concert.location}</p>
                <a href="${concert.ticketLink}" target="_blank" class="cta-button">Get Tickets</a>
            </div>
        `;
        concertGrid.appendChild(concertCard);
    });

    // Render Upcoming Events
    const eventTimeline = document.querySelector('.event-timeline');
    upcomingEvents.forEach((event, index) => {
        const eventItem = document.createElement('div');
        eventItem.className = 'event-item';
        eventItem.innerHTML = `
            <div class="event-content">
                <p class="event-date">${event.date}</p>
                <h3 class="event-title">${event.title}</h3>
                <p>${event.description}</p>
            </div>
        `;
        eventTimeline.appendChild(eventItem);
    });

    // Render Popular Venues
    const venueGrid = document.querySelector('.venue-grid');
    popularVenues.forEach(venue => {
        const venueCard = document.createElement('div');
        venueCard.className = 'venue-card';
        venueCard.innerHTML = `
            <div class="venue-image">
                <img src="${venue.image}" alt="${venue.name}">
            </div>
            <div class="venue-info">
                <h3 class="venue-name">${venue.name}</h3>
                <p class="venue-location"><i class="fas fa-map-marker-alt"></i> ${venue.location}</p>
                <p><i class="fas fa-users"></i> Capacity: ${venue.capacity}</p>
            </div>
        `;
        venueGrid.appendChild(venueCard);
    });

    // Render Ticket Providers
    const providerGrid = document.querySelector('.provider-grid');
    ticketProviders.forEach(provider => {
        const providerCard = document.createElement('div');
        providerCard.className = 'provider-card';
        providerCard.innerHTML = `
            <div class="provider-logo">
                <img src="${provider.logo}" alt="${provider.name}">
            </div>
            <h3 class="provider-name">${provider.name}</h3>
            <div class="provider-rating">
                ${'★'.repeat(Math.floor(provider.rating))}${'☆'.repeat(5 - Math.floor(provider.rating))}
            </div>
            <a href="${provider.link}" target="_blank" class="cta-button">Visit Site</a>
        `;
        providerGrid.appendChild(providerCard);
    });

    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Newsletter Form Submission
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            if (emailInput.value) {
                alert('Thank you for subscribing to our newsletter!');
                emailInput.value = '';
            }
        });
    }

    // Animation on Scroll
    function animateOnScroll() {
        const elements = document.querySelectorAll('.concert-card, .venue-card, .provider-card, .event-item');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Set initial state for animation
    document.querySelectorAll('.concert-card, .venue-card, .provider-card, .event-item').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    window.addEventListener('load', animateOnScroll);
});