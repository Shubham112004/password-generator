import React, { useCallback, useRef, useState, useEffect } from "react";
import Middle from "./Middle";

function Start() {
    const [length, setLength] = useState(8)
    const [numberAllowed, setNumberAllowed] = useState(false)
    const [characterAllowed, setCharacterAllowed] = useState(false)
    const [password, setPassword] = useState('')

    const passwordRef = useRef(null)

    const passwordGenerated = useCallback(() => {
        let pass = ''
        let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
        if (numberAllowed) str += '0123456789'
        if (characterAllowed) str += '!@#$%&_-'

        for (let i = 1; i <= length; i++) {
            let char = Math.floor(Math.random() * str.length + 1)
            pass += str.charAt(char)
            // console.log(pass);
        }

        setPassword(pass)

    }, [length, numberAllowed, characterAllowed, setPassword])

    const copyPasswordToClipboard = useCallback(() => {
        passwordRef.current?.select()
        // passwordRef.current?.setSelectionRange(0, 5)
        window.navigator.clipboard.writeText(password)
        document.getElementById('middlePart').style.display = "flex"

    }, [password])

    useEffect(() => {
        passwordGenerated()
    }, [length, numberAllowed, characterAllowed, passwordGenerated])

    return (

        <div className="mx-auto max-w-7xl px-2 py-10 lg:px-0">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <div className="w-full md:w-1/2">
                    <h2 className="text-3xl font-bold text-black text-center">Get your Password ready with our Password Generator!!</h2>
                    <p className="mt-2 text-gray-600 text-justify">
                        Generate and securely store strong, unique passwords for all your online accounts. Customize your passwords based on your preferences, and keep track of them along with their purposes directly in the app. Enhance your online security with ease and convenience.
                    </p>
                </div>
                <div className="mt-10 w-full md:w-1/2 lg:mt-0">
                    <div>
                        <form className="flex lg:justify-center">
                            <div className="flex w-full max-w-md items-center space-x-2">
                                <input
                                    className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-4 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                    type="text"
                                    placeholder="Your password is here"
                                    value={password}
                                    ref={passwordRef}
                                    readOnly
                                />
                                <button
                                    type="button"
                                    className="rounded-md bg-black px-3  text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                    onClick={copyPasswordToClipboard}
                                >
                                    Copy & Use
                                </button>
                            </div>

                        </form>

                    </div>
                    <div className="mt-5">
                        <div className="flex lg:justify-center">
                            <input type="range" min={4} max={20} value={length}
                                className='cursor-pointer'
                                onChange={(e) => { setLength(e.target.value) }} />
                            <label className="ms-2">Length : ({length})</label>
                            <input className="ms-4" type="checkbox" onChange={() => { setNumberAllowed((prev) => !prev) }} />
                            <label className="ms-2">Numbers</label>
                            <input className="ms-4" type="checkbox" onChange={() => { setCharacterAllowed((prev) => !prev) }} />
                            <label className="ms-2">Characters</label>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default Start