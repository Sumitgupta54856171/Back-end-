const Dashboard = () => {
  return (
    <div className="h-screen w-full grid grid-cols-1 grid-rows-[20%_40%_40%]">
      <div className=" w-full bg-blue-400 h-full">

      </div>
      <div className="h-96 w-full bg-red-400 grid grid-cols-[60%_30%] gap-[10%] h-full" >
        <div className=" max-w-ful bg-green-300 h-full">

        </div>
        <div className="max-w-full bg-amber-950 h-full">

        </div>
        

      </div>
      <div className="flex-1 w-full h-5/5 bg-yellow-400">

      </div>
    </div>
  )
}

export default Dashboard;