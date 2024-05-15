import React from 'react';
import { Box, Container, Grid, Heading, Text } from 'theme-ui';
import BlockTitle from 'components/block-title';
import { FaLaptop, FaMobileAlt, FaServer, FaPalette } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const SERVICES_DATA = [
  {
    icon: FaLaptop,
    title: 'DÉVELOPPEMENT WEB',
    text:
      'Créez des sites web sur mesure qui correspondent à votre vision et à vos besoins spécifiques.',
  },
  {
    icon: FaMobileAlt,
    title: 'APPLICATION MOBILE',
    text:
      'Développez des applications mobiles innovantes pour atteindre votre public où qu\'il soit.',
  },
  {
    icon: FaServer,
    title: 'HÉBERGEMENT & SEO',
    text:
      'Optimisez votre présence en ligne avec notre service d\'hébergement fiable et nos solutions de référencement.',
  },
  {
    icon: FaPalette,
    title: 'CONCEPTION GRAPHIQUE',
    text:
      'Créez des designs graphiques captivants pour votre marque, vos produits et vos campagnes de marketing.',
  },
];

const Services = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
  });

  return (
    <Box sx={styles.services} id="services">
      <Container>
        <BlockTitle
          slogan="Des fonctionnalités de qualité"
          title="Découvrez les services que nous proposons"
          styles={styles.blockTitle}
        />
        <Grid sx={styles.grid}>
          {SERVICES_DATA.map((service, index) => {
            const Icon = service.icon;
            return (
              <Box
                className={`service-card ${inView ? 'animated' : ''}`}
                sx={styles.serviceCard}
                key={`service-post-${index}`}
                ref={ref}
              >
                <div className="service-icon">
                  <Icon size={50} color="#4a8efd" />
                </div>
                <Heading as="h3">{service.title}</Heading>
                <Text as="p">{service.text}</Text>
              </Box>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;

const styles = {
  services: {
    pt: ['80px', null, null, null, null, null, '120px'],
  },
  blockTitle: {
    textAlign: 'center',
  },
  grid: {
    display: 'grid',
    gridGap: ['30px', null, null, null, null, '60px'],
    gridTemplateColumns: [
      '1fr',
      null,
      null,
      '1fr 1fr',
      null,
      '1fr 1fr 1fr 1fr',
    ],
  },
  icon: {
    display: 'flex',
    ml: 'auto',
    mr: 'auto',
    width: ['80px', null, null, '110px'],
    height: ['80px', null, null, '110px'],
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: ['20px', null, null, '40px'],
    backgroundImage:
      'linear-gradient(323.91deg, #FFCC40 7.09%, rgba(255, 204, 64, 0.5) 88.82%)',
  },
  serviceCard: {
    textAlign: 'center',
    opacity: 0, // Initially set opacity to 0
    transition: 'opacity 0.5s ease', // Add transition for opacity
    '&.animated': {
      opacity: 1, // Change opacity to 1 when .animated class is applied
    },
    '.service-icon': {
      transition: 'transform 0.5s ease, opacity 0.5s ease', // Add transition for icon
      transform: 'translateY(20px)',
      opacity: 0,
    },
    h3: {
      margin: 0,
      fontSize: ['18px', null, null, 3],
      fontWeight: 'bold',
      lineHeight: 1,
      color: 'black',
      mt: ['30px', null, null],
      mb: ['20px', null, null],
      opacity: 0,
      transition: 'opacity 0.5s ease', // Add transition for heading
    },
    p: {
      margin: 0,
      fontSize: [0, null, null, '15px'],
      color: 'heading_secondary',
      width: '100%',
      maxWidth: [null, null, null, null, '84%', '100%'],
      mx: [null, null, null, null, 'auto', '0'],
      opacity: 0,
      transition: 'opacity 0.5s ease', // Add transition for text
    },
    '&.animated .service-icon, &.animated h3, &.animated p': {
      opacity: 1,
      transform: 'translateY(0)',
    },
  },
};
