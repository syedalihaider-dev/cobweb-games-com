export default function AboutContent() {
  return (
    <section className="stacked-sec py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-72 h-72 bg-yellow-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Heading with underline */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Cobweb Games: Your <span className="text-yellow-500">Stacked</span> Game Development Company
          </h2>
          <div className="under w-20 h-1 bg-yellow-500 mx-auto mt-4"></div>
        </div>

        {/* Content with subtle border */}
        <div className="bg-gray-800/30 p-6 md:p-10 rounded-xl border border-gray-700/50 backdrop-blur-sm">
          <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
            The global games market is on a record-breaking trajectory, and by 2026 Q4, it&apos;s set to generate 
            <span className="text-yellow-400 font-semibold"> $522 billion</span> in revenue. And that&apos;s just the beginning, 
            as Statista forecasts the market will soar to an astonishing 
            <span className="text-yellow-400 font-semibold"> $691 billion</span> by the end of 2029. 
            This is a revolution in entertainment, technology, and opportunity.
          </p>
          
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            The game development company you choose in this upward growth cycle of the gaming industry 
            is the single biggest production success factor on any project. 
            <span className="text-yellow-400 font-semibold"> Cobweb Games</span> serves indie developers 
            shipping their first commercial title, AA studios scaling across multiple concurrent projects, 
            and gaming brands that need a plug-and-play art and development partner with a pipeline that 
            integrates into theirs. Game art services, game development, and animation under one roof, 
            managed as a single production and a power-packed pipeline from assets to environment art to 
            complete game builds.
          </p>
        </div>

      </div>
    </section>
  );
}
