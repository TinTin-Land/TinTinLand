import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState, useMemo } from "react";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
const Talent_pool_navigation = [
    {
        title:"开发",
        number:"1",
        sort:[
            {
                list:"web 前端工程师",
                number:"1"
            },
            {
                list:"后端工程师",
                number:"1"
            },
            {
                list:"移动端开发工程师",
                number:"1"
            },
            {
                list:"智能合约工程师",
                number:"1"
            },
            {
                list:"测试工程师",
                number:"1"
            },
            {
                list:"安全工程师",
                number:"1"
            },
        ]
    },
    {
        title:"产品",
        number:"1",
        sort:[

        ]
    },
    {
        title:"设计",
        number:"1",
        sort:[

        ]
    },
    {
        title:"运营",
        number:"1",
        sort:[

        ]
    },
]
const TalentPool: React.FC = () => {
    const router = useRouter();
    const [pathname, setPathname] = useState("");

    useEffect(() => {
        if (router.isReady && router.query.slug?.[0]) {
            setPathname(router.query.slug[0]);
        }
    }, [router.isReady, router.query.slug]);

    const renderTalentPoolItem = useMemo(() => (item: typeof Talent_pool_navigation[0]) => (
        <div key={item.title}>
            <Link
                href={`/projects/${item.title}`}
                className={classNames(
                    `/projects/${item.title}` === `/projects/${pathname}` 
                        ? 'bg-white shadow-[0_2px_16px_-1px_rgb(0,0,0,0.1)] shadow-rose-500/50' 
                        : '',
                    "flex justify-between p-2 text-sm md:text-xl text-black rounded-xl px-4"
                )}
                legacyBehavior>

                <div className="font-semibold">{item.title}</div>
                <div className="font-normal">{item.number}</div>

            </Link>
            <div>
                {item.sort.map((list) => (
                    (<Link
                    key={list.list}
                    href={`/projects/${list.list}`}
                    className={classNames(
                        `/projects/${list.list}` === `/projects/${pathname}`
                            ? 'bg-white shadow-[0_2px_16px_-1px_rgb(0,0,0,0.1)] shadow-rose-500/50'
                            : '',
                        "flex justify-between p-2 text-sm md:text-base text-black rounded-xl px-4"
                    )}
                    legacyBehavior>

                        <div className="mr-3">{list.list}</div>
                        <div className="font-normal">{list.number}</div>

                    </Link>)
                ))}
            </div>
        </div>
    ), [pathname]);

    return (
        <div className="w-full">
            {Talent_pool_navigation.map(renderTalentPoolItem)}
        </div>
    );
};

export { TalentPool, Talent_pool_navigation };
