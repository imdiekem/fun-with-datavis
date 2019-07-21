import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ScatterPlot from '../../components/DataVis/ScatterPlot';
import Card from '../../components/Card';

import { StyledScatterPlots } from './styled-components';

const ScatterPlots = () => {
    const [lifePriorities, updateLifePriorities] = useState({});

    const getLifePriorities = () => {
        axios.get('https://priorities-over-time.firebaseio.com/life.json')
        .then(result => {
            const newLifePriorities = { ...lifePriorities, ...result.data };
            updateLifePriorities(newLifePriorities);
        })
        .catch(err => console.log(err));
    }

    useEffect(() => {
        getLifePriorities();
    }, []);

    return (
        <>
            <StyledScatterPlots>
                <h2>.Scatter Plots</h2>
                <Card>
                    <p>
                        Culpa nisi culpa nisi pariatur cillum excepteur occaecat enim nulla irure non duis.
                        Officia elit enim dolore ea ut irure nulla qui. Ut mollit cillum officia occaecat aliqua laboris aute ut.
                        Commodo excepteur exercitation reprehenderit consequat irure pariatur elit qui proident nulla cillum ea.
                        Cupidatat velit anim esse amet mollit irure cupidatat ex duis nostrud esse sunt ullamco.
                        Do dolore fugiat nisi incididunt et tempor. Excepteur duis commodo eiusmod irure dolore.
                    </p>
                </Card>
                <Card>
                    <p>
                        Culpa nisi culpa nisi pariatur cillum excepteur occaecat enim nulla irure non duis.
                        Officia elit enim dolore ea ut irure nulla qui. Ut mollit cillum officia occaecat aliqua laboris aute ut.
                        Commodo excepteur exercitation reprehenderit consequat irure pariatur elit qui proident nulla cillum ea.
                        Cupidatat velit anim esse amet mollit irure cupidatat ex duis nostrud esse sunt ullamco.
                        Do dolore fugiat nisi incididunt et tempor. Excepteur duis commodo eiusmod irure dolore.
                    </p>
                </Card>
            </StyledScatterPlots>
            <div>
                <ScatterPlot />
            </div>
        </>
    );
};

export default ScatterPlots;