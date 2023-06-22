import React from 'react'

function ContactPage(elem) {
    return (
        <>
            <div className="flex text-center flex-col">
                <table className="w-full text-left text-sm font-light">
                    <tbody>
                        <tr className="border-b mx-2 dark:border-neutral-500">
                            <td className="text-center w-[334px] py-4">{elem.username}</td>
                            <td className="text-center w-[334px] py-4">{elem.email}</td>
                            <td className="text-center w-[334px] py-4">{elem.prod}</td>
                            <td className="w-[534px] text-center py-4">{elem.suggestion}</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ContactPage