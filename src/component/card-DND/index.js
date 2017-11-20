import React, { Component } from 'react';
import { render } from 'react-dom';
import { SortableContainer, SortableElement, arrayMove } from 'react-sortable-hoc';

const SortableItem = SortableElement(({ value }) =>
    < li > {value}</li >
);

const SortableList = SortableContainer(({ items }) => {
    console.log('hihiihiih', items)
    return (
        <ul>
            {items.map((value, index) => (
                < SortableItem key={`item-${index}`} index={index} value={value} />
            ))}
        </ul>
    );
});

class SortableComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: this.props.notes,
        };
    }
    onSortEnd(oldIndex, newIndex) {
        this.setState({
            items: arrayMove(this.state.items, oldIndex, newIndex),
        });
    };
    render() {
        return (
            <SortableList items={this.state.items} onSortEnd={this.onSortEnd} />
        )
    }
}

export default SortableComponent;
