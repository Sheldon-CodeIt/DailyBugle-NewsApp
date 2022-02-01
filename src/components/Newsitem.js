import React from 'react';

const Newsitem = (props)=> {

    let {title, description, imageUrl, newsUrl, author, date, source} = props;
    return (
        <div className="my-3">
            <div className="card">
              <div style={{display: 'flex', justifyContent: 'flex-end', position:'absolute', right:'0'}}>
                  <span className=" badge rounded-pill bg-success" >{source}</span>
              </div>
                
              <img src={!imageUrl?"https://assets-prd.ignimgs.com/2022/01/27/space-object-radio-signals-1643280053182.jpg?width=1280":imageUrl} height= "250px" width="250px" className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text"><small className="text-muted">By <b>{!author?"Unknown":author}</b> on {new Date(date).toGMTString()}</small></p>
                <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm  btn-dark">Read More</a>
               
              </div>
            </div>
        </div>
    );
  
}
export default Newsitem;


