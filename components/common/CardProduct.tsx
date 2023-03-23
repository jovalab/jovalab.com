export default function CommonCardProduct() {
  return (
    <div className="border border-solid border-gray-200 p-7 flex rounded-xl justify-center items-start flex-col w-full">
      <div className="w-full flex justify-start items-center flex-row w-full">
        <i className="ri-cloud-fill text-[28px] text-[#F5A8BC]"></i>
        <span className="ml-2 text-[21px] font-medium">App Platform</span>
      </div>
      <span className="text-sm text-gray-500 mt-2">
        Build and deploy apps without managing infrastructure with
        DigitalOcean’s Platform as a Service and serverless solutions.
      </span>
      <button className="mt-2 text-[#F5A8BC] bg-white border-none outline-none cursor-pointer py-2 flex justify-center items-center flex-row">
        <span className="font-medium text-sm">Learn more</span>
        <i className="ri-arrow-right-line ml-1 text-base"></i>
      </button>
    </div>
  );
}
