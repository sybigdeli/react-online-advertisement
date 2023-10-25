function Day({day , date}) {
  return (
    <div className="py-4 bg-neutral-50 rounded-xl border border-zinc-300 flex-col justify-start items-start inline-flex">
        <p className="self-stretch grow shrink basis-0 text-center text-black text-base font-semibold leading-none tracking-tight">{day}</p>
        <span className="self-stretch grow shrink basis-0 text-center text-black text-base font-semibold leading-none tracking-tight">{date}</span>
    </div>
  )
}

export default Day