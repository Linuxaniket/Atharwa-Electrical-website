import Head from 'next/head';
import Navbar from './LandingPage/Navbar';
import Footer from './LandingPage/Footer';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Atharwa Electricals | Professional Electrical Services</title>
        <meta name="description" content="Professional electrical services for residential and commercial properties" />
      </Head>
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}