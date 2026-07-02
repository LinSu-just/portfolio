(() => {
  const translations = {
    'Обо мне':'About','Проекты':'Projects','Услуги':'Services','Контакты':'Contacts','Резюме':'Resume',
    'Главная':'Home','Связаться со мной':'Contact me','Смотреть проекты':'View projects','Избранные работы':'Selected works',
    'Дмитренко Светлана':'Svetlana Dmitrenko','UI/UX дизайнер • Веб-дизайн • Графический дизайн':'UI/UX Designer • Web Design • Graphic Design',
    'Москва':'Moscow','работаю удаленно и в офисе':'remote and office work','2 года':'2 years','Коммерческий опыт':'Commercial experience',
    '40+ проектов':'40+ projects','От стартапов до крупного бизнеса':'From startups to large businesses','Мои навыки':'My skills','Нейросети':'AI tools',
    'Создаю дизайн, который помогает бизнесу выделяться, привлекать клиентов и решать задачи.':'I create design that helps businesses stand out, attract customers, and solve real challenges.',
    'UX/UI дизайн':'UX/UI Design','Брендинг':'Branding','Полиграфия':'Print Design','Упаковка':'Packaging',
    'Интерфейсы, которые удобны и работают.':'Interfaces that are intuitive and effective.','Айдентика, которая передаёт характер бренда.':'Identity that communicates the brand character.',
    'Печатные материалы, которые выглядят профессионально.':'Print materials that look professional.','Упаковка, которая привлекает и запоминается.':'Packaging that attracts attention and stays memorable.',
    'Как проходит работа':'How I work','Обсуждение':'Discussion','Исследование':'Research','Дизайн':'Design','Правки':'Revisions','Передача файлов':'File delivery',
    'Буду рада обсудить ваш проект и ответить на любые вопросы. Свяжитесь со мной удобным для вас способом.':'I would be happy to discuss your project and answer any questions. Contact me in any convenient way.',
    'Телефон':'Phone','Почта':'Email','Телеграм':'Telegram','Есть идея проекта?':'Have a project idea?','Давайте обсудим её вместе.':'Let’s discuss it together.',
    'Разделы':'Sections','Связаться':'Contact','На главную':'Back to home','Дизайн с вниманием к людям и деталям.':'Design with care for people and details.',
    'Сайт разработан и оформлен автором':'Website designed and built by the author','Москва · Россия':'Moscow · Russia',
    'UX/UI дизайн — Светлана Дмитренко':'UX/UI Design — Svetlana Dmitrenko','Вернуться к проектам':'Back to projects',
    'Создаю удобные и интуитивно понятные цифровые продукты, которые решают задачи бизнеса и приносят пользу пользователям.':'I design clear and intuitive digital products that solve business problems and bring value to users.',
    'Обсудить проект':'Discuss a project','Задача':'Challenge','Выполнение':'Execution','Что вы получаете':'What you get','Процесс работы':'Work process','Примеры работ':'Selected work',
    'Понять потребности пользователей':'Understand user needs','Улучшить пользовательский опыт':'Improve user experience','Увеличить конверсию и вовлечённость':'Increase conversion and engagement','Создать дружелюбный и современный дизайн':'Create a friendly modern design',
    'Аналитика и исследование':'Analytics and research','Прототипирование и структура':'Prototyping and structure','UI-дизайн и визуальная концепция':'UI design and visual concept','Адаптивные версии':'Responsive versions','Передача в разработку и поддержка':'Developer handoff and support',
    'Анализ и бриф':'Analysis and brief','Прототип':'Prototype','Адаптив':'Responsive design','Передача':'Delivery',
    'Сайт для агентства недвижимости':'Real Estate Agency Website','Разработка сайта для подбора элитной недвижимости.':'Website for selecting premium real estate.',
    'Сайт для Yandex Pet Day':'Yandex Pet Day Website','Дизайн сайта конференции о digital-продуктах для питомцев':'Conference website for digital pet products',
    'Сайт о музыкальных жанрах':'Music Genres Website','Дизайн сайта о музыкальных жанрах и исполнителях':'Website about music genres and artists',
    'ОБРАЗОВАНИЕ':'EDUCATION','Яндекс Практикум':'Yandex Practicum','Сертификат на русском языке':'Certificate in Russian','Certificate in English':'Certificate in English',
    'Готовы начать проект?':'Ready to start a project?','Написать мне':'Message me',
    'Брендинг и брендбуки':'Branding & Brand Books','Брендинг и фирменный стиль':'Branding & Visual Identity',
    'Создаю целостный образ бренда — от идеи и логотипа до визуальной системы, которая передаёт характер компании и помогает ей быть узнаваемой.':'I create a cohesive brand image — from the initial idea and logo to a visual system that conveys character and builds recognition.',
    'Логотип и знак':'Logo and mark','Фирменный стиль':'Visual Identity','Брендбук':'Brand Book','Дизайн носителей':'Brand Collateral','Готовые файлы':'Production-ready files',
    'Бриф':'Brief','Концепция':'Concept','Система':'System','Брендбук LiWiTa':'LiWiTa Brand Book','Дизайн-студия DS':'DS Design Studio',
    'Готовы создать бренд?':'Ready to build your brand?','Дизайн упаковки':'Packaging Design',
    'Создаю упаковку, которая не только защищает продукт, но и продаёт его. Объединяю эстетику, функциональность и стратегию бренда, чтобы выделить ваш товар на полке и в сердце покупателя.':'I design packaging that not only protects a product but also sells it. I combine aesthetics, functionality, and brand strategy to make it stand out.',
    'Уникальный дизайн':'Unique design','Готовые макеты':'Production-ready layouts','3D-визуализация':'3D visualization','Поддержка на всех этапах':'Support at every stage','Соблюдение сроков':'On-time delivery',
    'Упаковка для игры «Танцуй как»':'“Dance Like” Game Packaging','Упаковка для пасты':'Pasta Packaging','Упаковка для пекарни':'Bakery Packaging',
    'Печатная продукция':'Print Design','Создаю печатные материалы, которые выглядят профессионально, поддерживают фирменный стиль и помогают ясно донести информацию до аудитории.':'I create professional print materials that support brand identity and communicate information clearly.',
    'Продуманная концепция':'Thoughtful concept','Профессиональная вёрстка':'Professional layout','Подготовка изображений':'Image preparation','Макеты для типографии':'Print-ready files','Поддержка производства':'Production support',
    'Материалы':'Materials','Вёрстка':'Layout','Печать':'Printing','Календарь для острова Ершовых':'Calendar for Yershov Islands','Создание листовок':'Flyer Design','Создание журналов':'Magazine Design','Создание буклетов':'Booklet Design',
    'Что входит в фирменный стиль':'What Visual Identity Includes','Логотип':'Logo','Цветовая палитра':'Color Palette','Типографика':'Typography','Графические элементы':'Graphic Elements','Фирменные носители':'Brand Collateral',
    'Этапы работы':'Work Stages','01. Брифинг':'01. Briefing','02. Исследование':'02. Research','03. Концепция':'03. Concept','04. Разработка':'04. Development','05. Передача':'05. Delivery',
    'Фирменный стиль компании LiWiTa':'LiWiTa Visual Identity','Фирменный стиль DS':'DS Visual Identity','Фирменный стиль Sweet and Sour Bakery':'Sweet & Sour Bakery Visual Identity',
    'Готовы создать стиль, который выделит ваш бренд?':'Ready to create an identity that makes your brand stand out?'
  };
  Object.assign(translations, {
    'Дмитренко':'Dmitrenko','Светлана':'Svetlana','UI/UX дизайнер':'UI/UX Designer','Веб-дизайн':'Web Design','Графический дизайн':'Graphic Design',
    'Привет! Меня зовут Светлана Дмитренко —':'Hello! My name is Svetlana Dmitrenko —','графический и UI/UX дизайнер из Москвы.':'a graphic and UI/UX designer based in Moscow.',
    'Я с отличием окончила обучение по специальности':'I graduated with honors in','«Графический дизайн» и продолжаю развиваться в профессии.':'Graphic Design and continue growing professionally.',
    'Дополнительно прошла курс по дизайну интерфейсов':'I also completed the Interface Design course','в Яндекс Практикуме, где получила практический опыт':'at Yandex Practicum, where I gained hands-on experience',
    'проектирования современных цифровых продуктов':'designing modern digital products','и работы с UX/UI-подходами.':'and applying UX/UI methods.',
    'Уже почти 2 года я создаю фирменные стили, интерфейсы':'For almost two years, I have been creating visual identities, interfaces',
    'и сайты, которые помогают бизнесу выделяться, вызывать':'and websites that help businesses stand out, build',
    'доверие и эффективно решать задачи пользователей.':'trust, and effectively solve user needs.',
    'Мне близок минимализм, внимание к деталям и продуманная':'I value minimalism, attention to detail, and thoughtful',
    'структура. Я быстро осваиваю новые инструменты, люблю':'structure. I quickly master new tools and enjoy',
    'постоянно учиться и считаю, что хороший дизайн — это не':'continuous learning. I believe good design is not',
    'просто красивая картинка, а понятное и удобное решение':'just a beautiful picture, but a clear and convenient solution',
    'для людей.':'for people.',
    'Проектирую интерфейсы, фирменные стили и сайты,':'I design interfaces, visual identities, and websites',
    'которые помогают компаниям выделяться, вызывать':'that help companies stand out, build',
    'доверие и решать бизнес-задачи. Люблю чистый дизайн,':'trust, and solve business challenges. I value clean design,',
    'понятную структуру и внимание к деталям.':'clear structure, and attention to detail.',
    'работаю удаленно':'remote work','и в офисе':'and office work','От стартапов до':'From startups to','крупного бизнеса':'large businesses',
    'Айдентика, которая':'Identity that','передаёт характер бренда.':'expresses brand character.','Печатные материалы, которые':'Print materials that','выглядят профессионально.':'look professional.',
    'Упаковка, которая привлекает':'Packaging that attracts attention','и запоминается.':'and stays memorable.',
    'Анализируем нишу,':'I analyze the niche,','конкурентов и аудиторию.':'competitors, and audience.','Вносим правки':'I make revisions','и дорабатываем проект.':'and refine the project.',
    'Изучаем задачу, цели':'I study the task, goals','и пожелания.':'and requirements.','Передаю исходники':'I deliver source files','и необходимые файлы.':'and all required assets.',
    'Буду рада обсудить ваш проект и ответить':'I would be happy to discuss your project and answer','на любые вопросы. Свяжитесь со мной удобным':'any questions. Contact me in a way','для вас способом.':'that is convenient for you.',
    'Дизайн с вниманием':'Design with care','к людям и деталям.':'for people and details.','© 2026 Дмитренко Светлана':'© 2026 Svetlana Dmitrenko',
    'Резюме ↗':'Resume ↗','Сертификат':'Certificate','на русском языке':'in Russian',
    'Разработать современный и удобный интерфейс для платформы, который поможет пользователям быстро находить нужную информацию, а бизнесу — достигать своих целей.':'Design a modern and intuitive platform interface that helps users quickly find information and supports business goals.',
    'Прохожу полный цикл работы — от анализа и прототипирования до визуального дизайна и передачи в разработку.':'I cover the full workflow — from research and prototyping to visual design and developer handoff.',
    'Изучаю проект, аудиторию':'I study the project, audience','и конкурентов':'and competitors','Создаю структуру':'I create the structure','и сценарии':'and user flows',
    'Разрабатываю визуальный':'I develop the visual','стиль и интерфейс':'style and interface','Проектирую под все':'I design for all','устройства':'devices','Подготавливаю макеты':'I prepare layouts','для разработки':'for development',
    'Свяжитесь со мной, и мы создадим удобный и эффективный продукт для ваших пользователей.':'Contact me and together we will create an intuitive and effective product for your users.',
    'Завершила обучение по программе «Дизайн интерфейсов для цифровых продуктов». Во время курса прошла полный цикл продуктового дизайна: от исследования и прототипирования до создания UI и подготовки макетов к разработке.':'I completed the “Interface Design for Digital Products” program. During the course, I covered the full product design cycle — from research and prototyping to UI design and developer-ready layouts.',
    'брендбуки':'brand books','Брендинг и':'Branding &','Изучаю бренд, цели':'I study the brand, goals','и аудиторию':'and audience','Развиваю стиль':'I develop the identity','на носителях':'across touchpoints',
    'Визитки, документы, соцсети и упаковка.':'Business cards, documents, social media, and packaging.','Основные, дополнительные и монохромные версии.':'Primary, secondary, and monochrome versions.',
    'Понятные правила применения системы бренда.':'Clear guidelines for using the brand system.','Материалы для печати и цифрового использования.':'Assets for print and digital use.',
    'Свяжитесь со мной, и мы разработаем выразительную визуальную систему для вашего проекта.':'Contact me and we will create a distinctive visual system for your project.',
    'Привлекает внимание и выделяет на полке':'Attracts attention and stands out on the shelf','Передаёт ценности и характер бренда':'Communicates brand values and personality',
    'Удобен в использовании и функционален':'Convenient and functional','Соответствует техническим требованиям':'Meets technical requirements','Повышает узнаваемость и лояльность':'Builds recognition and loyalty',
    'Индивидуальные концепции, отражающие ваш бренд.':'Custom concepts that express your brand.','Реалистичная презентация упаковки до запуска.':'Realistic packaging visualization before production.',
    'Консультации и доработки до результата.':'Consulting and refinement through final delivery.','Готовлю варианты':'I prepare versions','под форматы':'for different formats','для производства':'for production',
    'Разработать выразительный и функциональный печатный продукт, в котором содержание, композиция и визуальный стиль работают как единая система.':'Create an expressive and functional print product where content, composition, and visual style work as one system.',
    'Изучаю задачу,':'I study the brief,','Собираю тексты,':'I gather texts,','и композицию':'and composition','Собираю полосы':'I build the layouts','и готовлю макет':'and prepare the final file','и сопровождаю тираж':'and supervise production',
    'Визуальное решение, соответствующее задаче.':'A visual solution aligned with the brief.','Обработка и адаптация графических материалов.':'Image editing and adaptation.',
    'Проверка и сопровождение перед печатью.':'Preflight checks and print support.','Настольный календарь в фирменной стилистике загородного клуба':'Desk calendar in the country club’s visual style',
    'Информационные и рекламные материалы для бизнеса':'Informational and promotional business materials','Дизайн обложки и многостраничная вёрстка':'Cover design and multi-page layout',
    'Погружаюсь в бизнес':'I immerse myself in the business','и собираю информацию':'and gather information','Анализирую рынок,':'I analyze the market,','Создаю направления':'I create directions',
    'фирменного стиля':'for the visual identity','Дорабатываю систему':'I refine the system','и готовлю материалы':'and prepare the materials','Передаю файлы':'I deliver the files','и гайдлайн':'and the guidelines',
    'Создаю уникальный фирменный стиль, который делает ваш бренд узнаваемым и запоминающимся. Каждый элемент — от логотипа до фирменных носителей — работает на создание целостного и профессионального образа.':'I create a distinctive visual identity that makes your brand recognizable and memorable. Every element — from the logo to branded collateral — builds a cohesive professional image.',
    'Разработка уникального знака, который отражает суть вашего бренда.':'A unique mark that captures the essence of your brand.','Подбор гармоничных цветов, которые вызывают нужные ассоциации.':'A harmonious color palette that creates the right associations.',
    'Выбор шрифтовых пар, подчёркивающих характер бренда.':'Font combinations that emphasize the brand character.','Фирменные паттерны, иконки и элементы для коммуникаций.':'Brand patterns, icons, and communication elements.',
    'Дизайн визиток, бланков, конвертов и других материалов.':'Design of business cards, stationery, envelopes, and other materials.','Свяжитесь со мной, и мы разработаем фирменный стиль, который подчеркнёт уникальность вашего бизнеса.':'Contact me and we will create a visual identity that highlights what makes your business unique.'
  });
  Object.assign(translations, {
    'UI-дизайн':'UI Design','Айдентика и визуальные системы':'Identity and visual systems','Айдентика и руководство по использованию фирменного стиля':'Identity and visual identity guidelines',
    'Анализирую рынок':'I analyze the market','Аналитика и структура':'Analytics and structure','Брендинг и брендбуки — Светлана Дмитренко':'Branding & Brand Books — Svetlana Dmitrenko',
    'Брошюры и буклеты':'Brochures and booklets','Выстроить понятную структуру материалов':'Build a clear content structure','Дизайн упаковки — Светлана Дмитренко':'Packaging Design — Svetlana Dmitrenko',
    'Дизайн упаковки в фирменном стиле':'Packaging design aligned with the visual identity','Дизайн упаковки для линейки пасты':'Packaging design for a pasta product line','Дизайн упаковки для настольной игры':'Packaging design for a board game',
    'Журналы и каталоги':'Magazines and catalogs','Журналы, каталоги и буклеты':'Magazines, catalogs, and booklets','Зафиксировать правила использования':'Define usage guidelines',
    'и визуальные решения.':'and visual solutions.','и готовые файлы':'and final files','Интерфейсы, которые':'Interfaces that are','Инфографика':'Infographics',
    'конкурентов и аудиторию':'competitors and audience','Концепция и дизайн':'Concept and design','Концепция, печать и сборка':'Concept, print, and assembly',
    'Логотип, айдентика и упаковка':'Logo, identity, and packaging','Логотип, фирменная графика и система носителей':'Logo, brand graphics, and collateral system','направления':'directions',
    'Носители и шаблоны':'Collateral and templates','Определить характер и позиционирование':'Define personality and positioning','Передача в разработку':'Developer handoff',
    'Печатная':'Print','Печатная продукция — Светлана Дмитренко':'Print Design — Svetlana Dmitrenko','Подготовить макеты к профессиональной печати':'Prepare professional print-ready layouts',
    'Подготовить фирменные носители':'Prepare branded collateral','Подготовка к печати':'Print preparation','Поддержать характер и стиль бренда':'Maintain the brand character and style',
    'Подобрать типографику и визуальный ритм':'Select typography and visual rhythm','Презентации':'Presentations','привлекать клиентов и решать задачи.':'attract customers, and solve business challenges.',
    'продукция':'Design','Прототипирование':'Prototyping','Разработать единую визуальную систему':'Develop a unified visual system','Рекомендации по использованию':'Usage recommendations',
    'Сайты и цифровые продукты':'Websites and digital products','Светлана Дмитренко — Портфолио':'Svetlana Dmitrenko — Portfolio',
    'Свяжитесь со мной, и мы создадим выразительный печатный продукт для вашей аудитории.':'Contact me and we will create an expressive print product for your audience.',
    'Сдержанная визуальная система и деловые носители':'Refined visual system and business collateral','Собираю правила':'I compile the guidelines','Создать запоминающийся логотип':'Create a memorable logo',
    'Создаю визуальные':'I create visual','Создаю дизайн, который помогает бизнесу выделяться,':'I create design that helps businesses stand out,','Создаю концепцию':'I create the concept',
    'Создаю стилистику':'I develop the visual style','Сопровождение тиража':'Print run support','Сохранить качество во всех форматах':'Maintain quality across all formats',
    'стиль':'Identity','стиль упаковки':'packaging style','Структура и вёрстка':'Structure and layout','Структура, оформление и подготовка буклетов к печати':'Structure, design, and print preparation for booklets',
    'Сформировать узнаваемый визуальный язык бренда, который отражает его ценности, выделяет среди конкурентов и одинаково уверенно работает на всех носителях.':'Create a recognizable brand language that reflects its values, stands out from competitors, and works consistently across every touchpoint.',
    'удобны и работают.':'intuitive and effective.','Упаковка — это важный элемент бренда и мощный инструмент маркетинга. Я разрабатываю дизайн, который:':'Packaging is a key brand asset and a powerful marketing tool. I create designs that:',
    'упаковки':'Packaging','Файлы для печати и производства в нужных форматах.':'Files for printing and production in all required formats.','Файлы с вылетами, метками и цветовыми профилями.':'Files with bleeds, crop marks, and color profiles.',
    'Фирменный':'Visual','Фирменный стиль — Светлана Дмитренко':'Visual Identity — Svetlana Dmitrenko','формат и аудиторию':'format and audience','фото и референсы':'images and references',
    'Цвета, типографика, графика и фотостиль.':'Colors, typography, graphics, and photography style.','Чёткое планирование и своевременная сдача.':'Clear planning and on-time delivery.','Чистая композиция и удобное восприятие.':'Clean composition and easy readability.'
  });
  const reverse = Object.fromEntries(Object.entries(translations).map(([ru,en]) => [en,ru]));
  const root = document.documentElement;
  const stored = localStorage.getItem('portfolio-language') || 'ru';

  const preserveWhitespace = (text, value) => {
    const start = text.match(/^\s*/)?.[0] || '';
    const end = text.match(/\s*$/)?.[0] || '';
    return start + value + end;
  };

  const translate = (language) => {
    const map = language === 'en' ? translations : reverse;
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(node => {
      if (node.parentElement?.closest('script,style,.lang-switch')) return;
      const value = node.nodeValue.trim();
      if (map[value]) node.nodeValue = preserveWhitespace(node.nodeValue, map[value]);
    });
    document.querySelectorAll('[alt],[aria-label]').forEach(el => {
      ['alt','aria-label'].forEach(attr => {
        const value = el.getAttribute(attr);
        if (value && map[value]) el.setAttribute(attr, map[value]);
      });
    });
    if (map[document.title]) document.title = map[document.title];
    root.lang = language;
    const button = document.querySelector('.lang-switch');
    if (button) {
      button.setAttribute('aria-label', language === 'ru' ? 'Switch language. Russian selected' : 'Переключить язык. Выбран английский');
      button.querySelector('[data-lang="ru"]')?.classList.toggle('is-active', language === 'ru');
      button.querySelector('[data-lang="en"]')?.classList.toggle('is-active', language === 'en');
    }
    localStorage.setItem('portfolio-language', language);
  };

  const resume = document.querySelector('.resume,.ux-case-resume,.case-resume');
  if (resume) {
    const actions = document.createElement('div');
    actions.className = 'header-actions';
    resume.parentNode.insertBefore(actions, resume);
    const button = document.createElement('button');
    button.className = 'lang-switch';
    button.type = 'button';
    button.innerHTML = '<span data-lang="ru">RU</span><i></i><span data-lang="en">EN</span>';
    actions.appendChild(button);
    actions.appendChild(resume);
    button.addEventListener('click', () => translate(root.lang === 'en' ? 'ru' : 'en'));
  }
  translate(stored);
})();
