var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
   return (
      <div>
         <h1 className="text-center page-title">Examples</h1>
         <p1>Here are a few locations to try out:</p1>
         <ol>
            <li>
               <Link to='/?location=Philadelpia'>Philadelpia, PA</Link>
            </li>
            <li>
               <Link to='/?location=Rio'>Rio, Brazil</Link>
            </li>
         </ol>
      </div>
   );
};

module.exports = Examples;
