import Paslon from "../../../assets/img/paslon.png"
import NavbarAdmin from "../../../component/NavbarAdmin"

function AddPaslon() {
    return (
      <>
          <NavbarAdmin/>
          <div className="bg-white w-full py-10">
            <h1 className='text-center text-[#5E5400] text-4xl font-black uppercase mb-10'>Add Paslon</h1>
            <div className=" mx-auto px-20">
              <div className="flex justify-center gap-16 px-32 ">
                <div className="w-1/3">
                    <img src={Paslon} className="rounded-lg bg-cover bg-center w-full h-full" alt="" />
                </div>
                  <form action="">
                    <div className="mb-3">
                        <label htmlFor="name" className=" text-2xl text-[#595959] mb-2 font-bold">Nama</label>
                        <input type="text" name="name" className="border-2 text-[#595959] text-2xl border-[#595959] rounded-lg w-full h-14"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="no" className="block text-2xl text-[#595959] mb-2 font-bold">No Urut</label>
                        <input type="number" name="no" className="border-2 text-[#595959] text-2xl border-[#595959] rounded-lg w-full h-14"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="visi-misi" className="block text-2xl text-[#595959] mb-2 font-bold">Visi Misi
                        </label>
                        <textarea name="visi-misi" id="" className="border-2 border-[#595959] rounded-lg py-2 w-full"></textarea>
                    </div>
                    <button className="bg-[#5E5A00] text-white w-full py-3 rounded-lg font-bold">SUBMIT</button>
                  </form>
              </div>
            </div>
          </div>
      </>
    )
}

export default AddPaslon