import "./productList.css"
import Product from "../product/Product"
import { products } from "../../data"

const ProductList = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">Create & inspire. It's Bistay</h1>
                <p className="pl-desc">
                    Preet is not so creative but struggling web developer. Tries to create new and useful websites just for practise as he is learning it daily.
                </p>
            </div>
            <div className="pl-list">
                {products.map((item) => (
                    <Product key={item.id} img={item.img} link={item.link} />
                ))}

            </div>
        </div>
    );
};

export default ProductList;