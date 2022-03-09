import React from 'react'

export default function Review() {
  return (
    <>
        <form>
          <div className="text-center">
            <div className="loginbox mx-auto mt-5 w-50 p-5 bg-light border border-2 rounded">
              <h1 className="mb-5">Add a new review</h1>
              <div className="input-group mb-5">
                <input className="form-control" type="text" placeholder="Name" />
              </div>
              <div className="input-group mb-3">
                {/* <span className="input-group-text">Message</span> */}
                <textarea className="form-control" placeholder="Write a view"  type="textarea" />
              </div>
              <button className="btn bg-success rounded border text-white mt-3" type='submit'>submit review</button>
            </div>
          </div>
        </form>
    </>
  )
}
