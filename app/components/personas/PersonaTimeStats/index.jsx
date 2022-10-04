import Stat from './Stat'
import Totals from './Totals'

// This component needs to recieve every active user call.
// Calculate the total time wasted by adding each call
// Create an array of objects for each person
// obj {name: "Edna", time: 21.2, percentage: 21.2 / total * 100}

function index() {
  let data = [
    {
      name: 'Edna',
      time: 23.1,
      getPercent: function () {
        return Math.round((this.time / 50.44) * 100)
      },
    },
    {
      name: 'Tim',
      time: 0.14,
      getPercent: function () {
        return Math.round((this.time / 50.44) * 100)
      },
    },
    {
      name: 'Jane',
      time: 13.1,
      getPercent: function () {
        return Math.round((this.time / 50.44) * 100)
      },
    },
    {
      name: 'Pop',
      time: 20.1,
      getPercent: function () {
        return Math.round((this.time / 50.44) * 100)
      },
    },
  ]
  let totalTimeWasted = data.reduce((a, c) => a + c.time, 0)

  const top3TimeWasters = data
    .sort((a, b) => parseFloat(b.time) - parseFloat(a.time))
    .slice(0, 3)

  return (
    <div className='w-max'>
      <div className='grid grid-cols-2 gap-4'>
        {top3TimeWasters.map((d, i) => (
          <Stat key={i} totalTimeWasted={totalTimeWasted} persona={d} idx={i} />
        ))}
        <Totals totalTimeWasted={totalTimeWasted} />
      </div>
    </div>
  )
}

export default index
