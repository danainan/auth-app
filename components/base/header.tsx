import Image from "next/image"
import Link from 'next/link'

const HeaderComponent = () => {
    return (
        <>
            <nav className='w-full h-[64px] bg-blue-800 flex'>
                <Link href={"/"} className="flex"> 
                    <div className="pt-2 pl-4">
                        <Image src={'/icon/logo.png'} alt="logo-website" width={64} height={64}/>

                    </div>
                
                    <span><h1 className="text-white text-[32px] pl-1 mt-2">Panda</h1></span>
                </Link>
                <Link href={"/"}><h3 className="mt-5 pl-5">Register</h3></Link>
            </nav>
            

        </>
    )
}
export default HeaderComponent
