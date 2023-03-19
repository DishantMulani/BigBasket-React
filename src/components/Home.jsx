import React from 'react'
import NavbarC from './NavbarC';
const Home = () => {
    return (
        <>
            <NavbarC />
            <div className="image" style={{ height: "90vh", width: "100%", position: "absolute" }}>
                <img src="https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?cs=srgb&dl=pexels-jane-doan-1132047.jpg&fm=jpg" style={{ height: "inherit", width: "inherit", backgroundPosition: "center", }} />
                <div className="text-center" style={{ position: "absolute", top: "40%", textAlign: "center", padding: "0px 200px" }}>
                    <div>
                        <div className="logo_name d-flex justify-content-center text-white">
                            <h1 className="logo"><i className="bi bi-cart3"></i></h1>
                            <h1 className="name ms-3">Big Basket</h1>
                        </div>
                    </div>
                    <div className="subtext text-white">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quod iure laboriosam modi recusandae ea eum sequi ad dolores excepturi nemo, voluptatum nisi, molestiae, deleniti velit. Earum at tenetur non?
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home