const Buttom = ({link, name, type = 'solid'}) => {
  return (

    type === "solid" ? 
      <div className="w-44 h-14 bg-black rounded-tr-2xl rounded-bl-2xl text-white flex items-center justify-center font-semibold">
        <a href={link}>{name}</a>
      </div>
    :
      <div className="w-44 h-14 border border-black rounded-tr-2xl rounded-bl-2xl flex items-center justify-center font-semibold">
        <a href={link}>{name}</a>
      </div>

  );
}
 
export default Buttom;