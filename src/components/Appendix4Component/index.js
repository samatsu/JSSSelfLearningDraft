import React from 'react';
import { Text, withSitecoreContext } from '@sitecore-jss/sitecore-jss-react';
import { Link as RouterLink } from 'react-router-dom';
import { loader as gqlLoader } from 'graphql.macro';
import GraphQLData from '../../lib/GraphQLData';

const ConnectedDemoQuery = gqlLoader('./query.graphql');

const Appendix4Component = (props) => {
  const graphQLResult = props.connectedQuery;

  // Async loading and error handling
  // Remember to never return null from a JSS component when loading,
  // this will break Experience Editor.
  const { error, loading } = graphQLResult;

  // Query results load in using the name of their root field (see query.graphql)
  const { item } = graphQLResult;
  return (<div>
      { loading && <p className="alert alert-info">GraphQL query is executing...</p>}
      { error && <p className="alert alert-danger">GraphQL query error: {error.toString()}</p>}
      { item && (
        <ul>
          {item.children.map (c => (
            <li key={c}>
              <RouterLink to={c.url}>{c.name}</RouterLink>
            </li>
          ))}
        </ul>
      )}
    </div>);
}
export default withSitecoreContext()(GraphQLData(ConnectedDemoQuery, { name: 'connectedQuery' })(Appendix4Component));


// const Appendix4Component = (props) => {
//   const disconnectedMode = props.sitecoreContext.route.databaseName === 'available-in-connected-mode';
//   return <React.Fragment>
//     <h3>Appendix 4 Component</h3>
//     { !disconnectedMode && (
//       <div>Disconnected Mode</div>
//     )}
//     { disconnectedMode && (
//       <div>Connected Mode</div>
//     )}
//   </React.Fragment>
// };
// export default (Appendix4Component);

