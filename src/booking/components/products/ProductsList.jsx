import { ProductCard } from "../product/ProductCard";
import './productsList.css';

export const ProductsList = () => {
    return (
        <section className="section">

            <h1 className="section__title">Recomendaciones</h1>
            <div
                className='box__cards'
            >
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>

        </section>

    )
}

