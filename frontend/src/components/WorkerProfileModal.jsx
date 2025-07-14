import React from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import './WorkerProfileModal.css';

const WorkerProfileModal = ({ worker, isOpen, onClose }) => {
  if (!isOpen || !worker) return null;

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="star full">★</span>);
    }
    
    if (hasHalfStar) {
      stars.push(<span key="half" className="star half">★</span>);
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} className="star empty">☆</span>);
    }
    
    return stars;
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <button className="modal-close" onClick={onClose}>×</button>
          <div className="worker-profile-header">
            <div className="worker-avatar-large">
              <img 
                src={worker.avatar} 
                alt={worker.name}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="avatar-fallback" style={{ display: 'none' }}>
                {worker.name.charAt(0)}
              </div>
            </div>
            <div className="worker-main-info">
              <h2 className="worker-name-large">{worker.name}</h2>
              <p className="worker-specialty-large">{worker.specialty}</p>
              <div className="worker-rating-large">
                <div className="stars">
                  {renderStars(worker.rating)}
                </div>
                <span className="rating-number">({worker.rating})</span>
              </div>
              <div className="worker-availability">
                <div className={`availability-indicator ${worker.available ? 'available' : 'unavailable'}`}>
                  <div className="status-dot"></div>
                  {worker.available ? 'Disponible' : 'Indisponible'}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="modal-body">
          <div className="profile-section">
            <h3>Informations</h3>
            <div className="info-grid">
              <div className="info-item">
                <span className="info-label">Expérience</span>
                <span className="info-value">{worker.experience}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Tarif horaire</span>
                <span className="info-value">{worker.hourlyRate}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Distance</span>
                <span className="info-value">~{worker.distance}km</span>
              </div>
              <div className="info-item">
                <span className="info-label">Téléphone</span>
                <span className="info-value">{worker.phone}</span>
              </div>
            </div>
          </div>

          <div className="profile-section">
            <h3>Description</h3>
            <p className="worker-description">{worker.description}</p>
          </div>

          <div className="profile-section">
            <h3>Compétences</h3>
            <div className="skills-container">
              {worker.skills.map((skill, index) => (
                <Badge key={index} variant="secondary" className="skill-badge">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div className="profile-section">
            <h3>Certifications</h3>
            <div className="certifications-container">
              {worker.certifications.map((cert, index) => (
                <Badge key={index} variant="outline" className="certification-badge">
                  🏆 {cert}
                </Badge>
              ))}
            </div>
          </div>

          <div className="profile-section">
            <h3>Projets récents</h3>
            <div className="projects-container">
              {worker.projects.map((project, index) => (
                <div key={index} className="project-card">
                  <h4 className="project-title">{project.title}</h4>
                  <p className="project-description">{project.description}</p>
                  <div className="project-details">
                    <span className="project-duration">⏱️ {project.duration}</span>
                    <span className="project-year">📅 {project.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="profile-section">
            <h3>Avis clients ({worker.reviews.length})</h3>
            <div className="reviews-container">
              {worker.reviews.map((review, index) => (
                <div key={index} className="review-card">
                  <div className="review-header">
                    <div className="review-author">
                      <div className="author-avatar">
                        {review.author.charAt(0)}
                      </div>
                      <div className="author-info">
                        <span className="author-name">{review.author}</span>
                        <span className="review-date">{new Date(review.date).toLocaleDateString('fr-FR')}</span>
                      </div>
                    </div>
                    <div className="review-rating">
                      {renderStars(review.rating)}
                    </div>
                  </div>
                  <p className="review-comment">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <Button variant="outline" onClick={onClose}>
            Fermer
          </Button>
          <Button className="contact-button">
            📞 Contacter
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WorkerProfileModal;