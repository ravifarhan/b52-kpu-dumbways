import KPU from "../assets/img/kpu.png"
// import KPU1 from "../assets/img/kpu1.png"
// import ContentDataType from "../interface/content"

export default function Content() {
  return (
    <section className="mt-20 mb-20 ">
      <div className="flex mb-5">
        <div className="container gap-5 mx-auto flex justify-center">
            <div className="bg-[url(./assets/img/kpu1.png)] h-[421px] w-[753px] bg-no-repeat">
              <div className="text-white p-5 mt-64">
                <button className="bg-red text-xl text-white font-bold p-2 rounded-xl mb-2">SENIN, 03 JAN 2024</button>
                <a href="/detail"><p className="text-3xl font-bold">KPU TETAPKAN 3 MENTOR TERBAIK</p></a>
                <p className="text-xl ">Super Admin</p>
              </div>
            </div>
            <div className="bg-white w-[367px] h-[421px]">
              <div className="">
                <a href="detail"><img src={KPU} alt="kpu" /></a>
              </div>
              <div className="p-5">
                <button className="bg-red text-xl text-white font-bold p-2 rounded-xl mb-2">SENIN, 03 JAN 2024</button>
                <p className="text-3xl font-bold">KPU TETAPKAN 3 MENTOR TERBAIK</p>
                <p className="text-xl ">Super Admin</p>
              </div>
            </div>
        </div>
      </div>
      <div className="flex gap-5 mx-auto justify-center">
        <div className="bg-white w-[367px] h-[421px]">
            <div className="">
              <img src={KPU} alt="kpu" />
            </div>
            <div className="p-5">
              <button className="bg-red text-xl text-white font-bold p-2 rounded-xl mb-2">SENIN, 03 JAN 2024</button>
              <p className="text-3xl font-bold">KPU TETAPKAN 3 MENTOR TERBAIK</p>
              <p className="text-xl ">Super Admin</p>
            </div>
        </div>
        <div className="bg-white w-[367px] h-[421px]">
            <div className="">
              <img src={KPU} alt="kpu" />
            </div>
            <div className="p-5">
              <button className="bg-red text-xl text-white font-bold p-2 rounded-xl mb-2">SENIN, 03 JAN 2024</button>
              <p className="text-3xl font-bold">KPU TETAPKAN 3 MENTOR TERBAIK</p>
              <p className="text-xl ">Super Admin</p>
            </div>
        </div>
        <div className="bg-white w-[367px] h-[421px]">
            <div className="">
              <img src={KPU} alt="kpu" />
            </div>
            <div className="p-5">
              <button className="bg-red text-xl text-white font-bold p-2 rounded-xl mb-2">SENIN, 03 JAN 2024</button>
              <p className="text-3xl font-bold">KPU TETAPKAN 3 MENTOR TERBAIK</p>
              <p className="text-xl ">Super Admin</p>
            </div>
        </div>
      </div>
    </section>
  )
}