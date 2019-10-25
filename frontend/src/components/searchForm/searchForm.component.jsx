import React from 'react';
import './searchForm.styles.scss';
import { NavLink, withRouter } from 'react-router-dom';

class SearchForm extends React.Component {
    state = {
        searchedString: ''
    };

    componentWillMount() {
        this.unlisten = this.props.history.listen((location, action) => {
            this.setState({ searchedString: '' });
        });
    }
    componentWillUnmount() {
        this.unlisten();
    }

    handleSearch = event => {
        this.setState({ searchedString: event.target.value });
    };

    render() {
        return (
            <div className="search-form">
                <input
                    className="search-form__input"
                    type="text"
                    onChange={this.handleSearch}
                    name="search-input"
                    value={this.state.searchedString}
                />
                <NavLink
                    to={{
                        pathname: `/searchProducts`,
                        state: {
                            searchedString: this.state.searchedString
                        }
                    }}
                >
                    <button className="search-form__button" type="button">
                        {' '}
                        Find{' '}
                    </button>
                </NavLink>
            </div>
        );
    }
}

export default withRouter(SearchForm);
