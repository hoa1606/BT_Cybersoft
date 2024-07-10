import { useState } from 'react';
import style from './paner.module.css';
import { data } from '../data';

export function Paner() {
    const [selectedProduct, setSelectedProduct] = useState(data[0]); 

    const handleProductChange = (product) => {
        setSelectedProduct(product);
    };

    return (
        <div className={style.paner}>
            <div className={style.overlay}>
                <div className={style.card}>
                    <img src={selectedProduct.url} alt={selectedProduct.name} />
                </div>
                <div className={style.changBT}>
                    {data.map((product) => (
                        <button key={product.id} onClick={() => handleProductChange(product)}>
                            <img src={product.url} alt={product.name} />
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
