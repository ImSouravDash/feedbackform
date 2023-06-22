import ContactPage from '@/app/components/ContactPage'


const page = async () => {
    const res = await fetch("http://localhost:3000/api/user")
    const data = await res.json()
    const mydata = data.user;
    console.log(data)

    return (
        <>
            <div className="text-white text-lg font-bold text-center">
                <h1 className='text-3xl font-bold'>
                    see data here
                </h1>
                <table className="min-w-full text-left mt-10 text-sm font-light">
                    <thead className="border-b text-center font-medium dark:border-neutral-500">
                        <tr>
                            <th scope="col" className="w-[334px] border-r-2">USERNAME</th>
                            <th scope="col" className="w-[334px] border-r-2">EMAIL-ID</th>
                            <th scope="col" className="w-[334px] border-r-2">PRODUCT</th>
                            <th scope="col" className="w-[534px] border-r-2">SUGGESTION</th>
                        </tr>
                    </thead>
                </table>
                {mydata.map((elem) => {
                    return (
                        <>
                            <ContactPage key={elem.id} {...elem} />
                        </>
                    )
                })}
            </div>
        </>
    )
}
export default page;