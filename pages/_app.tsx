import '../styles/globals.scss';
import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider
      attribute="class"
      storageKey="nightwind-mode"
      defaultTheme="light" // default "light" & Other is "system"
    >
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
