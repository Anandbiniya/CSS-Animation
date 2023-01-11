import React from 'react'

function FunctionPerson({e}) {
  return (
    <div>
         <div key={e.id}>
          I am {e.name} I am {e.age} old .I know{e.skill}
        </div>
    </div>
  )
}

export default FunctionPerson