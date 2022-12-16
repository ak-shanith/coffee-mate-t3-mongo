import React from "react";
import { trpc } from "../utils/trpc";

export default function AddCoffee() {
    const utils = trpc.useContext();
    const [showModal, setShowModal] = React.useState(false);
    const coffeeMutation = trpc.coffee.create.useMutation({
        onSuccess(data, variables, ctx) {
            utils.coffee.getAll.invalidate();
        },
    })

    const submitContact = async (event: any) => {
        event.preventDefault();
        const coffee = {
            name: `${event.target.name.value}`,
            roast: `${event.target.roast.value}`,
            maker: `${event.target.maker.value}`
        }
        coffeeMutation.mutate(coffee);
        setShowModal(false)
    };

    return (
        <>
            <button
                className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(true)}
            >
                + Add ☕
            </button>
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
                                        + ☕
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <form className="flex flex-col" onSubmit={submitContact}>
                                    <div className="relative p-6 flex-auto">
                                        <p className="pb-4 my-4 text-slate-500 text-lg leading-relaxed">
                                            {"Let's add a new coffee"}
                                        </p>
                                        <div className="flex flex-col">
                                            <label htmlFor="name" className="mb-2">What do you want to call it?</label>
                                            <input
                                                className="mb-4 border-amber-800 border-b-2 outline-none"
                                                id="name"
                                                name="name"
                                                type="text"
                                                placeholder="Name"
                                                required
                                            />
                                            <label htmlFor="maker" className="mb-2">Maker</label>
                                            <input
                                                className="mb-4 border-amber-800 border-b-2 outline-none"
                                                id="maker"
                                                name="maker"
                                                type="text"
                                                placeholder="Maker"
                                                required
                                            />
                                            <label htmlFor="roast" className="mb-2">Roast</label>
                                            <input
                                                className="mb-4 border-amber-800 border-b-2 outline-none"
                                                id="roast"
                                                name="roast"
                                                type="text"
                                                placeholder="Roast"
                                                required
                                            />
                                        </div>
                                        <p className="pb-4 my-4 text-slate-500 text-md leading-relaxed">
                                            “May your coffee be strong and your Mondays short.”
                                        </p>
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
                                            type="submit"
                                        >
                                            + ☕
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null
            }
        </>
    );
}