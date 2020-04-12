import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';
import { Link } from 'react-router-dom';

const style={
  maxHeight: '4000px',
  overflow: 'scroll'
}

class Appendix3Component extends React.Component{
  constructor(props){
    super(props);
    this.datasource = this.props.fields.data ? this.props.fields.data.datasource : null;
    
  }
  getSingleItem = () =>{
    if(this.datasource && 
        this.datasource.singleItem1.targetItem)
    {
      return this.datasource.singleItem1.targetItem;
    }
    return null;
  }
  getMultiItems = () => {
    if(this.datasource &&
        this.datasource.multiItem1.targetItems){
        return this.datasource.multiItem1.targetItems
    }
    return null;
  }
  render(){
    const single = this.getSingleItem();
    const multi = this.getMultiItems();
    return (<div>
      <h3>Connected GraphQL Sample</h3>
      { single && <Text field={single.pageTitle.jss} /> }
      { single && <Link to={single.url}><Text field={single.pageTitle} /></Link>}
      { multi && 
        <ul>
          {multi.map((value, index) => (
          <li key={index}>
            <Link to={value.url}><Text field={value.pageTitle} /></Link>    
          </li>    
          ))}
          </ul>
        }
      <div>
        <pre style={style}>
          {JSON.stringify(this.props, null, 2)}
        </pre>
      </div>
    </div>
    );
  }
}
export default Appendix3Component;
