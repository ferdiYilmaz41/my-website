import { GiHamburgerMenu } from 'react-icons/gi';
import Logo from '../assets/my_logo.png'

const NavMenu = [
  {
    id: 1,
    title: 'Services',
    link: '#'
  },
  {
    id: 2,
    title: 'Works',
    link: '#'
  },
  {
    id: 3,
    title: 'Blog',
    link: '#'
  }

]

const Navbar = () => {
  return (
    <>
      <div className='py-18 bg-gray text-white'>
        <div className="container flex justify-between items-center ">
          {/* Navbar */}
          <div>
            <img src={Logo} alt="logo" className='w-[80px] py-5 hover:scale-105'/>
          </div>
          {/* Navbar */}
          <div>
            <ul className='hidden sm:flex justify-center gap-10'>
              {NavMenu.map(
                (item) => {
                  return (
                    <li key={item.id}>
                      <a href={item.link} className='hover:text-primary text-xl font-semibold
                      text-white/70 duration-300
                      '>{item.title}</a>
                    </li>
                  );
                }
              )}
            </ul>
            {/* Mobile menu */}
            <div className='sm:hidden'>
              <GiHamburgerMenu className='text-3xl'/>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar