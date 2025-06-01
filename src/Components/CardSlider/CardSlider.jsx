import React, { useContext } from 'react';
import './card_slider.css';
import { useState, useCallback } from 'react';
import { useProductContext  } from '/src/Context/productContext';

export default function CardSlider() {

    const {myName} = useProductContext();
    console.log(myName)

    return (
        <>
            
        </>
    );

}
