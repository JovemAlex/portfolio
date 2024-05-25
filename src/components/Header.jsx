const Header = () => {
  return (
    <div className="flex items-center font-semibold text-base gap-x-64 mt-7 mb-7">
      
      <h2 className="text-4xl">
        hnt.
      </h2>

      <div className="flex gap-x-36">
        <a href="#home">
          <h2>Home</h2>
        </a>
        <a href="#stacks">
          <h2>Stacks</h2>
        </a>
        <a href="#projects">
          <h2>Projects</h2>
        </a>
        <a href="#contact">
          <h2>Contact</h2>
        </a>
      </div>


    </div>
  );
}
 
export default Header;