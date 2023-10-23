import PropTypes from 'prop-types';
import Navbar from './Navbar';

export default function MainLayout({ children } : { children: React.ReactNode }) {
  return (
    <>
    <header>
      <Navbar />
    </header>
    <main className='bg-slate-700 h-screen p-16'>
      { children }
    </main>
    </>
  )
}


MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
}
