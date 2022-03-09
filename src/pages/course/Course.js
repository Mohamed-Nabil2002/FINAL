
import CourseCards from "../courseCards/CourseCards";
import "./Course.css"
export default function Course() {
  return (
    <>
      <section className="course bg-light">
        <div className="container h-100">
          <div className="searchBar d-flex justify-content-center align-items-center w-100 h-100">
            <form className="d-flex w-75 justify-content-center">
              <select id="courses" name="courseCat" className="w-25 px-3">
                <optgroup label="Categories" />
                <option value="programming" selected="selected">
                  Programming
                </option>
                <option value="hacking">Hacking</option>
                <option value="testing">Testing</option>
                <option value="embaded">Embaded</option>
              </select>
              <input
                type="search"
                className="w-50 px-2 py-2 mx-2"
                name="search"
              />

              <button className="btn btn-light px-3 py-2 bg-dark text-white"
              
              > 
                Search
              </button>
            </form>
          </div>
        </div>
      </section>

      <CourseCards /> 
   
    </>
  );
}
