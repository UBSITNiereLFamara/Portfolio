import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Portfolio.css'; 

const Portfolio: React.FC = () => {
  const [messageStatus, setMessageStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const projects = [
    {
      title: 'Resume',
      description: 'Creating a resume that highlights the background',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop',
      technologies: ['React', 'Node.js', 'TypeScript'],
      liveDemo: 'https://ubsitnierelfamara.github.io/unit1_lesson1_A_Niere/',
      code: 'https://github.com/UBSITNiereLFamara/unit1_lesson1_A_Niere.git'
    },
    {
      title: 'Event dashboard',
      description: 'Real-time data, insights on events and attendee engagement',
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=250&fit=crop',
      technologies: ['Node.js', 'React', 'TypeScript'],
      liveDemo: 'https://ubsitnierelfamara.github.io/MG_LAB4_Niere/',
      code: 'https://github.com/UBSITNiereLFamara/MG_LAB4_Niere.git'
    },
    {
      title: 'Feedback',
      description: 'Analytics feedback with charts & real-time data',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB'],
      liveDemo: 'https://ubsitnierelfamara.github.io/FG_LAB1/',
      code: 'https://github.com/UBSITNiereLFamara/FG_LAB1.git'
    }
  ];

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessageStatus('');

    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message')
    };

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setMessageStatus(result.message || 'Message sent successfully! 🎉');
        (e.currentTarget as HTMLFormElement).reset();
      } else {
        setMessageStatus(result.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessageStatus('Network error. Please check your connection and try again.');
    } finally {
      setIsLoading(false);
    }

    // Auto clear message after 5 seconds
    if (messageStatus.includes('successfully')) {
      setTimeout(() => setMessageStatus(''), 5000);
    }
  };

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow-lg">
        <div className="container">
          <a className="navbar-brand fw-bold fs-3" href="#home">FAMARA NIERE</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link px-3" href="#home">Home</a></li>
              <li className="nav-item"><a className="nav-link px-3" href="#about">About</a></li>
              <li className="nav-item"><a className="nav-link px-3" href="#projects">Projects</a></li>
              <li className="nav-item"><a className="nav-link px-3" href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>

      <section id="home" className="hero-section min-vh-100 d-flex align-items-center justify-content-center text-white text-center position-relative overflow-hidden pt-5 pt-lg-0">
        <div className="container-fluid px-4">
          <div className="row align-items-center g-5">
            {/* Left Content */}
            <div className="col-lg-5 col-md-6 order-2 order-lg-1">
              <div className="hero-content">
                <h1 className="display-3 fw-bold mb-4 hero-title">
                  Hi, I'm <span className="text-primary">FAMARA NIERE</span>
                </h1>
                <p className="lead fs-4 mb-5 hero-subtitle">
                  Full Stack Developer creating amazing digital experiences
                </p>
                <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-sm-start">
                  <a href="#projects" className="btn btn-primary btn-lg px-5 py-3 hero-btn shadow-lg">
                    <i className="fas fa-eye me-2"></i>View My Work
                  </a>
                  <a href="#contact" className="btn btn-outline-light btn-lg px-5 py-3 hero-btn shadow-lg">
                    <i className="fas fa-envelope me-2"></i>Contact Me
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-12 order-1 order-lg-2 text-center mb-4 mb-lg-0">
              <div className="profile-image-container">
                <div className="profile-image-wrapper">
                  <img
                    src="/assets/Mara.png"
                    alt="Famara Niere"
                    className="img-fluid rounded-circle shadow-lg profile-image"
                  />
                </div>
                <div className="image-glow"></div>
              </div>
            </div>

            <div className="col-lg-5 col-md-6 order-3 order-lg-3">
              <div className="hero-content">
                <h5 className="fw-light mb-4 text-white-50">Tech Stack</h5>
                <div className="skills-preview">
                  <div className="skill-item mb-3">
                    <i className="fab fa-react text-primary me-3 fs-4"></i>
                    <span>React</span>
                  </div>
                  <div className="skill-item mb-3">
                    <i className="fab fa-node-js text-success me-3 fs-4"></i>
                    <span>Node.js</span>
                  </div>
                  <div className="skill-item">
                    <i className="fas fa-database text-info me-3 fs-4"></i>
                    <span>MongoDB</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center mb-5">
              <h2 className="display-5 fw-bold mb-4">About Me</h2>
              <p className="lead text-muted fs-5">
                Passionate Full Stack Developer creating scalable web applications.
              </p>
            </div>
          </div>
          <div className="row g-4">
            {[
              { icon: 'fas fa-laptop-code', title: 'Frontend', desc: 'React, TypeScript' },
              { icon: 'fas fa-server', title: 'Backend', desc: 'Node.js, Express' },
              { icon: 'fas fa-database', title: 'Database', desc: 'MongoDB' },
              { icon: 'fas fa-cloud', title: 'DevOps', desc: 'Docker, Vercel' }
            ].map((skill, idx) => (
              <div key={idx} className="col-lg-3 col-md-6">
                <div className="card h-100 border-0 shadow-sm hover-card text-center p-4">
                  <i className={`${skill.icon} display-4 text-primary mb-3`}></i>
                  <h5 className="fw-bold">{skill.title}</h5>
                  <p className="text-muted">{skill.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-5 bg-white">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-4">Featured Projects</h2>
            <p className="lead text-muted">My latest Project</p>
          </div>
          <div className="row g-4">
            {projects.map((project, idx) => (
              <div key={idx} className="col-lg-4 col-md-6">
                <div className="card h-100 border-0 shadow-lg hover-card project-card">
                  <img src={project.image} className="card-img-top" alt={project.title} style={{ height: '220px', objectFit: 'cover' }} />
                  <div className="card-body">
                    <h5 className="card-title fw-bold">{project.title}</h5>
                    <p className="card-text text-muted">{project.description}</p>
                    <div className="mb-3">
                      {project.technologies.map((tech, tIdx) => (
                        <span key={tIdx} className="badge bg-primary me-1 mb-1">{tech}</span>
                      ))}
                    </div>
                    <div className="d-flex gap-2">
                      <a href={project.liveDemo} className="btn btn-outline-primary flex-fill" target="_blank" rel="noopener noreferrer">
                        <i className="fas fa-external-link-alt me-1"></i>Live
                      </a>
                      <a href={project.code} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github me-1"></i>Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-5 bg-dark text-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="display-5 fw-bold mb-4">Get In Touch</h2>
              <p className="lead mb-5">Ready to start your next project?</p>
              
              {messageStatus && (
                <div className={`alert ${messageStatus.includes('successfully') || messageStatus.includes('sent') ? 'alert-success' : 'alert-danger'} alert-dismissible fade show mb-4`}>
                  {messageStatus}
                  <button type="button" className="btn-close btn-close-white" onClick={() => setMessageStatus('')}></button>
                </div>
              )}

              <form onSubmit={handleContactSubmit} className="row g-3">
                <div className="col-md-6">
                  <input 
                    type="text" 
                    className="form-control form-control-lg" 
                    name="name" 
                    placeholder="Your Name *" 
                    required 
                    disabled={isLoading}
                  />
                </div>
                <div className="col-md-6">
                  <input 
                    type="email" 
                    className="form-control form-control-lg" 
                    name="email" 
                    placeholder="Your Email *" 
                    required 
                    disabled={isLoading}
                  />
                </div>
                <div className="col-12">
                  <textarea 
                    className="form-control form-control-lg" 
                    name="message" 
                    rows={5} 
                    placeholder="Your message..." 
                    required
                    disabled={isLoading}
                  ></textarea>
                </div>
                <div className="col-12">
                  <button 
                    type="submit" 
                    className="btn btn-primary btn-lg px-5 py-3"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Sending...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-paper-plane me-2"></i>Send Message
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black text-white-50 py-4 border-top">
        <div className="container text-center">
          <p className="mb-0">&copy; 2024 Famara Niere. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Portfolio;