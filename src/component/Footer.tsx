import LogoFooter from "../assets/img/logo2.png"

export default function Footer(){
  return (
    <footer>
      <div className="bg-black bottom-0 left-0 w-full h-44 flex justify-center mb-1">
        <div className="container flex ml-36 items-center gap-10">
          <div className="">
            <img src={LogoFooter} alt="Dumbways Logo" />
          </div>
          <div className="text-white text-xl font-bold w-72">
            DUMBWAYS.ID
            <p className="text-white text-base font-normal">Jalan Elang IV, Sawah Lama, Kec. Ciputat, Kota Tangerang Selatan, Banten 15413</p>
          </div>
        </div>
      </div>
      <div className="bg-black bottom-0 left-0 w-full h-16 flex justify-center">
        <div className="container flex mx-auto justify-center items-center">
          <div className="text-white text-xl">
            Komisi Pemilihan Umum Dumbways.id | Muhamad Ravi Farhan 2024
          </div>
        </div>
      </div>
      

    </footer>
  )
}