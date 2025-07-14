import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { mockWorkers } from '../data/mock';
import './WorkerSearchMap.css';

const WorkerSearchMap = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [searchRadius, setSearchRadius] = useState(0);
  const [workersInRadius, setWorkersInRadius] = useState([]);
  const [showNotifications, setShowNotifications] = useState(false);
  const [searchProgress, setSearchProgress] = useState(0);
  const [showResults, setShowResults] = useState(false);

  // User location (center of map)
  const userLocation = { x: 50, y: 50 }; // Percentage coordinates
  const radiusKm = 5; // 5km radius
  const radiusPixels = 140; // Visual radius in pixels

  // Calculate distance between two points
  const calculateDistance = (point1, point2) => {
    const dx = point1.x - point2.x;
    const dy = point1.y - point2.y;
    return Math.sqrt(dx * dx + dy * dy);
  };

  // Handle search functionality with loading animation
  const handleSearch = () => {
    setIsSearching(true);
    setIsLoading(true);
    setSearchProgress(0);
    setShowResults(false);
    setShowNotifications(false);
    
    // Start search animation
    setTimeout(() => {
      setSearchRadius(radiusPixels);
    }, 200);
    
    // Simulate search progress
    const progressInterval = setInterval(() => {
      setSearchProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 10;
      });
    }, 150);
    
    // Find workers within radius after loading
    setTimeout(() => {
      const workersInRange = mockWorkers.filter(worker => {
        const distance = calculateDistance(userLocation, worker.position);
        return distance <= 25; // Adjusted for percentage coordinates
      });
      
      setWorkersInRadius(workersInRange);
      setIsLoading(false);
      
      // Show results with staggered animation
      setTimeout(() => {
        setShowResults(true);
      }, 300);
      
      // Show notifications with delay
      setTimeout(() => {
        setShowNotifications(true);
      }, 800);
    }, 2000);
  };

  // Reset search
  const handleReset = () => {
    setIsSearching(false);
    setIsLoading(false);
    setSearchRadius(0);
    setWorkersInRadius([]);
    setShowNotifications(false);
    setSearchProgress(0);
    setShowResults(false);
  };

  return (
    <div className="worker-search-container">
      <div className="search-header">
        <h1 className="search-title">Trouvez un ouvrier près de vous</h1>
        <p className="search-subtitle">Découvrez les professionnels disponibles dans votre zone</p>
      </div>

      <div className="map-container">
        <div className="map-background">
          {/* User location point */}
          <div 
            className="user-location"
            style={{
              left: `${userLocation.x}%`,
              top: `${userLocation.y}%`,
            }}
          >
            <div className="user-point"></div>
            <div className="user-label">Vous</div>
          </div>

          {/* Search radius circle */}
          {isSearching && (
            <div 
              className="search-radius"
              style={{
                left: `${userLocation.x}%`,
                top: `${userLocation.y}%`,
                width: `${searchRadius}px`,
                height: `${searchRadius}px`,
                transform: 'translate(-50%, -50%)',
              }}
            >
              <div className="radius-label">{radiusKm}km</div>
              {isLoading && (
                <div className="search-wave"></div>
              )}
            </div>
          )}

          {/* Loading overlay */}
          {isLoading && (
            <div className="loading-overlay">
              <div className="loading-spinner"></div>
              <div className="loading-text">Recherche en cours...</div>
              <div className="loading-progress">
                <div 
                  className="progress-bar"
                  style={{ width: `${searchProgress}%` }}
                ></div>
              </div>
            </div>
          )}

          {/* Worker points */}
          {mockWorkers.map((worker, index) => {
            const isInRadius = workersInRadius.some(w => w.id === worker.id);
            
            return (
              <div
                key={worker.id}
                className={`worker-point ${isInRadius && showResults ? 'in-radius' : ''} ${showNotifications && isInRadius ? 'notification-active' : ''}`}
                style={{
                  left: `${worker.position.x}%`,
                  top: `${worker.position.y}%`,
                  animationDelay: showResults ? `${index * 0.1}s` : '0s'
                }}
              >
                <div className="worker-dot"></div>
                <div className="worker-info">
                  <div className="worker-name">{worker.name}</div>
                  <div className="worker-specialty">{worker.specialty}</div>
                  <div className="worker-rating">★ {worker.rating}</div>
                </div>
                {showNotifications && isInRadius && (
                  <div className="notification-badge">📬</div>
                )}
                {isInRadius && showResults && (
                  <div className="success-ring"></div>
                )}
              </div>
            );
          })}
        </div>

        {/* Search controls */}
        <div className="search-controls">
          {!isSearching ? (
            <Button 
              onClick={handleSearch}
              className="search-button"
              size="lg"
            >
              🔍 Rechercher autour de moi
            </Button>
          ) : (
            <div className="search-actions">
              <Button 
                onClick={handleReset}
                variant="outline"
                className="reset-button"
              >
                Nouvelle recherche
              </Button>
              <Badge variant="secondary" className="results-badge">
                {workersInRadius.length} ouvrier{workersInRadius.length !== 1 ? 's' : ''} trouvé{workersInRadius.length !== 1 ? 's' : ''}
              </Badge>
            </div>
          )}
        </div>
      </div>

      {/* Results summary */}
      {isSearching && workersInRadius.length > 0 && (
        <div className="results-summary">
          <h3>Ouvriers disponibles dans votre zone</h3>
          <div className="worker-list">
            {workersInRadius.map((worker) => (
              <div key={worker.id} className="worker-card">
                <div className="worker-avatar">
                  {worker.name.charAt(0)}
                </div>
                <div className="worker-details">
                  <div className="worker-name">{worker.name}</div>
                  <div className="worker-specialty">{worker.specialty}</div>
                  <div className="worker-rating">★ {worker.rating}</div>
                </div>
                <div className="worker-distance">
                  ~{Math.round(Math.random() * 3 + 1)}km
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkerSearchMap;