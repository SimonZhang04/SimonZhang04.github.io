import React from "react"

export default function Footer() {
    return (
        <div>
            <div class="return-container">
                <a href="#home" class="return-button">
                    <img class="arrow-icon" src={require("./images/arrow.png")} />
                </a>
            </div>
            <footer>
                <div class="social-icons">
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/SimonZhang04" >
                        <img class="social-icon" src={require("./images/github.png")} alt="github"/> 
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://devpost.com/simonzhang0422" >
                        <img class="social-icon" src={require("./images/devpost.png")} alt="devpost"/>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/simon-zhang-03616b209/">
                        <img class="social-icon" src={require("./images/linkedin.png")} alt="linkedin"/>
                    </a>
                </div>
            </footer>
        </div>
    )
}