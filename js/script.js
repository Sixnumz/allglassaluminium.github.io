document.addEventListener('DOMContentLoaded', () => {
    // โค้ดสำหรับ slider
    const slides = document.querySelectorAll('.slide');
    if (slides.length > 0) {
        let currentSlide = 0;

        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.toggle('active', i === index);
            });
        }

        document.querySelector('.next').addEventListener('click', () => {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        });

        document.querySelector('.prev').addEventListener('click', () => {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(currentSlide);
        });

        setInterval(() => {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }, 5000);
    }

    // โค้ดสำหรับปุ่ม Back to Top (ถ้ามีการใช้งาน)
    const backToTopButton = document.querySelector('.back-to-top');
    if (backToTopButton) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopButton.classList.add('show');
            } else {
                backToTopButton.classList.remove('show');
            }
        });
    }

    // โค้ดสำหรับป๊อปอัพ (ถ้ามีการใช้งานใน index.html)
    const popup = document.getElementById('welcomePopup');
    if (popup) {
        popup.classList.add('show');
    }

    // เพิ่มโค้ดสำหรับ Hamburger Menu
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // เพิ่มการปิดเมนูเมื่อคลิกที่ลิงก์ในเมนู (ถ้าต้องการ)
        const navLinks = document.querySelectorAll('.nav-menu ul li a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function closePopup() {
    const popup = document.getElementById('welcomePopup');
    if (popup) {
        popup.classList.remove('show');
    }
}