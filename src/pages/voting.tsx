import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import Paslon from "../assets/img/paslon.png"
export default function Voting() {
    return (
      <>
        <Navbar />
        <div className="bg-white w-full py-10">
          <h1 className="text-5xl text-[#5d5a00] font-bold text-center">INFO PEMILU TERUPDATE</h1>
          <div className="flex gap-16 justify-center mt-10">
            <div className="flex flex-col justify-center items-center gap-7">
                <h1 className="text-4xl font-black">Hasil :</h1>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex gap-5 items-center bg-[#FF6384] p-6 rounded-2xl shadow-xl   shadow-[#FF6384]">
                <div className="w-20 h-28 p-2 text-center border-4 text-white bg-[#5E0000] rounded-lg flex flex-col justify-center">
                    <h1 className="font-bold">No. Paslon</h1>
                    <p className="text-3xl font-bold">3</p>
                </div>
                <div>
                    <h1 className="text-4xl font-black text-[#5E0000]">Mugiwara</h1>
                    <p className="text-3xl font-bold text-[#5E0000]">78%</p>
                </div>
              </div>
              <div className="flex gap-5 items-center bg-[#FFCD56] p-6 rounded-2xl shadow-xl shadow-[#FFCD56]">
                <div className="w-20 h-28 p-2 text-center border-4 text-white bg-[#5E5400] rounded-lg flex flex-col justify-center">
                    <h1 className="font-bold">No. Paslon</h1>
                    <p className="text-3xl font-bold">1</p>
                </div>
                <div>
                    <h1 className="text-4xl font-black text-[#5E5400]">George</h1>
                    <p className="text-3xl font-bold text-[#5E5400]">45%</p>
                </div>
              </div>
              <div className="flex gap-5 items-center bg-[#36A2EB] p-6 rounded-2xl shadow-xl shadow-[#36A2EB]">
                <div className="w-20 h-28 p-2 text-center border-4 text-white bg-[#005E4D] rounded-lg flex flex-col justify-center">
                    <h1 className="font-bold">No. Paslon</h1>
                    <p className="text-3xl font-bold">2</p>
                </div>
                <div>
                    <h1 className="text-4xl font-black text-[#005E4D]">Marco</h1>
                    <p className="text-3xl font-bold text-[#005E4D]">25%</p>
                </div>
              </div>
              <div className="mt-8 mb-24">
                  <p className="text-3xl font-bold text-red">ANDA SUDAH MEMILIH!!!</p>
                </div>
            </div>
          </div>
          <div className="w-full bg-[#cecece] py-12">
            {/* <h1 className="text-5xl font-bold text-center text-[#5E5400]">Info Paslon</h1> */}
            <div className="flex justify-center items-center mt-10 relative">
              <div className="" >
                <div className="p-12 bg-white flex gap-7 rounded-lg ">
                    <div className="rounded-lg ">
                        <img src={Paslon} alt="Profil Paslon"/>
                    </div>
                  <div className="">
                      <h3 className="font-bold text-xl">Nomor Urut:1</h3>
                      <h1 className="font-bold text-3xl text-[#5E0000]">CINTARA SURYA PALOH</h1>
                      <div className="mt-5 text-xl">
                          <p>Visi & Misi</p>
                          <ul className="list-disc ps-5 list-inside">
                            <li>Memindahkan Indonesia ke Isekai</li>
                            <li>Nonton Anime 3x sehari</li>
                            <li>Melakukan peressapan budaya Jepang</li>
                          </ul>
                      </div>
                      <div className="mt-2 text-xl">
                          <p>Koalisi</p>
                          <ul className="list-disc ps-5 list-inside">
                              <li>Partai Persatuan Wibu</li>
                              <li>Partai Redbull</li>
                              <li>Partai Black Magic</li>
                          </ul>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex mx-auto items-center bg-white mt-12">
            <div className="text-4xl font-bold text-center px-48 py-32 text-red">
              PILIH BERDASARKAN GATCHA TIDAK USAH SERIUS YANG PENTING TIDAK MELEGALKAN SLOT
            </div>
          </div>
        </div>
        <Footer />
      </>
    )
}