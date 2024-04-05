import React, { useState } from 'react'
// import csv1 from '../assets/csv1.csv'

const Sidebar: React.FC = () => {
    const [csvFile, setCsvFile] = useState("csv1")

    return (
        <div className='flex flex-col gap-4'>
            <p className='text-xs font-bold'>Select a CSV file :</p>
            <div className='flex gap-2 items-center'>
                <select onChange={(e) => setCsvFile(e.target.value)} value={csvFile} className=' flex-1 text-xs font-bold h-12 w-full px-1 outline-none border-2 rounded border-blue-700 ' name="CSVselect" id="">
                    <option className='font-bold' value="csv1">Demon Slayer</option>
                    <option className='font-bold' value="csv2">Naruto</option>
                    <option className='font-bold' value="csv3">Solo Leveling</option>
                    <option className='font-bold' value="csv4">Death Note</option>
                </select>
                <button className=' h-12 bg-blue-700 p-3 text-xs font-bold text-white rounded'>Load Data</button>
            </div>
            <p className='text-xs font-bold'>Add Node to Flow :</p>
            <div className='flex gap-2 flex-wrap'>
                <button className='border-2 border-blue-700 rounded text-xs font-bold h-8 px-3 hover:bg-blue-100'>MAP</button>
                <button className='border-2 border-blue-700 rounded text-xs font-bold h-8 px-3 hover:bg-blue-100'>FILTER</button>
                <button className='border-2 border-blue-700 rounded text-xs font-bold h-8 px-3 hover:bg-blue-100'>SORT</button>
                <button className='border-2 border-blue-700 rounded text-xs font-bold h-8 px-3 hover:bg-blue-100'>REDUCE</button>
                <button className='border-2 border-blue-700 rounded text-xs font-bold h-8 px-3 hover:bg-blue-100'>SOME</button>
                <button className='border-2 border-blue-700 rounded text-xs font-bold h-8 px-3 hover:bg-blue-100'>EVERY</button>
                <button className='border-2 border-blue-700 rounded text-xs font-bold h-8 px-3 hover:bg-blue-100'>FIND</button>
                <button className='border-2 border-blue-700 rounded text-xs font-bold h-8 px-3 hover:bg-blue-100'>FIND-INDEX</button>
                <button className='border-2 border-blue-700 rounded text-xs font-bold h-8 px-3 hover:bg-blue-100'>INDEX-OF</button>
                <button className='border-2 border-blue-700 rounded text-xs font-bold h-8 px-3 hover:bg-blue-100'>LAST-INDEX-OF</button>
            </div>
        </div>
    )
}

export default Sidebar 