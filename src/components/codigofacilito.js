import React from "react";
import { useStaticQuery, graphql} from 'gatsby';
import Posts from './posts';
import Certificate from './certificate';

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

                <Posts
                    data={data.cfJson.data.finished_courses}
                    title="Cursos"
                    card={Certificate}
                />

            </div>
        </section>
    )
}