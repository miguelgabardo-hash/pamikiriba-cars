const vehicles = {
  cars: [
    { name: "Volt CyberSedan X", range: "850 km", speed: "320 km/h", power: "1.000 CV", price: "R$ 450.000" },
    { name: "AeroPulse GT", range: "700 km", speed: "290 km/h", power: "850 CV", price: "R$ 380.000" },
    { name: "Neon SUV Hyper", range: "900 km", speed: "260 km/h", power: "750 CV", price: "R$ 520.000" }
  ],
  bikes: [
    { name: "CyberTrack 3000", range: "400 km", speed: "240 km/h", power: "200 CV", price: "R$ 110.000" },
    { name: "PlasmaGlide Zero", range: "350 km", speed: "210 km/h", power: "160 CV", price: "R$ 95.000" }
  ]
};

function renderCards(category, elementId) {
  const container = document.getElementById(elementId);
  container.innerHTML = vehicles[category].map(item => `
    <div class="card">
      <h3>${item.name}</h3>
      <ul>
        <li>⚡ Autonomia: ${item.range}</li>
        <li>🏎️ Vel. Máxima: ${item.speed}</li>
        <li>🔋 Potência: ${item.power}</li>
      </ul>
      <div class="price">${item.price}</div>
    </div>
  `).join('');
}

function showCategory(category) {
  document.getElementById('cars').classList.add('hidden');
  document.getElementById('bikes').classList.add('hidden');
  document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));

  if (category === 'cars') {
    document.getElementById('cars').classList.remove('hidden');
    event.target.classList.add('active');
  } else {
    document.getElementById('bikes').classList.remove('hidden');
    event.target.classList.add('active');
  }
}

// Inicializa a renderização dos dados
renderCards('cars', 'cars-grid');
renderCards('bikes', 'bikes-grid');
