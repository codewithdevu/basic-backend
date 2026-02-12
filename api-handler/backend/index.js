import express from 'express'

const app = express();

app.get('/api/products' , (req , res) => {
    const products = [
        {
            id: 1,
            name: "table wooden",
            price: 200,
            image: 'https://images.pexels.com/photos/35625049/pexels-photo-35625049.jpeg'
        }, 
        {
            id: 2,
            name: 'table plastic',
            price: 150,
            image: 'https://images.pexels.com/photos/10982341/pexels-photo-10982341.png'
        },
        {
            id: 3,
            name: 'table glass',
            price: 250,
            image: 'https://images.pexels.com/photos/5563904/pexels-photo-5563904.jpeg'
        },
        {
            id: 4,
            name: 'table metal',
            price: 300,
            image: 'https://images.pexels.com/photos/932095/pexels-photo-932095.jpeg'
        },
        {
            id: 5,
            name: 'table polyester',
            pirce: 150,
            image: 'https://images.pexels.com/photos/6276068/pexels-photo-6276068.jpeg'
        }
    ]

    if (req.query.search) {
        const filterproduct = products.filter(product => product.name.toLowerCase().includes(req.query.search.toLowerCase()))
        res.send(filterproduct);
        return;
    }

    setTimeout(() => {
        res.send(products);
    } , 3000);

});

const port = process.env.PORT || 5000 ;

app.listen(port , () => {
    console.log(`server is running on port http://localhost:${port}`);
    
});