import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='fixed bottom-0 bg-zinc-800 w-full border-t rounded-t-xl flex justify-around py-4 text-xl'>
        <Link to="/home"><i className="fa fa-home"></i></Link>
        <Link to="/add"><i className="fa fa-plus"></i></Link>
        <Link to="/about"><i className="fa fa-user"></i></Link>
        <Link to="/contact"><i className="fa fa-phone"></i></Link>
    </nav>
  );
}

export default Navbar