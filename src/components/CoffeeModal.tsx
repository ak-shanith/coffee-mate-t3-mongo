import React from "react";
import Image from 'next/image'

export default function CoffeeModal(props: any) {
    const [showModal, setShowModal] = React.useState(false);
    const [coffee, setCoffee] = React.useState(props.data)

    return (
        <>
            <div className="flex max-w-xs w-64 flex-col gap-4 rounded-xl bg-black/10 p-4 text-black hover:bg-black/20 cursor-pointer" onClick={() => setShowModal(true)}>
                <div>
                    <h3 className="break-words text-2xl justify-left font-bold text-black">/{coffee?.name}</h3>
                    <div className="p-5">
                        <Image
                            src="/coffee-cup.png"
                            alt="☕"
                            width={60}
                            height={120}
                            className="mx-auto"
                        />
                    </div>
                </div>
            </div>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="break-all text-3xl font-semibold">
                                        ☕ /{coffee?.name}
                                    </h3>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    <div className="block max-w-sm p-4 bg-white border border-gray-200 rounded-lg">
                                        <h5 className="break-all mb-2 text-2xl font-bold tracking-tight text-gray-800">{coffee?.maker ?? ''}</h5>
                                        <p className="break-all font-normal text-gray-500">Maker</p>
                                    </div>
                                    <div className="block max-w-sm p-4 my-2 bg-white border border-gray-200 rounded-lg">
                                        <h5 className="break-all smb-2 text-2xl font-bold tracking-tight text-gray-800">{coffee?.roast ?? ''}</h5>
                                        <p className="break-all font-normal text-gray-500">Roast</p>
                                    </div>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
                                    <button
                                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Save Changes
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}