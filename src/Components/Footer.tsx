

const Footer = () => {
  return (
  <div className="fixed bottom-0 left-0 w-full bg-black text-white z-50">
  <div className="flex xl:flex-row lg:flex-row md:flex-row flex-col w-[90%] mx-auto border-t border-white py-4 items-center justify-between">
    <p className="text-sm">
      © {new Date().getFullYear()} Your Company Name. All rights reserved.
    </p>
    <img
      src="https://websitedemos.net/clothing-store-04/wp-content/uploads/sites/1538/2025/05/payments.svg"
      alt="payment methods"
      className="h-6"
    />
  </div>
</div>

  )
}

export default Footer
