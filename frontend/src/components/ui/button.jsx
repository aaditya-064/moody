export function Button({ children, onClick }) {
  return (
    <button
      onClick={() => {
        console.log("Button clicked!");
        if (onClick) onClick();
      }}
      className="p-2 bg-blue-500 text-white rounded"
    >
      {children}
    </button>
  );
}
