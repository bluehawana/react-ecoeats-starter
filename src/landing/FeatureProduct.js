import Image from "../honey.jpg";
import Image1 from "../eggs.jpg";
import Image2 from "../millk.jpg";
import Image3 from "../redwine.jpg";
import Image4 from "../fruits.jpg";
import Image5 from "../beefs.jpg";
import { Link } from "react-router-dom";

const products = [
    { id:1, slug: "natural-honey", name: "Eko Honung", price: "100 ", image: Image, description: "På våra gårdar i det vackra svenska landskapet producerar vi med stolthet en av naturens mest älskade delikatesser - svensk honung. Genom vår passion för biodling och respekt för naturens processer strävar vi efter att erbjuda honung av högsta kvalitet, direkt från bikupan till ditt kök. Våra bin utforskar de blomstrande ängarna och skogarna runt gården, samlar nektar från svenska växter och blommor, från rapsfälten till lavendelbuskar och ängsblommor. Med noggrannhet och omsorg skördar vi vårt biologiska guld, bevarar dess naturliga smak och näringsämnen, utan tillsatser. Varje sked är fylld med svensk sommars härliga smak och kärlek från våra bikupor." },
    { id:2, slug: "organic-eggs", name: "Eko Ägg", price: "200 ", image: Image1, description: "På våra gårdar lever glada hönor i harmoni, vars välbefinnande är högsta prioritet. Vi tar hand om dem med omsorg och uppmärksamhet, vilket resulterar i ägg av högsta kvalitet fyllda med smak och näringsämnen. Med fritt rörliga hönor, tillgång till näringsrik mat och friskt vatten, strävar vi efter att fortsätta vår tradition av omsorg och kvalitet på våra gårdar, välkomnar alla att smaka på skillnaden." },
    { id:3, slug: "farm-fresh-milk", name: "Eko Mjölk", price: "300 ", image: Image2, description: "På våra gårdar lever våra kor i harmoni med naturen, fritt att utforska gröna ängar och dricka friskt vatten. Deras välmående främjas både fysiskt och mentalt genom friheten att ströva och beta. Vi tror att vår omtanke och respekt för kor skapar en miljö där de trivs och producerar mjölk av högsta kvalitet. Varje droppe bär med sig den kärlek och omsorg vi investerar i våra djur, och vi är stolta över att erbjuda kunder mjölk med en smak som endast kommer från glada kor." },
    { id:4, slug: "fine-red-wine", name: "Rött Vin", price: "400 ", image: Image3, description: "På våra soliga vingårdar i det svenska landskapet skapas vita viner av exceptionell kvalitet och karaktär. Genom unika mikroklimat och expertis i lokala druvsorter framställs förbluffande viner med svensk prägel. Från skörd till buteljering övervakas varje steg med noggrannhet för att bevara druvornas naturliga smaker och aromer. Vårt svenska vita vin hyllar landskapet, klimatet och vår passion för vinodling, och varje glas är en smakresa genom det svenska landskapet." },
    { id:5, slug: "eko-fruits-and-vegetables", name: "Eko Frukt & Grönsaker", price: "500 ", image: Image4, description: "På våra gårdar odlar vi mångfaldiga grönsaker och frukter med omsorg och ekologiska principer. Varje gröda handplockas vid optimal mognad för att säkerställa smakrik och näringsrik kvalitet. Från solbelysta grönsaksland till fruktträdens dignande grenar erbjuder vi en färgsprakande mångfald av saftiga och aromatiska produkter. Varje tugga bär på kärleken och omsorgen som våra grödor har fått, och vi är stolta över att dela denna kvalitet med våra kunder." },
    { id:6, slug: "premium-meat-cuts", name: "Premium Eko Kött", price: "600 ", image: Image5, description: "På våra gårdar prioriterar vi våra djurs välbefinnande, vilket ger kött av exceptionell kvalitet. Genom att låta dem leva fritt och tillhandahålla näringsrik föda och rent vatten skapar vi en miljö där djuren trivs naturligt. Vårt noggrant utvalda djurbestånd uppfostras med omsorg och respekt för deras naturliga behov, vilket resulterar i kött av överlägsen kvalitet. Varje tugga av vårt kött återspeglar den omsorg och uppmärksamhet som lagts ned på deras uppfödning, och vi är stolta över att erbjuda våra kunder produkter från välmående djur."},
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