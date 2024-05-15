import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import BounceLoader from 'react-spinners/BounceLoader'
import LoadingOverlay from 'react-loading-overlay';

import Banner from 'sections/banner';
import Services from 'sections/services';
import CustomerSupport from 'sections/customer-support';
import CallToAction from 'sections/call-to-action';
import BoostAgencies from 'sections/boost-agencies';

export default function IndexPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulating a 2-second loading time. You can adjust this as needed.

    return () => clearTimeout(timeout);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <LoadingOverlay
          active={loading}
          spinner = {<BounceLoader />}
          text='Loading...'
          styles={{
            overlay: (base) => ({
              ...base,
              background: 'rgba(255, 255, 255, 0.8)',
              position: 'fixed',
              zIndex: 9999,
              width: '100%',
              height: '100%'
            }),
            spinner: (base) => ({
              ...base,
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)'
            }),
            spinnerWrapper: (base) => ({
              ...base,
              backgroundColor: 'black',
              borderRadius: '50%',
              width: '80px',
              height: '80px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            })
          }}
        >
          <div style={{ visibility: loading ? 'hidden' : 'visible' }}>
            <Layout>
              <SEO title="Startup Landing 006" />
              <Banner />
              <Services />
              <BoostAgencies />
              <CustomerSupport />
              <CallToAction />
            </Layout>
          </div>
        </LoadingOverlay>
      </StickyProvider>
    </ThemeProvider>
  );
}
