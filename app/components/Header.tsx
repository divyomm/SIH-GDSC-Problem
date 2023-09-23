"use client"
import Image from "next/image"
import React, {useEffect } from "react"
import { useSession, signIn, signOut } from "next-auth/react"
import { doc, getFirestore, setDoc } from "firebase/firestore"
import { HiSearch, HiBell, HiChat } from "react-icons/hi"
import app from "../Shared/firebaseConfig"
import { useRouter } from "next/navigation"

const Header = () => {
    const { data: session } = useSession();
    const router = useRouter();
    const db = getFirestore(app);

    useEffect(() => {
        saveUserInfo();
    }, [session])

    const saveUserInfo = async () => {
        if (session?.user) {
            await setDoc(doc(db, "user", session.user.email), {
                userName: session.user.name,
                email: session.user.email,
                userImage: session.user.image
            });
        }
    }

    const onCreateClick = () => {
        if(session)
        {
            router.push('/pin-builder')
        }
        else {
            signIn()
        }
    }

    // console.log(session)
    return (
        <div className="flex gap-3 items-center p-6 bg-[#4e4feb]">
            <Image src='/project-logo.png' alt="logo" width={50} height={50} onClick={()=>router.push('/')} className="bg-[#fff] p-1 rounded-full cursor-pointer" />
            <button onClick={()=>router.push('/')}  className=" text-white p-2 px-4 rounded-full" >Home</button>
            <button className=" text-white font-semibold p-2 px-4 rounded-full" onClick={()=>onCreateClick()}>Create</button>
            <div className="bg-[#e9e9e9] p-3 flex gap-3 items-center rounded-full w-full">
                <HiSearch className='text-[25px] text-gray-500' />
                <input type="text" placeholder="Search" className="bg-transparent outline-none" />
            </div>
            <HiBell className='text-[40px] text-[#fff]' />
            <HiChat className='text-[40px] text-[#fff]' />
            {session?.user ? <Image src={session.user.image} onClick={()=>router.push('/'+session.user.email)} alt="user-image" width={50} height={50}
                className="hover:bg-gray-300 p-2 rounded-full cursor-pointer" /> :
                <button className="font-semibold p-2 px-4 rounded-full" onClick={() => signIn()}>Login</button>}

        </div>
    )
}
export default Header