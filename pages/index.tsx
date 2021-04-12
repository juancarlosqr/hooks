import Layout from '@/components/Layout';
import Rover from '@/components/Rover';
import SolCountProvider from '@/providers/SolCountProvider';

export default function Home() {
  return (
    <Layout>
      <SolCountProvider>
        <Rover />
      </SolCountProvider>
    </Layout>
  );
}
