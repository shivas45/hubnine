import ReactFlow, { addEdge, Controls, Background } from 'react-flow-renderer';

const Canvas = () => {
  const [elements, setElements] = useState([]);

  const addCard = () => {
    const id = `${elements.length + 1}`;
    const newCard = {
      id,
      data: { label: <DraggableCard id={id} initialText={'Sample Text'} /> },
      position: { x: Math.random() * 250, y: Math.random() * 250 },
    };
    setElements([...elements, newCard]);
  };

  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'scroll', position: 'relative' }}>
      <button onClick={addCard}>Add Card</button>
      <ReactFlow
        elements={elements}
        onConnect={(params) => setElements((els) => addEdge(params, els))}
        style={{ width: '100%', height: '90%' }}
      >
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
};

export default Canvas;

