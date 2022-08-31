import React from 'react'
import {useRouter} from 'next/router'



const ProjectId = () => {
    const router = useRouter();
    console.log(router.query);

  return (
    <div>Project Name</div>
  )
}

export default ProjectId