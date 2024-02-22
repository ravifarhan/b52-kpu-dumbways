import * as React from "react"

export default function Navbar() {
  const [isLogin, setIsLogin] = React.useState<boolean>(false)
  const loggedIn = () : void => {
    setIsLogin(!isLogin)
  }

  return (
    <header className="bg-black w-full h-16 flex items-center">
      <div className="container mx-28">
        <div className="flex justify-center gap-5 items-center">
          <div className="">
            <a href="#"><img src="./src/img/logo.png" alt="Logo Dumbways.id"/></a>
          </div>
          <div className="text-white font-bold text-2xl mr-auto">
            <a href="#">PEMILU PRESIDEN DUMBWAYS.ID</a>
          </div>
          <div className="text-white text-xl">
            <a href="#">Partai</a>
          </div>
          <div className="text-white text-xl">
            |
          </div>
          <div className="text-white text-xl">
            <a href="#">Paslon</a> 
          </div>
          <div className="text-white text-xl">
            | 
          </div>
          <div className="text-white text-xl">
            <a href="#">Voting</a>
          </div>
          {
            isLogin ?
              <div className="">
                  <button className="bg-white text-xl font-bold px-7 py-1 rounded-md" onClick={loggedIn}>LOGIN</button>
              </div>
                :
              <div className="">
                <button className="bg-white text-xl font-bold px-3 py-1 rounded-full" onClick={loggedIn}>D</button>
              </div>
          }
        </div>
      </div>

    </header>
  )
}