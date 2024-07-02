import './productCard.css';
import turquia from '../../../assets/turquia.jpg';
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";

export const ProductCard = () => {
    return (
        <div className="box__card">
            <div className="w-full">
                <div className="box__card-image">

                    <div className='box-image'>
                        <img className="image-card" src={turquia} />
                    </div>
                    <div className='box-icon'>
                        <p></p>
                        <AiOutlineHeart style={{ fontSize: '20px', color: '#eeeeee'}}/>
                    </div>

                </div>
                <div className='box__card-content'>
                    <div className='box__flex'>
                        <h5>Santa Marta, Colombia</h5>
                        <div className='box__score'>

                            <AiFillStar style={{ color: '#282b30' }} />
                            <h5>4.9</h5>
                        </div>
                    </div>

                    <p>Playa Spratt Bight</p>
                    <p>24 - 29 de jul</p>
                    <p className='content__price'><span>$400 USD</span> noche</p>
                </div>

            </div>
        </div>
    )
}

/* falta solo unos toques finales para que quede bien esta card 😎 */