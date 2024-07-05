import { AppProps } from 'next/app';
import '../styles/globals.css';
import Home from './page';
// import { UserProvider } from './context/User';

function App({ pageProps }: AppProps) {
  return (
    // <UserProvider>
      <Home {...pageProps} />
    // </UserProvider>
  );
}

export default App;
