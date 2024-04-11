import Avatar from './Avatar'
import Title from './Title'

const Header = () => {
  return (
    <header className='grid p-items-center gap-6'>
      <Avatar />
      <Title />
      <p className="nowarp color-white">&quot;Front-end developer and avid reader.&quot;</p>
    </header>
  )
}

export default Header