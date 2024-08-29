import Header from '../components/Header';
import Footer from '../components/Footer';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <Header />
      <main>
        <h1>Welcome to our ETH Marketplace!</h1>
      </main>
      <Footer />
    </Layout>
  );
}