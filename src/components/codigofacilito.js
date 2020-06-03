import React from "react";
import { useStaticQuery, graphql} from 'gatsby';

export default() => {
    const data = useStaticQuery(graphql`{

        cfJson {
            id
            data {
              username
              finished_courses {
                title
                url
              }
            }
          }

    }`);

    return (
        <section>
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mt-12 text-center">Cursos</h2>
                <div>
                    {data.cfJson.data.finished_courses.map((course) => (
                        <div key={course.url} className="shadow bg-purple mr-4 mt-10 text-center mb-12">
                            <div className="m-2 font-bold">{course.title}</div>
                            <a href={course.url} className="p-2 bg-purple-200 text-purple-700">{course.url}</a>
                        </div> 

                    ))}
                </div>
            </div>
        </section>
    )
}