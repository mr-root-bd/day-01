const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Burger Animation
        burger.classList.toggle('toggle');
    });
}

const navbarScroll = () => {
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

const scrollReveal = () => {
    const sections = document.querySelectorAll('.section');
    
    // Add fade-in class initially
    sections.forEach(section => {
        section.classList.add('fade-in');
    });

    const appearOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(
        entries,
        appearOnScroll
    ) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('appear');
                appearOnScroll.unobserve(entry.target);
            }
        });
    },
    appearOptions);

    sections.forEach(section => {
        appearOnScroll.observe(section);
    });
}

const activeNavigation = () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links li a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });
}

const translations = {
    en: {
        title: "My Portfolio",
        nav_home: "Home",
        nav_about: "About",
        nav_skills: "Skills",
        nav_projects: "Projects",
        nav_contact: "Contact",
        hero_greeting: "Hello, I am",
        hero_name: "A Creative Developer",
        hero_tagline: "I build beautiful and interactive web experiences.",
        hero_btn_talk: "Let's Talk",
        hero_btn_work: "View Work",
        about_title: "About Me",
        about_p1: "I am a passionate web developer with a keen eye for modern design. I specialize in creating responsive, user-friendly, and visually stunning websites.",
        about_p2: "My goal is to translate ideas into digital realities that leave a lasting impression.",
        skills_title: "My Skills",
        skill_html_desc: "Semantic & Accessible structure",
        skill_css_desc: "Flexbox, Grid, Animations",
        skill_js_desc: "DOM manipulation, ES6+",
        skill_res_title: "Responsive Design",
        skill_res_desc: "Mobile-first approach",
        projects_title: "Featured Projects",
        proj1_title: "E-Commerce App",
        proj1_desc: "A modern shopping experience with smooth animations.",
        proj2_title: "Dashboard UI",
        proj2_desc: "Clean and analytical dashboard design.",
        proj3_title: "Landing Page",
        proj3_desc: "High-conversion landing page with glassmorphism.",
        btn_view_project: "View Project",
        contact_title: "Get In Touch",
        contact_desc: "Ready to start your next project with me? Let's connect and build something amazing together!",
        btn_email_me: "Email Me",
        footer_desc: "Building digital experiences that matter.",
        footer_quick_links: "Quick Links",
        footer_connect: "Connect",
        footer_copyright: "© 2026 My Portfolio. All rights reserved."
    },
    bn: {
        title: "আমার পোর্টফোলিও",
        nav_home: "হোম",
        nav_about: "আমার সম্পর্কে",
        nav_skills: "দক্ষতা",
        nav_projects: "প্রোজেক্টস",
        nav_contact: "যোগাযোগ",
        hero_greeting: "হ্যালো, আমি",
        hero_name: "একজন ক্রিয়েটিভ ডেভেলপার",
        hero_tagline: "আমি সুন্দর এবং ইন্টারঅ্যাকটিভ ওয়েব অভিজ্ঞতা তৈরি করি।",
        hero_btn_talk: "কথা বলি",
        hero_btn_work: "কাজ দেখুন",
        about_title: "আমার সম্পর্কে",
        about_p1: "আমি একজন ওয়েব ডেভেলপার, আধুনিক ডিজাইনের প্রতি আমার বিশেষ নজর রয়েছে। রেসপন্সিভ, ইউজার-ফ্রেন্ডলি এবং দৃষ্টিনন্দন ওয়েবসাইট তৈরিতে আমি পারদর্শী।",
        about_p2: "আমার লক্ষ্য হলো আপনার ধারণাকে একটি ডিজিটাল বাস্তবতায় রূপ দেওয়া, যা একটি দীর্ঘস্থায়ী ছাপ রেখে যাবে।",
        skills_title: "আমার দক্ষতা",
        skill_html_desc: "সিম্যান্টিক ও অ্যাক্সেসিবল স্ট্রাকচার",
        skill_css_desc: "ফ্লেক্সবক্স, গ্রিড, অ্যানিমেশন",
        skill_js_desc: "ডম ম্যানিপুলেশন, ইএস৬+",
        skill_res_title: "রেসপন্সিভ ডিজাইন",
        skill_res_desc: "মোবাইল-ফার্স্ট অ্যাপ্রোচ",
        projects_title: "আমার কিছু কাজ",
        proj1_title: "ই-কমার্স অ্যাপ",
        proj1_desc: "স্মুথ অ্যানিমেশন সহ একটি আধুনিক শপিং অভিজ্ঞতা।",
        proj2_title: "ড্যাশবোর্ড ইউআই",
        proj2_desc: "পরিষ্কার এবং অ্যানালিটিকাল ড্যাশবোর্ড ডিজাইন।",
        proj3_title: "ল্যান্ডিং পেজ",
        proj3_desc: "গ্লাসমরফিজম সহ হাই-কনভার্শন ল্যান্ডিং পেজ।",
        btn_view_project: "প্রোজেক্ট দেখুন",
        contact_title: "যোগাযোগ করুন",
        contact_desc: "আমার সাথে আপনার পরবর্তী প্রোজেক্ট শুরু করতে প্রস্তুত? চলুন একসাথে চমৎকার কিছু তৈরি করি!",
        btn_email_me: "ইমেইল করুন",
        footer_desc: "এমন ডিজিটাল অভিজ্ঞতা তৈরি করি যা সবার কাজে লাগে।",
        footer_quick_links: "কুইক লিংক",
        footer_connect: "কানেক্ট করুন",
        footer_copyright: "© ২০২৬ আমার পোর্টফোলিও। সর্বস্বত্ব সংরক্ষিত।"
    }
};

let currentLang = 'en';

const toggleLanguage = () => {
    const langBtn = document.getElementById('lang-toggle');
    langBtn.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'bn' : 'en';
        langBtn.innerText = currentLang === 'en' ? 'বাং' : 'EN';
        
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[currentLang][key]) {
                if (element.tagName.toLowerCase() === 'title') {
                    document.title = translations[currentLang][key];
                } else {
                    element.innerText = translations[currentLang][key];
                }
            }
        });
    });
};

// Initialize all functions
const init = () => {
    navSlide();
    navbarScroll();
    scrollReveal();
    activeNavigation();
    toggleLanguage();
}

init();
