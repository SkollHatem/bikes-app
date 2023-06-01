import { FC, useRef, useState } from "react";

// Components
import { InputField } from "@Molecules";

// Utils
import { calculatePrice } from "@Utils";

// Hooks
import { useStorage } from "@Hooks";

// Types
interface UserFormProps {
    bikeRate: string;
}

// Constants
const PRICE_BASE_BEFORE = 10;
const PRICE_BASE_AFTER = 12;
const FORM_KEY = "billing";

const UserForm: FC<UserFormProps> = ({ bikeRate }) => {
    const formRef = useRef<HTMLFormElement>(null);
    const [openModal, setOpenModal] = useState(false);
    const [isBlocked, setIsBlocked] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);

    const store = useStorage();

    const getFormData = (el: HTMLFormElement) => {
        const formData = new FormData(el);
        return Object.fromEntries(formData);
    };

    const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const prevBill = store.getData(FORM_KEY);

        if (!prevBill) {
            setIsBlocked(false);
            const el = e.target as HTMLFormElement;
            const formData = getFormData(el);

            const date = formData.date?.toString().split("-")[2];

            const base =
                Number(date) < 15 ? PRICE_BASE_BEFORE : PRICE_BASE_AFTER;
            const rate = Number(bikeRate);
            const rentalDays = Number(formData.rentalDays);
            const amount = calculatePrice(base, rate, rentalDays);
            console.log({ date, base, rate, rentalDays, amount });

            setTotalPrice(amount);
        } else {
            setIsBlocked(true);
        }

        setOpenModal(true);
    };

    const handleOnSuccess = () => {
        if (formRef.current) {
            const formData = getFormData(formRef.current);
            store.setData(
                FORM_KEY,
                JSON.stringify({
                    userInfo: formData,
                    amount: totalPrice,
                })
            );

            setOpenModal(false);
        }
    };

    return (
        <div className="relative overflow-hidden rounded-3xl p-8">
            {openModal && (
                <div className="fixed inset-0 flex flex-col items-center justify-center bg-black/80">
                    <div className="space-y-5 rounded-2xl bg-white p-5">
                        {!isBlocked ? (
                            <>
                                <div className="flex flex-col items-center justify-center space-y-1">
                                    <p className="text-center text-sm text-black">
                                        Total a pagar:
                                    </p>
                                    <span className="text-xl font-semibold leading-6 text-black">
                                        {totalPrice} USD
                                    </span>
                                </div>
                                <div className="flex space-x-6 px-6">
                                    <button
                                        type="submit"
                                        className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500"
                                        onClick={handleOnSuccess}
                                    >
                                        Alquilar
                                    </button>
                                    <button
                                        type="submit"
                                        onClick={() => setOpenModal(false)}
                                        className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500"
                                    >
                                        Cancelar
                                    </button>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="flex flex-col items-center justify-center space-y-1">
                                    <p className="text-center text-sm text-black">
                                        No puedes reservar porque ya alquilaste
                                        una anteriormente
                                    </p>
                                </div>
                                <div className="flex space-x-6 px-6">
                                    <button
                                        type="submit"
                                        onClick={() => setOpenModal(false)}
                                        className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500"
                                    >
                                        Cerrar
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            )}
            <form className="space-y-6" ref={formRef} onSubmit={handleOnSubmit}>
                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base font-semibold leading-7 text-gray-900">
                        Informacion personal
                    </h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                        Use una dirección permanente donde pueda recibir correo.
                    </p>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <InputField
                                label="Nombre y apellido"
                                id="fullName"
                                name="fullName"
                                type="text"
                                required
                            />
                        </div>

                        <div className="sm:col-span-3">
                            <InputField
                                label="Telefono"
                                id="phone"
                                name="phone"
                                type="tel"
                                required
                            />
                        </div>

                        <div className="col-span-full">
                            <InputField
                                label="Correo electronico"
                                id="email"
                                name="email"
                                type="email"
                                required
                            />
                        </div>

                        <div className="col-span-3">
                            <InputField
                                label="Fecha de inicio"
                                id="date"
                                name="date"
                                type="date"
                                required
                            />
                        </div>
                        <div className="col-span-3">
                            <InputField
                                label="¿Cuantos dias vas a alquilar?"
                                id="rentalDays"
                                name="rentalDays"
                                type="number"
                                required
                            />
                        </div>
                    </div>
                </div>

                <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500"
                >
                    Solicitar
                </button>
            </form>
        </div>
    );
};

export default UserForm;
