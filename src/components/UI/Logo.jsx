import LogoImage from '../../assets/icons/Logo.svg'

function Logo() {
  return (
    <div className='flex py-[5px] px-0 items-center gap-[10px]'>
        <p className='text-primary-500 text-[32px] font-semibold leading-[13px]'>craigslist</p>
        <img src={LogoImage} className='w-[20px] h-[20px]'/>
    </div>
  )
}

export default Logo