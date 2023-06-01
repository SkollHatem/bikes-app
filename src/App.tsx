import { useState } from "react";
import cx from "classnames";

// Components
import { UserForm } from "@Organisms";

// Hooks
import { useGetBikes } from "@Hooks";

// Types
import { Bike } from "./hooks/useGetBikes";

function App() {
    const { data, isLoading } = useGetBikes();
    const [bikeRate, setBikeRate] = useState<Bike>();

    return (
        <div className="m-auto flex max-w-7xl p-10">
            <div className="w-3/5">
                {isLoading ? (
                    <h3>Consultando...</h3>
                ) : (
                    <div className="grid grid-cols-4 gap-4">
                        {data?.map((bike) => (
                            <div
                                key={bike.id}
                                onClick={() => setBikeRate(bike)}
                                className={cx(
                                    "w-full cursor-pointer overflow-hidden rounded-lg border hover:border-black",
                                    bikeRate?.id === bike.id
                                        ? "border-black bg-blue-500"
                                        : "bg-gray-400"
                                )}
                            >
                                <div className="h-36 w-full bg-gray-200" />
                                <div className="p-2">
                                    <p className="font-semibold">{bike.name}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div className="w-2/5">
                {bikeRate && <UserForm bikeRate={bikeRate.rate.toString()} />}
            </div>
        </div>
    );
}

export default App;
