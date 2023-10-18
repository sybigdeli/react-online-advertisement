function Category({ image, text }) {
    const ratio = 200/264 *100

  return (
    <div className="flex relative rounded-[20px] overflow-hidden">
        <div style={{paddingBottom: `${ratio}%`}}></div>
      <img
        className="w-full h-full left-0 top-0 absolute"
        src={image}
      />
      <div className="w-full left-0 bottom-0 top-1/2 absolute bg-gradient-to-t from-black to-transparent" />
      <div className="absolute bottom-0 px-6 pb-4 text-right text-white text-2xl font-normal leading-tight tracking-wide">
        {text}
      </div>
    </div>
  );
}

export default Category;
