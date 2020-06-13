import React from 'react';

class Category extends React.Component {
    constructor(props) {
        super(props);
        this.dropEnd = this.dropEnd.bind(this);
        this.dragOver = this.dragOver.bind(this);
    }
    
    dropEnd(e) {
        e.preventDefault();
        e.dataTransfer.dropEffect = "copy";
        const reward = e.dataTransfer.getData("reward_id")
        e.target.appendChild(document.getElementById(reward));
    }
    
    dragOver(e) {
        e.preventDefault();
        e.dataTransfer.dropEffect = "copy";
    }

    render() {
        return (
            <div 
                className="category-container"
                id={this.props.id}
                onDrop={this.dropEnd}
                onDragOver={this.dragOver}
            >
                <div className="category-title">
                    Category {this.props.id - 10}
                </div>

                <div className="border"/>

            </div>
        );

    }
};

export default Category;