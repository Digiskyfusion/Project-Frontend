export default function TableComponent() {
  return (
    <div className="p-4 flex">
      <div className="max-w-7xl border border-gray-300 rounded-xl overflow-hidden ">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-3 text-left">Ad Option</th>
              <th className="border border-gray-300 p-3 text-left">Rates</th>
              <th className="border border-gray-300 p-3 text-left">Place Ads</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-3">Video Ad</td>
              <td className="border border-gray-300 p-3">₹47 - ₹2,657</td>
              <td className="border border-gray-300 p-3">
                <span className="cursor-pointer underline text-blue-600 hover:text-blue-800">
                  Book Now
                </span>
              </td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border border-gray-300 p-3">L Band</td>
              <td className="border border-gray-300 p-3">₹47 - ₹2,657</td>
              <td className="border border-gray-300 p-3">
                <span className="cursor-pointer underline text-blue-600 hover:text-blue-800">
                  Book Now
                </span>
              </td>
            </tr>
            <tr className="bg-white">
              <td className="border border-gray-300 p-3">I Band</td>
              <td className="border border-gray-300 p-3">₹47 - ₹2,657</td>
              <td className="border border-gray-300 p-3">
                <span className="cursor-pointer underline text-blue-600 hover:text-blue-800">
                  Book Now
                </span>
              </td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border border-gray-300 p-3">J Band</td>
              <td className="border border-gray-300 p-3">₹47 - ₹2,657</td>
              <td className="border border-gray-300 p-3">
                <span className="cursor-pointer underline text-blue-600 hover:text-blue-800">
                  Book Now
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
