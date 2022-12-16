import React from "react";
import Image from 'next/image'

export default function CoffeeModal(props: any) {
    const [showModal, setShowModal] = React.useState(false);
    const [coffee, setCoffee] = React.useState(props.data)

    return (
        <>
            <div className="flex max-w-xs w-64 flex-col gap-4 rounded-xl bg-black/10 p-4 text-black hover:bg-black/20" onClick={() => setShowModal(true)}>
                <div>
                    <h3 className="text-2xl justify-left font-bold text-black">/{coffee?.name}</h3>
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
                                    <h3 className="text-3xl font-semibold">
                                        ☕ /{coffee?.name}
                                    </h3>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-neutral-600 bg-neutral-200 uppercase last:mr-0 mr-1">
                                        {coffee?.maker ?? ''}
                                    </span>
                                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-neutral-600 bg-neutral-200 uppercase last:mr-0 mr-1">
                                        {coffee?.maker ?? ''}
                                    </span>
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