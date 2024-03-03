export default function Register() {
    return (
        <>
          <div className=" bg-white w-1/2 mx-auto my-5 rounded-lg shadow-lg p-16">
            <h1 className='text-[#5E5400] text-center font-bold text-5xl mb-10'>Register</h1>

            <form action="" className="flex flex-col gap-3">
              <label htmlFor="fullname" className="text-[#595959] font-bold">Fullname</label>
                <input type="text" id="fullname" className="border-2 border-[#595959] p-3 rounded-lg" />
              <label htmlFor="alamat" className="text-[#595959] font-bold">Alamat</label>
                <input type="text" id="alamat" className="border-2 border-[#595959] p-3 rounded-lg" />
              <label htmlFor="jenis-kelamin" className="text-[#595959] font-bold">Jenis Kelamin</label>
                <input type="text" id="jenis-kelamin" className="border-2 border-[#595959] p-3 rounded-lg" />
              <label htmlFor="username" className="text-[#595959] font-bold">Username</label>
                <input type="text" id="username" className="border-2 border-[#595959] p-3 rounded-lg" />
              <label htmlFor="password" className="text-[#595959] font-bold">Password</label>
                <input type="password" id="password" className="border-2 border-[#595959] p-3 rounded-lg" />
              <button className="bg-[#5E5400] text-white font-bold mt-6 py-3 rounded-lg">SUBMIT</button>
            </form>
            <p className="mt-3 font-semibold text-center text-lg italic text-[#595959]">Sudah Punya Akun? <span className="text-[#0092A6] underline" ><a href="/login">Login</a></span></p>
          </div>
        </>
    )
}