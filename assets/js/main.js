document.addEventListener('DOMContentLoaded', function() {
    // Tab switching
    const tabBtns = document.querySelectorAll('.tab-btn');
    const sections = document.querySelectorAll('.section');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons and sections
            tabBtns.forEach(btn => btn.classList.remove('active'));
            sections.forEach(section => section.classList.remove('active'));
            
            // Add active class to clicked button and corresponding section
            this.classList.add('active');
            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Theme switching
    const themeBtns = document.querySelectorAll('.theme-btn');
    const body = document.body;
    
    themeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            themeBtns.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const theme = this.getAttribute('data-theme');
            if (theme === 'dark') {
                body.classList.add('dark-theme');
            } else {
                body.classList.remove('dark-theme');
            }
        });
    });
    
    // Animated counting for stat numbers
    const statNumbers = document.querySelectorAll('.stat-number');
    
    function animateValue(element, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            element.textContent = Math.floor(progress * (end - start) + start);
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }
    
    // Observe when stat numbers come into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const finalValue = parseInt(target.getAttribute('data-count'));
                animateValue(target, 0, finalValue, 1500);
                observer.unobserve(target);
            }
        });
    }, { threshold: 0.5 });
    
    statNumbers.forEach(statNumber => {
        observer.observe(statNumber);
    });
    
    // Animate skill progress bars
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const level = target.getAttribute('data-level') + '%';
                target.style.width = level;
                skillObserver.unobserve(target);
            }
        });
    }, { threshold: 0.5 });
    
    skillBars.forEach(bar => {
        skillObserver.observe(bar);
    });
    
    // Set current year
    document.getElementById('current-year').textContent = new Date().getFullYear();
});