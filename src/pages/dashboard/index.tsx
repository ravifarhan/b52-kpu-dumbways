import Nyet from "../../assets/img/nyet.png"
import NavbarAdmin from "../../component/NavbarAdmin"

function Dashboard() {
    return (
        <>
          <NavbarAdmin/>
            
        <div className="w-full mx-auto bg-white">
          <h1 className="font-bold text-5xl text-[#5E5400] text-center pt-10">Dashboard</h1>
            <div className="flex justify-center items-center gap-2 mt-10 mb-20">
              <div className="flex flex-col justify-center items-center gap-5">
                  <div className="w-20 text-center text-[#5E5400] border-8 text-[40px] font-bold border-[#5E5400] rounded-full bg-[#FFCD56]">1</div>
                  <div className="bg-[#FFCD56] rounded-lg p-5 shadow-xl shadow-[#5D5400]">
                      <img src={Nyet} className="rounded-lg w-full" alt="" />
                      <h1 className="uppercase text-[#5E5400] text-3xl  mt-3 font-bold text-wrap">George</h1>
                      <h1 className=" text-[#5E5400] text-2xl">Akumulasi: 45%</h1>
                      <h1 className=" text-[#5E5400] text-2xl">Jumlah Vote: 117 Voters</h1>
                  </div>
              </div>
              <div className="flex flex-col justify-center items-center gap-5">
                  <div className="w-20 text-center text-[#005E4D] border-8 text-[40px] font-bold border-[#005E4D] rounded-full bg-[#36A2EB]">2</div>
                  <div className="bg-[#36A2EB] rounded-lg p-5  shadow-xl shadow-[#5D5400]">
                      <img src={Nyet} className="rounded-lg w-full" alt="" />
                      <h1 className="uppercase text-[#005E4D] text-3xl  mt-3 font-bold text-wrap">Marco</h1>
                      <h1 className=" text-[#005E4D] text-2xl">Akumulasi: 65%</h1>
                      <h1 className=" text-[#005E4D] text-2xl">Jumlah Vote: 300 Voters</h1>
                  </div>
              </div>
              <div className="flex flex-col justify-center items-center gap-5">
                  <div className="w-20 text-center text-[#5E0000] border-8 text-[40px] font-bold border-[#5E0000] rounded-full bg-[#FF6384]">3</div>
                  <div className=" bg-[#FF6384] rounded-lg p-5 shadow-xl shadow-[#5E0000]">
                      <img src={Nyet} className="rounded-lg w-full" alt="" />
                      <h1 className="uppercase text-[#5E0000] text-3xl  mt-3 font-bold text-wrap">Mugiwara</h1>
                      <h1 className=" text-[#5E0000] text-2xl">Akumulasi: 25%</h1>
                      <h1 className=" text-[#5E0000] text-2xl">Jumlah Vote: 50 Voters</h1>
                  </div>
              </div>
            </div>

          <div className="py-28 px-16 bg-[#cecece]">
            <h1 className="text-center text-[#5E5400] text-5xl font-bold">LIST VOTERS</h1>
            <div className="px-28">
              <table className="w-full border-[#828282] mt-10">
                <thead className="text-left">
                  <tr>
                    <th className="border border-[#828282] py-2 pl-2">No</th>
                    <th className="border border-[#828282] py-2 pl-2">Nama</th>
                    <th className="border border-[#828282] py-2 pl-2">Alamat</th>
                    <th className="border border-[#828282] py-2 pl-2">Jenis Kelamin</th>
                    <th className="border border-[#828282] py-2 pl-2">Paslon</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr>
                    <td className="border border-[#828282] p-2">1</td>
                    <td className="border border-[#828282] p-2">Naruto</td>
                    <td className="border border-[#828282] p-2">Konoha</td>
                    <td className="border border-[#828282] p-2">Laki-laki</td>
                    <td className="border border-[#828282] p-2">2</td>
                  </tr>
                  <tr>
                    <td className="border border-[#828282] p-2">2</td>
                    <td className="border border-[#828282] p-2">Sanji</td>
                    <td className="border border-[#828282] p-2">North Blue</td>
                    <td className="border border-[#828282] p-2">Laki-laki</td>
                    <td className="border border-[#828282] p-2">3</td>
                  </tr>
                  <tr>
                    <td className="border border-[#828282] p-2">3</td>
                    <td className="border border-[#828282] p-2">Nami</td>
                    <td className="border border-[#828282] p-2">East Blue</td>
                    <td className="border border-[#828282] p-2">Perempuan</td>
                    <td className="border border-[#828282] p-2">1</td>
                  </tr>
                  <tr>
                    <td className="border border-[#828282] p-2">4</td>
                    <td className="border border-[#828282] p-2">Hinata</td>
                    <td className="border border-[#828282] p-2">Konoha</td>
                    <td className="border border-[#828282] p-2">Perempuan</td>
                    <td className="border border-[#828282] p-2">2</td>
                  </tr>
                </tbody>
              </table>
                <h1 className="mt-10 font-bold text-2xl">TOTAL SUARA TERKUMPUL : 1000 Voters</h1>
            </div>
          </div>

        </div>
        </>
    )
}

export default Dashboard