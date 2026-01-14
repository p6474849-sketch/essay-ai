/* script.js — Level 2 + Fix-display feature
   - 12-language UI and keyword packs
   - Detect issues and show problematic text (excerpt) + localized "You can write like this" advice
   - No grammar/spelling auto-fix
*/

/* ---------- Translations (UI & fix text) ---------- */
/* Only keys used in this UI are included (localized strings for advice + UI) */
const T = {
  en: {
    title: "Document Checker",
    headerDesc: "If an error appears — how to fix (simple)",
    placeholder: "Write your text here...",
    note: "⚠ This tool does NOT fix spelling/grammar — it suggests structure & content fixes.",
    check: "Check",
    clear: "Clear",
    enterText: "⚠ Please enter some text.",
    rubricTitle: "Rubric (school-friendly)",
    fixTitle: "If something is missing — how to fix (very simple)",
    fixThesis: 'Write one clear sentence with your main idea. Example: "This essay argues that X because Y."',
    fixParagraph: "Split into paragraphs: Intro, Body (each paragraph 1 idea with a topic sentence), Conclusion.",
    fixExample: "Add a concrete example: start with 'For example,' then give a fact or short case.",
    fixRepetition: "Avoid repeating the same word many times. Use synonyms or rephrase sentences.",
    fixShort: "Expand your essay — add one reason and one example that supports it.",
    fixGreeting: "Start with a greeting (e.g., 'Dear Hiring Manager,').",
    fixClosing: "End with a closing (e.g., 'Sincerely, Your Name').",
    thesisDefTitle: "What is a thesis?",
    thesisDef: "A thesis is one sentence that states the main idea of your essay. Put it in the introduction.",
    paragraphDefTitle: "What is a paragraph?",
    paragraphDef: "A paragraph is a group of sentences about one idea. Start with a topic sentence.",
    essayExample: "Example: Intro — Body — Conclusion"
  },

  mn: {
    title: "Баримт бичиг шалгагч",
    headerDesc: "Алдаа гарвал яаж засах — маш энгийн заавар",
    placeholder: "Энд текстээ бичнэ үү...",
    note: "⚠ Энэ хэрэгсэл үг/үсгийн алдаа засахгүй — зөвхөн бүтэц, агуулгын заавар өгнө.",
    check: "Шалгах",
    clear: "Цэвэрлэх",
    enterText: "⚠ Текст оруулна уу.",
    rubricTitle: "Rubric (сургуульд зориулсан)",
    fixTitle: "Алдаа гарсан үед — хэрхэн засах (маш энгийн)",
    fixThesis: 'Нэг мөрт гол санаагаа тодорхой бич. Жишээ: "Энэхүү эссэ нь X-ийг Y-ээс болж хамгаалж байна."',
    fixParagraph: "Параграф руу хуваа: Оршил, Гол (параграф бүр нэг санаа, topic sentence-тэй), Дүгнэлт.",
    fixExample: "Тодорхой жишээ нэм: 'Жишээ нь,' гэж эхлээд нэг баримт эсвэл богино түүх бич.",
    fixRepetition: "Нэг үгийг олон дахин давтхаас зайлсхий. Синоним ашиглах эсвэл өгүүлбэр солих.",
    fixShort: "Эссэг уртасга: нэг шалтгаан нэмэж түүнийгээ дэмжих жишээ оруул.",
    fixGreeting: "Эхэнд мэндчилгээ нэм (жиш. 'Хүндэт захирал аа,').",
    fixClosing: "Төгсгөлд 'Хүндэтгэсэн, Таны нэр' гэх мэт бич.",
    thesisDefTitle: "Тезис гэж юу вэ?",
    thesisDef: "Тезис нь эссэний гол санааг нэг өгүүлбэрт хэлсэн зүйл. Оршилд байрлуулна.",
    paragraphDefTitle: "Параграф гэж юу вэ?",
    paragraphDef: "Параграф нь нэг санааг тайлбарласан өгүүлбэрийн бүлэг; эхэндээ topic sentence байна.",
    essayExample: "Жишээ: Оршил — Гол — Дүгнэлт"
  },

  zh: {
    title: "文档检查器",
    headerDesc: "出现问题时如何修复 - 简单说明",
    placeholder: "在此输入文本...",
    note: "⚠ 本工具不修正拼写/语法 — 仅提供结构与内容建议。",
    check: "检查",
    clear: "清除",
    enterText: "⚠ 请输入文本。",
    rubricTitle: "评分标准（学校）",
    fixTitle: "出现缺失时如何修复（非常简单）",
    fixThesis: '写一句清晰的中心句。例如："本文认为 X，因为 Y。"',
    fixParagraph: "分段：引言、主体（每段一项主题句）、结论。",
    fixExample: "添加具体例子：以“例如”开头，然后给出事实或简短案例。",
    fixRepetition: "避免重复相同词。使用同义词或改写句子。",
    fixShort: "扩展文章：增加一个理由并给出支持它的例子。",
    fixGreeting: "以称呼开始（例如“尊敬的负责人：”）。",
    fixClosing: "以结束语结尾（例如“此致，敬礼”）。",
    thesisDefTitle: "什么是中心句？",
    thesisDef: "中心句是一句概括文章主要观点的话，通常放在引言中。",
    paragraphDefTitle: "什么是段落？",
    paragraphDef: "段落是一组围绕一个主题的句子，通常以主题句开头。",
    essayExample: "示例: 引言 — 正文 — 结论"
  },

  es: {
    title: "Verificador de Documentos",
    headerDesc: "Cómo arreglar errores — guía simple",
    placeholder: "Escribe tu texto aquí...",
    note: "⚠ Esta herramienta NO corrige ortografía/gramática — solo sugiere estructura y contenido.",
    check: "Verificar",
    clear: "Borrar",
    enterText: "⚠ Por favor, ingresa texto.",
    rubricTitle: "Rubrica (para escuela)",
    fixTitle: "Si falta algo — cómo arreglar (muy simple)",
    fixThesis: 'Escribe una oración clara con la idea principal. Ej.: "Este ensayo sostiene que X porque Y."',
    fixParagraph: "Divide en párrafos: Introducción, Cuerpo (cada párrafo con una idea y oración temática), Conclusión.",
    fixExample: "Añade un ejemplo concreto: empieza con 'Por ejemplo,' y aporta un dato o caso breve.",
    fixRepetition: "Evita repetir la misma palabra muchas veces. Usa sinónimos o reformula.",
    fixShort: "Amplía tu ensayo: añade una razón y un ejemplo que la apoye.",
    fixGreeting: "Comienza con un saludo (ej., 'Estimado/a').",
    fixClosing: "Termina con una despedida (ej., 'Atentamente, Tu Nombre').",
    thesisDefTitle: "¿Qué es una tesis?",
    thesisDef: "La tesis es una oración que dice la idea principal del ensayo. Colócala en la introducción.",
    paragraphDefTitle: "¿Qué es un párrafo?",
    paragraphDef: "Un párrafo es un conjunto de oraciones sobre una sola idea, que comienza con una oración temática.",
    essayExample: "Ejemplo: Introducción — Cuerpo — Conclusión"
  },

  fr: {
    title: "Vérificateur de Documents",
    headerDesc: "Comment corriger les erreurs — guide simple",
    placeholder: "Écrivez votre texte ici...",
    note: "⚠ Cet outil NE corrige PAS orthographe/grammaire — il propose des améliorations de structure/contenu.",
    check: "Vérifier",
    clear: "Effacer",
    enterText: "⚠ Veuillez saisir du texte.",
    rubricTitle: "Rubrique (scolaire)",
    fixTitle: "Si quelque chose manque — comment corriger (très simple)",
    fixThesis: "Écrivez une phrase claire indiquant l'idée principale. Ex: « Cet essai affirme que X parce que Y. »",
    fixParagraph: "Séparez en paragraphes : Intro, Corps (chaque paragraphe une idée + phrase de sujet), Conclusion.",
    fixExample: "Ajoutez un exemple concret : commencez par « Par exemple, » puis donnez un fait.",
    fixRepetition: "Évitez de répéter le même mot plusieurs fois. Utilisez des synonymes ou reformulez.",
    fixShort: "Allongez votre essai : ajoutez une raison et un exemple.",
    fixGreeting: "Commencez par une salutation (ex. 'Monsieur/Madame').",
    fixClosing: "Terminez par une formule de politesse (ex. 'Cordialement,').",
    thesisDefTitle: "Qu'est-ce qu'une thèse ?",
    thesisDef: "La thèse est une phrase qui exprime l'idée principale. Placez-la dans l'introduction.",
    paragraphDefTitle: "Qu'est-ce qu'un paragraphe ?",
    paragraphDef: "Un paragraphe regroupe des phrases sur une même idée ; commencez par une phrase sujet.",
    essayExample: "Exemple : Introduction — Corps — Conclusion"
  },

  ar: {
    title: "مدقق المستندات",
    headerDesc: "كيفية إصلاح الأخطاء — دليل بسيط",
    placeholder: "اكتب نصك هنا...",
    note: "⚠ هذه الأداة لا تصحح الأخطاء الإملائية/النحوية — فقط تقترح تحسينات في البنية والمحتوى.",
    check: "تحقق",
    clear: "مسح",
    enterText: "⚠ الرجاء إدخال نص.",
    rubricTitle: "معيار التقييم (مدرسي)",
    fixTitle: "إذا كان شيء مفقود — كيفية الإصلاح (بسيط جداً)",
    fixThesis: "اكتب جملة واحدة واضحة تعرض الفكرة الرئيسية. مثال: «تقول هذه المقالة إن X لأن Y.»",
    fixParagraph: "قسم النص إلى فقرات: المقدمة، المتن (كل فقرة فكرة واحدة + جملة موضوع)، الخاتمة.",
    fixExample: "أضف مثالًا محددًا: ابدأ بـ 'على سبيل المثال' ثم قدم حقيقة قصيرة.",
    fixRepetition: "تجنب تكرار نفس الكلمة عدة مرات. استخدم مرادفات أو أعد الصياغة.",
    fixShort: "وسع مقالتك: أضف سببًا واحدًا ومثالًا يدعمه.",
    fixGreeting: "ابدأ بتحية (مثل: 'السيد/السيدة المحترم').",
    fixClosing: "اختم بتحية ختامية (مثل: 'مع خالص التحية').",
    thesisDefTitle: "ما هي الفكرة الرئيسية؟",
    thesisDef: "الفكرة الرئيسية هي جملة تلخص موضوع المقال. ضعها في المقدمة.",
    paragraphDefTitle: "ما هو الفقرة؟",
    paragraphDef: "الفقرة مجموعة من الجمل حول فكرة واحدة؛ تبدأ عادة بجملة موضوع.",
    essayExample: "مثال: المقدمة — المتن — الخاتمة"
  },

  ru: {
    title: "Проверка документа",
    headerDesc: "Как исправить ошибки — простая инструкция",
    placeholder: "Введите текст здесь...",
    note: "⚠ Этот инструмент НЕ исправляет орфографию/грамматику — только предлагает исправления структуры и содержания.",
    check: "Проверить",
    clear: "Очистить",
    enterText: "⚠ Пожалуйста, введите текст.",
    rubricTitle: "Рубрика (школьная)",
    fixTitle: "Если чего-то не хватает — как исправить (очень просто)",
    fixThesis: "Напишите одно ясное предложение с основной идеей. Пример: «В этом эссе утверждается, что X, потому что Y.»",
    fixParagraph: "Разбейте на параграфы: Введение, Основная часть (каждый параграф — одна идея + тематическое предложение), Заключение.",
    fixExample: "Добавьте конкретный пример: начните с «например», затем приведите факт.",
    fixRepetition: "Не повторяйте одно и то же слово много раз. Используйте синонимы или переформулируйте.",
    fixShort: "Расширьте эссе: добавьте одну причину и пример для нее.",
    fixGreeting: "Начните с обращения (например: 'Уважаемый/ая').",
    fixClosing: "Завершите прощанием (например: 'С уважением, Ваше имя').",
    thesisDefTitle: "Что такое тезис?",
    thesisDef: "Тезис — это предложение, которое сообщает основную мысль эссе. Поместите его во введение.",
    paragraphDefTitle: "Что такое параграф?",
    paragraphDef: "Параграф — группа предложений об одной идее; начинайте с тематического предложения.",
    essayExample: "Пример: Введение — Основная часть — Заключение"
  },

  de: {
    title: "Dokumentenprüfer",
    headerDesc: "Fehler beheben — einfache Anleitung",
    placeholder: "Text hier eingeben...",
    note: "⚠ Dieses Tool KORRIGIERT KEINE Rechtschreibung/Grammatik — es schlägt nur Verbesserungen von Struktur/Inhalt vor.",
    check: "Prüfen",
    clear: "Löschen",
    enterText: "⚠ Bitte Text eingeben.",
    rubricTitle: "Rubrik (schulisch)",
    fixTitle: "Wenn etwas fehlt — wie reparieren (sehr einfach)",
    fixThesis: "Formulieren Sie einen klaren Satz mit der Hauptidee. Bsp.: „Dieser Aufsatz behauptet, dass X, weil Y.“",
    fixParagraph: "In Absätze gliedern: Einleitung, Hauptteil (jeder Absatz: eine Idee + Topic-Satz), Schluss.",
    fixExample: "Fügen Sie ein konkretes Beispiel hinzu: beginnen Sie mit 'Zum Beispiel' und geben Sie eine Tatsache an.",
    fixRepetition: "Vermeiden Sie Wortwiederholungen. Verwenden Sie Synonyme oder formulieren Sie um.",
    fixShort: "Erweitern Sie den Aufsatz: fügen Sie eine Begründung und ein Beispiel hinzu.",
    fixGreeting: "Beginnen Sie mit einer Begrüßung (z. B. 'Sehr geehrte/r').",
    fixClosing: "Beenden Sie mit einer Grußformel (z. B. 'Mit freundlichen Grüßen').",
    thesisDefTitle: "Was ist eine These?",
    thesisDef: "Die These ist ein Satz, der die Hauptidee ausdrückt. Setzen Sie sie in die Einleitung.",
    paragraphDefTitle: "Was ist ein Absatz?",
    paragraphDef: "Ein Absatz ist eine Gruppe von Sätzen zu einer Idee; beginnen Sie mit einem Themensatz.",
    essayExample: "Beispiel: Einleitung — Hauptteil — Schluss"
  },

  ja: {
    title: "ドキュメントチェッカー",
    headerDesc: "エラーが出たときの直し方 — 簡単ガイド",
    placeholder: "ここにテキストを入力...",
    note: "⚠ 本ツールはスペル/文法を修正しません — 構成と内容の提案のみ行います。",
    check: "チェック",
    clear: "クリア",
    enterText: "⚠ テキストを入力してください。",
    rubricTitle: "ルーブリック（学校）",
    fixTitle: "足りないものがあれば — 直し方（とても簡単）",
    fixThesis: "主張を一文で書いてください。例：『本稿はXを支持する、なぜならYだからだ。』",
    fixParagraph: "段落に分ける：導入、本文（各段落は一つの主題+トピック文）、結論。",
    fixExample: "具体例を追加：'例えば'で始め、事実や短い事例を示してください。",
    fixRepetition: "同じ語の繰り返しを避ける。類義語を使うか言い換える。",
    fixShort: "文章を増やす：1つの理由とその例を追加する。",
    fixGreeting: "挨拶（例：'拝啓'）で始めてください。",
    fixClosing: "結び（例：'敬具'）で終えてください。",
    thesisDefTitle: "テーシスとは？",
    thesisDef: "テーシスはエッセイの中心的考えを示す一文です。導入に置きます。",
    paragraphDefTitle: "段落とは？",
    paragraphDef: "段落は一つの考えに関する文のまとまりで、通常トピック文で始まります。",
    essayExample: "例: 導入 — 本文 — 結論"
  },

  pt: {
    title: "Verificador de Documentos",
    headerDesc: "Como consertar erros — guia simples",
    placeholder: "Escreva seu texto aqui...",
    note: "⚠ Esta ferramenta NÃO corrige ortografia/gramática — apenas sugere melhorias de estrutura/conteúdo.",
    check: "Verificar",
    clear: "Limpar",
    enterText: "⚠ Por favor, insira algum texto.",
    rubricTitle: "Rubrica (escolar)",
    fixTitle: "Se algo faltar — como consertar (muito simples)",
    fixThesis: 'Escreva uma frase clara com a ideia principal. Ex.: "Este ensaio afirma que X porque Y."',
    fixParagraph: "Divida em parágrafos: Introdução, Corpo (cada parágrafo: 1 ideia + frase tópico), Conclusão.",
    fixExample: "Adicione um exemplo concreto: comece com 'Por exemplo,' e dê um fato breve.",
    fixRepetition: "Evite repetir a mesma palavra várias vezes. Use sinônimos ou reescreva.",
    fixShort: "Expanda o ensaio: adicione uma razão e um exemplo.",
    fixGreeting: "Comece com uma saudação (ex.: 'Prezado/a').",
    fixClosing: "Termine com uma despedida (ex.: 'Atenciosamente,').",
    thesisDefTitle: "O que é uma tese?",
    thesisDef: "A tese é uma frase que apresenta a ideia principal. Coloque-a na introdução.",
    paragraphDefTitle: "O que é um parágrafo?",
    paragraphDef: "Um parágrafo é um conjunto de frases sobre uma ideia; comece com uma frase tópica.",
    essayExample: "Exemplo: Introdução — Corpo — Conclusão"
  },

  ko: {
    title: "문서 검사기",
    headerDesc: "오류 발생 시 고치는 방법 — 간단 가이드",
    placeholder: "여기에 텍스트를 입력...",
    note: "⚠ 이 도구는 맞춤법/문법을 수정하지 않습니다 — 구조와 내용에 대한 제안만 제공합니다.",
    check: "검사",
    clear: "지우기",
    enterText: "⚠ 텍스트를 입력하세요.",
    rubricTitle: "루브릭 (학교용)",
    fixTitle: "무언가 빠졌다면 — 고치는 방법 (매우 간단)",
    fixThesis: "핵심 문장을 한 문장으로 작성하세요. 예: '이 에세이는 X를 주장한다. 이유는 Y 때문이다.'",
    fixParagraph: "단락으로 나누기: 도입, 본문(각 단락은 하나의 주제 + 토픽 문), 결론.",
    fixExample: "구체적 예시 추가: '예를 들어'로 시작하고 사실이나 간단한 사례를 작성하세요.",
    fixRepetition: "같은 단어 반복을 피하세요. 동의어를 사용하거나 문장을 재구성하세요.",
    fixShort: "에세이를 확장하세요: 이유 하나와 그 예시를 추가하세요.",
    fixGreeting: "인사말(예: '존경하는...')로 시작하세요.",
    fixClosing: "마무리 인사(예: '감사합니다, 당신의 이름')를 쓰세요.",
    thesisDefTitle: "테시스란?",
    thesisDef: "테시스는 에세이의 핵심 아이디어를 제시하는 한 문장입니다. 도입부에 둡니다.",
    paragraphDefTitle: "단락이란?",
    paragraphDef: "단락은 하나의 아이디어에 관한 문장 묶음이며 보통 토픽 문으로 시작합니다.",
    essayExample: "예: 서론 — 본문 — 결론"
  }
};

/* ---------- Language-specific detection rules (short) ---------- */
const LANGUAGE_RULES = {
  en:{ thesis:[/\bthis essay\b/i, /\bin this essay\b/i, /\bi will (argue|show|discuss|explain)\b/i], example:[/\bfor example\b/i, /\bfor instance\b/i], conclusion:[/\bin conclusion\b/i, /\bto conclude\b/i], greeting:[/\bdear\b/i], closing:[/\bsincerely\b/i] },
  mn:{ thesis:[/энэ эссэ/i,/энэ өгүүлэл/i,/энэхүү эссэ/i], example:[/жишээ нь/i,/жишээлбэл/i], conclusion:[/дүгнэвэл/i,/дүгнэлт/i,/төгсгөл/i], greeting:[/хүндэт/i], closing:[/хүндэтгэсэн/i] },
  zh:{ thesis:[/本文/i,/这篇文章/i], example:[/例如/i,/比如/i], conclusion:[/总结/i,/结论/i,/总之/i], greeting:[/尊敬的/i], closing:[/此致/i,/敬礼/i] },
  es:{ thesis:[/en este ensayo/i], example:[/por ejemplo/i], conclusion:[/en conclusión/i], greeting:[/estimad/i], closing:[/atentamente/i] },
  fr:{ thesis:[/dans cet essai/i,/cet essai/i], example:[/par exemple/i], conclusion:[/en conclusion/i,/pour conclure/i], greeting:[/cher|chère/i], closing:[/cordialement/i] },
  ar:{ thesis:[/في هذا المقال/i,/هذه المقالة/i], example:[/على سبيل المثال/i], conclusion:[/في الختام/i], greeting:[/عزيزي|عزيزتي/i], closing:[/مع خالص/i] },
  ru:{ thesis:[/в этом эссе/i,/в этой статье/i,/я считаю/i], example:[/например/i], conclusion:[/в заключение/i], greeting:[/уважаемый/i], closing:[/с уважением/i] },
  de:{ thesis:[/in diesem aufsatz/i,/diese arbeit/i], example:[/zum beispiel/i], conclusion:[/zum schluss/i,/abschließend/i], greeting:[/sehr geehrter/i], closing:[/mit freundlichen grüßen/i] },
  ja:{ thesis:[/このエッセイ/i,/本稿/i], example:[/例えば/i], conclusion:[/結論として/i,/まとめ/i], greeting:[/拝啓/i], closing:[/敬具/i] },
  pt:{ thesis:[/neste ensaio/i,/este ensaio/i], example:[/por exemplo/i], conclusion:[/em conclusão/i,/para concluir/i], greeting:[/prezado|prezada/i], closing:[/atenciosamente/i] },
  ko:{ thesis:[/이 에세이/i,/본고/i], example:[/예를 들어/i,/예:/i], conclusion:[/결론적으로/i,/요약하자면/i], greeting:[/존경하는|안녕하세요/i], closing:[/감사합니다/i] }
};

/* ---------- Helpers ---------- */
function getEl(id){ return document.getElementById(id); }
const langEl = getEl('lang'), docEl = getEl('docType'), textEl = getEl('text');
const headerTitle = getEl('headerTitle'), headerDesc = getEl('headerDesc'), noteEl = getEl('note');
const checkBtn = getEl('checkBtn'), clearBtn = getEl('clearBtn');
const resultEl = getEl('result'), fixBox = getEl('fixBox'), rubricEl = getEl('rubric'), footerEl = getEl('footerText');

function msg(lang,key){
  if(!T[lang]) lang='en';
  return (T[lang] && T[lang][key]) ? T[lang][key] : (T['en'][key] || '');
}
function escapeHtml(s){ return String(s||'').replace(/[&<>"'`]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;','`':'&#96;'}[c])); }
function paragraphs(text){ return (text||'').split(/\n{2,}|\r\n{2,}/).map(s=>s.trim()).filter(Boolean); }
function anyMatch(text, patterns){ if(!patterns) return false; for(const r of patterns){ try{ if(r.test(text)) return true; }catch(e){} } return false; }
function countMatches(text, patterns){ if(!patterns) return 0; let c=0; for(const r of patterns){ try{ const m=text.match(new RegExp(r.source,'gi')); if(m) c+=m.length; }catch(e){} } return c; }

/* word counting with CJK heuristic */
function wordsCount(text, lang){
  if(!text) return 0;
  const trimmed = text.trim();
  if(!trimmed) return 0;
  if(['zh','ja','ko'].includes(lang)){
    const chars = trimmed.replace(/\s+/g,'').replace(/[^\u4E00-\u9FFF\u3400-\u4DBF\u3040-\u30FF\uAC00-\uD7AF]/g,'').length;
    return Math.round(chars/2);
  }
  return trimmed.split(/\s+/).filter(Boolean).length;
}

/* ---------- UI update ---------- */
function updateUI(){
  const lang = langEl.value || 'en';
  headerTitle.innerText = msg(lang,'title');
  headerDesc.innerText = msg(lang,'headerDesc');
  textEl.placeholder = msg(lang,'placeholder');
  noteEl.innerText = msg(lang,'note');
  checkBtn.innerText = msg(lang,'check');
  clearBtn.innerText = msg(lang,'clear');
  footerEl.innerText = msg(lang,'rubricTitle') + " — " + msg(lang,'note');
  // rubric box
  rubricEl.innerHTML = `<div style="font-weight:700">${escapeHtml(msg(lang,'rubricTitle'))}</div>
    <div style="margin-top:8px;color:var(--muted);font-size:13px">
      <strong>Essay:</strong> Words / Thesis / Paragraphs / Examples / Conclusion
    </div>`;
  renderDefinitions(lang);
}

/* render definitions & small examples */
function renderDefinitions(lang){
  fixBox.innerHTML = `<h3>${escapeHtml(msg(lang,'fixTitle'))}</h3>
    <p class="step"><strong>${escapeHtml(msg(lang,'thesisDefTitle'))}:</strong><br>${escapeHtml(msg(lang,'thesisDef'))}</p>
    <p class="step"><strong>${escapeHtml(msg(lang,'paragraphDefTitle'))}:</strong><br>${escapeHtml(msg(lang,'paragraphDef'))}</p>
    <p class="step" style="margin-top:8px;color:#ffd966"><em>${escapeHtml(msg(lang,'essayExample'))}</em></p>`;
}

/* ---------- Main analyze + issue extraction ---------- */
function analyze(){
  const lang = langEl.value || 'en';
  const type = docEl.value || 'essay';
  const text = (textEl.value || '').trim();
  if(!text){
    resultEl.innerHTML = `<div style="color:var(--danger)">${escapeHtml(msg(lang,'enterText'))}</div>`;
    renderDefinitions(lang);
    return;
  }

  const rules = LANGUAGE_RULES[lang] || LANGUAGE_RULES['en'];
  const words = wordsCount(text, lang);
  const paras = paragraphs(text);
  const thesisPresent = anyMatch(text, rules.thesis);
  const exampleCount = countMatches(text, rules.example);
  const conclusionPresent = anyMatch(text, rules.conclusion);

  const issues = [];
  const issueText = []; // {part, excerpt, advice}

  // Helper: excerpt generator — return a short excerpt around matched phrase or the first N chars of text
  function excerptFor(pattern){
    try{
      const rx = new RegExp(pattern.source, 'i');
      const m = text.match(rx);
      if(m && m.index !== undefined){
        const start = Math.max(0, m.index - 30);
        const excerpt = text.substring(start, Math.min(text.length, m.index + (m[0] ? m[0].length : 40)));
        return excerpt.trim();
      }
    }catch(e){}
    // fallback: return first 120 chars
    return text.substring(0,120).trim();
  }

  if(type === 'essay'){
    if(words < 200){
      issues.push('fixShort');
      issueText.push({ part: msg(lang,'fixShort'), excerpt: text.substring(0,200), advice: msg(lang,'fixShort') });
    }
    if(!thesisPresent){
      issues.push('fixThesis');
      issueText.push({ part: msg(lang,'fixThesis'), excerpt: '', advice: msg(lang,'fixThesis') });
    } else {
      // if thesis present, show its excerpt
      const ex = excerptFor(rules.thesis[0]);
      issueText.push({ part: msg(lang,'thesisDefTitle'), excerpt: ex, advice: msg(lang,'fixThesis') });
    }
    if(paras.length < 3){
      issues.push('fixParagraph');
      issueText.push({ part: msg(lang,'fixParagraph'), excerpt: text, advice: msg(lang,'fixParagraph') });
    }
    if(exampleCount === 0){
      issues.push('fixExample');
      issueText.push({ part: msg(lang,'fixExample'), excerpt: '', advice: msg(lang,'fixExample') });
    } else {
      // show first example excerpt
      const ex = excerptFor(rules.example[0]);
      issueText.push({ part: `${msg(lang,'fixExample')} (${exampleCount})`, excerpt: ex, advice: msg(lang,'fixExample') });
    }
    if(!conclusionPresent){
      issues.push('fixConclusion');
      issueText.push({ part: msg(lang,'fixShort'), excerpt: '', advice: msg(lang,'fixShort') });
    } else {
      const ex = excerptFor(rules.conclusion[0]);
      issueText.push({ part: 'Conclusion', excerpt: ex, advice: msg(lang,'fixShort') });
    }

    // repetition detection (simple): count words frequency and list words >=6
    const low = text.toLowerCase().replace(/[^\w\s\u0400-\u04FF\u0600-\u06FF\u4E00-\u9FFF\u3040-\u30FF\uAC00-\uD7AF]/g,' ');
    const wordsArr = low.split(/\s+/).filter(Boolean);
    const freq = {};
    const repeated = [];
    for(const w of wordsArr){
      if(w.length <= 2) continue;
      freq[w] = (freq[w] || 0) + 1;
      if(freq[w] === 6) repeated.push(w); // report when reaches 6
    }
    if(repeated.length){
      issues.push('fixRepetition');
      issueText.push({ part: msg(lang,'fixRepetition'), excerpt: repeated.join(', '), advice: msg(lang,'fixRepetition') });
    }
  } else if(type === 'cv'){
    if(words < 150){
      issues.push('fixShort');
      issueText.push({ part: msg(lang,'fixShort'), excerpt: text.substring(0,200), advice: msg(lang,'fixShort') });
    }
  } else if(type === 'letter'){
    const greeting = anyMatch(text, rules.greeting || []);
    const closing = anyMatch(text, rules.closing || []);
    if(!greeting){
      issues.push('fixGreeting');
      issueText.push({ part: msg(lang,'fixGreeting'), excerpt: '', advice: msg(lang,'fixGreeting') });
    } else {
      const ex = excerptFor(rules.greeting[0]);
      issueText.push({ part: 'Greeting', excerpt: ex, advice: msg(lang,'fixGreeting') });
    }
    if(!closing){
      issues.push('fixClosing');
      issueText.push({ part: msg(lang,'fixClosing'), excerpt: '', advice: msg(lang,'fixClosing') });
    } else {
      const ex = excerptFor(rules.closing[0]);
      issueText.push({ part: 'Closing', excerpt: ex, advice: msg(lang,'fixClosing') });
    }
  }

  // Build UI
  let html = `<div style="font-weight:700">🔎 ${escapeHtml(msg(lang,'rubricTitle'))}</div>`;
  html += `<div style="margin-top:8px;color:var(--muted)">Words: ${words} • Paragraphs: ${paras.length}</div>`;

  if(issueText.length){
    html += `<div style="margin-top:10px"><strong style="color:#ffd966">${escapeHtml(msg(lang,'fixTitle'))}</strong>`;
    issueText.forEach(it=>{
      html += `<div class="issue-block">`;
      html += `<div class="part">${escapeHtml(it.part)}</div>`;
      if(it.excerpt){
        html += `<div class="excerpt">${escapeHtml(it.excerpt)}</div>`;
      } else {
        html += `<div style="color:var(--muted); margin-top:6px;"><em>${escapeHtml('(no excerpt found)')}</em></div>`;
      }
      html += `<div style="margin-top:6px;color:#6ee7b7"><strong>${escapeHtml('You can write:')}</strong> ${escapeHtml(it.advice)}</div>`;
      html += `</div>`;
    });
    html += `</div>`;
  } else {
    html += `<div style="margin-top:10px;color:var(--good)"><strong>✅</strong> ${escapeHtml(msg(lang,'essayExample') || '')}</div>`;
  }

  resultEl.innerHTML = html;
  renderDefinitions(lang);
}

/* ---------- Events ---------- */
if(checkBtn) checkBtn.addEventListener('click', analyze);
if(clearBtn) clearBtn.addEventListener('click', ()=>{
  textEl.value = '';
  resultEl.innerHTML = '';
  renderDefinitions(langEl.value || 'en');
});
if(langEl) langEl.addEventListener('change', ()=>{ updateUI(); resultEl.innerHTML=''; });
if(docEl) docEl.addEventListener('change', ()=>{ resultEl.innerHTML=''; });

/* ---------- Init ---------- */
updateUI();