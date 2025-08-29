export default function App() {
  return (
    <div className="bg-gray-950 min-h-screen w-full flex items-center justify-center">
      <div className="p-4 bg-gray-900/40 border border-gray-800 w-96 h-96 hover:border-cyan-500/60 transition flex flex-col rounded-lg">

        <h1 className="text-white text-lg font-semibold mb-2">Messaging App</h1>

        <div className="flex-1 overflow-y-auto mb-2">
          <p className="text-gray-300">Hello 👋</p>
          <p className="text-gray-300">This is a test message.</p>
        </div>

        <div className="flex gap-1">
          <input
            type="text"
            placeholder="Enter Message"
            className="flex-1 px-3 py-2 bg-gray-950 text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-cyan-500 hover:border-cyan-500"
          />
          <button className="px-3 py-2 bg-cyan-600 text-white rounded-lg">
            Send
          </button>
        </div>

      </div>
    </div>
  )
}
