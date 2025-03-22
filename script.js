document.getElementById('price').addEventListener('input', function () {
    document.getElementById('price-value').textContent = this.value + ' ₽';
});

document.getElementById('filter-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Фильтры применены! (Здесь можно добавить обработку данных)');
});

document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;

    console.log('Имя:', name);
    console.log('Телефон:', phone);
    console.log('Email:', email);

    alert('Спасибо! Мы скоро свяжемся с вами.');
});