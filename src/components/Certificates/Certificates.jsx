import React, { useEffect, useState } from 'react';
import { certificates } from '../../utils/Data';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import './certificates.css';

const Certificates = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            moveToRight();
        }, 3000);

        return () => clearInterval(interval);
    }, [index]);

    const moveToLeft = () => {
        setIndex((prevIndex) => (prevIndex === 0 ? certificates.length - 1 : prevIndex - 1));
    };

    const moveToRight = () => {
        setIndex((prevIndex) => (prevIndex === certificates.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <section id='certificate' className='certificate container'>
            <h2 className='certificate__title'>Mis certificaciones</h2>
            <div className="certificate__content">
                <div className="container__carousel">
                    <div className="carousel" style={{ transform: `translateX(-${index * 100}%)` }}>
                        {certificates.map(({ img }, idx) => (
                            <article key={idx} className="slider-section">
                                <img src={img} alt={`certificate ${idx + 1}`} />
                            </article>
                        ))}
                    </div>
                    <button className="btn-left" onClick={moveToLeft}><IoIosArrowBack/></button>
                    <button className="btn-right" onClick={moveToRight}><IoIosArrowForward/></button>
                </div>
            </div>
        </section>
    );
};

export default Certificates;