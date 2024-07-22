import React from "react";

function End() {
    return (

        <section id="endPart" className="mx-auto w-full max-w-7xl px-4 py-4 mt-10">
            <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
                <div>
                    <h2 className="text-lg font-semibold">Stored Passwords and Their Purposes</h2>
                    <p className="mt-1 text-sm text-gray-700">
                        This is a list of all generated passwords and their purposes.
                    </p>
                </div>

            </div>
            <div className="mt-6 flex flex-col">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="px-12 py-3.5 text-left text-sm font-normal text-gray-700"
                                        >
                                            <span>Purpose </span>
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-12 py-3.5 text-left text-sm font-normal text-gray-700"
                                        >
                                            Generated Password
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-12 py-3.5 text-left text-sm font-normal text-gray-700"
                                        >
                                            Date Created
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                    <tr>
                                        <td className="whitespace-nowrap px-4 py-4">
                                            <div className="flex items-center">
                                                <div className="ml-4">
                                                    <div className="text-sm font-medium text-gray-900">
                                                        John Doe
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="whitespace-nowrap px-12 py-4">
                                            <div className="text-sm text-gray-900 ">Front-end Developer</div>
                                        </td>
                                        <td className="whitespace-nowrap px-12 py-4">
                                            <div className="text-sm text-gray-900 ">Front-end Developer</div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default End