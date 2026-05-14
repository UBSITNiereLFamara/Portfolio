import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Portfolio.css';

const Portfolio: React.FC = () => {

  const projects = [
    {
      title: 'Resume',
      description: 'Creating a resume that highlights the background',
      image: '../Biodata.png',
      technologies: ['React', 'Node.js', 'TypeScript'],
      liveDemo: 'https://ubsitnierelfamara.github.io/unit1_lesson1_A_Niere/',
      code: 'https://github.com/UBSITNiereLFamara/unit1_lesson1_A_Niere.git'
    },
    {
      title: 'Event Dashboard',
      description: 'Real-time data, insights on events and engagement',
      image: '../Event_Registration.png',
      technologies: ['Node.js', 'React', 'TypeScript'],
      liveDemo: 'https://ubsitnierelfamara.github.io/MG_LAB4_Niere/',
      code: 'https://github.com/UBSITNiereLFamara/MG_LAB4_Niere.git'
    },
    {
      title: 'Feedback System',
      description: 'Analytics feedback with charts & real-time data',
      image: '../feedBack.png',
      technologies: ['React', 'Node.js', 'MongoDB'],
      liveDemo: 'https://ubsitnierelfamara.github.io/FG_LAB1/',
      code: 'https://github.com/UBSITNiereLFamara/FG_LAB1.git'
    },
    {
      title: 'Baguio City Issue Report',
      description: 'A civic reporting system for residents of Baguio City to report public issues.',
      image: '../IssueSystem.png',
      technologies: ['React', 'Node.js', 'MongoDB', 'emailjs'],
      liveDemo: 'https://ubsitnierelfamara.github.io/city-issue-platform/',
      code: 'https://github.com/UBSITNiereLFamara/city-issue-platform.git'
    }
  ];

  return (
    <div className="portfolio-wrapper">

      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark px-4 py-3 glass-nav">
        <a className="navbar-brand fw-bold text-warning" href="#home">
          FAMARA NIERE
        </a>

        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#nav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav ms-auto gap-3">
            <li><a className="nav-link" href="#home">Home</a></li>
            <li><a className="nav-link" href="#about">About</a></li>
            <li><a className="nav-link" href="#projects">Projects</a></li>
            <li><a className="nav-link" href="#reflection">Reflection</a></li>
          </ul>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="hero d-flex align-items-center text-white">
        <div className="container text-center">

          <h1 className="display-3 fw-bold">
            Hi, I'm <span className="text-warning">FAMARA NIERE</span>
          </h1>

          <p className="lead text-light opacity-75 mt-3">
            Still learning  how to make the website better.
          </p>

          <a href="#projects" className="btn btn-warning btn-lg mt-4 px-5">
            View My Work
          </a>

          <div className="mt-5 text-muted">
            React • Node.js • MongoDB
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section-dark text-center">
        <div className="container">
          <h2 className="section-title text-warning">About Me</h2>
          <p className="section-text">
            Passionate Full Stack Developer building scalable web applications using
            React, Node.js, MongoDB, and modern tools. I enjoy turning ideas into real
            working systems with clean UI and strong backend logic.
          </p>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section-dark-alt">
        <div className="container">

          <h2 className="section-title text-center text-warning mb-5">
            Featured Projects
          </h2>

          <div className="row g-4">
            {projects.map((p, i) => (
              <div key={i} className="col-lg-4 col-md-6">

                <div className="project-card glass-card h-100">

                  <img src={p.image} className="project-img" alt={p.title} />

                  <div className="p-3">
                    <h5 className="text-white fw-bold">{p.title}</h5>
                    <p className="text-light opacity-75">{p.description}</p>

                    <div className="mb-3">
                      {p.technologies.map((t, i) => (
                        <span key={i} className="badge bg-warning text-dark me-1">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="d-flex gap-2">
                      <a href={p.liveDemo} className="btn btn-outline-warning btn-sm">
                        Live
                      </a>
                      <a href={p.code} className="btn btn-warning btn-sm">
                        Code
                      </a>
                    </div>
                  </div>

                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REFLECTION */}
      <section id="reflection" className="reflection text-center">
        <div className="container">

          <h2 className="text-warning fw-bold mb-4">Reflection</h2>

          <p className="text-light opacity-75 lead">
            Throughout my journey as a student developer, I learned how to build full stack
            applications using React, Node.js, and MongoDB. It helped me improve my problem
            solving skills and understand real-world system design.
          </p>

          <p className="text-light opacity-75 lead mt-4">
            I am continuously improving and exploring new technologies. My goal is to become
            a confident developer capable of building scalable and user-friendly systems.
          </p>

          <p className="text-light opacity-75 lead mt-4">
            In this portfolio some of the activity are missing because the link are not working 
            and as I continue to learn more I understand the faction of it. And also the collaboration 
            with others help me grow in doing some activities. 
          </p>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer text-center text-light">
        <p>&copy; 2026 Famara Niere</p>
      </footer>

    </div>
  );
};

export default Portfolio;