export default function Content() {
  return (
    <section className="mt-10">
      <div className="w-full flex">
        <div className="mx-auto flex justify-between w-[1141px] h-[516px] rounded-2xl bg-gradient-to-r from-dwred from-0% to-dwdarkred to-90%">
            <div>
              <img className="mb-20" src="./src/img/dw.png" alt="Dumbways Logo2" />
              <div className="ml-10">
                <p className="font-bold text-white text-6xl">SELAMAT DATANG </p>
                <p className="font-bold text-white text-2xl">PEMILU PRESIDEN DUMBWAYS.ID YANG JUJUR</p>
                <p className="font-bold text-white text-2xl">DIPILIH MELALUI ARTI SEBUAH NAMA</p>
              </div>
            </div>
            <div className="mr-20">
              <img src="./src/img/kotak-suara.png" alt="Kotak Suara" />
            </div>
        </div>
      </div>
    </section>
  )
}