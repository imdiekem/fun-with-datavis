import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';

const mockData = [
	{
		title: 'Rhubarb',
		subTitle: '',
		eventKey: 'line-1',
		hasSymbol: true,
		hasNoData: true
	},
	{
		title: 'All other pies',
		subTitle: '',
		eventKey: 'line-2',
		hasSymbol: true,
		hasNoData: true
	}
];

const Legend = (props) => {
    const {
        legendData = mockData,
        hoverEvent,
        clickEvent,
        activeClickedKeys
    } = props;

    const [prevActiveHoveredKey, setPrevHoverKey] = useState([]);
    const [hoveredItem, setHoveredItem] = useState([]);
    const [hasData, setHasData] = useState(false);

    const getMouseEnter = (eventKey) => {
        if (!hasData) {
            return null;
        }

        setHoveredItem(eventKey);
    }

    const getMouseExit = () => {
        if (!hasData) {
            return null;
        }

        setHoveredItem(null);
    }

    const getLegendContent = (
        legendData,
        hoverEvent,
        clickEvent,
        activeClickedKeys
    ) => {
        return mockData.map(item => {
			const titleClassHovered = item.eventKey === hoveredItem ? 'legend-title--hovered' : '';
			const iconClassHovered = item.eventKey === hoveredItem ? 'legend-icon--hovered' : '';
			const toggledClassState = activeClickedKeys[item.eventKey] ? 'toggled-off' : 'toggled-on';
			const titleClassNoData = item.hasNoData ? 'legend-title--no-data' : '';
			const iconClassNoData = item.hasNoData ? 'legend-icon--no-data' : '';
            const iconClassZeroData = item.hasZeroData ? 'legend-icon--zero-data' : '';
            return (
                <Fragment
                    key={`legend-item-${item.title}${item.subTitle}`}
                >
                {item.title &&
						<div
							className={`legend-title ${titleClassHovered}
							legend-title--${toggledClassState}
							${titleClassNoData}`}
							onMouseEnter={(e) => { hoverEvent(e, item, getMouseEnter); }}
							onMouseLeave={(e) => { hoverEvent(e, item, getMouseExit); }}
							onClick={() => clickEvent(item.eventKey)}
						>
							{item.hasSymbol &&
								<div
									className={`legend-icon legend-icon--${item.eventKey}
									${iconClassHovered} legend-icon--${toggledClassState}
									${iconClassNoData}
									${iconClassZeroData}`}
								/>
							}
							{item.title}
							{item.subTitle &&
								<div
									className="legend-subtitle"
								>
									{item.subTitle}
								</div>
							}
						</div>
					}
					{item.content &&
						<div
							className="legend-content"
							onMouseEnter={(e) => getMouseEnter(e, item)}
							onMouseLeave={() => getMouseExit()}
							onClick={() => clickEvent(item.eventKey)}
						>
							{item.content}
						</div>
					}
                </Fragment>
            );
        });
    }

    return (
        <div
            className="metrics-legend"
        >
            {getLegendContent(
                mockData,
                hoverEvent,
                clickEvent,
                activeClickedKeys)
            }
        </div>
    );
}

Legend.propTypes = {
	legendData: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string,
			subtTitle: PropTypes.string,
			color: PropTypes.string,
			hoverColor: PropTypes.string,
			eventKey: PropTypes.string,
			hasSymbol: PropTypes.bool,
			hasNoData: PropTypes.bool,
			hasZeroData: PropTypes.bool
		})
	),
	activeHoveredKey: PropTypes.string,
	activeClickedKeys: PropTypes.object,
	hoverEvent: PropTypes.func,
	clickEvent: PropTypes.func
};
Legend.defaultProps = {
	legendData: [],
	activeHoveredKey: null,
	activeClickedKeys: {},
	hoverEvent: () => {},
	clickEvent: () => {}
};

export default Legend;