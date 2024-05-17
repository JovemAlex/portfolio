const StackBadge = ({name, img, alt}) => {
  return (
    <div className="border border-white rounded-full h-[35px] w-[140px] flex items-center justify-center">

      <div className="flex items-center justify-center gap-x-2.5">

        <img src={img} alt={alt} className="rounded-full w-[30px] h-[30px]"/>

        <span className="font-semibold text-white">{name}</span>

      </div>

    </div>
  );
}
 
export default StackBadge;