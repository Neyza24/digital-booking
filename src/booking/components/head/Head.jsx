
import { Search } from '../search/Search';
import './head.css';

export const Head = () => {
    return (
        <section className="">
            <div className="box__head visibility" >
                <h1 className="section__title">Elije el hotel perfecto para tu siguiente destino</h1>
                <div className="container-shade">
                    <Search />

                </div>
            </div>

        </section>

    )
}

/*
Estoy armando el head del home, en este va el buscador con los filtros y el date picker de fechas
 */