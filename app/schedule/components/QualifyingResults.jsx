import Link from "next/link"

const QualifyingResults = ({ qualifyingResults }) => {

    return (
            <div className="flex flex-col w-full max-w-5xl justify-center">
                {/* table header */}
                <div className="flex justify-center flex-col bg-background" >
                <div className="flex flex-row md:hidden">
                  <div className={`px-4 py-2 w-full flex items-center bg-slate-700`}>
                        <div className="basis-1/5">
                            <h1 className='text-center text-2xl text-green-700 font-bold '>Q1</h1>
                        </div>
                        <div className="basis-3/5">
                            <div className="text-2xl text-blue-700 font-bold">Q2</div>
                        </div>
                        <div>
                            <p className='basis-1/5 text-2xl text-red-700 font-bold'>Q3</p>
                        </div>
                    </div>
                    <div className="hidden md:block md:w-3/4">
                    </div>
                    </div>
                <div className="flex flex-row bg-background">
                
                <div className={`px-4 py-4 w-full flex items-center border-b-[3px] md:ml-8 bg-background border-red-500`}>
                      <div className="basis-1/5">
                          <h1 className='text-center text-2xl'>Position</h1>
                      </div>
                      <div className="basis-3/5">
                          <div className="text-2xl">Driver</div>
                      </div>
                      <div>
                          <p className='basis-1/5 text-2xl'>Times</p>
                      </div>
                  </div>
                  <div className="hidden md:block md:w-3/4 bg-background">
                  </div>
                </div>
                </div>
                {qualifyingResults.map((pos) => (
                    <div key={pos.position} className="flex justify-center md:ml-8 flex-row even:bg-slate-300 dark:even:bg-slate-800 dark:odd:bg-slate-700 odd:bg-slate-200" >
                        <div className={`px-4 py-4 w-full flex items-center border-r-8
                        ${parseInt(pos.position) <= 10 ? `border-green-700` : (parseInt(pos.position) <= 15 ? `border-blue-700` : `border-red-700`)}`}>
                            <div className="basis-1/5">
                                <h1 className='text-center'>{pos.position === '1' ? 'Pole' : pos.position}</h1>
                            </div>
                            <Link href={`/drivers/${pos.Driver.driverId}`} className="basis-3/5">
                                <div className="text-xl">{pos.Driver.givenName + " " + pos.Driver.familyName}</div>
                            </Link>
                            <div>
                                <p className='basis-1/5 text-lg'>{parseInt(pos.position) <= 10 ? pos.Q3 : (parseInt(pos.position) <= 15 ? pos.Q2 : pos.Q1)}</p>
                            </div>
                        </div>
                        <div className={`${(parseInt(pos.position) === 5 || parseInt(pos.position) === 12 || parseInt(pos.position) === 17) ? `hidden md:block md:w-3/4 bg-background` : `hidden md:block md:bg-background w-3/4`}`}>
                            <h1 className={`${parseInt(pos.position) === 5 ? `block text-6xl text-green-700 text-left tracking-tight pl-8` : `hidden`}`}>Q1</h1>
                            <h1 className={`${parseInt(pos.position) === 13 ? `block text-6xl text-blue-700 text-left tracking-tight pl-8` : `hidden`}`}>Q2</h1>
                            <h1 className={`${parseInt(pos.position) === 18 ? `block text-6xl text-red-700 text-left tracking-tight pl-8` : `hidden`}`}>Q3</h1>
                        </div>
                    </div>
                ))}
            </div>
        )
    
    }
    
    export default QualifyingResults
    
    
