/* Arab Technology — Guided enquiry for static GitHub Pages. No analytics, no backend, no personal-data storage. */
(()=>{
  'use strict';
  const $ = (selector, root=document) => root.querySelector(selector);
  const $$ = (selector, root=document) => [...root.querySelectorAll(selector)];
  const phoneRecipient = '201114447033'; // Confirm with the business owner before public launch.
  const needs = {
    lab: { image:'industry-lab.webp', en:{ title:'Setting up a testing laboratory',desc:'I need help choosing equipment for my lab.',details:['Starting a new laboratory','Upgrading existing equipment','Replacing an older machine','Unsure which tests or devices I need','Need general recommendations'] }, ar:{title:'بجهّز معمل اختبارات جديد',desc:'محتاج مساعدة أختار أجهزة المعمل.',details:['ببدأ معمل من الصفر','بطوّر أجهزة المعمل الحالي','عايز أستبدل جهاز قديم','مش عارف الأجهزة أو الاختبارات المطلوبة','محتاج ترشيحات عامة']} },
    site: { image:'industry-construction.webp', en:{title:'Equipment for my construction site',desc:'I need the right testing equipment on site.',details:['Concrete testing on-site','Soil testing and CBR','Asphalt or aggregate testing','Equipment for more than one site','Unsure what equipment to choose']},ar:{title:'محتاج أجهزة لموقع إنشاءات',desc:'عايز الأجهزة المناسبة للاختبارات في الموقع.',details:['اختبارات الخرسانة في الموقع','اختبارات التربة و CBR','اختبارات الأسفلت أو الركام','أجهزة لأكثر من موقع','مش عارف أختار الجهاز المناسب']} },
    research: { image:'industry-research.webp', en:{title:'Equipment for research or teaching',desc:'I want instruments for a university or research lab.',details:['Equipping a teaching laboratory','Setting up a research laboratory','Equipment for a specific experiment','Replacing outdated equipment','Need help selecting suitable instruments']},ar:{title:'أجهزة للأبحاث أو التعليم',desc:'محتاج أجهزة لجامعة أو معمل بحثي.',details:['تجهيز معمل تعليمي','تجهيز معمل بحثي','جهاز لتجربة أو اختبار محدد','استبدال أجهزة قديمة','محتاج مساعدة في اختيار الأجهزة']} },
    quality: { image:'industry-inspection.webp', en:{title:'Quality control and inspection',desc:'I need equipment to check materials and test results.',details:['Concrete strength testing','Soil density and CBR testing','Asphalt quality testing','Cement material testing','Need help determining the appropriate test']},ar:{title:'محتاج اختبارات جودة وفحص',desc:'محتاج أجهزة لفحص المواد والتحقق من النتائج.',details:['اختبار مقاومة ضغط الخرسانة','قياس كثافة التربة و CBR','اختبارات جودة الأسفلت','اختبارات مواد الأسمنت','محتاج أعرف الاختبار المناسب']} }
  };
  const translations={
    en:{utility:'Precision equipment. Simple decisions.',back:'Back to website',eyebrow:'YOUR EQUIPMENT ENQUIRY',heading:'Tell us what you need. <em>We’ll help you find it.</em>',lead:"Choose from a few ready-made answers, add your contact details, and you're done.",stepOne:'Choose your need',stepTwo:'Your contact details',summaryLabel:'YOUR SELECTED NEED',selected:'Selected',change:'Change selection ↗',tip:"Not sure about the equipment model? That's okay. Tell us the type of test you need.",chooseHeading:'What best describes your situation?',chooseSub:'Your selection is already highlighted. You can change it.',detailHeading:"What's the main challenge?",detailSub:"Tap one option. You don't have to write anything.",contactHeading:'How can we contact you?',contactSub:'Only your name and phone number are required.',name:'Full name',phone:'Phone / WhatsApp number',email:'Email address',note:'Additional note',optional:'Optional',namePlaceholder:'Your full name',phonePlaceholder:'01XXXXXXXXX',emailPlaceholder:'name@example.com',notePlaceholder:"Anything else you'd like us to know?",submitCaption:"That's everything!",submitNote:'WhatsApp will open with your choices and details. Review the message before sending.',submit:'Continue on WhatsApp',privacy:"This is a static preview. We don't store your contact details on this website.",footerBack:'Return to homepage',chooseNeed:'Please choose one need.',invalidName:'Please enter your name.',invalidPhone:'Enter a valid phone number (9–15 digits).',invalidEmail:'Please enter a valid email address or leave it blank.',unknown:'Not specified',waHello:'Hello Arab Technology, I would like help with testing equipment.',waNeed:'My need',waProblem:'Specific challenge',waName:'Name',waPhone:'Phone',waEmail:'Email',waNote:'Additional note',noSelection:'Choose a need to get started',noSelectionDesc:'The image and selected need will appear here.',detailNone:'Not sure yet / Please advise'},
    ar:{utility:'حلول اختبار دقيقة. بخطوات بسيطة.',back:'الرجوع للموقع',eyebrow:'مساعدتك في اختيار الأجهزة',heading:'قولنا محتاج إيه. <em>وهنساعدك تختار.</em>',lead:'اختار من الإجابات الجاهزة، اكتب بيانات التواصل وخلاص.',stepOne:'اختار احتياجك',stepTwo:'بيانات التواصل',summaryLabel:'المشكلة اللي اخترتها',selected:'تم الاختيار',change:'غيّر الاختيار ↗',tip:'مش عارف موديل الجهاز؟ عادي. اختار نوع الاختبار اللي محتاجه.',chooseHeading:'إيه أقرب موقف لاحتياجك؟',chooseSub:'اختيارك السابق متعلم عليه، وتقدر تغيره في أي وقت.',detailHeading:'إيه المشكلة الأساسية؟',detailSub:'اختار إجابة واحدة. مش محتاج تكتب أي شرح.',contactHeading:'نتواصل معاك إزاي؟',contactSub:'الاسم ورقم الموبايل بس هما المطلوبين.',name:'الاسم بالكامل',phone:'رقم الموبايل / واتساب',email:'البريد الإلكتروني',note:'ملاحظة إضافية',optional:'اختياري',namePlaceholder:'اكتب اسمك',phonePlaceholder:'01XXXXXXXXX',emailPlaceholder:'name@example.com',notePlaceholder:'لو حابب تضيف أي تفاصيل...',submitCaption:'كده تمام!',submitNote:'هيفتح واتساب برسالة جاهزة فيها اختياراتك وبياناتك، راجعها قبل الإرسال.',submit:'كمّل على واتساب',privacy:'دي نسخة عرض ثابتة. بياناتك مش بتتخزن على الموقع.',footerBack:'الرجوع للصفحة الرئيسية',chooseNeed:'من فضلك اختار احتياجك.',invalidName:'من فضلك اكتب اسمك.',invalidPhone:'اكتب رقم موبايل صحيح (من 9 لـ15 رقم).',invalidEmail:'اكتب إيميل صحيح أو سيبه فاضي.',unknown:'غير محدد',waHello:'أهلًا عرب تكنولوجي، محتاج مساعدة في أجهزة الاختبارات.',waNeed:'الاحتياج',waProblem:'تفاصيل المشكلة',waName:'الاسم',waPhone:'الموبايل',waEmail:'الإيميل',waNote:'ملاحظة',noSelection:'اختار المشكلة عشان نبدأ',noSelectionDesc:'هتظهر صورة الاختيار وتفاصيله هنا.',detailNone:'مش متأكد / محتاج ترشيح'}
  };
  let lang='en';
  try {lang=localStorage.getItem('atLang')==='ar'?'ar':'en';} catch(e){}
  const search = new URLSearchParams(location.search);
  let current = Object.hasOwn(needs,search.get('need'))?search.get('need'):null;
  let detailIndex = -1;
  const t=()=>translations[lang];
  const meta = k => needs[k]?.[lang];
  function writeUrl(){const url=new URL(location.href);if(current)url.searchParams.set('need',current);else url.searchParams.delete('need');history.replaceState(null,'',url.pathname+url.search+url.hash);}
  function renderDetails(){
    const root=$('#detail-options');root.replaceChildren();
    if(!current){$('#detail-options-wrap').hidden=true;return;}
    $('#detail-options-wrap').hidden=false;
    [...meta(current).details, t().detailNone].forEach((option,index)=>{
      const label=document.createElement('label');label.className='app-detail-pill';
      const input=document.createElement('input');input.type='radio';input.name='challenge';input.value=String(index);input.checked=index===detailIndex;
      input.addEventListener('change',()=>{detailIndex=index;syncDetailState();});
      const span=document.createElement('span');span.textContent=option;
      const check=document.createElement('span');check.className='app-pill-check';check.textContent='✓';check.setAttribute('aria-hidden','true');
      label.append(input,span,check);root.append(label);
    });
    syncDetailState();
  }
  function syncDetailState(){$$('.app-detail-pill').forEach(el=>el.classList.toggle('is-checked',$('input',el).checked));}
  function renderNeed(){
    $$('input[name="need"]').forEach(inp=>{inp.checked=inp.value===current;inp.closest('.app-choice').classList.toggle('is-checked',inp.checked);});
    $$('[data-need-title]').forEach(node=>node.textContent=meta(node.dataset.needTitle).title);
    const selected=current?needs[current]:null;
    $('#selected-image').src='./assets/'+(selected?.image||'industry-lab.webp');
    $('#selected-image').alt=current?meta(current).title:'';
    $('#summary-heading').textContent=current?meta(current).title:t().noSelection;
    $('#selected-description').textContent=current?meta(current).desc:t().noSelectionDesc;
    $('.app-selected-tag').hidden=!current;
    renderDetails();
  }
  function translate(){
    document.documentElement.lang=lang;
    document.documentElement.dir=lang==='ar'?'rtl':'ltr';
    $$('[data-i18n]').forEach(el=>{const val=t()[el.dataset.i18n];if(!val)return;if(el.dataset.i18n==='heading'){el.innerHTML=val;}else el.textContent=val;});
    $$('[data-placeholder]').forEach(el=>el.placeholder=t()[el.dataset.placeholder]);
    $('#app-language').innerHTML=lang==='ar'?'AR <span>|</span> EN':'EN <span>|</span> AR';
    renderNeed();
  }
  $$('input[name="need"]').forEach(input=>input.addEventListener('change',()=>{current=input.value;detailIndex=-1;writeUrl();renderNeed();}));
  $('#app-language').addEventListener('click',()=>{lang=lang==='en'?'ar':'en';try{localStorage.setItem('atLang',lang);}catch(e){}translate();});
  $('.app-change').addEventListener('click',()=>{$('input[name="need"]')?.focus({preventScroll:true});});
  const name=$('#customer-name'),phone=$('#customer-phone'),email=$('#customer-email');
  const validation=(input,valid,key)=>{
    input.classList.toggle('is-invalid',!valid);input.setAttribute('aria-invalid',String(!valid));
    const err=$('#'+(input===name?'name':input===phone?'phone':'email')+'-error');
    err.textContent=valid?'':t()[key];return valid;
  };
  [name,phone,email].forEach(el=>el.addEventListener('input',()=>{el.classList.remove('is-invalid');el.removeAttribute('aria-invalid');const error=$('#'+(el===name?'name':el===phone?'phone':'email')+'-error');error.textContent='';}));
  $('#application-form').addEventListener('submit',event=>{
    event.preventDefault();
    if(!current){$('#choose-need').scrollIntoView({behavior:'smooth',block:'center'});$$('.app-choice')[0]?.focus();return;}
    const fullName=name.value.trim(),digits=phone.value.replace(/\D/g,''),mail=email.value.trim();
    const okName=validation(name,fullName.length>=2,'invalidName');
    const okPhone=validation(phone,digits.length>=9&&digits.length<=15&&/^[+()\d\s-]+$/.test(phone.value.trim()),'invalidPhone');
    const okEmail=validation(email,!mail||email.checkValidity(),'invalidEmail');
    if(!okName||!okPhone||!okEmail){( !okName?name:!okPhone?phone:email).focus();return;}
    const selectedChallenge=detailIndex>=0?(meta(current).details[detailIndex]||t().detailNone):t().unknown;
    const notes=$('#customer-notes').value.trim();
    const body=[t().waHello,'',`${t().waNeed}: ${meta(current).title}`,`${t().waProblem}: ${selectedChallenge}`,`${t().waName}: ${fullName}`,`${t().waPhone}: ${phone.value.trim()}`,`${t().waEmail}: ${mail||'—'}`,`${t().waNote}: ${notes||'—'}`].join('\n');
    // The user reviews and sends the prefilled message; no data sent from the site itself.
    const dest=`https://wa.me/${phoneRecipient}?text=${encodeURIComponent(body)}`;
    window.location.assign(dest);
  });
  translate();
  if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches&&window.gsap){
    gsap.from('.app-intro > *',{opacity:0,y:12,duration:.48,stagger:.06,ease:'power2.out'});
    gsap.from('.app-summary,.app-form',{opacity:0,y:16,duration:.6,stagger:.1,delay:.13,ease:'power2.out'});
  }
})();
