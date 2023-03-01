export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  url: string;
  image: string;
  rating: number;
  category: string;
  likes: number;
  clicked: boolean;
}

export const products = [
  {
    id: 1,
    name: 'Игровая приставка Sony PlayStation 5 белый',
    price: 312,
    description: 'С Sony PlayStation 5 вы ощутите истинную силу игры Молниеносная скорость загрузки благодаря сверхскоростному накопителю SSD, невероятный эффект погружения благодаря тактильной отдаче, адаптивным спусковым кнопкам и 3D-звуку, а также потрясающие игры нового поколения для PlayStation 5.',
    url: 'https://kaspi.kz/shop/p/sony-playstation-5-belyi-100746577/?c=750000000#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd1/hbe/49348562681886/sony-playstation-5-belyj-100746577-1-Container.jpg',
    rating: 9,
    category: "Console",
    likes: 410,
    clicked: false
  },
  {
    id: 2,
    name: 'Игровая приставка Xbox Series X 1TB черный',
    price: 300,
    description: 'Игры, созданные с использованием набора для разработки Xbox Series X|S, демонстрируют значительное сокращение времени загрузки и потрясающие визуальные эффекты с частотой до 120 кадров в секунду.',
    url: 'https://kaspi.kz/shop/p/xbox-series-x-1tb-chernyi-100824897/?c=750000000#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h1f/hbe/33586549227550/xbox-series-x-1tb-cernyj-100824897-1-Container.jpg',
    rating: 8,
    category: "Console",
    likes: 322,
    clicked: false
  },
  {
    id: 3,
    name: 'Смартфон Samsung Galaxy S22+ 8 ГБ/128 ГБ черный',
    price: 799,
    description: 'Новая форма самовыражения Утонченные лицевые панели гармонично сочетаются с изысканным корпусом. Роскошный вид дополняет лакончиная система линейных камер. Он просто великолепен.',
    url: 'https://kaspi.kz/shop/p/samsung-galaxy-s22-8-gb-128-gb-chernyi-103662854/?c=750000000#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h75/hbc/48695407411230/samsung-galaxy-s22-8-128gb-cernyj-103662854-1.jpg',
    rating: 8,
    category: "Phone",
    likes: 243,
    clicked: false
  },
  {
    id: 4,
    name: 'Смарт-часы Samsung Galaxy Watch 4 SM-R870N 44 мм черный',
    price: 87,
    description: 'Отслеживайте свой прогресс в фитнесе при помощи наших первых Galaxy Watch, которые умеют анализировать состав тела. Узнайте, какое количество жира, скелетных мышц, воды содержится в вашем организме и другие данные, которые помогут достичь поставленных целей.',
    url: 'https://kaspi.kz/shop/p/samsung-galaxy-watch-4-sm-r870n-44-mm-chernyi-102120636/?c=750000000#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h7e/hbe/44806576209950/samsung-galaxy-watch-4-sm-r870n-44mm-cernyj-102120636-1-Container.jpg',
    rating: 7,
    category: "Watch",
    likes: 196,
    clicked: false
  },
  {
    id: 5,
    name: 'Смартфон Apple iPhone 14 Pro 128Gb фиолетовый',
    price: 578,
    description: 'Фронтальная камера отличная. Apple впервые добавила автофокус, который срабатывает мгновенно и очень точно. Разрешение у фронталки ниже, чем у большинства андроид-флагманов, но снимает она лучше за счет более качественного сенсора.',
    url: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-128gb-fioletovyi-106363283/?c=750000000#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hfe/hf7/62948389748766/apple-iphone-14-pro-128gb-fioletovyj-106363283-1.jpg',
    rating: 10,
    category: "Phone",
    likes: 481,
    clicked: false
  },
  {
    id: 6,
    name: 'Игровая приставка Sony PlayStation 4 Slim 500 ГБ черный',
    price: 239,
    description: 'Консоль PS4 Slim предлагает игрокам потрясающую игровую мощь, невероятные развлечения и прекрасную технологию HDR. Обновленная тонкая PS4 Храните свои игры, приложения, картинки и видео на консолях PS4 Slim с жестким диском на 500 Гб – PS4 Slim на 30% тоньше и на 16% легче, чем оригинальная модель PS4',
    url: 'https://kaspi.kz/shop/p/sony-playstation-4-slim-500-gb-chernyi-4100126/?c=750000000#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hab/h3e/31624441102366/sony-playstation-4-slim-500-gb-cernyj-4100126-1-Container.jpg',
    rating: 7,
    category: "Console",
    likes: 310,
    clicked: false
  },
  {
    id: 7,
    name: 'Смартфон Samsung Galaxy S23 Ultra 5G 12 ГБ/512 ГБ зеленый + подарок',
    price: 749,
    description: 'Новая форма самовыражения Утонченные лицевые панели гармонично сочетаются с изысканным корпусом. Роскошный вид дополняет лакончиная система линейных камер. Он просто великолепен.',
    url: 'https://kaspi.kz/shop/p/samsung-galaxy-s23-ultra-5g-12-gb-512-gb-zelenyi-podarok-108714425/?c=750000000#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h3a/h20/68538744537118/samsung-galaxy-s23-ultra-5g-12-gb-512-gb-zelenyi-108714425-1.jpg',
    rating: 9,
    category: "Phone",
    likes: 453,
    clicked: false
  },
  {
    id: 8,
    name: 'Смартфон Apple iPhone 12 64Gb черный',
    price: 308,
    description: 'Apple iPhone Xr — воплощение красоты и интеллекта. Новый дисплей Liquid Retina HD — самый продвинутый ЖК‑дисплей iPhone. Инновационные технологии подсветки позволили создать дисплей, закругленный по углам и занимающий всю переднюю панель. Теперь реалистичные цвета заполняют ее целиком.',
    url: 'https://kaspi.kz/shop/p/apple-iphone-12-64gb-chernyi-100656839/?c=750000000#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hfa/h97/33279114575902/apple-iphone-12-64gb-cernyj-100656839-1-Container.jpg',
    rating: 7,
    category: "Phone",
    likes: 196,
    clicked: false
  },
  {
    id: 9,
    name: 'Смартфон Samsung Galaxy S23+ 5G 8 ГБ/512 ГБ бежевый + подарок',
    price: 599,
    description: 'Фронтальная камера отличная. Samsung впервые добавила автофокус, который срабатывает мгновенно и очень точно. Разрешение у фронталки ниже, чем у большинства андроид-флагманов, но снимает она лучше за счет более качественного сенсора.',
    url: 'https://kaspi.kz/shop/p/samsung-galaxy-s23-5g-8-gb-512-gb-bezhevyi-podarok-108714362/?c=750000000#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h18/h68/68538725793822/samsung-galaxy-s23-5g-8-gb-512-gb-bezhevyi-108714362-1.jpg',
    rating: 10,
    category: "Phone",
    likes: 390,
    clicked: false
  },
  {
    id: 10,
    name: 'Часы Maurice Lacroix AI6038-TT030-330-2 серый',
    price: 2494,
    description: 'Механи́ческие часы́ — часы, использующие маятник, который периодом колебаний измеряет время в течение суток, месяца, года и который приводится в движение гиревым, пружинным или электрическим источником энергии с электромеханическим преобразователем.',
    url: 'https://kaspi.kz/shop/p/maurice-lacroix-ai6038-tt030-330-2-seryi-108165530/?c=750000000#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h16/h28/67172345151518/naruchnye-chasy-maurice-lacroix-ai6038-tt030-330-2-108165530-1.jpg',
    rating: 9,
    category: "Watch",
    likes: 198,
    clicked: false
  },
  {
    id: 11,
    name: 'Игровая приставка Sony PlayStation 4 Slim 1 TB черный + Red Dead Redemption II',
    price: 306,
    description: 'Консоль PS4 Slim предлагает игрокам потрясающую игровую мощь, невероятные развлечения и прекрасную технологию HDR. Обновленная тонкая PS4 Храните свои игры, приложения, картинки и видео на консолях PS4 Slim с жестким диском на 500 Гб – PS4 Slim на 30% тоньше и на 16% легче, чем оригинальная модель PS4',
    url: 'https://kaspi.kz/shop/p/sony-playstation-4-slim-1-tb-chernyi-red-dead-redemption-ii-4100304/?c=750000000#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd5/h92/31520177881118/sony-playstation-4-slim-1-tb-cernyj-red-dead-redemption-ii-4100304-1.jpg',
    rating: 8,
    category: "Console",
    likes: 355,
    clicked: false
  },
  {
    id: 12,
    name: 'Смарт-часы Apple Watch Series 8 45 мм Aluminum черный',
    price: 229,
    description: 'Apple Watch — это умные часы Apple, которые выпускаются с 2015 года. За это время они превратились из гаджета для уведомлений в незаменимое устройство, стоящее в одном ряду с iPhone, в дополнение к которому оно и выпускалось. ',
    url: 'https://kaspi.kz/shop/p/apple-watch-series-8-45-mm-aluminum-chernyi-106362847/?c=750000000#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h1a/h69/63158968057886/apple-watch-series-8-41-mm-cernyj-106362847-1.jpg',
    rating: 8,
    category: "Watch",
    likes: 268,
    clicked: false
  },
  {
    id: 13,
    name: 'Смарт-часы Apple Watch SE 2nd Gen 40 мм серебристый-белый',
    price: 159,
    description: 'Новая форма самовыражения Утонченные лицевые панели гармонично сочетаются с изысканным корпусом. Роскошный вид дополняет лакончиная система линейных камер. Он просто великолепен.',
    url: 'https://kaspi.kz/shop/p/apple-watch-se-2nd-gen-40-mm-serebristyi-belyi-106362779/?c=750000000#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hdd/h7c/62711077961758/apple-watch-se-2nd-generation-40-mm-serebristyj-belyj-106362779-1.jpg',
    rating: 8,
    category: "Watch",
    likes: 243,
    clicked: false
  },
  {
    id: 14,
    name: 'Видеоигра God Of War PS4',
    price: 87,
    description: 'Отомстив богам Олимпа, Кратос живет в царстве скандинавских божеств и чудовищ. В этом суровом и беспощадном мире он должен не только самостоятельно бороться за выживание, но и научить этому своего сына... ',
    url: 'https://kaspi.kz/shop/p/god-of-war-ps4-10700837/?c=750000000#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h2f/h7f/31673375555614/god-of-war-ps4-10700837-1-Container.jpg',
    rating: 8,
    category: "Games",
    likes: 196,
    clicked: false
  },
  {
    id: 15,
    name: 'Видеоигра The Last of Us Part II/Одни из Нас Часть 2 PS4',
    price: 14,
    description: 'Спустя пять лет после страшного путешествия по охваченной эпидемией Америке Элли и Джоэл осели в Джексоне, штат Вайоминг',
    url: 'https://kaspi.kz/shop/p/the-last-of-us-part-ii-odni-iz-nas-chast-2-ps4-100332071/?c=750000000#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf8/h51/32669021831198/the-last-of-us-part-ii-odni-iz-nas-cast-2-ps4-100332071-1-Container.jpg',
    rating: 8,
    category: "Games",
    likes: 270,
    clicked: false
  },
  {
    id: 16,
    name: 'Видеоигра Mortal Kombat 11 Ultimate PS4',
    price: 13,
    description: 'Игра Mortal Kombat 11 Ultimate Kollectors Edition (PS4) - долгожданная часть культовой игровой серии Mortal Kombat, символизирующая 25-летие ее истории.',
    url: 'https://kaspi.kz/shop/p/mortal-kombat-11-ultimate-ps4-100855435/?c=750000000#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h2d/h01/33515305959454/mortal-kombat-11-ultimate-ps4-100855435-1-Container.jpg',
    rating: 9,
    category: "Games",
    likes: 410,
    clicked: false
  },
  {
    id: 17,
    name: 'Игровая приставка Xbox Series S белый',
    price: 160,
    description: 'Следующее поколение игр несет с собой нашу самую большую цифровую библиотеку для нашей самой маленькой Xbox. Благодаря более динамичным игровым мирам, ускоренной загрузке и добавлению Xbox Game Pass (продается отдельно) полностью цифровая консоль Xbox Series S является самым выгодным предложением в мире игр. ',
    url: 'https://kaspi.kz/shop/p/xbox-series-s-belyi-100793537/?c=750000000#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h3b/hdd/33118956126238/xbox-series-s-belyj-100793537-1-Container.jpg',
    rating: 6,
    category: "Console",
    likes: 343,
    clicked: false
  },
  {
    id: 18,
    name: 'Видеоигра GTA 5',
    price: 9,
    description: 'GTA 5 - cюжет игры разворачивается в в 2013 году в вымышленном городе Лос-Сантос. Герои игры Майкл Таунли, Франклин Клинтон и Тревор Филлипс - настоящие бандиты, грабят магазины, угоняют автомобили, устраивают разборки с мафиозными бандами.',
    url: 'https://kaspi.kz/shop/p/gta-5-10701127/?c=750000000#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h63/h40/31750197772318/gta-5-ps4-10701127-1-Container.jpg',
    rating: 9,
    category: "Games",
    likes: 514,
    clicked: false
  },
  {
    id: 19,
    name: 'Видеоигра God of War Ragnarök PS4',
    price: 27,
    description: 'Является девятой игрой в серии God of War и прямым сюжетным продолжением игры God of War, вышедшей в 2018 году.',
    url: 'https://kaspi.kz/shop/p/god-of-war-ragnar-k-ps4-106671788/?c=750000000#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h21/h3b/62864287891486/god-of-war-ragnarok-ps4-106671788-1.jpg',
    rating: 8,
    category: "Games",
    likes: 481,
    clicked: false
  },
  {
    id: 20,
    name: 'Смарт-часы Samsung Galaxy Watch 4 SM-R860 40 мм розовый',
    price: 89,
    description: 'Умные часы Samsung - это не просто гаджет, а ваш верный спутник на пути к достижению задач и самосовершенствованию. Обращайтесь за помощью персонального тренера, врача и аналитика прямо здесь и сейчас с умными часами Galaxy Watch4. Слушайте своё тело.',
    url: 'https://kaspi.kz/shop/p/samsung-galaxy-watch-4-sm-r860-40-mm-rozovyi-102120670/?c=750000000#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb0/h14/44807403274270/samsung-galaxy-watch-4-sm-r860-40-mm-rozovyi-102120670-1.jpg',
    rating: 7,
    category: "Watch",
    likes: 235,
    clicked: false
  },
  
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/