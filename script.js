// script.js

// Translation strings for three languages
const translations = {
  de: {
    slogan: 'Dein Partner für AI Business Bots',
    hero_title: 'Starte dein AI Business – mit Fabo Business Bots.',
    hero_subtitle: 'Erstelle Content, gewinne Kunden und baue dir ein digitales Einkommen auf – ohne Vorkenntnisse.',
    btn_free_trial: 'Jetzt 7 Tage gratis testen',
    social_users: 'Über 100 aktive User',
    social_leads: 'Täglich neue Leads',
    social_meta: 'Geprüfte Meta-Strategien',
    problem_title: 'Dein Problem: Kein Sichtbarkeit – keine Kunden – zu viel Zeitverlust.',
    problem_subtitle: 'Unsere AI Business Bots erstellen Content, optimieren dein Profil und bringen Kunden automatisch auf dich zu.',
    features_title: 'Unsere Features',
    feature_content_title: 'Content‑Bot',
    feature_content_desc: 'Schreibt Meta‑konforme Posts & Reels',
    feature_sales_title: 'Sales‑Bot',
    feature_sales_desc: 'Trainiert deine Abschlüsse',
    feature_auto_title: 'Automation‑Agent',
    feature_auto_desc: 'Spart dir Zeit & Arbeit',
    feature_community_title: 'Community',
    feature_community_desc: 'Zugang zu Support & Tipps',
    btn_test_free: 'Teste jetzt kostenlos',
    challenge_title: 'Teste uns 7 Tage gratis!',
    challenge_subtitle: 'Ohne Kaufverpflichtung. Lerne die Bots in der Praxis kennen.',
    btn_start_challenge: 'Challenge starten',
    pricing_title: 'Preise',
    price_test_title: '7 Tage Test',
    price_test_price: 'GRATIS',
    price_test_benefit1: 'Volle Nutzung während des Tests',
    price_test_benefit2: 'Keine Kreditkarte nötig',
    price_test_benefit3: 'Sofort starten',
    price_lifetime_title: 'Lifetime‑Zugang',
    price_lifetime_price: 'Preis später eintragen',
    price_lifetime_benefit1: 'Einmalige Zahlung',
    price_lifetime_benefit2: 'Zugriff auf alle zukünftigen Updates',
    price_lifetime_benefit3: 'Exklusiver Support',
    btn_secure: 'Jetzt sichern',
    faq_title: 'Häufige Fragen',
    faq_q1: 'Brauche ich Vorkenntnisse?',
    faq_a1: 'Nein, jeder kann starten.',
    faq_q2: 'Muss ich Videos machen?',
    faq_a2: 'Nein, Fabo Bots arbeiten auch ohne dein Gesicht.',
    faq_q3: 'Wie funktioniert die Bezahlung?',
    faq_a3: 'PayPal, Klarna, Kreditkarte.',
    final_title: 'Transformiere jetzt dein Leben mit AI Business Bots.',
    contact_title: 'Kontakt',
    contact_name_label: 'Name',
    contact_email_label: 'E‑Mail',
    contact_whatsapp_label: 'WhatsApp (optional)',
    contact_submit: 'Absenden',
    footer_rights: 'Alle Rechte vorbehalten.'
  },
  en: {
    slogan: 'Your partner for AI business bots',
    hero_title: 'Start your AI business – with Fabo Business Bots.',
    hero_subtitle: 'Create content, win customers and build your digital income – without prior knowledge.',
    btn_free_trial: 'Try 7 days for free',
    social_users: 'Over 100 active users',
    social_leads: 'Daily new leads',
    social_meta: 'Verified meta strategies',
    problem_title: 'Your problem: No visibility – no customers – too much time lost.',
    problem_subtitle: 'Our AI business bots create content, optimise your profile and automatically bring customers to you.',
    features_title: 'Our Features',
    feature_content_title: 'Content Bot',
    feature_content_desc: 'Writes meta‑compliant posts & reels',
    feature_sales_title: 'Sales Bot',
    feature_sales_desc: 'Trains your closing',
    feature_auto_title: 'Automation Agent',
    feature_auto_desc: 'Saves you time & work',
    feature_community_title: 'Community',
    feature_community_desc: 'Access to support & tips',
    btn_test_free: 'Test now for free',
    challenge_title: 'Test us for free for 7 days!',
    challenge_subtitle: 'No purchase obligation. Get to know the bots in practice.',
    btn_start_challenge: 'Start challenge',
    pricing_title: 'Pricing',
    price_test_title: '7‑Day Trial',
    price_test_price: 'FREE',
    price_test_benefit1: 'Full access during trial',
    price_test_benefit2: 'No credit card needed',
    price_test_benefit3: 'Start immediately',
    price_lifetime_title: 'Lifetime Access',
    price_lifetime_price: 'Price to be added later',
    price_lifetime_benefit1: 'One‑time payment',
    price_lifetime_benefit2: 'Access to all future updates',
    price_lifetime_benefit3: 'Exclusive support',
    btn_secure: 'Secure now',
    faq_title: 'Frequently Asked Questions',
    faq_q1: 'Do I need prior knowledge?',
    faq_a1: 'No, anyone can start.',
    faq_q2: 'Do I have to make videos?',
    faq_a2: 'No, Fabo bots work even without your face.',
    faq_q3: 'How does the payment work?',
    faq_a3: 'PayPal, Klarna, credit card.',
    final_title: 'Transform your life now with AI business bots.',
    contact_title: 'Contact',
    contact_name_label: 'Name',
    contact_email_label: 'Email',
    contact_whatsapp_label: 'WhatsApp (optional)',
    contact_submit: 'Send',
    footer_rights: 'All rights reserved.'
  },
  es: {
    slogan: 'Tu socio para bots de negocios de IA',
    hero_title: 'Inicia tu negocio de IA – con Fabo Business Bots.',
    hero_subtitle: 'Crea contenido, gana clientes y construye tu ingreso digital – sin conocimientos previos.',
    btn_free_trial: 'Prueba 7 días gratis',
    social_users: 'Más de 100 usuarios activos',
    social_leads: 'Nuevos leads diariamente',
    social_meta: 'Estrategias de Meta verificadas',
    problem_title: 'Tu problema: Sin visibilidad – sin clientes – demasiada pérdida de tiempo.',
    problem_subtitle: 'Nuestros bots de negocios de IA crean contenido, optimizan tu perfil y traen clientes automáticamente.',
    features_title: 'Nuestros Features',
    feature_content_title: 'Bot de contenido',
    feature_content_desc: 'Escribe publicaciones y reels compatibles con Meta',
    feature_sales_title: 'Bot de ventas',
    feature_sales_desc: 'Entrena tus cierres',
    feature_auto_title: 'Agente de automatización',
    feature_auto_desc: 'Te ahorra tiempo y trabajo',
    feature_community_title: 'Comunidad',
    feature_community_desc: 'Acceso a soporte y consejos',
    btn_test_free: 'Prueba gratis ahora',
    challenge_title: '¡Pruébanos gratis por 7 días!',
    challenge_subtitle: 'Sin obligación de compra. Conoce los bots en la práctica.',
    btn_start_challenge: 'Iniciar reto',
    pricing_title: 'Precios',
    price_test_title: 'Prueba de 7 días',
    price_test_price: 'GRATIS',
    price_test_benefit1: 'Uso completo durante la prueba',
    price_test_benefit2: 'No se necesita tarjeta de crédito',
    price_test_benefit3: 'Empieza de inmediato',
    price_lifetime_title: 'Acceso de por vida',
    price_lifetime_price: 'Precio se añadirá más tarde',
    price_lifetime_benefit1: 'Pago único',
    price_lifetime_benefit2: 'Acceso a todas las actualizaciones futuras',
    price_lifetime_benefit3: 'Soporte exclusivo',
    btn_secure: 'Asegurar ahora',
    faq_title: 'Preguntas frecuentes',
    faq_q1: '¿Necesito conocimientos previos?',
    faq_a1: 'No, cualquiera puede empezar.',
    faq_q2: '¿Tengo que hacer videos?',
    faq_a2: 'No, los bots Fabo funcionan también sin tu cara.',
    faq_q3: '¿Cómo funciona el pago?',
    faq_a3: 'PayPal, Klarna, tarjeta de crédito.',
    final_title: 'Transforma tu vida ahora con bots de negocios de IA.',
    contact_title: 'Contacto',
    contact_name_label: 'Nombre',
    contact_email_label: 'Correo electrónico',
    contact_whatsapp_label: 'WhatsApp (opcional)',
    contact_submit: 'Enviar',
    footer_rights: 'Todos los derechos reservados.'
  }
};

/**
 * Apply translations to all elements with the data-i18n attribute.
 * @param {string} lang - The selected language key (de, en, es)
 */
function applyTranslations(lang) {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach((el) => {
    const key = el.getAttribute('data-i18n');
    const translation = translations[lang][key];
    if (translation) {
      el.textContent = translation;
    }
  });
  // Update placeholders for inputs
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const whatsappInput = document.getElementById('whatsapp');
  if (nameInput) nameInput.placeholder = translations[lang]['contact_name_label'];
  if (emailInput) emailInput.placeholder = translations[lang]['contact_email_label'];
  if (whatsappInput) whatsappInput.placeholder = translations[lang]['contact_whatsapp_label'];
  // Update HTML lang attribute
  document.documentElement.lang = lang;
}

/**
 * Initialise event listeners for language switching and FAQ accordion.
 */
function init() {
  // Set current year
  document.getElementById('current-year').textContent = new Date().getFullYear();

  // Language selector
  const langSelect = document.getElementById('language-select');
  if (langSelect) {
    langSelect.addEventListener('change', (e) => {
      const selectedLang = e.target.value;
      applyTranslations(selectedLang);
    });
  }
  // Apply default language
  applyTranslations(langSelect ? langSelect.value : 'de');

  // FAQ accordion handling
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach((btn) => {
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', !expanded);
      const answer = btn.nextElementSibling;
      if (answer) {
        answer.hidden = expanded;
      }
    });
  });
}

// Initialise after DOM is ready
document.addEventListener('DOMContentLoaded', init);