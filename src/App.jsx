export default function App() {
  return (
    <div className=" bg-[#f3eae3] min-h-screen flex justify-center items-center">
      <div className=" w-[90%] max-w-lg bg-white mx-auto shadow-md my-7 flex flex-col justify-center overflow-hidden rounded-lg md:h-[400px] md:flex md:flex-row">
        <div className="w-full md:flex-2">
          <img className="md:hidden" src="/images/image-product-mobile.jpg" alt="Product" />
          <img className="hidden md:block md:w-full md:h-full" src="/images/image-product-desktop.jpg" alt="Product" />
        </div>
        <div className="space-y-4 p-6 md:flex-1">
          <div className="space-y-4">
            <p className="font-montserrat font-medium opacity-50 tracking uppercase md:text-xs">
              P e r f u m e
            </p>
            <p className="font-fraunces font-bold text-3xl">
              Gabrielle Essence Eau De Parfum
            </p>
            <p className="font-montserrat opacity-50 font-medium text-sm md:text-xs">
              A floral, solar and voluptuous interpretation composed by Olivier
              Polge, Perfumer-Creator for the House of CHANEL.
            </p>
            <div className="flex space-x-5 items-center">
              <p className="text-[#42866d] text-3xl font-fraunces font-bold">
                $149.99
              </p>
              <p className="line-through opacity-50">$169.99</p>
            </div>
          </div>
          <button className="bg-[#3d8168] flex space-x-3 w-full justify-center items-center p-2 rounded-lg">
            <img src="/images/icon-cart.svg" alt="cart" />
            <p className="text-white font-montserrat font-medium">Add to Cart</p>
          </button>
        </div>
      </div>
    </div>
  );
}
