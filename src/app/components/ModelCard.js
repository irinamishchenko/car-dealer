const ModelCard = ({ name, model }) => {
  return (
    <div className="bg-gray-800 border-gray-700 rounded-lg p-8 text-white text-center">
      <h2 className="mb-7">{name}</h2>
      <p>{model}</p>
    </div>
  );
};
export default ModelCard;
