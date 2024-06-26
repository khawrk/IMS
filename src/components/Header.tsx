
const Header = () => {
    return (
        <nav className="bg-white w-full h-[50px] absolute top-0 text-black flex justify-end items-center">
            <div className="flex justify-around w-[20%] p-2">
                <div className="flex items-center"><a href="#" className="">Philosophy</a></div>
                <div className="flex items-center"><a href="#"> Practice Areas</a></div>
                <div className="flex items-center"><a href="#"><button className="bg-black text-white py-2 px-2 rounded-md">Contact</button></a></div>
            </div>
        </nav>
    )
}

export default Header