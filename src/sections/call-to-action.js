import React from 'react';
import { Box, Container, Heading, Button } from 'theme-ui';
const CallToAction = () => {
  return (
    <Box sx={styles.wrapper}>
      <Container sx={styles.container}>
        <Box sx={styles.inner}>
          <Heading as="h3"> 
<span>- NOUS SOMMES -</span><br/> UNE AGENCE DE DÉVELOPPEMENT CRÉATIVE AVEC UNE GRANDE EXPÉRIENCE
          </Heading>
        </Box>
      </Container>
    </Box>
  );
};

export default CallToAction;

const styles = {
  wrapper: {},
  container:{
    display: ['none', null, null, null, 'flex'],
  },
  inner: {
    padding: ['45px 30px 50px', null, null, '45px 50px', null, '45px 70px'],
    mt: [0, null, null, null, '-80px'],
    position: 'relative',
    zIndex: '10',
    textAlign:'center',
    backgroundColor: 'primary',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '60% center',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent:'center',
    h3: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: [5, null, 4, null, null, 6, 7],
      lineHeight: [1.24, null, 1.53],
      padding: ['0 15px', '0'],
      marginBottom: ['50px', null, null, '0'],
      br: {
        display: ['none', null, null, 'inherit'],
      },
    },
    span: {
      display:'block'
    }
  },
};
