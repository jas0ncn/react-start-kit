import * as React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';

export class Container extends React.Component <RouteComponentProps<any>, void> {
    render() {
        const { location: { pathname } } = this.props;

        return (
            <div>
                <h1>Hello World</h1>
                <p>Here is: {pathname}</p>
            </div>
        );
    }
}
