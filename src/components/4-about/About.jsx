import './about.css'


const About = () => {
    return (
        <div id='about' className="title">
            <h1 className='subtitle'>About</h1>
            <p>
                Hello and welcome to my website! My name is George Youssef,
                and I'm originally from Alexandria, Egypt.
                I have a diverse background that spans across hardware engineering, computer teaching,
                and now web development.
            </p>

            <div className="section">
                <h3>Education and Early Career</h3>
                <p>
                    I earned my university degree from Alexandria University in Management and Computer Science Engineering back in 2000.
                    During my studies, I worked as a hardware engineer, gaining valuable hands-on experience in the field.
                    After completing my degree, I transitioned into teaching at a technical institute called "Don Bosco Technical Institute" in Lebanon.
                    In this role, I managed the computer laboratory, handled maintenance tasks, and set up networks.
                    I taught a variety of subjects including computer basics, MS Office applications, and graphic design.
                </p>
            </div>

            <div className="section">
                <h3>Journey to Sweden</h3>
                <p>
                    In 2014, I moved to Sweden, where I embarked on a new professional journey.
                    I took on different challenges and roles, always striving to expand my skills and knowledge.
                </p>
            </div>

            <div className="section">
                <h3>Focus on Web Development</h3>
                <p>
                    In 2022, I decided to refocus my career and returned to my passion for IT by studying programming and web development.
                    I studied in Stockholm Technical Institute (STI) as a Full-Stack Developer, where I immersed myself in modern web technologies and practices.
                </p>
            </div>

            <div className="mission">
                <h3>My Mission</h3>
                <p>
                    My mission is to leverage my diverse background and newly acquired skills in web development to create meaningful and user-friendly digital experiences.
                    I am enthusiastic about crafting elegant solutions to complex problems and staying updated with the latest trends in technology.
                </p>
            </div>

            <div className="contact">
                <h3>Get in Touch</h3>
                <p>
                    Thank you for visiting my website and taking the time to learn about my journey. If you have any questions, collaboration opportunities, or just want to say hello, feel free to contact me!
                </p>
                <p>Let's build something awesome together!</p>
            </div>
        </div>
    );
};

export default About;

