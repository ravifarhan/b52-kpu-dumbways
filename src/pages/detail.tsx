import Navbar from "../component/Navbar"
import Footer from "../component/Footer"
import KPUD from "../assets/img/detail-kpu.png"

function Detail() {
    return (
      <>
        <Navbar/>
        <div className="container w-[1141px]  bg-white mx-auto">
          <div className="p-8 flex">
            <div className="mr-96">
              <a href="/"><h1 className="">← Beranda</h1></a>
            </div>
            <div className="font-semibold">
             <h1 className="">BERITA HARI INI</h1>
            </div>
          </div>

          <div className="p-8">
            <div className="text-center">
              <h1 className="font-bold text-5xl text-[#5d5a00]">KPU TETAPKAN 3 MENTOR TERBAIK</h1>
              <p className="text-xl">Super Admin</p>
              <p className="text-xl">Senin, 03 Jan 2024</p>
            </div>
            <div className="flex justify-center mt-8">
              <img src={KPUD} alt="kpu" />
            </div>
            <div className="flex justify-center p-2 mt-10 mb-12">
              <p className="text-2xl font-semibold text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, reprehenderit culpa aut aspernatur ipsum minus nesciunt quaerat voluptatum at soluta fuga architecto temporibus sit aliquam explicabo tempore saepe atque repellat animi. Quas, cumque molestias fugiat esse non itaque ipsum recusandae unde, libero vero quia atque corporis debitis maiores nostrum deserunt beatae. Ratione sit rem quam, soluta consequatur vitae, quibusdam veniam molestias ipsa temporibus et officiis impedit quidem! Reprehenderit magnam iusto deleniti eaque asperiores iste, vitae fuga incidunt atque natus earum hic laborum corrupti adipisci porro qui sit exercitationem. Officia veritatis tenetur fuga eaque vero ad eos dolor consectetur magnam fugiat vitae ut architecto nam illo corporis culpa quisquam minima, ullam blanditiis molestias, dolore amet perferendis! Laboriosam velit libero sed, fugiat sequi ratione temporibus excepturi optio recusandae, provident at sint. Quam illo eum harum ipsum labore dolorem ut, id voluptas quas praesentium in fugiat qui dolores nesciunt accusantium tempora omnis modi esse impedit. Distinctio alias pariatur quibusdam nam, reprehenderit explicabo maxime aliquam velit quidem dolor recusandae veniam quisquam deleniti unde vel ad? Odio sunt accusantium assumenda id tenetur labore dignissimos, nostrum voluptatem ipsa quae velit, repudiandae atque iure voluptatibus obcaecati reprehenderit possimus cum, sint saepe explicabo illum eligendi. Quis, dignissimos excepturi?</p>
            </div>

          </div>
        </div>
        <Footer />
      </>
    )
}

export default Detail