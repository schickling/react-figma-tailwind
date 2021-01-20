import * as React from "react";
import avatar from "./avatar.jpg";

export const Artboard = () => {
    return <>
        <div className="shadow-lg flex bg-white rounded-lg p-6 leading-normal">
            <img className="h-24 w-24 rounded-full mx-auto mx-0 mr-6" src={avatar} />
            <div className="text-center text-left">
                <h1 className="text-lg">Erin Lindford</h1>
                <h2 className="text-purple-500">Customer Support</h2>
                <p className="text-gray-600">erinlindford@example.com</p>
                <p className="text-gray-600">(555) 765-4321</p>
            </div>
        </div>
    </>
}
