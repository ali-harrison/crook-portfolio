import React from 'react';
import '../styles/global.css';

const About: React.FC = () => {
  return (
    <section id="about" className="Section">
      <h2>About Me</h2>
      <p>
        Tēnā koutou katoa. My name is Ali Werahiko Te Wairama Harrison. I hail from the vibrant community of Bluff in Southland, and I spent my formative years in Rotorua, Bay of Plenty, where I completed my Levels 1 and 2 education at Rotorua Boys' High School. Currently, I reside in the dynamic city of Christchurch, New Zealand.
      </p>
      <p>
        As a graduate web developer with a flair for graphic design, I have cultivated a diverse skill set through my education at Dev Academy Aotearoa. My expertise encompasses:
      </p>
      <ul>
        <li>Proficient use of HTML, CSS, and JavaScript</li>
        <li>Designing responsive and user-friendly web interfaces</li>
        <li>Developing interactive applications using React</li>
        <li>Building robust back-end systems with Node.js</li>
        <li>Employing version control via Git for collaborative projects</li>
        <li>Adopting Agile methodologies for efficient teamwork</li>
      </ul>
      <p>
        Among my personal endeavors is the creation of a lifestyle and clothing brand named "Soba," an acronym for "Sick of Being Average." This venture embodies my journey and aspirations, representing a blend of creativity and determination. My passion for sports, including rugby league, rugby union, softball, and touch rugby, reflects my commitment to teamwork and excellence.
      </p>
      <p>
        My aspirations extend to traversing the globe while engaging in work that addresses real-world challenges. I am particularly inspired to bridge the worlds of Te Ao Māori and modern web development, fostering an inclusive digital landscape.
      </p>
      <p>
        As I continue to explore and define my personal values and philosophy, I strive to integrate these principles into both my professional and personal life.
      </p>
    </section>
  );
}

export default About;