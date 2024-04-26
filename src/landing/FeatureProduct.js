import Image from "../honey.jpg";
import Image1 from "../eggs.jpg";
import Image2 from "../millk.jpg";
import Image3 from "../redwine.jpg";
import Image4 from "../fruits.jpg";
import Image5 from "../beefs.jpg";
import { Link } from "react-router-dom";

const products = [
    { id:1, slug: "natural-honey", name: "Natural Honey", price: "100 ", image: Image, description: "Pure, raw honey harvested from local bee farms. Our honey is unprocessed and free from additives, preserving its natural flavor and health benefits. Use it as a sweetener, spread, or natural remedy." },
    { id:2, slug: "organic-eggs", name: "Organic Eggs", price: "200 ", image: Image1, description: "Fresh organic eggs laid by free-range chickens. Rich in protein and essential nutrients, these eggs are perfect for your breakfast or baking needs." },
    { id:3, slug: "farm-fresh-milk", name: "Farm Fresh Milk", price: "300 ", image: Image2, description: "Pure and creamy milk from grass-fed cows. Our milk is pasteurized and homogenized to maintain its freshness and nutritional value. Enjoy it as a refreshing beverage or use it in your favorite recipes." },
    { id:4, slug: "fine-red-wine", name: "Fine Red Wine", price: "400 ", image: Image3, description: "An exquisite selection of fine wines from renowned vineyards around the world. From robust reds to crisp whites, our wines are carefully curated to complement any occasion or meal." },
    { id:5, slug: "eko-fruits-and-vegetables", name: "Eko Fruits and Vegetables", price: "500 ", image: Image4, description: "A variety of fresh fruits and vegetables sourced directly from local farms. Packed with vitamins, minerals, and antioxidants, these produce items are essential for a healthy diet." },
    { id:6, slug: "premium-meat-cuts", name: "Premium Meat Cuts", price: "600 ", image: Image5, description: "Premium-quality meat cuts sourced from trusted suppliers. Our meats are tender, flavorful, and responsibly sourced, ensuring a satisfying and delicious dining experience." },
];

function FeatureProduct({ product }) {
    const { name, price, description } = product;
    let offPrice = `${price}SEK`;

    if (product.percentOff && product.percentOff > 0) {
        offPrice = (
            <>
                <del>{price}Ks</del>
                {price - (product.percentOff * price) / 100}SEK
            </>
        );
    }

    return (
        <div className="col-12 col-lg-4 mb-4">
            <div className="card shadow-sm h-100">
                <div className="card-img-top-wrapper">
                    <img className="card-img-top cover" alt="" src={product.image} />
                </div>
                <div className="card-body">
                    <h5 className="card-title text-center">{name}</h5>
                    <p className="card-text text-center text-muted">{offPrice}</p>
                    <p className="card-text text-center description-text">{description}</p>
                    <div className="d-grid gap-10">
                        <Link to={`/products/${product.id}`} className="btn btn-outline-dark" replace>
                            Detail
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default FeatureProduct;
export { products };