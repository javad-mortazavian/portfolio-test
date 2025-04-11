import React from 'react';
import { services } from '../constants'; // Adjust the path as needed

const About = () => {
  return (
    <div>
      <div style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', textAlign: 'center' }}>Overview</h2>
        <p style={{ fontSize: '16px', lineHeight: '1.6', textAlign: 'center', marginTop: '20px' }}>
          M3TFluiD lab is dedicated to exploring the complex and multidisciplinary nature of climate
          adaptation and environmental mitigation strategies (CAEMS) in the built environment using
          fundamental fluid dynamics, advanced data-driven models, and multi-fidelity computational techniques.
          The M3TFluiD lab outcomes have a broad range of applications in building energy modeling,
          advanced air mobility, smart city planning, and renewable energy solutions. These outcomes also
          support empowering local communities with the required tools and knowledge to use and support CAEMS.
        </p>
      </div>

      <div>
        <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '20px', textAlign: 'center' }}>
          Our Services
        </h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
          {services.map((service, index) => (
            <div
              key={index}
              style={{
                border: '1px solid #ddd',
                borderRadius: '10px',
                padding: '20px',
                textAlign: 'center',
                width: '200px',
              }}
            >
              <img
                src={service.icon}
                alt={service.title}
                style={{
                  width: '150px',
                  height: '150px',
                  objectFit: 'contain',
                  marginBottom: '10px',
                }}
              />
              <h4 style={{ fontSize: '18px', fontWeight: 'bold' }}>{service.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;