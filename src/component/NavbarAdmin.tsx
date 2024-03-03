import Logo from "../assets/img/logo.png"

export default function NavbarAdmin() {

  return (
    <header className="bg-black w-full h-16 flex items-center">
      <div className="container mx-28">
        <div className="flex justify-center gap-5 items-center">
          <div className="">
            <a href="/"><img src={Logo} alt="Logo Dumbways.id"/></a>
          </div>
          <div className="text-white font-bold text-2xl mr-auto">
            <a href="/dashboard">DASHBOARD PEMILU</a>
          </div>
          <div className="text-white text-xl">
            <a href="/dashboard/partai">Partai</a>
          </div>
          <div className="text-white text-xl">
            |
          </div>
          <div className="text-white text-xl">
            <a href="/dashboard/paslon">Paslon</a> 
          </div>
              <div className="">
                <button className="bg-white text-xl font-bold px-3 py-1 rounded-full">A</button>
              </div>
        </div>
      </div>

    </header>
  )
}