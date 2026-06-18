/* ============================================================
   i18n + WhatsApp wiring + small UI behavior
   ------------------------------------------------------------
   EDIT THESE FIRST — your contact details:
   ============================================================ */
const CONFIG = {
  // WhatsApp number, international format, digits only (no +, spaces, dashes).
  WHATSAPP_NUMBER: "905061129172",
  PHONE_DISPLAY:   "+90 506 112 91 72",
  ADDRESS_TR:      "R Plaza Dent Ağız ve Diş Sağlığı Polikliniği — Odunluk Mah. Akpınar Cad. No 21 C/1, Nilüfer / Bursa",
  ADDRESS_EN:      "R Plaza Dent Ağız ve Diş Sağlığı Polikliniği — Odunluk Mah. Akpınar Cad. No 21 C/1, Nilüfer / Bursa",
  INSTAGRAM_URL:   "https://instagram.com/dr_kubikbc",
  // Contact-form endpoint. Create a free form at https://formspree.io, then paste
  // its endpoint here (looks like https://formspree.io/f/abcdwxyz).
  FORMSPREE_ENDPOINT: "https://formspree.io/f/xjgddrzg",
};

const WA_MSG = {
  appointment: { tr: "Merhaba, randevu almak istiyorum.", en: "Hello, I'd like to book an appointment." },
  courses:     { tr: "Merhaba, eğitimleriniz hakkında bilgi almak istiyorum.", en: "Hello, I'd like information about your courses." },
};
function waLink(intent, lang) {
  const msg = (WA_MSG[intent] || WA_MSG.appointment)[lang] || WA_MSG.appointment.tr;
  return `https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

/* ============================================================ DICTIONARY */
const I18N = {
  tr: {
    "nav.treatments": "Tedaviler",
    "nav.about": "Hakkımda",
    "nav.journey": "Süreç",
    "nav.courses": "Eğitimler",
    "nav.blog": "Blog",
    "nav.contact": "İletişim",
    "cta.appointment": "Randevu Al",
    "cta.book": "Randevu Oluştur",

    "hero.eyebrow": "Protetik Diş Tedavisi Uzmanı",
    "hero.h1": "Kubilay Barış Çiçek",
    "hero.sub": "Estetik ve dijital diş hekimliği",
    "hero.cta1": "Randevu Al",
    "hero.cta2": "Tedaviler",
    "hero.scroll": "Keşfet",
    "tagline": "Gülüş Tasarımı &nbsp;·&nbsp; Çene Eklem Bozuklukları &nbsp;·&nbsp; Horlama Protezi",

    "intro.kicker": "Yaklaşım",
    "intro.h2": "Tanı, planlama ve <em>uygulama.</em>",
    "intro.p1": "Her tedavi ayrıntılı bir muayeneyle başlar. Dijital planlama, mikroskop altında çalışma ve diş laboratuvarıyla iş birliği, tedavi sürecinin parçalarıdır.",
    "intro.p2": "Estetiğin yanı sıra çiğneme fonksiyonu ve çene ekleminin sağlığı da değerlendirilir.",
    "intro.cta": "Randevu Al",

    "treat.kicker": "Tedaviler",
    "treat.h2": "Başlıca <em>tedavi alanları.</em>",
    "treat.aside": "Aşağıdaki konularda muayene ve tedavi yapılır. Ayrıntılar için randevu oluşturabilirsiniz.",
    "t1.title": "Gülüş Tasarımı",
    "t1.desc": "Dişlerin biçimi, rengi ve diziliminin dijital ortamda planlanmasıdır. Uygulamadan önce plan birlikte değerlendirilir.",
    "t2.title": "Çene Eklem Bozuklukları",
    "t2.desc": "Çene ekleminde ağrı, ses, kilitlenme ve diş sıkma gibi durumların muayenesi ve tedavisidir.",
    "t3.title": "Horlama Protezi",
    "t3.desc": "Horlama ve hafif uyku apnesinde kullanılan, ağız içine takılan apareylerin hazırlanmasıdır. Uygunluk muayeneyle belirlenir.",
    "treat.more": "Randevu al",

    "about.kicker": "Hakkında",
    "about.h2": "Kubilay Barış <em>Çiçek</em>",
    "about.p1": "Protetik diş tedavisi uzmanı olan Kubilay Barış Çiçek; estetik, dijital ve mikroskobik diş hekimliği alanlarında çalışmaktadır.",
    "about.p2": "Klinik çalışmalarının yanı sıra ulusal ve uluslararası kongrelerde yer alır ve meslektaşlarına yönelik eğitimler düzenler.",
    "about.cta": "Randevu Al",
    "about.ig": "@dr_kubikbc",

    "journey.kicker": "Tedavi Süreci",
    "journey.h2": "Muayeneden <em>kontrole</em> kadar süreç.",
    "j1.t": "Muayene", "j1.d": "Şikâyetlerin dinlenmesi, ağız içi inceleme ve değerlendirme.",
    "j2.t": "Görüntüleme ve analiz", "j2.d": "Gerektiğinde röntgen, fotoğraf ve dijital tarama ile durumun belgelenmesi.",
    "j3.t": "Tedavi planı", "j3.d": "Seçenekler, süre ve maliyetin paylaşılması.",
    "j4.t": "Dijital planlama", "j4.d": "Uygulanacak planın dijital ortamda hazırlanması ve değerlendirilmesi.",
    "j5.t": "Uygulama", "j5.d": "Planlanan tedavinin mikroskop altında uygulanması.",
    "j6.t": "Kontrol ve uyum", "j6.d": "Tedavinin işlevi ve uyumunun birlikte kontrol edilmesi.",
    "j7.t": "Takip", "j7.d": "Planlı kontroller ve bakım önerileri.",
    "journey.foot": "Her aşamada bilgilendirme yapılır.",

    "edu.kicker": "Meslektaşlara Eğitim",
    "edu.h2": "Meslektaşlara yönelik <em>eğitimler.</em>",
    "edu.p": "Ulusal ve uluslararası kongrelerde yer alıyor, diş hekimlerine yönelik eğitimler düzenliyorum. Program tarih ve içerikleri için iletişime geçebilirsiniz.",
    "ep1": "Uygulamalı, küçük gruplu oturumlar",
    "ep2": "Estetik ve dijital diş hekimliği içerikleri",
    "ep3": "Tarih ve katılım için bilgilendirme",
    "edu.cta": "İletişime geç",

    "results.kicker": "Klinik",
    "results.h2": "Çalışma alanından <em>görüntüler.</em>",
    "results.p": "Klinik ortamı ve çalışma sürecinden kareler.",
    "results.cap": "Güncel paylaşımlar Instagram'da",

    "faq.kicker": "Bilgilendirme",
    "faq.h2": "Sıkça sorulan <em>sorular.</em>",
    "q1.q": "Gülüş tasarımı nedir?",
    "q1.a": "Dişlerin biçim, renk ve diziliminin; yüz hatları ve kişinin beklentileri göz önünde bulundurularak dijital ortamda planlanmasıdır. Uygulama öncesinde plan birlikte değerlendirilir.",
    "q2.q": "Çene eklemi (temporomandibular) rahatsızlığının belirtileri nelerdir?",
    "q2.a": "Çene ekleminde ağrı, açıp kapama sırasında ses, kilitlenme, diş sıkma veya gıcırdatma ve baş-boyun bölgesinde gerginlik görülebilir. Kesin değerlendirme hekim muayenesi ile yapılır.",
    "q3.q": "Horlama protezi nedir, kimler için uygundur?",
    "q3.a": "Ağız içine takılan, alt çeneyi hafifçe önde konumlandırarak hava yolunu açık tutmaya yardımcı olan apareylerdir. Basit horlama ve hafif uyku apnesinde kullanılabilir; uygunluk muayene ve gerektiğinde uyku testi ile belirlenir.",
    "q4.q": "Diş sıkma (bruksizm) nasıl değerlendirilir?",
    "q4.a": "Çoğunlukla uykuda görülen diş sıkma ve gıcırdatma; diş aşınması, çene ağrısı ve baş ağrısına yol açabilir. Muayene sonrası, gece plağı gibi koruyucu yaklaşımlar değerlendirilebilir.",
    "q5.q": "İlk muayenede neler yapılır?",
    "q5.a": "Şikâyetlerin dinlenmesi, ağız içi inceleme ve gerektiğinde görüntüleme ile mevcut durum değerlendirilir; uygun seçenekler hakkında bilgi verilir.",
    "faq.all": "Tüm sorular",

    "sss.eyebrow": "Bilgilendirme",
    "sss.title": "Sıkça sorulan <em>sorular.</em>",
    "sss.sub": "Tedaviler ve muayene süreci hakkında merak edilenler.",
    "sss.note": "Buradaki bilgiler geneldir ve hekim muayenesinin yerini tutmaz; tanı ve tedavi için hekim muayenesi gereklidir.",
    "f.g1": "Gülüş Tasarımı",
    "f.g2": "Çene Eklemi Rahatsızlıkları",
    "f.g3": "Horlama Protezi",
    "f.g4": "İmplant Tedavisi",
    "f.g5": "Muayene ve Süreç",
    "f.q1.q": "Gülüş tasarımı nedir?",
    "f.q1.a": "Dişlerin biçim, renk ve diziliminin; yüz hatları ve kişinin beklentileri göz önünde bulundurularak planlanmasıdır. Amaç, doğal ve dengeli bir görünüm elde etmektir.",
    "f.q2.q": "Dijital gülüş tasarımı (DSD) nedir?",
    "f.q2.a": "Fotoğraf, video ve dijital tarama kullanılarak yeni gülüşün uygulama öncesinde bilgisayar ortamında planlanmasıdır. Böylece olası sonuç önceden değerlendirilebilir.",
    "f.q3.q": "Gülüş tasarımında dişler kesilir mi?",
    "f.q3.a": "Uygulanan yönteme göre değişir. Bazı durumlarda minimum düzeyde diş yüzeyi hazırlığı gerekebilir; uygun vakalarda kesim yapılmadan çözümler de değerlendirilebilir. Karar muayene sonrası verilir.",
    "f.q4.q": "Lamina ile zirkonyum arasındaki fark nedir?",
    "f.q4.a": "Lamina, dişin ön yüzeyine uygulanan ince porselen kaplamalardır; zirkonyum ise dişi çevreleyen daha kapsamlı bir kaplamadır. Hangisinin uygun olduğu dişin durumuna göre belirlenir.",
    "f.q5.q": "Çene eklemi rahatsızlığı (TMR) nedir?",
    "f.q5.a": "Çene ekleminin ve çevresindeki kasların işleyişiyle ilgili sorunları kapsayan bir durumdur. Çiğneme, konuşma ve çeneyi hareket ettirme sırasında belirti verebilir.",
    "f.q6.q": "Çene eklemi rahatsızlığının belirtileri nelerdir?",
    "f.q6.a": "Çene ekleminde ağrı, açıp kapama sırasında ses, kilitlenme, diş sıkma veya gıcırdatma ve baş-boyun bölgesinde gerginlik görülebilir. Kesin değerlendirme hekim muayenesi ile yapılır.",
    "f.q7.q": "Diş sıkma (bruksizm) nedir, çene eklemini etkiler mi?",
    "f.q7.a": "Bruksizm, çoğunlukla uykuda görülen istemsiz diş sıkma ve gıcırdatmadır. Zamanla diş aşınmasına, çene ağrısına ve çene eklemi sorunlarına katkıda bulunabilir.",
    "f.q8.q": "Gece plağı (oklüzal splint) ne işe yarar?",
    "f.q8.a": "Diş sıkma ve gıcırdatmanın dişler ile çene eklemi üzerindeki etkisini azaltmaya yardımcı, kişiye özel hazırlanan bir aparattır. Kullanımı muayene sonrası önerilir.",
    "f.q9.q": "Horlama protezi nedir?",
    "f.q9.a": "Uyku sırasında ağız içine takılan, alt çeneyi hafifçe önde konumlandırarak hava yolunu açık tutmaya yardımcı olan apareylerdir.",
    "f.q10.q": "Horlama protezi nasıl çalışır?",
    "f.q10.a": "Alt çeneyi ve dil kökünü hafifçe öne alarak üst solunum yolundaki daralmayı azaltmayı hedefler. Bu sayede horlama şiddeti azalabilir.",
    "f.q11.q": "Horlama protezi uyku apnesinde kullanılabilir mi?",
    "f.q11.a": "Basit horlama ve uygun görülen hafif-orta uyku apnesi durumlarında kullanılabilir. Karar, hekim değerlendirmesi ve gerektiğinde uyku testi ile verilir.",
    "f.q12.q": "Uygunluğum nasıl belirlenir?",
    "f.q12.a": "Ağız ve diş muayenesi, gerektiğinde uyku testi ve ilgili hekimlerle iş birliği ile değerlendirilir. Her hastaya uygun olmayabilir.",
    "f.q13.q": "İmplant nedir?",
    "f.q13.a": "Eksik dişlerin yerine çene kemiğine yerleştirilen ve üzerine protez uygulanan titanyum esaslı yapay diş köküdür.",
    "f.q14.q": "İmplant tedavisi kaç aşamadan oluşur?",
    "f.q14.a": "Genellikle muayene ve planlama, implantın yerleştirilmesi, iyileşme süreci ve ardından üst protezin yapılması aşamalarını içerir. Süre kişiye göre değişir.",
    "f.q15.q": "İmplant işlemi ağrılı mıdır?",
    "f.q15.a": "İşlem lokal anestezi altında yapılır; sırasında genellikle ağrı hissedilmez. Sonrasında oluşabilecek hafif rahatsızlık çoğunlukla kısa sürelidir.",
    "f.q16.q": "İmplant ne kadar dayanır?",
    "f.q16.a": "Ağız hijyeni, düzenli kontroller ve genel sağlık durumuna bağlı olarak uzun yıllar kullanılabilir. Bakım, ömrünü doğrudan etkiler.",
    "f.q17.q": "İlk muayenede neler yapılır?",
    "f.q17.a": "Şikâyetlerin dinlenmesi, ağız içi inceleme ve gerektiğinde görüntüleme ile mevcut durum değerlendirilir; uygun seçenekler hakkında bilgi verilir.",
    "f.q18.q": "Tedavi planı nasıl belirlenir?",
    "f.q18.a": "Muayene ve gerekli görüntülemelerin ardından; ihtiyaç, beklenti ve ağız sağlığı birlikte değerlendirilerek kişiye özel bir plan oluşturulur.",
    "f.q19.q": "Tedavi sonrası kontrol gerekir mi?",
    "f.q19.a": "Evet. Sonucun korunması ve olası sorunların erken fark edilmesi için planlı kontroller ve düzenli ağız bakımı önemlidir.",
    "f.q20.q": "Randevu nasıl alınır?",
    "f.q20.a": "İletişim bölümündeki WhatsApp veya telefon üzerinden randevu oluşturabilirsiniz.",

    "contact.kicker": "İletişim",
    "contact.h2": "İletişim ve <em>randevu.</em>",
    "contact.p": "Randevu ve sorularınız için WhatsApp veya telefon ile ulaşabilirsiniz.",
    "ci.clinic": "Klinik", "ci.phone": "Telefon", "ci.hours": "Çalışma saatleri",
    "ci.hours.val": "Pzt–Cmt · 10:00–18:00",
    "form.title": "Randevu talebi",
    "form.sub": "Bilgilerinizi bırakın, size dönüş yapılsın.",
    "form.name": "Ad Soyad", "form.name.ph": "Adınız ve soyadınız",
    "form.phone": "Telefon", "form.phone.ph": "05XX XXX XX XX",
    "form.subject": "Konu",
    "opt1": "Gülüş tasarımı", "opt2": "Çene eklem bozuklukları", "opt3": "Horlama protezi", "opt4": "Genel muayene", "opt5": "Eğitim / kurs",
    "form.note": "Notunuz", "form.note.ph": "Kısaca ne yaptırmak istediğinizi yazabilirsiniz.",
    "form.submit": "Gönder",
    "form.sending": "Gönderiliyor…",
    "form.success": "Teşekkürler! Talebiniz alındı, en kısa sürede dönüş yapılacaktır.",
    "form.error": "Gönderilemedi. Lütfen WhatsApp veya telefon ile ulaşın.",
    "form.kvkk": "Gönderdiğiniz bilgiler yalnızca randevu için kullanılır — KVKK kapsamında korunur.",

    "footer.tagline": "Estetik ve dijital diş hekimliği. Gülüş tasarımı, çene eklem bozuklukları ve horlama protezi.",
    "footer.menu": "Menü", "footer.contact": "İletişim", "footer.book": "Randevu al",
    "footer.rights": "Tüm hakları saklıdır.",
    "blog.eyebrow": "Blog",
    "blog.title": "Yazılar ve <em>notlar.</em>",
    "blog.sub": "Diş hekimliği, ağız sağlığı ve klinik notlar üzerine yazılar.",
    "blog.new": "Yeni Yazı",
    "blog.empty": "Henüz yazı eklenmedi.",
    "blog.empty.sub": "İlk yazınızı eklemek için “Yeni Yazı” düğmesini kullanın.",
    "blog.read": "Yazıyı oku",
    "blog.back": "Yazılara dön",
    "blog.f.title": "Başlık",
    "blog.f.titleph": "Yazı başlığı",
    "blog.f.excerpt": "Kısa özet (isteğe bağlı)",
    "blog.f.excerptph": "Kartta görünecek bir-iki cümle",
    "blog.f.body": "İçerik",
    "blog.f.bodyph": "Yazınızı buraya yazın… Boş satır yeni paragraf oluşturur.",
    "blog.f.image": "Kapak görseli (isteğe bağlı)",
    "blog.f.imagepick": "Görsel seç",
    "blog.f.save": "Yayınla",
    "blog.f.update": "Güncelle",
    "blog.f.cancel": "Vazgeç",
    "blog.edit": "Düzenle",
    "blog.delete": "Sil",
    "blog.delete.confirm": "Bu yazı silinsin mi?",
    "blog.manage": "Yönetim",
    "blog.manage.on": "Yönetim açık",
    "wa.float": "WhatsApp",
  },
  en: {
    "nav.treatments": "Treatments",
    "nav.about": "About",
    "nav.journey": "Process",
    "nav.courses": "Courses",
    "nav.blog": "Blog",
    "nav.contact": "Contact",
    "cta.appointment": "Book Appointment",
    "cta.book": "Book a Reservation",

    "hero.eyebrow": "Specialist in Prosthetic Dentistry",
    "hero.h1": "Kubilay Barış Çiçek",
    "hero.sub": "Aesthetic and digital dentistry",
    "hero.cta1": "Book Appointment",
    "hero.cta2": "Treatments",
    "hero.scroll": "Explore",
    "tagline": "Smile Design &nbsp;·&nbsp; Temporomandibular Disorders &nbsp;·&nbsp; Snoring Appliance",

    "intro.kicker": "Approach",
    "intro.h2": "Diagnosis, planning and <em>treatment.</em>",
    "intro.p1": "Every treatment begins with a detailed examination. Digital planning, work under the microscope and collaboration with the dental laboratory are parts of the treatment process.",
    "intro.p2": "Beyond aesthetics, chewing function and the health of the jaw joint are also assessed.",
    "intro.cta": "Book Appointment",

    "treat.kicker": "Treatments",
    "treat.h2": "Main <em>areas of treatment.</em>",
    "treat.aside": "Examination and treatment are provided in the areas below. You can book an appointment for details.",
    "t1.title": "Smile Design",
    "t1.desc": "Digital planning of the shape, colour and alignment of the teeth. The plan is reviewed together before any treatment.",
    "t2.title": "Temporomandibular Disorders",
    "t2.desc": "Examination and treatment of conditions such as jaw joint pain, clicking, locking and teeth grinding.",
    "t3.title": "Snoring Appliance",
    "t3.desc": "Preparation of intraoral appliances used for snoring and mild sleep apnoea. Suitability is determined by examination.",
    "treat.more": "Book",

    "about.kicker": "About",
    "about.h2": "Kubilay Barış <em>Çiçek</em>",
    "about.p1": "A specialist in prosthetic dentistry, Kubilay Barış Çiçek works in the fields of aesthetic, digital and microscopic dentistry.",
    "about.p2": "Alongside his clinical work, he takes part in national and international congresses and organises training for fellow dentists.",
    "about.cta": "Book Appointment",
    "about.ig": "@dr_kubikbc",

    "journey.kicker": "Treatment Process",
    "journey.h2": "The process, from <em>examination</em> to follow-up.",
    "j1.t": "Examination", "j1.d": "Listening to the complaint, an intraoral examination and assessment.",
    "j2.t": "Imaging & analysis", "j2.d": "When needed, documenting the situation with X-rays, photographs and digital scanning.",
    "j3.t": "Treatment plan", "j3.d": "Sharing the options, timing and cost.",
    "j4.t": "Digital planning", "j4.d": "Preparing and reviewing the planned treatment in a digital environment.",
    "j5.t": "Application", "j5.d": "Carrying out the planned treatment under the microscope.",
    "j6.t": "Check & fit", "j6.d": "Checking the function and fit of the treatment together.",
    "j7.t": "Follow-up", "j7.d": "Scheduled check-ups and care advice.",
    "journey.foot": "You are informed at every stage.",

    "edu.kicker": "For Fellow Dentists",
    "edu.h2": "Training for <em>fellow dentists.</em>",
    "edu.p": "I take part in national and international congresses and organise training for dentists. Please get in touch for programme dates and content.",
    "ep1": "Hands-on, small-group sessions",
    "ep2": "Aesthetic and digital dentistry content",
    "ep3": "Information on dates and enrollment",
    "edu.cta": "Get in touch",

    "results.kicker": "Clinic",
    "results.h2": "Images from <em>the practice.</em>",
    "results.p": "Glimpses of the clinic and the working process.",
    "results.cap": "Latest posts on Instagram",

    "faq.kicker": "Information",
    "faq.h2": "Frequently asked <em>questions.</em>",
    "q1.q": "What is smile design?",
    "q1.a": "It is the digital planning of the shape, colour and alignment of the teeth, taking facial features and the person's expectations into account. The plan is reviewed together before any treatment.",
    "q2.q": "What are the signs of a temporomandibular (jaw joint) disorder?",
    "q2.a": "Pain in the jaw joint, clicking when opening or closing, locking, clenching or grinding, and tension around the head and neck can occur. A definitive assessment is made through clinical examination.",
    "q3.q": "What is a snoring appliance and who is it suitable for?",
    "q3.a": "It is an intraoral appliance that helps keep the airway open by positioning the lower jaw slightly forward. It may be used for simple snoring and mild sleep apnoea; suitability is determined by examination and, when needed, a sleep test.",
    "q4.q": "How is teeth grinding (bruxism) assessed?",
    "q4.a": "Grinding and clenching, usually during sleep, can cause tooth wear, jaw pain and headaches. After examination, protective approaches such as a night guard may be considered.",
    "q5.q": "What happens at the first examination?",
    "q5.a": "Your concerns are discussed, an intraoral examination is carried out and, when needed, imaging is used to assess the situation; you are then informed about suitable options.",
    "faq.all": "All questions",

    "sss.eyebrow": "Information",
    "sss.title": "Frequently asked <em>questions.</em>",
    "sss.sub": "Common questions about the treatments and the examination process.",
    "sss.note": "The information here is general and does not replace a clinical examination; diagnosis and treatment require an in-person examination.",
    "f.g1": "Smile Design",
    "f.g2": "Temporomandibular (Jaw Joint) Disorders",
    "f.g3": "Snoring Appliance",
    "f.g4": "Implant Treatment",
    "f.g5": "Examination & Process",
    "f.q1.q": "What is smile design?",
    "f.q1.a": "It is the planning of the shape, colour and alignment of the teeth, taking facial features and the person's expectations into account. The aim is a natural, balanced appearance.",
    "f.q2.q": "What is digital smile design (DSD)?",
    "f.q2.a": "Using photos, video and digital scans, the new smile is planned on a computer before any treatment, so the likely result can be reviewed in advance.",
    "f.q3.q": "Are the teeth trimmed during smile design?",
    "f.q3.a": "It depends on the method. Some cases need minimal surface preparation; in suitable cases, solutions without trimming may also be considered. The decision is made after examination.",
    "f.q4.q": "What is the difference between laminate veneers and zirconium?",
    "f.q4.a": "Laminate veneers are thin porcelain shells applied to the front surface of the tooth; zirconium is a more comprehensive crown that surrounds the tooth. Which is suitable depends on the tooth's condition.",
    "f.q5.q": "What is a temporomandibular disorder (TMD)?",
    "f.q5.a": "It refers to problems involving the jaw joint and surrounding muscles. Symptoms may appear during chewing, speaking and jaw movement.",
    "f.q6.q": "What are the signs of a temporomandibular disorder?",
    "f.q6.a": "Pain in the jaw joint, clicking when opening or closing, locking, clenching or grinding, and tension around the head and neck can occur. A definitive assessment is made through examination.",
    "f.q7.q": "What is teeth grinding (bruxism), and does it affect the jaw joint?",
    "f.q7.a": "Bruxism is involuntary clenching and grinding, usually during sleep. Over time it can contribute to tooth wear, jaw pain and jaw-joint problems.",
    "f.q8.q": "What does a night guard (occlusal splint) do?",
    "f.q8.a": "It is a custom-made appliance that helps reduce the effect of clenching and grinding on the teeth and jaw joint. Its use is recommended after examination.",
    "f.q9.q": "What is a snoring appliance?",
    "f.q9.a": "It is an intraoral appliance worn during sleep that helps keep the airway open by positioning the lower jaw slightly forward.",
    "f.q10.q": "How does a snoring appliance work?",
    "f.q10.a": "By bringing the lower jaw and tongue base slightly forward, it aims to reduce narrowing of the upper airway, which can lessen snoring.",
    "f.q11.q": "Can a snoring appliance be used for sleep apnoea?",
    "f.q11.a": "It may be used in simple snoring and suitable mild-to-moderate sleep apnoea. The decision is made through clinical assessment and, when needed, a sleep test.",
    "f.q12.q": "How is suitability determined?",
    "f.q12.a": "Through an oral and dental examination, a sleep test when needed, and cooperation with the relevant physicians. It may not be suitable for everyone.",
    "f.q13.q": "What is a dental implant?",
    "f.q13.a": "It is a titanium-based artificial tooth root placed in the jawbone to replace a missing tooth, onto which a prosthesis is fitted.",
    "f.q14.q": "How many stages does implant treatment involve?",
    "f.q14.a": "It generally includes examination and planning, placement of the implant, a healing period, and then fitting the prosthesis. The timing varies per person.",
    "f.q15.q": "Is the implant procedure painful?",
    "f.q15.a": "The procedure is carried out under local anaesthesia, so pain is generally not felt during it. Any mild discomfort afterwards is usually short-lived.",
    "f.q16.q": "How long do implants last?",
    "f.q16.a": "With good oral hygiene, regular check-ups and general health, they can last many years. Care directly affects their lifespan.",
    "f.q17.q": "What happens at the first examination?",
    "f.q17.a": "Your concerns are discussed, an intraoral examination is carried out and, when needed, imaging is used to assess the situation; you are then informed about suitable options.",
    "f.q18.q": "How is the treatment plan decided?",
    "f.q18.a": "After examination and any necessary imaging, your needs, expectations and oral health are considered together to create a personalised plan.",
    "f.q19.q": "Are follow-up visits needed after treatment?",
    "f.q19.a": "Yes. Planned check-ups and regular oral care are important to maintain the result and notice any issues early.",
    "f.q20.q": "How do I make an appointment?",
    "f.q20.a": "You can arrange an appointment via WhatsApp or phone in the contact section.",

    "contact.kicker": "Contact",
    "contact.h2": "Contact and <em>appointments.</em>",
    "contact.p": "You can reach out via WhatsApp or telephone for appointments and questions.",
    "ci.clinic": "Clinic", "ci.phone": "Phone", "ci.hours": "Working hours",
    "ci.hours.val": "Mon–Sat · 10:00–18:00",
    "form.title": "Appointment request",
    "form.sub": "Leave your details and we will get back to you.",
    "form.name": "Full name", "form.name.ph": "Your first and last name",
    "form.phone": "Phone", "form.phone.ph": "+90 5XX XXX XX XX",
    "form.subject": "Subject",
    "opt1": "Smile design", "opt2": "Temporomandibular disorders", "opt3": "Snoring appliance", "opt4": "General check-up", "opt5": "Course / training",
    "form.note": "Your note", "form.note.ph": "Briefly tell us what you'd like done.",
    "form.submit": "Send",
    "form.sending": "Sending…",
    "form.success": "Thank you! Your request has been received — we'll get back to you shortly.",
    "form.error": "Could not send. Please reach us via WhatsApp or phone.",
    "form.kvkk": "Your details are used only to arrange an appointment and are kept confidential.",

    "footer.tagline": "Aesthetic and digital dentistry. Smile design, temporomandibular disorders and snoring appliances.",
    "footer.menu": "Menu", "footer.contact": "Contact", "footer.book": "Book appointment",
    "footer.rights": "All rights reserved.",
    "blog.eyebrow": "Blog",
    "blog.title": "Articles and <em>notes.</em>",
    "blog.sub": "Articles on dentistry, oral health and clinical notes.",
    "blog.new": "New Post",
    "blog.empty": "No posts yet.",
    "blog.empty.sub": "Use the “New Post” button to add your first article.",
    "blog.read": "Read article",
    "blog.back": "Back to posts",
    "blog.f.title": "Title",
    "blog.f.titleph": "Post title",
    "blog.f.excerpt": "Short summary (optional)",
    "blog.f.excerptph": "A sentence or two shown on the card",
    "blog.f.body": "Content",
    "blog.f.bodyph": "Write your article here… A blank line starts a new paragraph.",
    "blog.f.image": "Cover image (optional)",
    "blog.f.imagepick": "Choose image",
    "blog.f.save": "Publish",
    "blog.f.update": "Update",
    "blog.f.cancel": "Cancel",
    "blog.edit": "Edit",
    "blog.delete": "Delete",
    "blog.delete.confirm": "Delete this post?",
    "blog.manage": "Manage",
    "blog.manage.on": "Managing",
    "wa.float": "WhatsApp",
  },
};

/* ============================================================ APPLY */
let currentLang = "tr";
function applyLang(lang) {
  currentLang = (lang === "en") ? "en" : "tr";
  const dict = I18N[currentLang];
  window.I18N = I18N; window.currentLang = currentLang;
  document.documentElement.setAttribute("lang", currentLang);

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const k = el.getAttribute("data-i18n"); if (dict[k] != null) el.textContent = dict[k];
  });
  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const k = el.getAttribute("data-i18n-html"); if (dict[k] != null) el.innerHTML = dict[k];
  });
  document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
    const k = el.getAttribute("data-i18n-ph"); if (dict[k] != null) el.setAttribute("placeholder", dict[k]);
  });
  document.querySelectorAll("[data-bind]").forEach((el) => {
    const b = el.getAttribute("data-bind");
    if (b === "address") el.textContent = currentLang === "en" ? CONFIG.ADDRESS_EN : CONFIG.ADDRESS_TR;
    if (b === "phone") el.textContent = CONFIG.PHONE_DISPLAY;
  });
  document.querySelectorAll("[data-wa]").forEach((el) => {
    el.setAttribute("href", waLink(el.getAttribute("data-wa"), currentLang));
  });
  document.querySelectorAll(".lang button").forEach((b) => {
    b.classList.toggle("active", b.getAttribute("data-lang") === currentLang);
  });
  try { localStorage.setItem("kc_lang", currentLang); } catch (e) {}
}

/* ============================================================ INIT */
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-ig]").forEach((el) => el.setAttribute("href", CONFIG.INSTAGRAM_URL));
  document.querySelectorAll("[data-tel]").forEach((el) => el.setAttribute("href", "tel:" + CONFIG.PHONE_DISPLAY.replace(/\s/g, "")));
  const mapHref = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(CONFIG.ADDRESS_TR);
  document.querySelectorAll("[data-map]").forEach((el) => el.setAttribute("href", mapHref));

  // ---- Contact form (Formspree, AJAX) ----
  const form = document.getElementById("appt-form");
  if (form) {
    form.setAttribute("action", CONFIG.FORMSPREE_ENDPOINT);
    const statusEl = document.getElementById("form-status");
    const showStatus = (msg, isErr) => {
      if (!statusEl) return;
      statusEl.textContent = msg; statusEl.hidden = false;
      statusEl.classList.toggle("err", !!isErr);
      statusEl.classList.toggle("ok", !isErr);
    };
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const dict = I18N[currentLang];
      if (!CONFIG.FORMSPREE_ENDPOINT || CONFIG.FORMSPREE_ENDPOINT.indexOf("YOUR_FORM_ID") !== -1) {
        showStatus(dict["form.error"], true); return;
      }
      const btn = form.querySelector("button[type=submit]");
      const label = btn ? btn.querySelector("[data-i18n]") : null;
      const original = label ? label.textContent : "";
      if (btn) btn.disabled = true;
      if (label) label.textContent = dict["form.sending"];
      try {
        const res = await fetch(CONFIG.FORMSPREE_ENDPOINT, {
          method: "POST", body: new FormData(form), headers: { "Accept": "application/json" },
        });
        if (res.ok) { form.reset(); showStatus(dict["form.success"], false); }
        else { showStatus(dict["form.error"], true); }
      } catch (err) { showStatus(dict["form.error"], true); }
      if (btn) btn.disabled = false;
      if (label) label.textContent = original;
    });
  }

  document.querySelectorAll(".lang button").forEach((b) =>
    b.addEventListener("click", () => applyLang(b.getAttribute("data-lang"))));

  const menuBtn = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      if (mobileMenu.hasAttribute("hidden")) mobileMenu.removeAttribute("hidden");
      else mobileMenu.setAttribute("hidden", "");
    });
    mobileMenu.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => mobileMenu.setAttribute("hidden", "")));
  }

  let saved = "tr";
  try { saved = localStorage.getItem("kc_lang") || "tr"; } catch (e) {}
  applyLang(saved);
});
