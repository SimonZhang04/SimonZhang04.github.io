import React from "react"

export default function Projects() {
    return (

        <section class="my-projects" id="projects">
            <div className='projects-heading'>
                <hr className="proj-line"></hr>
                <h2 className='projects-title'>Projects</h2>
                <hr className="proj-line"></hr>
            </div>
            
            <div class="portfolio">
                <a href="https://github.com/SimonZhang04/Shipping-Bin" class="portfolio__item">
                    <img src={require("./images/portfolio-1.png")} alt="Shipping Bin" class="portfolio__img" /> 
                </a>
                
                <a href="https://devpost.com/software/challengeship" class="portfolio__item">
                    <img src={require("./images/portfolio-2.png")} alt="Challengeship" class="portfolio__img" /> 
                </a>
                
                
                <a href="https://devpost.com/software/parkmonkey-p7cgs1" class="portfolio__item">
                    <img src={require("./images/portfolio-3.png")} alt="ParkMonkey" class="portfolio__img" />
                </a>
                
                <a href="https://devpost.com/software/flowboat-a-node-based-machine-learning-app" class="portfolio__item">
                    <img src={require("./images/portfolio-4.png")} alt="Flowboat" class="portfolio__img" />
                </a>
                
            </div>
        </section>

    )
}