import React, { Component } from "react";
import { Route,
    useParams,
    useRouteMatch} from 'react-router-dom'
import getAllCategories from "../../services/Categories";
// import PropTypes from 'prop-types';



class PopularItems extends Component {
    state = {
        data: []
    };
    constructor(props){

        super(props);
    }
    /*static propTypes = {
      customAttribute: PropTypes.string
  };

  static defaultProps = {
      customAttribute: '1'
  };*/
    async componentDidMount() {
        const categList = await getAllCategories();
        //console.log("categList = ", categList.data.data);
        this.setState({ data: categList.data.data} );
    }

    render() {
        const p = this.props;
        console.log("p = ", p);
        console.log("data = ", this.state.data[0] );
        return (
            <main className="PopularItems">
                <h1 className="section-title">Popular items</h1>

                { this.state.data.map((item, index) => {
                        return <h2>{item.name}</h2>
                    })
                }
            </main>
        );
    }
}

export default PopularItems;
