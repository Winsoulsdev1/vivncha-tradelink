/* VIVNCHA TRADELINK site script
   1) CONFIG: add your real contact details below before launch.
   2) Route chart, EN/FR switch, request form, small UI helpers. */
(function () {
  'use strict';

  /* ------------------------------------------------------------------
     CONFIG: fill these in when you have official contacts.
     whatsapp / phone: digits only with country code and no plus sign.
       Nigeria example:  "2348012345678"
       Cameroon example: "237670123456"
     email: one shared address, e.g. "hello@vivncha.com"
  ------------------------------------------------------------------ */
  var CONFIG = {
    nigeria:  { whatsapp: '2349130627542', phone: '2349130627542' },
    cameroon: { whatsapp: '237650820523', phone: '237650820523' },
    email: ''
  };

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  /* ---------------------- strings used by script ---------------------- */
  var EN = {
    'm.aba': 'Footwear, leather goods and garments.',
    'm.onitsha': 'Wholesale and general merchandise on a very large scale.',
    'm.lagos': 'Imports, electronics, fashion and fast-moving goods.',
    'm.kano': 'Textiles, leather and agro-processing.',
    'm.ph': 'Industrial supplies, equipment and services.',
    'm.border': 'The main land crossing between Cross River State and Cameroon’s South-West Region. Both customs services are working to speed it up, and we help you prepare for it.',
    'mn.border': 'Mfum–Ekok border',
    'kind.border': 'About this crossing',
    'kind.market': 'Typically strong in',
    'mf.draft': 'Draft',
    'mf.within': 'Within Nigeria',
    'mode.yes': 'In person',
    'mode.no': 'Remote',
    'mode.unsure': 'To be confirmed',
    'msg.hello': 'Hello VIVNCHA TRADELINK,\n\nI would like help with a business request.',
    'msg.name': 'Name', 'msg.country': 'Country', 'msg.biz': 'Business', 'msg.ind': 'Business line',
    'msg.market': 'Market of interest', 'msg.budget': 'Estimated budget', 'msg.travel': 'Travel', 'msg.need': 'What I need',
    'rs.p.none': 'Copy this message and send it to us. Our direct contact details are being finalised.',
    'rs.p.some': 'Send it to us on WhatsApp, or copy it and send it any way you prefer.',
    'rs.copied': 'Copied',
    'ct.ng': 'Nigeria', 'ct.cm': 'Cameroon', 'wa.ng': 'WhatsApp Nigeria', 'wa.cm': 'WhatsApp Cameroon',
    'ct.chat': 'Chat on WhatsApp', 'ct.call': 'Call', 'ct.line': 'Contact line', 'tb.msg': 'Talk to us now',
    'rs.fix': 'Please complete your name, country, business line and what you need.'
  };
  var FR = {
    'meta.title': 'VIVNCHA TradeLink | Relier les entreprises à travers l’Afrique',
    'nav.services': 'Services', 'nav.how': 'Comment ça marche', 'nav.ways': 'Nos formules', 'nav.faq': 'FAQ', 'nav.cta': 'Demander de l’aide',
    'hero.tag': 'Corridor Nigeria ↔ Cameroun · Ouvert',
    'hero.h1': 'Commercez au-delà des frontières avec quelqu’un <mark>sur le terrain.</mark>',
    'hero.lead': 'VIVNCHA TRADELINK aide les entreprises africaines à trouver des fournisseurs, des fabricants et des partenaires sur de nouveaux marchés, et les accompagne de la première rencontre à la poignée de main finale.',
    'hero.cta1': 'Lancer une demande', 'hero.cta2': 'Voir comment ça marche',
    'chip.trust': 'Confiance', 'chip.rel': 'Fiabilité', 'chip.acc': 'Accessibilité', 'chip.pro': 'Protection',
    'chart.title': 'Carte du corridor', 'chart.hint': 'Choisissez un marché', 'chart.kind': 'Souvent réputé pour', 'chart.plan': 'Planifier une visite ici',
    'fact.1k': 'Corridor de lancement', 'fact.1v': 'Nigeria ↔ Cameroun', 'fact.2k': 'Langues',
    'fact.3k': 'Formules', 'fact.3v': 'Venir au Nigeria · Travailler à distance',
    'fact.4k': 'Prochainement', 'fact.4v': 'Ghana · Togo · Côte d’Ivoire',
    'about.eyebrow': 'Ce que nous faisons',
    'about.h2': 'Nous construisons le pont. <span>Vous construisez l’entreprise.</span>',
    'about.p1': 'VIVNCHA TRADELINK est une entreprise de facilitation d’affaires et d’accès aux marchés. Nous aidons les entrepreneurs à atteindre des fournisseurs, des fabricants, des distributeurs et des partenaires sur des marchés qu’ils ne connaissent pas encore.',
    'about.p2': 'Nous commençons par le corridor Nigeria–Cameroun, où des acheteurs camerounais se rendent déjà sur les marchés nigérians. De là, nous nous tournons vers le Ghana, le Togo, la Côte d’Ivoire et au-delà.',
    'about.yes': 'Nous sommes', 'about.yesd': 'Un guide, un facilitateur de rencontres et un coordinateur pour votre entreprise sur un marché que vous découvrez.',
    'about.no': 'Nous ne sommes pas', 'about.nod': 'Un vendeur de produits. Nous ne promettons jamais un résultat que nous ne contrôlons pas. Nous promettons un processus clair et un effort sincère.',
    'svc.eyebrow': 'Nos services', 'svc.h2': 'L’accès aux affaires, sans tâtonner.', 'svc.p': 'Conçus autour de ce dont un chef d’entreprise a réellement besoin pour entrer sur un marché inconnu.',
    's1.t': 'Aide à l’entrée sur le marché', 's1.p': 'Comprendre le marché, choisir le bon lieu et construire un parcours concret pour votre objectif.',
    's2.t': 'Recherche de fournisseurs et de fabricants', 's2.p': 'Trouver des fabricants, fournisseurs, distributeurs et partenaires qui correspondent à votre besoin.',
    's3.t': 'Organisation de visites d’affaires', 's3.p': 'Vous venez au Nigeria ? Nous coordonnons les rencontres, les visites de marchés et votre programme.',
    's4.t': 'Prospection à distance', 's4.p': 'Vous ne pouvez pas voyager ? Avec votre autorisation, nous prospectons le marché nigérian pour vous.',
    's5.t': 'Représentation commerciale', 's5.p': 'Un interlocuteur de confiance côté Nigeria pour la coordination et le suivi convenus.',
    's6.t': 'Coordination transfrontalière', 's6.p': 'Une communication claire et des étapes pratiques entre vous et les partenaires que vous choisissez.',
    'how.eyebrow': 'Comment ça marche', 'how.h2': 'De la demande à la mise en relation.',
    'h1.t': 'Dites-nous ce qu’il vous faut', 'h1.p': 'Précisez votre secteur, votre produit, votre objectif, la quantité et votre budget estimé.',
    'h2.t': 'Nous évaluons la mission', 'h2.p': 'Nous confirmons s’il s’agit de recherche, de prospection, de mise en relation, d’une visite ou de représentation.',
    'h3.t': 'Nous planifions votre parcours', 'h3.p': 'Nous choisissons les marchés, les entreprises et les rendez-vous qui correspondent à votre objectif.',
    'h4.t': 'Nous facilitons', 'h4.p': 'Nous coordonnons les présentations, visites, échanges et activités convenus.',
    'h5.t': 'Vous décidez', 'h5.p': 'Vous comparez les entreprises et les opportunités, puis vous choisissez ce qui vous convient.',
    'h6.t': 'Nous coordonnons la suite', 'h6.p': 'Si cela est convenu, nous soutenons le suivi et la coordination transfrontalière.',
    'ways.eyebrow': 'Nos formules', 'ways.h2': 'Venez au Nigeria, ou restez où vous êtes.',
    'wa.k': 'Formule A · Sur place', 'wa.t': 'Venir au Nigeria', 'wa.sub': 'Nous planifions votre parcours, nous vous accueillons et nous vous conduisons vers des entreprises que nous avons vérifiées au préalable.',
    'wa.l1': 'Un parcours de marché construit autour de votre objectif', 'wa.l2': 'Des rendez-vous avec des entreprises présélectionnées', 'wa.l3': 'Présentations et appui à la négociation sur place', 'wa.l4': 'Un résumé pratique de ce que nous avons trouvé', 'wa.cta': 'Planifier ma visite',
    'wb.k': 'Formule B · À distance', 'wb.t': 'Rester au Cameroun', 'wb.sub': 'Vous nous autorisez. Nous prospectons le marché nigérian et nous vous faisons un retour.',
    'wb.l1': 'Un cadre écrit de ce que nous pouvons faire pour vous', 'wb.l2': 'Recherche et vérification de fournisseurs', 'wb.l3': 'Devis et options soumis à votre approbation', 'wb.l4': 'Achat et livraison uniquement dans le cadre d’un accord distinct', 'wb.cta': 'Demander une prospection à distance',
    'ways.note': 'Les deux formules commencent par un devis écrit.',
    'cost.eyebrow': 'Coûts clairs, rôles clairs', 'cost.h2': 'Sachez ce que vous payez, et à qui cela va.',
    'c1.tag': 'À nous', 'c1.t': 'Nos frais de service', 'c1.p': 'Annoncés par écrit pour votre mission et réglés avant le début du travail. Ils couvrent notre planification, la présélection, les mises en relation et la coordination.',
    'c2.tag': 'Tiers', 'c2.t': 'Coûts de tiers', 'c2.p': 'Transport, hébergement, repas, expédition, douane et frais similaires sont indiqués séparément et facturés au coût réel.',
    'c3.tag': 'À vous', 'c3.t': 'Votre argent d’achat', 'c3.p': 'L’argent des marchandises reste le vôtre. Si vous voulez que nous achetions pour vous, cela fait l’objet d’un accord écrit distinct avec ses propres conditions.',
    'cost.note': 'Chaque mission commence par un devis écrit qui présente ces trois éléments, pour éviter toute surprise.',
    'pr.eyebrow': 'Notre promesse', 'pr.h2': 'Quatre choses qu’une entreprise ne devrait jamais sacrifier.',
    'pr1': 'Un pont fiable entre vous et vos partenaires potentiels.', 'pr2': 'Une communication claire, des responsabilités convenues et une coordination responsable.',
    'pr3': 'Un accès concret à des personnes, des marchés et des opportunités difficiles à atteindre seul.', 'pr4': 'Moins de risques évitables, grâce à une information claire, à la coordination et à la vérification préalable.',
    'who.eyebrow': 'Qui nous servons', 'who.h2': 'Pour les entrepreneurs prêts à passer une frontière.',
    'who1': 'Les entreprises à la recherche de fabricants ou de fournisseurs', 'who2': 'Les entrepreneurs qui explorent un nouveau marché africain', 'who3': 'Les entreprises qui cherchent des distributeurs ou des partenaires commerciaux', 'who4': 'Les entrepreneurs qui viennent au Nigeria pour affaires', 'who5': 'Les entreprises qui ont besoin de prospection sans voyager',
    'rd.eyebrow': 'Où nous allons', 'rd.h2': 'Un corridor aujourd’hui. Un réseau demain.', 'rd.1': 'Nigeria ↔ Cameroun', 'rd.now': 'Ouvert', 'rd.next': 'Prévu', 'rd.more': 'D’autres marchés africains', 'rd.later': 'Plus tard',
    'faq.eyebrow': 'Questions', 'faq.h2': 'Des réponses franches.',
    'q1': 'Vendez-vous des produits ?', 'a1': 'Non. Nous facilitons. Nous vous aidons à trouver et à rencontrer des fournisseurs, des fabricants et des partenaires, et c’est vous qui décidez de ce que vous achetez.',
    'q2': 'Dois-je me rendre au Nigeria ?', 'a2': 'Non. Vous pouvez venir avec notre appui, ou nous autoriser à prospecter le marché pour vous.',
    'q3': 'Combien cela coûte-t-il ?', 'a3': 'Chaque mission reçoit un devis écrit. Il sépare nos frais de service des coûts de tiers et de l’argent d’achat, pour que vous sachiez toujours ce que vous payez.',
    'q4': 'Pouvez-vous acheter des marchandises pour moi ?', 'a4': 'Uniquement dans le cadre d’un accord écrit distinct, qui précise ce que nous achetons, comment les fonds sont gérés et comment les marchandises vous parviennent.',
    'q5': 'Pouvez-vous garantir que j’obtiendrai ce que je veux ?', 'a5': 'Nous ne contrôlons ni les décisions d’un fournisseur ni le marché. Nous nous engageons à un processus transparent, à des options vérifiées et à un compte rendu honnête.',
    'q6': 'Quels marchés couvrez-vous ?', 'a6': 'Nous démarrons avec le Nigeria et le Cameroun. Le Ghana, le Togo et la Côte d’Ivoire sont prévus ensuite.',
    'rq.eyebrow': 'Commencez ici', 'rq.h2': 'Dites-nous ce que vous recherchez.', 'rq.p': 'Donnez-nous l’essentiel. Nous examinerons votre demande et confirmerons la meilleure suite.',
    'mf.title': 'Demande d’affaires', 'mf.name': 'Nom', 'mf.route': 'Trajet', 'mf.market': 'Marché', 'mf.budget': 'Budget', 'mf.mode': 'Mode',
    'f.name': 'Nom complet', 'f.country': 'Votre pays', 'f.biz': 'Nom de l’entreprise', 'f.ind': 'Secteur d’activité', 'f.market': 'Marché visé', 'f.travel': 'Allez-vous voyager ?', 'f.need': 'De quoi avez-vous besoin ?', 'f.budget': 'Budget estimé',
    'ph.name': 'Votre nom', 'ph.biz': 'Nom de l’entreprise', 'ph.need': 'Ce que vous voulez acheter, qui vous voulez rencontrer, ou l’opportunité que vous explorez.', 'ph.budget': 'Par exemple : 5 000 000 FCFA ou ₦10 000 000',
    'o.select': 'Choisir', 'o.cm': 'Cameroun', 'o.ng': 'Nigeria', 'o.other': 'Autre pays africain',
    'i.agri': 'Agriculture', 'i.manu': 'Fabrication et production', 'i.pack': 'Emballage', 'i.food': 'Alimentation', 'i.health': 'Santé', 'i.fash': 'Mode et textile', 'i.tech': 'Technologie', 'i.cons': 'Construction', 'i.whole': 'Gros et distribution', 'o.otherI': 'Autre',
    'o.notsure': 'Pas encore décidé', 't.yes': 'Oui, je voyagerai', 't.no': 'Non, j’ai besoin d’une aide à distance', 't.unsure': 'Je ne sais pas encore',
    'rq.note': 'Les frais de service, le voyage, l’hébergement, les repas, les achats de produits, l’expédition, la douane et les autres coûts de tiers sont traités séparément, selon la mission convenue.',
    'rq.submit': 'Préparer ma demande', 'rs.h': 'Votre demande est prête', 'rs.copy': 'Copier la demande',
    'ft.tag': 'Relier les entreprises à travers l’Afrique.', 'ft.cor': 'Corridor de lancement', 'ft.nav': 'Explorer', 'ft.contact': 'Contact', 'ft.soon': 'Utilisez le formulaire de demande et nous vous répondrons avec la suite.', 'ft.rights': 'Tous droits réservés.', 'ft.wa': 'Écrire sur WhatsApp',
    /* script strings */
    'm.aba': 'Chaussures, articles en cuir et vêtements.',
    'm.onitsha': 'Commerce de gros et marchandises générales à très grande échelle.',
    'm.lagos': 'Importations, électronique, mode et produits à rotation rapide.',
    'm.kano': 'Textile, cuir et transformation agroalimentaire.',
    'm.ph': 'Fournitures industrielles, équipements et services.',
    'm.border': 'Le principal passage terrestre entre l’État de Cross River et la région du Sud-Ouest du Cameroun. Les deux administrations douanières cherchent à l’accélérer, et nous vous aidons à vous y préparer.',
    'mn.border': 'Frontière Mfum–Ekok', 'kind.border': 'À propos de ce passage', 'kind.market': 'Souvent réputé pour',
    'mf.draft': 'Brouillon', 'mf.within': 'À l’intérieur du Nigeria',
    'mode.yes': 'Sur place', 'mode.no': 'À distance', 'mode.unsure': 'À confirmer',
    'msg.hello': 'Bonjour VIVNCHA TRADELINK,\n\nJ’aimerais de l’aide pour une demande d’affaires.',
    'msg.name': 'Nom', 'msg.country': 'Pays', 'msg.biz': 'Entreprise', 'msg.ind': 'Secteur', 'msg.market': 'Marché visé', 'msg.budget': 'Budget estimé', 'msg.travel': 'Voyage', 'msg.need': 'Mon besoin',
    'rs.p.none': 'Copiez ce message et envoyez-le-nous. Nos coordonnées directes sont en cours de finalisation.',
    'rs.p.some': 'Envoyez-le-nous sur WhatsApp, ou copiez-le et envoyez-le comme vous préférez.',
    'rs.copied': 'Copié',
    'ct.ng': 'Nigeria', 'ct.cm': 'Cameroun', 'wa.ng': 'WhatsApp Nigeria', 'wa.cm': 'WhatsApp Cameroun',
    'ct.chat': 'Écrire sur WhatsApp', 'ct.call': 'Appeler', 'ct.line': 'Ligne de contact', 'tb.msg': 'Parlez-nous maintenant',
    'ct.eyebrow': 'Parlez-nous', 'ct.h2': 'Vous préférez parler ? Écrivez-nous maintenant.', 'ct.p': 'Choisissez la ligne la plus proche de vous. Dites-nous ce qu’il vous faut et nous vous indiquerons la suite.',
    'rs.fix': 'Veuillez renseigner votre nom, votre pays, votre secteur et votre besoin.'
  };

  var lang = 'en';
  try { var saved = localStorage.getItem('vt-lang'); if (saved === 'fr' || saved === 'en') lang = saved; } catch (e) {}
  function t(k) { return (lang === 'fr' && FR[k] !== undefined) ? FR[k] : EN[k]; }

  /* ---------------------- route chart ---------------------- */
  var NS = 'http://www.w3.org/2000/svg';
  function s(name, attrs, parent) {
    var n = document.createElementNS(NS, name);
    for (var k in attrs) n.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(n);
    return n;
  }
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var chart = $('#chart');

  var N = {
    kano:    { x: 330, y: 110, name: 'Kano',          side: 'r', kind: 'market' },
    lagos:   { x: 70,  y: 400, name: 'Lagos',         side: 'b', kind: 'market' },
    onitsha: { x: 215, y: 430, name: 'Onitsha',       side: 't', kind: 'market' },
    aba:     { x: 305, y: 505, name: 'Aba',           side: 'r', kind: 'market' },
    ph:      { x: 235, y: 585, name: 'Port Harcourt', side: 'l', kind: 'market' },
    border:  { x: 385, y: 440, name: 'Mfum–Ekok',     side: 't', kind: 'border' },
    douala:  { x: 440, y: 600, name: 'Douala',        side: 'b', kind: 'cm' },
    yaounde: { x: 560, y: 640, name: 'Yaoundé',       side: 't', kind: 'cm' }
  };
  var ARCS = [
    ['border', 'kano', 0.16, '#1F8F3A'], ['border', 'lagos', 0.2, '#1F8F3A'], ['border', 'onitsha', -0.25, '#1F8F3A'],
    ['border', 'aba', -0.25, '#1F8F3A'], ['border', 'ph', -0.2, '#1F8F3A'],
    ['douala', 'border', 0.2, '#F6BE00'], ['yaounde', 'border', -0.18, '#F6BE00']
  ];

  function buildChart() {
    if (!chart) return;
    // graticule
    var g = s('g', {}, chart);
    for (var i = 1; i < 8; i++) s('line', { x1: 40 + i * 80, y1: 20, x2: 40 + i * 80, y2: 690, class: 'gl' }, g);
    for (var j = 1; j < 9; j++) s('line', { x1: 10, y1: 20 + j * 75, x2: 630, y2: 20 + j * 75, class: 'gl' }, g);
    var nig = s('text', { x: 22, y: 250, class: 'ghost' }, chart); nig.textContent = 'NIGERIA';
    var cam = s('text', { x: 618, y: 316, class: 'ghost', 'text-anchor': 'end' }, chart); cam.textContent = 'CAMEROON';

    // arcs
    ARCS.forEach(function (a, idx) {
      var A = N[a[0]], B = N[a[1]];
      var mx = (A.x + B.x) / 2, my = (A.y + B.y) / 2;
      var dx = B.x - A.x, dy = B.y - A.y, len = Math.sqrt(dx * dx + dy * dy);
      var cx = mx + (dy / len) * len * a[2] * -1, cy = my + (-dx / len) * len * a[2] * -1;
      var d = 'M' + A.x + ',' + A.y + ' Q' + cx.toFixed(1) + ',' + cy.toFixed(1) + ' ' + B.x + ',' + B.y;
      s('path', { d: d, class: 'arc-base', stroke: a[3] }, chart);
      s('path', { d: d, class: 'arc-glow', stroke: a[3], pathLength: 1, style: '--d:' + (0.25 + idx * 0.18) + 's' }, chart);
      if (!reduce) {
        var dot = s('circle', { r: 3.6, fill: '#fff', opacity: 0.95, visibility: 'hidden' }, chart);
        s('set', { attributeName: 'visibility', to: 'visible', begin: (1.8 + idx * 0.5) + 's', fill: 'freeze' }, dot);
        var am = s('animateMotion', { dur: (4.5 + (idx % 3) * 0.8) + 's', repeatCount: 'indefinite', begin: (1.8 + idx * 0.5) + 's', path: d, calcMode: 'spline', keyTimes: '0;1', keySplines: '.45 .05 .35 1' }, dot);
      }
    });

    // nodes
    Object.keys(N).forEach(function (id) {
      var n = N[id];
      var interactive = n.kind !== 'cm';
      var grp = s('g', { class: 'node' + (n.kind === 'border' ? ' border-node' : '') + (interactive ? '' : ' static'), transform: 'translate(' + n.x + ',' + n.y + ')' }, chart);
      if (interactive) {
        grp.setAttribute('tabindex', '0'); grp.setAttribute('role', 'button'); grp.setAttribute('aria-pressed', 'false');
        grp.setAttribute('aria-label', n.name); grp.setAttribute('data-id', id);
        s('circle', { class: 'halo', r: 12 }, grp);
        s('circle', { class: 'focus', r: 18 }, grp);
        s('circle', { class: 'dot', r: 8 }, grp);
        // larger invisible hit area for touch
        s('circle', { r: 24, fill: 'transparent' }, grp);
      } else {
        s('circle', { r: 5, fill: '#F6BE00', stroke: '#061530', 'stroke-width': 2 }, grp);
      }
      var pos = { r: [16, 5, 'start'], l: [-16, 5, 'end'], t: [0, -18, 'middle'], b: [0, 28, 'middle'] }[n.side];
      var tx = s('text', { x: pos[0], y: pos[1], 'text-anchor': pos[2], class: 'lbl' + (interactive ? '' : ' dim') }, grp);
      tx.textContent = n.name;
      if (interactive) {
        grp.addEventListener('click', function () { select(id); });
        grp.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); select(id); } });
      }
    });

    // rotating stamp
    var st = s('g', { transform: 'translate(550,92)' }, chart);
    s('circle', { r: 66, fill: 'rgba(6,21,48,.7)', stroke: 'rgba(255,255,255,.18)' }, st);
    var spin = s('g', { class: 'stamp' }, st);
    s('path', { id: 'stampPath', d: 'M-50,0 a50,50 0 1,1 100,0 a50,50 0 1,1 -100,0', fill: 'none' }, spin);
    var tp = s('text', { class: 'stamp-txt' }, spin);
    var tpp = s('textPath', { href: '#stampPath' }, tp);
    tpp.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '#stampPath');
    tpp.textContent = 'VIVNCHA TRADELINK · NIGERIA · CAMEROON · ';
    var defs = s('defs', {}, st);
    var cp = s('clipPath', { id: 'markClip' }, defs); s('circle', { r: 30 }, cp);
    s('circle', { r: 31, fill: '#fff' }, st);
    var im = s('image', { href: 'assets/mark.png', x: -34, y: -34, width: 68, height: 68, 'clip-path': 'url(#markClip)', preserveAspectRatio: 'xMidYMid slice' }, st);
    im.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', 'assets/mark.png');
  }

  var current = 'aba';
  function select(id) {
    current = id;
    $$('.node[data-id]').forEach(function (n) { n.setAttribute('aria-pressed', n.getAttribute('data-id') === id ? 'true' : 'false'); });
    renderCard();
  }
  function renderCard() {
    var n = N[current]; if (!n) return;
    var isB = n.kind === 'border';
    $('#mcName').textContent = isB ? t('mn.border') : n.name;
    $('#mcDesc').textContent = t(isB ? 'm.border' : 'm.' + current);
    $('#mcKind').textContent = t(isB ? 'kind.border' : 'kind.market');
    var btn = $('#mcBtn');
    btn.hidden = isB;
    btn.setAttribute('data-market', isB ? '' : current);
  }

  /* ---------------------- marquee ---------------------- */
  (function () {
    var names = ['Aba', 'Onitsha', 'Lagos', 'Kano', 'Port Harcourt', 'Mfum–Ekok', 'Douala', 'Yaoundé'];
    var box = $('#marquee'); if (!box) return;
    var html = '';
    for (var r = 0; r < 4; r++) names.forEach(function (n) { html += '<span>' + n + '</span>'; });
    box.innerHTML = html;
  })();

  /* ---------------------- language ---------------------- */
  function applyLang(l) {
    lang = l;
    try { localStorage.setItem('vt-lang', l); } catch (e) {}
    document.documentElement.lang = l;
    $$('[data-i18n]').forEach(function (el) {
      if (!('en' in el.dataset)) el.dataset.en = el.innerHTML;
      var k = el.getAttribute('data-i18n');
      el.innerHTML = (l === 'fr' && FR[k] !== undefined) ? FR[k] : el.dataset.en;
    });
    $$('[data-i18n-ph]').forEach(function (el) {
      if (!('enPh' in el.dataset)) el.dataset.enPh = el.getAttribute('placeholder');
      var k = el.getAttribute('data-i18n-ph');
      el.setAttribute('placeholder', (l === 'fr' && FR[k] !== undefined) ? FR[k] : el.dataset.enPh);
    });
    $$('.lang button').forEach(function (b) { b.setAttribute('aria-pressed', b.getAttribute('data-lang') === l ? 'true' : 'false'); });
    document.title = l === 'fr' ? FR['meta.title'] : 'VIVNCHA TradeLink';
    $('#mfNo').textContent = t('mf.draft');
    renderContacts();
    renderCard();
    renderManifest();
    var res = $('#result'); if (res && !res.hidden) buildResult();
  }
  $$('.lang button').forEach(function (b) { b.addEventListener('click', function () { applyLang(b.getAttribute('data-lang')); }); });

  /* ---------------------- form ---------------------- */
  var form = $('#requestForm');
  function val(id) { return ($('#' + id).value || '').trim(); }
  function optText(id) { var el = $('#' + id); return el.selectedIndex >= 0 ? el.options[el.selectedIndex].textContent.trim() : ''; }
  function setDD(id, text) { var el = $('#' + id); el.textContent = text || '—'; el.className = text ? '' : 'empty'; }

  function renderManifest() {
    if (!form) return;
    setDD('mfName', val('f-name'));
    var c = val('f-country');
    setDD('mfRoute', !c ? '' : (c === 'Nigeria' ? t('mf.within') : optText('f-country') + ' → Nigeria'));
    setDD('mfMarket', val('f-market') ? optText('f-market') : '');
    setDD('mfBudget', val('f-budget'));
    setDD('mfMode', t('mode.' + $('#f-travel').value));
  }
  $$('#requestForm input, #requestForm select, #requestForm textarea').forEach(function (el) {
    el.addEventListener('input', renderManifest); el.addEventListener('change', renderManifest);
  });

  function message() {
    var lines = [t('msg.hello'), ''];
    function add(label, v) { if (v) lines.push(t(label) + ': ' + v); }
    add('msg.name', val('f-name'));
    add('msg.country', val('f-country') ? optText('f-country') : '');
    add('msg.biz', val('f-biz'));
    add('msg.ind', val('f-ind') ? optText('f-ind') : '');
    add('msg.market', val('f-market') ? optText('f-market') : '');
    add('msg.budget', val('f-budget'));
    add('msg.travel', optText('f-travel'));
    lines.push('', t('msg.need') + ': ' + val('f-need'));
    return lines.join('\n');
  }
  function waLink(num, msg) { return 'https://wa.me/' + num + (msg ? '?text=' + encodeURIComponent(msg) : ''); }
  function buildResult() {
    var msg = message();
    $('#rsText').value = msg;
    var any = false;
    [['nigeria', '#waBtnNG', 'wa.ng'], ['cameroon', '#waBtnCM', 'wa.cm']].forEach(function (p) {
      var b = $(p[1]), c = CONFIG[p[0]];
      if (c && c.whatsapp) { b.href = waLink(c.whatsapp, msg); b.textContent = t(p[2]); b.hidden = false; any = true; } else { b.hidden = true; }
    });
    $('#rsMsg').textContent = t(any ? 'rs.p.some' : 'rs.p.none');
  }
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var ok = val('f-name') && val('f-country') && val('f-ind') && val('f-need');
      if (!ok) {
        ['f-name', 'f-country', 'f-ind', 'f-need'].forEach(function (id) { $('#' + id).style.borderColor = val(id) ? '' : '#D62A32'; });
        var first = ['f-name', 'f-country', 'f-ind', 'f-need'].filter(function (id) { return !val(id); })[0];
        $('#' + first).focus();
        var er = $('#formErr'); er.textContent = t('rs.fix'); er.hidden = false;
        return;
      }
      ['f-name', 'f-country', 'f-ind', 'f-need'].forEach(function (id) { $('#' + id).style.borderColor = ''; });
      $('#formErr').hidden = true;
      buildResult();
      var res = $('#result'); res.hidden = false;
      res.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'nearest' });
    });
    $('#copyBtn').addEventListener('click', function () {
      var ta = $('#rsText'), btn = this, orig = btn.textContent;
      function done() { btn.textContent = t('rs.copied'); setTimeout(function () { btn.textContent = orig; }, 1600); }
      try {
        navigator.clipboard.writeText(ta.value).then(done, function () { ta.select(); done(); });
      } catch (err) { ta.select(); done(); }
    });
  }

  // "Plan a visit here" and model buttons pre-fill the form
  $('#mcBtn').addEventListener('click', function () {
    var m = this.getAttribute('data-market');
    if (m) { $('#f-market').value = m; $('#f-travel').value = 'yes'; renderManifest(); }
  });
  $$('[data-travel]').forEach(function (a) {
    a.addEventListener('click', function () { $('#f-travel').value = a.getAttribute('data-travel'); renderManifest(); });
  });

  /* ---------------------- contacts (only shows what is configured) ---------------------- */
  function fmt(n) {
    var d = String(n).replace(/\D/g, '');
    if (d.indexOf('234') === 0 && d.length === 13) return '+234 ' + d.slice(3, 6) + ' ' + d.slice(6, 9) + ' ' + d.slice(9);
    if (d.indexOf('237') === 0 && d.length === 12) return '+237 ' + d.slice(3, 4) + ' ' + d.slice(4, 6) + ' ' + d.slice(6, 8) + ' ' + d.slice(8, 10) + ' ' + d.slice(10);
    return '+' + d;
  }
  function renderContacts() {
    var lines = [['nigeria', 'ct.ng', '#waFloatNG', 'wa.ng'], ['cameroon', 'ct.cm', '#waFloatCM', 'wa.cm']];
    var box = $('#contactBox'), html = '', cards = '', top = '';
    lines.forEach(function (p) {
      var c = CONFIG[p[0]];
      var num = c && (c.whatsapp || c.phone);
      var fl = $(p[2]);
      if (!num) { fl.hidden = true; return; }
      var wa = c.whatsapp, ph = c.phone || c.whatsapp;
      html += '<p class="ct"><b>' + t(p[1]) + '</b>';
      if (wa) html += '<a href="' + waLink(wa) + '" target="_blank" rel="noopener">WhatsApp ' + fmt(wa) + '</a>';
      html += '<a href="tel:+' + ph + '">' + (wa ? t('ct.call') + ' ' : '') + fmt(ph) + '</a></p>';
      cards += '<div class="cc"><span class="k">' + t('ct.line') + '</span><h3>' + t(p[1]) + ' · ' + fmt(wa || ph) + '</h3><div class="acts">' +
        (wa ? '<a class="btn btn-gold" href="' + waLink(wa) + '" target="_blank" rel="noopener">' + t('ct.chat') + '</a>' : '') +
        '<a class="btn btn-line" href="tel:+' + ph + '">' + t('ct.call') + '</a></div></div>';
      top += '<a href="' + (wa ? waLink(wa) : 'tel:+' + ph) + '" ' + (wa ? 'target="_blank" rel="noopener"' : '') + '><span>' + t(p[1]) + '</span>' + fmt(wa || ph) + '</a>';
      if (wa) { fl.href = waLink(wa); fl.innerHTML = '<small>' + t(p[3]) + '</small><b>' + fmt(wa) + '</b>'; fl.hidden = false; } else { fl.hidden = true; }
    });
    if (CONFIG.email) { html += '<p class="ct"><a href="mailto:' + CONFIG.email + '">' + CONFIG.email + '</a></p>'; }
    if (html) box.innerHTML = html;
    var cc = $('#contactCards'); if (cc) cc.innerHTML = cards;
    var sec = $('#contact'); if (sec) sec.hidden = !cards;
    var tb = $('#topbar'); if (tb) { tb.hidden = !top; tb.innerHTML = top ? '<div class="in"><span class="msg"><i></i>' + t('tb.msg') + '</span><span class="nums">' + top + '</span></div>' : ''; }
    var fw = $('#waFloat'); if (fw) fw.classList.toggle('on', !!(CONFIG.nigeria.whatsapp || CONFIG.cameroon.whatsapp));
  }

  /* ---------------------- header, menu, progress, year ---------------------- */
  var menuBtn = $('#menuBtn'), nav = $('#nav');
  menuBtn.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  $$('#nav a').forEach(function (a) { a.addEventListener('click', function () { nav.classList.remove('open'); menuBtn.setAttribute('aria-expanded', 'false'); }); });

  var bar = $('.progress');
  function onScroll() {
    var h = document.documentElement;
    var p = h.scrollHeight - h.clientHeight > 0 ? h.scrollTop / (h.scrollHeight - h.clientHeight) : 0;
    bar.style.setProperty('--p', Math.min(1, Math.max(0, p)).toFixed(4));
  }
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

  $('#year').textContent = new Date().getFullYear();

  /* ---------------------- boot ---------------------- */
  buildChart();
  select('aba');
  applyLang(lang);
})();
