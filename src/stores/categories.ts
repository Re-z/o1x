const json = [
    {
        name: {
            ua: 'Допомога',
            en: 'Help',
        },
        url: 'dopomoga',
        subcategories: [
            {
                name: { ua: 'Потрібна допомога', en: 'Need help' },
                url: 'dopomoga/potribna_dopomoha',
            },
            {
                name: { ua: 'Пропоную допомогу', en: 'Offer help' },
                url: 'dopomoga/proponuiu_dopomohu',
            },
            { name: { ua: 'Волонтерство', en: 'Volunteering' }, url: 'dopomoga/volonterstvo' },
        ],
    },
    {
        name: { ua: 'Дитячий світ', en: 'Kids world' },
        url: 'detskiy-mir',
        subcategories: [
            { name: { ua: 'Дитячі іграшки', en: 'Toys' }, url: 'detskiy-mir/igrashky' },
            { name: { ua: 'Одяг для дітей', en: 'Kids clothing' }, url: 'detskiy-mir/odyag' },
            { name: { ua: 'Дитячі коляски', en: 'Strollers' }, url: 'detskiy-mir/strollers' },
        ],
    },
    {
        name: { ua: 'Нерухомість', en: 'Real estate' },
        url: 'nedvizhimost',
        subcategories: [
            { name: { ua: 'Квартири', en: 'Apartments' }, url: 'nedvizhimost/flats' },
            { name: { ua: 'Будинки', en: 'Houses' }, url: 'nedvizhimost/houses' },
            {
                name: { ua: 'Комерційна нерухомість', en: 'Commercial property' },
                url: 'nedvizhimost/commercial',
            },
        ],
    },
    {
        name: { ua: 'Авто', en: 'Cars' },
        url: 'transport',
        subcategories: [
            { name: { ua: 'Легкові', en: 'Passenger cars' }, url: 'transport/cars' },
            { name: { ua: 'Мотоцикли', en: 'Motorcycles' }, url: 'transport/motorcycles' },
            { name: { ua: 'Вантажівки', en: 'Trucks' }, url: 'transport/trucks' },
        ],
    },
    {
        name: { ua: 'Запчастини', en: 'Car parts' },
        url: 'zapchasti-dlya-transporta',
        subcategories: [
            { name: { ua: 'Шини та диски', en: 'Tires & wheels' }, url: 'zapchasti/tyres' },
            { name: { ua: 'Акумулятори', en: 'Batteries' }, url: 'zapchasti/batteries' },
            { name: { ua: 'Масла і рідини', en: 'Oils & fluids' }, url: 'zapchasti/oils' },
        ],
    },
    {
        name: { ua: 'Робота', en: 'Jobs' },
        url: 'rabota',
        subcategories: [
            { name: { ua: 'IT та програмування', en: 'IT & programming' }, url: 'rabota/it' },
            { name: { ua: 'Будівництво', en: 'Construction' }, url: 'rabota/construction' },
            { name: { ua: 'Продажі', en: 'Sales' }, url: 'rabota/sales' },
        ],
    },
    {
        name: { ua: 'Тварини', en: 'Animals' },
        url: 'zhivotnye',
        subcategories: [
            { name: { ua: 'Собаки', en: 'Dogs' }, url: 'zhivotnye/dogs' },
            { name: { ua: 'Коти', en: 'Cats' }, url: 'zhivotnye/cats' },
            { name: { ua: 'Птахи', en: 'Birds' }, url: 'zhivotnye/birds' },
        ],
    },
    {
        name: { ua: 'Дім і сад', en: 'Home & garden' },
        url: 'dom-i-sad',
        subcategories: [
            { name: { ua: 'Меблі', en: 'Furniture' }, url: 'dom-i-sad/furniture' },
            { name: { ua: 'Рослини', en: 'Plants' }, url: 'dom-i-sad/plants' },
            { name: { ua: 'Інструменти', en: 'Tools' }, url: 'dom-i-sad/tools' },
        ],
    },
    {
        name: { ua: 'Електроніка', en: 'Electronics' },
        url: 'elektronika',
        subcategories: [
            { name: { ua: 'Смартфони', en: 'Smartphones' }, url: 'elektronika/smartphones' },
            { name: { ua: 'Ноутбуки', en: 'Laptops' }, url: 'elektronika/laptops' },
            { name: { ua: 'Телевізори', en: 'TVs' }, url: 'elektronika/tv' },
        ],
    },
    {
        name: { ua: 'Бізнес та послуги', en: 'Business & services' },
        url: 'uslugi',
        subcategories: [
            { name: { ua: 'Маркетинг', en: 'Marketing' }, url: 'uslugi/marketing' },
            { name: { ua: 'Юридичні послуги', en: 'Legal services' }, url: 'uslugi/legal' },
            { name: { ua: 'Ремонт техніки', en: 'Device repair' }, url: 'uslugi/repair' },
        ],
    },
    {
        name: { ua: 'Мода і стиль', en: 'Fashion & style' },
        url: 'moda-i-stil',
        subcategories: [
            { name: { ua: 'Жіночий одяг', en: "Women's clothing" }, url: 'moda-i-stil/women' },
            { name: { ua: 'Чоловічий одяг', en: "Men's clothing" }, url: 'moda-i-stil/men' },
            { name: { ua: 'Взуття', en: 'Shoes' }, url: 'moda-i-stil/shoes' },
        ],
    },
    {
        name: { ua: 'Хобі, відпочинок і спорт', en: 'Hobbies, leisure & sport' },
        url: 'hobbi-otdyh-i-sport',
        subcategories: [
            { name: { ua: 'Велоспорт', en: 'Cycling' }, url: 'hobbi/bikes' },
            { name: { ua: 'Туризм', en: 'Tourism' }, url: 'hobbi/travel' },
            { name: { ua: 'Книги', en: 'Books' }, url: 'hobbi/books' },
        ],
    },
    {
        name: { ua: 'Віддам безкоштовно', en: 'Give for free' },
        url: 'otdam-darom',
        subcategories: [
            { name: { ua: 'Одяг', en: 'Clothing' }, url: 'otdam/clothes' },
            { name: { ua: 'Меблі', en: 'Furniture' }, url: 'otdam/furniture' },
            { name: { ua: 'Іграшки', en: 'Toys' }, url: 'otdam/toys' },
        ],
    },
    {
        name: { ua: 'Обмін', en: 'Exchange' },
        url: 'obmen-barter',
        subcategories: [
            { name: { ua: 'Електроніка', en: 'Electronics' }, url: 'obmen/electronics' },
            { name: { ua: 'Одяг', en: 'Clothes' }, url: 'obmen/clothes' },
            { name: { ua: 'Послуги', en: 'Services' }, url: 'obmen/services' },
        ],
    },
]
import { defineStore } from 'pinia'

export const useCategoriesStore = defineStore('categories', {
    state: () => ({
        categories: [] as any,
    }),
    actions: {
        async fetchCategories() {
            //TODO: add try catch and axios
            return new Promise((resolve) => {
                setTimeout(() => {
                    this.categories = json
                    resolve(true)
                }, 2000)
            })
        },
    },
})
