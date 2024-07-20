import { color } from 'framer-motion';
import './about.css'


const About = () => {
    return (
        <div id='about'>
            <div className="aboutSection">
                <h3 style={{ textAlign: 'center', fontFamily: '"Edu Australia VIC WA NT Hand", cursive', color: 'var(--title)' }}>
                    <strong><em>"Study to make yourself loved" - Don Bosco</em></strong>
                </h3>

                <div className="aboutContent">

                    <div className="textContent">
                        <h1>About Me</h1>
                        <p>
                            Hello and welcome to my website! My name is George Youssef,
                            and I'm originally from Alexandria, Egypt.
                            I have a diverse background that spans across hardware engineering, computer teaching,
                            and now web development.
                        </p>
                    </div>
                    <img src="../../../public/images/g_2.jpg" alt="George Youssef" className="aboutImage" />
                </div>
            </div>

            <div className="aboutSection">
                <h1>Skills</h1>
                <p style={{ fontWeight: 'bold' }} >
                    Full stack developer (Backend and Frontend), Java Developer, Web DeveloperJava, Python, C#, IntelliJ,
                    Visual Studio Code, NoSQL, SQL, DBeaver, JSON, MongoDB, HTML5 & CSS3,
                    JavaScript and Web communication, Node.js, React, TypeScript, Framework in JavaScript,
                    Java Enterprise and Eclipse, Agile Project Methodology, IT and information security,
                    Cloud services, Test-driven development, Web services in Java, Umbraco and more ...
                </p>
            </div>

            <div className='divider' style={{ width: '99%', marginLeft: '8px' }} />

            <div className="aboutSection">
                <h3>Languages</h3>
                <p><b>Swedish, </b>excellent in reading, writing and good in talking.</p>
                <p><b>English, </b>excellent in reading, writing and talking.</p>
                <p><b>Italian, </b>excellent in reading, writing and talking.</p>
                <p><b>Egyptian-Arabic, </b>native language.</p>
            </div>

            <div className="aboutSection">
                <h3>Education and Early Career</h3>
                <p>
                    I earned my university degree from Alexandria University in Management and Computer Science Engineering back in 2000.
                    During my studies, I worked as a hardware engineer, gaining valuable hands-on experience in the field.
                    After completing my degree, I transitioned into teaching at a technical institute called "Don Bosco Technical Institute" in Lebanon.
                    In this role, I managed the computer laboratory, handled maintenance tasks, and set up networks.
                    I taught a variety of subjects including computer basics, MS Office applications, and graphic design.
                </p>
            </div>

            <div className="aboutSection">
                <h3>Journey to Sweden</h3>
                <p>
                    In 2014, I moved to Sweden, where I embarked on a new professional journey.
                    I took on different challenges and roles, always striving to expand my skills and knowledge.
                </p>
            </div>

            <div className="aboutSection">
                <h3>Focus on Web Development</h3>
                <p>
                    In 2022, I decided to refocus my career and returned to my passion for IT by studying programming and web development.
                    I studied in Stockholm Technical Institute (STI) as a Full-Stack Developer, where I immersed myself in modern web technologies and practices.
                </p>
            </div>

            <div className="aboutSection">
                <h3>My Mission</h3>
                <p>
                    My mission is to leverage my diverse background and newly acquired skills in web development to create meaningful and user-friendly digital experiences.
                    I am enthusiastic about crafting elegant solutions to complex problems and staying updated with the latest trends in technology.
                </p>
            </div>

            <div className="aboutSection">
                <h3>Get in Touch</h3>
                <p>
                    Thank you for visiting my website and taking the time to learn about my journey.
                    If you have any questions, collaboration opportunities, or just want to say hello, feel free to contact me!
                </p>
                <p>Let's build something awesome together!</p>
            </div>


        </div>
    );
};

export default About;

