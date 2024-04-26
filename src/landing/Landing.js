import Banner from "./Banner";
import FeatureProduct from "./FeatureProduct";
import { products } from "./FeatureProduct";
import ScrollToTopOnMount from "../template/ScrollToTopOnMount";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Landing() {
    return (
        <>
            <ScrollToTopOnMount />
            <Banner />
            <div className="d-flex flex-column bg-white py-4">
                <p className="text-start px-5">
                    Om du är intresserad av din hälsa så är såklart både kost och motion
                    viktigt – i obesprutad, lågprocessad mat finns färre onödiga tillsatser
                    och fler näringsämnen som kroppen behöver för att må bra. Och med dina
                    medvetna val är du med och påverkar miljön i rätt riktning och gör
                    livet lättare för bina.
                </p>
                <div className="d-flex justify-content-center">
                    <Link to="/products" className="btn btn-primary" replace>
                        Browse products
                    </Link>
                </div>
            </div>
            <h2 className="big-black-text text-center text-bg-dark mt-4 mb-3">Våra ekologiska matvaror</h2>
            <div className="container pb-5 px-lg-5">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 px-md-5">
                    {products.map((product, index) => (
                        <FeatureProduct key={index} product={product} />
                    ))}
                </div>
            </div>
            <div className="d-flex flex-column bg-white py-4">
                <h5 className="text-center mb-3">Follow us on</h5>
                <div className="d-flex justify-content-center">
                    <a href="!#" className="me-3">
                        <FontAwesomeIcon icon={["fab", "facebook"]} size="2x" />
                    </a>
                    <a href="!#">
                        <FontAwesomeIcon icon={["fab", "instagram"]} size="2x" />
                    </a>
                    <a href="!#" className="ms-3">
                        <FontAwesomeIcon icon={["fab", "twitter"]} size="2x" />
                    </a>
                </div>
            </div>
        </>
    );
}

export default Landing;