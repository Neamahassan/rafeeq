// ===== قائمة المؤذنين =====
// لإضافة شيخ: ضعي ملف mp3 داخل مجلد audio، ثم أضيفي سطرًا جديدًا هنا.
//   id    : اسم قصير بالإنجليزي بدون مسافات ولا يتكرر
//   name  : الاسم الذي سيظهر في التطبيق
//   file  : مسار ملف الأذان العادي
//   fajr  : (اختياري) مسار أذان الفجر إن كان مختلفًا. احذفيه إن لم يوجد
// الخيار الأول نغمة مدمجة بدون ملف، لتجربة الخاصية قبل إضافة الملفات.
const ADHAN_LIST=[
 {id:'tone',name:'نغمة تنبيه بسيطة (مدمجة)',file:null},
 {id:'makkah',name:'الحرم المكي',file:'audio/makkah.mp3',fajr:'audio/makkah-fajr.mp3'},
 {id:'madinah',name:'المسجد النبوي',file:'audio/madinah.mp3',fajr:'audio/madinah-fajr.mp3'},
 {id:'afasy',name:'الشيخ مشاري العفاسي',file:'audio/afasy.mp3'},
 {id:'qatami',name:'الشيخ ناصر القطامي',file:'audio/qatami.mp3'},
 {id:'azhar',name:'أذان مصري',file:'audio/egypt.mp3'}
];
