import Link from "next/link";
import '../../styles/globals.css';
import { lessonsArray } from '@/assets/servicesData/services';
import { notFound } from "next/navigation";


  export const getSingleLesson = async (id: any) => {
    const data = lessonsArray[id];
  
    if ( !data ) {
      notFound()
    }
  
    return data;  
  }

  export default async function Sidenav({ params } : {
    params: { courseId: string }
}) {


  const lesson = await getSingleLesson(params.courseId)
  // console.log(params.courseId)
  // console.log(lesson);

  return (
    <div className='flex'>

       {/* sidebar */}
      
      <div className='p-4'>

        {/* info according to link i.e teas/math/intro brings all data about introduction */}
      <h2>course {lesson.lessonTitle} details</h2>
      </div>
      
      
      
    </div>
    
  )
}




