(() => {
  "use strict";

  const whatsappNumber = "9779860151288";

  const copy = {
    en: {
      pageTitle: "NoCast Studio Nepal — AI product photos for clothing businesses",
      announcement: "One free sample for selected Nepali clothing businesses",
      navWork: "Results",
      navProcess: "How it works",
      navPricing: "Pricing",
      languageLabel: "Language",
      heroEyebrow: "AI product imagery for Nepal",
      heroLineOne: "Your garment.",
      heroLineTwo: "On a model.",
      heroAccent: "Ready to sell.",
      heroBody: "Send one clear garment photo. We turn it into polished on-model images for Instagram, product listings and your online store—without arranging a photoshoot.",
      heroPrimary: "Get a free sample",
      heroSecondary: "See real results",
      proofBadge: "Real test output",
      beforeShort: "Input garment",
      afterShort: "On-model result",
      trustOne: "Usually within 24 hrs",
      trustOneSub: "Fast local delivery",
      trustTwo: "From Rs 200",
      trustTwoSub: "Per approved image",
      trustThree: "Human reviewed",
      trustThreeSub: "Before final delivery",
      audienceEyebrow: "Built for local fashion sellers",
      audienceTitle: "Your shop is already online. Your product photos should be ready too.",
      audienceBody: "No studio booking, model coordination or expensive camera setup. Start from the product photo you already have.",
      audienceInstagram: "Instagram stores",
      audienceInstagramDetail: "New drops and daily posts",
      audienceTailors: "Tailors & boutiques",
      audienceTailorsDetail: "Show stitched designs on a model",
      audienceJersey: "Jersey sellers",
      audienceJerseyDetail: "Team kits and custom designs",
      audienceClothing: "Clothing stores",
      audienceClothingDetail: "Catalogues and online listings",
      workEyebrow: "Real transformations",
      workTitle: "See exactly what changes.",
      workBody: "Each garment input is shown beside its generated on-model result. These are test outputs, not stock-photo mockups.",
      whatYouSend: "What you send",
      whatYouReceive: "What you receive",
      viewMore: "View 2 more transformations",
      viewLess: "Show fewer examples",
      multiAngle: "Additional back view",
      brazilAudience: "Instagram boutique",
      brazilTitle: "Summer co-ord",
      jerseyAudience: "Jersey store",
      jerseyTitle: "Fan jersey",
      jacketAudience: "Fashion seller",
      jacketTitle: "Statement jacket",
      kurtaAudience: "Local tailor",
      kurtaTitle: "Custom kurta",
      suitAudience: "Formalwear store",
      suitTitle: "Tailored suit",
      demoNote: "Demo images from NoCast testing. Replace third-party branded samples with authorised client products before a full commercial campaign.",
      processEyebrow: "Simple service, no new app to learn",
      processTitle: "From WhatsApp to ready-to-post files.",
      processBody: "We handle the AI tools and quality checks. You only send the garment, choose a direction and approve the result.",
      stepOneTitle: "Send the garment",
      stepOneBody: "Share one clear product photo on WhatsApp.",
      stepTwoTitle: "Choose a direction",
      stepTwoBody: "Select the model and look that suit your customers.",
      stepThreeTitle: "Review the sample",
      stepThreeBody: "Check garment details on a watermarked preview.",
      stepFourTitle: "Approve and receive HD",
      stepFourBody: "Pay after approval and receive the final files.",
      priceEyebrow: "Pilot pricing",
      priceTitle: "See your own product before paying.",
      priceBody: "Start small. There is no subscription and no platform setup for your business.",
      freeName: "First sample",
      freePrice: "Rs 0",
      freeDetail: "One watermarked preview for eligible first-time businesses.",
      packName: "Starter pack",
      packPrice: "Rs 599",
      packDetail: "3 approved HD images for one garment and one selected model.",
      priceNote: "One revision included · Final price confirmed before work starts",
      faqEyebrow: "Before you order",
      faqTitle: "Clear answers for small businesses.",
      faqOneQ: "What photo should I send?",
      faqOneA: "Send a clear front-facing photo with the complete garment visible. Good light and a plain background improve the result, but a professional camera is not required.",
      faqTwoQ: "Will logos and garment details stay accurate?",
      faqTwoA: "We review colour, logo, pattern, neckline, sleeves and garment length. AI can still change very small details, so you approve the result before receiving the final file.",
      faqThreeQ: "Do I need an account or subscription?",
      faqThreeA: "No. For the pilot service, order directly through WhatsApp. We confirm the garment, model, price and delivery time before beginning paid work.",
      faqFourQ: "Can you handle kurta, suits and local tailoring?",
      faqFourA: "Yes, when the complete garment is clearly visible. Complex embroidery, drapes and unusual cuts may require extra review and are quoted after seeing the input photo.",
      closing: "Ready to see your product on a model?",
      closingSub: "Send one garment photo. We will tell you honestly whether it is suitable before generating anything.",
      closingButton: "Send a photo on WhatsApp",
      mobileButton: "Free sample on WhatsApp",
      footerLine: "AI-assisted product presentation for Nepali clothing businesses.",
      footerDisclaimer: "Images are for product presentation and marketing, not a guarantee of exact fit. Minor AI variations may occur; every paid result requires client approval."
    },
    ne: {
      pageTitle: "NoCast Studio Nepal — नेपाली कपडा व्यवसायका लागि AI फोटो",
      announcement: "छानिएका नेपाली कपडा व्यवसायका लागि १ निःशुल्क नमुना",
      navWork: "नतिजा",
      navProcess: "कसरी काम गर्छ",
      navPricing: "मूल्य",
      languageLabel: "भाषा",
      heroEyebrow: "नेपालका कपडा व्यवसायका लागि AI फोटो सेवा",
      heroLineOne: "तपाईंको कपडा।",
      heroLineTwo: "मोडलमा।",
      heroAccent: "बेच्न तयार।",
      heroBody: "एउटा सफा कपडाको फोटो पठाउनुहोस्। हामी त्यसलाई Instagram, प्रोडक्ट लिस्टिङ र अनलाइन स्टोरका लागि आकर्षक मोडल फोटोमा बदल्छौँ—फोटोशूट बिना।",
      heroPrimary: "निःशुल्क नमुना लिनुहोस्",
      heroSecondary: "वास्तविक नतिजा हेर्नुहोस्",
      proofBadge: "हाम्रो परीक्षणको वास्तविक नतिजा",
      beforeShort: "कपडाको फोटो",
      afterShort: "मोडलमा बनेको फोटो",
      trustOne: "सामान्यतया २४ घण्टाभित्र",
      trustOneSub: "छिटो स्थानीय डेलिभरी",
      trustTwo: "रु २०० देखि",
      trustTwoSub: "प्रति स्वीकृत फोटो",
      trustThree: "मानिसले जाँचिएको",
      trustThreeSub: "अन्तिम डेलिभरीअघि",
      audienceEyebrow: "स्थानीय फेसन व्यवसायका लागि",
      audienceTitle: "तपाईंको पसल अनलाइन छ। अब प्रोडक्ट फोटो पनि तयार हुनुपर्छ।",
      audienceBody: "स्टुडियो बुकिङ, मोडल मिलाउने वा महँगो क्यामेरा चाहिँदैन। तपाईंसँग भएको प्रोडक्ट फोटोबाटै सुरु हुन्छ।",
      audienceInstagram: "इन्स्टाग्राम पसल",
      audienceInstagramDetail: "नयाँ स्टक र नियमित पोस्ट",
      audienceTailors: "टेलर तथा बुटिक",
      audienceTailorsDetail: "सिलाइएको डिजाइन मोडलमा देखाउन",
      audienceJersey: "जर्सी विक्रेता",
      audienceJerseyDetail: "टिम किट र कस्टम डिजाइन",
      audienceClothing: "कपडा पसल",
      audienceClothingDetail: "क्याटलग र अनलाइन लिस्टिङ",
      workEyebrow: "वास्तविक रूपान्तरण",
      workTitle: "फरक स्पष्ट देख्नुहोस्।",
      workBody: "तपाईंले पठाएको कपडा र त्यसबाट बनेको मोडल फोटो सँगै देखाइएको छ। यी हाम्रो परीक्षणका वास्तविक नतिजा हुन्।",
      whatYouSend: "तपाईंले पठाउने",
      whatYouReceive: "तपाईंले पाउने",
      viewMore: "अझै २ रूपान्तरण हेर्नुहोस्",
      viewLess: "कम उदाहरण देखाउनुहोस्",
      multiAngle: "पछाडिको थप दृश्य",
      brazilAudience: "इन्स्टाग्राम बुटिक",
      brazilTitle: "समर को-अर्ड सेट",
      jerseyAudience: "जर्सी पसल",
      jerseyTitle: "फ्यान जर्सी",
      jacketAudience: "फेसन विक्रेता",
      jacketTitle: "स्टेटमेन्ट ज्याकेट",
      kurtaAudience: "स्थानीय टेलर",
      kurtaTitle: "कस्टम कुर्ता",
      suitAudience: "फर्मलवेयर पसल",
      suitTitle: "टेलर्ड सुट",
      demoNote: "NoCast को परीक्षणबाट बनेका डेमो फोटो। पूर्ण व्यावसायिक अभियानअघि तेस्रो पक्षका ब्रान्डेड नमुनालाई अनुमति प्राप्त ग्राहकका प्रोडक्टले बदल्नुहोस्।",
      processEyebrow: "सरल सेवा—नयाँ एप सिक्नुपर्दैन",
      processTitle: "WhatsApp बाट पोस्ट गर्न तयार फाइलसम्म।",
      processBody: "AI टुल र गुणस्तर जाँच हामी गर्छौँ। तपाईंले कपडा पठाउने, मोडल/लुक छान्ने र नतिजा स्वीकृत गर्ने मात्र हो।",
      stepOneTitle: "कपडा पठाउनुहोस्",
      stepOneBody: "WhatsApp मा एउटा सफा प्रोडक्ट फोटो पठाउनुहोस्।",
      stepTwoTitle: "मोडल र लुक छान्नुहोस्",
      stepTwoBody: "आफ्ना ग्राहकलाई मिल्ने मोडल र लुक छान्नुहोस्।",
      stepThreeTitle: "नमूना जाँच गर्नुहोस्",
      stepThreeBody: "वाटरमार्क भएको नमूनामा कपडाको विवरण जाँच गर्नुहोस्।",
      stepFourTitle: "स्वीकृत गरी HD पाउनुहोस्",
      stepFourBody: "स्वीकृतिपछि भुक्तानी गरी अन्तिम फाइल पाउनुहोस्।",
      priceEyebrow: "सुरुआती मूल्य",
      priceTitle: "पैसा तिर्नुअघि आफ्नै प्रोडक्टमा हेर्नुहोस्।",
      priceBody: "सानोबाट सुरु गर्नुहोस्। सदस्यता वा जटिल प्लेटफर्म सेटअप चाहिँदैन।",
      freeName: "पहिलो नमुना",
      freePrice: "रु ०",
      freeDetail: "पहिलो पटक आउने योग्य व्यवसायका लागि एउटा वाटरमार्क नमुना।",
      packName: "स्टार्टर प्याक",
      packPrice: "रु ५९९",
      packDetail: "एउटा कपडा र छानिएको मोडलका ३ वटा स्वीकृत HD फोटो।",
      priceNote: "१ पटक सुधार समावेश · काम सुरु गर्नुअघि अन्तिम मूल्य स्पष्ट गरिन्छ",
      faqEyebrow: "अर्डर गर्नुअघि",
      faqTitle: "सानो व्यवसायका लागि स्पष्ट जवाफ।",
      faqOneQ: "कस्तो फोटो पठाउने?",
      faqOneA: "पूरै कपडा देखिने गरी अगाडिबाट खिचिएको सफा फोटो पठाउनुहोस्। राम्रो उज्यालो र साधारण पृष्ठभूमिले नतिजा राम्रो बनाउँछ, तर प्रोफेसनल क्यामेरा चाहिँदैन।",
      faqTwoQ: "लोगो र कपडाको डिजाइन उस्तै रहन्छ?",
      faqTwoA: "हामी रङ, लोगो, ढाँचा, घाँटी, बाहुला र कपडाको लम्बाइ जाँच गर्छौँ। AI ले साना विवरण बदल्न सक्छ, त्यसैले अन्तिम फाइल लिनुअघि तपाईंले नतिजा स्वीकृत गर्नुहुन्छ।",
      faqThreeQ: "अकाउन्ट वा सदस्यता चाहिन्छ?",
      faqThreeA: "चाहिँदैन। सुरुआती सेवामा WhatsApp बाट सिधै अर्डर गर्नुहोस्। भुक्तानी हुने काम सुरु गर्नुअघि कपडा, मोडल, मूल्य र डेलिभरी समय स्पष्ट गर्छौँ।",
      faqFourQ: "कुर्ता, सुट र स्थानीय सिलाइका डिजाइन पनि हुन्छ?",
      faqFourA: "पूरै कपडा स्पष्ट देखिएमा हुन्छ। जटिल बुट्टा, ड्रेप वा फरक कट भएको कपडामा थप जाँच चाहिन सक्छ र फोटो हेरेपछि मूल्य बताइन्छ।",
      closing: "आफ्नो प्रोडक्ट मोडलमा हेर्न तयार हुनुहुन्छ?",
      closingSub: "एउटा कपडाको फोटो पठाउनुहोस्। जेनेरेट गर्नुअघि त्यो फोटो उपयुक्त छ कि छैन, हामी स्पष्ट बताउँछौँ।",
      closingButton: "WhatsApp मा फोटो पठाउनुहोस्",
      mobileButton: "WhatsApp मा निःशुल्क नमुना",
      footerLine: "नेपाली कपडा व्यवसायका लागि AI-सहयोगी प्रोडक्ट प्रस्तुति।",
      footerDisclaimer: "फोटोहरू प्रोडक्ट प्रस्तुति र मार्केटिङका लागि हुन्, वास्तविक फिटको ग्यारेन्टी होइनन्। AI का कारण साना फरक आउन सक्छन्; भुक्तानी हुने हरेक नतिजा ग्राहकले स्वीकृत गर्छन्।"
    }
  };

  let currentLanguage = "en";
  let expanded = false;

  const whatsappMessage = (language) => language === "ne"
    ? "नमस्ते NoCast Studio! मेरो कपडा व्यवसायका लागि निःशुल्क नमुना चाहियो। व्यवसायको प्रकार: ____"
    : "Namaste NoCast Studio! I run a clothing business and would like a free sample. My business type is: ____";

  const updateWhatsAppLinks = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage(currentLanguage))}`;
    document.querySelectorAll(".whatsapp-link").forEach((link) => link.setAttribute("href", url));
  };

  const updateMoreButton = () => {
    const button = document.getElementById("more-transformations");
    if (!button) return;
    const label = button.querySelector("[data-i18n]");
    const arrow = button.querySelector("b");
    if (label) label.textContent = copy[currentLanguage][expanded ? "viewLess" : "viewMore"];
    if (arrow) arrow.textContent = expanded ? "↑" : "↓";
    button.setAttribute("aria-expanded", String(expanded));
  };

  const setLanguage = (language) => {
    currentLanguage = copy[language] ? language : "en";
    document.documentElement.lang = currentLanguage;
    document.title = copy[currentLanguage].pageTitle;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.getAttribute("data-i18n");
      if (copy[currentLanguage][key]) element.textContent = copy[currentLanguage][key];
    });

    document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
      const key = element.getAttribute("data-i18n-aria");
      if (copy[currentLanguage][key]) element.setAttribute("aria-label", copy[currentLanguage][key]);
    });

    document.querySelectorAll("[data-language]").forEach((button) => {
      const isActive = button.getAttribute("data-language") === currentLanguage;
      button.classList.toggle("active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    try { window.localStorage.setItem("nocast-language", currentLanguage); } catch (_) {}
    updateWhatsAppLinks();
    updateMoreButton();
  };

  document.querySelectorAll("[data-language]").forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.getAttribute("data-language")));
  });

  const moreButton = document.getElementById("more-transformations");
  const moreGrid = document.getElementById("more-grid");
  if (moreButton && moreGrid) {
    moreButton.addEventListener("click", () => {
      expanded = !expanded;
      moreGrid.hidden = !expanded;
      updateMoreButton();
      if (expanded) moreGrid.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
  }

  let storedLanguage = "en";
  try { storedLanguage = window.localStorage.getItem("nocast-language") || "en"; } catch (_) {}
  setLanguage(storedLanguage);
})();
