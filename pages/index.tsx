export default function Home() {
  return (
    <header>
      <nav className="flex justify-between">
        <a href="#">
          <img src="#" alt="Nii Dev Logo" />
        </a>
        <ul className="hidden md:flex gap-4">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <div className="hamburger md:hidden space-y-0.5">
          <span className="bar w-[1.25rem] h-[0.15rem] bg-black block"></span>
          <span className="bar w-[1.25rem] h-[0.15rem] bg-black block"></span>
          <span className="bar w-[1.25rem] h-[0.15rem] bg-black block"></span>
        </div>
      </nav>
    </header>
  );
}
