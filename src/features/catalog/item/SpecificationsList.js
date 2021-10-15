import React from 'react';
import { normalCase } from '../../../auxiliary/utilities/normalCase';

const SpecificationsList = (props) => {
    const specifications = props.specifications.map((specification) => {
        return (
            <div key={specification.name}>
                <dt className="specification-name">
                    {`${normalCase(specification.name)}:`}
                </dt>
                <dd className="specification-value">{specification.value}</dd>
                <br />
            </div>
        );
    });
    return <dl className="person-specifications">{specifications}</dl>;
};

export { SpecificationsList };
