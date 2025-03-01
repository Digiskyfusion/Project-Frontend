import React from 'react'

function Table2Component() {
  return (
    <>
    <div className="p-4 px-7 md:px-20">
      <table className="max-w-7xl">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-3 text-left">Top TV Channels</th>
            <th className="border border-gray-300 p-3 text-left">TMA Offer - Video Ad</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 p-3">STAR Plus</td>
            <td className="border border-gray-300 p-3">₹47 - ₹2,657</td>
          </tr>

          <tr className="bg-gray-100">
            <td className="border border-gray-300 p-3">Colors</td>
            <td className="border border-gray-300 p-3">₹47 - ₹2,657</td>
          </tr>

          <tr className="bg-white">
            <td className="border border-gray-300 p-3">Aaj tak</td>
            <td className="border border-gray-300 p-3">₹47 - ₹2,657</td>
          </tr>

          <tr className="bg-gray-100">
            <td className="border border-gray-300 p-3">Aastha</td>
            <td className="border border-gray-300 p-3">₹47 - ₹2,657</td>
          </tr>
        </tbody>
      </table>
    </div>
      
    </>
  )
}

export default Table2Component
