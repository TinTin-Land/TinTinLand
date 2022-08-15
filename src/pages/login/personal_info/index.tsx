import Header from "../../../components/header";
import Link from "next/link";
import React, {useEffect, useState} from "react";
import {Router, useRouter} from "next/router";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Personal_info = () =>{
    const router = useRouter()
    const [emailType,setEmailType] = useState(true)
    const [emailNumber,setEmailNumber] =useState(false)

    const [imgUrl,setImgUrl] = useState("/头像_avatar.png")
    const inputImg = () => {
        let fileInput = (document.getElementById('file') as HTMLInputElement).files[0]
        const reader = new FileReader()
        reader.readAsDataURL(fileInput)
        reader.onload = function (e) {
            console.log(e);
            console.log(e.target.result);
            setImgUrl(`${e.target.result}`)

        }
    }


    const checkNumber = async (e) =>{
        // e.target.value= e.target.value.replace(/[ ]/g,'')
        if (e.target.value.replace(/[ ]/g,'') =='') {

            setEmailNumber(false)
        }else {

            setEmailNumber(true)

        }
    }

    const next =async () =>{

            await  router.push(
                {
                    pathname:"/homepage",
                    // query:{email:(document.getElementById("email") as HTMLInputElement).value}
                }
            )
    }

    return(
        <>
            <div className="mx-auto relative h-screen  bg-fixed overflow-hidden"
                 style={{backgroundImage:"url('/tintin-bg.png')"}}>
                <Header/>
                <div className="min-h-full flex flex-col  justify-center py-12 sm:px-6 lg:px-8">
                    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                        <div className=" backdrop-blur-sm bg-white/70 py-8 px-4 shadow sm:rounded-lg sm:px-10">
                            <div className="text-4xl">
                                基本信息
                            </div>
                            <div className="mt-2 text-sm mb-10 mt-5">
                              离注册成功就差最后一步了，来设置您的头像和用户名吧！
                            </div>

                            <div className="flex justify-end">

                                <div className=" flex justify-center mr-5">
                                    <img className="rounded-full  w-16 h-16 rounded-full border border-gray-300"
                                         src={classNames(imgUrl)} alt=""/>
                                </div>
                                <div className="relative ">
                                    <div className="w-16 h-16  p-1.5  rounded-full border border-gray-300 flex ">
                                        <img className=" w-full " src="/上传_upload.png" alt=""/>
                                        <input onChange={inputImg} type="file" id="file" className="absolute opacity-0  w-14 mt-2.5   flex justify-center "  accept="image/*"/>
                                    </div>
                                </div>


                            </div>

                            <div>
                                <label htmlFor="email" className="flex justify-between text-sm font-medium text-gray-700 mt-4">
                                   用户名
                                    <div className={classNames(emailType?"hidden":"text-red-400")}>
                                       该ID已被注册
                                    </div>
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="off"
                                        required
                                        placeholder="Enter your ID"
                                        onKeyUp={checkNumber}
                                        maxLength={24}
                                        className={classNames(emailType?"outline-none":"border-red-400","outline-none block w-full px-3 py-2 border  rounded-full shadow-sm placeholder-gray-400 focus:outline-none   sm:text-sm")}
                                    />
                                </div>
                            </div>
                            <div className="flex  justify-end mt-10">
                                <button
                                    type="submit"
                                    onClick={next}
                                    className={classNames(emailType && emailNumber?" bg-black text-white ":" text-gray-400 border-gray-400 cursor-not-allowed","w-24 flex justify-center py-2 px-4 border border-black  rounded-full shadow-sm text-sm font-medium")}
                                >
                                   注册
                                </button>
                            </div>


                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Personal_info
