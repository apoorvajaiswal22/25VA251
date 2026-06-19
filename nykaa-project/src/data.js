const products = [
{
id: 1,
title: "Matte Lipstick",
category: "Makeup",
price: 499,
rating: 4.5,
image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=500&q=80"
},
{
id: 2,
title: "Vitamin C Serum",
category: "Skincare",
price: 899,
rating: 4.8,
image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=500&q=80"
},
{
id: 3,
title: "Face Moisturizer",
category: "Skincare",
price: 699,
rating: 4.6,
image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=500&q=80"
},
{
id: 4,
title: "Luxury Perfume",
category: "Fragrance",
price: 1499,
rating: 4.7,
image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=500&q=80"
},
{
id: 5,
title: "Hair Shampoo",
category: "Haircare",
price: 599,
rating: 4.4,
image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=500&q=80"
},
{
id: 6,
title: "Hair Conditioner",
category: "Haircare",
price: 649,
rating: 4.3,
image: "https://images.unsplash.com/photo-1522338140262-f46f5913618a?auto=format&fit=crop&w=500&q=80"
},
{
id: 7,
title: "Liquid Foundation",
category: "Makeup",
price: 999,
rating: 4.7,
image: "https://images.unsplash.com/photo-1631214540553-ff044a3ff1d4?auto=format&fit=crop&w=500&q=80"
},
{
id: 8,
title: "Compact Powder",
category: "Makeup",
price: 799,
rating: 4.5,
image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=500&q=80"
},
{
id: 9,
title: "Face Wash",
category: "Skincare",
price: 399,
rating: 4.2,
image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=500&q=80"
},
{
id: 10,
title: "Sunscreen SPF 50",
category: "Skincare",
price: 749,
rating: 4.9,
image: "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=500&q=80"
},
{
id: 11,
title: "Body Mist",
category: "Fragrance",
price: 899,
rating: 4.5,
image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=500&q=80"
},
{
id: 12,
title: "Hair Oil",
category: "Haircare",
price: 499,
rating: 4.4,
image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=500&q=80"
},
{
id: 13,
title: "Lip Gloss",
category: "Makeup",
price: 399,
rating: 4.3,
image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=500&q=80"
},
{
id: 14,
title: "Night Cream",
category: "Skincare",
price: 1199,
rating: 4.8,
image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=500&q=80"
},
{
id: 15,
title: "Eau De Parfum",
category: "Fragrance",
price: 1999,
rating: 4.9,
image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=500&q=80"
},
{
id: 16,
title: "Hair Serum",
category: "Haircare",
price: 899,
rating: 4.6,
image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=500&q=80"
},
{
id: 17,
title: "BB Cream",
category: "Makeup",
price: 699,
rating: 4.4,
image: "https://images.unsplash.com/photo-1631214540553-ff044a3ff1d4?auto=format&fit=crop&w=500&q=80"
},
{
id: 18,
title: "Face Mask",
category: "Skincare",
price: 349,
rating: 4.2,
image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=500&q=80"
},
{
id: 19,
title: "Floral Perfume",
category: "Fragrance",
price: 1299,
rating: 4.7,
image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=500&q=80"
},
{
id: 20,
title: "Keratin Shampoo",
category: "Haircare",
price: 799,
rating: 4.5,
image: "https://images.unsplash.com/photo-1522338140262-f46f5913618a?auto=format&fit=crop&w=500&q=80"
},
{
id: 21,
title: "Kajal",
category: "Makeup",
price: 299,
rating: 4.6,
image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=500&q=80"
},
{
id: 22,
title: "Under Eye Cream",
category: "Skincare",
price: 499,
rating: 4.3,
image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=500&q=80"
},
{
id: 23,
title: "Hair Spray",
category: "Haircare",
price: 599,
rating: 4.4,
image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=500&q=80"
},
{
id: 24,
title: "Nail Polish",
category: "Makeup",
price: 249,
rating: 4.5,
image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=500&q=80"
},
{
id: 25,
title: "Body Lotion",
category: "Skincare",
price: 549,
rating: 4.7,
image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=500&q=80"
}
];

export default products;
