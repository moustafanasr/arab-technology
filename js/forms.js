/* Static forms prepare a WhatsApp message; the visitor must actively send it. */
(() => {
  'use strict';
  const PHONE = '201114447033';
  const lang = () => document.documentElement.lang === 'ar' ? 'ar' : 'en';
  const models = {
    compression:['2000 kN Compression Testing Machine','ماكينة اختبار ضغط الخرسانة 2000 كيلو نيوتن'],
    cbr:['Automatic CBR Testing Machine','جهاز اختبار CBR أوتوماتيكي'],
    marshall:['Automatic Marshall Testing Machine','ماكينة مارشال أوتوماتيكية'],
    abrasion:['Los Angeles Abrasion Testing Machine','جهاز اختبار تآكل لوس أنجلوس'],
    oven:['Electric Laboratory Drying Oven','فرن تجفيف معملي كهربائي'],
    compactor:['Automatic Marshall Compactor','جهاز دمك مارشال الأوتوماتيكي'],
    centrifuge:['Electric Centrifuge Extractor','جهاز استخلاص الطرد المركزي'],
    waterbath:['Digital Laboratory Water Bath','حمام مائي معملي رقمي'],
    vicat:['Vicat Test Set','جهاز اختبار فيكات'],
    proctor:['Automatic Proctor Compactor','جهاز بروكتور أوتوماتيكي'],
    extruder:['Universal Sample Extruder','جهاز إخراج العينات'],
    sandcone:['Sand Density Cone','جهاز مخروط كثافة الرمل']
  };
  const opts = {
    lab: {
      name:['Setting up a testing laboratory','تجهيز معمل اختبارات'], img:'industry-lab-hd.webp',
      options:[['full','A complete lab equipment list','تجهيزات معمل كاملة'],['concrete','Concrete testing equipment','أجهزة اختبار الخرسانة'],['soil','Soil testing equipment','أجهزة اختبار التربة'],['asphalt','Asphalt testing equipment','أجهزة اختبار الأسفلت'],['other','Other laboratory equipment','أجهزة معملية أخرى']]
    },
    site: {
      name:['Equipment for a construction site','أجهزة اختبارات لموقع إنشاءات'],img:'industry-construction-hd.webp',
      options:[['concrete','On-site concrete testing','اختبارات خرسانة بالموقع'],['soil','Soil density or compaction','اختبارات كثافة أو دمك التربة'],['asphalt','Asphalt and aggregates','الأسفلت والركام'],['other','Other site testing','اختبارات موقع أخرى']]
    },
    research: {
      name:['Research or teaching equipment','أجهزة للأبحاث أو التدريس'],img:'industry-research-hd.webp',
      options:[['education','Teaching laboratory equipment','أجهزة معامل تعليمية'],['research','Research testing instruments','أجهزة اختبارات بحثية'],['samples','Specimen preparation','تجهيز العينات'],['other','Other research requirements','احتياجات بحثية أخرى']]
    },
    quality: {
      name:['Quality control and inspection','الجودة والفحص'], img:'industry-inspection-hd.webp',
      options:[['concrete','Concrete strength testing','اختبارات مقاومة الخرسانة'],['soil','Soil testing and verification','اختبارات التربة والتحقق'],['asphalt','Asphalt material testing','اختبارات مواد الأسفلت'],['other','Other quality testing','اختبارات جودة أخرى']]
    }
  };
  function prepare(message) {
    const url = 'https://wa.me/' + PHONE + '?text=' + encodeURIComponent(message);
    const w = window.open(url, '_blank', 'noopener,noreferrer');
    if (!w) window.location.href = url;
  }
  function valid(form) { if (!form.reportValidity()) return false; return true; }
  const quote = document.getElementById('quote-form');
  if (quote) {
    const product = quote.querySelector('[name=product]');
    const requested = new URLSearchParams(location.search).get('product');
    if (models[requested]) product.value = requested;
    function labels() {
      const ar = lang() === 'ar';
      for (const option of product.options) {
        if (models[option.value]) option.textContent = models[option.value][ar ? 1 : 0];
        else option.textContent = ar ? 'اختار الجهاز (اختياري)' : 'Select equipment (optional)';
      }
    }
    document.addEventListener('at:language', labels);
    labels();
    quote.addEventListener('submit', event => {
      event.preventDefault(); if (!valid(quote)) return;
      const d = new FormData(quote);
      const model = models[d.get('product')]?.[0] || 'Not specified';
      const msg = ['Hello Arab Technology, I would like an official quotation.',
        'Equipment: ' + model,
        'Full name: ' + d.get('name').trim(),
        'Phone: ' + d.get('phone').trim(),
        d.get('email') ? 'Email: ' + d.get('email').trim() : '',
        d.get('quantity') ? 'Quantity: ' + d.get('quantity') : '',
        d.get('notes') ? 'Requirements: ' + d.get('notes').trim() : ''
      ].filter(Boolean).join('\n');
      prepare(msg);
    });
  }
  const application = document.getElementById('application-form');
  if (application) {
    const need = document.getElementById('need-select');
    const issue = document.getElementById('issue-select');
    const image = document.getElementById('need-preview');
    const selectedName = document.getElementById('need-label');
    const params = new URLSearchParams(location.search);
    const requested = params.get('need');
    if (opts[requested]) need.value = requested;
    function fillPreservingSelection() {
      const arabic = lang() === 'ar';
      const old = issue.value;
      for (const option of need.options) {
        option.textContent = opts[option.value].name[arabic ? 1 : 0];
      }
      const current = opts[need.value];
      issue.replaceChildren();
      current.options.forEach(([value,en,ar]) => {
        const element = document.createElement('option');
        element.value = value;
        element.textContent = arabic ? ar : en;
        issue.append(element);
      });
      if (current.options.some(([v]) => v === old)) issue.value = old;
      image.src = './assets/' + current.img;
      image.alt = current.name[arabic ? 1 : 0];
      selectedName.textContent = current.name[arabic ? 1 : 0];
    }
    need.addEventListener('change', () => {
      fillPreservingSelection();
      const url = new URL(location.href); url.searchParams.set('need',need.value);
      try { if (location.protocol !== 'about:') history.replaceState(null,'',url.pathname+url.search); } catch (_) {}
    });
    document.addEventListener('at:language', fillPreservingSelection);
    fillPreservingSelection();
    application.addEventListener('submit', event => {
      event.preventDefault(); if (!valid(application)) return;
      const data = new FormData(application);
      const item = opts[data.get('need')];
      const detail = item.options.find(o=>o[0]===data.get('issue'));
      const lines = ['Hello Arab Technology, I need assistance choosing testing equipment.',
        'Application: '+item.name[0], 'Requirement: '+(detail?.[1] || ''),
        'Name: '+data.get('name').trim(), 'Phone: '+data.get('phone').trim(),
        data.get('email') ? 'Email: '+data.get('email').trim() : '',
        data.get('notes') ? 'Notes: '+data.get('notes').trim() : ''
      ];
      prepare(lines.filter(Boolean).join('\n'));
    });
  }
})();
