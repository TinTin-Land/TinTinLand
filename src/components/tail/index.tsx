import {Dialog,Transition } from "@headlessui/react"
import React, { Fragment, useState } from "react"
import { useTranslation } from "next-i18next";

const WeiXinImg = {
    img: "/tintinVX.png"
}

const Tail = () => {
    const { t } = useTranslation('footer')
    const [open, setOpen] = useState(false)

    const ends = [
        {
            title: t("联系我们"),
            content: [
                { h1: "Twitter", href: "https://twitter.com/OurTinTinLand" },
                { h1: "Youtube", href: "https://www.youtube.com/channel/UCfHiMcFt-4btbC75FsReQhQ" },
            ],
            weixin: t("WeChat"),
            weixinimg: "https://cdn.discordapp.com/attachments/876498266550853642/994172638886903848/unknown.png"
        },
        {
            title: t("产品"),
            content: [
                { h1: t("课程"), href: "#Educate" },
                { h1: "Hackathons", href: "#Hackathons" },
                { h1: t("活动"), href: "#Activities" },
            ]
        },
    ]

    return (
        <div className="relative border-t border-gray-400 pt-4 2xl:pt-12 pb-1 px-10 bg-stone-900 rounded-t-3xl">
            {/* Mobile view */}
            <div className="md:hidden">
                {/* ... (mobile view content remains unchanged) */}
            </div>

            {/* Desktop view */}
            <div className="hidden md:block px-5 lg:px-10 xl:px-48 py-10 relative">
                {/* ... (desktop view content remains unchanged) */}
            </div>

            {/* WeChat QR code modal */}
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setOpen}>
                    {/* ... (modal content remains unchanged) */}
                </Dialog>
            </Transition.Root>
        </div>
    )
}

export default Tail
