import React from "react";
import list from "../../public/list.json"
import Cards from "./Cards";
import {Link} from "react-router-dom"
const Course = () => {
  return (
    <>
    <div className="dark:bg-slate-900 dark:text-white">
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
        <div className="pt-28 items-center justify-center text-center ">
          <h1 className="text-2xl md:text-4xl">
            We are delighted to have you{" "}
            <span className="text-pink-500">Here! :)</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
            impedit illo minus asperiores reiciendis exercitationem ullam neque
            vel odit, vero voluptatum quae earum nesciunt, nemo facere obcaecati
            nisi? Beatae earum nemo velit unde, minima, voluptatibus sapiente
            optio minus animi reiciendis corporis consequuntur natus facilis
            placeat odio illo quidem, recusandae quia aut necessitatibus? Dolor,
            voluptate magnam accusamus in voluptates soluta repellendus?
          </p>
          <Link to="/">
          <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">Back</button>
          </Link>
          
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
            {
                list.map((item)=>(
                    <Cards item={item} key={item.id}/>
                ))
            }
        </div>
      </div>
    </div>
      
    </>
  );
};

export default Course;
