import { ProductList} from './ProductStyle'

const Product = [
    {
        title: 'Sea Green Half Sleeves Cotton Shirt For Men',
        price: '899',
        dprice: '1099',
        image: 'https://static-01.daraz.com.np/p/1d91c6e2934531e144c45b29deafc267.jpg',
        URL: 'a',
    },
    {
        title: 'Leced Up Kurta Shirt For Men(Dori Kurta)',
        price: '509',
        dprice: '799',
        image: 'https://static-01.daraz.com.np/p/9a4283f261b083c3be9b44b6d66560c0.jpg',
        URL: 'a',
    },
    {
        title: 'White With Blue Flower Printed Half Shirt For Men',
        price: '5109',
        dprice: '5799',
        image: 'https://static-01.daraz.com.np/p/e7eaa8eb34dba325206576b7de2e6450.jpg',
        URL: 'a',
    },
    {
        title: 'Nyptra Blue Half Sleeves Cotton Shirt For Men',
        price: '2459',
        dprice: '2499',
        image: 'https://static-01.daraz.com.np/p/441d520f90bc46ad74dd4047cdfed2f9.jpg',
        URL: 'a',
    },
    {
        title: 'Half Sleeve Kurta Design Shirt For Men',
        price: '499',
        dprice: '999',
        image: 'https://static-01.daraz.com.np/p/fdd884b06a145d49ffd0808fe1249f93.jpg',
        URL: 'a',
    },
    {
        title: 'Leced Up Kurta Shirt For Men(Dori Kurta)',
        price: '509',
        dprice: '799',
        image: 'https://static-01.daraz.com.np/p/9a4283f261b083c3be9b44b6d66560c0.jpg',
        URL: 'a',
    },
]

export default function Products() {

    return (
        <ProductList>
            <div className="container products ">
                <div className="d-flex">
                {Product.map(({title,price,dprice,image,URL}) =>
                <div className="product-card  col-sm-6 col-md-4 col-lg-2 col-12 p-2">
                    <a href={URL}>
                        <img src={image} className="product-image w-100 p-1" alt="product"></img> 
                        <h7 className="product-title">{title}</h7>
                        <p className="product-price">Rs.{price}<br></br><p className="strike">Rs.{dprice}</p></p>
                        {/* <span id="result">%</span> */}
                    </a>
                </div>
                )}
                </div>
            </div>
        </ProductList>
    )
}
