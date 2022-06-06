import React from 'react';

const Blog = () => {
    return (
        <div>
            <h2 className="text-2xl font-semibold tracking-tight text-gray-900">Q. What is the Difference between javascript and nodejs ?</h2>
            <p><span className="text-xl font-semibold tracking-tight">Answer: </span>
                First of all javascript is an programming language and nodejs is a javascript runtime environment. Where javascript is
                a client side language and node works as a server side environment. JavaScript can only run on the browser but node js can 
                run outside of the browser. JavaScript can be used for front end development and nodejs can be used for backend development.
                One of the major differences between JavaScript and node is that JavaScript run on different engine of different browser 
                but node js only run in v8 engine.
                </p>
            <h2 className="text-2xl mt-9 font-semibold tracking-tight text-gray-900">Q. When should use nodejs and when should use mongodb ?</h2>
            <p><span className="text-xl font-semibold tracking-tight">Answer:</span> 
                Technically MongoDB and nodejs both are two different tech stack. Where nodejs is a js engine used for developed complex application backend, MondoDB used for store the data in the database. 
                SO that we can say that we can use node for the CRUD operations and the operations happens in mongodb as mongodb is responsible for storing all the documents in database.
                so we can easily distinguish between the two technologies. If we need server based communication and operational application but need not to store any sort of data we can only use node js as it is server site.
                but if we need to store any kind of data we must nedd to use any database like mongodb.

                        </p>
            <h2 className="text-2xl mt-9 font-semibold tracking-tight text-gray-900">Q. What is the Differences between sql and no sql databases ?</h2>
            <p><span className="text-xl font-semibold tracking-tight">Answer:</span> </p>


            <table className="table border-2 p-2">
  <thead>
    <tr>
      <th className='p-4'>SQL</th>
      <th className='p-4'>No SQL</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className='p-4'>SQL databases scale vertically</td>
      <td className='p-4'>NoSQL databases scale horizontally</td>
    </tr>
    <tr>
      <td className='p-4'>SQL databases are table-based</td>
      <td className='p-4'>NoSQL databases are document, key-value, graph, or wide-column stores</td>
    </tr>
    <tr>
      <td className='p-4'>SQL are relational database</td>
      <td className='p-4'>No SQL are non-relational database</td>
    </tr>
    <tr>
      <td className='p-4'>SQL databases excel in multi-row transactions</td>
      <td className='p-4'>NoSQL excels at unstructured data like documents and JSON</td>
    </tr>
    <tr>
      <td className='p-4'>SQL databases are table-based</td>
      <td className='p-4'>NoSQL databases are document, key-value based</td>
    </tr>
  </tbody>
</table>

        </div>
    );
};

export default Blog;