// js/products.js

// אובייקט זה מחזיק את הכותרות המותאמות אישית לכל קטגוריה
const categoryTitles = {
    'default': 'המוצרים שלנו', // כותרת ברירת מחדל
    'mtk': 'קושחאות למעבדי MTK',
    'qualcomm': 'קושחאות למעבדי Snapdragon',
    'mobile': 'כל הקושחאות למכשירי סלולר',
    'media-player': 'מערכות הפעלה לנגני מדיה'
    // הוסף כאן שמות קבצים וכותרות חדשות בעתיד
};


const products = [
    {
        id: 1,
        name: 'קושחות ל m303pro',
        description: 'קושחות סטוק ורוט למכשיר m303 pro',
        price: 15,
        image: 'https://placehold.co/600x400/007bff/white?text=M303+PRO',
        pageUrl: 'rom-m303-pro-otg.html', // בעתיד תחליף את זה לדף המוצר הספציפי שלו
        categories: ['mtk', 'media-player'] // רשימת קטגוריות שהמוצר שייך אליהן
    },
  
    // הוסף כאן עוד מוצרים בעתיד...
];