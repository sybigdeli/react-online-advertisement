import Image404 from '@/assets/images/404.jpg'
import Image404blur from '@/assets/images/404blur.jpg'

const Page404 = () => {
  return (
    <div className='w-screen h-screen relative object-cover flex justify-center items-center overflow-hidden'>
        <img src={Image404blur} className='absolute w-full'/>
        <img src={Image404} className='absolute z-50 rounded-3xl shadow-2xl'/>
    </div>
  )
}

export default Page404