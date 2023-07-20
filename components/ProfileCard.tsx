import Image from 'next/image'
import { FC } from 'react'
type user = {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
}
interface ProfileCardProps {
    user: user
}

const ProfileCard: FC<ProfileCardProps> = ({ user }) => {
    return (
        <>
            <div className="flex items-center h-screen w-full justify-center">

                <div className="max-w-xs">
                    <div className="bg-white shadow-xl rounded-lg py-3">
                        <div className="photo-wrapper p-2">
                            <Image
                                width={100}
                                height={100}
                                className=" rounded-full mx-auto" src={user?.image as string} alt="John Doe" />
                        </div>
                        <div className="p-2">
                            <h3 className="text-center text-xl text-gray-900 font-medium leading-8">{user?.name}</h3>

                            <table className="text-xs my-3">
                                <tbody><tr>
                                    <td className="px-2 py-2 text-gray-500 font-semibold">Email</td>
                                    <td className="px-2 py-2">{user?.email}</td>
                                </tr>
                                </tbody></table>
                            <div className="text-center my-3">
                                <a className="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium" href="#">View Profile</a>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ProfileCard