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
                <h3>Contact</h3>
                <p>Email: binilmohamed07@gmail.com</p>
                <p>LinkedIn: linkedin.com/in/binil-mohamed-nizar-033089153</p>
                <p>GitHub: github.com/binilmohamed07</p>
            </div>
        </div>
    );
};

export default Profile;
