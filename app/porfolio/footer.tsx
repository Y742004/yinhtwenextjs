import { ThemeSwitcher } from "../components/themeSwitcher";

export function Footer() {
    return (
        <>
        <div className="mt-20">
<div className="border dark:border-gray-500 dark:bg-black bg-white px-10 pb-10 rounded-3xl">
    <div className=" lg:flex justify-between">
        <div className="flex flex-col gap-3">
            <p className="text-4xl font-semibold mt-10">
                ZOEDEV
            </p>
            <p className="text-gray-500">
                © Polar Softwarer Inc. 2024
            </p>
            <ThemeSwitcher/>
        </div>

        <div className="flex gap-20 mt-10">
            <div className=" flex flex-col gap-3">
                <p className="text-lg ">Community</p>
                <div className="text-gray-500">
                    <p className="text-sm">Discord</p>
                    <p className="text-sm">Twitter</p>
                    <p className="text-sm">Github</p>
                </div>
            </div>
            <div className=" flex flex-col gap-3">
                <p className="text-lg ">Support</p>
                <div className="text-gray-500">
                    <p className="text-sm">Docs</p>
                    <p className="text-sm">FAQ</p>
                    <p className="text-sm">Contact</p>
                </div>
            </div>
        </div>
    </div>
</div>
        </div>
        </>
    )
}