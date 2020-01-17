import { useEffect } from 'react';
import ReactGA from 'react-ga';

export function useGoogleAnalytics() {
  useEffect(() => {
    ReactGA.initialize('UA-136686455-4');
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
  }, []);
}
