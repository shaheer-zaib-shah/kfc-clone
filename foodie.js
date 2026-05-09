// ───── CAROUSEL ─────
const slides = document.querySelectorAll('.slide');
const track = document.getElementById('track');
const dotsContainer = document.getElementById('dots');
let current = 0;
let timer;

slides.forEach((_, i) => {
  const d = document.createElement('button');
  d.className = 'dot' + (i === 0 ? ' active' : '');
  d.onclick = () => { goTo(i); resetTimer(); };
  dotsContainer.appendChild(d);
});

function goTo(n) {
  current = (n + slides.length) % slides.length;
  track.style.transform = `translateX(-${current * 100}%)`;
  document.querySelectorAll('.dot').forEach((d, i) => d.classList.toggle('active', i === current));
}

function move(dir) { goTo(current + dir); resetTimer(); }

function resetTimer() {
  clearInterval(timer);
  timer = setInterval(() => move(1), 3000);
}

resetTimer();


// ───── POPUPS ─────
const menuItems = {
  krunchBurger: {
    name: 'Krunch Burger',
    description: 'A crispy fried chicken fillet in a sesame bun with lettuce and mayo.',
    price: 'Rs. 310'
  },
  krunchCombo: {
    name: 'Krunch Combo',
    description: 'Krunch Burger with regular fries and a regular drink.',
    price: 'Rs. 420'
  },
  chickenChips: {
    name: 'Chicken & Chips',
    description: '2 pieces of hot and crispy fried chicken with fries, dinner roll, and sauce.',
    price: 'Rs. 530'
  },
  hotWingsBucket: {
    name: 'Hot Wings Bucket',
    description: '9 pieces of fiery hot wings, perfectly spiced and crispy.',
    price: 'Rs. 640'
  },
  zingerDeal1: {
    name: 'Zinger Stacker Deal',
    description: '1 Zinger Stacker + 1 Regular fries + 1 Regular drink.',
    price: 'Rs. 850'
  },
  zingerDeal2: {
    name: 'Zinger Combo Deal',
    description: '1 Zinger Burger + 1 Regular fries + 1 Regular drink.',
    price: 'Rs. 750'
  },
  zingerDeal3: {
    name: 'Family Deal',
    description: '2 Zinger Burgers + 2 Regular fries + 2 Regular drinks.',
    price: 'Rs. 1400'
  }
};

function openPopup(itemKey) {
  const item = menuItems[itemKey];
  if (!item) return;

  document.getElementById('popup-title').textContent = item.name;
  document.getElementById('popup-description').textContent = item.description;
  document.getElementById('popup-price').textContent = 'Price: ' + item.price;

  const popup = document.getElementById('mainPopup');
  popup.style.display = 'flex';
}

function closePopup() {
  document.getElementById('mainPopup').style.display = 'none';
}