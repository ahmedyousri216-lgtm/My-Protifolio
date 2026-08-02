const container = document.getElementById('particles-container');

// قائمة موسعة ومتباينة من التقنيات والعلامات البرمجية
const techWords = [
  { text: 'HTML5', class: 'html-text' },
  { text: '</>', class: 'html-text' },
  { text: '<div/>', class: 'html-text' },
  { text: '<span>', class: 'html-text' },
  { text: '<p>', class: 'html-text' },
  { text: 'CSS3', class: 'css-text' },
  { text: '{ }', class: 'css-text' },
  { text: '#ID', class: 'css-text' },
  { text: '.class', class: 'css-text' },
  { text: ':hover', class: 'css-text' },
  { text: 'JS', class: 'js-text' },
  { text: '()=>', class: 'js-text' },
  { text: 'const', class: 'js-text' },
  { text: 'let', class: 'js-text' },
  { text: 'async', class: 'js-text' },
  { text: 'await', class: 'js-text' }
];

const animations = ['floatUp', 'floatDown', 'floatRight', 'floatLeft'];

function createParticle() {
  const el = document.createElement('div');
  
  // اختيار كلمة وعنصر عشوائي
  const randomTech = techWords[Math.floor(Math.random() * techWords.length)];
  el.innerHTML = randomTech.text;
  el.className = `particle ${randomTech.class}`;

  // اختيار اتجاه حركة عشوائي
  const animDirection = animations[Math.floor(Math.random() * animations.length)];

  // توزيع عشوائي على المحاور
  if (animDirection === 'floatUp' || animDirection === 'floatDown') {
    el.style.left = `${Math.random() * 98}vw`;
  } else {
    el.style.top = `${Math.random() * 98}vh`;
  }

  // أحجام عشوائية متنوعة (من صغير لكبير)
  const size = Math.random() * 2.2 + 1.0; 
  el.style.fontSize = `${size}rem`;

  // زمن الحركة
  const duration = Math.random() * 15 + 10;
  
  // التأخير بالسالب عشان الحركة تبدأ شغالة فوراً أول ما تفتح
  const negativeDelay = -(Math.random() * duration);

  el.style.animation = `${animDirection} ${duration}s linear infinite`;
  el.style.animationDelay = `${negativeDelay}s`;

  container.appendChild(el);
}

// زيادة العدد لـ 100 عنصر لخلفية مليانة ومبهرة
const TOTAL_PARTICLES = 100;
for (let i = 0; i < TOTAL_PARTICLES; i++) {
  createParticle();
}




// التحكم في فتح وإغلاق قائمة الموبايل (Dropdown Menu)
const mobileToggle = document.getElementById('mobileToggle');
const navLinks = document.getElementById('navLinks');

if (mobileToggle && navLinks) {
  mobileToggle.addEventListener('click', () => {
    mobileToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  // قفل القائمة أوتوماتيكياً لما تضغط على أي رابط جوه القائمة
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      mobileToggle.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });
}




// ==========================================
// 1. أنيميشن الكتابة المزدوجة (الاسم والتايتل)
// ==========================================

// أنيميشن الاسم (Ahmed Yusry)
const nameElement = document.getElementById('typing-name');
const nameText = "Ahmed Yousri";
let nameIndex = 0;
let isNameDeleting = false;

function typeName() {
  if (!nameElement) return;

  if (isNameDeleting) {
    nameElement.textContent = nameText.substring(0, nameIndex - 1);
    nameIndex--;
  } else {
    nameElement.textContent = nameText.substring(0, nameIndex + 1);
    nameIndex++;
  }

  let speed = isNameDeleting ? 60 : 120;

  if (!isNameDeleting && nameIndex === nameText.length) {
    speed = 2500; // توقف بعد اكتمال كتابة الاسم
    isNameDeleting = true;
  } else if (isNameDeleting && nameIndex === 0) {
    isNameDeleting = false;
    speed = 500;
  }

  setTimeout(typeName, speed);
}

// أنيميشن التايتل (Front-End Developer)
const titleElement = document.getElementById('typing-title');
const titleText = "Front-End Developer";
let titleIndex = 0;
let isTitleDeleting = false;

function typeTitle() {
  if (!titleElement) return;

  if (isTitleDeleting) {
    titleElement.textContent = titleText.substring(0, titleIndex - 1);
    titleIndex--;
  } else {
    titleElement.textContent = titleText.substring(0, titleIndex + 1);
    titleIndex++;
  }

  let speed = isTitleDeleting ? 50 : 100;

  if (!isTitleDeleting && titleIndex === titleText.length) {
    speed = 2000; // توقف بعد اكتمال التايتل
    isTitleDeleting = true;
  } else if (isTitleDeleting && titleIndex === 0) {
    isTitleDeleting = false;
    speed = 600;
  }

  setTimeout(typeTitle, speed);
}

// ==========================================
// 2. تجميع المربعات وإخفاء الفواصل
// ==========================================
function initPuzzleImage() {
  const grid = document.getElementById('puzzleGrid');
  if (!grid) return;

  grid.innerHTML = '';
  const rows = 3;
  const cols = 3;

  const entryDirections = [
    { x: -500, y: -500 },
    { x: 0,    y: -600 },
    { x: 500,  y: -500 },
    { x: -600, y: 0 },
    { x: 0,    y: 0 },
    { x: 600,  y: 0 },
    { x: -500, y: 500 },
    { x: 0,    y: 600 },
    { x: 500,  y: 500 }
  ];

  let pieceIdx = 0;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const piece = document.createElement('div');
      piece.classList.add('puzzle-piece');

      const posX = (c / 2) * 100;
      const posY = (r / 2) * 100;
      piece.style.backgroundPosition = `${posX}% ${posY}%`;

      const dir = entryDirections[pieceIdx];
      const randomRotate = (Math.random() - 0.5) * 360;

      piece.style.transform = `translate(${dir.x}px, ${dir.y}px) rotate(${randomRotate}deg) scale(0.2)`;
      piece.style.opacity = '0';

      grid.appendChild(piece);
      pieceIdx++;
    }
  }

  setTimeout(() => {
    const pieces = document.querySelectorAll('.puzzle-piece');
    pieces.forEach((piece) => {
      piece.style.transform = 'translate(0, 0) rotate(0deg) scale(1)';
      piece.style.opacity = '1';
    });

    setTimeout(() => {
      grid.classList.add('merged');
    }, 1800);

  }, 300);
}

window.addEventListener('DOMContentLoaded', () => {
  typeName();
  typeTitle();
  initPuzzleImage();
});

// ==========================================
// ScrollSpy - ربط About و Education بزرار About في Navbar
// ==========================================
const sections = document.querySelectorAll('section');
const navLinksList = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let currentSection = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.clientHeight;
    
    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      currentSection = section.getAttribute('id');
    }
  });

  // إذا كان المستخدم في سكشن Education نعتبره تبع About
  let activeTarget = currentSection;
  if (currentSection === 'education') {
    activeTarget = 'about';
  }

  navLinksList.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${activeTarget}`) {
      link.classList.add('active');
      
      // أول ما تدخل في منطقة الـ About يبدأ الـ Terminal يكتب فوراً
      if (activeTarget === 'about') {
        startTerminalTyping();
      }
    }
  });
});
// ==========================================
// 2. Terminal Typewriter Animation (حرف بحرف)
// ==========================================
const terminalLinesData = [
  { type: 'cmd', prompt: 'Ahmed@portfolio:~$ ', text: 'whoami' },
  { type: 'styled', html: '<span class="line-name">Hi, I\'m Ahmed Yousry</span>' },
  { type: 'styled', html: '<span class="line-role">Front-End Developer</span>' },
  { type: 'styled', html: '<span class="line-desc">I create modern and responsive websites</span>' },
  { 
    type: 'skills', 
    items: [
      { text: 'HTML', class: 'skill-html' },
      { text: ' • ', class: 'skill-bullet' },
      { text: 'CSS', class: 'skill-css' },
      { text: ' • ', class: 'skill-bullet' },
      { text: 'JavaScript', class: 'skill-js' }
    ] 
  }
];

let hasTypedTerminal = false;

function startTerminalTyping() {
  const terminalBody = document.getElementById('terminalBody');
  if (!terminalBody || hasTypedTerminal) return;

  hasTypedTerminal = true; // عشان تتكتب مرة واحدة بس وتثبت
  terminalBody.innerHTML = '';

  let lineIdx = 0;

  function typeNextLine() {
    if (lineIdx >= terminalLinesData.length) {
      // إضافه كرسر الإدخال النهائى الثابت
      const finalCursor = document.createElement('div');
      finalCursor.className = 'term-line show';
      finalCursor.innerHTML = `<span class="term-prompt">Ahmed@portfolio:~$</span> <span class="term-cursor"></span>`;
      terminalBody.appendChild(finalCursor);
      return;
    }

    const currentData = terminalLinesData[lineIdx];
    const lineDiv = document.createElement('div');
    lineDiv.className = 'term-line show';
    terminalBody.appendChild(lineDiv);

    // الحالة 1: السطر الأول (الـ Command)
    if (currentData.type === 'cmd') {
      const promptSpan = document.createElement('span');
      promptSpan.className = 'term-prompt';
      promptSpan.textContent = currentData.prompt;
      lineDiv.appendChild(promptSpan);

      const cmdSpan = document.createElement('span');
      cmdSpan.className = 'term-cmd';
      lineDiv.appendChild(cmdSpan);

      let charIdx = 0;
      const timer = setInterval(() => {
        cmdSpan.textContent += currentData.text[charIdx];
        charIdx++;
        if (charIdx === currentData.text.length) {
          clearInterval(timer);
          lineIdx++;
          setTimeout(typeNextLine, 350);
        }
      }, 60);

    // الحالة 2: السطور الملونة المنسقة (Name, Role, Desc)
    } else if (currentData.type === 'styled') {
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = currentData.html;
      const targetElement = tempDiv.firstElementChild;
      
      const fullText = targetElement.textContent;
      targetElement.textContent = ''; // تفريغ لنكتب حرف بحرف
      lineDiv.appendChild(targetElement);

      let charIdx = 0;
      const timer = setInterval(() => {
        targetElement.textContent += fullText[charIdx];
        charIdx++;
        if (charIdx === fullText.length) {
          clearInterval(timer);
          lineIdx++;
          setTimeout(typeNextLine, 350);
        }
      }, 45);

    // الحالة 3: سطر المهارات (HTML, CSS, JS بألوان مختلفة)
    } else if (currentData.type === 'skills') {
      let itemIdx = 0;

      function typeSkillItem() {
        if (itemIdx >= currentData.items.length) {
          lineIdx++;
          setTimeout(typeNextLine, 350);
          return;
        }

        const skillData = currentData.items[itemIdx];
        const span = document.createElement('span');
        span.className = skillData.class;
        lineDiv.appendChild(span);

        let charIdx = 0;
        const timer = setInterval(() => {
          span.textContent += skillData.text[charIdx];
          charIdx++;
          if (charIdx === skillData.text.length) {
            clearInterval(timer);
            itemIdx++;
            setTimeout(typeSkillItem, 80);
          }
        }, 50);
      }

      typeSkillItem();
    }
  }

  typeNextLine();
}



// ==========================================
// Git Timeline Reveal Animation on Scroll
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  const commitItems = document.querySelectorAll('.git-commit-item');

  if (commitItems.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.2 });

    commitItems.forEach(item => observer.observe(item));
  }
});

// ==========================================
// Big Circular Spinner & Scale-Up Orbit Logic
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  const spinnerCore = document.getElementById('spinnerCore');
  const spinnerSystem = document.querySelector('.spinner-system');
  const orbitContainer = document.getElementById('orbitContainer');
  let isSpinning = false;
  let currentRotation = 0;

  if (spinnerCore) {
    spinnerCore.addEventListener('click', () => {
      if (isSpinning) return;
      isSpinning = true;

      // 1. تشغيل اللف السريع للدايرة الرئيسية
      spinnerCore.classList.add('spinning');
      currentRotation += 1440; // 4 دورات كاملة
      orbitContainer.style.transform = `rotate(${currentRotation}deg)`;

      // 2. إظهار وتكبير دواير المهارات تدريجياً أثناء الاستقرار
      setTimeout(() => {
        spinnerSystem.classList.add('active');
        spinnerCore.classList.remove('spinning');
        spinnerCore.querySelector('.core-content span').innerText = 'RE-SPIN';
        isSpinning = false;
      }, 700);
    });
  }
});

// ==========================================
// Projects Dynamic Slider Logic
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  const track = document.getElementById('projectsTrack');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  
  if (!track || !prevBtn || !nextBtn) return;

  const cards = track.querySelectorAll('.project-card');
  let currentIndex = 0;

  // معرفة عدد الكروت الظاهرة حسب حجم الشاشة
  function getVisibleCardsCount() {
    return window.innerWidth <= 768 ? 1 : 3;
  }

  // تحديث موقع الـ Slider وإغلاق/تفعيل الزراير
  function updateSlider() {
    const visibleCards = getVisibleCardsCount();
    const maxIndex = cards.length - visibleCards;

    // التأكد إن الـ index جوة الحدود
    if (currentIndex < 0) currentIndex = 0;
    if (currentIndex > maxIndex) currentIndex = maxIndex < 0 ? 0 : maxIndex;

    // حساب المسافة بالتحريك
    const cardWidth = cards[0].getBoundingClientRect().width;
    const gap = 20; // نفس الـ gap اللي في الـ CSS
    const moveAmount = (cardWidth + gap) * currentIndex;

    track.style.transform = `translateX(-${moveAmount}px)`;

    // تعطيل الزراير عند الوصول للبداية أو النهاية
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex >= maxIndex;
  }

  // Event Listeners للزراير
  nextBtn.addEventListener('click', () => {
    const visibleCards = getVisibleCardsCount();
    const maxIndex = cards.length - visibleCards;
    if (currentIndex < maxIndex) {
      currentIndex++;
      updateSlider();
    }
  });

  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlider();
    }
  });

  // إعادة ضبط السلايدر عند تغيير حجم الشاشة (Resize)
  window.addEventListener('resize', updateSlider);

  // التشغيل الأولي
  updateSlider();
});
