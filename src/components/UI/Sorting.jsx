import DownImage from '../../assets/icons/down.svg'
function Sorting({text}) {
  return (
    <div className='w-fit flex items-center pl-[14px] pr-[8px] py-[10px] rounded-[10px] border-gray-400 border-[1px]'>
        <img src={DownImage} className='w-[24px] h-[24px] opacity-50'/>
        <p className='text-gray-600 text-[14px] font-normal leading-4'>{text}</p>
    </div>
  )
}

export default Sorting