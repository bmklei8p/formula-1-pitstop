import React from 'react'

const ConstructorStandingsTable = ({standings}) => {
    return (
        <div className='lg:w-1/2 sm:pt-6'>
            {/* table header */}
            <div className="bg-slate-300 px-6 py-4 w-1/10 max-w-lg mx-auto shadow-lg flex items-start border-solid border-red-500 border-b-[3px]">
                <div className="basis-1/5 shrink-0">
                    <h1 className='font-medium text-lg'>Position</h1>
                </div>
                <div className="w-full basis-3/5 md:flex-row">
                    <div className="text-xl font-medium text-black">Team Name</div>
                </div>
                <p className='font-medium text-lg basis-1/5'>Points</p>
            </div>
            {/* map through standings and display each position */}
            {standings.map((pos) => (
                <div key={pos.Constructor?.name} className="px-6 py-4 max-w-lg mx-auto shadow-lg flex items-start even:bg-slate-200 odd:bg-slate-300">
                    <div className="shrink-0 basis-1/5">
                        <h1 className='text-center'>{pos.position}</h1>
                    </div>
                    <div className="w-full md:flex-row basis-3/5">
                        <div className="text-xl text-black">{pos.Constructor?.name}</div>
                    </div>
                    <p className='text-center basis-1/5'>{pos.points}</p>
                </div>
            ))}
        </div>
    )
  }

  export default ConstructorStandingsTable