# BiteSpeed Frontend Task: Chatbot Flow Builder

This project is a simple Chatbot flow builder built with React and [React Flow](https://reactflow.dev/). The builder allows users to create chatbot flows by connecting multiple message nodes in a visual interface. 

The project is hosted at [https://bite-speed-frontend-task.vercel.app/](https://bite-speed-frontend-task.vercel.app/).

## Features

- **Text Node**: 
  - Supports adding multiple text message nodes.
  - Nodes can be added to the flow by dragging and dropping from the Nodes Panel.
- **Nodes Panel**: 
  - Houses all types of nodes that the flow builder supports.
  - Currently supports a message node, but is extensible for future node types.
- **Edge**: 
  - Connects two nodes together.
  - Ensures that each node can only have one outgoing edge.
- **Source Handle**: 
  - Source of a connecting edge.
  - Can have only one edge originating from a source handle.
- **Target Handle**: 
  - Target of a connecting edge.
  - Can have multiple edges connecting to a target handle.
- **Settings Panel**: 
  - Replaces the Nodes Panel when a node is selected.
  - Allows editing of the text of the selected text node.
- **Save Button**: 
  - Saves the flow.
  - Displays an error if more than one node has empty target handles.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/bite-speed-frontend-task.git
   cd bite-speed-frontend-task
