import Particles from 'particlesjs';

const Particle = () => {
  Particles.init({
    selector: '.page-background',
    color: ['#03dac6', '#ff0266', '#000000'],
    connectParticles: true,
    responsive: [
      {
        breakpoint: 768,
        options: {
          color: ['#faebd7', '#03dac6', '#ff0266'],
          maxParticles: 43,
          connectParticles: false,
        },
      },
    ],
  });
};

export default Particle;
