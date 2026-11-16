/* Arab Technology — compact enquiry flow. Static GitHub Pages; no backend or data storage. */
(()=>{
  'use strict';
  const $=(s)=>document.querySelector(s);
  const $$=(s)=>[...document.querySelectorAll(s)];
  const RECIPIENT='201114447033'; // Confirm the business number before launch.
  const needs={
    lab:{image:'industry-lab-hd.webp',en:{title:'Setting up a testing laboratory',description:'Equipment for a new or existing laboratory',challenges:['Starting a new laboratory','Upgrading existing equipment','Replacing a machine','Help choosing the right tests','Not sure yet — advise me']},ar:{title:'تجهيز معمل اختبارات',description:'أجهزة لمعمل جديد أو لتطوير معمل قائم',challenges:['تجهيز معمل من الصفر','تطوير أجهزة معمل حالي','استبدال جهاز قديم','مساعدة في اختيار الاختبارات','مش متأكد — محتاج ترشيح']}},
    site:{image:'industry-construction-hd.webp',en:{title:'Construction site equipment',description:'Testing equipment for site operations',challenges:['Concrete testing on site','Soil or compaction testing','Asphalt testing equipment','Setting up a site laboratory','Not sure yet — advise me']},ar:{title:'أجهزة لموقع إنشاءات',description:'أجهزة الاختبارات في الموقع',challenges:['اختبارات الخرسانة بالموقع','اختبارات التربة والدمك','أجهزة اختبارات الأسفلت','تجهيز معمل موقع','مش متأكد — محتاج ترشيح']}},
    research:{image:'industry-research-hd.webp',en:{title:'Research & teaching equipment',description:'Laboratory solutions for research and education',challenges:['Equipping a teaching lab','Setting up a research lab','A device for a specific experiment','Replacing an older instrument','Not sure yet — advise me']},ar:{title:'أجهزة للأبحاث والتعليم',description:'أجهزة للجامعات والمعامل البحثية',challenges:['تجهيز معمل تعليمي','تجهيز معمل بحثي','جهاز لتجربة معينة','استبدال جهاز قديم','مش متأكد — محتاج ترشيح']}},
    quality:{image:'industry-inspection-hd.webp',en:{title:'Quality control & inspection',description:'Check material properties and testing results',challenges:['Concrete strength testing','Soil density / CBR testing','Asphalt quality tests','Cement testing','Not sure yet — advise me']},ar:{title:'اختبارات الجودة والفحص',description:'أجهزة لفحص المواد والتحقق من النتائج',challenges:['اختبار مقاومة الخرسانة','اختبار كثافة التربة أو CBR','اختبارات جودة الأسفلت','اختبارات الأسمنت','مش متأكد — محتاج ترشيح']}}
  };
  const text={
    en:{back:'Back to website',eyebrow:'EQUIPMENT ENQUIRY',heading:'Find the right testing equipment.',lead:"Select your request and leave your number. We'll help you choose.",imageTag:'YOUR REQUEST',formHeading:'Tell us what you need',requiredHint:'* Required',needLabel:'What do you need help with?',needPlaceholder:'Select your request',challengeLabel:'What is the main issue?',challengePlaceholder:'Select an option',contactHeading:'Contact details',contactHint:"We'll contact you about your request",name:'Full name',phone:'Phone / WhatsApp',email:'Email',optional:'Optional',addNote:'+ Add a note',namePlaceholder:'Your full name',phonePlaceholder:'01XXXXXXXXX',emailPlaceholder:'name@example.com',notePlaceholder:'Any additional details...',submit:'Continue on WhatsApp',submitNote:'A ready-made message will open. You review and send it.',privacy:'Preview website · Your contact details are not stored here.',previewNone:'Select your request',previewNoneDesc:'The relevant photo will appear here.',errorNeed:'Please select your request.',errorChallenge:'Please select an issue.',errorName:'Please enter your name.',errorPhone:'Please enter a valid phone number (9–15 digits).',errorEmail:'Enter a valid email or leave this blank.',messageHello:'Hello Arab Technology, I need help with testing equipment.',messageNeed:'Request',messageChallenge:'Main issue',messageName:'Name',messagePhone:'Phone',messageEmail:'Email',messageNote:'Note'},
    ar:{back:'الرجوع للموقع',eyebrow:'اطلب مساعدة في اختيار الأجهزة',heading:'اختار احتياجك، وهنساعدك تلاقي الجهاز.',lead:'اختار المشكلة من القائمة، وسيب رقمك عشان نتواصل معاك.',imageTag:'طلبك',formHeading:'إيه اللي محتاجه؟',requiredHint:'* مطلوب',needLabel:'نوع الطلب',needPlaceholder:'اختار نوع الطلب',challengeLabel:'إيه المشكلة الأساسية؟',challengePlaceholder:'اختار المشكلة',contactHeading:'بيانات التواصل',contactHint:'هنتواصل معاك بخصوص طلبك',name:'الاسم',phone:'رقم الموبايل / واتساب',email:'الإيميل',optional:'اختياري',addNote:'+ أضف ملاحظة',namePlaceholder:'اسمك بالكامل',phonePlaceholder:'01XXXXXXXXX',emailPlaceholder:'name@example.com',notePlaceholder:'أي تفاصيل إضافية...',submit:'كمّل على واتساب',submitNote:'هتفتح رسالة جاهزة، تراجعها وتبعتها بنفسك.',privacy:'نسخة عرض · بيانات التواصل مش بتتخزن على الموقع.',previewNone:'اختار نوع الطلب',previewNoneDesc:'الصورة المناسبة هتظهر هنا.',errorNeed:'من فضلك اختار نوع الطلب.',errorChallenge:'من فضلك اختار المشكلة.',errorName:'من فضلك اكتب اسمك.',errorPhone:'اكتب رقم موبايل صحيح (9–15 رقم).',errorEmail:'اكتب إيميل صحيح أو سيبه فاضي.',messageHello:'أهلًا عرب تكنولوجي، محتاج مساعدة في أجهزة الاختبارات.',messageNeed:'نوع الطلب',messageChallenge:'المشكلة',messageName:'الاسم',messagePhone:'الموبايل',messageEmail:'الإيميل',messageNote:'ملاحظة'}
  };
  const options=new URLSearchParams(location.search);
  let lang='en';try{lang=localStorage.getItem('atLang')==='ar'?'ar':'en'}catch(e){}
  let need=Object.prototype.hasOwnProperty.call(needs,options.get('need'))?options.get('need'):'';
  let challenge='';
  const t=()=>text[lang];
  const info=k=>needs[k]?.[lang];
  function option(value,label){const el=document.createElement('option');el.value=value;el.textContent=label;return el;}
  function resetError(id){const node=$('#'+id+'-error');if(node)node.textContent='';const field=$('#'+(id==='need'?'need-select':id==='challenge'?'challenge-select':id==='name'?'customer-name':id==='phone'?'customer-phone':'customer-email'));field?.classList.remove('is-invalid');field?.removeAttribute('aria-invalid');}
  function changeNeed(value){need=value;challenge='';const url=new URL(location.href);if(need)url.searchParams.set('need',need);else url.searchParams.delete('need');history.replaceState(null,'',url.pathname+url.search+url.hash);resetError('need');resetError('challenge');renderSelections();}
  function renderSelections(){
    const main=$('#need-select');main.replaceChildren(option('',t().needPlaceholder));Object.keys(needs).forEach(key=>main.append(option(key,info(key).title)));main.value=need;
    const list=$('#challenge-select');list.replaceChildren(option('',t().challengePlaceholder));list.disabled=!need;
    if(need){info(need).challenges.forEach((title,index)=>list.append(option(String(index),title)));if(challenge)list.value=challenge;}
    const image=$('#selected-image');image.src='./assets/'+(need?needs[need].image:'industry-lab-hd.webp');image.alt=need?info(need).title:'Laboratory equipment';
    $('#preview-heading').textContent=need?info(need).title:t().previewNone;
    $('#selected-description').textContent=need?info(need).description:t().previewNoneDesc;
    $('.enquiry-visual').classList.toggle('is-selected',!!need);
  }
  function translate(){document.documentElement.lang=lang;document.documentElement.dir=lang==='ar'?'rtl':'ltr';$$('[data-i18n]').forEach(el=>{el.textContent=t()[el.dataset.i18n]||'';});$$('[data-placeholder]').forEach(el=>{el.placeholder=t()[el.dataset.placeholder]||'';});$('#app-language').textContent=lang==='en'?'العربية':'English';renderSelections();}
  $('#need-select').addEventListener('change',event=>changeNeed(event.target.value));
  $('#challenge-select').addEventListener('change',event=>{challenge=event.target.value;resetError('challenge');});
  $('#app-language').addEventListener('click',()=>{lang=lang==='en'?'ar':'en';try{localStorage.setItem('atLang',lang)}catch(e){}translate();});
  $$('#customer-name,#customer-phone,#customer-email').forEach(input=>input.addEventListener('input',()=>resetError(input.id.replace('customer-',''))));
  function invalidate(id,key){const inp=$('#'+(id==='need'?'need-select':id==='challenge'?'challenge-select':`customer-${id}`));inp.classList.add('is-invalid');inp.setAttribute('aria-invalid','true');$('#'+id+'-error').textContent=t()[key];return inp;}
  $('#application-form').addEventListener('submit',ev=>{
    ev.preventDefault();
    ['need','challenge','name','phone','email'].forEach(resetError);
    const name=$('#customer-name').value.trim(),phone=$('#customer-phone').value.trim(),email=$('#customer-email').value.trim(),digits=phone.replace(/\D/g,'');
    let first=null;
    if(!need)first=invalidate('need','errorNeed');
    if(need&&challenge==='')first=first||invalidate('challenge','errorChallenge');
    if(name.length<2)first=first||invalidate('name','errorName');
    if(!/^[+()\d\s-]+$/.test(phone)||digits.length<9||digits.length>15)first=first||invalidate('phone','errorPhone');
    if(email&&!$('#customer-email').checkValidity())first=first||invalidate('email','errorEmail');
    if(first){first.focus();return;}
    const note=$('#customer-notes').value.trim();
    const lines=[t().messageHello,'',`${t().messageNeed}: ${info(need).title}`,`${t().messageChallenge}: ${info(need).challenges[Number(challenge)]}`,`${t().messageName}: ${name}`,`${t().messagePhone}: ${phone}`];
    if(email)lines.push(`${t().messageEmail}: ${email}`);
    if(note)lines.push(`${t().messageNote}: ${note}`);
    window.location.assign(`https://wa.me/${RECIPIENT}?text=${encodeURIComponent(lines.join('\n'))}`);
  });
  translate();
  if(window.gsap&&!matchMedia('(prefers-reduced-motion: reduce)').matches){gsap.from('.enquiry-intro',{opacity:0,y:10,duration:.42,ease:'power2.out'});gsap.from('.enquiry-layout',{opacity:0,y:14,duration:.52,delay:.1,ease:'power2.out'});}
})();
