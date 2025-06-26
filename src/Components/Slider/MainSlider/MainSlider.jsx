import React, { useState, useEffect, useRef } from "react";
import "./main_slider_style.css";

export default function MainSlider() {
    const [items, setItems] = useState([
        { img: "assets/collage-3.png", title: "IDLI", author: "PREMIXES" },
        { img: "assets/collage-3.png", title: "DOSA", author: "PREMIXES" },
        // { img: "assets/main_slider_images/img3.jpg", title: "OATS", author: "PREMIXES" },
        // { img: "assets/main_slider_images/img4.png", title: "DHOKLA", author: "PREMIXES" },
    ]);

    const carouselRef = useRef(null);
    const timeoutRef = useRef(null);
    const autoSlideRef = useRef(null);
    const timeRunning = 3000;
    const timeAutoNext = 7000;

    const [isSliding, setIsSliding] = useState(false);

    const showSlider = (type) => {
         if (isSliding) return; // prevent click spam
        setIsSliding(true); // lock interaction
        if (!type) type = "next";

        setItems((prev) => {
            let updated = [...prev];
            if (type === "next") {
                updated.push(updated.shift());
            } else if (type === "prev") {
            updated.unshift(updated.pop());
            }
            return updated;
        });

        if (carouselRef.current && (type === "next" || type === "prev")) {
            carouselRef.current.classList.add(type);
            clearTimeout(timeoutRef.current);
            timeoutRef.current = setTimeout(() => {
                carouselRef.current.classList.remove("next");
                carouselRef.current.classList.remove("prev");
                setIsSliding(false); // ✅ re-enable interaction
            }, timeRunning);
        }

        // clearTimeout(autoSlideRef.current);
        // autoSlideRef.current = setTimeout(() => {
        //     showSlider("next");
        // }, timeAutoNext);
    };

    useEffect(() => {
        autoSlideRef.current = setTimeout(() => {
            showSlider("next");
        }, timeAutoNext);

        return () => {
            clearTimeout(autoSlideRef.current);
            clearTimeout(timeoutRef.current);
        };
    }, []);

    return (
        <div className="main_carousel" ref={carouselRef}>
            {/* List Items */}
            <div className="list">
                {items.map((item, index) => (
                    <div className="item" key={item.title +index}>
                        <img src={item.img} alt="slider" />
                        <div className="content">
                            <div className="author">{item.author}</div>
                            <div className="title">DESIGN SLIDER</div>
                            <div className="topic">{item.title}</div>
                            <div className="des">{item.desc}</div>
                            <div className="buttons">
                                <button> ORDER NOW </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>



            {/* Navigation */}
            <div className="arrows">
                <button onClick={() => showSlider("prev")}>&lt;</button>
                <button onClick={() => showSlider("next")}>&gt;</button>
            </div>

            {/* Timer Indicator */}
            <div className="time" />
        </div>
    );
}

    // const [thumbnails, setThumbnails] = useState([...items]);


// setThumbnails((prev) => {
//     let updated = [...prev];
//     if (type === "next") {
//         updated.push(updated.shift());
//     } else {
//         updated.unshift(updated.pop());
//     }
//     return updated;
// });


{/* Thumbnail List */ }
{/* <div className="thumbnail">
                {thumbnails.map((thumb, index) => (
                    <div className="item" key={index}>
                        <img src={thumb.img} alt="thumbnail" />
                        <div className="content">
                            <div className="description"> Title </div>
                        </div>
                    </div>
                ))}
            </div> */}


