import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div className="about-us-page">

            <main>
                <div  className="intro">
                    <p>SHOPKART STORY</p>
                    <p >    Driven by Detail, Focused on the Future</p>
                </div>

                <div className="content">
                    <h2>Transforming through Technology</h2>
                    <p>

                        SHOPKART is a leading global IT solutions & services company headquartered in Irvine, California, with development centers in Bangalore, Ahmedabad, Jodhpur & Indore, India. Sigma delivers innovative IT solutions in a variety of industries including FinTech, eCommerce, Technology, Telecom, Retail, and Healthcare, helping companies drive enhanced customer engagement, operational efficiency and return on IT investments. We excel at technology and strategy, a combination we employ to drive enhancement, engagement, efficiency, and ROI.

                        We are driven by the objective of positive outcomes. The 400+ think tank of technocrats,  amalgamates decades of experience and unconventional thinking to the table.  Since 2004, Sigma is passionately aligned with the cause of ensuring positive business outcomes for clients through digital innovation.

                        Certified and ascertained as an ISO 9001: 2015 & ISO/IEC 27001: 2013 company, Sigma delivers world-class IT solutions while assuring clients of their information security.
                    </p>

                </div>
                <div className="flex">
                    <div className="imagefl">
                        <img src="/images/Sigma.jpg" />
                    </div>
                    <div className="container">
                        <h1>The Shopkart Difference</h1>
                        <ul>
                            <p>Committed to the Customer</p>
                            <li>100% Customer Satisfaction is our top priority. Period.</li>
                        </ul>
                        <ul>
                            <p>Relentless Focus on Positive Outcomes</p>
                            <li>Clear understanding of client needs</li>
                            <li>Collaboration through every step of the process</li>
                            <li>Impactful solutions delivered on time</li>
                            <li>Maximized ROI for every dollar invested</li>
                        </ul>
                        <ul>
                            <p>Rigorous Innovation</p>
                            <li>Lean & Agile development process</li>
                            <li>Highly experienced, certified development professionals and SMEs</li>
                            <li>Expertise to in undertaking integration with existing IT infrastructure (all major platforms)</li>
                            <li>End-to-end solution support</li>
                        </ul>

                    </div>
                </div>
            </main>
        </div>
    );
};

export default AboutUs;
