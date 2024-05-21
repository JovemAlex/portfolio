const Card = ({ name, describe, tag, imgUrl, alt }) => {
  return (
    <div className="w-[384px] h-[461px] bg-black rounded-tr-[35px] rounded-bl-[35px]">
      
      <div className="w-full h-[293px] bg-slate-600 rounded-tr-[35px]">
        <img src={imgUrl} alt={alt} />
      </div>

      <div className="flex flex-col items-start justify-start p-[30px]">


        <h2 className="text-2xl font-semibold text-white">
          { name }
        </h2>


        <p className="max-w-[333px] max-h-[77px] text-wrap truncate text-white">
          { describe }
        </p>


      </div>

    </div>
  );
}
 
export default Card;