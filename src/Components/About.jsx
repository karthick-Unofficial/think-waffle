import React from 'react';
import Box from '@mui/material/Box';

const About = () => {
    return (
        <>
            <div style={{}}>
                <Box component="video" src={"think-waffle/Assets/Videos/promo.mp4"} width="100%" autoPlay loop muted />
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", padding: 10, background: "#ffedcd" }}>
                <div style={{ width: "50%", fontFamily: "Ephesis" }}>
                    <h1 style={{ fontSize: 38 }}>About Us</h1>
                    <p style={{ fontSize: 20, padding: "0 20px", fontWeight: "bold", lineHeight: 1.6 }}>
                        Welcome to Think Waffle! We are committed to delivering an exceptional waffle experience. Our waffles are crafted with the finest ingredients and a touch of love. Join us on this delightful journey and savor the best waffles you've ever tasted!
                    </p>
                    <p style={{ fontSize: 20, padding: "0 20px", fontWeight: "bold", lineHeight: 1.6 }}>
                        At Think Waffle, we believe in sustainability and supporting local farmers. We source our ingredients responsibly and strive to minimize our environmental footprint. Thank you for choosing us and being a part of our story.
                    </p>
                </div >
                <div style={{ width: "50%" }}>
                    <img src={"think-waffle/Assets/Images/about_kicker_image.avif"} alt="About" style={{ width: "100%" }} />
                </div>
            </div >
        </>
    );
};

export default About;