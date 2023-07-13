const ConstructorSingleRaceStandingsTable = ({ standings }) => {
  const constructorResults = {
    'mercedes': {
        'name': 'Mercedes',
        'points': 0,
    },
    'red_bull': {
        'name': 'Red Bull',
        'points': 0,
    },
    'mclaren': {
        'name': 'McLaren',
        'points': 0,
    },
    'ferrari': {
        'name': 'Ferarri',
        'points': 0,
    },
    'aston_martin': {
        'name': 'Astom Martin',
        'points': 0,
    },
    'alpine': {
        'name': 'Alpine',
        'points': 0,
    },
    'alphatauri': {
        'name': 'Alpha Tauri',
        'points': 0,
    },
    'alfa': {
        'name': 'Alfa Romeo',
        'points': 0,
    },
    'haas': {
        'name': 'Haas',
        'points': 0,
    },
    'williams': {
        'name': 'Williams',
        'points': 0,
    },
  }
    // loop through standings and add up points for each constructor
  const addPointsToConstructor = (standings) => {
    for (let i = 0; i < standings.length; i++) {
        const constructor = standings[i].Constructor.constructorId;
        const points = parseInt(standings[i].points);
        constructorResults[constructor].points += points;
        }
    }
  addPointsToConstructor(standings);
    // sort constructors by points
  const sortedConstructors = Object.values(constructorResults).sort((a, b) => b.points - a.points);
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
    {sortedConstructors.map((constructor, index) => (
        <div key={index} className="px-6 py-4 max-w-lg mx-auto shadow-lg flex items-start even:bg-slate-200 odd:bg-slate-300">
            <div className="shrink-0 basis-1/5">
                <h1 className='text-center'>{index + 1}</h1>
            </div>
            <div className="w-full md:flex-row basis-3/5">
                <div className="text-xl text-black">{constructor.name}</div>
            </div>
            <p className='text-center basis-1/5'>{constructor.points}</p>
        </div>
    ))}
</div>
  )
}

export default ConstructorSingleRaceStandingsTable