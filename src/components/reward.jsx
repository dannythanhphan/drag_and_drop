import React from 'react';

class Reward extends React.Component {
    constructor(props) {
        super(props);
        this.dragStart = this.dragStart.bind(this);
        this.showButton = this.showButton.bind(this);
        // this.hideButton = this.hideButton.bind(this);
        this.deleteReward = this.deleteReward.bind(this);
    }

    // I had two ideas to try to leave the reward in place to drag and drop
    // the same reward in different categories. The first was to use 
    // e.dataTransfer.effectAllowed + dropEffect = "copy"
    // I must have either used it wrong or read the documents wrong because
    // I couldn't get it to copy the element that is being dragged. The other,
    // and objectively worst way, was to create multiple of the same rewards on
    // top of each other. I didn't try it because I feel it is a brute force way

    dragStart(e) {
        e.dataTransfer.effectAllowed = "copy";
        e.dataTransfer.setData("reward_id", e.target.id)
    }

    showButton(e) {
        if (e.currentTarget.parentElement.id > 10) {
            let buttonId = e.currentTarget.firstElementChild.id
            let button = document.getElementById(buttonId)
            button.style.display = "block";
        }
    }

    // hideButton(e) {
    //     if (e.currentTarget.parentElement.id > 10) {
    //         let buttonId = e.currentTarget.firstElementChild.id
    //         let button = document.getElementById(buttonId)
    //         button.style.display = "none";
    //     }
    // }

    deleteReward(e) {
        let rewardToDelete = e.target.parentElement.id
        let reward = document.getElementById(rewardToDelete);
        reward.parentNode.removeChild(reward);
    }

    render() {
        return (
            <div>
                <div className="reward-container">
                    <div className="reward-title">
                        Rewards
                    </div>

                    <div className="border"/>
                    
                    {/* reward 1 */}
                    <div 
                        className="coupon" 
                        id={Math.random()}
                        onDragStart={this.dragStart}
                        draggable={"true"}
                        onMouseEnter={this.showButton}
                        // onMouseOut={this.hideButton}
                    >
                        <button 
                            className="delete-button" 
                            id={Math.random()} 
                            onClick={this.deleteReward}
                        >
                            X
                        </button>
                        <p className="coupon-number">Reward 1</p>
                    </div>

                    {/* reward 2 */}
                    <div 
                        className="coupon" 
                        id={Math.random()} 
                        onDragStart={this.dragStart}
                        draggable={"true"}
                        onMouseEnter={this.showButton}
                    >
                        <button 
                            className="delete-button" 
                            id={Math.random()} 
                            onClick={this.deleteReward}
                        >
                            X
                        </button>
                        <p className="coupon-number">Reward 2</p>
                    </div>

                    {/* reward 3 */}
                    <div 
                        className="coupon" 
                        id={Math.random()} 
                        onDragStart={this.dragStart}
                        draggable={"true"}
                        onMouseEnter={this.showButton}
                    >
                        <button 
                            className="delete-button" 
                            id={Math.random()} 
                            onClick={this.deleteReward}
                        >
                            X
                        </button>
                        <p className="coupon-number">Reward 3</p>
                    </div>

                    {/* reward 4 */}
                    <div 
                        className="coupon" 
                        id={Math.random()} 
                        onDragStart={this.dragStart}
                        draggable={"true"}
                        onMouseEnter={this.showButton}
                    >
                        <button 
                            className="delete-button" 
                            id={Math.random()} 
                            onClick={this.deleteReward}
                        >
                            X
                        </button>
                        <p className="coupon-number">Reward 4</p>
                    </div>

                    {/* reward 5 */}
                    <div 
                        className="coupon" 
                        id={Math.random()} 
                        onDragStart={this.dragStart}
                        draggable={"true"}
                        onMouseEnter={this.showButton}
                    >
                        <button 
                            className="delete-button" 
                            id={Math.random()} 
                            onClick={this.deleteReward}
                        >
                            X
                        </button>
                        <p className="coupon-number">Reward 5</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Reward;