import React from 'react';
import './Profile.css';
import profilePic from './profile.jpg'; // Make sure to have this image in your src folder

const Profile = () => {
    return (
        <div className="profile-container">
            <div className="profile-header">
                <img src={profilePic} alt="Profile" className="profile-photo" />
                <h1>Binil Mohamed Nizar</h1>
                <h2>Senior Software Engineer</h2>
                <p>
                    8 years of experience building scalable web apps, leading engineering teams,
                    and shipping high-quality software solutions.
                </p>
            </div>

            <div className="profile-section">
                <h3>Skills</h3>
                <ul className="skills-list">
                    <li>JavaScript / TypeScript</li>
                    <li>React / Next.js</li>
                    <li>Node.js / Express</li>
                    <li>Python / Django</li>
                    <li>AWS / Docker / CI-CD</li>
                </ul>
            </div>

            <div className="profile-section">
                <h3>Experience Highlights</h3>
                <ul>
                    <li>🚀 Led a team of 6 engineers at TechNova to deliver SaaS tools used by 20k+ users</li>
                    <li>🔧 Migrated legacy monolith to microservices, improving load times by 40%</li>
                    <li>📦 Architected CI/CD pipelines with GitHub Actions and Docker</li>
                </ul>
            </div>

            <div className="profile-section">
                <h3>Professional Experience</h3>

                <div className="job-entry">
                    <h4>Senior Software Engineer — <span className="company">TechNova Inc.</span></h4>
                    <p className="duration">2021 – Present</p>
                    <ul>
                        <li>Led a team of 6 engineers to deliver enterprise SaaS tools used by over 20,000 users</li>
                        <li>Architected CI/CD pipelines with GitHub Actions and Docker, reducing deployment time by 50%</li>
                        <li>Mentored junior developers and instituted code review practices that improved code quality by 30%</li>
                    </ul>
                </div>

                <div className="job-entry">
                    <h4>Full-Stack Developer — <span className="company">CloudShift Labs</span></h4>
                    <p className="duration">2018 – 2021</p>
                    <ul>
                        <li>Migrated legacy monolith to microservices on AWS, improving app scalability and reducing costs by 25%</li>
                        <li>Built RESTful APIs and integrated GraphQL services for customer-facing applications</li>
                        <li>Collaborated with product teams to create dashboards using React, Redux, and D3.js</li>
                    </ul>
                </div>

                <div className="job-entry">
                    <h4>Software Engineer — <span className="company">DataWorks Solutions</span></h4>
                    <p className="duration">2015 – 2018</p>
                    <ul>
                        <li>Developed internal tools using Python and Django to automate reporting and data entry workflows</li>
                        <li>Improved front-end performance by 40% by optimizing React components and lazy loading modules</li>
                        <li>Integrated third-party APIs for CRM, analytics, and payment systems</li>
                    </ul>
                </div>

                <div className="job-entry">
                    <h4>Junior Developer — <span className="company">BrightSoft Studios</span></h4>
                    <p className="duration">2013 – 2015</p>
                    <ul>
                        <li>Assisted in development of responsive web applications using JavaScript and jQuery</li>
                        <li>Wrote unit and integration tests to support a growing codebase</li>
                        <li>Maintained and updated internal documentation for new devs</li>
                    </ul>
                </div>
            </div>


            <div className="profile-section">
                <h3>Contact</h3>
                <p>Email: binilmohamed07@gmail.com</p>
                <p>LinkedIn: linkedin.com/in/binil-mohamed-nizar-033089153</p>
                <p>GitHub: github.com/binilmohamed07</p>
            </div>
        </div>
    );
};

export default Profile;
