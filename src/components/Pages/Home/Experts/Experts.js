import React from 'react';
import Expert from '../Expert/Expert';
import experts1 from '../../../../images/experts/expert-1.jpg'
import experts2 from '../../../../images/experts/expert-2.jpg'
import experts3 from '../../../../images/experts/expert-3.jpg'
import experts4 from '../../../../images/experts/expert-4.jpg'
import experts5 from '../../../../images/experts/expert-5.jpg'
import experts6 from '../../../../images/experts/expert-6.png'

const experts = [
    { id: 1, name: "John Smith", img: experts1 },
    { id: 2, name: "Criths Rock", img: experts2 },
    { id: 3, name: "John Sina", img: experts3 },
    { id: 4, name: "Under Smith", img: experts4 },
    { id: 5, name: "Full Smith", img: experts5 },
    { id: 6, name: "Halka Smith", img: experts6 },
];


const Experts = () => {
    return (
        <div id="experts" className="container">
            <h2 className="text-center text-primary mt-5">Our Experts</h2>
            <div className="row">
                {experts.map((expert) => (
                    <Expert key={expert.id} expert={expert} />
                ))}
            </div>
        </div>
    );
};

export default Experts;<h2>Our Experts</h2>