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
