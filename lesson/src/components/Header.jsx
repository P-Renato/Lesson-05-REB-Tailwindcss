export default function Header() {
  return (
    <>
        <header className="bg-gray-100 p-6 flex justify-between">
        <div className= " font-bold text-lg">MyShop</div>
        <nav className="">
            <ul className="flex gap-x-3">
            <li className="text-gray-600 cursor-pointer hover:text-gray-800">Home</li>
            <li className="text-gray-600 cursor-pointer hover:text-gray-800">About</li>
            <li className="text-gray-600 cursor-pointer hover:text-gray-800">Contact</li>
            </ul>
        </nav>
        </header>
        <img src="https://picsum.photos/id/76/1200/400" className="w-full" alt="banner" />
    </>
  );
}
