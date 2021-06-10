import React, { useEffect, useState } from "react";

const NewsApi = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const URL =
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=199288fa3ea046d7b831d740fd82c1e0";
      const response = await fetch(URL);
      const responseJson = await response.json();
      setData(responseJson.articles);
    };
    getData();
  }, []);

  return (
    <>
      <h1 className="text-center my-4">Welcome to Top News of India</h1>
      {/* Colasp boxes */}
      <div className="container my-2">
        {data.map((arrayElem, index) => {
          return (
            <>
              <div className="accordion" id="accordionExample" key={index}>
                <div className="card">
                  <div className="card-header" id="heading">
                    <h2 className="mb-0">
                      <button
                        className="btn btn-link btn-block text-left"
                        type="button"
                        outline="none"
                        data-toggle="collapse"
                        data-target="#collapse"
                        aria-expanded="true"
                        aria-controls="collapse"
                      >
                        <h3>
                          <h5 className="text-success">Headline:</h5>
                          <a className="text-danger" href={arrayElem.url}>
                            {" "}
                            {arrayElem.title}
                          </a>
                        </h3>
                      </button>
                    </h2>
                  </div>

                  <div
                    id="collapseOne"
                    className="collapse show"
                    aria-labelledby="heading"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body">
                      {arrayElem.content}
                      <a href={arrayElem.url}> Read More..</a>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default NewsApi;
