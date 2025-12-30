<div dir="rtl">

# 🇬🇷 Greeko – منصة الثقافة والتاريخ اليوناني

**Greeko** هي منصة ويب تعليمية ومعلوماتية شاملة مخصصة لـ **الثقافة اليونانية، التاريخ، الأساطير، السياحة، وتطور المجتمع**.  
توفر المنصة تجربة تفاعلية غنية بالمحتوى والأدوات التعليمية، مع واجهة حديثة مبنية باستخدام **Next.js (App Router)**.

---

## 🚀 العرض المباشر

_تم النشر باستخدام Vercel_  
👉 https://greek-scope.vercel.app/

---

## 🌍 نظرة عامة

تهدف منصة **Greeko** إلى تقديم اليونان بطريقة حديثة وتفاعلية من خلال الجمع بين:
- الحضارات التاريخية
- الثقافة والترفيه
- الأدوات التعليمية
- الوجهات السياحية
- الإعلام وتطور المجتمع

تم تنظيم المشروع باستخدام **Next.js App Router** لضمان القابلية للتوسع وتنظيم المسارات بشكل نظيف.

---

## ✨ المميزات

### 🏛️ التاريخ والحضارات
- الحضارة المينوية
- الحضارة الميسينية
- الحضارة اليونانية القديمة (العصر الآرخي)
- الحضارة اليونانية الكلاسيكية
- الحضارة الهلنستية
- صفحات تاريخية مخصصة تعتمد على بيانات منظمة

### 🎭 الثقافة والترفيه
- نظرة شاملة على الثقافة اليونانية
- قسم الأساطير اليونانية
- محتوى سياحي متنوع
- شخصيات يونانية مؤثرة
- حقائق ممتعة ومقارنات
- تأثير الثقافة اليونانية في العصر الحديث

### 🗺️ الوجهات والأماكن
- أثينا
- سانتوريني
- رودس
- صفحات ديناميكية للأماكن باستخدام Route Parameters
- المعالم السياحية وأماكن الجذب

### 🎓 الأدوات التعليمية
- اختبار تفاعلي
- محلل الكلمات اليونانية
- خريطة تفاعلية
- قسم الأسئلة الشائعة (FAQ)

### 🏠 الصفحة الرئيسية وواجهة المستخدم
- أقسام ترحيبية (Landing Sections)
- أماكن مميزة للزيارة
- بطاقات ومكونات قابلة لإعادة الاستخدام
- شريط تنقل وتذييل عام للموقع

### 🌗 مميزات إضافية
- دعم الوضع الليلي والنهاري باستخدام Context API
- تصميم متجاوب مع جميع الأجهزة
- مكونات قابلة لإعادة الاستخدام
- استخدام TypeScript لتعريف الواجهات (Interfaces)

---

## 🛠️ التقنيات المستخدمة

- **Next.js 13+ (App Router)**
- **React**
- **TypeScript**
- **Tailwind CSS**
- **Context API**
- **Vercel** (النشر)

---

## 📂 هيكل المشروع

<div dir="ltr">

* app/
    * favicon.ico
    * globals.css
    * layout.tsx
    * loading.tsx
    * not-found.tsx
    * page.tsx
    * (pages)/
        * about-greece/
            * page.tsx
        * commercial/
            * page.tsx
        * cultureEntertainment/
            * page.tsx
            * culture/
                * page.tsx
            * mythology/
                * page.tsx
            * tourism/
                * page.tsx
        * destinations/
            * athens/
                * page.tsx
            * rhodes/
                * page.tsx
            * santorini/
                * page.tsx
        * educational/
            * page.tsx
        * history/
            * page.tsx
            * archaicGreekCivilization/
                * page.tsx
            * classicalGreekCivilization/
                * page.tsx
            * hellenisticCivilization/
                * page.tsx
            * minoanCivilization/
                * page.tsx
            * mycenaeanCivilization/
                * page.tsx
        * media/
            * page.tsx
        * places/
            * [id]/
                * page.tsx
        * societyDevelopment/
            * page.tsx

* components/
    * aboutComponents/
        * aboutCard.tsx
        * aboutDetailsCard.tsx
        * aboutLanding.tsx
        * aboutStateCard.tsx
        * aboutTimeLine.tsx
        * timeLineItem.tsx
    * common/
        * navbar.tsx
        * footer.tsx
        * visitGreek.tsx
    * cultureEntertainment/
        * ceBanner.tsx
        * CeComparison.tsx
        * CeCTA.tsx
        * ceCTASection.tsx
        * CeExploreMore.tsx
        * CeFunFacts.tsx
        * ceHero.tsx
        * CeImpactToday.tsx
        * CeInfluentialPeople.tsx
        * ceLanding.tsx
        * CeOverviewCards.tsx
        * cePageHeader.tsx
        * ceSectionCard.tsx
        * ceSectionHeader.tsx
    * educationalComponents/
        * QuizSection.tsx
        * GreekWordAnalyzer.tsx
        * InteractiveMap.tsx
        * FAQ.tsx
    * history/
        * civilizationPage.tsx
    * homeComponents/
        * homeBanner.tsx
        * homeBestVisites.tsx
        * homeCards.tsx
        * homeLanding.tsx
        * homePlaceCard.tsx
        * homePlaces.tsx
    * ui/
        * accordion.tsx
        * breadcrumb.tsx
        * button.tsx
        * card.tsx
        * dropdown-menu.tsx

* context/
    * ThemeContext.tsx

* data/
    * AboutCards.ts
    * AboutFact.ts
    * AboutStats.ts
    * AboutTimelineData.ts
    * ArchaicData.ts
    * AthensAttractions.ts
    * CeBannerData.ts
    * CeCard.ts
    * CeComparisonData.ts
    * CeCTAData.ts
    * CeExploreMore.ts
    * CeFunFact.ts
    * CeInfleuntialPerson.ts
    * Civilizations.ts
    * ClassicalData.ts
    * CommericalPlaces.ts
    * educationPlaces.ts
    * ExploreMoreCards.ts
    * FAQs.ts
    * GalleryImages.ts
    * HellenisticData.ts
    * HistoryArabicTitles.ts
    * HomeBestPlacesData.ts
    * HomeLandmark.ts
    * MinoanData.ts
    * MycenaeanData.ts
    * QuizQuestion.ts
    * regions.ts
    * RhodesAttractions.ts
    * SantoriniAttractions.ts
    * SocietyDevelopmentProps.ts

* interfaces/
    * AboutCardsI.ts
    * AboutFactI.ts
    * AboutStatsI.ts
    * AttractionsI.ts
    * CeBannerDataI.ts
    * CeCardI.ts
    * CeComparisonDataI.ts
    * CeCTADataI.ts
    * CeExploreMoreI.ts
    * CeFunFactI.ts
    * CeInfluentialPersonI.ts
    * CeStatI.ts
    * Civilizations.ts
    * CommericalPlacesI.ts
    * DynamicPlaces.ts
    * educationPlacesI.ts
    * FAQs.ts
    * HistoryDatasI.ts
    * HomeBestPlaces.ts
    * HomeLandmarksI.ts
    * QuizQuestion.ts
    * Region.ts
    * societyDevelopmentPropsI.ts
    * TimelineDataI.ts
    * TimelineItemPropsI.ts
    * TimelinePropsI.ts

* lib/
    * utils.ts

* utils/
    * shuffle.ts