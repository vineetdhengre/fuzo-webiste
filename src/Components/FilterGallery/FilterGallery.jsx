import React from 'react'
import { useState } from 'react';
import './style.css'
import { motion } from "framer-motion";


const imageData = [
    { id: 1, category: "IDLI MIX", images: ["assets/idli_mix_one.png", "assets/idli_mix_two.png"] },
    { id: 2, category: "MOONG DAL MIX", images: ["assets/moong_dal_one.png" , "assets/moong_dal_two.png"] },
    { id: 3, category: "MULTI GRAIN DHOKLA CALCIUM MIX", images: ["assets/multigrain_dhokla_calcium_one.png" , "assets/multigrain_dhokla_calcium_two.png"] },
    { id: 4, category: "MULTI MILLET DOSA MIX", images: ["assets/multi_millet_dosa_one.png" , "assets/multi_millet_dosa_two.png"] },
    { id: 5, category: "OATS IDLI MIX", images: ["assets/oats_idli_mix_one.png" , "assets/oats_idli_mix_two.png"] },
    { id: 6, category: "MULTI GRAIN DHOKLA PROTEIN MIX", images: ["assets/multigrain_dhokla_protien_one.png" , "assets/multigrain_dhokla_protien_two.png"] }
];

function FilterGallery() {
    const [selectedCategory, setSelectedCategory] = useState("IDLI MIX");
    return (
        <>
            <div className='container-fluid'>
                <div className="body-customHeading">
                    <h2 style={{ fontSize: "4rem" }} >
                        OUR
                        <span className="highlight-text pl-3" style={{ fontSize: "4rem" }} >PRODUCTS</span>
                    </h2>
                </div>git pu


                <div className='row justify-content-center pt-4 pb-4'>
                    <div className="categories">
                        {["IDLI MIX", "MOONG DAL MIX", "MULTI GRAIN DHOKLA CALCIUM MIX", "MULTI MILLET DOSA MIX", "OATS IDLI MIX", "MULTI GRAIN DHOKLA PROTEIN MIX"].map((category) => (
                            <span
                                key={category}
                                className={selectedCategory === category ? "active" : ""}
                                onClick={() => setSelectedCategory(category)}
                            >
                                {category}
                            </span>
                        ))}
                    </div>

                    <div className="gallery">
                        {imageData
                            .filter((item) => item.category === selectedCategory)
                            .flatMap((item) => item.images)
                            .map((imageSrc, index) => (
                                <img key={index} src={imageSrc} alt={selectedCategory} />
                            ))}
                    </div>
                </div>

            </div>

        </>
    )
}

export default FilterGallery;