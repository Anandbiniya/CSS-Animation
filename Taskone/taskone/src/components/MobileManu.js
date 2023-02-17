import React, { Component } from "react";
import Mobile from "./Mobile";
// import 
export default class MobileManu extends Component {
  state = {
    mobiles: [
      { id: 1, name: "Mobile 1", position: 1 },
      { id: 2, name: "Mobile 2", position: 2 },
      { id: 3, name: "Mobile 3", position: 3 },
    ],
  };

  onDragOver = (event) => {
    event.preventDefault();
    const mobiles = [...this.state.mobiles];
    const draggedPosition = event.dataTransfer
      .getData("text/plain")
      .split(":")[1];
    const overPosition = getMobilePosition(event.clientY);
    if (draggedPosition !== overPosition) {
      const draggedIndex = mobiles.findIndex(
        (m) => m.position === parseInt(draggedPosition)
      );
      const overIndex = mobiles.findIndex(
        (m) => m.position === parseInt(overPosition)
      );
      mobiles[draggedIndex].position = parseInt(overPosition);
      if (draggedIndex < overIndex) {
        for (let i = draggedIndex + 1; i <= overIndex; i++) {
          mobiles[i].position--;
        }
      } else {
        for (let i = overIndex; i < draggedIndex; i++) {
          mobiles[i].position++;
        }
      }
      mobiles.sort((a, b) => a.position - b.position);
      this.setState({ mobiles });
    }
  };

  onDrop = (event) => {
    event.preventDefault();
    const data = event.dataTransfer.getData("text/plain");
    const [id, position] = data.split(":");
    const mobiles = [...this.state.mobiles];
    const index = mobiles.findIndex((m) => m.id === parseInt(id));
    if (index !== -1) {
      const newPosition = parseInt(position);
      mobiles[index].position = newPosition;
      mobiles.sort((a, b) => a.position - b.position);
      this.setState({ mobiles });
    }
  };

  render() {
    return (
      <div onDragOver={this.onDragOver} onDrop={this.onDrop}>
        {this.state.mobiles.map((m) => (
          <Mobile key={m.id} id={m.id} name={m.name} position={m.position} />
        ))}
      </div>
    );
  }
}

function getMobilePosition(y) {
  const mobiles = Array.from(document.querySelectorAll(".Mobile"));
  return mobiles.reduce(
    (closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = y - box.top - box.height / 2;
      if (offset < 0 && offset > closest.offset) {
        return {
          offset: offset,
          position: child.getAttribute("data-position"),
        };
      } else {
        return closest;
      }
    },
    { offset: Number.NEGATIVE_INFINITY }
  ).position;
}
