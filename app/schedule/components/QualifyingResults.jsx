const QualifyingResults = ({ qualifyingResults }) => {

    return (
            <div className="flex flex-col w-full">
                {/* table header */}
                {/* <div className="bg-slate-200 py-4 w-full border-solid border-red-500 border-b-[3px]">
                    <div className="basis-1/5 shrink-0">
                        <h1 className='font-medium text-lg'>Position</h1>
                    </div>
                    <div className="w-full basis-3/5 md:flex-row">
                        <div className="text-xl font-medium text-black">Driver</div>
                    </div>
                    <div>
                        <p className='font-medium text-lg basis-1/5'>Time</p>
                    </div>
                </div> */}
                {qualifyingResults.map((pos) => (
                    <>
                    {pos.position === '1' ? 
                    <div className="flex flex-row justify-center w-full">
                        <div className="">
                            <h1>Position</h1>
                        </div>
                        <div>
                            <h1>Driver</h1>
                        </div>
                        <div>
                            <h1>Time</h1>
                        </div>
                    </div>
                    : null}
                    <div key={pos.position} className="flex justify-center flex-row even:bg-slate-300 odd:bg-slate-200" >
                        <div className={`px-4 py-4 w-full flex items-center border-r-8
                        ${parseInt(pos.position) <= 10 ? `border-green-700` : (parseInt(pos.position) <= 15 ? `border-blue-700` : `border-red-700`)}`}>
                            <div className="basis-1/5">
                                <h1 className='text-center'>{pos.position === '1' ? 'Pole' : pos.position}</h1>
                            </div>
                            <div className="basis-3/5">
                                <div className="text-xl text-black">{pos.Driver.givenName + " " + pos.Driver.familyName}</div>
                            </div>
                            <div>
                                <p className='basis-1/5 text-lg'>{parseInt(pos.position) <= 10 ? pos.Q3 : (parseInt(pos.position) <= 15 ? pos.Q2 : pos.Q1)}</p>
                            </div>
                        </div>
                        <div className={`${(parseInt(pos.position) === 5 || parseInt(pos.position) === 12 || parseInt(pos.position) === 17) ? `hidden md:block md:w-3/4 bg-slate-200` : `hidden md:block md:bg-slate-200 w-3/4`}`}>
                            <h1 className={`${parseInt(pos.position) === 5 ? `block text-6xl text-green-700 text-left tracking-tight pl-8` : `hidden`}`}>Q1</h1>
                            <h1 className={`${parseInt(pos.position) === 13 ? `block text-6xl text-blue-700 text-left tracking-tight pl-8` : `hidden`}`}>Q2</h1>
                            <h1 className={`${parseInt(pos.position) === 18 ? `block text-6xl text-red-700 text-left tracking-tight pl-8` : `hidden`}`}>Q3</h1>
                        </div>
                    </div>
                    </>
                ))}
            </div>
        )
    
    }
    
    export default QualifyingResults
    
    
