import IMG from "../../../assets/img/paslon.png"
import NavbarAdmin from "../../../component/NavbarAdmin"

function Paslon() {
    return (
      <>
        <NavbarAdmin/>
        <div className="w-full h-screen mx-auto bg-white">
          <h1 className="font-extrabold text-5xl text-[#5E5400] text-center pt-10">LIST PASLON</h1>
            <div className="px-28">
              <table className="w-full mt-10 border-[#828282] ">
                <thead className="text-left bg-[#cecece]">
                  <tr>
                    <th className="border border-[#828282] py-2 pl-2">No Urut</th>
                    <th className="border border-[#828282] py-2 pl-2">Image</th>
                    <th className="border border-[#828282] py-2 pl-2">Nama</th>
                    <th className="border border-[#828282] py-2 pl-2">Visi Misi</th>
                    <th className="border border-[#828282] py-2 pl-2">Koalisi</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr>
                    <td className="border border-[#828282] p-2">1</td>
                    <td className="border border-[#828282] p-2"><img src={IMG} className="w-20" alt="Image Paslon" /></td>
                    <td className="border border-[#828282] p-2">George</td>
                    <td className="border border-[#828282] p-2">
                      <ul className="list-disc list-inside">
                        <li>Memindahkan Indonesia ke Wano</li>
                        <li>Nonton Anime 3x sehari</li>
                        <li>Melakukan peresapan pada budaya jepang</li>
                      </ul>
                    </td>
                    <td className="border border-[#828282] p-2">
                      <ul className="list-disc list-inside">
                        <li>Partai Persatua Wiboo</li>
                        <li>Partai Black Magic</li>
                        <li>Partai One Piece</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
        </div>
      </>
    )
}

export default Paslon