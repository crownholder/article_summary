import  logo  from "../assets/favicon.ico";
const Hero = () => {
  return (
    <header
      className="w-full flex
    justify-center items-center flex-col "
    >
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img
          src={logo}
          alt="articlesum logo "
          className="w-28 object-contain"
          style={{width:'250px'}}
        />
        <button
          type="button"
          onClick={() => window.open("https://github.com/crownholder")}
          className="black_btn"
          style={{background:'red'}}
        >
          GitHub
        </button>
      </nav>
      <h1>Summarize Articles with <br className="max-md:hidden"/></h1>
      <h1>OpenAi GPT-4</h1>
      <h2>Summarize the latest articles in a flash!</h2>
    </header>
  );
};

export default Hero;
