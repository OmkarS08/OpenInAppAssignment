import React from 'react'
import TableBody from './TableBody'

const Table = ({data}) => {

    const DarkMode = localStorage.getItem('DarkMode')
    console.log(data)

    return (
        <div>
         <h1 class="text-2xl font-bold">Upload CSV</h1>
         <div class ='flex justify-center items-center' >
            <table class="w-3/4  min-w-half divide-y divide-gray-200 border-4">
                <thead>
                    <tr>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">SI No.</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Links</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Prefix</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Add Tags</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Selected Tags</th>
                    </tr>
                </thead>
                <tbody class={` border-1 w-1/2 divide-y divide-gray-200`}>
                    <TableBody data ={data} />
                </tbody>
            </table>
            </div>
        </div>
    )
}

export default Table