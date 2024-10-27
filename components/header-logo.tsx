import Link from "next/link";
import Image from "next/image";



export const HeaderLogo = () => {
    return (
        <Link href="/">
            <div className="items-center hidden lg:flex">
                <Image src="/wired.svg" alt="logo" height={28} width={28} />
                <p className="font-pacifico font-medium text-white text-3xl ml-2.5">
                    Penny
                </p>
            </div>
        </Link>
    )
}