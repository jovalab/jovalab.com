export default function PageHomeIntroduction() {
  return (
    <div className="flex bg-[#F5A8BC] w-full justify-center px-14 h-[88vh] items-center flex-col">
      <div className="w-full grid-cols-2 grid">
        <span className="text-[#1e2124] font-medium text-[45px]">
          Powering AI-assisted decision making — from war zones to factory
          floors.
        </span>
      </div>
      <div className="w-full mt-[8vh] grid-cols-5 grid">
        <div className="col-span-3 flex justify-center justify-start items-start">
          <div className="grid grid-cols-4">
            <span className="col-span-3 text-[#1e2124] font-medium leading-[45px] text-[18px]">
              We build category leading software that empowers organizations to
              create and govern artificial intelligence — across public and
              private networks.
            </span>
          </div>
        </div>
        <div className="col-span-2 flex flex-col justify-start items-start text-start text-[black] leading-[33px] text-[17px]">
          <p>
            We are in an era of unprecedented disruption. Palantir recognizes
            our customers' existential need to utilize software for trusted,
            secure decision making — and to win in the warfighting context.
          </p>
          <p>
            Organizations cannot settle for incremental efficiencies. Bring
            intelligence to the core of everything that matters most to your
            enterprise.
          </p>
        </div>
      </div>
    </div>
  );
}
