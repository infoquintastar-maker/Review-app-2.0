<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <title id="page-title">Solicitud de Reseña</title>
  <link rel="manifest" href="/manifest.json">
  <meta name="theme-color" content="#4F46E5">
  <meta name="mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="default">
  <meta name="apple-mobile-web-app-title" content="Reseñas">
  <link rel="apple-touch-icon" href="/icon.svg">
  <style>
    *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
      background: linear-gradient(160deg, #EEF2FF 0%, #F8FAFC 60%, #F0FDF4 100%);
      min-height: 100vh;
      min-height: 100dvh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 20px;
    }

    /* ── Card ── */
    .card {
      background: #fff;
      border-radius: 28px;
      padding: 40px 32px 36px;
      width: 100%;
      max-width: 420px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.06), 0 12px 40px rgba(79,70,229,0.10);
    }

    /* ── Logo circle ── */
    .logo {
      width: 76px;
      height: 76px;
      background: linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%);
      border-radius: 22px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 26px;
      font-weight: 800;
      color: #fff;
      margin: 0 auto 22px;
      letter-spacing: -1px;
      user-select: none;
    }

    /* ── Headings ── */
    .business-name {
      font-size: 22px;
      font-weight: 800;
      color: #1E293B;
      text-align: center;
      margin-bottom: 6px;
      letter-spacing: -0.3px;
    }
    .subtitle {
      font-size: 14px;
      color: #64748B;
      text-align: center;
      line-height: 1.55;
      margin-bottom: 28px;
    }

    /* ── Form ── */
    .form-group { margin-bottom: 16px; }

    label {
      display: block;
      font-size: 13px;
      font-weight: 600;
      color: #374151;
      margin-bottom: 7px;
      letter-spacing: 0.1px;
    }

    input[type="text"],
    input[type="tel"] {
      width: 100%;
      padding: 15px 16px;
      border: 2px solid #E2E8F0;
      border-radius: 14px;
      font-size: 16px;
      color: #1E293B;
      background: #F8FAFC;
      transition: border-color 0.18s, background 0.18s, box-shadow 0.18s;
      -webkit-appearance: none;
      outline: none;
    }
    input[type="text"]:focus,
    input[type="tel"]:focus {
      border-color: #4F46E5;
      background: #fff;
      box-shadow: 0 0 0 4px rgba(79,70,229,0.10);
    }
    input::placeholder { color: #94A3B8; }

    /* Phone row with prefix */
    .phone-row {
      display: flex;
      gap: 8px;
    }
    .phone-prefix {
      flex-shrink: 0;
      padding: 15px 14px;
      border: 2px solid #E2E8F0;
      border-radius: 14px;
      font-size: 15px;
      font-weight: 700;
      color: #374151;
      background: #F8FAFC;
      white-space: nowrap;
      user-select: none;
    }
    .phone-row input { flex: 1; }

    /* ── Submit button ── */
    .btn-submit {
      width: 100%;
      padding: 17px;
      background: linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%);
      color: #fff;
      border: none;
      border-radius: 14px;
      font-size: 16px;
      font-weight: 700;
      cursor: pointer;
      margin-top: 10px;
      transition: opacity 0.2s, transform 0.12s;
      -webkit-appearance: none;
      letter-spacing: 0.1px;
    }
    .btn-submit:active:not(:disabled) { transform: scale(0.975); }
    .btn-submit:disabled { opacity: 0.55; cursor: not-allowed; transform: none; }

    /* ── Error banner ── */
    .error-msg {
      background: #FEF2F2;
      color: #DC2626;
      border: 1px solid #FECACA;
      padding: 12px 14px;
      border-radius: 12px;
      font-size: 14px;
      margin-top: 12px;
      display: none;
      line-height: 1.45;
    }

    /* ── Success screen ── */
    .success-screen { display: none; text-align: center; }
    .success-icon {
      width: 84px;
      height: 84px;
      background: linear-gradient(135deg, #10B981 0%, #059669 100%);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 22px;
      font-size: 38px;
      animation: popIn 0.35s cubic-bezier(0.175,0.885,0.32,1.275) both;
    }
    @keyframes popIn {
      from { transform: scale(0.5); opacity: 0; }
      to   { transform: scale(1);   opacity: 1; }
    }
    .success-title {
      font-size: 24px;
      font-weight: 800;
      color: #1E293B;
      margin-bottom: 10px;
    }
    .success-msg {
      font-size: 15px;
      color: #64748B;
      line-height: 1.55;
      margin-bottom: 30px;
    }
    .btn-another {
      width: 100%;
      padding: 16px;
      background: #EEF2FF;
      color: #4F46E5;
      border: none;
      border-radius: 14px;
      font-size: 16px;
      font-weight: 700;
      cursor: pointer;
      transition: background 0.18s;
      -webkit-appearance: none;
    }
    .btn-another:active { background: #E0E7FF; }

    /* ── Loading skeleton ── */
    .skeleton {
      background: linear-gradient(90deg, #F1F5F9 25%, #E2E8F0 50%, #F1F5F9 75%);
      background-size: 200% 100%;
      animation: shimmer 1.4s infinite;
      border-radius: 10px;
      margin: 0 auto;
    }
    @keyframes shimmer {
      0%   { background-position: 200% 0; }
      100% { background-position: -200% 0; }
    }

    /* ── Not found ── */
    .notfound-screen { display: none; text-align: center; }
    .notfound-emoji { font-size: 52px; margin-bottom: 16px; }
    .notfound-title { font-size: 20px; font-weight: 700; color: #1E293B; margin-bottom: 8px; }
    .notfound-sub { font-size: 14px; color: #64748B; }

    /* ── Footer ── */
    .footer {
      margin-top: 20px;
      font-size: 12px;
      color: #94A3B8;
      text-align: center;
      letter-spacing: 0.2px;
    }
    .footer span { color: #A5B4FC; font-weight: 600; }
  </style>
</head>
<body>

<div class="card">

  <!-- LOADING -->
  <div id="loading-screen">
    <div class="skeleton" style="width:76px;height:76px;border-radius:22px;margin-bottom:22px;"></div>
    <div class="skeleton" style="width:55%;height:20px;margin-bottom:8px;"></div>
    <div class="skeleton" style="width:78%;height:14px;margin-bottom:4px;"></div>
    <div class="skeleton" style="width:65%;height:14px;margin-bottom:28px;"></div>
    <div class="skeleton" style="width:100%;height:48px;border-radius:14px;margin-bottom:16px;"></div>
    <div class="skeleton" style="width:100%;height:48px;border-radius:14px;margin-bottom:16px;"></div>
    <div class="skeleton" style="width:100%;height:52px;border-radius:14px;"></div>
  </div>

  <!-- FORM -->
  <div id="form-screen" style="display:none">
    <div class="logo" id="logo">??</div>
    <h1 class="business-name" id="business-name"></h1>
    <p class="subtitle">Introduce el nombre y teléfono del cliente<br>para enviarle la solicitud de reseña en Google.</p>

    <form id="contact-form" novalidate>
      <div class="form-group">
        <label for="contact-name">Nombre del cliente</label>
        <input type="text" id="contact-name" placeholder="Ej: María García" autocomplete="off" autocorrect="off" spellcheck="false" required>
      </div>

      <div class="form-group">
        <label for="contact-phone">Teléfono</label>
        <div class="phone-row">
          <span class="phone-prefix" id="phone-prefix">🇪🇸 +34</span>
          <input type="tel" id="contact-phone" placeholder="612 345 678" autocomplete="off" required>
        </div>
      </div>

      <div class="error-msg" id="error-msg"></div>

      <button type="submit" class="btn-submit" id="submit-btn">
        Enviar solicitud de reseña ✉️
      </button>
    </form>
  </div>

  <!-- SUCCESS -->
  <div id="success-screen" class="success-screen">
    <div class="success-icon">✓</div>
    <h2 class="success-title">¡Solicitud enviada!</h2>
    <p class="success-msg" id="success-detail">El mensaje de WhatsApp ha sido enviado. Tu cliente recibirá la solicitud en unos segundos.</p>
    <button class="btn-another" id="btn-another">+ Añadir otro cliente</button>
  </div>

  <!-- NOT FOUND -->
  <div id="notfound-screen" class="notfound-screen">
    <div class="notfound-emoji">🔍</div>
    <h2 class="notfound-title">Página no encontrada</h2>
    <p class="notfound-sub">Este enlace no es válido.<br>Contacta con tu proveedor para obtener el tuyo.</p>
  </div>

</div>

<p class="footer">Powered by <span>Quintastar</span></p>

<script>
  const slug = window.location.pathname.replace(/^\/+/, '').split('/')[0];
  let clientMeta = null;

  /* ── Boot ── */
  async function init() {
    if (!slug) { showNotFound(); return; }

    try {
      const res = await fetch('/api/client-info?id=' + encodeURIComponent(slug));
      if (!res.ok) { showNotFound(); return; }

      clientMeta = await res.json();

      // Populate UI
      const name = clientMeta.name || 'Tu negocio';
      document.getElementById('business-name').textContent = name;
      document.getElementById('page-title').textContent   = name + ' — Reseña Google';

      const initials = name.trim().split(/\s+/).slice(0, 2).map(w => w[0].toUpperCase()).join('');
      document.getElementById('logo').textContent = initials || '★';

      if (clientMeta.countryCode) {
        document.getElementById('phone-prefix').textContent = clientMeta.countryCode;
      }

      show('form-screen');
      hide('loading-screen');

    } catch (_) {
      showNotFound();
    }
  }

  /* ── Form submit ── */
  document.getElementById('contact-form').addEventListener('submit', async function (e) {
    e.preventDefault();

    const nameVal  = document.getElementById('contact-name').value.trim();
    const phoneRaw = document.getElementById('contact-phone').value.trim();

    if (!nameVal || !phoneRaw) return;

    // Format phone: strip spaces/dashes, prepend country code if missing
    const countryCode = (clientMeta && clientMeta.countryCode) ? clientMeta.countryCode.replace(/[^+\d]/g, '') : '+34';
    let phone = phoneRaw.replace(/[\s\-().]/g, '');
    if (!phone.startsWith('+')) {
      phone = phone.startsWith('0') ? countryCode + phone.slice(1) : countryCode + phone;
    }

    const btn      = document.getElementById('submit-btn');
    const errorDiv = document.getElementById('error-msg');

    btn.disabled        = true;
    btn.textContent     = 'Enviando…';
    errorDiv.style.display = 'none';

    try {
      const res  = await fetch('/api/create-contact', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ name: nameVal, phone, clientId: slug })
      });
      const data = await res.json();

      if (data.success) {
        document.getElementById('success-detail').textContent =
          'El mensaje de WhatsApp ha sido enviado a ' + nameVal + '. Recibirá la solicitud de reseña en unos segundos.';
        hide('form-screen');
        show('success-screen');
      } else {
        showError(data.error || 'Error al enviar. Inténtalo de nuevo.');
        btn.disabled    = false;
        btn.textContent = 'Enviar solicitud de reseña ✉️';
      }

    } catch (_) {
      showError('Error de conexión. Comprueba tu internet e inténtalo de nuevo.');
      btn.disabled    = false;
      btn.textContent = 'Enviar solicitud de reseña ✉️';
    }
  });

  /* ── Add another ── */
  document.getElementById('btn-another').addEventListener('click', function () {
    document.getElementById('contact-name').value  = '';
    document.getElementById('contact-phone').value = '';
    document.getElementById('error-msg').style.display = 'none';
    const btn = document.getElementById('submit-btn');
    btn.disabled    = false;
    btn.textContent = 'Enviar solicitud de reseña ✉️';
    hide('success-screen');
    show('form-screen');
    document.getElementById('contact-name').focus();
  });

  /* ── Helpers ── */
  function show(id) { document.getElementById(id).style.display = 'block'; }
  function hide(id) { document.getElementById(id).style.display = 'none';  }
  function showNotFound() {
    hide('loading-screen');
    show('notfound-screen');
  }
  function showError(msg) {
    const div = document.getElementById('error-msg');
    div.textContent    = msg;
    div.style.display  = 'block';
  }

  /* ── Service Worker ── */
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(() => {});
  }

  init();
</script>
</body>
</html>
